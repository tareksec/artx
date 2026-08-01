import { createFileRoute, Link } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Zap, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — B2B web development company | ArtX Studio" },
      { name: "description", content: "ArtX is a B2B web development company and technical SEO agency. We engineer custom websites designed to convert." },
      { property: "og:title", content: "Services — B2B web development company | ArtX Studio" },
      { property: "og:description", content: "ArtX is a B2B web development company and technical SEO agency offering website design, web development, and SEO." },
      { property: "og:url", content: "https://artxx.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://artxx.lovable.app/services" }],
  }),
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

function ServicesPage() {
  const { language } = useLanguage();

  return (
    <>
      <section className="px-6 pt-40 pb-16 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            {language === "bn" ? "আমাদের সার্ভিসসমূহ" : "Capabilities"}
          </div>
          <h1 className="text-balance text-6xl leading-[0.95] md:text-8xl">
            {language === "bn" ? (
              <>সম্পূর্ণ ডিজিটাল <em className="not-italic text-accent">প্রোডাক্ট স্টুডিও</em>।</>
            ) : (
              <>Full-service digital <em className="not-italic text-accent">product studio</em>.</>
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {language === "bn"
              ? "ডিজাইন, ডেভেলপমেন্ট, এসইও এবং ওয়েব সিকিউরিটি — একই ছাদের নিচে আপনার ব্যবসার সম্পূর্ণ ডিজিটাল সমাধান। প্রতিটি সার্ভিস বিশ্বমানের মানদণ্ডে তৈরি।"
              : "Editorial design, custom web solutions, 60fps React development, technical SEO, and web security — four core disciplines, one high-performing studio. Engineered for measurable growth."}
          </p>
        </div>
      </section>

      {/* The ArtX Standard / Pillars */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12 border-t border-border pt-12">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
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
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-secondary/40 p-8 transition-colors hover:border-accent/30">
                    <div>
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-dark text-accent">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-3 text-lg font-semibold leading-snug">
                        {language === "bn" ? s.titleBn : s.titleEn}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {language === "bn" ? s.descBn : s.descEn}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.2} className="mt-16 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <span className="text-lg">✱</span> {language === "bn" ? "প্যাকেজ ও মূল্য তালিকা দেখুন" : "Explore our affordable web design packages"}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Semantic Services List for GEO / Crawlers */}
      <section className="px-6 py-12 bg-secondary/50">
        <div className="mx-auto max-w-4xl text-center md:text-left">
          <h2 className="text-xl font-semibold mb-6">
            {language === "bn" ? "আমাদের মূল সেবাসমূহ" : "Our Core Services"}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground text-left mx-auto md:mx-0 list-disc list-inside">
            <li>Website Design & UX/UI Prototyping</li>
            <li>Custom Web Development (React & WordPress)</li>
            <li>Technical & On-Page SEO</li>
            <li>E-commerce Website Development</li>
            <li>SaaS Platform Design</li>
            <li>Web Security Audits & Hardening</li>
          </ul>
        </div>
      </section>

      <Services />
      <Footer />
    </>
  );
}
