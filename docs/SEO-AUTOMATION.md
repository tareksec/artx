# ArtX SEO Content Automation

## Publishing flow

- A daily Manus ScheduleTask prepares exactly one new, source-checked article in `src/content/blog-queue.json` before the existing noon Bangladesh Standard Time publisher runs.
- `.github/workflows/daily-publish.yml` validates the queue, publishes one queued article at 12:00 BST, commits the content changes to `main`, and pushes them.
- Vercel deploys from `main` after the push.

## Editorial requirements

Each article must:

- Target one primary search intent and a small set of closely related terms around ArtX / ArtX Dev, web design, web development, SEO, GEO, AEO, or relevant Bangladesh and Dhaka searches.
- Use a distinct, human-readable slug, a useful 20–110 character title, and a 50–180 character description.
- Answer the primary question immediately, then develop the topic with clear H2/H3 sections, examples, tables or lists where helpful, and at least three FAQ questions.
- Include relevant internal links to service, location, work, pricing, contact, or related blog pages.
- Use Article, BreadcrumbList, and FAQ structured data supplied by the blog route.
- Attribute authorship accurately and avoid unsupported credentials, fabricated case-study results, made-up statistics, or guarantees of rankings.
- Prefer first-party documentation, official datasets, and clearly attributed research when making factual or time-sensitive claims.

The automation is intentionally quality-gated. If an article is thin, duplicated, unsupported, or fails the queue validator, it remains unpublished for correction rather than being pushed live.
