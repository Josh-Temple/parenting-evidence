# Publication Gate v0.1

Status: ACTIVE  
Updated: 2026-09-23

## Purpose

Evidence Reviewを `PUBLISHED` に変更する前に、調査量ではなく、公開時の誤解リスクを最小化するための確認項目を固定する。

## Review states

- DRAFT: 調査・統合中
- REVIEW: 主要出典のsource verificationを完了し、公開判定の独立確認待ち
- PUBLISHED: publication gateを通過
- UPDATE_DUE: 再検索期限または重要な更新トリガーが発生
- ARCHIVED: 維持対象外

## Gate

### A. Source integrity
- 主要な数値が原論文、systematic review、公式guidelineで再確認できる
- DOI / PMID / official URLが対象資料と一致する
- secondary summaryだけで主要effect estimateを支えない
- 更新されたguidelineがある場合、旧版をcurrent guidanceとして扱わない

### B. Interpretation
- observational evidenceを因果効果として書いていない
- active control / passive controlの違いを落としていない
- program-level effectをindividual componentへ帰属していない
- 「有意差なし」と「効果なし」を同一視していない
- 「害が確認されない」と「安全が証明された」を同一視していない
- numerical thresholdを生物学的な安全境界として誤読させていない

### C. Practical implications
- 家庭向けの含意がevidenceの射程を超えていない
- clinical / public-health guidanceとEvidence Reviewを混同していない
- 発達・医療上の心配を一般情報だけで原因判断しない
- 強い表現を使う場合、対応する強い証拠がある

### D. Reproducibility
- Last searchedを表示
- search modeを明示
- systematic reviewでない場合、その旨を明示
- Evidence tableとReader Layerの結論が一致
- source verification記録がある

### E. Independent publication review
最終公開前に、作成時の統合結果を前提にせず、主要Claimを出典から再構成する確認を1回行う。

確認者は最低限、
- bottom line
- 主要effect estimate
- causal wording
- safety wording
- Japan applicability

を確認し、`PASS` / `PASS_WITH_CHANGES` / `HOLD` を記録する。

## Current pilot status

2026-09-23時点:
- Q001: PUBLISHED — independent publication review completed 2026-09-23; PASS_WITH_CHANGES; required changes applied
- Q002: REVIEW — source verification pass completed
- Q003: REVIEW — source verification pass completed; direct technique evidence strengthened with Leijten et al. 2018
- Independent publication review: Q001 completed; Q002/Q003 pending

このため、Q001は `PUBLISHED`、Q002/Q003はサイト上で「確認中」とする。
