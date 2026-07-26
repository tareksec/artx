import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { serviceDetails, projects } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services_/$slug")({
  head: ({ params }) => {
    const svc = serviceDetails.find((s) => s.slug === params.slug);
    if (!svc) return {};
    return {
      meta: [
        { title: `${svc.t} — ArtX Studio` },
        { name: "description", content: svc.valueProp },
        { property: "og:title", content: `${svc.t} — ArtX Studio` },
        { property: "og:description", content: svc.valueProp },
        { property: "og:url", content: `/services/${svc.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${svc.slug}` }],
    };
  },
  loader: ({ params }) => {
    const svc = serviceDetails.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    const related = svc.relatedProjects
      .map((slug) => projects.find((p) => p.slug === slug))
      .filter(Boolean);
    return { svc, related };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { svc, related } = Route.useLoaderData();

  return (
    <>
      {/* Back nav */}
      <div className="fixed top-20 left-6 z-40 hidden md:block">
        <Link
          to="/services"
          className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Services
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 pt-40 pb-12 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-end">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                <span>{svc.n} / 04</span>
              </div>
              <h1 className="text-balance text-6xl leading-[0.95] md:text-8xl">
                {svc.t}
              </h1>
              <p className="mt-6 max-w-xl text-xl text-muted-foreground">
                {svc.valueProp}
              </p>
              {svc.link ? (
                <a
                  href={svc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Visit {svc.link.replace("https://", "")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={svc.img}
                  alt={svc.t}
                  width={700}
                  height={700}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                Deliverables
              </div>
              <h2 className="text-balance text-4xl leading-[1] md:text-5xl">
                What's <em className="not-italic text-accent">included</em>.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ul className="space-y-4">
                {svc.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground/85">{d}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark px-6 py-24 text-dark-foreground md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-dark-foreground/60">
              <span className="h-px w-8 bg-dark-foreground/40" />
              Process
            </div>
            <h2 className="text-balance text-4xl leading-[1] md:text-6xl">
              How we <em className="not-italic text-accent">work</em>.
            </h2>
          </ScrollReveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {svc.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="rounded-2xl border border-dark-foreground/10 bg-dark-foreground/[0.04] p-6">
                  <div className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
                    {step.step}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-dark-foreground/70">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-12">
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                Related work
              </div>
              <h2 className="text-balance text-4xl leading-[1] md:text-5xl">
                See it in <em className="not-italic text-accent">action</em>.
              </h2>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p, i) => p && (
                <ScrollReveal key={p.slug} delay={i * 0.1}>
                  <Link
                    to={`/work/${p.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-secondary transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{p.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:text-accent">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-12">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              FAQ
            </div>
            <h2 className="text-balance text-4xl leading-[1] md:text-5xl">
              Common <em className="not-italic text-accent">questions</em>.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-2">
              {svc.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline [&>svg]:text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-dark p-10 text-center text-dark-foreground md:p-16">
              <div className="text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
                Ready to start?
              </div>
              <h2 className="text-balance text-4xl font-semibold md:text-6xl">
                Let's build something <em className="not-italic text-accent">worth ranking</em>.
              </h2>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
