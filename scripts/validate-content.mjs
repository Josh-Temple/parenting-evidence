import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function read(...segments) {
  return fs.readFileSync(path.join(root, ...segments), "utf8");
}

function exists(...segments) {
  return fs.existsSync(path.join(root, ...segments));
}

function fail(message) {
  errors.push(message);
}

function meta(markdown, label) {
  const pattern = new RegExp("^" + label + ":\\s*(.+?)\\s*$", "mi");
  return markdown.match(pattern)?.[1]?.trim() ?? "";
}

function section(markdown, heading) {
  const lines = markdown.split(/\\r?\\n/);
  const start = lines.findIndex((line) => line.trim() === `## ${heading}`);
  if (start === -1) return "";

  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^##\\s+/.test(lines[index])) {
      end = index;
      break;
    }
  }

  return lines.slice(start + 1, end).join("\\n").trim();
}

function publicationStateProblems(status, sourceVerification, independentReview) {
  if (status !== "PUBLISHED") return [];
  const problems = [];

  if (/Publication status:\s*.*publication review pending/i.test(sourceVerification)) {
    problems.push("source verification still says publication review pending.");
  }
  if (/^##\s+Remaining limitations before PUBLISHED\s*$/mi.test(sourceVerification)) {
    problems.push("source verification retains a pre-PUBLISHED limitations heading.");
  }

  const requiredChanges = section(independentReview, "Required changes");
  if (/REVIEW[^\n]*(?:維持|retain|keep)|(?:維持|retain|keep)[^\n]*REVIEW/i.test(requiredChanges)) {
    problems.push("independent review required changes contradict PUBLISHED state.");
  }
  return problems;
}

const regressionProbe = publicationStateProblems(
  "PUBLISHED",
  "Publication status: independent publication review pending\n\n## Remaining limitations before PUBLISHED",
  "## Required changes\n\n1. StatusはPUBLISHEDにせずREVIEWを維持する。\n\n## Final decision\nPASS_WITH_CHANGES"
);
if (regressionProbe.length !== 3) {
  fail("Publication-state regression self-test failed.");
}

const reviewsRoot = path.join(root, "reviews");
const folders = fs
  .readdirSync(reviewsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^Q\d{3}-/.test(entry.name))
  .map((entry) => entry.name)
  .sort();

if (folders.length < 5) {
  fail("Expected at least five review folders.");
}

const siteConfig = read("site", "src", "lib", "reviews.ts");
const publicationGate = read("docs", "publication-gate.md");
const methodology = read("methodology", "evidence-review-methodology.md");

const configuredFolders = [...siteConfig.matchAll(/folder:\s*"([^"]+)"/g)].map(
  (match) => match[1]
);

let publishedCount = 0;

for (const folder of folders) {
  const qid = folder.match(/^(Q\d{3})-/)?.[1] ?? folder;
  const required = [
    "README.md",
    "review.md",
    "evidence-table.md",
    "search-strategy.md",
    "source-verification.md"
  ];

  for (const file of required) {
    if (!exists("reviews", folder, file)) {
      fail(folder + " is missing " + file);
    }
  }

  if (!exists("reviews", folder, "review.md")) continue;

  const review = read("reviews", folder, "review.md");
  const status = meta(review, "Status");
  const lastSearched = meta(review, "Last searched");
  const sourceVerified = meta(review, "Last source verification");
  const independentReviewed = meta(review, "Last independent publication review");
  const sourceVerification = exists("reviews", folder, "source-verification.md")
    ? read("reviews", folder, "source-verification.md")
    : "";

  if (!lastSearched.match(/^\d{4}-\d{2}-\d{2}$/)) {
    fail(folder + " has invalid or missing Last searched.");
  }

  if (!sourceVerified.match(/^\d{4}-\d{2}-\d{2}$/)) {
    fail(folder + " has invalid or missing Last source verification.");
  }

  if (status === "PUBLISHED") {
    publishedCount += 1;

    if (!independentReviewed.match(/^\d{4}-\d{2}-\d{2}$/)) {
      fail(folder + " is PUBLISHED but Last independent publication review is missing or invalid.");
    }

    if (!exists("reviews", folder, "independent-publication-review.md")) {
      fail(folder + " is PUBLISHED but independent-publication-review.md is missing.");
    } else {
      const independent = read("reviews", folder, "independent-publication-review.md");
      if (!/^Verdict:\s*(PASS|PASS_WITH_CHANGES)\s*$/mi.test(independent)) {
        fail(folder + " independent review does not have a passing verdict.");
      }
      if (!/^Final state after required changes:\s*PUBLISHED\s*$/mi.test(independent)) {
        fail(folder + " independent review does not end in PUBLISHED.");
      }

      for (const problem of publicationStateProblems(status, sourceVerification, independent)) {
        fail(folder + " " + problem);
      }
    }

    if (!configuredFolders.includes(folder)) {
      fail(folder + " is PUBLISHED but missing from site REVIEW_CONFIGS.");
    }

    if (!publicationGate.includes("- " + qid + ": PUBLISHED")) {
      fail(qid + " is PUBLISHED but publication-gate.md is not synchronized.");
    }
  }
}

if (configuredFolders.length !== publishedCount) {
  fail("Site REVIEW_CONFIGS count (" + configuredFolders.length +
    ") does not match PUBLISHED review count (" + publishedCount + ").");
}

if (!methodology.startsWith("# Evidence Review Methodology v1.0")) {
  fail("Methodology is not v1.0.");
}
if (!/^Status:\s*ACTIVE\s*$/mi.test(methodology)) {
  fail("Methodology status is not ACTIVE.");
}

const q004Block =
  siteConfig.match(/\{[\s\S]*?slug:\s*"sleep-training"[\s\S]*?\n\s*\}/)?.[0] ?? "";
if (!q004Block.includes('ageLabel: "主に6〜18か月"')) {
  fail("Q004 ageLabel must be 主に6〜18か月.");
}
if (!q004Block.includes('ageBands: ["0-1", "1-3"]')) {
  fail("Q004 must appear in both 0-1 and 1-3 age filters.");
}

const staleChecks = [
  ["README.md", /Research \/ design stage|最初の Pilot は|production release prepared/i],
  ["site/src/lib/reviews.ts", /statusLabel/],
  ["site/src/pages/index.astro", /現在は3件|独立確認前|5件のパイロットレビュー/],
  ["site/src/pages/reviews/[slug].astro", /現在の3件|現在の5件|調査草稿です|statusLabel/],
  ["site/src/pages/methodology.astro", /Q001〜Q003で見つかった問題|Q001〜Q005の5件/],
  ["docs/public-review-page-template.md", /^Status:\s*\[Published \/ Draft\]\s*$/m],
  ["docs/site-mvp-spec.md", /3本とも主要出典|Methodology v0\.1|^- Status\s*$/m]
];

for (const [file, pattern] of staleChecks) {
  const content = read(...file.split("/"));
  if (pattern.test(content)) {
    fail(file + " contains stale pilot-state wording.");
  }
}

if (errors.length > 0) {
  console.error("Content validation failed:");
  for (const error of errors) console.error("- " + error);
  process.exit(1);
}

console.log(
  "Content validation passed: " + folders.length +
    " review folders, " + publishedCount +
    " published/site-configured reviews."
);