import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/sections/Portfolio";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — ArtX studio portfolio" },
      { name: "description", content: "Selected recent work from ArtX: editorial websites, e-commerce, brand systems and SaaS products." },
      { property: "og:title", content: "Work — ArtX studio portfolio" },
      { property: "og:description", content: "Selected recent projects from ArtX." },
      { property: "og:url", content: "https://artxx.lovable.app/work" },
    ],
    links: [{ rel: "canonical", href: "https://artxx.lovable.app/work" }],
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
