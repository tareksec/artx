import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight, ChevronRight, Calendar, Clock, User, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

function extractFaqsFromMarkdown(content: string): { q: string; a: string }[] {
  const faqSection = content.split(/## Frequently Asked Questions/i)[1];
  if (!faqSection) return [];
  const items: { q: string; a: string }[] = [];
  const parts = faqSection.split(/###\s+/);
  for (let i = 1; i < parts.length; i++) {
    const lines = parts[i].trim().split("\n");
    const q = lines[0].replace(/[?]/g, "").trim() + "?";
    const a = lines
      .slice(1)
      .join(" ")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .trim();
    if (q && a) {
      items.push({ q, a });
    }
  }
  return items;
}

function extractHeadings(content: string) {
  return content
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => {
      const text = l.slice(3).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return { text, id };
    });
}

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};

    const fullTitle = `${post.title} | ArtX`;
    const seoTitle = fullTitle.slice(0, 60);
    const metaDesc = post.excerpt.slice(0, 155);
    const canonicalUrl = `https://artxdev.tech/blog/${post.slug}`;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: canonicalUrl,
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://artxdev.tech/#organization",
        name: "ArtX Studio",
        url: "https://artxdev.tech",
        logo: "https://artxdev.tech/favicon.ico",
      },
    };

    const breadcrumbsSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://artxdev.tech",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://artxdev.tech/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: canonicalUrl,
        },
      ],
    };

    const faqs = extractFaqsFromMarkdown(post.content);
    const faqSchema = faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    } : null;

    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify(articleSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbsSchema),
      },
    ];

    if (faqSchema) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      });
    }

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: metaDesc },
        { property: "og:title", content: post.title },
        { property: "og:description", content: metaDesc },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seoTitle },
        { name: "twitter:description", content: metaDesc },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
      scripts,
    };
  },
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    const related = post.relatedSlugs
      .map((s) => blogPosts.find((p) => p.slug === s))
      .filter(Boolean)
      .slice(0, 3);
    return { post, related };
  },
  component: BlogArticlePage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogArticlePage() {
  const { post, related } = Route.useLoaderData();
  const headings = extractHeadings(post.content);

  return (
    <>
      {/* Back button */}
      <div className="fixed top-20 left-6 z-40 hidden md:block">
        <Link
          to="/blog"
          className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          All Articles
        </Link>
      </div>

      {/* Header */}
      <header className="px-6 pt-36 pb-12 md:pt-48">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>

          <ScrollReveal>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3 w-3" /> {post.readTime} min read
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-3 w-3" /> <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
            </div>

            <h1 className="text-balance text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              {post.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author info */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent text-sm font-bold border border-accent/30">
                  {post.author.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{post.author.name}</div>
                  <div className="text-xs text-muted-foreground">{post.author.role} · ArtX Studio</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Article Content */}
      <div className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_3fr]">

            {/* Sticky Table of Contents */}
            {headings.length > 1 && (
              <aside className="hidden lg:block">
                <div className="sticky top-28 rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Table of Contents
                  </div>
                  <nav aria-label="Table of contents">
                    <ol className="space-y-2 text-xs">
                      {headings.map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className="block text-muted-foreground transition-colors hover:text-accent leading-snug py-0.5"
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </aside>
            )}

            {/* Main Content with ReactMarkdown */}
            <article className="min-w-0 max-w-3xl">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => {
                      const text = String(children);
                      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                      return (
                        <h2 id={id} className="mt-14 mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground scroll-mt-24 border-b border-border/60 pb-3">
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ children }) => (
                      <h3 className="mt-10 mb-3 text-xl font-bold tracking-tight text-foreground">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="mt-4 space-y-2 pl-4 list-disc marker:text-accent text-foreground/85">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mt-4 space-y-2 pl-4 list-decimal marker:text-accent text-foreground/85">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-foreground/85 text-base leading-relaxed pl-1">
                        {children}
                      </li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="my-8 rounded-2xl border-l-4 border-accent bg-accent/5 p-6 text-lg italic text-foreground leading-relaxed">
                        {children}
                      </blockquote>
                    ),
                    hr: () => <hr className="my-10 border-border" />,
                    a: ({ href, children }) => {
                      if (href?.startsWith("/")) {
                        return (
                          <Link to={href} className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
                            {children}
                          </Link>
                        );
                      }
                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                        >
                          {children}
                        </a>
                      );
                    },
                    table: ({ children }) => (
                      <div className="my-8 overflow-x-auto rounded-2xl border border-border">
                        <table className="w-full text-left text-sm divide-y divide-border">
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-muted/60 text-xs uppercase font-semibold text-foreground">
                        {children}
                      </thead>
                    ),
                    th: ({ children }) => (
                      <th className="p-4">{children}</th>
                    ),
                    td: ({ children }) => (
                      <td className="p-4 text-foreground/80 leading-snug">{children}</td>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Author Bio Box */}
              <div className="mt-16 rounded-3xl bg-secondary p-8 border border-border flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-dark text-xl font-bold text-accent">
                  AX
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Written by {post.author.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">{post.author.role} at ArtX</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ArtX is an independent studio founded in 2016 in Bangladesh, engineering high-craft digital products, custom e-commerce stores, and high-ranking SEO strategies for brands worldwide.
                  </p>
                </div>
              </div>

              {/* In-Article Conversion Banner */}
              <div className="mt-12 rounded-3xl bg-accent/10 border border-accent/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Need this implemented for your website?</h3>
                  <p className="text-sm text-muted-foreground mt-1">Talk directly with our senior engineers and get a tailored strategy.</p>
                </div>
                <Link
                  to="/contact"
                  className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  Book a free call
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="border-t border-border px-6 py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10">
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Continue Reading
              </div>
              <h2 className="text-3xl font-bold">Related Insights &amp; Guides</h2>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((rel, i) => rel && (
                <ScrollReveal key={rel.slug} delay={i * 0.1}>
                  <Link
                    to={`/blog/${rel.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-border p-6 bg-card transition-all hover:border-accent/40 h-full shadow-xs"
                  >
                    <div>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent mb-4 inline-block">
                        {rel.category}
                      </span>
                      <h3 className="font-bold text-lg leading-snug group-hover:text-accent transition-colors mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{rel.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent mt-6 pt-4 border-t border-border/50">
                      Read full article
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
