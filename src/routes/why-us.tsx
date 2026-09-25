import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Zap, ShieldCheck, Award, Star, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/why-us")({
  head: () => {
    const seoTitle = "Why Choose ArtX | Web Design & Development Studio";
    const metaDescription = "Why choose ArtX? 10 years of experience, 950+ completed projects, senior-only engineers, and guaranteed Core Web Vitals performance. See our track record!";
    const canonicalUrl = "https://artxdev.tech/why-us";

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": `${canonicalUrl}#aboutpage`,
          name: "Why Choose ArtX",
          description: metaDescription,
          url: canonicalUrl,
          publisher: {
            "@type": "Organization",
            "@id": "https://artxdev.tech/#organization",
            name: "ArtX Studio",
            url: "https://artxdev.tech",
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
              name: "Why Us",
              item: canonicalUrl,
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Why should I choose ArtX over traditional web design agencies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ArtX guarantees senior-only talent on every project, sub-2.5s Core Web Vitals load times, zero bloated third-party plugins, and enterprise security via Techvrs. We combine 10 years of international design craft with accessible pricing starting at ৳3,500 BDT.",
              },
            },
            {
              "@type": "Question",
              name: "How many projects has ArtX completed?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Since our founding in 2016, ArtX has completed over 950 projects for SaaS startups, e-commerce stores, and corporate enterprises across 4 continents, maintaining a 98% client retention rate.",
              },
            },
            {
              "@type": "Question",
              name: "Does ArtX include SEO and mobile optimization in all builds?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every website built by ArtX includes complete technical on-page SEO, semantic heading structure, mobile responsiveness, XML sitemaps, and rich JSON-LD Schema markup from day one.",
              },
            },
            {
              "@type": "Question",
              name: "Who founded ArtX and who leads the design team?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ArtX was founded in 2016 by Muhammad Tarek (MD Tarek), Founder & Creative Director. The team includes senior engineers, UI/UX designers, and technical SEO strategists with over 10 years of experience delivering 950+ web projects worldwide.",
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
  component: WhyUsPage,
});

const comparisonData = [
  {
    feature: "Senior Expertise",
    artx: "100% Senior engineers & designers (No junior handoffs)",
    freelancers: "Unverified skill level; unpredictable availability",
    traditional: "Pitched by seniors, handed to entry-level interns",
  },
  {
    feature: "Core Web Vitals & Speed",
    artx: "Sub-2.5s LCP & 90+ PageSpeed score guaranteed",
    freelancers: "Often ignored; bloated with heavy uncompressed assets",
    traditional: "Slow WordPress monoliths burdened with 30+ plugins",
  },
  {
    feature: "Security Hardening",
    artx: "Enterprise pen-testing & hardening with Techvrs",
    freelancers: "Zero security audits; frequent nulled theme risks",
    traditional: "Basic SSL certificate only; expensive security add-ons",
  },
  {
    feature: "SEO & Schema Markup",
    artx: "Full JSON-LD, Breadcrumbs, FAQs & GEO AI-ready markup",
    freelancers: "Basic Yoast SEO or none",
    traditional: "Billed as a costly separate monthly retainer",
  },
  {
    feature: "Pricing & Ownership",
    artx: "Transparent packages from ৳3,500; 100% client code ownership",
    freelancers: "Unstable quotes, frequent scope creep",
    traditional: "Opaque enterprise pricing (৳100k+) with proprietary lock-in",
  },
];

const stats = [
  { stat: "10+", label: "Years in Business (Est. 2016)" },
  { stat: "950+", label: "Completed Projects Shipped" },
  { stat: "4", label: "Continents Served Globally" },
  { stat: "98%", label: "Verified Client Retention" },
];

function WhyUsPage() {
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
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              <Award className="h-4 w-4" />
              Direct Answers &amp; Operational Truths
            </div>
            <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Why Choose ArtX for <em className="not-italic text-accent">Web Design, Development &amp; SEO</em>.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              We are an independent digital product studio founded in 2016. We exist for brands, SaaS founders, and e-commerce leaders who refuse to blend into generic templates. Here is the exact data on why ambitious companies choose ArtX.
            </p>
          </ScrollReveal>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, idx) => (
              <ScrollReveal key={s.label} delay={idx * 0.08}>
                <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-xs">
                  <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{s.stat}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12">
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Side-By-Side Evaluation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              ArtX vs. Freelancers vs. Traditional Agencies
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
              Compare our engineering standards, delivery speed, and transparency against common alternatives.
            </p>
          </ScrollReveal>

          <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="p-5 font-semibold">Evaluation Criteria</th>
                  <th className="p-5 font-bold text-accent bg-accent/5">ArtX Studio</th>
                  <th className="p-5 font-semibold">Freelancer Marketplace</th>
                  <th className="p-5 font-semibold">Traditional Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="transition-colors hover:bg-muted/20">
                    <td className="p-5 font-semibold text-foreground">{row.feature}</td>
                    <td className="p-5 font-medium text-foreground bg-accent/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{row.artx}</span>
                      </div>
                    </td>
                    <td className="p-5 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-muted-foreground/60 shrink-0 mt-0.5" />
                        <span>{row.freelancers}</span>
                      </div>
                    </td>
                    <td className="p-5 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-muted-foreground/60 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 Core Pillars */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-14">
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Core Principles
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              The 5 Pillars of Our Studio Philosophy
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Senior Hands on Everything</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not have a junior bench. Every Figma frame, code repository commit, and database schema is crafted directly by senior specialists with a decade of industry battle-scars.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Built for Sub-Second Speed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Slow sites kill conversions. We build with modern React, TanStack Start, and clean custom WordPress. Zero unneeded dependencies ensure Core Web Vitals LCP &lt; 2.5s on mobile connections.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Enterprise Security via Techvrs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Security is never an afterthought. Through our exclusive partnership with Techvrs.com, every application undergoes vulnerability scans, header hardening, and automated DDoS defenses.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">4. AI &amp; Generative Engine Ready</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We engineer your site for tomorrow&apos;s search. With structured JSON-LD schemas and high-density entity data, our sites are optimized for citations in ChatGPT, Perplexity, and Google AI Overviews.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">5. Transparent &amp; Affordable Tiers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No opaque corporate retainers. Our production-ready packages start at ৳3,500 (Basic), ৳6,500 (Premium), and ৳9,500 (Ultra) in Bangladesh, with complete domain and source code ownership.
              </p>
            </div>

            <div className="rounded-3xl border border-accent/40 bg-accent/5 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-2 block">Direct Access</span>
                <h3 className="text-xl font-bold mb-3">Talk Directly with Our Founders</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Skip the account manager bureaucracy. Talk directly with Alex, Marcus, or Priya to discuss your website goals.
                </p>
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline">
                Schedule a discovery call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Verification Section */}
      <section className="px-6 py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Verified Entity Authority</div>
            <h3 className="text-2xl font-bold">Independent Industry Directories</h3>
            <p className="text-xs text-muted-foreground mt-2">
              Cross-referenced by AI search engines, business directories, and review aggregators worldwide.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border p-5 bg-background text-center shadow-xs">
              <div className="font-bold text-base mb-1">Google Business Profile</div>
              <div className="text-xs text-muted-foreground mb-3">Dhaka, Bangladesh · Verified</div>
              <span className="text-xs text-accent font-medium flex items-center justify-center gap-1">
                Verified Listing <ExternalLink className="h-3 w-3" />
              </span>
            </div>

            <div className="rounded-2xl border border-border p-5 bg-background text-center shadow-xs">
              <div className="font-bold text-base mb-1">Clutch.co</div>
              <div className="text-xs text-muted-foreground mb-3">Web Design &amp; Development</div>
              <span className="text-xs text-accent font-medium flex items-center justify-center gap-1">
                Top Rated Studio <ExternalLink className="h-3 w-3" />
              </span>
            </div>

            <div className="rounded-2xl border border-border p-5 bg-background text-center shadow-xs">
              <div className="font-bold text-base mb-1">DesignRush</div>
              <div className="text-xs text-muted-foreground mb-3">Accredited Agency Partner</div>
              <span className="text-xs text-accent font-medium flex items-center justify-center gap-1">
                Verified Agency <ExternalLink className="h-3 w-3" />
              </span>
            </div>

            <div className="rounded-2xl border border-border p-5 bg-background text-center shadow-xs">
              <div className="font-bold text-base mb-1">GoodFirms</div>
              <div className="text-xs text-muted-foreground mb-3">Top Web Developers 2025</div>
              <span className="text-xs text-accent font-medium flex items-center justify-center gap-1">
                Recognized Firm <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for GEO */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-12">
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Direct Answers
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Frequently Asked Questions About ArtX
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Everything you need to know about partnering with our studio.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="faq-1" className="rounded-2xl border border-border px-6 data-[state=open]:border-accent/40 bg-card">
                <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline text-base">
                  What makes ArtX different from other web agencies?
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed text-sm">
                  ArtX deliberately stays small and independent. We have zero junior developers—every project is personally built by senior engineers and designers with 10 years of experience. We guarantee Core Web Vitals &lt; 2.5s, provide complete code ownership, and partner with Techvrs for enterprise security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="rounded-2xl border border-border px-6 data-[state=open]:border-accent/40 bg-card">
                <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline text-base">
                  Can ArtX handle both design and technical development?
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed text-sm">
                  Yes. We are a full-stack digital product studio. We create custom design systems and interactive prototypes in Figma, and build them using production-grade React, TanStack Start, Next.js, or clean WordPress architectures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="rounded-2xl border border-border px-6 data-[state=open]:border-accent/40 bg-card">
                <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline text-base">
                  Do you work with international clients outside Bangladesh?
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed text-sm">
                  Yes! Over 60% of our portfolio consists of international clients across North America, the UK, Europe, Australia, and Singapore. We communicate seamlessly via Slack, Zoom, WhatsApp, and Google Meet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="rounded-2xl border border-border px-6 data-[state=open]:border-accent/40 bg-card">
                <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline text-base">
                  What are your payment terms and package prices?
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed text-sm">
                  We offer transparent starting packages: Basic (৳3,500), Premium (৳6,500), and Ultra (৳9,500) for standard builds, with custom quotes for enterprise applications. We accept bKash, Nagad, Rocket, Bank Wire, and International Credit Cards, typically with a 50% start and 50% completion milestone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="rounded-2xl border border-border px-6 data-[state=open]:border-accent/40 bg-card">
                <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline text-base">
                  Who founded ArtX and who leads the team?
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed text-sm">
                  ArtX was founded in 2016 by Muhammad Tarek (MD Tarek), Founder &amp; Creative Director. The team consists of senior digital product engineers, UI/UX designers, and technical SEO strategists who have delivered over 950 projects across 4 continents.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-dark p-10 text-center text-dark-foreground md:p-16 border border-dark-foreground/10">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Start Your Project
              </div>
              <h2 className="text-balance text-4xl font-bold md:text-6xl">
                Ready to experience the ArtX difference?
              </h2>
              <p className="max-w-xl text-sm md:text-base text-dark-foreground/70">
                Send us a message or call +8801645441584. We review every brief within 24 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-dark-foreground/20 bg-dark-foreground/5 px-6 py-4 text-sm font-medium text-dark-foreground transition-colors hover:bg-dark-foreground/10"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
