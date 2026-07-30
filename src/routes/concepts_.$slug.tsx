import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { conceptWork } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/concepts_/$slug")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      category: search.category as string | undefined,
    };
  },
  head: ({ params }) => {
    const concept = conceptWork.find((p) => p.slug === params.slug);
    if (!concept) return {};
    return {
      meta: [
        { title: `Concept Work — ArtX Studio` },
        { name: "robots", content: "noindex, nofollow" },
      ],
    };
  },
  loader: ({ params }) => {
    const index = conceptWork.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    
    const concept = conceptWork[index];
    const next = conceptWork[(index + 1) % conceptWork.length];
    
    return { concept, next };
  },
  component: ConceptDetailPage,
});

function ConceptDetailPage() {
  const { concept, next } = Route.useLoaderData();
  const { language, t } = useLanguage();
  const itemsTranslations = (t as any).concepts.items;
  
  const title = itemsTranslations[concept.titleKey] || concept.slug;
  const description = itemsTranslations[concept.descriptionKey] || concept.category;

  return (
    <>
      {/* Back nav */}
      <div className="fixed top-[4.5rem] left-4 z-40 md:top-20 md:left-6">
        <Link
          to="/concepts"
          search={(prev: any) => prev}
          className="flex h-11 min-w-[44px] items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground shadow-sm"
        >
          <ArrowLeft className="h-5 w-5 md:h-4 md:w-4" />
          <span className="hidden md:inline">{language === "bn" ? "কনসেপ্ট ওয়ার্ক" : "Concepts"}</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 pt-40 pb-0 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              <span>{concept.category}</span>
            </div>
            <h1 className="text-balance text-5xl leading-[0.95] md:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-12">
            {concept.images.map((img, i) => (
              <ScrollReveal key={i} delay={0.1}>
                <div className="flex justify-center items-center overflow-hidden rounded-2xl bg-secondary/50 shadow-lg p-4 sm:p-8 min-h-[30vh]">
                  <img
                    src={img}
                    alt={`${title} - image ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-auto h-auto max-w-full object-contain rounded-md shadow-sm"
                    style={{ maxHeight: 'calc(100vh - 8rem)' }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next concept */}
      {next && (
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-8 rounded-3xl border border-border p-8 text-center md:p-16">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {language === "bn" ? "পরবর্তী কনসেপ্ট" : "Next concept"}
                </div>
                <h2 className="text-3xl font-semibold md:text-5xl">
                  {itemsTranslations[next.titleKey] || next.slug}
                </h2>
                <p className="max-w-md text-muted-foreground">{next.category}</p>
                <Link
                  to={`/concepts/${next.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
                >
                  {language === "bn" ? "কনসেপ্ট দেখুন" : "View concept"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
