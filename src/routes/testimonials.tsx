import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RotatingAsterisk } from "@/components/animations/RotatingAsterisk";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowLeft, ArrowRight, Star, Sparkles, Building2 } from "lucide-react";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — ArtX web design studio reviews" },
      {
        name: "description",
        content:
          "Read client reviews, feedback, and case study results from SaaS, e-commerce, and global brands who partnered with ArtX Studio.",
      },
      { property: "og:title", content: "Testimonials — ArtX web design studio reviews" },
      {
        property: "og:description",
        content:
          "Read client reviews, feedback, and case study results from SaaS, e-commerce, and global brands who partnered with ArtX Studio.",
      },
      { property: "og:url", content: "https://artxx.lovable.app/testimonials" },
    ],
    links: [{ rel: "canonical", href: "https://artxx.lovable.app/testimonials" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ArtX Studio",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "134"
          }
        }),
      }
    ]
  }),
  component: TestimonialsPage,
});

type TestimonialCard = {
  qEn: string;
  qBn: string;
  name: string;
  roleEn: string;
  roleBn: string;
  rating: number;
  radii: string;
  projectSlug?: string;
  projectLinkEn: string;
  projectLinkBn: string;
  industry: string;
};

// Trust Strip Logos - Placeholders or icons
const trustedBy = [
  { name: "Northform", icon: Building2 },
  { name: "Jun Century", icon: Building2 },
  { name: "Veative", icon: Building2 },
  { name: "Gearabout", icon: Building2 },
  { name: "Samriddhi", icon: Building2 },
];

const allTestimonials: TestimonialCard[] = [
  {
    qEn: "ArtX delivered a site that finally matched the ambition of our brand. Conversion went up 42% in the first quarter.",
    qBn: "ArtX আমাদের ব্র্যান্ডের আকাঙ্ক্ষার সাথে মিল রেখে একটি চমৎকার ওয়েবসাইট তৈরি করে দিয়েছে। প্রথম প্রান্তিকে আমাদের কনভার্সন ৪২% বৃদ্ধি পেয়েছে।",
    name: "Amelia Rhodes",
    roleEn: "Head of Brand, Northform",
    roleBn: "হেড অব ব্র্যান্ড, Northform",
    rating: 5,
    radii: "rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-2xl rounded-bl-2xl",
    projectSlug: "northform-saas",
    projectLinkEn: "Read the Northform case study",
    projectLinkBn: "Northform কেস স্টাডি পড়ুন",
    industry: "SaaS",
  },
  {
    qEn: "The most opinionated studio we've worked with — in the best way. Every decision had a reason and it shows.",
    qBn: "আমাদের সাথে কাজ করা সেরা স্টুডিও। প্রতিটি কাজের পেছনে একটি স্পষ্ট কারণ ছিল এবং সেটির ফলাফল কাজের মানেই প্রতিফলিত হয়েছে।",
    name: "Julien Marc",
    roleEn: "Founder, Jun Century",
    roleBn: "ফাউন্ডার, Jun Century",
    rating: 5,
    radii: "rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-2xl rounded-br-2xl",
    projectSlug: "jun-century",
    projectLinkEn: "Read the Jun Century case study",
    projectLinkBn: "Jun Century কেস স্টাডি পড়ুন",
    industry: "E-commerce",
  },
  {
    qEn: "Design, build and SEO under one roof made the whole project ship two months faster than our previous rebuild.",
    qBn: "ডিজাইন, ডেভেলপমেন্ট এবং এসইও একই ছাদের নিচে থাকায় আমাদের পুরো প্রোজেক্ট আগের চেয়ে দুই মাস আগেই লাইভ হয়েছে।",
    name: "Priya Shah",
    roleEn: "VP Marketing, Veative",
    roleBn: "ভিপি মার্কেটিং, Veative",
    rating: 5,
    radii: "rounded-tl-[2.5rem] rounded-bl-[2.5rem] rounded-tr-2xl rounded-br-2xl",
    projectSlug: "veative-kitchen",
    projectLinkEn: "Read the Veative case study",
    projectLinkBn: "Veative কেস স্টাডি পড়ুন",
    industry: "Restaurant",
  },
  {
    qEn: "The 60fps animations and clean architecture gave our e-commerce platform an immediate enterprise feel. Sales increased by 65% within weeks.",
    qBn: "সাইটের ৬০এফপিএস অ্যানিমেশন এবং ক্লিন আর্কিটেকচারের কারণে আমাদের ই-কমার্স প্ল্যাটফর্মটি একটি প্রিমিয়াম লুক পেয়েছে। কয়েক সপ্তাহের মধ্যেই আমাদের বিক্রি ৬৫% বেড়েছে।",
    name: "Marcus Vance",
    roleEn: "Founder & CEO, Gearabout",
    roleBn: "ফাউন্ডার ও সিইও, Gearabout",
    rating: 5,
    radii: "rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-2xl rounded-br-2xl",
    projectSlug: "gearabout",
    projectLinkEn: "Read the Gearabout case study",
    projectLinkBn: "Gearabout কেস স্টাডি পড়ুন",
    industry: "E-commerce",
  },
  {
    qEn: "Our transparent SME investment platform required absolute trust from day one. ArtX simplified our complex model into an elegant, user-friendly experience.",
    qBn: "আমাদের ইনভেস্টমেন্ট প্ল্যাটফর্মের জন্য প্রথম দিন থেকেই আস্থার প্রয়োজন ছিল। ArtX আমাদের জটিল মডেলকে একটি সহজ ও সুন্দর ইউজার এক্সপেরিয়েন্সে রূপান্তর করেছে।",
    name: "Mohaimin Patwary",
    roleEn: "Founder, Samriddhi",
    roleBn: "ফাউন্ডার, Samriddhi",
    rating: 5,
    radii: "rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-2xl rounded-bl-2xl",
    projectSlug: "samriddhi",
    projectLinkEn: "Read the Samriddhi case study",
    projectLinkBn: "Samriddhi কেস স্টাডি পড়ুন",
    industry: "FinTech",
  },
];

const industries = ["All", "SaaS", "E-commerce", "Restaurant", "Education", "FinTech"];

function TestimonialsPage() {
  const { language } = useLanguage();
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredTestimonials = useMemo(() => {
    if (activeIndustry === "All") return allTestimonials;
    return allTestimonials.filter((t) => t.industry === activeIndustry);
  }, [activeIndustry]);

  return (
    <>
      <main className="min-h-screen px-6 pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Back Link */}
          <ScrollReveal className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === "bn" ? "হোমে ফিরে যান" : "Back to Home"}
            </Link>
          </ScrollReveal>

          {/* Page Header */}
          <ScrollReveal className="mb-20">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "ক্লায়েন্ট রিভিউ" : "Testimonials"}
            </div>
            <h1 className="text-balance text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              {language === "bn" ? (
                <>
                  যাদের সাথে আমরা কাজ করেছি তাদের <em className="not-italic text-accent">মূল্যবান মতামত</em>।
                </>
              ) : (
                <>
                  Words from <em className="not-italic text-accent">the teams</em>
                  <br /> we ship with.
                </>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {language === "bn"
                ? "দেশ ও দেশের বাইরের বিভিন্ন আধুনিক ব্র্যান্ড এবং উদ্যোক্তাদের সাথে আমাদের কাজের অভিজ্ঞতা ও তাদের প্রতিক্রিয়া জানুন।"
                : "Real feedback from founders, marketers, and brand leads we've partnered with."}
            </p>
          </ScrollReveal>

          {/* Trust Strip */}
          <ScrollReveal delay={0.1} className="mb-20 border-y border-border py-8">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                {language === "bn" ? "যাদের আস্থার প্রতীক" : "Trusted by teams shipping fast"}
              </div>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                {trustedBy.map((brand, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <brand.icon className="h-5 w-5" />
                    <span className="font-bold tracking-tight">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Filter */}
          <ScrollReveal delay={0.2} className="mb-12">
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeIndustry === ind
                      ? "bg-foreground text-background"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {ind === "All" && language === "bn" ? "সব" : ind}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid / Masonry Layout */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08} className="h-full">
                <figure
                  className={`group flex h-full flex-col justify-between border border-border/60 bg-secondary/70 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl md:p-10 ${t.radii}`}
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <RotatingAsterisk className="text-2xl text-accent" />
                      <div className="flex items-center gap-1" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`h-4 w-4 ${
                              starIdx < t.rating
                                ? "fill-accent text-accent"
                                : "fill-muted text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-lg leading-[1.6] tracking-[-0.005em] text-foreground">
                      <span aria-hidden="true" className="text-accent font-serif text-xl">“</span>
                      {language === "bn" ? t.qBn : t.qEn}
                      <span aria-hidden="true" className="text-accent font-serif text-xl">”</span>
                    </blockquote>
                  </div>

                  <div>
                    <figcaption className="mt-8 flex items-baseline justify-between gap-4 border-t border-foreground/10 pt-6">
                      <div>
                        <div className="font-bold tracking-tight text-foreground md:text-lg">
                          {t.name}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {language === "bn" ? t.roleBn : t.roleEn}
                        </div>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                        0{i + 1}
                      </span>
                    </figcaption>

                    {t.projectSlug ? (
                      <div className="mt-5 border-t border-foreground/5 pt-4">
                        <Link
                          to={`/work/${t.projectSlug}`}
                          className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent transition-colors hover:underline"
                        >
                          <span>{language === "bn" ? t.projectLinkBn : t.projectLinkEn}</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    ) : (
                      <div className="mt-5 border-t border-foreground/5 pt-4">
                        <span className="inline-flex items-center gap-2 text-xs font-medium italic text-muted-foreground">
                          <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                          {language === "bn" ? t.projectLinkBn : t.projectLinkEn}
                        </span>
                      </div>
                    )}
                  </div>
                </figure>
              </ScrollReveal>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                {language === "bn" ? "এই ক্যাটাগরিতে কোনো রিভিউ পাওয়া যায়নি।" : "No reviews found for this industry yet."}
              </p>
            </div>
          )}

          {/* Bottom CTA Banner */}
          <ScrollReveal className="mt-28">
            <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-dark p-10 text-center text-dark-foreground shadow-2xl md:flex-row md:p-16 md:text-left">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {language === "bn" ? "পরবর্তী সাফল্যের গল্প হতে চান?" : "Ready to be our next success story?"}
                </div>
                <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {language === "bn" ? "চলুন একসাথে কিছু আকর্ষণীয় তৈরি করি।" : "Let's build something standout."}
                </h2>
                <p className="mt-3 text-sm text-dark-foreground/70 md:text-base">
                  {language === "bn"
                    ? "আপনার নতুন প্রোজেক্ট বা রিডিজাইন নিয়ে আলোচনা করতে আজই যোগাযোগ করুন।"
                    : "Partner with a team that cares about design, speed, and real revenue impact."}
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-8 py-5 text-base font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/25"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-foreground/15 text-sm transition-transform duration-500 group-hover:rotate-180">
                  ✱
                </span>
                <span>{language === "bn" ? "প্রোজেক্ট শুরু করুন" : "Start your project"}</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
