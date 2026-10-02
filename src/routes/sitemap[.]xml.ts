import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects, serviceDetails, blogPosts, locationDetails } from "@/content/site";

const BASE_URL = "https://artxdev.tech";

interface SitemapEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];

        // Use dynamic slugs from content
        const projectSlugs = projects.map((p) => p.slug);
        const serviceSlugs = serviceDetails.map((s) => s.slug);
        const blogSlugs = blogPosts.map((p) => ({ slug: p.slug, date: p.date }));
        const locationSlugs = locationDetails.map((l) => l.slug);

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/work", changefreq: "weekly", priority: "0.9", lastmod: "2026-09-01" },
          { path: "/workproof", changefreq: "weekly", priority: "0.85", lastmod: today },
          { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: today },
          { path: "/why-us", changefreq: "monthly", priority: "0.8", lastmod: "2026-08-15" },
          { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: "2026-08-15" },
          { path: "/contact", changefreq: "monthly", priority: "0.8", lastmod: "2026-07-01" },
          { path: "/blog", changefreq: "daily", priority: "0.9", lastmod: today },
          { path: "/pricing", changefreq: "weekly", priority: "0.9", lastmod: "2026-09-01" },
          { path: "/faq", changefreq: "monthly", priority: "0.8", lastmod: "2026-09-15" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.7", lastmod: "2026-08-01" },
          { path: "/careers", changefreq: "monthly", priority: "0.6", lastmod: "2026-07-01" },
          { path: "/privacy-policy", changefreq: "monthly", priority: "0.4", lastmod: "2026-01-01" },
          ...locationSlugs.map((slug) => ({
            path: `/location/${slug}`,
            changefreq: "weekly" as const,
            priority: "0.9",
            lastmod: today,
          })),
          ...serviceSlugs.map((slug) => ({
            path: `/services/${slug}`,
            changefreq: "weekly" as const,
            priority: "0.8",
            lastmod: today,
          })),
          ...projectSlugs.map((slug) => ({
            path: `/work/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
            lastmod: "2026-08-01",
          })),
          ...blogSlugs.map(({ slug, date }) => ({
            path: `/blog/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
            lastmod: date,
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
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
