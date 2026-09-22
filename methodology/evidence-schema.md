# Evidence Review Schema v0.1

Status: DRAFT

この文書は、Evidence Review を記事本文だけでなく構造化データとして保持するための初期仕様です。

## Question

```yaml
question_id: Q001
title:
domain:
age_range:
status:
created_at:
last_searched_at:
last_reviewed_at:
next_review_due:
```

## Scope

```yaml
population:
intervention_or_exposure:
comparator:
outcomes:
  - outcome_id:
    name:
time_horizon:
countries_of_interest:
```

## Claim

```yaml
claims:
  - claim_id: C001
    statement:
    outcome_id:
    causal_or_associational:
    summary:
    uncertainty:
```

## Search

```yaml
search:
  databases:
  searched_at:
  queries:
  date_range:
  language_filters:
  inclusion_criteria:
  exclusion_criteria:
  records_identified:
  records_screened:
  full_texts_assessed:
  included_count:
```

## Evidence source

```yaml
sources:
  - source_id:
    citation:
    url:
    publication_year:
    study_design:
    country:
    sample_size:
    age_range:
    intervention_or_exposure:
    comparator:
    outcome:
    effect_estimate:
    confidence_interval:
    follow_up:
    main_limitations:
    risk_of_bias_notes:
    japan_applicability:
```

## Interpretation

```yaml
interpretation:
  bottom_line:
  supported_claims:
  unsupported_or_uncertain_claims:
  limitations:
  japan_applicability:
  practical_implications:
  formal_grade_available:
  formal_grade_source:
```

## Safety

```yaml
safety:
  medical_safety_flag:
  guideline_priority:
  referral_or_escalation_notes:
```

## Versioning

```yaml
version:
  current_version:
  changes:
    - date:
      description:
      evidence_trigger:
```
