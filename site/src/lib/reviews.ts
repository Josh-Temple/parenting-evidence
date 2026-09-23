import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

type ReviewConfig = {
  slug: string;
  folder: string;
  domain: string;
  ageLabel: string;
  ageBands: string[];
};

export type ReviewSummary = ReviewConfig & {
  title: string;
  summary: string;
  status: string;
  statusLabel: string;
  lastSearched: string;
  searchText: string;
};

export type ReviewDetail = ReviewSummary & {
  reviewHtml: string;
  evidenceHtml: string;
  searchHtml: string;
};

const ROOT = process.cwd();

const REVIEW_CONFIGS: ReviewConfig[] = [
  {
    slug: "shared-reading-language",
    folder: "Q001-shared-reading-language",
    domain: "遊び・学習",
    ageLabel: "0〜6歳",
    ageBands: ["0-1", "1-3", "3-6"]
  },
  {
    slug: "screen-time-language",
    folder: "Q002-screen-time-language",
    domain: "スクリーン",
    ageLabel: "0〜6歳",
    ageBands: ["0-1", "1-3", "3-6"]
  },
  {
    slug: "time-out-behavior",
    folder: "Q003-time-out-behavior",
    domain: "行動・しつけ",
    ageLabel: "主に2〜6歳",
    ageBands: ["1-3", "3-6"]
  },
  {
    slug: "sleep-training",
    folder: "Q004-sleep-training",
    domain: "睡眠",
    ageLabel: "主に0〜1歳",
    ageBands: ["0-1"]
  },
  {
    slug: "early-childcare-development",
    folder: "Q005-early-childcare-development",
    domain: "保育・発達",
    ageLabel: "主に0〜3歳",
    ageBands: ["0-1", "1-3", "3-6"]
  }
];

function readText(...segments: string[]): string {
  return fs.readFileSync(path.join(ROOT, ...segments), "utf8");
}

function getReviewMarkdown(config: ReviewConfig): string {
  return readText("reviews", config.folder, "review.md");
}

function extractTitle(markdown: string): string {
  const firstHeading = markdown
    .split(/\r?\n/)
    .find((line) => line.startsWith("# "));
  return firstHeading?.replace(/^#\s+/, "").trim() ?? "Evidence Review";
}

function extractMeta(markdown: string, label: string): string {
  const pattern = new RegExp(`^${label}:\\s*(.+?)\\s*$`, "mi");
  return markdown.match(pattern)?.[1]?.trim() ?? "";
}

function extractSection(markdown: string, heading: string): string {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === `## ${heading}`);
  if (start === -1) return "";

  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^##\s+/.test(lines[index])) {
      end = index;
      break;
    }
  }

  return lines.slice(start + 1, end).join("\n").trim();
}

function plainText(markdown: string): string {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_>#`~|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, max = 190): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

function statusLabel(status: string): string {
  if (status.toUpperCase().includes("DRAFT")) return "調査草稿";
  if (status.toUpperCase().includes("PUBLISHED")) return "公開";
  if (status.toUpperCase().includes("REVIEW")) return "確認中";
  return status || "状態未設定";
}

function renderMarkdown(markdown: string): string {
  return marked.parse(markdown, {
    async: false,
    gfm: true
  }) as string;
}

function removeDocumentHeader(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  if (lines[0]?.startsWith("# ")) lines.shift();

  while (lines[0]?.trim() === "") lines.shift();

  const metadataLabels = [
    "Status:",
    "Last searched:",
    "Last source verification:",
    "Last independent publication review:"
  ];

  while (
    lines[0] &&
    metadataLabels.some((label) => lines[0].trim().startsWith(label))
  ) {
    lines.shift();
  }

  while (lines[0]?.trim() === "") lines.shift();

  return lines.join("\n");
}

function buildSummary(config: ReviewConfig): ReviewSummary {
  const markdown = getReviewMarkdown(config);
  const title = extractTitle(markdown);
  const summary = truncate(plainText(extractSection(markdown, "30秒で分かる結論")));
  const status = extractMeta(markdown, "Status");
  const lastSearched = extractMeta(markdown, "Last searched");

  return {
    ...config,
    title,
    summary,
    status,
    statusLabel: statusLabel(status),
    lastSearched,
    searchText: [title, summary, config.domain, config.ageLabel].join(" ").toLowerCase()
  };
}

export function getReviewSummaries(): ReviewSummary[] {
  return REVIEW_CONFIGS.map(buildSummary);
}

export function getReviewBySlug(slug: string): ReviewDetail | undefined {
  const config = REVIEW_CONFIGS.find((item) => item.slug === slug);
  if (!config) return undefined;

  const summary = buildSummary(config);
  const reviewMarkdown = getReviewMarkdown(config);
  const evidenceMarkdown = readText("reviews", config.folder, "evidence-table.md");
  const searchMarkdown = readText("reviews", config.folder, "search-strategy.md");

  return {
    ...summary,
    reviewHtml: renderMarkdown(removeDocumentHeader(reviewMarkdown)),
    evidenceHtml: renderMarkdown(evidenceMarkdown),
    searchHtml: renderMarkdown(searchMarkdown)
  };
}

export function getMethodologyHtml(): string {
  return renderMarkdown(
    readText("methodology", "evidence-review-methodology.md")
  );
}
