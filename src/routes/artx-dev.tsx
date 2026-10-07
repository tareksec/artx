import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { locationDetails } from "@/content/locations";
import { services } from "@/content/site";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Phone,
  Mail,
  Sparkles,
  MapPin,
  Globe,
  Code,
  Layers,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/artx-dev")({
  head: () => {
    const seoTitle = "ArtX Dev — Web Design, Software & Growth Studio | artxdev.tech";
    const metaDescription =
      "ArtX Dev (artxdev.tech) is an independent web design & custom development studio in Bangladesh. 950+ projects, custom React & WordPress, e-commerce, and technical SEO.";
    const canonicalUrl = "https://artxdev.tech/artx-dev";

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": `${canonicalUrl}#webpage`,
          name: "ArtX Dev — Official Studio Profile",
          description: metaDescription,
          url: canonicalUrl,
          mainEntity: {
            "@type": "Organization",
            "@id": "https://artxdev.tech/#organization",
            name: "ArtX Dev",
            alternateName: [
              "artx dev",
              "ArtX Dev",
              "ArtXdev",
              "ArtX Studio",
              "ArtX",
              "ArtX Dev Bangladesh",
            ],
            url: "https://artxdev.tech",
            telephone: "+8801645441584",
            email: "artxstudiocom@gmail.com",
            foundingDate: "2016",
            brand: {
              "@type": "Brand",
              name: "ArtX Dev",
              alternateName: "artx dev",
            },
          },
        },
        {
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
              name: "ArtX Dev",
              item: canonicalUrl,
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is ArtX Dev?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ArtX Dev (artxdev.tech) is an independent digital product and web engineering studio founded in 2016 in Bangladesh. We craft high-speed custom websites, bespoke e-commerce storefronts, SaaS user interfaces, and technical SEO architectures.",
              },
            },
            {
              "@type": "Question",
              name: "What services does ArtX Dev offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ArtX Dev provides e-commerce website design, custom WordPress development, SaaS web application engineering in React and TanStack, technical SEO, landing page design, website redesign, and website maintenance.",
              },
            },
            {
              "@type": "Question",
              name: "How much does a website cost with ArtX Dev?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ArtX Dev packages start at ৳3,500 (Basic), ৳6,500 (Premium, including custom domain and admin dashboard), and ৳9,500 (Enterprise Ultra with advanced animations and priority SLA).",
              },
            },
            {
              "@type": "Question",
              name: "How can I contact ArtX Dev?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can reach ArtX Dev directly via WhatsApp at +8801645441584, email artxstudiocom@gmail.com, or through the official website at artxdev.tech.",
              },
            },
            {
              "@type": "Question",
              name: "Where does ArtX Dev operate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ArtX Dev is based in Dhaka, Bangladesh and operates nationwide across all divisions (Dhaka, Chittagong, Sylhet, Rajshahi, Khulna, Barisal, Mymensingh, Comilla) as well as serving international clients across North America, Europe, and Asia.",
              },
            },
          ],
        },
      ],
    };

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: metaDescription },
        {
          name: "keywords",
          content:
            "artx dev, artx dev bangladesh, artx dev web design, artx dev studio, artx dev agency, artx dev dhaka, artx dev software, artxdev.tech, web design agency bangladesh",
        },
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
          children: JSON.stringify(schema),
        },
      ],
    };
  },
  component: ArtxDevPage,
});

function ArtxDevPage() {
  const faqs = [
    {
      q: "What is ArtX Dev?",
      a: "ArtX Dev (artxdev.tech) is an independent digital product and web engineering studio founded in 2016 in Bangladesh. We build high-speed custom websites, bespoke e-commerce storefronts, SaaS user interfaces, and technical SEO architectures.",
    },
    {
      q: "What services does ArtX Dev provide?",
      a: "ArtX Dev specializes in: 1) E-Commerce Website Design with bKash/Nagad checkout; 2) Lightweight WordPress Development with ACF; 3) SaaS & Web Application Engineering in React; 4) Technical & Local SEO; 5) High-converting Landing Pages; 6) Website Maintenance & Security Hardening with Techvrs.",
    },
    {
      q: "What is the pricing for ArtX Dev website packages?",
      a: "Our transparent packages in Bangladeshi Taka (BDT): Basic Starter at ৳3,500, Business Premium at ৳6,500 (custom domain & dashboard included), and Enterprise Ultra at ৳9,500. Custom enterprise software is quoted based on requirements.",
    },
    {
      q: "How can I contact ArtX Dev?",
      a: "You can reach ArtX Dev 24/7 via WhatsApp at +8801645441584, send an email to artxstudiocom@gmail.com, or schedule a free discovery call on artxdev.tech.",
    },
    {
      q: "Why choose ArtX Dev over traditional web design agencies?",
      a: "ArtX Dev provides 10+ years of proven craft, 950+ completed client projects, sub-2s Core Web Vitals performance, 100% full source code and domain ownership, zero bloated pirated themes, and exclusive security hardening with Techvrs.",
    },
  ];

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
      <section className="px-6 pt-36 pb-16 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                <Sparkles className="h-3.5 w-3.5" /> artxdev.tech
              </span>
              <span>•</span>
              <span>Established 2016</span>
              <span>•</span>
              <span>Target: artx dev</span>
            </div>

            <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              ArtX Dev — Web Design, Software & Growth Studio.
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              <strong>ArtX Dev</strong> is an independent digital studio designing, building, and ranking standout digital products for brands that refuse to blend in. Operating out of Bangladesh and serving clients worldwide across 4 continents.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-foreground/80">
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                <Zap className="h-3.5 w-3.5 text-accent" /> Sub-Second React & WordPress
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Techvrs Enterprise Security
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                <Award className="h-3.5 w-3.5 text-accent" /> 950+ Shipped Projects
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 border border-border/70">
                <Globe className="h-3.5 w-3.5 text-accent" /> Serving 4 Continents
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground shadow-sm"
              >
                Hire ArtX Dev
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/8801645441584"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-accent" /> WhatsApp: +8801645441584
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Stats */}
      <section className="px-6 py-12 border-y border-border bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">10+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years of Craft</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">950+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Shipped Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">4.9/5</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">&lt; 2.0s</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Average PageSpeed LCP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmatic Services Directory */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
              Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Services delivered by <em className="not-italic text-accent">ArtX Dev</em>.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-sm md:text-base">
              Explore our core web engineering solutions, designed to turn visitors into buyers and rank at the top of Google.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.t} delay={i * 0.08}>
                <Link
                  to={svc.slug ? `/services/${svc.slug}` : "/services"}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-border p-6 bg-card transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <div>
                    <div className="text-xs uppercase font-mono text-accent mb-2">{svc.n}</div>
                    <h3 className="font-semibold text-xl group-hover:text-accent transition-colors mb-3">
                      {svc.t}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {svc.d}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-accent">
                    Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programmatic Locations Directory */}
      <section className="px-6 py-20 md:py-28 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
              Nationwide pSEO Network
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              ArtX Dev across <em className="not-italic text-accent">Bangladesh</em>.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-sm md:text-base">
              Dedicated programmatic hubs optimized for local commercial search queries across major divisions and commerce centers.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {locationDetails.map((loc, i) => (
              <ScrollReveal key={loc.slug} delay={i * 0.04}>
                <Link
                  to={`/location/${loc.slug}`}
                  className="group block rounded-2xl border border-border p-5 bg-card transition-all hover:border-accent/50 hover:shadow-sm h-full"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span>ArtX Dev {loc.city}</span>
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-accent transition-colors mb-2 line-clamp-1">
                    {loc.h1.replace("ArtX Dev — ", "")}
                  </h3>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                    {loc.subheading}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-accent/80 group-hover:text-accent">
                    View location hub <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Overview */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
              ArtX Dev Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Honest, transparent <em className="not-italic text-accent">website pricing</em>.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Production-ready websites with on-page SEO, mobile responsiveness, and hosting support included.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border p-8 bg-card flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Basic Starter
                </div>
                <div className="text-4xl font-bold tracking-tight mb-3">৳3,500</div>
                <p className="text-xs text-muted-foreground mb-6">
                  For emerging businesses, personal portfolios, and boutiques.
                </p>
                <ul className="space-y-3 mb-8 text-xs text-foreground/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Unlimited Pages & Product Panel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>WhatsApp Checkout Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Complete On-Page SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Free Hosting Included</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/pricing"
                className="w-full text-center rounded-full bg-secondary py-3 text-xs font-semibold hover:bg-secondary/80 transition-colors"
              >
                View Package
              </Link>
            </div>

            <div className="rounded-3xl border-2 border-accent ring-2 ring-accent/20 p-8 bg-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Business Premium
                  </span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold text-accent">
                    Most Popular
                  </span>
                </div>
                <div className="text-4xl font-bold tracking-tight mb-3">৳6,500</div>
                <p className="text-xs text-muted-foreground mb-6">
                  Our most popular complete package for growing companies.
                </p>
                <ul className="space-y-3 mb-8 text-xs text-foreground/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Custom Domain (.com/.xyz/.top)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Custom Admin Dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Order & Inventory Tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Core Web Vitals Speed Guarantee</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/pricing"
                className="w-full text-center rounded-full bg-foreground py-3 text-xs font-semibold text-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="rounded-3xl border border-border p-8 bg-card flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Enterprise Ultra
                </div>
                <div className="text-4xl font-bold tracking-tight mb-3">৳9,500</div>
                <p className="text-xs text-muted-foreground mb-6">
                  Full custom solution with high-craft UI and priority SLA.
                </p>
                <ul className="space-y-3 mb-8 text-xs text-foreground/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>All-in-One Custom Solution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Advanced Micro-Interactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Priority 24/7 Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Technical & GEO Schema Setup</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/pricing"
                className="w-full text-center rounded-full bg-secondary py-3 text-xs font-semibold hover:bg-secondary/80 transition-colors"
              >
                View Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:py-28 bg-card border-t border-border">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Frequently asked questions about <em className="not-italic text-accent">ArtX Dev</em>.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border px-6 data-[state=open]:border-accent/40 bg-background"
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

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-dark p-10 text-center text-dark-foreground md:p-16 border border-dark-foreground/10">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Work With ArtX Dev
              </div>
              <h2 className="text-balance text-4xl font-bold md:text-6xl">
                Ready to build something <em className="not-italic text-accent">extraordinary</em>?
              </h2>
              <p className="max-w-xl text-sm md:text-base text-dark-foreground/70">
                Contact our senior engineering team today for a free discovery call, project audit, and proposal.
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
