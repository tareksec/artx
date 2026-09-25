import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { locationDetails } from "@/content/locations";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, MapPin, Zap, ShieldCheck, Phone, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/location_/$slug")({
  head: ({ params }) => {
    const loc = locationDetails.find((l) => l.slug === params.slug);
    if (!loc) return {};

    const seoTitle = loc.seoTitle.slice(0, 60);
    const metaDescription = loc.metaDescription.slice(0, 155);
    const canonicalUrl = `https://artxdev.tech/location/${loc.slug}`;

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${canonicalUrl}#localbusiness`,
      name: "ArtX Studio",
      alternateName: "ArtXdev",
      image: "https://artxdev.tech/favicon.ico",
      url: canonicalUrl,
      telephone: "+8801645441584",
      email: "artxstudiocom@gmail.com",
      priceRange: "৳৳৳",
      currenciesAccepted: "BDT, USD",
      paymentAccepted: "Cash, Credit Card, bKash, Nagad, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.slug === "dhaka" ? "Gulshan / Banani, Dhaka" : "Dhaka, Bangladesh",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka",
        postalCode: "1212",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.8103,
        longitude: 90.4125,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
      areaServed: [
        { "@type": "City", name: loc.city },
        { "@type": "Country", name: "Bangladesh" },
      ],
      sameAs: [
        "https://www.facebook.com/artxdev/",
        "https://twitter.com/artxstudio",
        "https://linkedin.com/company/artxstudio",
      ],
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
          name: "Locations",
          item: "https://artxdev.tech/location/bangladesh",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: loc.city,
          item: canonicalUrl,
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: loc.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    };

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
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(localBusinessSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbsSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
      ],
    };
  },
  loader: ({ params }) => {
    const loc = locationDetails.find((l) => l.slug === params.slug);
    if (!loc) throw notFound();
    const otherLocation = locationDetails.find((l) => l.slug !== loc.slug);
    return { loc, otherLocation };
  },
  component: LocationPage,
});

function LocationPage() {
  const { loc, otherLocation } = Route.useLoaderData();

  return (
    <>
      {/* Back nav */}
      <div className="fixed top-20 left-6 z-40 hidden md:block">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 pt-36 pb-12 md:pt-48">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Locations</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{loc.city}</span>
          </nav>

          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                <MapPin className="h-3.5 w-3.5" /> {loc.city}, {loc.country}
              </span>
              <span>•</span>
              <span>Established 2016</span>
            </div>
            <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              {loc.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              {loc.intro}
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-4 text-xs font-medium text-foreground/80">
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                <Zap className="h-3.5 w-3.5 text-accent" /> Sub-Second Load Times
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Techvrs Enterprise Security
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> bKash & Nagad MFS Checkout
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground shadow-sm"
              >
                Hire our {loc.city} team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/8801645441584"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-accent" /> Direct WhatsApp: 01645441584
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Market Overview */}
      <section className="px-6 py-20 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Local Market Intelligence
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {loc.marketOverview.title}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {loc.marketOverview.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {loc.marketOverview.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl bg-background border border-border p-5 shadow-xs">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm font-medium text-foreground/90">{pt}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Local Services Offered */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Tailored Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Web development services tailored for <em className="not-italic text-accent">{loc.city}</em>.
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {loc.servicesProvided.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 0.08}>
                <Link
                  to={service.link}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-border p-6 bg-card transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <div>
                    <div className="text-xs uppercase font-mono text-accent mb-2">0{idx + 1}</div>
                    <h3 className="font-semibold text-xl group-hover:text-accent transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-accent">
                    Explore service <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="bg-dark px-6 py-20 text-dark-foreground md:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              The ArtX Advantage
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Why partner with an established <em className="not-italic text-accent">local studio</em>.
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {loc.whyLocalMatters.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-dark-foreground/10 bg-dark-foreground/[0.04] p-8 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-dark-foreground">{item.title}</h3>
                  <p className="text-sm text-dark-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Local Pricing */}
      <section className="px-6 py-20 md:py-28 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12 text-center max-w-2xl mx-auto">
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Transparent Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Website packages in <em className="not-italic text-accent">Bangladeshi Taka</em>.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Production-ready websites with on-page SEO, responsive layouts, and hosting support included.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {loc.localPricingHighlights.map((tier, i) => (
              <ScrollReveal key={tier.tier} delay={i * 0.1}>
                <div className={`rounded-3xl border p-8 flex flex-col justify-between h-full bg-card ${
                  i === 1 ? "border-accent ring-2 ring-accent/20" : "border-border"
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {tier.tier}
                      </span>
                      {i === 1 && (
                        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <div className="text-4xl font-bold tracking-tight mb-3 text-foreground">{tier.price}</div>
                    <p className="text-xs text-muted-foreground mb-6 leading-relaxed">{tier.description}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-foreground/85">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/pricing"
                    className="w-full text-center rounded-full bg-foreground py-3 text-xs font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    View Package Details
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="px-6 py-20 md:py-28 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              From concept to live ranking in <em className="not-italic text-accent">4 steps</em>.
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {loc.process.map((p, idx) => (
              <ScrollReveal key={p.step} delay={idx * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="text-xs font-mono font-bold text-accent mb-3">{p.step}</div>
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-12">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Frequently asked <em className="not-italic text-accent">questions</em> about {loc.city}.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {loc.faqs.map((faq, i) => (
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

      {/* Cross link to other location & guides */}
      <section className="px-6 py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {otherLocation && (
              <div className="rounded-2xl border border-border p-6 bg-background">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Also Explore</div>
                <h3 className="font-semibold text-lg mb-1">{otherLocation.city} Services</h3>
                <p className="text-xs text-muted-foreground mb-4">Discover our specialized web development solutions across {otherLocation.city}.</p>
                <Link to={`/location/${otherLocation.slug}`} className="text-xs font-semibold text-accent flex items-center gap-1 hover:underline">
                  View {otherLocation.city} page <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
            <div className="rounded-2xl border border-border p-6 bg-background">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Pricing Guide</div>
              <h3 className="font-semibold text-lg mb-1">Website Costs in Bangladesh</h3>
              <p className="text-xs text-muted-foreground mb-4">Read our complete 2025 breakdown of website design and development prices in BDT.</p>
              <Link to="/blog/how-much-does-a-website-cost-in-bangladesh-2025" className="text-xs font-semibold text-accent flex items-center gap-1 hover:underline">
                Read price guide <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-background">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Agency Comparison</div>
              <h3 className="font-semibold text-lg mb-1">Top 10 Web Agencies</h3>
              <p className="text-xs text-muted-foreground mb-4">Compare top web design companies in Bangladesh for craft, speed, and client reviews.</p>
              <Link to="/blog/best-web-design-agencies-in-bangladesh-2025" className="text-xs font-semibold text-accent flex items-center gap-1 hover:underline">
                Read ranking review <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-dark p-10 text-center text-dark-foreground md:p-16 border border-dark-foreground/10">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Get Started in {loc.city}
              </div>
              <h2 className="text-balance text-4xl font-bold md:text-6xl">
                Let's build your next digital <em className="not-italic text-accent">flagship</em>.
              </h2>
              <p className="max-w-xl text-sm md:text-base text-dark-foreground/70">
                Contact our senior engineering team today for a free discovery call and tailored quote in Bangladeshi Taka.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Request a proposal
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="mailto:artxstudiocom@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-dark-foreground/20 bg-dark-foreground/5 px-6 py-4 text-sm font-medium text-dark-foreground transition-colors hover:bg-dark-foreground/10"
                >
                  <Mail className="h-4 w-4 text-accent" /> artxstudiocom@gmail.com
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
