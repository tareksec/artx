import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Clock, RefreshCcw, Lock, Rocket, TrendingUp, ShoppingCart, Infinity } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useEffect } from "react";

export const Route = createFileRoute("/offer")({
  head: () => ({
    meta: [
      { title: "Web Hosting Plans — NVMe SSD Hosting | ArtX" },
      { name: "description", content: "Fast, secure NVMe SSD hosting plans starting at ৳1,299/year. Free SSL, free daily backups, 24/7 support. Choose the plan that fits your business." },
      { property: "og:title", content: "Web Hosting Plans — NVMe SSD Hosting | ArtX" },
      { property: "og:description", content: "Fast, secure NVMe SSD hosting plans starting at ৳1,299/year. Free SSL, free daily backups, 24/7 support. Choose the plan that fits your business." },
      { property: "og:url", content: "https://artxx.lovable.app/offer" },
    ],
    links: [{ rel: "canonical", href: "https://artxx.lovable.app/offer" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is NVMe SSD hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NVMe SSD hosting uses the latest Non-Volatile Memory Express storage technology, delivering data up to 10x faster than traditional SSDs. This means faster page loads, better SEO, and a smoother experience for your visitors."
              }
            }
          ]
        }),
      }
    ]
  }),
  component: OfferPage,
});

const content = {
  en: {
    badge: "⚡ Limited-time pricing",
    heroHeading: "NVMe SSD Hosting.",
    heroHighlight: "10x Faster.",
    heroSubheading: "Launch your website on blazing-fast, secure hosting — built for businesses, blogs, and growing stores.",
    compareFeaturesTitle: "Compare all features",
    whatsIncluded: "What's Included:",
    disclaimer: "Hosting powered by our infrastructure partner.\nRedirects to secure checkout.",
    trustIcons: [
      { icon: Lock, label: "SSL Secured" },
      { icon: ShieldCheck, label: "DDoS Protected" },
      { icon: Clock, label: "24/7 Support" },
      { icon: RefreshCcw, label: "7-Day Money Back" },
    ],
    plans: [
      {
        name: "Freelancer",
        icon: Rocket,
        tag: "Best for starters",
        price: "৳1,299",
        period: "/year",
        tagline: "NVMe SSD Web Hosting — 10x Faster",
        cta: "Place Order",
        link: "https://my.webhostingpk.com/store/shared-hosting/freelancer",
        highlighted: false,
        specs: [
          "Free Website/Landing Page Build",
          "Host 1 Website",
          "10 GB NVMe Storage",
          "10,000+ Monthly Visitors",
          "50 GB Bandwidth",
          "Free SSL + Free cPanel",
          "8 Core CPU / 1 GB Dedicated RAM"
        ],
        included: "Best for Business & Blogging · Free Daily Backup · Paid cPanel Migration · Upgrade Anytime · 24/7 Support",
        note: "Without Free Domain"
      },
      {
        name: "Business",
        icon: TrendingUp,
        tag: "Most Popular",
        price: "৳2,599",
        period: "/year",
        tagline: "NVMe SSD Web Hosting — 10x Faster",
        cta: "Place Order",
        link: "https://my.webhostingpk.com/store/shared-hosting/business",
        highlighted: true,
        specs: [
          "Free Website/Landing Page Build",
          "Free .Com, .Net, .Org",
          "Host 3 Websites",
          "15 GB NVMe Storage",
          "25,000+ Monthly Visitors",
          "100 GB Bandwidth",
          "Free SSL + Free cPanel"
        ],
        included: "Free Daily Backup · 7 Days Money Back · Free cPanel Migration · 24/7 Support",
        note: "Hosting + Domain renewal"
      },
      {
        name: "Professional",
        icon: ShoppingCart,
        tag: "Best for growing stores",
        price: "৳3,000",
        period: "/year",
        tagline: "NVMe SSD Hosting — 10x Faster",
        cta: "Place Order",
        link: "https://my.webhostingpk.com/store/shared-hosting/professional",
        highlighted: false,
        specs: [
          "Free Website/Landing Page Build",
          "Free .Com, .Net, .Org",
          "Host 10 Websites",
          "50 GB NVMe Storage",
          "100,000+ Monthly Visitors",
          "Unlimited Bandwidth + Emails"
        ],
        included: "Best for Blogs & Small eCommerce · Free Daily Backup · 7 Days Money Back · Free cPanel Migration · 24/7 Support",
        note: "Hosting + Domain Renewal"
      },
      {
        name: "Unlimited",
        icon: Infinity,
        tag: "Best for high traffic",
        price: "৳3,599",
        period: "/year",
        tagline: "NVMe SSD Hosting — 10x Faster",
        cta: "Place Order",
        link: "https://my.webhostingpk.com/store/shared-hosting/unlimited",
        highlighted: false,
        specs: [
          "Free Website/Landing Page Build",
          "Free .Com, .Net, .Org",
          "Unlimited Websites",
          "Unlimited Storage",
          "500,000+ Monthly Visitors",
          "Unlimited Bandwidth + Emails + Database"
        ],
        included: "Handles High Traffic Websites · Free Daily Backup · 7 Days Money Back · Free cPanel Migration · 24/7 Support",
        note: "Hosting + Domain renewal"
      }
    ],
    fullFeatures: [
      "Emails Sending 100/h",
      "Free SSL Certificate",
      "Free cPanel",
      "Free Virus Scanner",
      "App Installer Softaculous",
      "Full Terminal Access",
      "WordPress Installer",
      "Node.js Supported",
      "Python Supported",
      "Server Locations: Finland/Germany/USA",
      "Litespeed Server",
      "Security: Imunify360",
      "8 Core CPU",
      "1 GB Dedicated RAM",
      "Free Malware Scanner",
      "Cloudflare CDN",
      "DDoS Protection",
      "Unlimited File Usage",
      "Unlimited Inodes",
      "Up to 10x Faster"
    ]
  },
  bn: {
    badge: "⚡ লিমিটেড-টাইম প্রাইসিং",
    heroHeading: "NVMe SSD হোস্টিং.",
    heroHighlight: "১০ গুণ দ্রুতগামী.",
    heroSubheading: "আপনার ওয়েবসাইট চালু করুন দ্রুতগামী, সুরক্ষিত হোস্টিং-এ — যা ব্যবসা, ব্লগ এবং ক্রমবর্ধমান স্টোরের জন্য তৈরি।",
    compareFeaturesTitle: "সকল ফিচার তুলনা করুন",
    whatsIncluded: "যা যা অন্তর্ভুক্ত:",
    disclaimer: "আমাদের ইনফ্রাস্ট্রাকচার পার্টনার দ্বারা হোস্টিং চালিত।\nসিকিউর চেকআউটে রিডাইরেক্ট হবে।",
    trustIcons: [
      { icon: Lock, label: "SSL দ্বারা সুরক্ষিত" },
      { icon: ShieldCheck, label: "DDoS প্রোটেক্টেড" },
      { icon: Clock, label: "২৪/৭ সাপোর্ট" },
      { icon: RefreshCcw, label: "৭ দিনের মানি ব্যাক" },
    ],
    plans: [
      {
        name: "Freelancer",
        icon: Rocket,
        tag: "নতুনদের জন্য সেরা",
        price: "৳1,299",
        period: "/বছর",
        tagline: "NVMe SSD ওয়েব হোস্টিং — ১০ গুণ দ্রুতগামী",
        cta: "অর্ডার করুন",
        link: "https://my.webhostingpk.com/store/shared-hosting/freelancer",
        highlighted: false,
        specs: [
          "ফ্রি ওয়েবসাইট/ল্যান্ডিং পেজ তৈরি",
          "১টি ওয়েবসাইট হোস্ট",
          "১০ জিবি NVMe স্টোরেজ",
          "১০,০০০+ মাসিক ভিজিটর",
          "৫০ জিবি ব্যান্ডউইথ",
          "ফ্রি SSL + ফ্রি cPanel",
          "৮ কোর CPU / ১ জিবি ডেডিকেটেড RAM"
        ],
        included: "ব্যবসা ও ব্লগের জন্য সেরা · ফ্রি ডেইলি ব্যাকআপ · পেইড cPanel মাইগ্রেশন · যেকোনো সময় আপগ্রেড · ২৪/৭ সাপোর্ট",
        note: "ফ্রি ডোমেইন ছাড়া"
      },
      {
        name: "Business",
        icon: TrendingUp,
        tag: "সবচেয়ে জনপ্রিয়",
        price: "৳2,599",
        period: "/বছর",
        tagline: "NVMe SSD ওয়েব হোস্টিং — ১০ গুণ দ্রুতগামী",
        cta: "অর্ডার করুন",
        link: "https://my.webhostingpk.com/store/shared-hosting/business",
        highlighted: true,
        specs: [
          "ফ্রি ওয়েবসাইট/ল্যান্ডিং পেজ তৈরি",
          "ফ্রি .Com, .Net, .Org",
          "৩টি ওয়েবসাইট হোস্ট",
          "১৫ জিবি NVMe স্টোরেজ",
          "২৫,০০০+ মাসিক ভিজিটর",
          "১০০ জিবি ব্যান্ডউইথ",
          "ফ্রি SSL + ফ্রি cPanel"
        ],
        included: "ফ্রি ডেইলি ব্যাকআপ · ৭ দিনের মানি ব্যাক · ফ্রি cPanel মাইগ্রেশন · ২৪/৭ সাপোর্ট",
        note: "হোস্টিং + ডোমেইন রিনিউয়াল"
      },
      {
        name: "Professional",
        icon: ShoppingCart,
        tag: "ক্রমবর্ধমান স্টোরের জন্য সেরা",
        price: "৳3,000",
        period: "/বছর",
        tagline: "NVMe SSD হোস্টিং — ১০ গুণ দ্রুতগামী",
        cta: "অর্ডার করুন",
        link: "https://my.webhostingpk.com/store/shared-hosting/professional",
        highlighted: false,
        specs: [
          "ফ্রি ওয়েবসাইট/ল্যান্ডিং পেজ তৈরি",
          "ফ্রি .Com, .Net, .Org",
          "১০টি ওয়েবসাইট হোস্ট",
          "৫০ জিবি NVMe স্টোরেজ",
          "১,০০,০০০+ মাসিক ভিজিটর",
          "আনলিমিটেড ব্যান্ডউইথ + ইমেইল"
        ],
        included: "ব্লগ ও ছোট ই-কমার্সের জন্য সেরা · ফ্রি ডেইলি ব্যাকআপ · ৭ দিনের মানি ব্যাক · ফ্রি cPanel মাইগ্রেশন · ২৪/৭ সাপোর্ট",
        note: "হোস্টিং + ডোমেইন রিনিউয়াল"
      },
      {
        name: "Unlimited",
        icon: Infinity,
        tag: "হাই ট্রাফিকের জন্য সেরা",
        price: "৳3,599",
        period: "/বছর",
        tagline: "NVMe SSD হোস্টিং — ১০ গুণ দ্রুতগামী",
        cta: "অর্ডার করুন",
        link: "https://my.webhostingpk.com/store/shared-hosting/unlimited",
        highlighted: false,
        specs: [
          "ফ্রি ওয়েবসাইট/ল্যান্ডিং পেজ তৈরি",
          "ফ্রি .Com, .Net, .Org",
          "আনলিমিটেড ওয়েবসাইট",
          "আনলিমিটেড স্টোরেজ",
          "৫,০০,০০০+ মাসিক ভিজিটর",
          "আনলিমিটেড ব্যান্ডউইথ + ইমেইল + ডাটাবেস"
        ],
        included: "হাই ট্রাফিক ওয়েবসাইট সামলায় · ফ্রি ডেইলি ব্যাকআপ · ৭ দিনের মানি ব্যাক · ফ্রি cPanel মাইগ্রেশন · ২৪/৭ সাপোর্ট",
        note: "হোস্টিং + ডোমেইন রিনিউয়াল"
      }
    ],
    fullFeatures: [
      "প্রতি ঘণ্টায় ১০০ ইমেইল সেন্ডিং",
      "ফ্রি SSL সার্টিফিকেট",
      "ফ্রি cPanel",
      "ফ্রি ভাইরাস স্ক্যানার",
      "অ্যাপ ইনস্টলার (Softaculous)",
      "ফুল টার্মিনাল এক্সেস",
      "ওয়ার্ডপ্রেস ইনস্টলার",
      "Node.js সাপোর্টেড",
      "Python সাপোর্টেড",
      "সার্ভার লোকেশন: ফিনল্যান্ড/জার্মানি/যুক্তরাষ্ট্র",
      "লাইটস্পিড সার্ভার",
      "সিকিউরিটি: Imunify360",
      "৮ কোর CPU",
      "১ জিবি ডেডিকেটেড RAM",
      "ফ্রি ম্যালওয়্যার স্ক্যানার",
      "ক্লাউডফ্লেয়ার CDN",
      "DDoS প্রোটেকশন",
      "আনলিমিটেড ফাইল ইউজেস",
      "আনলিমিটেড ইনোডস",
      "১০ গুণ পর্যন্ত দ্রুত"
    ]
  }
};

function OfferPage() {
  const { language, setLanguage } = useLanguage();
  
  useEffect(() => {
    const saved = localStorage.getItem("artx-lang");
    if (!saved) {
      setLanguage("bn");
    }
  }, [setLanguage]);

  const t = content[language === "bn" ? "bn" : "en"];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes badge-pop {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-badge-pop {
          animation: badge-pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}} />
      <section className="px-6 pb-16 pt-32 md:pb-24 md:pt-40 relative">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-secondary p-1 border border-border">
          <button
            onClick={() => setLanguage("en")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              language === "en" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("bn")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              language === "bn" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            বাংলা
          </button>
        </div>

        <div className="mx-auto max-w-7xl text-center mt-12">
          <ScrollReveal>
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                {t.badge}
              </span>
            </div>
            <h1 className="text-balance text-5xl leading-[0.95] md:text-7xl">
              {t.heroHeading} <em className="not-italic text-accent">{t.heroHighlight}</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t.heroSubheading}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 mt-6">
            {t.plans.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    tier.highlighted
                      ? "border-accent bg-dark text-dark-foreground shadow-xl shadow-accent/5 ring-1 ring-accent/20 md:scale-105 md:z-10"
                      : "border-border bg-background shadow-sm"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent-foreground shadow-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        {tier.tag}
                      </span>
                    </div>
                  )}

                  <div className="mb-8 flex items-start">
                    <div 
                      className={`animate-badge-pop flex items-center justify-center rounded-[1.25rem] transition-transform duration-500 hover:scale-110 ${
                        tier.highlighted
                          ? "h-[4.5rem] w-[4.5rem] bg-accent/15 text-accent ring-1 ring-accent/30 shadow-lg shadow-accent/20"
                          : "h-16 w-16 bg-accent/5 text-accent border border-accent/10"
                      }`}
                      style={{ opacity: 0, animationDelay: `${(i * 0.1) + 0.2}s` }}
                    >
                      <tier.icon aria-hidden="true" className={tier.highlighted ? "h-8 w-8" : "h-7 w-7"} strokeWidth={1.5} />
                    </div>
                  </div>

                  {!tier.highlighted && (
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                        {tier.tag}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div
                      className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                        tier.highlighted ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {tier.name}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight md:text-5xl">{tier.price}</span>
                      <span className={`text-sm ${tier.highlighted ? "text-dark-foreground/70" : "text-muted-foreground"}`}>{tier.period}</span>
                    </div>
                    <p
                      className={`mt-3 text-sm font-medium ${
                        tier.highlighted ? "text-accent" : "text-accent"
                      }`}
                    >
                      {tier.tagline}
                    </p>
                    <p
                      className={`mt-2 text-xs ${
                        tier.highlighted ? "text-dark-foreground/60" : "text-muted-foreground/70"
                      }`}
                    >
                      {tier.note}
                    </p>
                  </div>

                  <ul className="flex-1 space-y-3 border-t border-current/10 pt-6">
                    {tier.specs.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                            tier.highlighted ? "text-accent" : "text-accent"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium leading-normal ${
                            tier.highlighted ? "text-dark-foreground/90" : "text-foreground/90"
                          }`}
                        >
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-6 rounded-xl p-4 text-xs leading-relaxed ${tier.highlighted ? 'bg-white/5 text-dark-foreground/80' : 'bg-secondary/50 text-muted-foreground'}`}>
                    <strong>{t.whatsIncluded}</strong> {tier.included}
                  </div>

                  <a
                    href={tier.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
                        : "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  
                  <p className={`mt-3 text-center text-[10px] whitespace-pre-line ${tier.highlighted ? "text-dark-foreground/50" : "text-muted-foreground/60"}`}>
                    {t.disclaimer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {t.trustIcons.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="features" className="rounded-2xl border border-border bg-background px-6 data-[state=open]:border-accent/30">
                <AccordionTrigger className="py-6 text-left font-semibold hover:text-accent hover:no-underline [&>svg]:text-accent text-lg">
                  {t.compareFeaturesTitle}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {t.fullFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0 sm:[&:nth-last-child(-n+2)]:border-0">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
