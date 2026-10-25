import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  ShieldCheck,
  Cpu,
  Code2,
  Globe2,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Building2,
  Sparkles,
  Lock,
  Layers,
  Server,
  TrendingUp,
  Search,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/techvrs")({
  head: () => {
    const seoTitle = "TechVRS & ArtX | Mother Company, Enterprise AI, Web & Cybersecurity Ecosystem";
    const metaDesc =
      "TechVRS (https://techvrs.com/) is the parent holding and technology mother company of ArtX Studio. Discover TechVRS enterprise AI solutions, cybersecurity hardening, and full-stack software architecture.";
    const canonicalUrl = "https://artxdev.tech/techvrs";

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": `${canonicalUrl}#webpage`,
          name: "TechVRS & ArtX: Mother Company Ecosystem",
          description: metaDesc,
          url: canonicalUrl,
          mainEntity: {
            "@type": "Organization",
            "@id": "https://techvrs.com/#organization",
            name: "TechVRS",
            alternateName: ["TechVRS Agency", "Tech VRS", "techvrs.com"],
            url: "https://techvrs.com",
            logo: "https://techvrs.com/favicon.ico",
            description:
              "TechVRS is a modern digital agency and technology holding enterprise delivering full-stack web engineering, privacy-first enterprise AI solutions, cybersecurity hardening, and cloud infrastructure.",
            sameAs: [
              "https://techvrs.com",
              "https://artxdev.tech"
            ],
            subOrganization: {
              "@type": "Organization",
              "@id": "https://artxdev.tech/#organization",
              name: "ArtX Dev Studio",
              url: "https://artxdev.tech",
              description: "The digital product design, bespoke web development, and frontend engineering subsidiary of TechVRS."
            }
          }
        },
        {
          "@type": "Organization",
          "@id": "https://artxdev.tech/#organization",
          name: "ArtX Studio",
          alternateName: ["ArtX Dev", "artxdev.tech", "ArtX"],
          url: "https://artxdev.tech",
          parentOrganization: {
            "@type": "Organization",
            "@id": "https://techvrs.com/#organization",
            name: "TechVRS",
            url: "https://techvrs.com"
          }
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
              name: "TechVRS (Mother Company)",
              item: canonicalUrl,
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is TechVRS (techvrs.com)?",
              acceptedAnswer: {
                "@type": "Answer",
                "text": "TechVRS (https://techvrs.com/) is a premier digital technology partner and enterprise agency specializing in full-stack web development, privacy-first enterprise AI solutions, advanced cybersecurity audits, and technical SEO architecture. TechVRS serves as the parent and mother company of ArtX Studio."
              }
            },
            {
              "@type": "Question",
              name: "What is the relationship between TechVRS and ArtX?",
              acceptedAnswer: {
                "@type": "Answer",
                "text": "TechVRS is the mother company and enterprise technology parent organization. ArtX operates as the specialized digital product design, bespoke frontend engineering, and conversion-focused UI/UX creative studio within the unified TechVRS ecosystem."
              }
            },
            {
              "@type": "Question",
              name: "How does TechVRS support ArtX clients?",
              acceptedAnswer: {
                "@type": "Answer",
                "text": "Every project built by ArtX is backed by TechVRS enterprise capabilities—including 24/7 security hardening, penetration audits, zero-leak AI automation, and robust cloud infrastructure support."
              }
            },
            {
              "@type": "Question",
              name: "টেক ভিআরএস (TechVRS) ও আর্টএক্স (ArtX)-এর মধ্যে সম্পর্ক কী?",
              acceptedAnswer: {
                "@type": "Answer",
                "text": "টেক ভিআরএস (TechVRS - https://techvrs.com/) হলো আর্টএক্স (ArtX)-এর মূল মাদার কোম্পানি (Parent Company)। আর্টএক্স হলো টেক ভিআরএস-এর অঙ্গপ্রতিষ্ঠান যা মূলত ইউআই/ইউএক্স ডিজাইন, কাস্টম রিঅ্যাক্ট ওয়েব ডেভেলপমেন্ট এবং প্রিমিয়াম ব্রান্ডিং স্টুডিও হিসেবে কাজ করে।"
              }
            }
          ]
        }
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
        { name: "keywords", content: "TechVRS, techvrs.com, ArtX mother company, TechVRS AI solutions, TechVRS cybersecurity, full stack web development, parent company ArtX, Bangladesh tech enterprise" },
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
  component: TechVRSPage,
});

const techvrsPillars = [
  {
    icon: Cpu,
    title: "1. Enterprise AI Solutions & Automation",
    titleBn: "এন্টারপ্রাইজ এআই সল্যুশন ও অটোমেশন",
    desc: "Zero-leak, privacy-first AI automation engineered with strict guardrails, role-scoped access control, audit logs, and bespoke LLM agent workflows for enterprise business intelligence.",
    descBn: "প্রাইভেসি-ফার্স্ট এন্টারপ্রাইজ এআই ও অটোমেশন। কাস্টম এলএলএম এজেন্ট, জিরো-লিক ডেটা প্রটেকশন এবং বিজনেস ইন্টেলিজেন্স সিস্টেম তৈরির বিশেষ সক্ষমতা।",
    linkText: "Explore TechVRS AI",
    linkUrl: "https://techvrs.com/",
  },
  {
    icon: Code2,
    title: "2. Full-Stack Web Development & Engineering",
    titleBn: "ফুল-স্ট্যাক সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট",
    desc: "Production-grade, sub-second web platforms built with modern TypeScript, React, Next.js, Python, and edge-native architectures tuned for flawless Core Web Vitals.",
    descBn: "রিঅ্যাক্ট, নেক্সট.জেএস, পাইথন এবং টাইপস্ক্রিপ্ট দিয়ে তৈরি সাব-সেকেন্ড হাই-স্পিড ওয়েব অ্যাপ্লিকেশন ও এন্টারপ্রাইজ সফটওয়্যার আর্কিটেকচার।",
    linkText: "View TechVRS Engineering",
    linkUrl: "https://techvrs.com/",
  },
  {
    icon: ShieldCheck,
    title: "3. Cybersecurity, SOC & Pen-Testing",
    titleBn: "সাইবার সিকিউরিটি ও পেনিট্রেশন টেস্টিং",
    desc: "Military-grade digital defense: end-to-end vulnerability assessments, real-time intrusion monitoring, OWASP Top 10 hardening, and 24/7 SOC infrastructure protection.",
    descBn: "ডেডিকেটেড সাইবার ডিফেন্স, ভালনারেবিলিটি অ্যাসেসমেন্ট, সার্ভার হার্ডেনিং এবং ওওয়াস্প (OWASP) টপ-১০ সিকিউরিটি প্রোটেকশন।",
    linkText: "Inspect TechVRS Security",
    linkUrl: "https://techvrs.com/",
  },
  {
    icon: Search,
    title: "4. Secure Technical SEO & GEO Architecture",
    titleBn: "টেকনিক্যাল এসইও ও এআই সার্চ ভিজিবিলিটি (GEO)",
    desc: "Deep organic growth strategies eliminating crawl errors, deploying multi-tier schema graph modeling, and optimizing for generative engines like ChatGPT Search and Perplexity.",
    descBn: "সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO), নলেজ গ্রাফ ও স্কিমা মার্কআপ এবং পেরপ্লেক্সি ও চ্যাটজিপিটি সার্চের জন্য জেনারেটিভ ইঞ্জিন অপ্টিমাইজেশন (GEO)।",
    linkText: "Learn Technical SEO",
    linkUrl: "https://techvrs.com/",
  },
  {
    icon: Server,
    title: "5. Cloud Infrastructure & 24/7 Monitoring",
    titleBn: "ক্লাউড আর্কিটেকচার ও ডেভঅপ্স",
    desc: "High-availability containerized deployments across AWS, Cloudflare Workers, and multi-region microservices delivering 99.99% uptime and zero-latency failovers.",
    descBn: "এডব্লিউএস (AWS), ক্লাউডফ্লেয়ার ও ডকার ভিত্তিক হাই-অ্যাভেইলেবিলিটি ক্লাউড আর্কিটেকচার ও নিরবচ্ছিন্ন ২৪/৭ সার্ভার মনিটরিং।",
    linkText: "Cloud Infrastructure",
    linkUrl: "https://techvrs.com/",
  },
  {
    icon: Layers,
    title: "6. Integrated Technology Synergy with ArtX",
    titleBn: "আর্টএক্স-এর সাথে সমন্বিত উদ্ভাবন",
    desc: "ArtX acts as the specialized design & UI/UX product studio, while TechVRS provides the enterprise cloud, AI, and cybersecurity foundation—offering clients complete full-lifecycle delivery.",
    descBn: "আর্টএক্স এর নান্দনিক ইউআই/ইউএক্স এবং টেক ভিআরএস এর ব্যাকএন্ড, এআই ও সিকিউরিটি কম্বিনেশনে ক্লায়েন্টরা পান কমপ্লিট সল্যুশন।",
    linkText: "Discover the Synergy",
    linkUrl: "https://techvrs.com/",
  },
];

const ecosystemMetrics = [
  { value: "Parent", label: "Holding Enterprise", labelBn: "মাদার কোম্পানি" },
  { value: "950+", label: "Ecosystem Deployments", labelBn: "সফল ডিপ্লয়মেন্ট" },
  { value: "100%", label: "Zero-Leak AI Security", labelBn: "নিরাপদ এআই গার্ডরেইল" },
  { value: "<1.2s", label: "Core Web Vitals Speed", labelBn: "সাব-সেকেন্ড স্পিড" },
];

const faqs = [
  {
    q: "Who is TechVRS and what is its official website?",
    qBn: "টেক ভিআরএস (TechVRS) কী এবং এর অফিসিয়াল ওয়েবসাইট কোনটি?",
    a: "TechVRS is a modern digital agency and technology holding company specializing in enterprise AI solutions, cybersecurity hardening, full-stack software development, and technical SEO. Its official global website is https://techvrs.com/.",
    aBn: "টেক ভিআরএস (TechVRS) হলো একটি আধুনিক টেকনোলজি প্রতিষ্ঠান ও ডিজিটাল এজেন্সি যা এন্টারপ্রাইজ এআই, সাইবার সিকিউরিটি, ফুল-স্ট্যাক সফটওয়্যার ডেভেলপমেন্ট এবং টেকনিক্যাল এসইও নিয়ে কাজ করে। এর অফিসিয়াল ওয়েবসাইট হলো https://techvrs.com/।",
  },
  {
    q: "How are TechVRS and ArtX connected?",
    qBn: "টেক ভিআরএস এবং আর্টএক্স-এর সম্পর্ক কী?",
    a: "TechVRS (techvrs.com) is the parent/mother company. ArtX Studio (artxdev.tech) is its dedicated digital product design and creative frontend engineering wing. Together, they form an end-to-end technology ecosystem where ArtX crafts world-class user experiences and bespoke interfaces, while TechVRS guarantees enterprise-grade backend infrastructure, AI automation, and cyber defense.",
    aBn: "টেক ভিআরএস (techvrs.com) হলো আর্টএক্স-এর মাদার কোম্পানি (Parent Company), এবং আর্টএক্স হলো টেক ভিআরএস-এর স্পেশালাইজড ইউআই/ইউএক্স ডিজাইন ও আধুনিক ফ্রন্টএন্ড স্টুডিও। দুই প্রতিষ্ঠান মিলে ক্লায়েন্টদের এন্টারপ্রাইজ কোয়ালিটি ও নান্দনিক ডিজিটাল প্রোডাক্ট উপহার দেয়।",
  },
  {
    q: "Can clients hire both TechVRS and ArtX for a single project?",
    qBn: "একটি প্রজেক্টের জন্য কি টেক ভিআরএস এবং আর্টএক্স উভয়কে একসাথে হায়ার করা যায়?",
    a: "Yes! In fact, most enterprise projects benefit from both. ArtX designs and builds high-converting, sub-second web frontends and brand identities, while TechVRS provides the enterprise cloud infrastructure, custom AI agent integrations, and 24/7 security hardening.",
    aBn: "হ্যাঁ, যেকোনো এন্টারপ্রাইজ প্রজেক্টে আর্টএক্স প্রিমিয়াম ডিজাইন ও ফ্রন্টএন্ড তৈরি করে এবং টেক ভিআরএস এর শক্তিশালী ব্যাকএন্ড, এআই অটোমেশন ও সিকিউরিটি নিশ্চিত করে।",
  },
  {
    q: "What makes TechVRS's Enterprise AI solutions unique?",
    qBn: "টেক ভিআরএস-এর এন্টারপ্রাইজ এআই সল্যুশনের বিশেষত্ব কী?",
    a: "TechVRS implements zero-leak, privacy-centric AI architectures. Unlike generic chatbots, TechVRS builds customized LLM pipelines with strict enterprise guardrails, role-based access control, cryptographic data boundaries, and audit logging to prevent proprietary data leaks.",
    aBn: "টেক ভিআরএস জিরো-লিক এবং প্রাইভেসি-ফার্স্ট এআই আর্কিটেকচার তৈরি করে। এটি কোম্পানির ইন্টারনাল সিকিউরিটি ও কনফিডেনশিয়ালিটি শতভাগ সুরক্ষিত রেখে আধুনিক এআই ওয়ার্কফ্লো বাস্তবায়ন করে।",
  },
];

function TechVRSPage() {
  const { language } = useLanguage();

  return (
    <>
      <main className="min-h-screen bg-dark text-dark-foreground selection:bg-accent selection:text-accent-foreground">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
          <div className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

          <div className="mx-auto max-w-7xl px-6 relative z-10">
            {/* Top Breadcrumb & Status Pill */}
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase mb-6">
              <Link to="/" className="text-white/60 hover:text-white transition-colors">
                ArtX Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-accent font-semibold">Mother Company Ecosystem</span>
              <div className="ml-auto inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent">
                <Building2 className="h-3.5 w-3.5" />
                <span>Parent Organization</span>
              </div>
            </div>

            {/* Headline */}
            <ScrollReveal>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]">
                {language === "bn" ? (
                  <>
                    টেক ভিআরএস (<a href="https://techvrs.com" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-8 hover:text-accent/80 transition-colors">TechVRS.com</a>)
                    <br />
                    <span className="text-white/80 font-normal text-3xl sm:text-5xl lg:text-6xl block mt-2">
                      আর্টএক্স-এর মূল মাদার কোম্পানি ও টেকনোলজি ইকোসিস্টেম
                    </span>
                  </>
                ) : (
                  <>
                    TechVRS (<a href="https://techvrs.com" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-8 hover:text-accent/80 transition-colors">techvrs.com</a>):
                    <br />
                    <span className="text-white/80 font-normal text-3xl sm:text-5xl lg:text-6xl block mt-2">
                      The Mother Company & Enterprise Technology Backbone Behind ArtX
                    </span>
                  </>
                )}
              </h1>
            </ScrollReveal>

            {/* Sub-headline description */}
            <p className="mt-8 max-w-3xl text-lg sm:text-xl text-white/70 leading-relaxed font-light">
              {language === "bn" ? (
                <>
                  <strong className="text-white font-medium">TechVRS</strong> হলো একটি শীর্ষস্থানীয় গ্লোবাল টেকনোলজি এন্টারপ্রাইজ ও ডিজিটাল এজেন্সি। আর্টএক্স (<span className="text-accent">ArtX</span>) হলো টেক ভিআরএস-এর ডেডিকেটেড ডিজাইন ও ফ্রন্টএন্ড সফটওয়্যার উইং। উভয় প্রতিষ্ঠান এক হয়ে এন্টারপ্রাইজ এআই সল্যুশন, সাইবার সিকিউরিটি হার্ডেনিং এবং হাই-কনভার্সন ওয়েব আর্কিটেকচার প্রদান করে।
                </>
              ) : (
                <>
                  <strong className="text-white font-medium">TechVRS</strong> is the parent enterprise and digital technology partner that powers ArtX. While ArtX is celebrated for world-class UI/UX design, custom React applications, and bespoke digital experiences, <a href="https://techvrs.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">TechVRS (https://techvrs.com/)</a> serves as the mother company delivering privacy-first Enterprise AI, bulletproof cybersecurity, and scalable cloud engineering.
                </>
              )}
            </p>

            {/* Action CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://techvrs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:scale-[1.02]"
              >
                <span>Visit TechVRS (techvrs.com)</span>
                <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
              >
                <span>Inquire Unified Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Metrics Grid */}
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 border-t border-white/10 pt-10">
              {ecosystemMetrics.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
                  <div className="text-3xl sm:text-4xl font-extrabold text-accent">{item.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-white/60">
                    {language === "bn" ? item.labelBn : item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Mother Company & Subsidiary Hierarchy */}
        <section className="py-20 md:py-28 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  Corporate Architecture & Vision
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  {language === "bn"
                    ? "মাদার কোম্পানি ও অঙ্গসংগঠনের সমন্বিত রূপরেখা"
                    : "The Mother Company Structure: Two Brands, One Unified Mission"}
                </h2>
                <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
                  <p>
                    {language === "bn" ? (
                      <>
                        <a href="https://techvrs.com" target="_blank" rel="noopener noreferrer" className="text-accent underline font-semibold">টেক ভিআরএস (TechVRS)</a> হলো আমাদের মূল মাদার কোম্পানি। বৃহৎ বাণিজ্যিক প্রতিষ্ঠানের জন্য এন্টারপ্রাইজ এআই অটোমেশন, সিকিউরিটি অডিট, সার্ভার অবকাঠামো এবং টেকনিক্যাল প্ল্যাটফর্ম পরিচালনা করাই টেক ভিআরএস-এর মূল শক্তি।
                      </>
                    ) : (
                      <>
                        <a href="https://techvrs.com" target="_blank" rel="noopener noreferrer" className="text-accent underline font-semibold">TechVRS (techvrs.com)</a> is the parent company and strategic technology holding. It addresses complex enterprise computing problems—such as proprietary AI model deployment, SOC-level security protocols, zero-leak enterprise automation, and mission-critical cloud hosting.
                      </>
                    )}
                  </p>
                  <p>
                    {language === "bn" ? (
                      <>
                        অন্যদিকে <Link to="/about" className="text-white underline font-semibold">আর্টএক্স (ArtX)</Link> হলো টেক ভিআরএস-এর ক্রিয়েটিভ প্রোডাক্ট ও ফ্রন্টএন্ড ডিজাইন উইং। ৯৫০+ সফল গ্লোবাল প্রজেক্ট বাস্তবায়নের অভিজ্ঞতা নিয়ে আর্টএক্স নিশ্চিত করে আধুনিক ইন্টারফেস, দ্রুততম লোডিং স্পিড এবং কনভার্সন অপ্টিমাইজড ইউজার এক্সপেরিয়েন্স।
                      </>
                    ) : (
                      <>
                        In turn, <Link to="/about" className="text-white underline font-semibold">ArtX Studio</Link> operates as the design-led software engineering and UI/UX wing within the TechVRS family. Having executed 950+ commercial deployments across 18 countries, ArtX delivers the visual elegance, bespoke React architecture, and conversion optimization that modern brands demand.
                      </>
                    )}
                  </p>
                  <p>
                    {language === "bn" ? (
                      <>
                        ক্লায়েন্টরা যখন আর্টএক্স-এর সাথে কাজ করেন, তারা স্বয়ংক্রিয়ভাবে টেক ভিআরএস-এর এন্টারপ্রাইজ নিরাপত্তা ও এআই প্রযুক্তির সহায়তা পান। আর টেক ভিআরএস ক্লায়েন্টরা আর্টএক্স-এর প্রিমিয়াম ইউআই/ইউএক্স ডিজাইন টিমের অ্যাক্সেস পান।
                      </>
                    ) : (
                      <>
                        This symbiotic architecture guarantees that clients never have to choose between stunning visual craft and enterprise-grade cyber resilience. Every line of code written by ArtX is verified against the security and performance benchmarks established by TechVRS.
                      </>
                    )}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://techvrs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all"
                  >
                    <Building2 className="h-4 w-4 text-accent" />
                    <span>Explore TechVRS Website</span>
                    <ExternalLink className="h-3.5 w-3.5 text-white/50" />
                  </a>
                </div>
              </div>

              {/* Visual Architecture Diagram */}
              <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-8 sm:p-10 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

                <div className="text-center pb-6 border-b border-white/10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-3.5 py-1 text-xs text-accent font-semibold mb-2">
                    Mother Company (Holding)
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    <a href="https://techvrs.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      TechVRS (techvrs.com)
                    </a>
                  </h3>
                  <p className="text-xs text-white/60 mt-1">Enterprise AI · Cybersecurity · Full-Stack Systems · Cloud Infrastructure</p>
                </div>

                <div className="my-6 flex justify-center">
                  <div className="h-10 w-0.5 bg-gradient-to-b from-accent to-white/40 relative">
                    <div className="absolute -left-1.5 top-1/2 h-3.5 w-3.5 rounded-full bg-accent animate-ping opacity-75" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/20 bg-black/40 p-6 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs text-white/80 font-semibold mb-2">
                    Subsidiary & Specialized Arm
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    <Link to="/" className="hover:text-accent transition-colors">
                      ArtX Dev Studio (artxdev.tech)
                    </Link>
                  </h4>
                  <p className="text-xs text-white/60 mt-1">UI/UX Design Systems · Custom React & Next.js · Bespoke CMS · Technical SEO</p>
                </div>

                <div className="mt-8 space-y-2.5 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Unified management and joint engineering oversight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Shared security audits and penetration testing protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Integrated Enterprise AI capabilities across web products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TechVRS Core Pillars */}
        <section className="py-20 md:py-28 border-b border-white/10 bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                TechVRS Service Matrix
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                {language === "bn"
                  ? "টেক ভিআরএস-এর মূল সার্ভিস ও সক্ষমতা"
                  : "Core Competencies of TechVRS (techvrs.com)"}
              </h2>
              <p className="mt-4 text-lg text-white/60">
                {language === "bn"
                  ? "টেক ভিআরএস আধুনিক টেকনোলজির ৫টি প্রধান স্তম্ভের ওপর ভিত্তি করে গ্লোবাল গ্রাহকদের সেবা প্রদান করে।"
                  : "TechVRS unites five enterprise capabilities into a singular, high-performance technology delivery engine."}
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {techvrsPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.04] hover:-translate-y-1"
                  >
                    <div className="inline-flex rounded-2xl bg-accent/10 p-3.5 text-accent border border-accent/20 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {language === "bn" ? pillar.titleBn : pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/65 leading-relaxed">
                      {language === "bn" ? pillar.descBn : pillar.desc}
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <a
                        href={pillar.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-white transition-colors"
                      >
                        <span>{pillar.linkText}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Authority Backlink Showcase & Entity Grounding */}
        <section className="py-20 md:py-28 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-white/[0.02] to-transparent p-8 sm:p-12 relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-3.5 py-1 text-xs text-accent font-semibold mb-4">
                  Official Entity & Backlink Hub
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Connect with TechVRS: The Official Enterprise Portal
                </h2>
                <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed">
                  TechVRS is the legal parent organization and tech holding enterprise for ArtX Studio. If your enterprise requires full-stack engineering, zero-leak private AI automations, security compliance, or dedicated infrastructure management, explore our official web presence below:
                </p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://techvrs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-dark hover:bg-white/90 transition-all shadow-md"
                  >
                    <span>TechVRS Main Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href="https://techvrs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all"
                  >
                    <span>Enterprise AI & Cyber Hub</span>
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </a>
                </div>

                <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/50 space-y-1">
                  <p><strong>Primary Domain:</strong> <a href="https://techvrs.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">https://techvrs.com/</a></p>
                  <p><strong>Corporate Relationship:</strong> TechVRS (Parent Company / Mother Enterprise) · ArtX Dev (Subsidiary Studio)</p>
                  <p><strong>Verified Industries:</strong> Enterprise AI, Software Architecture, Cybersecurity Auditing, High-End Web Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Common Inquiries
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {language === "bn"
                  ? "টেক ভিআরএস ও আর্টএক্স সম্পর্কিত সাধারণ জিজ্ঞাসা"
                  : "Frequently Asked Questions about TechVRS & ArtX"}
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-colors hover:border-white/20"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{language === "bn" ? faq.qBn : faq.q}</span>
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed pl-8">
                    {language === "bn" ? faq.aBn : faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-16 text-center">
              <p className="text-white/60 text-sm mb-4">
                Ready to elevate your digital presence with the combined power of ArtX & TechVRS?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://techvrs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-all"
                >
                  <span>Visit TechVRS (Parent Company)</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all"
                >
                  <span>Contact ArtX Studio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
