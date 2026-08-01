import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "publisher": {
        "@type": "Organization",
        "name": "ArtX Studio"
      }
    };

    return {
      meta: [
        { title: `${post.title} — ArtX Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `https://artxx.lovable.app/blog/${post.slug}` },
        { property: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: `https://artxx.lovable.app/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(schema),
        }
      ]
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

/** Very lightweight Markdown-to-JSX renderer for headings, paragraphs, lists and code. */
function RenderContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const id = line.slice(3).toLowerCase().replace(/\s+/g, "-");
      elements.push(
        <h2 key={i} id={id} className="mt-12 mb-4 text-2xl font-semibold tracking-tight scroll-mt-24">
          {line.slice(3)}
        </h2>
      );
      i++;
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 text-xl font-semibold tracking-tight">
          {line.slice(4)}
        </h3>
      );
      i++;
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(
        <p key={i} className="mt-4 font-semibold text-foreground">
          {line.slice(2, -2)}
        </p>
      );
      i++;
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="mt-4 space-y-2 pl-4">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-foreground/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-10 border-border" />);
      i++;
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="my-8 border-l-2 border-accent pl-6 text-xl italic leading-relaxed text-foreground/90">
          {line.slice(2)}
        </blockquote>
      );
      i++;
    } else if (line.trim() === "") {
      i++;
    } else {
      // Inline bold within paragraph
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={i} className="mt-4 leading-relaxed text-foreground/80">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="font-semibold text-foreground">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
      i++;
    }
  }

  return <div>{elements}</div>;
}

/** Extract H2 headings as table-of-contents entries */
function extractHeadings(content: string) {
  return content
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => ({
      text: l.slice(3),
      id: l.slice(3).toLowerCase().replace(/\s+/g, "-"),
    }));
}

function BlogArticlePage() {
  const { post, related } = Route.useLoaderData();
  const headings = extractHeadings(post.content);

  return (
    <>
      {/* Back nav */}
      <div className="fixed top-20 left-6 z-40 hidden md:block">
        <Link
          to="/blog"
          className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Blog
        </Link>
      </div>

      {/* Article header */}
      <header className="px-6 pt-40 pb-12 md:pt-52">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {post.readTime} min read
              </span>
            </div>
            <h1 className="text-balance text-4xl leading-tight md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark text-xs font-bold text-dark-foreground">
                {post.author.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="text-sm font-medium">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">
                  {post.author.role} · <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Article body */}
      <div className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_3fr]">

            {/* Table of contents — sticky on desktop */}
            {headings.length > 1 && (
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Contents
                  </div>
                  <nav aria-label="Table of contents">
                    <ol className="space-y-2">
                      {headings.map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className="block text-sm text-muted-foreground transition-colors hover:text-accent"
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

            {/* Main content */}
            <article className="min-w-0">
              <RenderContent content={post.content} />
              
              {/* Author Bio Footer */}
              <div className="mt-16 rounded-2xl bg-secondary p-8 flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-dark text-xl font-bold text-dark-foreground">
                  AX
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Written by the ArtX team</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    We're a small team of designers, engineers and search strategists.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center md:text-left">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/20">
                  <span className="text-lg leading-none">✱</span> Need this done for your site? Talk to us
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10">
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                Continue reading
              </div>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((rel, i) => rel && (
                <ScrollReveal key={rel.slug} delay={i * 0.1}>
                  <Link
                    to={`/blog/${rel.slug}`}
                    className="group flex flex-col gap-3 rounded-2xl border border-border p-6 transition-all hover:border-accent/30"
                  >
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent self-start">
                      {rel.category}
                    </span>
                    <h3 className="font-semibold leading-snug group-hover:text-accent transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{rel.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-accent mt-auto pt-2">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
