import type { SiteAudit, IssueSeverity } from "./seo-audit";

export type Recommendation = {
  id: string;
  severity: IssueSeverity;
  field: string;
  headline: string;
  what: string;
  how: string;
  example?: string;
  affectedUrls: string[];
  affectedCount: number;
};

type IssuePattern = {
  id: string;
  field: string;
  match: (message: string) => boolean;
  severity: IssueSeverity;
  headline: string;
  what: string;
  how: string;
  example?: string;
};

const PATTERNS: IssuePattern[] = [
  {
    id: "title-missing",
    field: "Title",
    match: (m) => m.startsWith("Missing <title>"),
    severity: "critical",
    headline: "Add missing page titles",
    what: "These pages have no <title> tag at all. Google uses the title as the main clickable text in search results — without it, your listing looks broken.",
    how: "Add a unique <title> tag to each page's <head>. It should describe exactly what the page is about.",
    example: '<title>Portfolio — ArtX Creative Studio</title>',
  },
  {
    id: "title-short",
    field: "Title",
    match: (m) => m.startsWith("Title too short"),
    severity: "warning",
    headline: "Lengthen short page titles",
    what: "Titles under 30 characters don't use the available search snippet space. You're missing a chance to include keywords and context.",
    how: "Expand the title to 30–60 characters. Add a brand name, location, or keyword to make it more specific.",
    example: '"Home" → "ArtX Studio — Creative Design & Web Development"',
  },
  {
    id: "title-long",
    field: "Title",
    match: (m) => m.startsWith("Title too long"),
    severity: "warning",
    headline: "Shorten titles over 60 characters",
    what: "Google truncates long titles with an ellipsis in search results, cutting off your message and reducing click-through rates.",
    how: "Trim titles to under 60 characters. Put the most important keyword first and move your brand name to the end.",
    example: '"We are ArtX Studio, a Creative Design Agency..." → "ArtX Studio — Creative Design Agency"',
  },
  {
    id: "title-duplicate",
    field: "Title",
    match: (m) => m.startsWith("Duplicate title"),
    severity: "warning",
    headline: "Fix duplicate page titles",
    what: "Multiple pages sharing the same title confuse Google about which page should rank for a query. This splits your ranking power.",
    how: "Give every page a unique title that describes its specific content. Use a template like \"[Page Topic] — [Brand Name]\".",
    example: '"ArtX Studio" (×3) → "Work — ArtX Studio", "About — ArtX Studio", "Contact — ArtX Studio"',
  },
  {
    id: "desc-missing",
    field: "Meta description",
    match: (m) => m.startsWith("Missing meta description"),
    severity: "critical",
    headline: "Add missing meta descriptions",
    what: "Without a meta description, Google auto-generates one from random page text — often poorly. A good description is your ad copy in search results.",
    how: "Add a <meta name=\"description\"> tag to each page. Write 70–160 characters that summarise the page and include a call to action.",
    example: '<meta name="description" content="ArtX Studio builds high-converting websites and brand identities for creative businesses. View our portfolio or get a free quote.">',
  },
  {
    id: "desc-short",
    field: "Meta description",
    match: (m) => m.startsWith("Description too short"),
    severity: "warning",
    headline: "Expand short meta descriptions",
    what: "Short descriptions don't give enough context to searchers or search engines. They look sparse in results and get fewer clicks.",
    how: "Expand the description to 70–160 characters. Include the primary keyword, a benefit, and ideally a CTA like \"View our work\" or \"Get in touch\".",
    example: '"We design websites." → "We design fast, conversion-focused websites and brand identities for startups and creative agencies. See our portfolio."',
  },
  {
    id: "desc-long",
    field: "Meta description",
    match: (m) => m.startsWith("Description too long"),
    severity: "warning",
    headline: "Trim long meta descriptions",
    what: "Descriptions over 160 characters get cut off in search results, making them harder to read and less likely to get clicks.",
    how: "Shorten to 120–155 characters. Lead with the most important information — put your CTA at the end.",
    example: 'Cut after ~150 chars and end with a clear action: "...See our case studies →"',
  },
  {
    id: "desc-duplicate",
    field: "Meta description",
    match: (m) => m.startsWith("Duplicate description"),
    severity: "warning",
    headline: "Write unique meta descriptions",
    what: "Reusing the same description across pages signals to Google that the content is similar, reducing each page's individual ranking potential.",
    how: "Write a tailored description for each page. Match it to that page's content and the queries you want it to rank for.",
  },
  {
    id: "content-none",
    field: "Content",
    match: (m) => m.startsWith("No content extracted"),
    severity: "critical",
    headline: "Pages returned no extractable content",
    what: "These pages had no text content — they may be JavaScript-rendered without SSR, blocked by auth, or returning errors. Google can't index them.",
    how: "Ensure pages render content server-side (SSR/SSG). Check that the URLs aren't behind auth or returning 4xx/5xx errors.",
  },
  {
    id: "content-thin",
    field: "Content",
    match: (m) => m.startsWith("Thin content"),
    severity: "critical",
    headline: "Add more content to thin pages",
    what: "Under 100 words is considered thin content — Google's Panda algorithm specifically targets this and may demote the whole site.",
    how: "Expand each page to at least 300 words of meaningful, relevant text. Add context, FAQs, or supporting detail related to the page's topic.",
    example: "A services page with just a heading and a button → add descriptions, benefits, process steps, and an FAQ.",
  },
  {
    id: "content-sparse",
    field: "Content",
    match: (m) => m.startsWith("Sparse content"),
    severity: "warning",
    headline: "Expand sparse page content",
    what: "Pages with 100–300 words are below the threshold most SEO tools consider sufficient. They may rank, but rarely outrank more thorough competitors.",
    how: "Aim for 300–600 words on supporting pages, 800+ on key landing pages. Add unique insights, visuals with alt text, or testimonials.",
  },
  {
    id: "h1-missing",
    field: "H1",
    match: (m) => m.startsWith("No H1"),
    severity: "warning",
    headline: "Add H1 headings to pages",
    what: "The H1 is the primary on-page signal for what a page is about. Missing it makes the page structure ambiguous to both users and crawlers.",
    how: "Add exactly one <h1> per page. It should contain your primary keyword and closely match (but not copy) the page title.",
    example: '<h1>Creative Web Design for Ambitious Brands</h1>',
  },
];

const SEVERITY_ORDER: Record<IssueSeverity, number> = {
  critical: 0,
  warning: 1,
  info: 2,
};

export function buildRecommendations(audit: SiteAudit): Recommendation[] {
  const buckets = new Map<string, { pattern: IssuePattern; urls: Set<string> }>();

  for (const page of audit.pages) {
    for (const issue of page.issues) {
      for (const pattern of PATTERNS) {
        if (issue.field === pattern.field && pattern.match(issue.message)) {
          if (!buckets.has(pattern.id)) {
            buckets.set(pattern.id, { pattern, urls: new Set() });
          }
          buckets.get(pattern.id)!.urls.add(page.url);
          break;
        }
      }
    }
  }

  const recs: Recommendation[] = [];
  for (const [, { pattern, urls }] of buckets) {
    recs.push({
      id: pattern.id,
      severity: pattern.severity,
      field: pattern.field,
      headline: pattern.headline,
      what: pattern.what,
      how: pattern.how,
      example: pattern.example,
      affectedUrls: [...urls],
      affectedCount: urls.size,
    });
  }

  recs.sort((a, b) => {
    const sevDiff = SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity];
    if (sevDiff !== 0) return sevDiff;
    return b.affectedCount - a.affectedCount;
  });

  return recs;
}
