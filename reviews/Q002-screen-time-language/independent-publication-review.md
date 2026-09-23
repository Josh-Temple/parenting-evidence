# Q002 Independent Publication Review

Date: 2026-09-23  
Mode: independent reconstruction from major sources; existing Review conclusions were not assumed correct  
Verdict: PASS_WITH_CHANGES  
Final state after required changes: PUBLISHED

## Scope

Publication Gate v0.1に沿って、以下を独立確認した。

- bottom line
- major effect estimates
- causal wording
- bidirectionality
- content / co-use interpretation
- threshold wording
- Japan applicability
- current AAP / WHO guidance
- 2023-2025 language-specific update syntheses

## Claim reconstruction

### C001 — 長いscreen useと言語能力低下には関連がある

PASS.

Madigan et al. (2020) は42研究、N=18,905を統合し、screen time r=-0.14 (95% CI -0.18 to -0.10)、background TV r=-0.19 (-0.33 to -0.05)を報告した。

Xie et al. (2024) の0-3歳対象28研究meta-analysisも、screen timeと言語発達の負の関連を報告している。

したがって「小さい負の関連」という現在の結論は妥当。観察研究中心であり、因果効果量としては扱わない。

Sources:
https://doi.org/10.1001/jamapediatrics.2020.0327
https://doi.org/10.1080/03004430.2024.2349622

### C002 — screen time自体が言語発達を遅らせる

PASS as plausible but not established.

日本のJECS N=57,980では、TV/DVD screen time age 1 -> communication age 2 beta=-0.06 (95% CI -0.07 to -0.05)、age 2 -> communication age 3 beta=-0.02 (-0.04 to -0.01)だった。

一方、communication age 1 -> subsequent screen time gamma=-0.03 (-0.04 to -0.02)、communication age 2 -> subsequent screen time gamma=-0.06 (-0.07 to -0.04)と逆方向も確認された。

RI-CLPMは時間方向の検討を改善するが観察研究であり、因果関係を確定しない。現在のcausal wordingは妥当。

Source:
https://doi.org/10.1001/jamapediatrics.2023.3643

### C003a — caregiver co-use / co-viewing

PASS as association.

Madigan et al. (2020)はco-viewing r=0.16 (95% CI 0.07-0.24)。Xie et al. (2024)もco-viewingと言語発達の正の関連を報告。Mallawaarachchi et al. (2024)でもco-useはより良いcognitive outcomesと関連した。

ただし、これはco-viewingが長時間利用の影響を相殺する、または単独で因果的利益を生むことを証明しない。

Sources:
https://doi.org/10.1001/jamapediatrics.2020.0327
https://doi.org/10.1080/03004430.2024.2349622
https://doi.org/10.1001/jamapediatrics.2024.2620

### C003b — educational content

CHANGE REQUIRED: evidence is mixed.

Madigan et al. (2020)はeducational programming r=0.13 (95% CI 0.02-0.24)を報告した。Jing et al. (2023)はscreen mediaとvocabularyのmeta-analysisで、experimental studies r=0.30、naturalistic educational-media exposure r=0.17を報告した。

一方、Xie et al. (2024)の0-3歳meta-analysisではeducational-program viewingと言語発達の関連はstatistically non-significantだった。

したがって、元のC003「教育的内容や共同利用は有利」を一つのSupported claimとして扱うのは粗い。共同利用と教育的内容を分け、educational contentはMixed / uncertainへ修正する。

Sources:
https://doi.org/10.1111/cdev.13927
https://doi.org/10.1080/03004430.2024.2349622

### C004 — screen useは親子の会話機会を減らしうる

PASS as plausible mechanism.

Brushe et al. (2024), N=220の反復家庭音声測定では、36か月時点でscreen exposure 1分増加とadult words -6.6、child vocalizations -4.9、conversational turns -1.1の関連が報告された。

観察研究なので1分のscreen useによる因果的損失量とは解釈しない。Reviewはこの境界を明示している。

Source:
https://doi.org/10.1001/jamapediatrics.2023.6790

### C005 — universal safe threshold

PASS as not established.

Rayce et al. (2024)では2-3歳N=31,125で、mobile device >=2h/dayとlanguage comprehension difficulty AOR=1.42、expressive language difficulty AOR=1.46が関連した。しかしcross-sectionalであり、category boundaryは生物学的thresholdではない。

WHO 2019の1時間等の上限はphysical activity / sedentary behavior / sleepを統合した公衆衛生guidelineで、language-specific causal thresholdではない。

Sources:
https://doi.org/10.1186/s12889-024-18447-4
https://www.who.int/publications/i/item/9789241550536

### C006 — reverse direction

PASS.

JECSのcommunication -> later screen time cross-lagged associationsは、逆方向が存在しうることを直接支持する。因果の向きが一方向ではないことをReader Layerで明示するのは重要。

## Current guidance

PASS with boundary clarification.

AAP 2026のPolicy Statement / Technical Reportは、screen timeだけでなくquantity, type, content, context, interactivity, caregiver-child relationships等を見る枠組みに更新されている。high-quality educational contentやjoint media engagementに利益の可能性を認める一方、heavier noneducational / solo useはlanguage等の不利なoutcomesと関連すると整理している。

ただしAAP guidanceは臨床・公衆衛生上の推奨であり、個別のcausal effect estimateではない。ReviewではguidanceとEvidence Reviewを分ける。

Sources:
https://doi.org/10.1542/peds.2025-075320
https://doi.org/10.1542/peds.2025-075321

## Update evidence

2025年の追加systematic reviewsも確認した。

- Nwachukwu et al. 2025: 8 studies, mostly cross-sectional; passive/unsupervised useの不利な関連、interactive/educational/caregiver-involved useの可能性を整理するがcertainty limited。
- Silva Junior et al. 2025: 17 observational studies of smartphones/tablets; exposure量だけでなくparental mediation/content/contextの重要性を報告。

いずれも主要結論を反転させないが、独立reviewの検索記録に明示する。

## Required changes

1. 「教育的内容」と「共同利用」を同一Claimから分離する。
2. 教育的内容について、2020/2023のpositive evidenceと2024 meta-analysisのnon-significant resultを併記する。
3. Xie 2024、Jing 2023、Nwachukwu 2025、Silva Junior 2025をupdate / gap checkとして検索記録とEvidence Tableへ追加する。
4. Reader Layerの「減らした方がよい」を、evidence claimとcurrent guidanceの区別が分かる表現へ修正する。
5. PUBLISHEDへの移行と独立review記録を追加する。

## Gate assessment

- A. Source integrity: PASS
- B. Interpretation: PASS after C003 split
- C. Practical implications: PASS after wording change
- D. Reproducibility: PASS after update-search documentation
- E. Independent publication review: COMPLETED

## Final decision

PASS_WITH_CHANGES.

必要変更を同じbranchで反映したため、Q002はpublication gateを通過したものとして `PUBLISHED` へ移行する。
