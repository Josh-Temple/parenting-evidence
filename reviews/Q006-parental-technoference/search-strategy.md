# Q006 Search Strategy

Status: EXECUTED WITH LIMITATION / FRESH FIXED UPDATE SEARCH COMPLETED 2026-09-24

Search date: 2026-09-24  
Search mode: anchored_update + targeted_search

## Review question

親が乳幼児の前でスマートフォン・タブレット・PC等を使うことは、親子相互作用や子どもの発達とどのように関連するか。

## Claim map

- C001: selected cognitive / psychosocial associations
- C002: long-term causal developmental harm
- C003: acute interaction disruption
- C004: later child screen / problematic media use
- C005: universal daily threshold
- C006: bidirectionality / shared causes
- C007: simple duration-dose model
- C008: language development

## Core concepts

```text
(parent* OR mother* OR father* OR caregiver*)
AND
(smartphone* OR mobile phone* OR digital media OR technology use
 OR technoference OR phubbing OR digital interruption*)
AND
(infant* OR toddler* OR preschool* OR child*)
AND
(interaction OR responsiveness OR sensitivity OR development
 OR language OR cognition OR behavior OR attachment OR emotion*)
```

Japan-specific extension:

```text
(Japan OR Japanese OR JECS OR "Japan Environment and Children's Study")
AND
(maternal digital media OR parental smartphone OR technoference)
```

## Inclusion

- Population: primary birth–5.99 years; infant subgroup 0–24 months
- Exposure: caregiver technology use while physically present with child
- Comparator: no/minimal/lower exposure; within-dyad interruption comparator where available
- Outcomes: parent-child interaction quality; socioemotional behavior; cognition/development; language-social development; attachment; child screen use
- Study designs: systematic review/meta-analysis; longitudinal/prospective; experimental interruption studies; relevant observational studies; current guideline/policy
- Anchor update window: 2024-08-01 through search date
- Languages: English and Japanese where accessible

## Exclusion

- child-only screen exposure without separable caregiver exposure
- school-age / adolescent-only evidence as primary evidence
- studies where caregiver exposure cannot be separated from household/child exposure
- commentary without underlying evidence for effect estimates
- studies used only to create a universal safety threshold from observational categories

## Main anchor evidence

### Toledo-Vargas et al. 2025

- publication year: 2025
- design: systematic review/meta-analysis
- last search date: 2024-07-31
- systematic review: 30 studies
- meta-analysis: 21 studies; N=14,900; 10 countries
- population: birth–4.9 years
- main result: small pooled associations for selected outcomes; language estimate non-significant
- main limitation: mostly observational evidence; heterogeneity
- source: PMID 40323594; DOI 10.1001/jamapediatrics.2025.0682

重要: publication yearとlast search dateを同一視しない。

## Key pre-anchor bidirectional evidence retained for C006

McDaniel & Radesky 2018:
- longitudinal survey study
- 183 couples with a young child; baseline, 1, 3 and 6 months
- child externalizing → parenting stress → later technology interference and technology interference → later externalizing were both observed in cross-lagged models
- retained because C006 specifically concerns directionality / shared stress
- source: PMID 29895837; DOI 10.1038/s41390-018-0052-6

This study predates the anchor cutoff and is not counted as a new update-search record.

## Targeted update search already completed

2024-08以降について、以下を追加確認した。
- Japan-specific cohort: Ogata et al. 2025 / JECS
- smartphone interruption experiment: Mikić et al. 2025
- infant technoference systematic review: 2026
- objective/passive-use study: Ventura et al. 2025
- longitudinal language environment study: Coyne et al. 2026
- 7-year technoference trajectory: Ashby et al. 2026
- reverse/shared-stress evidence: Schneebeli et al. 2025; McDaniel et al. 2025
- current professional guidance: AAP 2026
- Japan official-domain targeted search: Children and Families Agency / MHLW materials

## Historical search-record limitation

これまでの検索はtargeted / iterative researchとして実施したため、以下の完全なhistorical countは保存されていない。

- records identified: NOT_RECONSTRUCTABLE
- records screened: NOT_RECONSTRUCTABLE
- full texts assessed: NOT_RECONSTRUCTABLE

後から推測して埋めない。

Included sourcesと主要な採用・非採用理由はIssue #14とevidence-table.mdに保存している。

## Fresh fixed update search — 2026-09-24

Purpose:
publication review直前のcurrent evidence check。過去件数の再構成ではない。

Source interface:
web search restricted to `pubmed.ncbi.nlm.nih.gov`. Native PubMed exportではないため、database-total countとは扱わない。

Fixed queries:

```text
parental technology use child presence technoference caregiver smartphone infant toddler preschool child development interaction longitudinal experimental systematic review
```

```text
parental technoference preschool social emotional coparenting caregiver smartphone child presence motor executive function
```

Search-tool recency window:
1000 days. Publication-date eligibility was then manually screened to 2024-08-01 through 2026-09-24.

Language:
English-language records surfaced by the search interface. Japan-specific JECS and Japanese official guidance had already been separately targeted in the prior search.

Search-tool record:
- result cards surfaced: 17
- unique pages / records screened: 17
- excluded as published before 2024-08-01: 9
- remaining within update window: 8
- excluded from Q006 primary scope because the paper primarily concerned child screen exposure rather than separable caregiver exposure: 1
- in-scope candidate records: 7
- newly identified records requiring additional assessment: 3

New records:
1. Shen et al. 2026, PMID 41685749
   - 207 Chinese families; preschool mean age 4.72y
   - cross-sectional, both parents' reports
   - adds coparenting-mediated social-emotional association
   - included as supplementary C001/C006 evidence; does not change causal conclusion

2. Toledo-Vargas et al. 2026 SUNRISE, PMID 42289737, DOI 10.1111/cch.70305
   - 27 countries; N=2,232; mean age 4.2y
   - caregiver smartphone-use frequency not associated with gross/fine motor, working memory or inhibition after adjustment
   - included as primary null evidence for C001/C007
   - materially strengthens the warning against a simple frequency-dose interpretation

3. Kazali 2026, PMID 41217605
   - N=621 parents; child age 3–12y
   - technoference and parent/child executive functions all parent-reported
   - age range is mixed and not stratified to the primary 0–5.99y population in the abstract
   - retained as indirect/background evidence, not primary evidence table

Current-search conclusion:
No newly identified record establishes long-term causal harm or a universal caregiver-use threshold. The SUNRISE null result strengthens exposure decomposition; Shen adds cross-sectional family-process evidence without resolving temporal direction.

## Search limitations

- database-native full export: not retained for historical targeted search
- deduplication: no formal project-wide deduplication log for historical search
- dual screening: no
- formal project-level risk-of-bias tool: no
- systematic reviewを名乗れるか: NO
