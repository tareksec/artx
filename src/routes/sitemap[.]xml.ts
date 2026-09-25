import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects, serviceDetails, blogPosts, locationDetails } from "@/content/site";

const BASE_URL = "https://artxdev.tech";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Use dynamic slugs from content
        const projectSlugs = projects.map((p) => p.slug);
        const serviceSlugs = serviceDetails.map((s) => s.slug);
        const blogSlugs = blogPosts.map((p) => p.slug);
        const locationSlugs = locationDetails.map((l) => l.slug);

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/work", changefreq: "weekly", priority: "0.9" },
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/why-us", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.9" },
          { path: "/pricing", changefreq: "weekly", priority: "0.9" },
          { path: "/faq", changefreq: "monthly", priority: "0.8" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.7" },
          { path: "/careers", changefreq: "monthly", priority: "0.6" },
          { path: "/privacy-policy", changefreq: "monthly", priority: "0.4" },
          ...locationSlugs.map((slug) => ({ path: `/location/${slug}`, changefreq: "weekly" as const, priority: "0.9" })),
          ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, changefreq: "weekly" as const, priority: "0.8" })),
          ...projectSlugs.map((slug) => ({ path: `/work/${slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...blogSlugs.map((slug) => ({ path: `/blog/${slug}`, changefreq: "monthly" as const, priority: "0.7" })),
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
