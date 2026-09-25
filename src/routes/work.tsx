import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/sections/Portfolio";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Web Design Portfolio & Case Studies | ArtX Studio" },
      { name: "description", content: "Explore selected web design and custom development case studies from ArtX. High-converting B2B, SaaS, and e-commerce websites built to perform. View work!" },
      { property: "og:title", content: "Web Design Portfolio & Case Studies | ArtX Studio" },
      { property: "og:description", content: "Explore selected web design and custom development case studies from ArtX." },
      { property: "og:url", content: "https://artxdev.tech/work" },
    ],
    links: [{ rel: "canonical", href: "https://artxdev.tech/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const { language } = useLanguage();

  return (
    <>
      <section className="px-6 pt-40 pb-8 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            {language === "bn" ? "আর্কাইভ" : "Archive"}
          </div>
          <h1 className="text-balance text-6xl leading-[0.95] md:text-8xl">
            {language === "bn" ? (
              <>আমাদের <em className="not-italic text-accent">কাজ</em>।</>
            ) : (
              <>ArtX studio <em className="not-italic text-accent">portfolio</em>.</>
            )}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {language === "bn"
              ? "নির্বাচিত প্রজেক্টের তালিকা। প্রতিটি প্রজেক্টের সাথে বিস্তারিত কেস স্টাডি ও বাস্তব ফলাফল রয়েছে।"
              : "A curated selection of our high-performing projects. Full case studies and analytics reports from our ArtX studio portfolio available on request."}
          </p>
        </div>
      </section>
      <Portfolio />
      <Footer />
    </>
  );
}
