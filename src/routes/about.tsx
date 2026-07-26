import { createFileRoute } from "@tanstack/react-router";
import { BrandPhilosophy } from "@/components/sections/BrandPhilosophy";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { teamMembers, studioMilestones, studioValues } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ArtX Studio" },
      { name: "description", content: "ArtX is a small, senior team of designers, engineers and search strategists building high-performing digital products since 2016." },
      { property: "og:title", content: "About — ArtX Studio" },
      { property: "og:description", content: "A small senior team building high-performing digital products." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      {/* Header */}
      <section className="px-6 pt-40 pb-8 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            {language === "bn" ? "স্টুডিও" : "Studio"}
          </div>
          <h1 className="text-balance text-6xl leading-[0.95] md:text-8xl">
            {language === "bn" ? (
              <>ছোট ও অভিজ্ঞ টিম।<br /><em className="not-italic text-accent">বিশ্বমানের কাজের মান।</em></>
            ) : (
              <>Small team.<br /><em className="not-italic text-accent">Senior output.</em></>
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {language === "bn"
              ? "২০১৬ সালে মাত্র দুজনের হাত ধরে ArtX এর যাত্রা শুরু হয়েছিল। এক দশক পর আজ আমরা আট জনের একটি নিবেদিত টিম—যেখানে প্রতিটি কাজে রয়েছে অভিজ্ঞতার ছোঁয়া এবং মানের নিশ্চয়তা।"
              : "ArtX was founded in 2016 as a two-person studio. A decade in, we're eight — enough to move, small enough that senior hands touch every deliverable."}
          </p>
        </div>
      </section>

      {/* Brand Philosophy (existing) */}
      <BrandPhilosophy />

      {/* Values */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-16">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "মূলনীতি" : "Principles"}
            </div>
            <h2 className="text-balance text-5xl leading-[1] md:text-7xl">
              {language === "bn" ? (
                <>আমাদের আদর্শ ও <em className="not-italic text-accent">বিশ্বাস</em>।</>
              ) : (
                <>What we <em className="not-italic text-accent">stand for</em>.</>
              )}
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {studioValues.map((v, i) => (
              <ScrollReveal key={v.n} delay={i * 0.1}>
                <div className="rounded-2xl border border-border p-6 h-full">
                  <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{v.n}</div>
                  <h3 className="mb-3 text-lg font-semibold leading-snug">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-16">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "আমাদের টিম" : "The team"}
            </div>
            <h2 className="text-balance text-5xl leading-[1] md:text-7xl">
              {language === "bn" ? (
                <>৮ জনের দক্ষ টিম।<br /><em className="not-italic text-accent">একটিই কাজের মান।</em></>
              ) : (
                <>Eight people.<br /><em className="not-italic text-accent">One standard.</em></>
              )}
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="flex flex-col gap-4 rounded-2xl bg-background p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-dark text-xl font-bold text-dark-foreground">
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{member.name}</div>
                    <div className="text-sm text-accent">{member.role}</div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio timeline */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-16">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "আমাদের পথচলা" : "History"}
            </div>
            <h2 className="text-balance text-5xl leading-[1] md:text-7xl">
              {language === "bn" ? (
                <>সাফল্যের এক <em className="not-italic text-accent">দশক</em>।</>
              ) : (
                <>A decade of <em className="not-italic text-accent">building</em>.</>
              )}
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-border sm:left-1/2" aria-hidden="true" />

            <ol className="space-y-12">
              {studioMilestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.08} as="article">
                  <div className={`relative grid grid-cols-[2.5rem_1fr] gap-6 sm:grid-cols-2 sm:gap-12 ${i % 2 === 0 ? "" : "sm:direction-rtl"}`}>
                    {/* Dot */}
                    <div
                      className="absolute left-[1.125rem] top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:left-1/2"
                      aria-hidden="true"
                    />

                    {/* Content — alternates sides on desktop */}
                    <div className={`col-start-2 sm:col-start-auto ${i % 2 === 1 ? "sm:col-start-1 sm:text-right sm:order-first" : ""}`}>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.year}</div>
                      <h3 className="mt-1 text-xl font-semibold">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                    </div>
                    {/* Spacer for the other side */}
                    <div className={`hidden sm:block ${i % 2 === 1 ? "sm:order-last" : ""}`} />
                  </div>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
