import { createServerFn } from "@tanstack/react-start";
import FirecrawlApp, { type ScrapeResponse, type CrawlResponse } from "@mendable/firecrawl-js";

function getClient() {
  const apiKey = process.env.FIRECRAWL_API_KEY;
  if (!apiKey) throw new Error("FIRECRAWL_API_KEY is not set in environment secrets.");
  return new FirecrawlApp({ apiKey });
}

/**
 * Scrape a single URL and return its markdown + metadata.
 * Call from any component: `const data = await scrapePage({ data: { url } })`
 */
export const scrapePage = createServerFn({ method: "POST" })
  .validator((data: { url: string; onlyMainContent?: boolean }) => data)
  .handler(async ({ data }) => {
    const app = getClient();
    const result = (await app.scrapeUrl(data.url, {
      formats: ["markdown", "html"],
      onlyMainContent: data.onlyMainContent ?? true,
    })) as ScrapeResponse;

    if (!result.success) {
      throw new Error(`Firecrawl scrape failed: ${(result as any).error ?? "unknown error"}`);
    }

    return {
      url: data.url,
      markdown: result.markdown ?? null,
      html: result.html ?? null,
      metadata: result.metadata ?? null,
    };
  });

/**
 * Crawl an entire site (up to `limit` pages) and return markdown for each.
 * Call from any component: `const data = await crawlSite({ data: { url, limit } })`
 */
export const crawlSite = createServerFn({ method: "POST" })
  .validator((data: { url: string; limit?: number }) => data)
  .handler(async ({ data }) => {
    const app = getClient();
    const result = (await app.crawlUrl(data.url, {
      limit: data.limit ?? 10,
      scrapeOptions: { formats: ["markdown"], onlyMainContent: true },
    })) as CrawlResponse;

    if (!result.success) {
      throw new Error(`Firecrawl crawl failed: ${(result as any).error ?? "unknown error"}`);
    }

    return {
      url: data.url,
      pages: (result.data ?? []).map((page: any) => ({
        url: page.url ?? page.metadata?.url ?? "",
        markdown: page.markdown ?? null,
        metadata: page.metadata ?? null,
      })),
    };
  });
