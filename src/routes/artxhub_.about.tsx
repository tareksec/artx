import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  artxHubFontLink,
  artxHubPageClass,
  ArtXHubFooter,
  ArtXHubHeader,
} from "@/components/artxhub/ArtXHubChrome";

const stats = [
  { value: "2016", label: "ArtX Dev founded" },
  { value: "950+", label: "Projects completed" },
  { value: "Dhaka", label: "Based in Bangladesh" },
];

const faqs = [
  {
    q: "What is ArtXHub?",
    a: "ArtXHub is the official app page of ArtX Dev. Every app we build is published here for you to discover and download.",
  },
  {
    q: "How do I download an app?",
    a: `Open the Apps page on your Android phone and tap "Download APK" on the app you want.`,
  },
  {
    q: 'Why does Android show an "unknown apps" warning?',
    a: "Android shows this warning for any APK installed from outside an app store. Allow it for your browser to continue.",
  },
  {
    q: "Will more apps be added?",
    a: "Yes. New apps from ArtX Dev are added to ArtXHub when they are released.",
  },
];

export const Route = createFileRoute("/artxhub_/about")({
  head: () => {
    const seoTitle = "About ArtXHub — Apps by ArtX Dev";
    const metaDesc =
      "ArtXHub is the official app page of ArtX Dev, a web and software studio founded in 2016 in Bangladesh.";
    const canonicalUrl = "https://artxdev.tech/artxhub/about";

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: metaDesc },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: metaDesc },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: "https://biniyogbriddhi.com/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }, artxHubFontLink],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        },
      ],
    };
  },
  component: ArtXHubAboutPage,
});

function ArtXHubAboutPage() {
  return (
    <div className={artxHubPageClass}>
      <ArtXHubHeader />

      <section className="pt-12 pb-12 md:pt-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
              ABOUT
            </span>
          </div>
          <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl text-slate-900 tracking-[-0.02em]">
            The home for <span className="italic font-normal">every app we build.</span>
          </h1>
          <p className="mt-6 text-slate-600 text-[15px] leading-relaxed">
            ArtXHub is the official app page of ArtX Dev. Each app we build is published here, so
            you always have one trusted place to find and download it.
          </p>
          <p className="mt-4 text-slate-600 text-[15px] leading-relaxed">
            ArtX Dev is an independent web design, software engineering and technical SEO studio
            from Bangladesh, and a{" "}
            <a
              href="https://techvrs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B4266] font-semibold underline underline-offset-4"
            >
              TechVRS
            </a>{" "}
            company. We build digital products for brands in Bangladesh and worldwide.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-[#EAF2F8] border border-[#D7E6F3] p-6"
              >
                <div className="font-['Playfair_Display',serif] text-3xl font-medium text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/artxhub/apps"
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#1B4266] px-6 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-[#13324E] transition-all"
            >
              <span>Explore Apps</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-4 py-3.5 text-xs font-medium text-slate-700 hover:bg-white hover:border-slate-400 transition-all"
            >
              Contact ArtX Dev
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-slate-200/60 bg-white/60">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-['Playfair_Display',serif] text-2xl font-semibold text-slate-900 mb-8">
            Frequently asked questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80">
                <h3 className="text-xs font-semibold text-slate-900 mb-1">{faq.q}</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ArtXHubFooter />
    </div>
  );
}
