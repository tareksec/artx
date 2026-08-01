import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { projects as defaultProjects, type CaseStudy } from "@/content/site";
import { estimateReadingTime, recordCaseStudyView } from "@/lib/reading-time";
import { useLanguage } from "@/components/providers/LanguageProvider";

function useCaseStudyView(id: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [views, setViews] = useState<number | null>(null);
  const hasCounted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted.current) {
          hasCounted.current = true;
          setViews(recordCaseStudyView(id));
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return { ref, views };
}

function ProjectCard({
  p,
  delay,
  allProjects,
  onSelectRelated,
}: {
  p: CaseStudy;
  delay: number;
  allProjects: CaseStudy[];
  onSelectRelated: (title: string) => void;
}) {
  const { ref, views } = useCaseStudyView(p.slug);
  const { language } = useLanguage();
  const readingTime = estimateReadingTime(p);

  const related = allProjects
    .filter(
      (o) =>
        o.title !== p.title &&
        (getCategory(o) === getCategory(p) ||
          o.challenge.split(" ").some((w) => p.challenge.includes(w))),
    )
    .slice(0, 2);

  return (
    <ScrollReveal delay={delay}>
      <div ref={ref} id={`project-${p.title}`}>
        <Link to={`/work/${p.slug}`} className="block">
        <HoverCard radius={p.radii} className="bg-secondary">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={p.img}
              alt={`${p.title} — ${p.tag}`}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
              </div>
              <span className="text-sm tabular-nums text-muted-foreground">
                {p.year}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              <span>
                {readingTime} {language === "bn" ? "মিনিট পড়ার সময়" : "min read"}
              </span>
              {views !== null && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    {views} {views === 1 ? (language === "bn" ? "বার দেখা হয়েছে" : "view") : (language === "bn" ? "বার দেখা হয়েছে" : "views")}
                  </span>
                </>
              )}
            </div>

            <dl className="mt-6 grid gap-3 border-t border-border pt-5 text-sm">
              <div className="grid grid-cols-[6.5rem_1fr] gap-3">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {language === "bn" ? "চ্যালেঞ্জ" : "Challenge"}
                </dt>
                <dd className="text-foreground/85">{p.challenge}</dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-3">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {language === "bn" ? "সমাধান" : "Solution"}
                </dt>
                <dd className="text-foreground/85">{p.solution}</dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-3">
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                  {language === "bn" ? "ফলাফল" : "Result"}
                </dt>
                <dd className="font-medium text-foreground">{p.result}</dd>
              </div>
            </dl>

            {related.length > 0 && (
              <div className="mt-6 border-t border-border pt-5">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {language === "bn" ? "সম্পর্কিত কাজ" : "Related work"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {related.map((r) => (
                    <button
                      key={r.title}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectRelated(r.title);
                      }}
                      className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                    >
                      {r.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </HoverCard>
        </Link>
      </div>
    </ScrollReveal>
  );
}

function getCategory(p: CaseStudy): string {
  const tag = p.tag.toLowerCase();
  if (tag.includes("fintech")) return "FinTech";
  if (tag.includes("education") || tag.includes("course") || tag.includes("publishing") || tag.includes("pathagar")) return "Education";
  if (tag.includes("portfolio")) return "Portfolio";
  if (tag.includes("editorial")) return "Editorial";
  if (tag.includes("restaurant")) return "Restaurant";
  if (tag.includes("product") || tag.includes("saas") || tag.includes("app")) return "Product";
  if (tag.includes("commerce") || tag.includes("store")) return "E-commerce";
  if (tag.includes("brand") || tag.includes("identity")) return "Brand";
  return "Web";
}

const categories = ["All", "Editorial", "E-commerce", "Restaurant", "Product", "FinTech", "Education", "Portfolio"];

export function Portfolio({
  items = defaultProjects,
  limit,
}: {
  items?: CaseStudy[];
  limit?: number;
}) {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = items.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || getCategory(p) === activeCategory;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      p.title.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q) ||
      p.result.toLowerCase().includes(q) ||
      p.challenge.toLowerCase().includes(q) ||
      p.solution.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "নির্বাচিত কাজ" : "Selected Work"}
            </div>
            <h2 className="text-balance text-5xl leading-[1] md:text-7xl">
              {language === "bn" ? (
                <>মানসম্মত কাজের <em className="not-italic text-accent">নিদর্শন</em>।</>
              ) : (
                <>Craft that <em className="not-italic text-accent">ships</em>.</>
              )}
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            {language === "bn"
              ? "আমাদের সাম্প্রতিক কিছু সফল কাজের নমুনা। প্রতিটি প্রজেক্টের সাথে রয়েছে বিস্তারিত কেস স্টাডি ও বাস্তব ফলাফল।"
              : "A short list of recent partnerships. Full archive available on request — every project ships with a case study."}
          </p>
        </ScrollReveal>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:pb-0 sm:flex-wrap sm:overflow-x-visible hide-scrollbar gap-2"
            role="tablist"
            aria-label="Filter work by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
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

          <div className="mt-4 w-full">
            {activeCategory === "E-commerce" && (
              <p className="text-sm text-muted-foreground">Expert <strong className="font-medium">e-commerce website development</strong> engineered for conversions and seamless shopping experiences.</p>
            )}
            {activeCategory === "Product/SaaS" && (
              <p className="text-sm text-muted-foreground">Specialized <strong className="font-medium">SaaS website design and development</strong> that drives sign-ups and user engagement.</p>
            )}
          </div>

          <label className="relative flex-shrink-0 mt-4 sm:mt-0">
            <span className="sr-only">{language === "bn" ? "প্রজেক্ট খুঁজুন" : "Search projects"}</span>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder={language === "bn" ? "প্রজেক্ট খুঁজুন..." : "Search projects…"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none transition-colors focus:border-accent sm:w-52"
            />
          </label>
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="text-lg font-medium">
              {language === "bn" ? "আপনার খোঁজের সাথে কোনো প্রজেক্ট মেলেনি।" : "No projects match your search."}
            </p>
            <button
              type="button"
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="mt-4 text-sm text-accent hover:underline"
            >
              {language === "bn" ? "ফিল্টার রিসেট করুন" : "Clear filters"}
            </button>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {(limit ? filtered.slice(0, limit) : filtered).map((p, i) => (
            <ProjectCard
              key={p.title}
              p={p}
              delay={i * 0.05}
              allProjects={items}
              onSelectRelated={(title) => {
                setActiveCategory("All");
                requestAnimationFrame(() => {
                  document
                    .getElementById(`project-${title}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                });
              }}
            />
          ))}
        </div>

        {limit && filtered.length > limit && (
          <ScrollReveal className="mt-16 text-center" delay={0.2}>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {language === "bn" ? "সব কাজ দেখুন" : "View all work"}
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
