import { createFileRoute, Link } from "@tanstack/react-router";
import { pricingFaqs } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Pricing } from "@/components/sections/Pricing";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ArtX Studio" },
      { name: "description", content: "Packages built to scale with you. Pick the tier that fits where your business is today: Basic from ৳2,000, Premium from ৳5,000, Ultra from ৳8,000." },
      { property: "og:title", content: "Pricing — ArtX Studio" },
      { property: "og:description", content: "Packages built to scale with you. Pick the tier that fits where your business is today." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { language } = useLanguage();

  return (
    <>
      <div className="pt-16 md:pt-20">
        <Pricing />
      </div>

      {/* FAQ */}
      <section className="bg-secondary px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-12">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "সাধারণ প্রশ্নাবলী" : "FAQ"}
            </div>
            <h2 className="text-balance text-4xl leading-[1] md:text-5xl">
              {language === "bn" ? (
                <>প্যাকেজ ও মূল্য সংক্রান্ত <em className="not-italic text-accent">জিজ্ঞাসা</em>।</>
              ) : (
                <>Pricing <em className="not-italic text-accent">questions</em>.</>
              )}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-2">
              {pricingFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-background px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:text-accent hover:no-underline [&>svg]:text-accent">
                    {language === "bn" && faq.qBn ? faq.qBn : faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
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
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-dark p-10 text-center text-dark-foreground md:p-16">
              <div className="text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
                {language === "bn" ? "কোন প্যাকেজটি আপনার জন্য উপযুক্ত বুঝতে পারছেন না?" : "Not sure which tier fits?"}
              </div>
              <h2 className="text-balance text-4xl font-semibold md:text-6xl">
                {language === "bn" ? (
                  <>
                    আপনার প্রজেক্ট সম্পর্কে জানান।
                    <br />
                    <em className="not-italic text-accent">আমরাই সঠিক সমাধান খুঁজে দেব।</em>
                  </>
                ) : (
                  <>
                    Tell us what you're building.
                    <br />
                    <em className="not-italic text-accent">We'll figure it out.</em>
                  </>
                )}
              </h2>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                {language === "bn" ? "যোগাযোগ করুন" : "Start a conversation"}
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
