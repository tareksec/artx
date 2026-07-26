import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://artxx.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Import project and service slugs for dynamic routes
        const projectSlugs = ["gearabout", "jun-century", "veative-kitchen", "northform-saas"];
        const serviceSlugs = ["website-design", "web-development", "seo", "web-security"];
        const blogSlugs = ["web-design-trends-2025", "core-web-vitals-seo-guide", "gearabout-retrospective"];

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/work", changefreq: "weekly", priority: "0.9" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/pricing", changefreq: "monthly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.8" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.8" },
          { path: "/careers", changefreq: "monthly", priority: "0.6" },
          { path: "/privacy-policy", changefreq: "monthly", priority: "0.4" },
          ...projectSlugs.map((slug) => ({ path: `/work/${slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, changefreq: "monthly" as const, priority: "0.7" })),
          ...blogSlugs.map((slug) => ({ path: `/blog/${slug}`, changefreq: "monthly" as const, priority: "0.6" })),
        ];
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
