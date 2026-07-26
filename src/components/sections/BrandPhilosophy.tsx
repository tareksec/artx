"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RotatingAsterisk } from "@/components/animations/RotatingAsterisk";
import { useLanguage } from "@/components/providers/LanguageProvider";

const pillars = [
  {
    n: "01",
    tEn: "Research",
    tBn: "গবেষণা",
    dEn: "We start with obsession — audience, market, competitors — until the strategy writes itself.",
    dBn: "টার্গেট অডিয়েন্স, মার্কেট এবং প্রতিযোগী বিশ্লেষণ দিয়ে আমাদের কাজ শুরু হয়, যা একটি নিখুঁত কৌশলে রূপ নেয়।",
  },
  {
    n: "02",
    tEn: "Design",
    tBn: "ডিজাইন",
    dEn: "Bold, editorial, functional. Every pixel earns its place in the composition.",
    dBn: "আধুনিক, নান্দনিক ও কার্যকর। প্রতিটি পিক্সেল এবং ডিজাইন এলিমেন্ট অত্যন্ত ভেবেচিন্তে তৈরি করা হয়।",
  },
  {
    n: "03",
    tEn: "Build",
    tBn: "ডেভেলপমেন্ট",
    dEn: "Production-grade code. Motion tuned to 60 FPS. Zero-compromise performance.",
    dBn: "প্রোডাকশন-গ্রেড কোডিং এবং ৬০ এফপিএস স্মুথ অ্যানিমেশন। পারফরম্যান্সে কোনো ছাড় দেওয়া হয় না।",
  },
  {
    n: "04",
    tEn: "Scale",
    tBn: "গ্রোথ ও এসইও",
    dEn: "Search, analytics and iteration — so the work keeps compounding after launch.",
    dBn: "সাইট লাইভ হওয়ার পরেও এসইও, অ্যানালিটিক্স এবং নিয়মিত আপগ্রেডের মাধ্যমে ধারাবাহিক ব্যবসায়িক প্রবৃদ্ধি নিশ্চিত করা হয়।",
  },
];

export function BrandPhilosophy() {
  const { language } = useLanguage();

  return (
    <section className="px-6 py-24 md:py-32">
      <ScrollReveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-dark p-8 text-dark-foreground md:rounded-[2.5rem] md:p-16">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-dark-foreground/60">
                <span className="h-px w-8 bg-dark-foreground/40" />
                {language === "bn" ? "আমাদের দর্শন" : "Philosophy"}
              </div>
              <h2 className="text-balance text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
                {language === "bn" ? (
                  <>
                    শুধুমাত্র সুন্দর হওয়া যথেষ্ট নয়। সাইটটিকে হতে হবে <em className="not-italic text-accent">কার্যকরী</em>।
                  </>
                ) : (
                  <>
                    Beautiful is not enough. It has to
                    <em className="not-italic text-accent"> perform</em>.
                  </>
                )}
              </h2>
              <p className="mt-8 max-w-lg text-lg text-dark-foreground/70">
                {language === "bn"
                  ? "আমরা ডিজাইনার, ইঞ্জিনিয়ার এবং সার্চ স্ট্র্যাটেজিস্টদের একটি নিবেদিত টিম, যারা এমন ওয়েবসাইট তৈরি করি যা শুধুমাত্র দেখতেই সুন্দর নয়, বরং ব্যবসার বাস্তব প্রবৃদ্ধি ঘটায়।"
                  : "We're a small team of designers, engineers and search strategists building websites that move markets — not just cursors."}
              </p>

              <dl className="mt-12 grid grid-cols-2 gap-8">
                {pillars.map((p) => (
                  <div key={p.n}>
                    <dt className="mb-2 flex items-baseline gap-2 text-sm text-dark-foreground/50">
                      <span>{p.n}</span>
                      <span className="text-dark-foreground">{language === "bn" ? p.tBn : p.tEn}</span>
                    </dt>
                    <dd className="text-sm leading-relaxed text-dark-foreground/70">
                      {language === "bn" ? p.dBn : p.dEn}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="relative lg:col-span-5">
              <div className="sticky top-24 flex aspect-square flex-col justify-between rounded-3xl border border-dark-foreground/10 bg-gradient-to-br from-dark-foreground/[0.06] to-transparent p-8">
                <div className="flex items-start justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-dark-foreground/50">
                    The ArtX Studio
                  </span>
                  <RotatingAsterisk className="text-2xl text-accent" />
                </div>
                <div>
                  <div className="text-[22vw] leading-[0.85] tracking-[-0.06em] md:text-[10vw] lg:text-[7vw]">
                    the<br />
                    <span className="text-accent">artx</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-dark-foreground/50">
                    <span>Est. 2016</span>
                    <span>Remote · Worldwide</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
