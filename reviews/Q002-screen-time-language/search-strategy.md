# Q002 Search Strategy

Status: EXECUTED WITH LIMITATION

Search date: 2026-09-22

## Review question

乳幼児期のスクリーン利用の量・内容・文脈は、言語・コミュニケーション発達とどのように関連するか。

## Prespecified core concepts

```text
(screen time OR screen media OR digital media OR television OR video
 OR smartphone OR tablet OR mobile device OR app*)
AND
(infant* OR toddler* OR preschool* OR child*)
AND
(language development OR vocabulary OR communication
 OR expressive language OR receptive language)
```

## Exposure dimensions

Q002では「screen time」を単一の曝露として扱わず、可能な限り以下を分ける。

- quantity: duration / frequency
- medium: TV, video, smartphone, tablet, app
- content: educational / child-directed / noneducational / age-inappropriate
- social context: co-use / co-viewing / solo use
- background exposure: background TV or media
- age at onset
- purpose: entertainment / calming / learning

## Planned inclusion

- 主に0〜6歳の子ども
- screen / digital media exposureを測定
- 言語、語彙、コミュニケーションまたはその直接的な会話環境を評価
- systematic review / meta-analysis / longitudinal cohort / RCT / experiment / large comparative observational study
- 曝露・アウトカム・主要解析を確認できる

## Planned exclusion

- 学齢期以降のみで幼児結果を分離できない
- 言語・コミュニケーションまたは直接的な言語環境アウトカムがない
- assistive communication device等、一般的な家庭のscreen useとは目的が異なる介入
- 二次解説だけで原研究またはreviewを確認できない
- 一回限りの特殊な実験で、日常的screen exposureへの一般化が困難なものは主要quantity claimの根拠にしない

## Execution approach

### 1. Language-specific anchor

Madigan et al. (2020) を言語アウトカムの主要anchorとした。

- Databases: MEDLINE, Embase, PsycINFO
- Search executed: March 2019
- Publication window: 1960 to March 2019
- Included studies: 42
- Total participants: 18,905
- Duplicate independent coding: yes
- PRISMA: yes

Main pooled associations:

- total screen time: r=-0.14 (95% CI -0.18 to -0.10), 38 studies
- background television: r=-0.19 (-0.33 to -0.05), 5 studies
- educational programming: r=0.13 (0.02 to 0.24), 13 studies
- co-viewing: r=0.16 (0.07 to 0.24), 12 studies
- later age at onset: r=0.17 (0.07 to 0.27), 4 studies

Screen-time estimates had substantial heterogeneity.

Source:
https://doi.org/10.1001/jamapediatrics.2020.0327

### 2. Screen-context anchor

Mallawaarachchi et al. (2024) を、screen useの「量だけでなく文脈を見る」ための主要anchorとした。

- Databases: PsycINFO, Embase, MEDLINE Ovid, ProQuest, CINAHL, Web of Science, Scopus
- Search through: 2023-12-31
- Records initially identified: 7,441
- Included studies: 100
- Participants: 176,742
- Meta-analysis: 64 observational studies
- Screening: duplicate
- Protocol: PROSPERO CRD42022352082
- PRISMA: yes

Languageはcognitive outcomeの一部として統合されているため、Q002の言語固有effect estimateとしてはMadigan 2020を優先し、screen contextの一般化確認に使用した。

Source:
https://doi.org/10.1001/jamapediatrics.2024.2620

### 3. Targeted update search

2023年末以降について、PubMed、JAMA Pediatrics、出版社ページ、AAP、WHO、日本の公的資料を対象に更新探索した。

主要採用資料:

- Yamamoto et al. 2023 / JECS, N=57,980
  - random-intercept cross-lagged panel model
  - https://doi.org/10.1001/jamapediatrics.2023.3643
- Brushe et al. 2024, N=220
  - screen exposure and parent-child talk
  - https://doi.org/10.1001/jamapediatrics.2023.6790
- Rayce et al. 2024, N=31,125
  - mobile-device screen time and toddler language
  - https://doi.org/10.1186/s12889-024-18447-4
- Sundqvist et al. 2024, N=72
  - longitudinal screen media and vocabulary to age 5
  - https://doi.org/10.1111/apa.17047
- Gath et al. 2026, N=6,281
  - early screen exposure and later language/education/social outcomes
  - https://doi.org/10.1037/dev0001907
- AAP 2026 Policy Statement + Technical Report
  - https://doi.org/10.1542/peds.2025-075320
  - https://doi.org/10.1542/peds.2025-075321
- WHO 2019 movement guidelines for under-5s
  - https://www.who.int/publications/i/item/9789241550536
- こども家庭庁 2025「乳幼児の遊びと体験」調査研究
  - Madigan 2020等のscreen-media evidenceを日本語で整理

2025年に複数の追加systematic reviewが公表され、長時間・受動的・単独利用と不利な言語アウトカム、内容・相互作用による差という方向性は概ね一致していた。ただし、方法論的異質性が大きく、主要effect estimateの更新には使用しなかった。

## Current guidance check

### AAP 2026

2016年のMedia and Young Mindsは2026年の `Digital Ecosystems, Children, and Adolescents` に改訂されている。

現行AAPはscreen timeの時間数だけを中心にせず、quantityに加えて、

- type
- content
- context / joint media engagement
- interactivity
- family and system context

を見る方針を採用している。

0〜5歳では、重い非教育的・単独利用はlanguage delay等と関連し、高品質教育コンテンツとjoint media engagementはより良いlanguage / learning outcomesと関連すると整理している。

### WHO 2019

WHOのunder-5 movement guidelineは、sedentary screen timeについて、

- 1歳: 推奨しない
- 2歳: 1時間以内、少ないほどよい
- 3〜4歳: 1時間以内、少ないほどよい

としている。

ただし、この数値は言語発達だけから導かれた閾値ではなく、身体活動・座位行動・睡眠を統合した健康ガイドラインとして扱う。

## Protocol limitation

今回もdatabase-nativeな完全検索結果export、独自deduplication、二重screeningは実施していない。

そのため、

- de novo systematic reviewではない
- 「全研究を網羅した」とは主張しない
- 2020/2024の高品質reviewをanchorにする
- 以後の重要な研究をtargeted updateで補う
- 研究数や検索ヒット数を推測で補完しない

という境界を維持する。
