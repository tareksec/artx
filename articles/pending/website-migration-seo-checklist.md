# Website Migration SEO Checklist: Move a Site Without Losing Search Visibility

A website migration is safest when you treat it as a controlled URL and infrastructure release, not only a redesign. Before launch, map every important old URL to its final destination, prepare server-side permanent redirects, update canonicals and internal links, publish a clean sitemap, and test the new site. After launch, use Google Search Console and server logs to find crawl or indexing problems. This process reduces avoidable disruption, but no migration plan can guarantee a particular ranking, traffic level, or indexing outcome.

For a business serving Bangladesh or Dhaka, the same discipline applies whether the change is a new design, a move from one CMS to another, a new domain, or a new hosting provider. The key decision is whether the user-visible URLs change.

## Quick Answer: How Do You Migrate a Website Without Losing SEO Signals?

> **The short answer:** First classify the migration. If URLs change, create an old-to-new URL map, keep the new information architecture as close as practical, use direct HTTP 301 or 308 redirects, update canonical and hreflang annotations, replace internal links, submit the new sitemap, and use Change of Address only for a domain or subdomain move. If URLs stay the same and only hosting changes, test the new infrastructure, preserve Search Console verification, update DNS, and monitor both servers. In either case, inspect representative URLs before and after launch.

Google’s [site-move guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) separates URL migrations from hosting changes. It also notes that search visibility can fluctuate temporarily while systems recrawl and reassess the moved pages. A careful checklist is therefore a risk-control method, not a ranking promise.

## 1. Classify the Migration Before Changing Anything

Write down exactly what will change. A redesign can involve several migrations at once, and combining them makes diagnosis harder.

### URL-changing migration

This includes moving from `oldbrand.com` to `newbrand.com`, changing a subdomain, changing folder paths, or replacing URL patterns such as `/services/web-design` with `/solutions/web-design`. Use a mapping between the old and new URLs. Google recommends server-side permanent redirects for this type of move and says the destination should be the final, relevant page.

A domain or subdomain move may also use Search Console’s **Change of Address** tool. It is not a general “tell Google about my redesign” button. Google’s [Change of Address documentation](https://support.google.com/webmasters/answer/9370220?hl=en) says not to use it for an HTTP-to-HTTPS change, a www/non-www choice on the same domain, a path move within the same site, or a hosting/CDN change where URLs remain unchanged.

### Hosting-only migration

If visitors keep the same URLs and you are changing hosting, a CDN, or server infrastructure, follow Google’s [hosting-change guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes). Copy the site to the new environment, test pages and forms, confirm that Googlebot can reach it, preserve ownership verification, update DNS, and monitor the old and new servers. Do not add redirects or Change of Address just because the origin server changed.

### A useful scope rule

Avoid changing the domain, URL structure, content architecture, templates, and language structure in one release unless there is a strong reason. Search Console’s guidance warns that combining a site move with content and URL-structure changes can create traffic loss while Google reassesses individual pages. If the project requires multiple changes, record them separately and keep a rollback plan for each layer.

## 2. Build the Old-to-New URL Map

The URL map is the migration’s source of truth. Export the old site’s indexable URLs from its CMS, sitemap, analytics, server logs, and Search Console reports. Include important service pages, location pages, blog posts, images or downloadable files, and URLs that receive meaningful external links. Do not rely on a short list of pages remembered by the design team.

For each old URL, assign one of four outcomes:

1. **One-to-one redirect:** the old page has a clear new equivalent.
2. **Consolidation redirect:** several genuinely merged pages point to one new page that covers their subject.
3. **Keep and update:** the URL remains valid, so it receives the new content without a redirect.
4. **Retire:** there is no useful replacement. Return the appropriate status and provide a helpful user experience rather than sending visitors to an unrelated page.

Use the final production URL in the map, not a temporary staging hostname. Record the expected status code and destination so a developer or QA reviewer can test it mechanically. For a Dhaka service business, for example, a page about web development should redirect to the new web-development page, not automatically to the homepage merely because both URLs belong to the same company.

## 3. Implement Direct, Relevant Redirects

When a page has permanently moved, use a server-side HTTP **301** or **308** redirect when your hosting environment supports it. Google’s [redirect documentation](https://developers.google.com/search/docs/crawling-indexing/301-redirects) explains that permanent redirects are a signal that the new target should be treated as canonical. JavaScript redirects are a fallback, not the preferred migration mechanism.

The safest rule is **old URL → final URL**. Avoid chains such as `old URL → temporary URL → new URL`; they add latency and make troubleshooting harder. Google advises keeping chains low and redirecting directly to the final destination whenever possible.

An abstract server rule looks like this:

```text
/old-services/web-design  →  https://example.com/services/web-design  (301)
/old-blog/seo-guide       →  https://example.com/blog/seo-guide       (301)
```

Do not redirect every retired URL to the homepage. Google warns that irrelevant bulk redirects can confuse users and may be treated as soft 404s. Redirect only when the destination is a genuinely useful replacement or a documented consolidation of the old content.

Before launch, test a representative sample from every URL pattern. After launch, crawl the complete map and record failures such as redirect loops, unexpected 200 responses, 404s, 5xx errors, HTTP-to-HTTPS reversals, or a destination that redirects again.

## 4. Align Canonicals, Internal Links, and Language Signals

Redirects are only one part of the signal set. On the new site, each canonical page should point to its own final absolute URL with a self-referencing `rel="canonical"` where appropriate. Update internal links so they go directly to the new canonical URLs instead of passing through old redirects.

Google’s [canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) describes redirects and `rel="canonical"` as strong signals and sitemap inclusion as a weaker signal. The practical lesson is consistency: do not put one URL in the sitemap, a different URL in the canonical tag, and a third URL in most internal links.

If the site has English and Bangla versions, update every `hreflang` reference to the new URLs and ensure each language version has a canonical in the same language when one exists. Check reciprocal annotations rather than changing only the English template. This matters for a bilingual Bangladesh site because a migration can silently leave language links pointing to the retired host or old folder.

Also review links outside the main navigation: breadcrumbs, related articles, XML feeds, structured data, Open Graph URLs, downloadable PDFs, image references, and transactional emails. A page can look correct in a browser while still exposing old URLs in its metadata or content.

## 5. Prepare the Sitemap and Crawl Controls

Create a sitemap containing the new, canonical production URLs. Google explains in its [sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) that a sitemap can help discovery, especially for a new site with few external links, but it does not guarantee that every listed URL will be crawled or indexed.

Before submission, check that the sitemap does not contain staging URLs, redirecting old URLs, blocked URLs, duplicate variants, or pages marked `noindex`. Keep `<lastmod>` accurate when you use it. Make sure the sitemap is generated from the same content source as the new site so future releases do not reintroduce retired URLs.

Staging protection needs special care. A private staging environment should not be publicly crawlable. If a temporary public hostname is necessary for testing, use the documented noindex approach and remove temporary crawl or index blocks before the production cutover. Re-check `robots.txt`, page-level `noindex`, authentication, firewall rules, and response headers on launch day.

For a useful migration handoff, connect the sitemap to the [ArtX SEO services](/services/seo-services) workflow or your own maintenance checklist, but keep the responsibility with the site owner and development team. Search Console access should remain with the business that owns the domain, not only with an agency account.

## 6. Use Search Console for Pre- and Post-Launch QA

Verify both the old and new properties before a domain move. If you are changing domains, Google requires ownership of both properties for the Change of Address workflow. Submit the tool only after redirects are live and the pre-move checks pass. For a path change or a hosting-only move, use redirects, sitemaps, and monitoring instead of Change of Address.

Use URL Inspection on representative pages before launch and after launch. Google’s [URL Inspection documentation](https://support.google.com/webmasters/answer/9012289?hl=en) distinguishes the indexed result from the live test: the indexed result reflects the most recently indexed version, while the live test fetches the current public page. Inspect the homepage, a high-value service page, a location page if relevant, a blog post, and a page from each major template.

Check the following in each result:

- The old URL returns the intended redirect and ends at the final URL.
- The new URL is reachable without a login or accidental firewall block.
- The HTML contains the expected title, H1, main content, and canonical.
- The new page is not accidentally marked `noindex`.
- The rendered page loads important resources and content.
- The sitemap and internal links use the production URL.

You can request indexing for a small number of corrected or high-priority URLs when the live test is eligible. Treat the request as a crawl request, not an inclusion guarantee. For many changed URLs, a clean sitemap and crawlable internal links are more appropriate than submitting every page manually.

## 7. Monitor the Move After Launch

Keep the old and new properties, redirects, server logs, and measurement setup available during the transition. Review Search Console’s Page indexing and Performance reports for unexpected exclusions, crawl errors, impressions, clicks, and page-level changes. Compare the old and new URL groups rather than looking only at total traffic.

Google says a small or medium site may take a few weeks for most pages to move, while larger sites can take longer. The actual timing depends on the number of URLs and server conditions. A temporary visibility change is not, by itself, proof that the migration failed. Look for specific evidence: redirect errors, blocked crawls, canonical conflicts, missing pages, slow responses, or a sitemap that lists the wrong host.

Keep redirects for as long as practical. Google’s site-move guide says generally at least one year, while the Change of Address help page specifies at least 180 days and longer if traffic is still reaching the old URLs. Updating your own internal links and asking important referring sites to update their links can reduce dependence on redirects over time.

For ongoing [web development services](/services/web-development), document the URL map, release date, status-code tests, Search Console properties, and open issues in the project handoff. A clear record makes the next redesign safer and gives the team evidence for decisions instead of relying on ranking anecdotes.

## Frequently Asked Questions (FAQ)

### Should I use Change of Address for a redesign on the same domain?
No. If the domain and user-visible URLs stay the same, you do not use Change of Address. If individual paths change, map the old paths to relevant new pages and implement direct redirects. If only the hosting provider changes, follow the hosting-migration process and preserve the URLs.

### Can I redirect all old pages to the new homepage?
Usually not. Redirect an old page to the closest useful replacement or to a genuinely consolidated page. Sending unrelated pages to the homepage creates a poor user experience and can be treated as a soft 404. Pages without a relevant replacement should be handled deliberately rather than hidden in a bulk rule.

### How long should I keep migration redirects?
Keep them as long as practical. Google’s site-move guidance generally recommends at least one year, while its Change of Address documentation requires at least 180 days and advises keeping redirects longer when old URLs still receive traffic. Update internal and external links so visitors reach the new URLs directly.

### Does a correct migration guarantee rankings or traffic?
No. A technically correct migration can reduce avoidable problems, but it cannot guarantee a ranking position, traffic level, indexing decision, or AI-search citation. Search visibility may fluctuate while Google discovers, crawls, and reassesses the new URLs. Use Search Console, logs, and page-level QA to diagnose concrete issues.

### What should a Bangladesh business test first after moving its website?
Test the pages that represent real business journeys: the homepage, service pages, contact form, phone or messaging links, location pages, English/Bangla language switches if present, and any payment or booking flow. Then verify that the same pages are crawlable, canonicalized, and linked from the new production site.

## Sources

- [Google Search Central: Site Moves and Migrations](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Google Search Central: Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Google Search Console Help: Change of Address tool](https://support.google.com/webmasters/answer/9370220?hl=en)
- [Google Search Central: Changing your hosting](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes)
- [Google Search Central: Learn about sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Search Console Help: URL Inspection tool](https://support.google.com/webmasters/answer/9012289?hl=en)
- [Google Search Central: How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
