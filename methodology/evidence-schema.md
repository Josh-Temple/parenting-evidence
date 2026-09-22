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
  description:
  dimensions:
    quantity:
    medium_or_type:
    content:
    social_context:
    purpose:
    age_at_onset:
comparator:
outcomes:
  - outcome_id:
    name:
time_horizon:
countries_of_interest:
```

`dimensions` は問いに必要な項目だけ使用する。例えば読み聞かせReviewでは不要なmedia-specific項目を埋めない。スクリーン利用のように、同じ総時間でも内容・端末・共同利用で意味が変わる曝露では分解して記録する。

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
  search_mode:
  anchor_reviews:
```

`search_mode` には、例として `de_novo_systematic`、`anchored_update`、`targeted_search` 等を記録し、実施していない網羅検索を systematic search と表現しない。

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
    causal_inference_notes:
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
