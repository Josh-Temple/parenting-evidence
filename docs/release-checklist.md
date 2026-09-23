# Production Release Checklist

Status: ACTIVE
Applies to: Parenting Evidence release from release/evidence-review-v1

## 1. Pre-merge research gate

- [ ] Q001–Q005 are PUBLISHED
- [ ] independent-publication-review.md exists for every PUBLISHED review
- [ ] Publication Gate status matches review metadata
- [ ] Methodology version is current
- [ ] Reader Layer and Evidence Table claim strength are aligned
- [ ] no unresolved source-integrity HOLD

## 2. Code / build gate

- [ ] release branch is ahead of and not behind main
- [ ] release PR is mergeable
- [ ] GitHub Actions site build succeeds
- [ ] review index contains all intended reviews
- [ ] static routes generate for all review slugs
- [ ] metadata does not leak into Reader Layer body

## 3. Vercel capacity gate

- [ ] Vercel status is not build-rate-limit
- [ ] avoid repeated deploy attempts while rate-limited
- [ ] merge only once after capacity is available

## 4. Merge

- [ ] fresh-read main SHA
- [ ] fresh-read release PR head SHA
- [ ] confirm no unexpected new commits / conflicts
- [ ] mark PR ready
- [ ] merge release PR to main once

## 5. Production validation

Expected URLs:

- [ ] /
- [ ] /reviews/shared-reading-language
- [ ] /reviews/screen-time-language
- [ ] /reviews/time-out-behavior
- [ ] /reviews/sleep-training
- [ ] /reviews/early-childcare-development
- [ ] /methodology

For each relevant page:
- [ ] HTTP 200
- [ ] title and status render
- [ ] Reader Layer visible
- [ ] Audit Layer / evidence / search content visible
- [ ] no raw metadata at article top
- [ ] representative source link opens
- [ ] mobile layout usable

## 6. Production provenance

- [ ] Production deployment state READY
- [ ] Production commit SHA equals merged main SHA
- [ ] public domain points to intended deployment
- [ ] review count = 5
- [ ] methodology page shows v1.0

## 7. After release

- [ ] record release SHA and date
- [ ] note any corrections
- [ ] set next evidence-review update trigger / target date
- [ ] only then begin bulk Q006+ expansion