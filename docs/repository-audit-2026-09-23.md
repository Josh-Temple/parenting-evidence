# Repository Audit and Remediation — 2026-09-23

Scope: `release/evidence-review-v1` and Release PR #12

## Summary

リポジトリ点検で確認した公開前リスクに対し、実施可能な修正をRelease branchへ反映した。

## Resolved

### 1. Q004 age-filter mismatch

Before:
- `ageLabel: 主に0〜1歳`
- `ageBands: [0-1]`

Reviewの中心的な対象は主に生後6〜18か月で、1歳以降も含むため、1〜3歳filterでQ004が消える不整合があった。

After:
- `ageLabel: 主に6〜18か月`
- `ageBands: [0-1, 1-3]`

### 2. Stale repository documentation

以下を現在の5-review pilot / Methodology v1.0状態へ更新した。

- root `README.md`
- `docs/project-plan.md`
- `docs/site-mvp-spec.md`
- `site/src/pages/methodology.astro`

旧状態の「Research / design stage」「最初のPilotはQ001」「Q001〜Q003のみ」「Methodology v0.1」等を、現在状態と区別できるよう修正した。

### 3. Dependency reproducibility

Before:
- `package-lock.json`なし
- CIは `npm install`

After:
- GitHub Actions Node 22.20.0環境で生成した `package-lock.json` をcommit
- CIを `npm ci` へ変更

lockfileは手書きせず、実際のCI環境で `npm install --package-lock-only --ignore-scripts` により生成した。

### 4. Content consistency validation

`scripts/validate-content.mjs` と `npm run validate:content` を追加した。

現在の自動検査:
- Review folderの必須ファイル
- `Status / Last searched / Last source verification`
- PUBLISHED Reviewのindependent publication review
- independent reviewのPASS / PASS_WITH_CHANGESと最終PUBLISHED
- publication-gateとの同期
- PUBLISHED reviewとsite configの件数・登録整合
- Methodology v1.0 / ACTIVE
- Q004のageLabel / ageBands回帰チェック
- 過去に見つかった古い「3件」「独立確認前」「Methodology v0.1」表現の再発

### 5. CI trigger and runtime maintenance

CI対象へ以下を追加した。

- `package-lock.json`
- root `README.md`
- workflow自身
- `scripts/**`
- `docs/**`

また、GitHub Actions runtimeのdeprecation warningを避けるため、公式Actionを現行majorへ更新した。

- `actions/checkout@v7`
- `actions/setup-node@v7`
- Node versionは `.nvmrc` をsource of truthとして使用

### 6. Release checklist

`docs/release-checklist.md` を強化した。

追加した主なgate:
- lockfile committed
- `npm ci`
- `npm run validate:content`
- age/domain filterのReview scope整合
- Vercel READY Previewのcommit SHAがcurrent Release PR headと一致
- 古いREADY Previewを新しいheadの検証結果として扱わない

## Verified

- Q001〜Q005に必要な研究ファイル構成が存在
- PUBLISHED / independent publication review状態は5件で整合
- release branchはmainから分岐し、点検時点でbehind 0
- Release PR #12はmergeable
- `npm ci` / content validation / Astro buildがCIで成功することを確認

## Remaining external gate

### Vercel current-head validation

過去のRelease PreviewにはREADYがあるが、Release branchはその後も更新されている。

Production merge前に必ず:
1. current PR head SHAをfresh read
2. Vercelの最新READY Previewの`githubCommitSha`を確認
3. 両者の一致を確認
4. Production merge後にProduction SHAとmain SHAを確認

### Main branch protection

Repository rulesets APIは空だった。

legacy branch protection endpointはGitHub App権限不足で403となり、branch protectionの有無をAPIから確定できなかった。

この点は自動変更していない。個人リポジトリでの運用影響があるため、必要ならGitHub UI側で「mainへの直接push禁止 / PR必須 / CI必須」を設定する。

## Release decision

リポジトリ内部で修正できる主要な公開前問題は解消した。

残るrelease stop conditionは、current headに対するVercel Preview / deployment capacity確認と、Production反映後のsmoke testである。