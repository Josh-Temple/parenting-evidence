# Vercel Daily Deployment Policy

Status: ACTIVE after merge to `main`  
Effective date: 2026-09-24  
Timezone: Asia/Tokyo (JST)

## Objective

Vercel deployments are limited to **at most one deployment per JST calendar day, and only when there are changes to release**.

This policy is intended to avoid exhausting Vercel Hobby deployment capacity while preserving GitHub-based research and CI work during the day.

## Git deployment rule

`vercel.json` disables automatic Vercel Git deployments for every branch except `main`.

Therefore:

- feature / research / review branches: **no Vercel deployment**
- pull-request updates: **no Vercel Preview deployment**
- `main`: Vercel deployment enabled

Branch patterns use Vercel's minimatch rules. The catch-all rule must be `**: false`, not `*: false`, so branch names containing `/` (for example `research/...`, `hardening/...`, `release/...`) are also disabled.

GitHub Actions remains the pre-merge validation path for non-main branches.

A branch push that unexpectedly creates a Vercel Preview is a release-control failure. Stop further release work for that branch, record the deployment, and verify the branch-pattern configuration before continuing.

## Daily release rule

1. Work may continue on non-main branches throughout the day.
2. Changes intended for release are batched.
3. Before release, GitHub Actions must pass.
4. Merge to `main` **at most once per JST calendar day**.
5. If there are no release changes, do not merge and do not deploy.
6. After the merge, verify the resulting Vercel Production deployment once.
7. Do not trigger a second Vercel deployment on the same JST calendar day.
8. If the daily deployment fails, record the failure and defer the next deployment attempt to the next JST calendar day unless the user explicitly overrides this policy.

## Release provenance

For each daily release, record:

- release date (JST)
- pre-merge PR / release branch head SHA
- merged `main` SHA
- GitHub Actions result
- Vercel Production deployment state
- Vercel Production `githubCommitSha`
- public smoke-test result

## Q006 transition

The previous Q006 release rule required a current-head READY Vercel Preview before merge.

Under the daily-deployment policy, non-main Preview deployments are intentionally disabled. Q006 must therefore use:

- cross-file consistency fixes
- GitHub Actions / content validation
- static route/content checks

as the pre-merge gate, followed by the once-daily `main` deployment and Production smoke test.

The old READY Preview requirement must not be used after this policy becomes active.

## What does not count as a Vercel deployment

GitHub-only activity may continue without consuming a Vercel deployment:

- Issue comments
- research notes
- branch commits
- PR review
- GitHub Actions validation

The invariant is:

> **0 deployments on days without a release; 1 deployment maximum on a JST day with a release.**
