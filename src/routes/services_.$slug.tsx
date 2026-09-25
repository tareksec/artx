import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { serviceDetails, projects, services } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Zap, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services_/$slug")({
  head: ({ params }) => {
    const svc = serviceDetails.find((s) => s.slug === params.slug);
    if (!svc) return {};

    const defaultTitle = `${svc.t} | ArtX Studio`;
    const seoTitle = (svc.seoTitle || defaultTitle).slice(0, 60);

    const defaultDesc = `Professional ${svc.t.toLowerCase()} by ArtX. Custom design, lightning speed, and proven rankings. Get a free proposal today!`;
    const metaDescription = (svc.metaDescription || defaultDesc).slice(0, 155);

    const canonicalUrl = `https://artxdev.tech/services/${svc.slug}`;

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: svc.t,
      serviceType: svc.t,
      description: svc.valueProp,
      url: canonicalUrl,
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://artxdev.tech/#localbusiness",
        name: "ArtX Studio",
        telephone: "+8801645441584",
        url: "https://artxdev.tech",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressRegion: "Dhaka",
          addressCountry: "BD",
        },
      },
      areaServed: [
        { "@type": "City", name: "Dhaka" },
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${svc.t} Deliverables`,
        itemListElement: svc.deliverables.map((item, idx) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item,
          },
          position: idx + 1,
        })),
      },
    };

    const breadcrumbsSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://artxdev.tech",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://artxdev.tech/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: svc.t,
          item: canonicalUrl,
        },
      ],
    };

    const faqSchema = svc.faqs && svc.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: svc.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    } : null;

    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbsSchema),
      },
    ];

    if (faqSchema) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      });
    }

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: metaDescription },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seoTitle },
        { name: "twitter:description", content: metaDescription },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
      scripts,
    };
  },
  loader: ({ params }) => {
    const svc = serviceDetails.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    const related = svc.relatedProjects
      .map((slug) => projects.find((p) => p.slug === slug))
      .filter(Boolean);
    const otherServices = services.filter((s) => s.slug !== svc.slug).slice(0, 3);
    return { svc, related, otherServices };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { svc, related, otherServices } = Route.useLoaderData();

  return (
    <>
      {/* Back nav & breadcrumb */}
      <div className="fixed top-20 left-6 z-40 hidden md:block">
        <Link
          to="/services"
          className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          All Services
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 pt-36 pb-12 md:pt-48">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{svc.t}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-end">
            <ScrollReveal>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                  {svc.n} / Service
                </span>
                <span>•</span>
                <span>Bangladesh & Worldwide</span>
              </div>
              <h1 className="text-balance text-5xl leading-[1] md:text-7xl font-bold tracking-tight">
                {svc.t}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                {svc.valueProp}
              </p>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-medium text-foreground/80">
                <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                  <Zap className="h-3.5 w-3.5 text-accent" /> LCP &lt; 2.5s Guaranteed
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Techvrs Hardened
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                  <Sparkles className="h-3.5 w-3.5 text-accent" /> 100% Mobile First
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {svc.link ? (
                  <a
                    href={svc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Visit {svc.link.replace("https://", "")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground shadow-sm"
                  >
                    Start this project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  View Pricing Tiers
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="overflow-hidden rounded-3xl bg-secondary border border-border shadow-lg">
                <img
                  src={svc.img}
                  alt={`${svc.t} - ArtX Studio`}
                  width={700}
                  height={700}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                Deliverables
              </div>
              <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight">
                What is <em className="not-italic text-accent">included</em>.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Every project is delivered with enterprise engineering standards, clean code, and zero technical debt.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {svc.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-colors hover:border-accent/40">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground/90 font-medium text-sm leading-snug">{d}</span>
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
              Our Framework
            </div>
            <h2 className="text-balance text-4xl leading-[1] md:text-6xl font-bold">
              How we <em className="not-italic text-accent">deliver</em>.
            </h2>
          </ScrollReveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {svc.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="rounded-2xl border border-dark-foreground/10 bg-dark-foreground/[0.04] p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4 text-xs uppercase tracking-[0.2em] text-accent font-mono font-bold">
                      {step.step}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-dark-foreground/70">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-12">
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                Proven Impact
              </div>
              <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight">
                Recent <em className="not-italic text-accent">case studies</em>.
              </h2>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p, i) => p && (
                <ScrollReveal key={p.slug} delay={i * 0.1}>
                  <Link
                    to={`/work/${p.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-secondary border border-border transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.img}
                        alt={`${p.title} case study`}
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

      {/* Related Package Banner */}
      {svc.relatedPricing && (
        <section className="px-6 py-12 bg-secondary/50 border-y border-border">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl bg-background p-8 md:p-12 border border-border shadow-sm">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                    Transparent Packages
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    {svc.relatedPricing.name} Tier Option
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                    {svc.relatedPricing.description} Starts production-ready with full on-page SEO and responsive design included.
                  </p>
                </div>
                <Link
                  to="/pricing"
                  className="shrink-0 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  View All Pricing Packages
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Local & Service Internal Links (Topical Mesh) */}
      <section className="px-6 py-16 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border/70 p-6 bg-background">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
                <MapPin className="h-4 w-4" /> Serving Dhaka & Local Hubs
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Explore our dedicated services engineered for Dhaka-based startups, SMEs, and commercial leaders.
              </p>
              <Link to="/location/dhaka" className="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                Web Design Agency Dhaka <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border/70 p-6 bg-background">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
                <MapPin className="h-4 w-4" /> Nationwide Coverage
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Full-service web development for manufacturers, exporters, and retailers across all 64 districts.
              </p>
              <Link to="/location/bangladesh" className="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                Web Design Company Bangladesh <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border/70 p-6 bg-background">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
                <Sparkles className="h-4 w-4" /> Why Leading Brands Choose ArtX
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                10 years of experience, 950+ projects shipped, senior-only talent, and guaranteed Core Web Vitals.
              </p>
              <Link to="/why-us" className="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                Why Choose ArtX Studio <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-12">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              FAQ
            </div>
            <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight">
              Frequently asked <em className="not-italic text-accent">questions</em>.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Clear, direct answers to common questions about our {svc.t.toLowerCase()} process and pricing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {svc.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border px-6 data-[state=open]:border-accent/40 bg-card"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline [&>svg]:text-accent text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed text-sm">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Other Services */}
      {otherServices.length > 0 && (
        <section className="px-6 pb-20 border-t border-border pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explore More Capabilities
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="group rounded-2xl border border-border p-6 bg-card transition-all hover:border-accent/40"
                >
                  <div className="text-xs uppercase font-mono text-accent mb-2">{other.n}</div>
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">{other.t}</h3>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{other.d}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-accent">
                    Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-dark p-10 text-center text-dark-foreground md:p-16 border border-dark-foreground/10">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Start Today
              </div>
              <h2 className="text-balance text-4xl font-bold md:text-6xl">
                Ready to build something <em className="not-italic text-accent">worth ranking</em>?
              </h2>
              <p className="max-w-xl text-sm md:text-base text-dark-foreground/70">
                Partner with ArtX to design, build, and rank a digital product that outpaces your competition in Bangladesh and worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="https://wa.me/8801645441584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-dark-foreground/20 bg-dark-foreground/5 px-6 py-4 text-sm font-medium text-dark-foreground transition-colors hover:bg-dark-foreground/10"
                >
                  WhatsApp: +8801645441584
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
