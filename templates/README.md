# Evidence Review Templates

Methodology v1.0を、次のReviewでそのまま再利用できる作業単位へ落としたテンプレート群。

## Files

1. review.md — Reader Layer + Claim summary
2. evidence-table.md — Claimごとの主要証拠
3. search-strategy.md — 検索・anchor・update search
4. source-verification.md — 主要数値と解釈の再確認
5. independent-publication-review.md — 公開前の独立再構成

## Operating order

Question固定
→ search-strategy
→ evidence-table
→ review draft
→ source-verification
→ independent-publication-review
→ publication gate
→ PUBLISHED

## Rules

- Systematic reviewを実施していない場合はそう名乗らない。
- ClaimごとにPopulation / Exposure or Intervention / Comparator / Outcomeを固定する。
- anchor reviewは刊行年ではなく最終検索日を記録する。
- update searchで重要な新規研究を確認する。
- associationをcausal effectへ変換しない。
- program-level effectをcomponentへ帰属しない。
- 「害が確認されない」を「安全」と書き換えない。
- contradictory evidenceは消さずに理由を説明する。
- `review.md` の `Status` は研究上のpublication stateであり、一般読者向けラベルやProduction deployment stateとして使わない。
- independent publication review完了後は、final state、review metadata、source verification、publication gateを同期してからPUBLISHEDとする。
- Production releaseは `docs/release-checklist.md` とdaily deployment policyに従う別工程とする。