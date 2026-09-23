# Q001 Independent Publication Review

Date: 2026-09-23  
Mode: independent reconstruction from major sources; existing Review conclusions were not assumed correct  
Verdict: PASS_WITH_CHANGES  
Final state after required changes: PUBLISHED

## Scope of independent check

Publication Gate v0.1に従い、最低限以下を独立して確認した。

- bottom line
- major effect estimates
- causal wording
- comparator interpretation
- long-term wording
- Japan applicability
- current professional guidance
- 2025–2026 update evidence

## Claim reconstruction

### C001 — 読み聞かせ頻度と言語能力には正の関連がある

PASS.

Galea et al. (2025) は46研究、N=56,576を収集し、メタ分析で以下を報告している。

- language composite: r=0.381, 95% CI 0.289–0.474
- vocabulary composite: r=0.314, 95% CI 0.291–0.336
- reading frequency vs expressive vocabulary: r=0.259, 95% CI 0.099–0.419

ただしメタ分析に寄与した研究の中心は観察研究であり、因果効果として扱えない。Review本文はこの境界を保持している。

Primary source:
https://doi.org/10.3389/flang.2025.1540562

### C002 — 読み聞かせ介入は言語能力を改善する

PASS WITH QUALIFICATION.

Dowdall et al. (2020) は19 RCT、N=2,594を統合し、表出言語 d=0.41、受容言語 d=0.26、caregiver book-sharing competence d=1.01を報告している。

一方、Noble et al. (2019) はoverall g=0.194、active-control g=0.028、follow-up g=0.139で、対照条件により推定効果が大きく変わることを示している。

したがって「平均的な介入効果はあるが、追加効果の大きさはcomparatorに依存する」という現在の整理は妥当。

Sources:
https://pubmed.ncbi.nlm.nih.gov/30737957/
https://doi.org/10.1016/j.edurev.2019.100290

### C003 — 特定の読み方は普通の読み聞かせより優れる

UNCERTAIN remains appropriate.

Noble et al. (2020) のN=150 RCTでは、dialogic reading / pause readingはcaregiver behaviorを変えたが、active shared-reading controlを上回るchild-language improvementは確認されなかった。

2025–2026年の追加確認では、interactive/dialogic readingについて平均的なpositive effectを報告するmeta-analysisがある。

- Li & Pang (2025): ESL/EFL児、13 studies, N=1,857; short-term g=0.49, long-term g=0.20 non-significant
- Frontiers in Psychology (2025): narrative ability, 25 studies, N=2,886; g=0.425, I²=76.07%
- Tang, Lau & Du (2026): reading literacy, 64 studies, N=10,463; overall g=0.76

ただし、これらはpopulation、outcome、age range、control conditionがQ001の狭いC003と一致しない。特に「通常のshared readingに特殊技法を追加したときのspoken-language追加利益」を直接確立するものではない。したがって、新しい研究を無視せず記録したうえでC003をUncertainに維持する。

Sources:
https://pubmed.ncbi.nlm.nih.gov/32539588/
https://doi.org/10.1080/1350293X.2025.2514768
https://doi.org/10.3389/fpsyg.2025.1653511
https://doi.org/10.1016/j.ijer.2026.102963

### C004 — より早く始めるほどよい

PASS as insufficient.

Guevara et al. (2020) のRCTでは、出生直後からliteracy promotionを始めた群は6か月時のhome reading environmentが良好だったが、PLS-5 language scoreは同等で、24か月ではhome reading environment / PLS-5とも群間差なし。

両群とも6か月以降はReach Out and Readを受けるためcontrastが小さくなる。したがって「出生直後開始の言語上の優越性は確立していない」という現在の表現は妥当。

Source:
https://pubmed.ncbi.nlm.nih.gov/37332625/

### C005 — 効果が長期に持続する

PASS as uncertain.

Noble et al. (2019) のfollow-up pooled effectはg=0.139, p=.200。Li & Pang (2025)のESL/EFL subgroupでもlong-term g=0.20はstatistically non-significantだった。

対象集団は異なるが、長期持続を強く断定できないという方向は一致している。

## Japan applicability

PASS.

Nakamura et al. (2026), JECSはN=36,866 mother-child pairs。3歳時のfrequent readingはrare readingと比べ、adjusted communication score +5.5 points (95% CI 5.0–6.0) と関連した。

一方、104,062 fetusesから67,196がoutcome/exposure/covariate missingで除外され、最終解析は36,866。観察研究であり、残余交絡とcomplete-case selectionの制約がある。

Review本文は因果表現を避け、この制約を明示しているため妥当。

Source:
https://doi.org/10.1038/s41390-025-04721-7

## Current guidance

PASS.

AAPのcurrent policy statementは2024年版で、shared readingをbirthから少なくともkindergartenまで促すことを推奨している。これはlanguage単独のeffect estimateではなく、relationships、language-rich interaction、early literacy、school readiness等を統合したguidanceとして扱う必要がある。

Review本文はこの区別を保持している。

Source:
https://doi.org/10.1542/peds.2024-069090

## Required changes

1. `search-strategy.md`に残っていた「Q001はDRAFTのまま保持する」という古い状態記述を修正する。
2. 2025–2026年の関連meta-analysisをpublication-review update checkとして記録し、採用・非採用の理由を明示する。
3. C003に、最近のpositive meta-analysisが存在することと、それでもordinary shared-reading active-control比較を直接確立しないことを追記する。
4. Evidence Tableに更新確認資料を追加する。
5. READMEの「推奨可能」という表現を、Evidence Reviewとしてより記述的な表現へ弱める。

## Gate assessment

- A. Source integrity: PASS
- B. Interpretation: PASS after changes
- C. Practical implications: PASS after wording change
- D. Reproducibility: PASS after search-log correction
- E. Independent publication review: COMPLETED

## Final decision

PASS_WITH_CHANGES.

上記変更を同じbranchで反映したため、Q001はpublication gateを通過したものとして `PUBLISHED` へ移行する。
