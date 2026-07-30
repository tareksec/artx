import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { Footer } from "@/components/sections/Footer";
import { conceptWork, type ConceptItem } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/concepts")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      category: search.category as string | undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Concept Work — ArtX Studio" },
      { name: "robots", content: "noindex, nofollow" }
    ],
  }),
  component: ConceptsPage,
});

const ALL_CATEGORIES = [
  "All",
  "SaaS",
  "E-commerce",
  "Brand",
  "Web",
  "Presentation",
  "Health & Medical",
  "Education",
  "Blog & News",
  "Agency",
  "Food & Beverage",
];

function ConceptCard({ p, delay, index }: { p: ConceptItem; delay: number; index: number }) {
  const { t, language } = useLanguage();
  const itemsTranslations = (t as any).concepts.items;
  
  const title = itemsTranslations[p.titleKey] || p.slug;
  const description = itemsTranslations[p.descriptionKey] || p.category;
  
  const thumbSrc = p.images[0].replace('.webp', '-thumb.webp');

  return (
    <ScrollReveal delay={delay}>
      <Link 
        to={`/concepts/${p.slug}`} 
        search={(prev: any) => prev}
        className="block h-full group max-w-[584px] mx-auto w-full"
      >
        <HoverCard radius="rounded-2xl" className="bg-secondary h-full flex flex-col transition-colors group-hover:bg-accent/5">
          <div className="aspect-[4/3] overflow-hidden relative bg-muted">
            {/* Skeleton placeholder */}
            <div className="absolute inset-0 bg-foreground/5 animate-pulse" />
            
            <img
              src={thumbSrc}
              alt={title}
              width={800}
              height={600}
              loading={index < 6 ? "eager" : "lazy"}
              decoding="async"
              className="relative z-10 h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-sm text-accent uppercase tracking-wider">{p.category}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
            {p.images.length > 1 && (
              <p className="mt-4 text-xs font-medium text-accent">
                {p.images.length} {language === "bn" ? "টি ইমেজ" : "images"} • {language === "bn" ? "গ্যালারি দেখুন" : "View gallery"}
              </p>
            )}
          </div>
        </HoverCard>
      </Link>
    </ScrollReveal>
  );
}

function ConceptsPage() {
  const { language, t } = useLanguage();
  const search = Route.useSearch();
  const [activeCategory, setActiveCategory] = useState(search.category || "All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = conceptWork.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(12);
  };

  return (
    <>
      <section className="bg-background px-6 pt-40 pb-8 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              {language === "bn" ? "কনসেপ্ট ওয়ার্ক" : "Concept Work"}
            </div>
            
            <h1 className="text-balance text-5xl leading-[0.95] md:text-7xl font-bold">
              {language === "bn" ? (
                <>ভিজ্যুয়াল <em className="not-italic text-accent">অন্বেষণ</em>।</>
              ) : (
                <>Visual <em className="not-italic text-accent">explorations</em>.</>
              )}
            </h1>
            
            <div className="mt-8 inline-block rounded-full bg-accent/10 px-4 py-2 border border-accent/20">
              <p className="text-sm font-medium text-accent">
                {(t as any).concepts?.disclaimer || "Concept explorations — not commissioned client work."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal delay={0.1}>
            <div className="mb-10 flex overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:pb-0 sm:flex-wrap sm:overflow-x-visible hide-scrollbar gap-2" role="tablist" aria-label="Filter concepts by category">
              {ALL_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full border px-4 py-2.5 min-h-[44px] text-sm whitespace-nowrap transition-colors flex items-center justify-center ${
                    activeCategory === category
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-foreground/70 hover:border-accent hover:text-accent"
                  }`}
                >
                  {language === "bn" && category === "All" ? "সকল" : category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              <p className="text-lg font-medium">
                {language === "bn" ? "কোনো প্রজেক্ট মেলেনি।" : "No concepts found."}
              </p>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            {visibleItems.map((p, i) => (
              <ConceptCard key={p.slug} p={p} delay={i % 12 * 0.05} index={i} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="rounded-full border border-border bg-secondary px-8 py-2.5 min-h-[44px] text-sm font-medium flex items-center justify-center transition-colors hover:border-accent hover:text-accent"
              >
                {language === "bn" ? "আরও লোড করুন" : "Load more"}
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
}
