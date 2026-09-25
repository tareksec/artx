import { createFileRoute, Link } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Zap, ShieldCheck, Sparkles, MessageCircle, ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => {
    const seoTitle = "Web Design & Development Services Bangladesh | ArtX";
    const metaDesc = "Explore full-service web design, custom WordPress, SaaS UI/UX, and SEO services in Bangladesh by ArtX. Boost conversion & search rankings. Get a free quote!";
    const canonicalUrl = "https://artxdev.tech/services";

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
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
              name: "Services",
              item: canonicalUrl,
            },
          ],
        },
        {
          "@type": "ItemList",
          name: "ArtX Digital Services",
          itemListElement: [
            {
              "@type": "Service",
              position: 1,
              name: "E-Commerce Website Design Bangladesh",
              url: "https://artxdev.tech/services/ecommerce-website-design",
            },
            {
              "@type": "Service",
              position: 2,
              name: "WordPress Development Bangladesh",
              url: "https://artxdev.tech/services/wordpress-development",
            },
            {
              "@type": "Service",
              position: 3,
              name: "SaaS Website Design Studio",
              url: "https://artxdev.tech/services/saas-website-design",
            },
            {
              "@type": "Service",
              position: 4,
              name: "SEO Services Bangladesh",
              url: "https://artxdev.tech/services/seo-services",
            },
          ],
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
  component: ServicesPage,
});

const standards = [
  {
    icon: Sparkles,
    titleEn: "100% Custom Editorial UI/UX",
    titleBn: "১০০% কাস্টম ও নান্দনিক ডিজাইন",
    descEn: "No generic templates or bloated themes. We craft bespoke visual identities and opinionated interfaces tailored specifically to your brand voice and market positioning.",
    descBn: "কোনো সাধারণ টেমপ্লেট নয়। আপনার ব্র্যান্ডের স্বকীয়তা ও ব্যবসার লক্ষ্যের সাথে মিল রেখে আমরা সম্পূর্ণ কাস্টম ও আধুনিক ইউআই/ইউএক্স ডিজাইন তৈরি করি।",
  },
  {
    icon: Zap,
    titleEn: "60 FPS Motion & Fast Performance",
    titleBn: "৬০ এফপিএস স্মুথ ও দ্রুতগতির সাইট",
    descEn: "Built with production-grade React, TypeScript, and modern state management. We engineer websites that achieve 95+ Core Web Vitals and lightning-fast load times.",
    descBn: "আধুনিক React ও TypeScript দিয়ে তৈরি। আমাদের প্রতিটি সাইট লোড হতে সময় নেয় চোখের পলকে এবং গুগলের Core Web Vitals-এ পায় ৯৫+ স্কোর।",
  },
  {
    icon: ShieldCheck,
    titleEn: "Technical SEO & Schema Mastery",
    titleBn: "টেকনিক্যাল এসইও ও গুগল র‍্যাঙ্কিং",
    descEn: "Clean semantic HTML5, automated XML sitemaps, structured JSON-LD schema markup, and metadata architecture that helps your brand dominate organic search results.",
    descBn: "নির্ভুল স্কিমা মার্কআপ, কাস্টম মেটাডেটা এবং টেকনিক্যাল এসইও কাঠামোর মাধ্যমে গুগলের সার্চ রেজাল্টে আপনার ব্যবসাকে এগিয়ে রাখা হয়।",
  },
  {
    icon: MessageCircle,
    titleEn: "WhatsApp Redirect Checkout",
    titleBn: "সহজ হোয়াটসঅ্যাপ রিডাইরেক্ট পেমেন্ট",
    descEn: "Streamlined order flows tailored for the Bangladesh market. Customers check out with a single click, instantly formatting order details into your business WhatsApp chat.",
    descBn: "বাংলাদেশের বাজারের জন্য উপযোগী সহজ চেকআউট। গ্রাহকরা এক ক্লিকেই অর্ডার করতে পারবেন, যা সরাসরি সাজানো মেসেজ আকারে আপনার হোয়াটসঅ্যাপে চলে আসবে।",
  },
];

const specializedServices = [
  {
    title: "E-Commerce Website Design",
    target: "e-commerce website design Bangladesh",
    desc: "Bespoke online stores with instant WhatsApp ordering, bKash/Nagad checkout, inventory tracking, and courier API shipping.",
    link: "/services/ecommerce-website-design",
  },
  {
    title: "WordPress Development",
    target: "WordPress development Bangladesh",
    desc: "Custom WordPress themes built from Figma with ACF, zero bloated plugins, rock-solid security, and sub-2s load times.",
    link: "/services/wordpress-development",
  },
  {
    title: "SaaS Website Design Studio",
    target: "SaaS website design studio",
    desc: "High-converting B2B landing pages, interactive product demos, pricing tier tables, and design systems for tech startups.",
    link: "/services/saas-website-design",
  },
  {
    title: "SEO Services Bangladesh",
    target: "SEO services Bangladesh",
    desc: "Technical SEO audits, local Dhaka Google Maps optimization, structured schema, and Generative Engine Optimization (GEO).",
    link: "/services/seo-services",
  },
];

function ServicesPage() {
  const { language } = useLanguage();

  return (
    <>
      <section className="px-6 pt-36 pb-16 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            {language === "bn" ? "আমাদের সার্ভিসসমূহ" : "Full-Service Digital Capabilities"}
          </div>
          <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            {language === "bn" ? (
              <>সম্পূর্ণ ডিজিটাল <em className="not-italic text-accent">প্রোডাক্ট স্টুডিও</em>।</>
            ) : (
              <>Web design &amp; development <em className="not-italic text-accent">services</em>.</>
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {language === "bn"
              ? "ডিজাইন, ডেভেলপমেন্ট, এসইও এবং ওয়েব সিকিউরিটি — একই ছাদের নিচে আপনার ব্যবসার সম্পূর্ণ ডিজিটাল সমাধান। প্রতিটি সার্ভিস বিশ্বমানের মানদণ্ডে তৈরি।"
              : "Editorial design, custom React web applications, custom WordPress, technical SEO, and web security — four core disciplines, one high-performing studio. Engineered for measurable growth in Bangladesh and worldwide."}
          </p>
        </div>
      </section>

      {/* Dedicated Specialized Services Grid */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold">Specialized Practices</div>
              <h2 className="text-2xl font-bold mt-1">Core Service Offerings</h2>
            </div>
            <Link to="/pricing" className="text-xs font-semibold text-accent hover:underline hidden sm:block">
              View transparent pricing &rarr;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {specializedServices.map((s, idx) => (
              <Link
                key={s.link}
                to={s.link}
                className="group rounded-3xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-accent mb-2">0{idx + 1} / PRACTICE</div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors mb-2">
                    {s.title}
                  </h3>
                  <div className="text-xs text-accent/80 font-medium mb-3">Targeting: {s.target}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-accent pt-4 border-t border-border/60">
                  Explore full service details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The ArtX Standard / Pillars */}
      <section className="px-6 py-16 md:py-24 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {language === "bn" ? "আমাদের কাজের বিশেষত্ব: কাস্টম ওয়েব সলিউশন" : "The ArtX Standard: Custom Web Solutions"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {language === "bn" ? "প্রতিটি প্রজেক্টে আমরা যে মানদণ্ড নিশ্চিত করি" : "What every project ships with by default"}
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.titleEn} delay={i * 0.1}>
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-colors hover:border-accent/30 shadow-xs">
                    <div>
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-dark text-accent">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-3 text-lg font-semibold leading-snug">
                        {language === "bn" ? s.titleBn : s.titleEn}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {language === "bn" ? s.descBn : s.descEn}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.2} className="mt-14 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent shadow-xs"
            >
              <span className="text-lg">✱</span> {language === "bn" ? "প্যাকেজ ও মূল্য তালিকা দেখুন" : "Explore our transparent web design packages"}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Location Links */}
      <section className="px-6 py-14 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/80 p-6 bg-background flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-accent font-semibold text-xs mb-2">
                  <MapPin className="h-4 w-4" /> Localized for Dhaka
                </div>
                <h3 className="font-bold text-lg mb-2">Web Design Agency in Dhaka</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tailored web design, e-commerce development, and local SEO for businesses in Gulshan, Banani, Uttara, and Dhanmondi.
                </p>
              </div>
              <Link to="/location/dhaka" className="mt-4 text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                View Dhaka agency hub <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border/80 p-6 bg-background flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-accent font-semibold text-xs mb-2">
                  <MapPin className="h-4 w-4" /> Nationwide Coverage
                </div>
                <h3 className="font-bold text-lg mb-2">Web Design Company in Bangladesh</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Serving manufacturers, exporters, startups, and retail brands across all 64 districts with world-class engineering.
                </p>
              </div>
              <Link to="/location/bangladesh" className="mt-4 text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                View Bangladesh nationwide hub <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Footer />
    </>
  );
}
