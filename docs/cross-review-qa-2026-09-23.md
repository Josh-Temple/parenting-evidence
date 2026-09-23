# Cross-Review QA — Q001–Q005

Date: 2026-09-23
Scope: release/evidence-review-v1
Result: PASS_WITH_ONE_IMPLEMENTATION_FIX

## Purpose

Q001〜Q005を個別Reviewとしてではなく、同一サイトに並ぶ5件のEvidence Reviewとして横断確認する。

確認対象:
- publication state
- evidence-search date
- source-verification state
- independent publication review state
- Reader Layerと監査資料の整合
- 因果表現の境界
- safety wording
- age / population boundary
- review metadataの公開表示
- site indexとの整合

## Metadata consistency

5件すべてで確認:

| Review | Status | Last searched | Source verification | Independent review |
|---|---|---|---|---|
| Q001 | PUBLISHED | 2026-09-23 | completed | PASS_WITH_CHANGES |
| Q002 | PUBLISHED | 2026-09-23 | completed | PASS_WITH_CHANGES |
| Q003 | PUBLISHED | 2026-09-23 | completed | PASS_WITH_CHANGES |
| Q004 | PUBLISHED | 2026-09-23 | completed | PASS_WITH_CHANGES |
| Q005 | PUBLISHED | 2026-09-23 | completed | PASS_WITH_CHANGES |

全Reviewに、独自のsystematic reviewではないことを明示する境界説明がある。

## Cross-review interpretation checks

### Causality

PASS.
- Q001: observational associationとintervention effectを分離
- Q002: screen exposure association / bidirectionalityを因果効果へ変換しない
- Q003: program-level effectをtime-out単独へ帰属しない
- Q004: sleep interventionの総合結果を単一技法へ帰属しない
- Q005: JECS等の観察研究をcausal effectとして扱わない

### Safety

PASS.
- Q003/Q004とも「害が確認されない」と「安全性が証明された」を区別
- Q004ではsleep-training efficacyとsafe-sleep guidanceを別レイヤーとして維持

### Outcome / exposure decomposition

PASS.
- Q002: time / content / co-viewingを分離
- Q004: sleep latency / waking / continuous sleep / total durationを分離
- Q005: entry age / hours / quality / care type / system contextを分離

### Population / age boundary

PASS.
- Q004: under 6 monthsをmixed / insufficient for extensionとして分離
- Q005: country/system transportabilityを明示
- Q001〜Q003も対象年齢・比較条件の範囲を維持

## Implementation issue found and fixed

### Public article metadata leak

site/src/lib/reviews.ts の removeDocumentHeader() は、Status と Last searched だけを除去しており、各Reviewの Last source verification がReader Layer本文の先頭に残る実装だった。

対応:
- Last source verification
- Last independent publication review

も文書先頭のmetadataとして除去できるよう修正した。

この変更は研究内容には影響せず、公開表示だけを整える。

## Remaining release checks

以下はProduction反映後に確認する。
- public URLs 7本のHTTP / rendering smoke test
- review countが5件であること
- age/domain filters
- mobile layout
- sourceリンクの代表サンプル
- Production SHAとGitHub main SHAの一致

詳細は docs/release-checklist.md に固定した。

## Final QA decision

Release branchとしては公開準備可能。

Vercel Hobby build-rate-limitが解除されるまでmainへのmergeは行わない。