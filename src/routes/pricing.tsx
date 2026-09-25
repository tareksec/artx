import { createFileRoute, Link } from "@tanstack/react-router";
import { pricingFaqs } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Pricing } from "@/components/sections/Pricing";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/pricing")({
  head: () => {
    const seoTitle = "Website Design Packages & Pricing in Bangladesh | ArtX";
    const metaDesc = "Transparent web design pricing in Bangladesh. Basic, Premium & Ultra packages starting from ৳3,500 with full SEO, responsive UI & WhatsApp checkout. View plans!";
    const canonicalUrl = "https://artxdev.tech/pricing";

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "@id": `${canonicalUrl}#pricing`,
          name: "ArtX Website Design Packages",
          description: metaDesc,
          brand: {
            "@type": "Brand",
            name: "ArtX",
          },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "3500",
            highPrice: "9500",
            priceCurrency: "BDT",
            offerCount: "3",
            offers: [
              {
                "@type": "Offer",
                name: "Basic Website Package",
                price: "3500",
                priceCurrency: "BDT",
                description: "Unlimited pages, control panel, WhatsApp redirect checkout, full on-page SEO.",
              },
              {
                "@type": "Offer",
                name: "Premium Website Package",
                price: "6500",
                priceCurrency: "BDT",
                description: "Custom domain & hosting, custom admin dashboard, order & inventory management.",
              },
              {
                "@type": "Offer",
                name: "Ultra Website Package",
                price: "9500",
                priceCurrency: "BDT",
                description: "All-in-one custom digital product solution with priority support and advanced animations.",
              },
            ],
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
              name: "Pricing",
              item: canonicalUrl,
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: pricingFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        },
      ],
    };

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: metaDesc },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: metaDesc },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seoTitle },
        { name: "twitter:description", content: metaDesc },
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
  component: PricingPage,
});

function PricingPage() {
  const { language } = useLanguage();

  return (
    <>
      <div className="pt-16 md:pt-20">
        <Pricing />
      </div>

      {/* Internal Links to Location & Guides */}
      <section className="px-6 py-12 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/80 p-6 bg-background">
              <div className="flex items-center gap-2 text-accent font-semibold text-xs mb-2">
                <MapPin className="h-4 w-4" /> Dhaka Local Business
              </div>
              <h3 className="font-bold text-base mb-1">Serving Dhaka Startups</h3>
              <p className="text-xs text-muted-foreground mb-4">Looking for web design in Gulshan, Banani, or Uttara? Check our local services.</p>
              <Link to="/location/dhaka" className="text-xs font-semibold text-accent flex items-center gap-1 hover:underline">
                Web Design Agency Dhaka &rarr;
              </Link>
            </div>

            <div className="rounded-2xl border border-border/80 p-6 bg-background">
              <div className="flex items-center gap-2 text-accent font-semibold text-xs mb-2">
                <Sparkles className="h-4 w-4" /> In-Depth Cost Guide
              </div>
              <h3 className="font-bold text-base mb-1">Website Cost Analysis 2025</h3>
              <p className="text-xs text-muted-foreground mb-4">Read our complete market comparison of freelance vs agency web design costs in BDT.</p>
              <Link to="/blog/how-much-does-a-website-cost-in-bangladesh-2025" className="text-xs font-semibold text-accent flex items-center gap-1 hover:underline">
                Read price breakdown guide &rarr;
              </Link>
            </div>

            <div className="rounded-2xl border border-border/80 p-6 bg-background">
              <div className="flex items-center gap-2 text-accent font-semibold text-xs mb-2">
                <MapPin className="h-4 w-4" /> Nationwide Delivery
              </div>
              <h3 className="font-bold text-base mb-1">Bangladesh Web Company</h3>
              <p className="text-xs text-muted-foreground mb-4">Full coverage across all 64 districts with bKash, Nagad, and bank wire support.</p>
              <Link to="/location/bangladesh" className="text-xs font-semibold text-accent flex items-center gap-1 hover:underline">
                Web Design Company Bangladesh &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-12">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "সাধারণ প্রশ্নাবলী" : "Pricing FAQ"}
            </div>
            <h2 className="text-balance text-4xl leading-[1] md:text-5xl font-bold">
              {language === "bn" ? (
                <>প্যাকেজ ও মূল্য সংক্রান্ত <em className="not-italic text-accent">জিজ্ঞাসা</em>।</>
              ) : (
                <>Transparent pricing <em className="not-italic text-accent">answers</em>.</>
              )}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {pricingFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-accent/40"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline [&>svg]:text-accent text-base">
                    {language === "bn" && faq.qBn ? faq.qBn : faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed text-sm">
                    {language === "bn" && faq.aBn ? faq.aBn : faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-dark p-10 text-center text-dark-foreground md:p-16 border border-dark-foreground/10">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                {language === "bn" ? "কোন প্যাকেজটি আপনার জন্য উপযুক্ত বুঝতে পারছেন না?" : "Need a custom proposal?"}
              </div>
              <h2 className="text-balance text-4xl font-bold md:text-6xl">
                {language === "bn" ? (
                  <>
                    আপনার প্রজেক্ট সম্পর্কে জানান।
                    <br />
                    <em className="not-italic text-accent">আমরাই সঠিক সমাধান খুঁজে দেব।</em>
                  </>
                ) : (
                  <>
                    Tell us what you&apos;re building.
                    <br />
                    <em className="not-italic text-accent">We&apos;ll figure it out.</em>
                  </>
                )}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  {language === "bn" ? "যোগাযোগ করুন" : "Start a project"}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="https://wa.me/8801645441584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-dark-foreground/20 bg-dark-foreground/5 px-6 py-4 text-sm font-medium text-dark-foreground transition-colors hover:bg-dark-foreground/10"
                >
                  WhatsApp: 01645441584
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
