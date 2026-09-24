# Production Release Checklist

Status: ACTIVE  
Applies to: Parenting Evidence daily release  
Deployment policy: `docs/vercel-daily-deployment-policy.md`

## 1. Research / content gate

For every review included in the release:

- [ ] publication state is internally consistent
- [ ] required source verification is complete
- [ ] required independent publication review is complete
- [ ] Publication Gate matches review metadata
- [ ] Reader Layer and Evidence Table claim strength are aligned
- [ ] no unresolved source-integrity HOLD

## 2. Code / build gate

- [ ] release changes are batched into one daily release
- [ ] release PR is mergeable
- [ ] package-lock.json is committed
- [ ] `npm ci` succeeds
- [ ] `npm run validate:content` succeeds
- [ ] GitHub Actions Site build succeeds
- [ ] static routes generate for all configured review slugs
- [ ] age/domain metadata matches review scope
- [ ] raw review metadata does not leak into Reader Layer

## 3. Daily Vercel gate

- [ ] no Vercel deployment has already been triggered on the current JST calendar day
- [ ] there are actual release changes
- [ ] non-main Vercel Git deployments remain disabled by `vercel.json`
- [ ] do not create a no-op commit only to trigger deployment
- [ ] do not perform a second deployment attempt on the same JST day unless the user explicitly overrides the policy

## 4. Merge

- [ ] fresh-read `main` SHA
- [ ] fresh-read release PR head SHA
- [ ] confirm no unexpected new commits / conflicts
- [ ] merge to `main` once

## 5. Production validation

- [ ] GitHub Actions on merged `main` succeeds
- [ ] Vercel Production state is READY
- [ ] Vercel Production `githubCommitSha` equals merged `main` SHA
- [ ] public domain points to the intended deployment
- [ ] home page renders
- [ ] all configured review routes return HTTP 200
- [ ] methodology route returns HTTP 200
- [ ] representative Reader Layer / Audit Layer content renders
- [ ] representative source link opens
- [ ] no raw metadata appears at article top

## 6. Release record

Record:

- [ ] release date (JST)
- [ ] merged `main` SHA
- [ ] Vercel deployment ID / URL
- [ ] Production SHA match result
- [ ] smoke-test result
- [ ] any correction / follow-up needed

## 7. No-change day

If no release changes exist:

- [ ] do not merge to `main`
- [ ] do not trigger Vercel
- [ ] continue research / branch / Issue work normally
