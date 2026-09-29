# Q008 Independent Publication Review

Date: 2026-09-26  
Mode: independent reconstruction from major sources; existing Review conclusions were not assumed correct  
Verdict: PASS_WITH_CHANGES  
Final state after required changes: REVIEW

## Scope

The central claims were reconstructed from:
- Mrad et al. 2021 systematic review
- Van Aggelpoel et al. 2021 cluster RCT
- Blum et al. 2003 prospective timing cohort
- 2020 LUTD systematic review/meta-analysis
- Blum et al. 2004 prospective constipation/refusal cohort
- Naenen et al. 2025 cross-sectional descriptive study
- Huijgen et al. 2026 Generation R prospective cohort
- practical guidance boundaries already recorded in the formal review

The existing Reader Layer was checked only after the principal evidence boundaries were reconstructed.

## Claim reconstruction

### C001 — one universally best method

Decision: PASS

Mrad 2021 reports substantial heterogeneity and methodological limitations, with inadequate direct comparison between broad child-oriented and structured behavioral approaches. A universal winner is not established.

Required boundary:
- do not promote child-oriented/readiness-based training as proven superior
- do not promote structured behavioral training as proven superior

The formal Reader Layer preserves this.

### C001a — specific daycare group programme

Decision: PASS WITH SETTING BOUNDARY

Van Aggelpoel 2021 directly supports a specific readiness-selected daycare package:
- median daytime training duration 2 vs 5 weeks
- log-rank p=0.007
- higher hazard of becoming daytime trained during 6-week follow-up, p=0.018

This is programme-level evidence. It does not isolate individual components or establish class-wide superiority.

The formal Reader Layer preserves this distinction and records small-sample / cluster / transportability limitations.

### C002 / C003 — timing and a universal best starting age

Decision: PASS

Blum 2003:
- 406 enrolled at 17–19 months; 378 followed
- earlier initiation correlated with earlier completion
- earlier intensive initiation also correlated with longer training duration
- before 27 months, intensive start did not correlate with earlier completion in that subgroup

The study authors discuss limited benefit from very early intensive training, but this observational result does not create a universal 27-month threshold.

The formal Review correctly keeps:
1. start age
2. completion age
3. elapsed duration

as different outcomes.

### C004 — later initiation and LUT dysfunction

Decision: PASS WITH CAUSAL DOWNGRADE

The 2020 meta-analysis:
- 10 studies
- 24,121 participants
- pooled OR 0.71 (95% CI 0.63–0.81)
- before-24-month subgroup OR 0.77 (95% CI 0.63–0.94)
- no RCTs in the pooled evidence
- heterogeneous timing definitions

Although the source uses causal-sounding language in discussion/conclusion, the design supports association, not proof that starting after 24 months causes LUT dysfunction.

The formal Reader Layer appropriately downgrades the causal wording.

### C005 — constipation / stool refusal

Decision: PASS_WITH_CHANGES

Naenen 2025 is explicitly described in Methods as cross-sectional descriptive despite “cohort study” appearing in the title:
- N=1,218
- FC prevalence 16.8%
- diaper request OR 2.8 (1.8–4.2)
- stool refusal OR 3.2 (2.3–4.3)
- hiding OR 3.7 (2.6–5.4)

This establishes association only.

Blum 2004 adds temporal evidence:
- 380 children followed prospectively
- STR developed in 24.4%
- among children with both hard stools and STR, constipation preceded STR in 93.4%
- painful defecation preceded STR in 74.4% of children with both

Required change:
The opening Reader Layer originally placed “hiding while defecating” beside symptoms that could be read as standalone consultation triggers. That was too strong for a cross-sectional association. The text was revised so hiding remains an association signal, not a diagnostic or referral criterion by itself.

### C006 — normal timing

Decision: PASS

Huijgen 2026, N=6,850:
- 60.1% had started by 24 months
- 60.0% had completed by 36 months
- timing varied by sex and social/cultural factors

This is useful descriptive context and does not create a deadline. The formal Review preserves that boundary.

### C007 — readiness

Decision: PASS WITH GUIDANCE BOUNDARY

Readiness is presented as practical guidance, not comparative-efficacy proof. No age or readiness sign is converted into a causal threshold.

### C008 — clinical boundary

Decision: PASS_WITH_LIMITATION

The current Japanese 2025 constipation guideline is retained as the current clinical reference. Because full recommendation text was not directly verified through the review path, the Reader Layer does not invent specific recommendations.

## Required changes

1. Do not treat hiding while defecating as a standalone diagnostic/referral criterion; retain it as an association with functional constipation.
2. Keep the current Japanese constipation guideline at the level of verified current-reference metadata unless recommendation text is directly verified.

Both changes are reflected in the current branch.

## Gate assessment

- A. Source integrity: PASS
- B. Interpretation: PASS_WITH_CHANGES
- C. Practical implications: PASS_WITH_CHANGES
- D. Reproducibility: PASS_WITH_LIMITATION — targeted review, no native database export / dual screening
- E. Independent publication review: COMPLETED

## Final decision

PASS_WITH_CHANGES

The evidence synthesis is suitable to proceed toward Publication Gate after its release dependency is canonical. Current research state remains REVIEW. Production release is a separate state.
