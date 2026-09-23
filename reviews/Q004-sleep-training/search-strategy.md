# Q004 Search Strategy

Status: EXECUTED WITH LIMITATION

Search date: 2026-09-23

## Review question

乳児の行動性睡眠問題に対するbehavioral sleep interventionは、睡眠アウトカムを改善するか。また、乳児ストレス、情緒・行動、attachment / parent-child relationship等の悪影響は確認されているか。

## Core concepts

```text
(infant* OR baby OR babies)
AND
("sleep training" OR behavioral sleep intervention* OR behavioural sleep intervention*
 OR graduated extinction OR controlled crying OR bedtime fading
 OR camping out OR checking-in OR bedtime routine*)
AND
(random* OR trial OR systematic review OR meta-analysis)
```

Safety / long-term:

```text
(infant* AND behavioral sleep intervention*)
AND
(cortisol OR stress OR attachment OR emotional OR behavior*
 OR long-term OR follow-up OR harm)
```

Safe sleep:

```text
infant sleep
AND
(SIDS OR sleep-related death OR safe sleep OR supine OR sleep environment)
```

## Key methodological distinctions

### 1. "Sleep training" is not one intervention

以下を可能な限り分ける。

- graduated extinction / controlled crying
- unmodified extinction
- bedtime fading
- camping out / checking-in
- bedtime routines
- parent education / psychosocial programs
- digitally delivered behavioral interventions

研究全体の効果を一つの技法へ自動的に帰属しない。

### 2. Sleep improvement is multidimensional

次を同一視しない。

- 早く寝つく
- 夜間覚醒が減る
- 覚醒後に早く再入眠する
- longest continuous sleep periodが伸びる
- nocturnal / 24-hour total sleep timeが増える

「夜に起きにくくなった」と「総睡眠時間が大幅に増えた」は別Claimとして扱う。

### 3. Safety has two separate meanings

- intervention-specific safety:
  - cortisol / distress
  - emotional / behavioral development
  - attachment / parent-child relationship
- sleep-environment safety:
  - SIDS / suffocation risk
  - sleep position
  - sleep surface / room environment

後者は睡眠トレーニング研究とは別の公衆衛生・安全ガイドラインを優先する。

## Main evidence anchors

### Reuter et al. 2020

Systematic review of prevention and treatment of infant behavioural sleep problems.

- MEDLINE, Web of Science, PsycINFO
- search: December 2017
- publication window: 2007-2017
- 2,070 unique records initially screened
- 476 reports of original studies assessed in full text
- 12 original intervention studies included
- 3 relevant systematic reviews / meta-analyses also included
- five behavioral interventions using routines or controlled crying showed modest short-term effects
- no individual intervention was evaluated in more than one qualifying full-scale study
- knowledge gaps included:
  - infants <6 months
  - non-Western / cross-cultural settings
  - high-risk groups
  - fathers
  - negative consequences of extinction-containing interventions

Source:
https://doi.org/10.1111/apa.15182

### Stanzel et al. 2025

Systematic review and meta-analyses of behavioral interventions for problematic infant sleep / cry-fuss behavior.

- search: November 2020, updated May 2023
- databases: Medline, Embase, PsycInfo, CINAHL Plus
- 22 papers reporting 20 studies included
- infant age: up to 12 months
- broadly reported mild-to-moderate improvements in unsettled infant behavior including night waking / cry-fuss behavior, and maternal mental health / parenting confidence
- substantial heterogeneity remains

Source:
https://doi.org/10.1002/icd.2554

### Liu et al. 2023

Systematic review/meta-analysis of psychosocial sleep interventions.

- 13 RCT studies from 5,889 records/articles
- improved infant nocturnal total sleep time: standardized effect 0.28 (95% CI 0.04-0.52)
- high heterogeneity for nocturnal sleep (I2=83.9%)
- also reported improvement in maternal depression
- intervention content heterogeneous

Source:
https://pubmed.ncbi.nlm.nih.gov/37532607/

### Chae et al. 2024

Systematic review of interventions measured with actigraphy.

- 11 studies
- 3 extinction-based behavioral interventions
- 8 parental education programs
- fairly consistent improvement in number of awakenings and sleep onset latency
- only two studies judged low risk of bias
- parental psychosocial outcomes inconsistent

Source:
https://pubmed.ncbi.nlm.nih.gov/37671613/

### Fangupo et al. 2021

Meta-analysis of 32 RCTs in age 0-5 years.

- nocturnal sleep duration: mean +9 min/night (95% CI 4.1-13.8)
- 24-hour sleep: +8.6 min (95% CI -2.7 to 19.8), not clearly different
- no evidence of changed daytime sleep duration
- includes broader child sleep interventions, not only infant extinction-based methods

Source:
https://pubmed.ncbi.nlm.nih.gov/34029803/

### Gradisar et al. 2016

Small RCT.

- N=43 infants, age 6-16 months
- graduated extinction n=14
- bedtime fading n=15
- sleep education control n=14
- improved sleep latency in both behavioral groups
- graduated extinction also improved awakenings / wake after sleep onset
- salivary cortisol declined rather than increased relative to control
- at 12-month follow-up no significant group differences in emotional/behavioral problems or secure/insecure attachment

Source:
https://pubmed.ncbi.nlm.nih.gov/27221288/

### Price et al. 2012

Five-year follow-up of cluster-randomized behavioral infant sleep intervention.

- original sleep-problem subgroup N=326
- 225 families (69%) participated at age 6
- no evidence of group differences in measured:
  - emotional / conduct behavior
  - sleep problems
  - psychosocial functioning
  - chronic stress
  - parent-child closeness/conflict
  - disinhibited attachment
  - maternal depression/anxiety/stress
- attrition and intervention specificity limit claims of universal safety

Source:
https://pubmed.ncbi.nlm.nih.gov/22966034/

### Douglas & Hill 2013 — under 6 months

Systematic review specifically of behavioral sleep interventions in infants <6 months.

- searches through March 2013
- did not find evidence that population-level behavioral sleep strategies in the first 6 months improve key infant/maternal outcomes
- raised concerns around feeding, crying, maternal anxiety, and unsafe separation if interventions require separate-room sleeping
- older review and interpretive framing is debated, but it reinforces the age-specific evidence gap

Source:
https://pubmed.ncbi.nlm.nih.gov/24042081/

### Uzdil et al. 2025 — digital delivery

Systematic review/meta-analysis of digital behavioral sleep interventions.

- 4 RCTs
- longer continuous sleep period improved
- total night-time sleep did not clearly improve
- all included studies judged high risk of bias; certainty low
- useful evidence that "longest continuous sleep" and "total sleep duration" should be separated

Source:
https://pubmed.ncbi.nlm.nih.gov/41110255/

## Safe sleep guidance

### Japan — Children and Families Agency

Current public guidance for infants under 1 year:
- place infant supine when putting them to sleep
- SIDS risk is lower with supine placement than prone placement
- safe-sleep messaging is separate from behavioral sleep intervention efficacy

Source:
https://www.cfa.go.jp/policies/boshihoken/kenkou/sids

### AAP 2022

Safe infant sleep includes:
- supine positioning
- firm, flat, noninclined sleep surface
- room sharing without bed sharing
- avoiding soft bedding and overheating

Recommendations apply through the first year unless otherwise specified.

Source:
https://doi.org/10.1542/peds.2022-057990

## Japan-specific applicability

今回のtargeted searchでは、日本の公的機関による「睡眠トレーニング」そのものの推奨・標準手順は確認できなかった。

日本については、
- SIDS / safe sleep: 公的指針を直接使用
- behavioral sleep training efficacy: 主に海外のRCT / systematic reviewを使用

というdirectnessの違いを明示する。

## Search limitation

このReviewはde novo systematic reviewではない。

- database-native exportなし
- 独自deduplicationなし
- dual screeningなし
- formal project-level risk-of-bias assessmentなし

既存のsystematic reviewをanchorにし、新しい主要レビュー・RCT・長期追跡・公的安全指針をtargeted updateで補う。
