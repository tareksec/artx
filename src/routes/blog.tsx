import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — ArtX Studio" },
      { name: "description", content: "Design thinking, SEO strategy and engineering insights from the ArtX team." },
      { property: "og:title", content: "Blog — ArtX Studio" },
      { property: "og:description", content: "Insights on web design, development and SEO from the ArtX team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndexPage,
});

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogIndexPage() {
  const { language } = useLanguage();

  return (
    <>
      <section className="px-6 pt-40 pb-8 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "ব্লগ" : "Blog"}
            </div>
            <h1 className="text-balance text-6xl leading-[0.95] md:text-8xl">
              {language === "bn" ? (
                <>তথ্যবহুল ও শিক্ষণীয় <em className="not-italic text-accent">নিবন্ধ</em>।</>
              ) : (
                <>Ideas worth <em className="not-italic text-accent">reading</em>.</>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {language === "bn"
                ? "ডিজাইন থিংকিং, এসইও স্ট্র্যাটেজি এবং ওয়েব ডেভেলপমেন্ট নিয়ে ArtX টিমের বিশেষ নিবন্ধ ও অভিজ্ঞতা।"
                : "Design thinking, SEO strategy and engineering insights from the ArtX team."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime} {language === "bn" ? "মিনিট পড়ার সময়" : "min read"}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold leading-tight tracking-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <time className="text-xs text-muted-foreground" dateTime={post.date}>
                        {formatDate(post.date, language)}
                      </time>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all group-hover:border-accent group-hover:text-accent">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
