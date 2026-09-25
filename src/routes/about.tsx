import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandPhilosophy } from "@/components/sections/BrandPhilosophy";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { teamMembers } from "@/content/site";
import { ArrowRight, Globe2, Code2, PenTool, ShieldCheck, TrendingUp, Award, ExternalLink, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => {
    const seoTitle = "About ArtX | Web Design & Development Agency in Bangladesh";
    const metaDesc = "Learn about ArtX, Bangladesh's leading web design studio. Discover our 10-year journey, 950+ projects, expert team & full-stack services. Partner with us!";
    const canonicalUrl = "https://artxdev.tech/about";

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": `${canonicalUrl}#aboutpage`,
          name: "About ArtX Studio",
          description: metaDesc,
          url: canonicalUrl,
          mainEntity: {
            "@type": "Organization",
            name: "ArtX Studio",
            alternateName: "ArtXdev",
            url: "https://artxdev.tech",
            foundingDate: "2016",
            founder: {
              "@type": "Person",
              name: "Muhammad Tarek (MD Tarek)",
              jobTitle: "Founder & Creative Director",
            },
          },
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
              name: "About",
              item: canonicalUrl,
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
  component: AboutPage,
});

const disciplines = [
  {
    icon: PenTool,
    title: "1. Website & UI/UX Design",
    titleBn: "ওয়েবসাইট ও ইউআই/ইউএক্স ডিজাইন",
    desc: "Editorial, high-craft interfaces designed in Figma to convert visitors into customers without visual clutter.",
    descBn: "আধুনিক ও নান্দনিক ইন্টারফেস ডিজাইন যা ব্যবহারকারীর মনোযোগ আকর্ষণ করে এবং সহজেই কাঙ্ক্ষিত লক্ষ্যে পৌঁছাতে সাহায্য করে।",
    link: "/services/saas-website-design",
  },
  {
    icon: Code2,
    title: "2. Web & E-Commerce Development",
    titleBn: "ওয়েব ও ই-কমার্স ডেভেলপমেন্ট",
    desc: "Production-grade React and custom WordPress engineering. Sub-second load times and MFS (bKash/Nagad) checkout.",
    descBn: "প্রোডাকশন-গ্রেড রিঅ্যাক্ট ইঞ্জিনিয়ারিং। আমরা দ্রুত গতির, স্কেলেবল আর্কিটেকচার তৈরি করি যা যেকোনো ডিভাইসে নিখুঁত অভিজ্ঞতা প্রদান করে।",
    link: "/services/ecommerce-website-design",
  },
  {
    icon: TrendingUp,
    title: "3. Technical SEO & GEO",
    titleBn: "টেকনিক্যাল এসইও ও গ্রোথ",
    desc: "Technical site audits, local Dhaka Google Maps rankings, and Generative Engine Optimization for ChatGPT & Perplexity.",
    descBn: "টেকনিক্যাল অডিট এবং কন্টেন্ট কৌশল। আমরা নিশ্চিত করি আপনার প্রোডাক্ট যেন সার্চ ইঞ্জিনে প্রথম দিকে থাকে এবং এর অর্গানিক ভ্যালু বৃদ্ধি পায়।",
    link: "/services/seo-services",
  },
  {
    icon: ShieldCheck,
    title: "4. Web Security via Techvrs",
    titleBn: "ওয়েব নিরাপত্তা ও সুরক্ষার ব্যবস্থা",
    desc: "Enterprise penetration testing and continuous vulnerability monitoring delivered through our Techvrs partnership.",
    descBn: "techvrs.com পার্টনারশিপের মাধ্যমে এন্টারপ্রাইজ-গ্রেড নিরাপত্তা। আমরা আপনার ডিজিটাল সম্পদকে আধুনিক ঝুঁকির হাত থেকে রক্ষা করি।",
    link: "https://techvrs.com",
  },
];

function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-36 pb-16 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "স্টুডিও পরিচিতি" : "Who We Are · Established 2016"}
            </div>
            <h1 className="text-balance text-5xl leading-[1] md:text-7xl font-bold tracking-tight">
              {language === "bn" ? (
                <>বাংলাদেশের সেরা <br />ওয়েব ডেভেলপমেন্ট <em className="not-italic text-accent">এজেন্সি</em>।</>
              ) : (
                <>Full-service web design <br />&amp; development <em className="not-italic text-accent">studio</em>.</>
              )}
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              {language === "bn"
                ? "২০১৬ সালে প্রতিষ্ঠিত একটি ছোট স্বাধীন স্টুডিও, যা ডিজাইন, ইঞ্জিনিয়ারিং এবং সার্চের নিখুঁত সমন্বয়ে কাজ করে। এ পর্যন্ত ৪টি মহাদেশের ব্র্যান্ডগুলোর জন্য ৯৫০+ প্রজেক্ট সফলভাবে সম্পন্ন করেছি।"
                : "ArtX (also known as ArtXdev) is an independent creative studio founded in 2016 in Bangladesh. We design, code, and rank standout digital products for B2B, SaaS, and e-commerce brands worldwide that refuse to blend into generic templates."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Clear 'Who We Are' Statement */}
      <section className="px-6 py-16 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                Mission &amp; Identity
              </div>
              <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
                {language === "bn" ? "আমাদের গল্প" : "Who We Are & What We Stand For"}
              </h2>
              <div className="mt-6 border-l-2 border-accent pl-4 text-sm font-medium text-foreground leading-relaxed">
                {language === "bn"
                  ? "আর্টএক্স হলো ২০১৬ সালে প্রতিষ্ঠিত একটি স্বাধীন ক্রিয়েটিভ স্টুডিও, যা ওয়েবসাইট ডিজাইন, ডেভেলপমেন্ট, এসইও এবং সিকিউরিটি সার্ভিস প্রদান করে। আমরা বিশ্বব্যাপী ব্র্যান্ডের জন্য ডিজিটাল পণ্য তৈরি করি।"
                  : "ArtX is an independent digital product studio based in Bangladesh. We combine high-end editorial UI/UX design with production-grade React engineering, technical SEO, and enterprise security."}
              </div>
            </div>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Founded in 2016, ArtX started with a straightforward conviction: that websites should be engineered as high-performance commercial assets, not ornamental brochureware.
              </p>
              <p>
                Over the past decade, we have shipped over <strong>950 projects</strong> for tech startups in North America and Europe, as well as leading manufacturers, retailers, and enterprises across <strong>Dhaka and Bangladesh</strong>.
              </p>
              <p>
                We deliberately remain a compact, senior-led studio. When you hire ArtX, your project is designed and coded directly by specialists with a decade of expertise—never outsourced to junior interns or outsourced sweatshops.
              </p>
              <div className="pt-2">
                <Link to="/why-us" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                  Discover Why Clients Choose ArtX <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Philosophy Component */}
      <BrandPhilosophy />

      {/* Services List in Plain Language */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-14">
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              Plain-Language Capabilities
            </div>
            <h2 className="text-balance text-3xl md:text-5xl font-bold">
              What We Do in <em className="not-italic text-accent">Plain Language</em>.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl">
              No technical jargon or inflated agency acronyms. Here are the 4 core disciplines we deliver every day.
            </p>
          </ScrollReveal>
          
          <div className="grid gap-6 md:grid-cols-2">
            {disciplines.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 md:p-10 transition-colors hover:border-accent/40 shadow-xs">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                      <d.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">
                      {language === "bn" ? d.titleBn : d.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {language === "bn" ? d.descBn : d.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <Link to={d.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
                      Learn more about this capability <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Named Team Members (GEO Entity Signal) */}
      <section className="px-6 py-20 md:py-28 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-14 text-center max-w-2xl mx-auto">
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              The Leadership
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Named Team Specialists Behind Every Commit
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Experienced leaders who personally architect, design, and code your digital flagship.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 0.08}>
                <div className="rounded-3xl border border-border bg-card p-6 h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="h-14 w-14 rounded-2xl bg-dark text-accent text-lg font-bold flex items-center justify-center mb-5">
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                    <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">{member.role}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 text-xs text-muted-foreground flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Verified Senior Contributor
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Business Stats */}
      <section className="bg-dark px-6 py-24 text-dark-foreground md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center max-w-xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">Track Record</div>
            <h2 className="text-3xl md:text-4xl font-bold">10 Years of Verifiable Results</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <ScrollReveal delay={0}>
              <div className="text-5xl font-bold text-accent md:text-6xl mb-2">950+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-dark-foreground/60 font-semibold">
                {language === "bn" ? "প্রজেক্ট সম্পন্ন" : "Web Projects Shipped"}
              </div>
              <p className="text-xs text-dark-foreground/50 mt-2">SaaS, E-Commerce, B2B &amp; Corporate</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-5xl font-bold text-accent md:text-6xl mb-2">10</div>
              <div className="text-xs uppercase tracking-[0.2em] text-dark-foreground/60 font-semibold">
                {language === "bn" ? "বছরের অভিজ্ঞতা" : "Years in Business (Est. 2016)"}
              </div>
              <p className="text-xs text-dark-foreground/50 mt-2">Continuous independent operation</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-5xl font-bold text-accent md:text-6xl mb-2">4</div>
              <div className="text-xs uppercase tracking-[0.2em] text-dark-foreground/60 font-semibold">
                {language === "bn" ? "মহাদেশে সার্ভিস" : "Continents Served"}
              </div>
              <p className="text-xs text-dark-foreground/50 mt-2">North America, Europe, Asia, Australia</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-5xl font-bold text-accent md:text-6xl mb-2">98%</div>
              <div className="text-xs uppercase tracking-[0.2em] text-dark-foreground/60 font-semibold">
                {language === "bn" ? "ক্লায়েন্ট ধরে রাখার হার" : "Client Retention Rate"}
              </div>
              <p className="text-xs text-dark-foreground/50 mt-2">Long-term ongoing partnerships</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Directory Listings for GEO */}
      <section className="px-6 py-20 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">Entity Verification</div>
            <h2 className="text-3xl font-bold">Accredited Industry Listings</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Recognized and audited by global B2B agency evaluation platforms.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border p-6 bg-background text-center shadow-xs">
              <Award className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="font-bold text-base mb-1">Google Business Profile</div>
              <div className="text-xs text-muted-foreground mb-4">Dhaka, Bangladesh · Verified</div>
              <span className="text-xs font-semibold text-accent flex items-center justify-center gap-1">
                Verified Listing <ExternalLink className="h-3 w-3" />
              </span>
            </div>

            <div className="rounded-2xl border border-border p-6 bg-background text-center shadow-xs">
              <Award className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="font-bold text-base mb-1">Clutch.co</div>
              <div className="text-xs text-muted-foreground mb-4">Top Web Development Studio</div>
              <span className="text-xs font-semibold text-accent flex items-center justify-center gap-1">
                Verified Studio <ExternalLink className="h-3 w-3" />
              </span>
            </div>

            <div className="rounded-2xl border border-border p-6 bg-background text-center shadow-xs">
              <Award className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="font-bold text-base mb-1">DesignRush</div>
              <div className="text-xs text-muted-foreground mb-4">Accredited Agency Partner</div>
              <span className="text-xs font-semibold text-accent flex items-center justify-center gap-1">
                Accredited Agency <ExternalLink className="h-3 w-3" />
              </span>
            </div>

            <div className="rounded-2xl border border-border p-6 bg-background text-center shadow-xs">
              <Award className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="font-bold text-base mb-1">GoodFirms</div>
              <div className="text-xs text-muted-foreground mb-4">Top Rated Web Designers 2025</div>
              <span className="text-xs font-semibold text-accent flex items-center justify-center gap-1">
                Recognized Firm <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <ScrollReveal>
            <Globe2 className="mx-auto mb-6 h-14 w-14 text-accent/60" />
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              {language === "bn" ? "রিমোট · ওয়ার্ল্ডওয়াইড" : "Rooted in Bangladesh · Serving Worldwide"}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed">
              While our core studio is based in Dhaka, Bangladesh, we partner with founders and enterprise marketing teams across North America, Europe, and Asia. We also maintain dedicated service hubs for <Link to="/location/dhaka" className="text-accent underline font-semibold">Dhaka</Link> and <Link to="/location/bangladesh" className="text-accent underline font-semibold">nationwide Bangladesh</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="relative overflow-hidden rounded-[2.5rem] bg-accent p-10 text-accent-foreground md:p-20 text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold md:text-5xl lg:text-6xl">
              Ready to work with a studio that delivers?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-sm md:text-base opacity-90">
              Get in touch with Alex and the senior engineering team today for an honest, fluff-free project evaluation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-foreground px-8 py-4 text-sm font-semibold text-accent transition-all hover:scale-105 hover:bg-background hover:text-foreground shadow-md"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
