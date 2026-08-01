import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandPhilosophy } from "@/components/sections/BrandPhilosophy";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowRight, Globe2, Code2, PenTool, ShieldCheck, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Full-service digital product studio | ArtX" },
      { name: "description", content: "ArtX is a full-service digital product studio obsessed with design, engineering, and search. We build for impact." },
      { property: "og:title", content: "About Us — Full-service digital product studio | ArtX" },
      { property: "og:description", content: "ArtX is a full-service digital product studio obsessed with design, engineering, and search." },
      { property: "og:url", content: "https://artxx.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://artxx.lovable.app/about" }],
  }),
  component: AboutPage,
});

const disciplines = [
  {
    icon: PenTool,
    title: "Design",
    titleBn: "ডিজাইন",
    desc: "Editorial, bold interface design. We create aesthetics that demand attention while guiding the user effortlessly through the conversion funnel.",
    descBn: "আধুনিক ও নান্দনিক ইন্টারফেস ডিজাইন যা ব্যবহারকারীর মনোযোগ আকর্ষণ করে এবং সহজেই কাঙ্ক্ষিত লক্ষ্যে পৌঁছাতে সাহায্য করে।",
  },
  {
    icon: Code2,
    title: "Development",
    titleBn: "ডেভেলপমেন্ট",
    desc: "Production-grade React engineering. We build lightning-fast, scalable architectures that deliver a flawless experience on any device.",
    descBn: "প্রোডাকশন-গ্রেড রিঅ্যাক্ট ইঞ্জিনিয়ারিং। আমরা দ্রুত গতির, স্কেলেবল আর্কিটেকচার তৈরি করি যা যেকোনো ডিভাইসে নিখুঁত অভিজ্ঞতা প্রদান করে।",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    titleBn: "এসইও এবং গ্রোথ",
    desc: "Technical audits and content strategy. We ensure your product ranks where it matters and continuously compounds its organic value over time.",
    descBn: "টেকনিক্যাল অডিট এবং কন্টেন্ট কৌশল। আমরা নিশ্চিত করি আপনার প্রোডাক্ট যেন সার্চ ইঞ্জিনে প্রথম দিকে থাকে এবং এর অর্গানিক ভ্যালু বৃদ্ধি পায়।",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    titleBn: "নিরাপত্তা",
    desc: "Enterprise-grade protection via our techvrs.com partnership. We safeguard your digital assets against modern vulnerabilities.",
    descBn: "techvrs.com পার্টনারশিপের মাধ্যমে এন্টারপ্রাইজ-গ্রেড নিরাপত্তা। আমরা আপনার ডিজিটাল সম্পদকে আধুনিক ঝুঁকির হাত থেকে রক্ষা করি।",
  },
];

function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-16 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "স্টুডিও" : "The Studio"}
            </div>
            <h1 className="text-balance text-6xl leading-[0.95] md:text-8xl">
              {language === "bn" ? (
                <>বাংলাদেশের সেরা <br />ওয়েব ডেভেলপমেন্ট <em className="not-italic text-accent">এজেন্সি</em>।</>
              ) : (
                <>Web development <em className="not-italic text-accent">agency</em> <br />in Bangladesh.</>
              )}
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {language === "bn"
                ? "২০১৬ সালে প্রতিষ্ঠিত একটি ছোট স্বাধীন স্টুডিও, যা ডিজাইন, ইঞ্জিনিয়ারিং এবং সার্চের নিখুঁত সমন্বয়ে কাজ করে। এ পর্যন্ত ৪টি মহাদেশের ব্র্যান্ডগুলোর জন্য ৯৫০+ প্রজেক্ট সফলভাবে সম্পন্ন করেছি।"
                : "A small independent studio (est. 2016) obsessed with the intersection of design, engineering, and search. We're a full-service digital team with 950+ projects shipped for brands across 4 continents."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
                {language === "bn" ? "আমাদের গল্প" : "Our Story as a B2B web development company"}
              </h2>
              <div className="mt-6 border-l-2 border-accent pl-4 text-sm font-medium text-foreground">
                {language === "bn"
                  ? "আর্টএক্স হলো ২০১৬ সালে প্রতিষ্ঠিত একটি স্বাধীন ক্রিয়েটিভ স্টুডিও, যা ওয়েবসাইট ডিজাইন, ডেভেলপমেন্ট, এসইও এবং সিকিউরিটি সার্ভিস প্রদান করে। আমরা বিশ্বব্যাপী ব্র্যান্ডের জন্য ডিজিটাল পণ্য তৈরি করি।"
                  : "ArtX is an independent creative studio founded in 2016, based in Bangladesh, offering website design, development, SEO, and security services to SaaS, e-commerce, and hospitality brands worldwide."}
              </div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                {language === "bn"
                  ? "আর্টএক্স ২০১৬ সালে একটি ছোট রিমোট টিম হিসেবে যাত্রা শুরু করে। একটি সাধারণ লক্ষ্য নিয়ে—এমন ডিজিটাল অভিজ্ঞতা তৈরি করা যা সাধারণ গণ্ডি পেরিয়ে নতুন কিছু নিয়ে আসে।"
                  : "ArtX (also known in developer circles as ArtXdev) started in 2016 as a small remote team with a simple mission: to build digital experiences that push past the ordinary and deliver measurable results."}
              </p>
              <p>
                {language === "bn"
                  ? "এক দশক পরে, আমরা একটি পূর্ণাঙ্গ স্টুডিওতে পরিণত হয়েছি। এখন আমরা শুধুমাত্র ডিজাইন বা কোড করি না, বরং ডিজাইন, ডেভেলপমেন্ট, এসইও এবং টেকভার্স ডট কম (techvrs.com) এর পার্টনারশিপে সম্পূর্ণ নিরাপত্তা সমাধান দিয়ে থাকি। আমরা প্রথম দিন থেকেই একটি রিমোট-ফার্স্ট সংস্কৃতি বজায় রেখেছি, যা আমাদের বিশ্বব্যাপী সেরা প্রতিভাদের একসাথে কাজ করার সুযোগ করে দিয়েছে।"
                  : "Over the course of a decade, we evolved into a full-stack B2B web development company. We don't just design or code—we cover the entire product lifecycle from editorial-level interface design and production-grade development, to technical SEO and robust security (via our techvrs.com partnership)."}
              </p>
              <p>
                {language === "bn"
                  ? "১০ বছর ধরে ব্যবসায় থাকার পরও, আমরা ইচ্ছাকৃতভাবে ছোট এবং স্বাধীন থেকে গেছি। কারণ এতে করে আমাদের সিনিয়র বিশেষজ্ঞরা প্রতিটি প্রজেক্টে সরাসরি কাজ করতে পারে এবং কাজের মান সবসময় সর্বোচ্চ পর্যায়ে থাকে।"
                  : "10 years in business, and we've deliberately stayed small and independent. Our remote-first culture allows us to bring senior talent together seamlessly, ensuring that experienced hands touch every single deliverable."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Philosophy */}
      <BrandPhilosophy />

      {/* Our Team (Disciplines) */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-16">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "আমাদের দক্ষতা" : "Our Disciplines"}
            </div>
            <h2 className="text-balance text-5xl leading-[1] md:text-7xl">
              {language === "bn" ? (
                <>একটি স্টুডিও।<br /><em className="not-italic text-accent">চারটি স্তম্ভ।</em></>
              ) : (
                <>One studio.<br /><em className="not-italic text-accent">Four pillars.</em></>
              )}
            </h2>
          </ScrollReveal>
          
          <div className="grid gap-6 md:grid-cols-2">
            {disciplines.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-6 rounded-[2rem] border border-border bg-card p-8 md:p-10 transition-colors hover:border-accent/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <d.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-semibold">
                      {language === "bn" ? d.titleBn : d.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === "bn" ? d.descBn : d.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers That Matter */}
      <section className="bg-dark px-6 py-24 text-dark-foreground md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            <ScrollReveal delay={0}>
              <div className="text-5xl font-bold text-accent md:text-6xl">950+</div>
              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-dark-foreground/60">
                {language === "bn" ? "প্রজেক্ট সম্পন্ন" : "Projects Shipped"}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-5xl font-bold text-accent md:text-6xl">10</div>
              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-dark-foreground/60">
                {language === "bn" ? "বছরের অভিজ্ঞতা" : "Years in Business"}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-5xl font-bold text-accent md:text-6xl">4</div>
              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-dark-foreground/60">
                {language === "bn" ? "মহাদেশে সার্ভিস" : "Continents Served"}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-5xl font-bold text-accent md:text-6xl">98%</div>
              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-dark-foreground/60">
                {language === "bn" ? "ক্লায়েন্ট ধরে রাখার হার" : "Client Retention"}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <ScrollReveal>
            <Globe2 className="mx-auto mb-8 h-16 w-16 text-accent/50" />
            <h2 className="mb-6 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
              {language === "bn" ? "রিমোট · ওয়ার্ল্ডওয়াইড" : "Remote · Worldwide"}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              {language === "bn"
                ? "যদিও আমাদের শেকড় বাংলাদেশে, আমাদের কাজ বিশ্বজুড়ে। আমরা নর্থ আমেরিকা, ইউরোপ এবং এশিয়ার বিভিন্ন স্টার্টআপ ও এন্টারপ্রাইজের সাথে কাজ করেছি—বিশেষ করে সাস (SaaS), ই-কমার্স, হসপিটালিটি এবং ফাইন্যান্স ইন্ডাস্ট্রিতে।"
                : "While our roots are in Bangladesh, our reach is global. We partner with startups and enterprise teams across North America, Europe, and Asia — specializing in SaaS, e-commerce, hospitality, and finance."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="relative overflow-hidden rounded-[2.5rem] bg-accent p-10 text-accent-foreground md:p-20">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-balance text-4xl font-bold md:text-5xl lg:text-7xl">
                {language === "bn" ? (
                  <>এমন কিছু তৈরি করতে চান যা <em className="not-italic opacity-90">কার্যকর</em>?</>
                ) : (
                  <>Ready to build something that <em className="not-italic opacity-90">performs</em>?</>
                )}
              </h2>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-foreground px-8 py-4 text-sm font-semibold text-accent transition-all hover:scale-105 hover:bg-background hover:text-foreground"
              >
                <span className="text-lg">✱</span> {language === "bn" ? "প্রজেক্ট শুরু করুন" : "Start a project"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Background elements */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-background/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-background/10 blur-3xl" />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
