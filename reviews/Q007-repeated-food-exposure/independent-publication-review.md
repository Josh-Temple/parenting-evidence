# Q007 Independent Publication Review

Date: 2026-09-25  
Mode: independent reconstruction from major sources; existing Review conclusions were not assumed correct  
Verdict: PASS_WITH_CHANGES  
Final state after required changes: PUBLISHED

## Scope

Major conclusions were independently reconstructed from:
- USDA/NESR 2025 DGAC systematic review
- Appleton et al. 2018 systematic review/meta-analysis and erratum
- Shapiro et al. 2026 RCT
- Fleischeuer et al. 2026 preregistered intervention
- Karagiannaki et al. 2021
- Ahern et al. 2019
- Zeinstra et al. 2018
- Goday et al. 2019 PFD consensus
- Estrem et al. 2025 PFD/ARFID consensus
- 2026 PFD/ARFID psychological-treatment consensus
- MHLW 2019 feeding guide
- AAP / HealthyChildren practical guidance

The existing Reader Layer was read only after the evidence boundaries were reconstructed.

## Claim reconstruction

### C001 — target vegetable acceptance / intake

Decision: PASS

Independent reconstruction:
- USDA/NESR: repeated taste exposure to target vegetable(s) is likely to increase target acceptance at 4–24 months and 2–6 years; external Grade Moderate in both age groups.
- Appleton 2018: repeated exposure vs no exposure produced small pooled benefits for liking and intake.
  - liking SMD 0.35, 95% CI 0.17–0.53; 17 comparisons / 820 participants
  - intake SMD 0.23, 95% CI 0.07–0.39; 21 comparisons / 1,130 participants
- effect is average, target-food focused, and not guaranteed for each child.
- long-term evidence remains limited.

Difference from existing Review:
No material change required.

### C002a — different vegetable generalization, 4–24 months

Decision: PASS

Independent reconstruction:
USDA/NESR supports generalization from repeated vegetable exposure to acceptance of a different vegetable, but not fruit, with external Grade Moderate.

Difference from existing Review:
Current age/food-category boundary is appropriate.

### C002b — different vegetable generalization, 2–6 years

Decision: PASS

Independent reconstruction:
USDA/NESR rates this conclusion as Limited. Six RCTs were identified in the review, with inconsistent direction/effect size and generally small groups.

Difference from existing Review:
Current Limited wording is appropriate.

### C002c / C006 — overall picky eating, diet, nutrition, growth

Decision: PASS

Independent reconstruction:
The reviewed repeated-exposure evidence does not establish that the intervention resolves the whole picky-eating phenotype, ensures nutritional adequacy, or improves growth.

Difference from existing Review:
No strengthening is justified.

### C003 — universal number / frequency

Decision: PASS

Independent reconstruction:
- Karagiannaki 2021 found no particular frequency could be recommended.
- Shapiro 2026 randomized 59 infant-caregiver dyads to three schedules with the same target of 10 artichoke exposures. Fifty-four completed. Intake did not increase in the intensive 2-week schedule but increased in the interrupted and extended schedules.
- These results support the proposition that count alone is insufficient; they do not establish a universal spacing schedule.

Difference from existing Review:
No "4 times", "10 times", "15–20 times", or similar number should be presented as a biological threshold.

### C004 — non-taste exposure

Decision: PASS

Independent reconstruction:
- ages 2–6: willingness-to-try outcome supported by USDA/NESR external Grade Moderate
- ages 4–24m: Grade Not Assignable
- willingness to try must remain separate from liking and actual intake

Difference from existing Review:
Current boundary is appropriate.

### C005 — positive non-food reinforcement

Decision: PASS_WITH_CONTEXT

Independent reconstruction:
Fleischeuer 2026 included 62 children aged 4–6 in a preregistered 10-day within-subject study. Positive non-food reinforcement produced the highest post-intervention intake, and liking improved most clearly in that condition.

Boundary:
- one relatively small school-based study
- non-food reinforcement is not the same as food bribes
- this is not a universal recommendation that parents should use rewards

Difference from existing Review:
Current strategy-specific wording is appropriate.

### C007 — clinical boundary

Decision: CHANGE REQUIRED

Independent reconstruction:
- Goday 2019 defines PFD using medical, nutritional, feeding-skill, and psychosocial dysfunction domains.
- Estrem 2025 clarifies that PFD and ARFID have diagnostic overlap and distinction; they should not be treated as interchangeable labels.
- A 2026 consensus on psychological treatment identifies structured food/feeding exposure as a common treatment element across PFD/ARFID, with delivery shaped by severity, developmental status, and target behavior.

Required distinction:
Generic household repeated offering is not equivalent to clinical exposure-based treatment. The Review should not imply either that repeated exposure is irrelevant to clinical care or that home advice is adequate treatment for a clinically significant feeding/eating disorder.

### Japan applicability

Decision: PASS_WITH_LIMITATION

Independent reconstruction:
MHLW 2019 guidance supports increasing food variety with development, experiencing different tastes/textures, and enjoyable shared eating. It does not establish a national fixed repeated-exposure count.

Direct Japanese repeated-target-food intervention evidence was not established by the targeted search. This must remain a search limitation, not a claim that no Japanese study exists.

### Household practical guidance

Decision: CHANGE REQUIRED / GUIDANCE LAYER ONLY

AAP / HealthyChildren practical guidance supports:
- allowing refusal rather than forcing intake
- re-offering previously refused foods
- small portions / low-pressure presentation

Boundary:
This is guidance, not evidence used to estimate the causal effect of repeated exposure. Numeric "tries" statements on guidance pages must not be converted into a universal threshold.

## Update evidence

No new evidence found in this independent pass overturns the central target-food conclusion.

Two clinical-boundary sources were added because they materially improve scope control:
- Estrem et al. 2025, PMID 39679744
- Psychological Treatment for PFD and ARFID consensus 2026, PMID 42178663

AAP practical guidance was added only to support the household-guidance layer and is not pooled into the efficacy evidence.

## Required changes

1. Add PFD/ARFID overlap and 2026 clinical-treatment consensus to the clinical boundary.
2. Clarify that clinical structured exposure is not equivalent to generic home repeated offering.
3. Attribute "do not force / low-pressure re-offering" to pediatric practical guidance rather than to repeated-exposure effect estimates.
4. Keep all numeric try-count language out of the evidence conclusion.
5. Run Publication Gate only after PR #20 is canonical on main; this condition was satisfied on 2026-09-26 before the state transition to PUBLISHED.

All five changes are reflected in the current PR #21 branch.

## Gate assessment

- A. Source integrity: PASS
- B. Interpretation: PASS_WITH_CHANGES
- C. Practical implications: PASS_WITH_CHANGES
- D. Reproducibility: PASS_WITH_LIMITATION — targeted update search, no dual screening / database-native export
- E. Independent publication review: COMPLETED

## Final decision

PASS_WITH_CHANGES

The central evidence synthesis passed the final Publication Gate on 2026-09-26 after PR #20 became canonical on main. Final research publication state: PUBLISHED. Production release remains a separate state.
