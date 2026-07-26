import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RotatingAsterisk } from "@/components/animations/RotatingAsterisk";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowLeft, ArrowUpRight, Mail, Sparkles, CheckCircle2, Globe, Cpu, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join the ArtX Team | ArtX Studio" },
      {
        name: "description",
        content:
          "Join ArtX Studio, an independent, remote-first creative studio obsessed with high-craft design, 60fps React development, and technical SEO.",
      },
      { property: "og:title", content: "Careers — ArtX Studio" },
      {
        property: "og:description",
        content:
          "Explore open roles and remote careers in design, development, and SEO at ArtX Studio.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

type BenefitItem = {
  icon: React.ReactNode;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
};

const benefits: BenefitItem[] = [
  {
    icon: <Globe className="h-6 w-6 text-accent" />,
    titleEn: "Remote-First Culture",
    titleBn: "রিমোট-ফার্স্ট কালচার",
    descEn: "Work from anywhere in Bangladesh or around the globe. We care about the quality and craft of what you ship, not where or when you sit.",
    descBn: "বাংলাদেশ বা বিশ্বের যেকোনো স্থান থেকে রিমোটলি কাজ করার সুযোগ। আমরা কাজের সময় বা অবস্থানের চেয়ে কাজের মান এবং দক্ষতাকে বেশি গুরুত্ব দিই।",
  },
  {
    icon: <Cpu className="h-6 w-6 text-accent" />,
    titleEn: "Ownership of Craft",
    titleBn: "কাজের পূর্ণ স্বাধীনতা",
    descEn: "No endless bureaucratic meetings or micromanagement. You own your features and design decisions from initial concept to live deployment.",
    descBn: "কোনো অতিরিক্ত মিটিং বা মাইক্রোম্যানেজমেন্ট নেই। প্রতিটি প্রোজেক্টের আইডিয়া থেকে লাইভ ডিপ্লয়মেন্ট পর্যন্ত আপনার পূর্ণ স্বাধীনতা থাকবে।",
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-accent" />,
    titleEn: "Small Team, Real Impact",
    titleBn: "ছোট টিম, বড় প্রভাব",
    descEn: "You won't be just a cog in a machine. Every line of code and design choice you make directly impacts 950+ global projects and millions of visitors.",
    descBn: "আপনি শুধু একটি বড় প্রতিষ্ঠানের ছোট অংশ হবেন না। আপনার লেখা প্রতিটি কোড এবং ডিজাইন সিদ্ধান্ত সরাসরি বিশ্বের ৯৫০+ প্রোজেক্টে প্রভাব ফেলবে।",
  },
];

type JobRole = {
  titleEn: string;
  titleBn: string;
  typeEn: string;
  typeBn: string;
  descEn: string;
  descBn: string;
  applySubject: string;
};

const openRoles: JobRole[] = [
  {
    titleEn: "Senior React / Full-Stack Engineer",
    titleBn: "সিনিয়র React / ফুল-স্ট্যাক ইঞ্জিনিয়ার",
    typeEn: "Full-Time · Remote (Worldwide)",
    typeBn: "ফুল-টাইম · রিমোট (বিশ্বব্যাপী)",
    descEn: "Build production-grade web applications using React, TanStack, TypeScript, and Tailwind CSS with 60fps animations and clean architecture.",
    descBn: "React, TanStack, TypeScript এবং Tailwind CSS ব্যবহার করে আধুনিক ও দ্রুতগতির ওয়েব অ্যাপ্লিকেশন ডেভেলপ করা।",
    applySubject: "Application: Senior React Engineer",
  },
  {
    titleEn: "Lead UI/UX & Brand Designer",
    titleBn: "লিড ইউআই/ইউএক্স ও ব্র্যান্ড ডিজাইনার",
    typeEn: "Full-Time · Remote (Worldwide)",
    typeBn: "ফুল-টাইম · রিমোট (বিশ্বব্যাপী)",
    descEn: "Design opinionated, high-impact digital experiences, user interfaces, and visual identity systems for ambitious SaaS and tech brands.",
    descBn: "আধুনিক টেক ও এন্টারপ্রাইজ ব্র্যান্ডের জন্য আকর্ষণীয় ইউআই/ইউএক্স, ওয়েব ডিজাইন এবং ভিজ্যুয়াল আইডেন্টিটি তৈরি করা।",
    applySubject: "Application: Lead UI/UX Designer",
  },
  {
    titleEn: "Technical SEO Specialist",
    titleBn: "টেকনিক্যাল এসইও স্পেশালিস্ট",
    typeEn: "Contract / Retainer · Remote",
    typeBn: "কন্ট্রাক্ট / রিটেইনার · রিমোট",
    descEn: "Conduct comprehensive site audits, schema implementations, site performance optimizations, and organic growth strategies for global clients.",
    descBn: "ওয়েবসাইটের টেকনিক্যাল এসইও অডিট, স্কিমা মার্কআপ, স্পিড অপটিমাইজেশন এবং অর্গানিক গ্রোথ স্ট্র্যাটেজি পরিচালনা করা।",
    applySubject: "Application: Technical SEO Specialist",
  },
];

const steps = [
  {
    num: "01",
    titleEn: "Apply & Portfolio Review",
    titleBn: "আবেদন ও পোর্টফোলিও রিভিউ",
    descEn: "Send us your resume, GitHub profile, or Figma projects. We review every application personally within 72 business hours.",
    descBn: "আপনার সিভি, পোর্টফোলিও বা গিটহাব লিংক ইমেইল করুন। আমরা প্রতিটি আবেদন ৭২ ঘণ্টার মধ্যে যাচাই করে থাকি।",
  },
  {
    num: "02",
    titleEn: "Discovery & Culture Chat",
    titleBn: "সংক্ষিপ্ত আলোচনা",
    descEn: "A casual 30-minute video call to discuss your background, technical philosophy, studio culture, and alignment on craft.",
    descBn: "আপনার কাজের অভিজ্ঞতা, স্টুডিও কালচার এবং প্রযুক্তিগত দক্ষতা নিয়ে একটি সংক্ষিপ্ত ৩০ মিনিটের ভিডিও কল।",
  },
  {
    num: "03",
    titleEn: "The Collaboration Offer",
    titleBn: "চূড়ান্ত অফার ও অনবোর্ডিং",
    descEn: "No grueling unpaid 2-week take-home projects. If there is mutual alignment, we make an offer and welcome you aboard immediately.",
    descBn: "কোনো দীর্ঘ বা অবৈতনিক অ্যাসাইনমেন্ট নেই। সবকিছু সামঞ্জস্যপূর্ণ হলে আমরা সরাসরি অফার প্রদান করি এবং টিমে স্বাগত জানাই।",
  },
];

function CareersPage() {
  const { language } = useLanguage();

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

          {/* 1. Header & 2. Intro Line */}
          <ScrollReveal className="mb-24 border-b border-border pb-16">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "ক্যারিয়ার ও সুযোগ" : "Careers at ArtX"}
            </div>
            <h1 className="text-balance text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              {language === "bn" ? (
                <>
                  যোগ দিন <em className="not-italic text-accent">ArtX</em> টিমে।
                </>
              ) : (
                <>
                  Join <em className="not-italic text-accent">the ArtX</em> team.
                </>
              )}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
              {language === "bn"
                ? "আমরা একটি স্বাধীন ও রিমোট-ফার্স্ট ক্রিয়েটিভ স্টুডিও, যারা আধুনিক ডিজাইন, দ্রুতগতির ওয়েব ডেভেলপমেন্ট এবং কার্যকর এসইও নিয়ে কাজ করি। আমাদের ছোট কিন্তু দক্ষ টিমে প্রতিটি সদস্যের কাজের স্বাধীনতা এবং বিশ্বজুড়ে বিভিন্ন ব্র্যান্ড তৈরিতে সরাসরি ভূমিকা রাখার সুযোগ রয়েছে।"
                : "We are an independent, remote-first creative studio obsessed with high-craft design, 60fps web development, and revenue-focused SEO. We work in a tight-knit team where every member owns their craft and makes a direct impact on global brands."}
            </p>
          </ScrollReveal>

          {/* 3. Why Work With Us */}
          <ScrollReveal className="mb-28">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {language === "bn" ? "কেন আমাদের সাথে কাজ করবেন?" : "Why Work With Us"}
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  {language === "bn" ? "কাজের স্বাধীনতা এবং প্রকৃত মূল্যায়ন।" : "Built for builders and creatives."}
                </h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border/70 bg-secondary/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl md:p-10"
                >
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 transition-transform duration-300 group-hover:scale-110">
                      {b.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground md:text-2xl">
                      {language === "bn" ? b.titleBn : b.titleEn}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {language === "bn" ? b.descBn : b.descEn}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-foreground/10 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
                    0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 4. Open Positions */}
          <ScrollReveal className="mb-28">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {language === "bn" ? "উন্মুক্ত পদসমূহ" : "Open Positions"}
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                {language === "bn" ? "আপনার পছন্দের পদ বেছে নিন।" : "Find your next role."}
              </h2>
            </div>

            <div className="space-y-6">
              {openRoles.map((role, i) => (
                <div
                  key={i}
                  className="group flex flex-col justify-between gap-8 rounded-3xl border border-border/80 bg-background p-8 transition-all duration-300 hover:border-accent hover:shadow-xl md:flex-row md:items-center md:p-10"
                >
                  <div className="max-w-2xl space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                      <Sparkles className="h-3.5 w-3.5" />
                      {language === "bn" ? role.typeBn : role.typeEn}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {language === "bn" ? role.titleBn : role.titleEn}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {language === "bn" ? role.descBn : role.descEn}
                    </p>
                  </div>

                  <a
                    href={`mailto:artxstudiocom@gmail.com?subject=${encodeURIComponent(role.applySubject)}`}
                    className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-bold text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
                  >
                    <span>{language === "bn" ? "আবেদন করুন" : "Apply Now"}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              ))}

              {/* General Application Notice */}
              <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-dashed border-border bg-secondary/40 p-8 md:flex-row md:items-center md:p-10">
                <div>
                  <div className="text-base font-bold text-foreground md:text-lg">
                    {language === "bn"
                      ? "আপনার পছন্দের কোনো পদ এই মুহূর্তে তালিকায় নেই?"
                      : "No open roles right now that match your skillset?"}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {language === "bn"
                      ? "তবুও আমরা আপনার কাজের নমুনা দেখতে আগ্রহী। আপনার সিভি বা পোর্টফোলিও আমাদের ইমেইল করুন।"
                      : "We're always looking for exceptional designers and engineers. Send us your portfolio anytime."}
                  </p>
                </div>
                <a
                  href="mailto:artxstudiocom@gmail.com?subject=General%20Application:%20ArtX%20Studio"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  artxstudiocom@gmail.com
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* 5. Application Process */}
          <ScrollReveal className="mb-28">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {language === "bn" ? "নিয়োগ প্রক্রিয়া" : "Application Process"}
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                {language === "bn" ? "সহজ এবং স্বচ্ছ ধাপ।" : "How we hire."}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="relative rounded-3xl border border-border/70 bg-card/50 p-8 shadow-sm md:p-10"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-accent">{s.num}.</span>
                    <CheckCircle2 className="h-6 w-6 text-muted-foreground/40" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">
                    {language === "bn" ? s.titleBn : s.titleEn}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {language === "bn" ? s.descBn : s.descEn}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 6. Contact & Closing CTA Banner */}
          <ScrollReveal>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-dark p-10 text-center text-dark-foreground shadow-2xl md:flex-row md:p-16 md:text-left">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {language === "bn" ? "প্রশ্ন বা সাধারণ জিজ্ঞাসা?" : "Have questions before applying?"}
                </div>
                <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {language === "bn" ? "আমাদের ইমেইল করুন।" : "Get in touch with the team."}
                </h2>
                <p className="mt-3 text-sm text-dark-foreground/70 md:text-base">
                  {language === "bn"
                    ? "যেকোনো জিজ্ঞাসার জন্য আমাদের সরাসরি ইমেইল করুন: artxstudiocom@gmail.com"
                    : "For general inquiries, portfolio submissions, or culture questions, drop us an email anytime."}
                </p>
              </div>
              <a
                href="mailto:artxstudiocom@gmail.com"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-8 py-5 text-base font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/25"
              >
                <Mail className="h-5 w-5" />
                <span>artxstudiocom@gmail.com</span>
                <RotatingAsterisk className="text-base" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
