import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Web Design & SEO Insights | ArtX Studio" },
      { name: "description", content: "Design thinking, SEO strategy and engineering insights from the ArtX team." },
      { property: "og:title", content: "Blog — Web Design & SEO Insights | ArtX Studio" },
      { property: "og:description", content: "Insights on web design, development and SEO from the ArtX team." },
      { property: "og:url", content: "https://artxx.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://artxx.lovable.app/blog" }],
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

const categories = ["All", "Design", "Development", "SEO", "Security", "Case Study"];

function BlogIndexPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category.includes(activeCategory));
  }, [activeCategory]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

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

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat === "All" && language === "bn" ? "সব" : cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          {featuredPost && (
            <ScrollReveal delay={0.2} className="mb-12">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group flex flex-col md:flex-row overflow-hidden rounded-[2.5rem] border border-border bg-background transition-all duration-300 hover:border-accent/30 hover:shadow-xl"
              >
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {featuredPost.readTime} {language === "bn" ? "মিনিট পড়া" : "min read"}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight group-hover:text-accent transition-colors mb-6">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-6 mt-auto">
                    <time className="text-sm font-medium text-muted-foreground" dateTime={featuredPost.date}>
                      {formatDate(featuredPost.date, language)}
                    </time>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border transition-all group-hover:border-accent group-hover:text-accent">
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Remaining Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={0.3 + i * 0.1}>
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

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                {language === "bn" ? "এই ক্যাটাগরিতে কোনো পোস্ট পাওয়া যায়নি।" : "No posts found in this category."}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
