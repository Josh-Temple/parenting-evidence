# Q005 Search Strategy

Status: EXECUTED WITH LIMITATION; PUBLICATION-REVIEW UPDATE CHECK COMPLETED

Search date: 2026-09-23

## Review question

0〜3歳頃からのcenter-based childcare / ECECへの早期入園は、言語・認知・社会情緒・行動・愛着などの発達にどのような関連または因果効果を持つか。

## Core concepts

```text
(daycare OR child care OR childcare OR nursery OR crèche
 OR "early childhood education and care" OR ECEC)
AND
(infant* OR toddler* OR preschool* OR child*)
AND
(age at entry OR early entry OR early enrollment OR attendance)
AND
(language OR cognitive OR development OR behavior
 OR socioemotional OR attachment OR school achievement)
```

Japan:

```text
(Japan OR Japanese OR JECS OR "Japan Environment and Children's Study")
AND
(group childcare OR nursery OR daycare)
AND
(child development OR ASQ OR communication OR social)
```

Quality:

```text
("early childhood education and care" OR childcare)
AND
(quality OR process quality OR caregiver interaction)
AND
(meta-analysis OR systematic review)
AND
(child outcome* OR development)
```

## Key methodological distinctions

### 1. Entry age is not randomly assigned

保育開始時期は、
- 母親・父親の就労
- 世帯所得
- 地域の保育供給
- 家庭の教育環境
- 子どもの健康や発達
- 兄弟構成

などと関係する。

そのため通常のcohort associationと、制度拡大・供給差などを利用したquasi-experimental evidenceを分ける。

### 2. "Childcare" is not one exposure

少なくとも以下を分ける。

- center-based care
- home-based / family daycare
- informal relative care
- quality
- hours
- group size
- caregiver sensitivity / interactions
- curriculum / educational content
- continuity / stability

### 3. Outcome direction may differ by domain

同じ制度で、
- language / cognitionには利益
- externalizing behaviorには小さな不利益

が同時に出ることがある。

Review全体を「良い／悪い」に圧縮しない。

## Main evidence anchors

### Kanamori et al. 2024 — Japan / JECS

Prospective observational cohort.

- N=39,894
- early childcare group: 13,674
- no-early-childcare group: 26,220
- exposure:
  - childcare began after 6 months and by 1 year
  - continued through age 3
- control:
  - no group childcare at measured points through age 3
- children already in childcare at 6 months and inconsistent-use patterns were excluded
- ASQ-3 at 3 years

Below-cutoff proportions at age 3:
- communication: 2.1% vs 5.7%
- gross motor: 3.8% vs 5.0%
- fine motor: 7.0% vs 8.4%
- problem solving: 5.6% vs 8.9%
- personal-social: 1.7% vs 5.1%

Multivariable logistic models retained lower odds of below-cutoff scores in all five domains.

Critical limitations:
- observational exposure
- major baseline differences:
  - maternal full-time work 59.0% vs 7.0%
  - household income <6 million yen 66.4% vs 79.0%
  - screen exposure markedly different
  - time spent with family markedly different
- ASQ is caregiver-reported screening, not a diagnostic developmental assessment
- exclusion of >60,000 records from the original JECS dataset for eligibility / completeness / exposure-pattern reasons
- no outcomes after age 3 in this analysis

Sources:
https://doi.org/10.1038/s41598-024-81343-9
https://www.env.go.jp/content/000309675.pdf

### von Suchodoletz et al. 2023 — ECEC quality meta-analysis

- systematic review, literature 2010-June 2020
- 8,932 records
- 4,880 unique after deduplication
- 185 articles
- 1,044 effect sizes
- ages 0-6

Higher ECEC quality associated with:
- literacy: 0.08 (95% CI 0.02-0.13)
- math: 0.07 (0.03-0.10)
- behavioral skills: 0.12 (0.07-0.17)
- social competence: 0.13 (0.07-0.19)
- fewer behavioral problems: -0.12 (-0.19 to -0.05)
- fewer social-emotional problems: -0.09 (-0.15 to -0.03)

Overall effects small.
Process-quality indicators showed more consistent associations than structural indicators.

Source:
https://doi.org/10.1371/journal.pone.0285985

Independent-review interpretation note:
- process-quality indicators had significant associations with many outcomes
- structural characteristics alone were not significantly related to child outcomes in the pooled analysis
- however, direct comparisons between process and structural indicators did **not** show significantly different effect sizes for most outcomes
- therefore the public wording should not imply that process quality is proven to matter more than structural quality across the board

### Sluiter et al. 2025 — longitudinal process-quality meta-analysis

- 31 publications
- 16 longitudinal cohorts
- N=17,913
- ECEC during ages 0-4
- socio-emotional outcomes followed into later childhood/adolescence

Aggregate:
- r=0.103
- 95% CI 0.052-0.155
- I2=94.4%

Interpretation:
- higher process quality predicts slightly better socio-emotional outcomes
- heterogeneity is very high

Source:
https://doi.org/10.3390/ijerph22050775

### Caille et al. 2021 — France / Elfe cohort

Large nationally representative cohort with instrumental-variable approach exploiting:
- birth quarter
- local crèche supply

Question:
crèche attendance at age 1 -> outcomes at age 2.

Findings:
- positive effect on language
- no effect on motor skills
- negative effect on behavior
- language benefit concentrated among disadvantaged children

Source:
https://pubmed.ncbi.nlm.nih.gov/33834219/

### Norway toddler ECEC expansion — 2023

Universal ECEC expansion to 1- and 2-year-olds.

- MoBa + national administrative achievement records
- population cohort source >100,000; analyses used linked outcome samples
- fixed-effects and instrumental-variable approaches
- small / mostly nonsignificant overall effects on age-10 achievement
- consistently stronger effects for children with low parental education
- evidence that ECEC reduced educational achievement inequalities

Source:
https://doi.org/10.1080/19345747.2023.2187325

### Havnes & Mogstad 2011 — Norway

Difference-in-differences using expansion of subsidized childcare.

Long-run:
- higher educational attainment
- higher labor-market participation
- lower welfare dependency
- benefits larger for girls and children of low-educated mothers

Source:
https://doi.org/10.1257/pol.3.2.97

### Quebec universal childcare

Baker, Gruber & Milligan 2008:
- policy expansion increased childcare use
- reported worse short-run outcomes in aggression, motor/social skills and illness

Baker et al. 2019:
- reported persistence of negative noncognitive outcomes and later adverse health/life-satisfaction/crime indicators in exposed cohorts

However, a later Quebec birth-cohort study (2021, N=1,450) found:
- no substantial overall impacts on behavior at age 6
- teachers reported slightly higher externalizing behaviors among CPE attendees
- patterns were not replicated in parent reports

Interpretation:
- Quebec evidence should not be generalized to all ECEC systems
- results depend on design, cohort, care arrangement and informant

Sources:
https://doi.org/10.1086/591908
https://doi.org/10.1257/pol.20170603
https://doi.org/10.1016/j.annepidem.2021.06.001

### Hours and externalizing behavior

NICHD longitudinal causal-proposition analysis:
- association between childcare hours and externalizing behavior was equivocal across model specifications
- association varied with childcare quality and proportion of time in large peer groups
- no simple universal causal hours threshold established

Source:
https://pubmed.ncbi.nlm.nih.gov/20053002/

### Attachment — NICHD

NICHD infant attachment study, N=1,153:
- no significant main effects of childcare:
  - quality
  - amount
  - age of entry
  - stability
  - type
  on mother-infant attachment security / avoidance
- maternal sensitivity was important
- interactions suggested greater risk when low maternal sensitivity was combined with poor-quality care / multiple care arrangements

Source:
https://pubmed.ncbi.nlm.nih.gov/29106728/

Age-18 follow-up, N=857:
- childcare quantity and type were not associated with attachment representations
- higher observed childcare quality had a small positive association with one adult-attachment measure after adjustment
- result did not replicate robustly across both attachment measures

Source:
https://doi.org/10.1037/dev0001165

## Independent publication-review update check — 2026-09-23

既存Reviewの結論を前提にせず、Japan-specific association、quality evidence、quasi-experiments、attachment、hours/behavior、2024年以後の更新研究を再確認した。

追加採用:

- Barry et al. 2024
  - individual participant data meta-analysis
  - six European prospective birth cohorts
  - N=87,208
  - center-based childcare age 0-4 vs exclusive parental care
  - lower internalizing symptoms at ages 5-13 in the pooled observational associations
  - informal childcare showed different/opposite patterns for some outcomes
  - corrigendum published 2025; core article retained with correction link noted
  - https://doi.org/10.1016/j.lanepe.2024.101036
  - observational evidence; not interpreted as causal.

- French ELFE 2024 developmental-delay study
  - inverse-probability weighted observational cohort
  - center-based childcare vs exclusive parental care: possible developmental delay OR 0.56 (95% CI 0.51-0.61)
  - childminder OR 0.77 (0.72-0.83)
  - https://pubmed.ncbi.nlm.nih.gov/39214925/
  - supportive association within France; not a clean entry-age effect.

Update conclusion:
- no new evidence justifies a universal “early care is good/bad” verdict
- center-based, informal, hours, quality and country/system remain separate exposure dimensions
- quality associations remain small
- process-quality wording was refined to avoid claiming proven superiority over structural quality
- Japan JECS remains the most directly applicable Japanese anchor but is observational.

## Search limitation

This is not a de novo systematic review.

- no full database export
- no independent deduplication
- no dual screening
- no project-level formal risk-of-bias tool

The question is especially vulnerable to confounding, so causal language is reserved for quasi-experimental / experimental designs and interpreted within the specific childcare system studied.
