"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RotatingAsterisk } from "@/components/animations/RotatingAsterisk";
import { useLanguage } from "@/components/providers/LanguageProvider";

const quotes = [
  {
    qEn: "ArtX delivered a site that finally matched the ambition of our brand. Conversion went up 42% in the first quarter.",
    qBn: "ArtX আমাদের ব্র্যান্ডের আকাঙ্ক্ষার সাথে মিল রেখে একটি চমৎকার ওয়েবসাইট তৈরি করে দিয়েছে। প্রথম প্রান্তিকে আমাদের কনভার্সন ৪২% বৃদ্ধি পেয়েছে।",
    name: "Amelia Rhodes",
    roleEn: "Head of Brand, Northform",
    roleBn: "হেড অব ব্র্যান্ড, Northform",
    radii:
      "rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-2xl rounded-bl-2xl",
  },
  {
    qEn: "The most opinionated studio we've worked with — in the best way. Every decision had a reason and it shows.",
    qBn: "আমাদের সাথে কাজ করা সেরা স্টুডিও। প্রতিটি কাজের পেছনে একটি স্পষ্ট কারণ ছিল এবং সেটির ফলাফল কাজের মানেই প্রতিফলিত হয়েছে।",
    name: "Julien Marc",
    roleEn: "Founder, Jun Century",
    roleBn: "ফাউন্ডার, Jun Century",
    radii:
      "rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-2xl rounded-br-2xl",
  },
  {
    qEn: "Design, build and SEO under one roof made the whole project ship two months faster than our previous rebuild.",
    qBn: "ডিজাইন, ডেভেলপমেন্ট এবং এসইও একই ছাদের নিচে থাকায় আমাদের পুরো প্রোজেক্ট আগের চেয়ে দুই মাস আগেই লাইভ হয়েছে।",
    name: "Priya Shah",
    roleEn: "VP Marketing, Veative",
    roleBn: "ভিপি মার্কেটিং, Veative",
    radii:
      "rounded-tl-[2.5rem] rounded-bl-[2.5rem] rounded-tr-2xl rounded-br-2xl",
  },
];

export function Testimonials() {
  const { language } = useLanguage();

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "রিভিউ" : "Testimonials"}
            </div>
            <h2 className="text-balance text-5xl leading-[1] md:text-7xl">
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
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.05}>
              <figure
                className={`flex h-full flex-col justify-between bg-secondary p-8 md:p-10 ${t.radii}`}
              >
                <RotatingAsterisk className="mb-8 text-2xl text-accent" />
                <blockquote className="text-lg leading-[1.55] tracking-[-0.005em] text-foreground">
                  <span aria-hidden="true" className="text-accent">“</span>
                  {language === "bn" ? t.qBn : t.qEn}
                  <span aria-hidden="true" className="text-accent">”</span>
                </blockquote>
                <figcaption className="mt-10 flex items-baseline justify-between gap-4 border-t border-foreground/10 pt-6">
                  <div>
                    <div className="font-semibold tracking-tight">{t.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {language === "bn" ? t.roleBn : t.roleEn}
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    0{quotes.indexOf(t) + 1}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
