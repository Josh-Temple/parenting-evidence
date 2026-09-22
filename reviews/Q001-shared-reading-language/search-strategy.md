# Q001 Search Strategy

Status: EXECUTED WITH LIMITATION

Search date: 2026-09-22

## Review question

幼児への読み聞かせは、言語発達にどのような関連または因果効果を持つか。

## Prespecified core concepts

```text
("shared book reading" OR "storybook reading" OR "picture book reading" OR "dialogic reading")
AND
(child* OR infant* OR toddler* OR preschool*)
AND
(language OR vocabulary OR communication)
```

## Planned inclusion

- 対象が主に乳幼児〜就学前児
- 読み聞かせ、共有読書、対話型読書を扱う
- 言語、語彙、コミュニケーションを測定
- systematic review / meta-analysis / RCT / comparative observational study
- 研究方法と主要アウトカムを確認できる

## Planned exclusion

- 読み聞かせと独立した複合介入で効果を分離できない
- 対象年齢が大きく異なり、幼児期結果を分離できない
- 言語関連アウトカムがない
- 二次解説のみで原研究またはレビューを確認できない

## Execution approach

### 1. Existing systematic-review anchor

主要な観察研究の探索は、Galea et al. (2025) のPRISMA準拠systematic reviewをanchorとした。

このreviewは以下を実施している。

- Databases: ERIC, APA PsycINFO, MEDLINE, EBSCOHost, Embase Ovid
- Search period: 1980 onward
- Search executed: November 2024
- Records identified: 10,605
- Records after duplicate removal / title-abstract screening pool: 9,365
- Full text pool: 163
- Included after full text and reference-list search: 46 studies
- Meta-analysis contributors: 28 studies

Source:
https://doi.org/10.3389/flang.2025.1540562

### 2. Intervention evidence

読み聞かせ介入そのものの因果効果については、以下のメタ分析を主要anchorとして確認した。

- Dowdall et al. (2020), 19 RCTs, N=2,594
  - https://pubmed.ncbi.nlm.nih.gov/30737957/
- Noble et al. (2019), shared-reading intervention meta-analysis
  - https://doi.org/10.1016/j.edurev.2019.100290

重要なindividual RCTとして、active reading controlを使ったNoble et al. (2020) と、出生直後からの開始時期を比較したGuevara et al. (2020) を確認した。

### 3. Update search after the systematic-review anchor

November 2024以降に公表・索引化された研究について、以下の概念を組み合わせてPubMed索引ページ、出版社ページ、公的機関ページを検索した。

- shared book reading / storybook reading / picture book reading / dialogic reading
- child / infant / toddler / preschool
- language / vocabulary / communication
- randomized / trial / systematic review / meta-analysis / cohort
- Japan / Japanese

主要な新規関連資料として、2026年のJapan Environment and Children's Study（JECS）を採用した。

- Nakamura et al. (2026), Pediatric Research
  - nationwide prospective birth cohort
  - N=36,866 mother-child pairs
  - https://doi.org/10.1038/s41390-025-04721-7

2026年のA-CHILD IIによる共有読書の開始時期・累積期間研究も確認したが、主要アウトカムがresilience、behavior problems、reading habitsであり、本Reviewの一次アウトカムである言語発達から外れるため主要Evidence tableには採用しなかった。

### 4. Guideline / public evidence context

- American Academy of Pediatrics 2024 Policy Statement / Technical Report
  - https://doi.org/10.1542/peds.2024-069090
- こども家庭庁 2025「乳幼児の遊びと体験」調査研究
  - Dowdall et al. のRCTメタ分析を日本語で紹介し、表出言語 d=0.41、受容言語 d=0.26、養育者の読み聞かせ能力 d=1.01 を整理している。

## Protocol limitation

当初は、各データベースについて当日検索の総ヒット数、deduplication後件数、title/abstract screening件数、full-text assessment件数を独自に記録する予定だった。

今回の実行環境ではPubMed等の検索結果ページから、同一検索式に対する安定した総ヒット件数を機械的に取得できず、完全なdeduplication / dual screeningも実施していない。

したがって、

- de novo systematic search を完了したとは扱わない
- records_identified 等の独自件数を推測で記録しない
- 既存の高品質systematic reviewをanchorとし、2024年11月以降をtargeted update searchで補う
- Q001はDRAFTのまま保持する

という扱いとした。

この制約を解消して正式な再現可能検索へ昇格する場合は、PubMed/MEDLINE等のdatabase-native検索または検索結果exportが可能な環境で同一クエリを再実行し、PRISMA flowを独自に記録する。
