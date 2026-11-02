import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import {
  Download,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  HandCoins,
  Eye,
  CheckCircle2,
  Layers,
  Zap,
} from "lucide-react";
import { artxHubApps } from "@/content/artxhub-apps";
import {
  artxHubFontLink,
  artxHubPageClass,
  ArtXHubAppCard,
  ArtXHubFooter,
  ArtXHubHeader,
} from "@/components/artxhub/ArtXHubChrome";

const featuredApps = artxHubApps.filter((app) => app.isFeatured);
const spotlightApp = artxHubApps.find((app) => app.isSpotlight) || artxHubApps[0];
const featureIcons = [BadgeCheck, HandCoins, Eye];

export const Route = createFileRoute("/artxhub")({
  head: () => {
    const seoTitle = "ArtXHub — Discover & Download Android Apps by ArtX Dev";
    const metaDesc =
      "ArtXHub is the official home for every app built by ArtX Dev. Discover and download Android apps, including Biniyog Briddhi (বিনিয়োগ বৃদ্ধি).";
    const canonicalUrl = "https://artxdev.tech/artxhub";
    const ogImageUrl = "https://biniyogbriddhi.com/og-image.jpg";

    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: seoTitle,
          description: metaDesc,
          inLanguage: ["en", "bn"],
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://artxdev.tech/#website",
            name: "ArtX Dev",
            url: "https://artxdev.tech",
          },
          about: {
            "@type": "Thing",
            name: "Android Mobile Applications",
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: ogImageUrl,
          },
        },
        {
          "@type": "CollectionPage",
          "@id": `${canonicalUrl}#collection`,
          name: "ArtXHub App Showcase",
          description: "The collection of Android apps built by ArtX Dev.",
          url: canonicalUrl,
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
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
              name: "ArtXHub",
              item: canonicalUrl,
            },
          ],
        },
        ...artxHubApps.map((app) => ({
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}#${app.id}`,
          name: app.name,
          alternateName: app.nameBn,
          operatingSystem: app.platform,
          applicationCategory: `${app.category}Application`,
          softwareVersion: app.version.replace("v", ""),
          fileSize: app.fileSize.replace(" ", ""),
          description: app.fullDescription,
          image: app.iconSrc,
          downloadUrl: app.downloadUrl,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BDT",
          },
          author: {
            "@type": "Organization",
            name: "ArtX Dev",
            url: "https://artxdev.tech",
          },
        })),
      ],
    };

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: seoTitle },
        { name: "description", content: metaDesc },
        {
          name: "keywords",
          content:
            "ArtXHub, ArtX, ArtX Dev, Android APK download, Biniyog Briddhi app, বিনিয়োগ বৃদ্ধি অ্যাপ, Biniyog Briddhi APK, free android apps bangladesh",
        },
        { name: "author", content: "ArtX Dev" },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },

        // OpenGraph
        { property: "og:site_name", content: "ArtXHub by ArtX" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: metaDesc },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:alt", content: "ArtXHub — Apps for a brighter you" },

        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seoTitle },
        { name: "twitter:description", content: metaDesc },
        { name: "twitter:image", content: ogImageUrl },

        // Geotargeting / Regional SEO (GEO)
        { name: "geo.region", content: "BD-13" },
        { name: "geo.placename", content: "Dhaka, Bangladesh" },
        { name: "geo.position", content: "23.8103;90.4125" },
        { name: "ICBM", content: "23.8103, 90.4125" },

        // Generative Engine Optimization (GEO / AEO) Tags
        { name: "application-name", content: "ArtXHub" },
        { name: "apple-mobile-web-app-title", content: "ArtXHub" },
        { name: "theme-color", content: "#FAF9F6" },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }, artxHubFontLink],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(schemaGraph),
        },
      ],
    };
  },
  component: ArtXHubPage,
});

/* ============================================================ */
/* ARTXHUB MAIN COMPONENT                                       */
/* ============================================================ */
function ArtXHubPage() {
  const [emailInput, setEmailInput] = React.useState<string>("");
  const [subscribeStatus, setSubscribeStatus] = React.useState<
    "idle" | "sending" | "subscribed" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInput.trim();
    if (!email || !email.includes("@")) return;
    setSubscribeStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8gcn2ti",
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_a24fsgm",
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "U41bzHweKafo0DUNi",
          template_params: {
            name: "ArtXHub subscriber",
            email,
            phone: "Not provided",
            package: "ArtXHub app updates",
            message: `${email} subscribed to ArtXHub app updates.`,
            reply_to: email,
          },
        }),
      });
      setSubscribeStatus(res.ok ? "subscribed" : "error");
    } catch {
      setSubscribeStatus("error");
    }
  };

  const subscribed = subscribeStatus === "subscribed";

  return (
    <div className={artxHubPageClass}>
      <ArtXHubHeader />

      {/* ============================================================ */}
      {/* 2. HERO SECTION (Apps for a brighter you.)                   */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Minimal diagonal geometric accent line (from top-right) */}
        <div className="absolute right-12 top-6 w-32 h-[1px] bg-slate-300 transform -rotate-45 hidden lg:block pointer-events-none" />

        {/* Minimal diagonal geometric accent line (crossing center-left) */}
        <div className="absolute left-[38%] top-[55%] w-72 h-[1px] bg-slate-300/80 transform rotate-[32deg] hidden md:block pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typography & Action */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10">
              {/* Category tracker */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-5 h-[1.5px] bg-slate-400" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  DISCOVER
                </span>
              </div>

              {/* Headline (Editorial Serif) */}
              <h1 className="font-['Playfair_Display',serif] text-5xl sm:text-6xl lg:text-[70px] text-slate-900 leading-[1.08] tracking-[-0.02em]">
                Apps for a <br />
                <span className="italic font-normal">brighter you.</span>
              </h1>

              {/* Subtitle paragraph */}
              <p className="mt-6 text-slate-600 text-[15px] sm:text-base leading-relaxed max-w-md font-normal">
                ArtXHub is your go-to place for discovering beautiful, useful and creative apps.
                Explore, download and make your digital life better.
              </p>

              {/* Highlighted app */}
              <Link
                to="/artxhub/apps/$slug"
                params={{ slug: spotlightApp.id }}
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-4 shadow-xs hover:border-slate-300 transition-colors"
              >
                <img
                  src={spotlightApp.iconSrc}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-xs text-slate-700">
                  <span className="font-semibold text-slate-900">New:</span> {spotlightApp.name}
                  {spotlightApp.nameBn ? ` (${spotlightApp.nameBn})` : ""}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1B4266] shrink-0" />
              </Link>

              {/* Action Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/artxhub/apps"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#1B4266] px-6 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-[#13324E] transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Apps</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/artxhub/apps"
                  hash="categories"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-4 py-3.5 text-xs font-medium text-slate-700 hover:bg-white hover:border-slate-400 transition-all"
                >
                  <Layers className="w-3.5 h-3.5 text-slate-500" />
                  <span>Browse Categories</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Artwork Card (Golden reeds & clear blue sky) */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative">
              <div className="relative group max-w-[460px] w-full">
                {/* Image container */}
                <div className="relative aspect-[1.12/1] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-[0_12px_40px_-15px_rgba(27,66,102,0.15)] border border-slate-200/70">
                  <img
                    src="/artxhub/hero-reeds.png"
                    alt="ArtXHub serene reeds under clear blue sky — Apps for a brighter you"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Corner caption matching mockup */}
                  <div className="absolute top-6 right-6 text-right pointer-events-none select-none">
                    <div className="text-[12px] font-normal tracking-wide text-white/95 drop-shadow-sm">
                      Good Apps
                    </div>
                    <div className="text-[12px] font-normal tracking-wide text-white/95 drop-shadow-sm">
                      Good Vibes
                    </div>
                  </div>
                </div>

                {/* Minimal corner accent */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-slate-300/60 rounded-bl-xl pointer-events-none hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURED APPS SECTION                                     */}
      {/* ============================================================ */}
      <section id="featured-apps" className="pt-6 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Featured Apps
              </h2>
              <span className="w-8 h-[1.5px] bg-slate-400" />
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/artxhub/apps"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* App Cards Grid (4 columns on desktop, exactly like mockup) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredApps.map((app) => (
              <ArtXHubAppCard key={app.id} app={app} />
            ))}

            {featuredApps.length === 1 && (
              <div className="lg:col-span-3 flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/50 p-6 text-center">
                <div>
                  <div className="font-['Playfair_Display',serif] text-xl font-medium text-slate-800">
                    More apps coming soon.
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Every new ArtX Dev app will be published here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. APP SPOTLIGHT SECTION (Hero feature card for ArtX)        */}
      {/* ============================================================ */}
      <section id="app-spotlight" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="relative rounded-3xl bg-[#EAF2F8] border border-[#D7E6F3] p-8 sm:p-12 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Realistic Phone Mockup */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative w-[220px] sm:w-[240px] aspect-[9/19] rounded-[36px] bg-slate-900 p-2.5 shadow-[0_20px_50px_-15px_rgba(27,66,102,0.35)] ring-1 ring-slate-800">
                  {/* Phone screen */}
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-slate-950 flex flex-col justify-between">
                    {/* Top camera punchhole notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 ring-2 ring-slate-800/80 z-20" />

                    {/* App screen art */}
                    <div className="relative w-full h-full flex flex-col justify-between p-5 pt-8 text-center text-white">
                      {/* Background photo inside phone */}
                      <img
                        src="/artxhub/hero-reeds.png"
                        alt={`${spotlightApp.name} app`}
                        className="absolute inset-0 w-full h-full object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/60" />

                      {/* Top status */}
                      <div className="relative z-10 pt-2">
                        <div className="w-10 h-10 mx-auto rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-1.5 mb-2 shadow-sm">
                          <img
                            src={spotlightApp.iconSrc}
                            alt={`${spotlightApp.name} emblem`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="font-['Playfair_Display',serif] text-xl font-bold tracking-tight text-white drop-shadow">
                          {spotlightApp.nameBn ?? spotlightApp.name}
                        </div>
                        <div className="text-[10px] tracking-wider uppercase text-white/80 mt-0.5">
                          {spotlightApp.tagline}
                        </div>
                      </div>

                      {/* Bottom phone bar */}
                      <div className="relative z-10 pb-2">
                        <div className="w-24 h-1 bg-white/60 rounded-full mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center / Right Column: Spotlight Details & Features */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Center Column: App Spotlight text */}
                  <div className="md:col-span-7 flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-4 h-[1.5px] bg-slate-400" />
                      <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                        APP SPOTLIGHT
                      </span>
                    </div>

                    <h3 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
                      {spotlightApp.name}
                    </h3>
                    <div className="text-sm font-medium text-slate-600 mt-1">
                      {spotlightApp.tagline}
                    </div>

                    <p className="mt-4 text-[13px] sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {spotlightApp.fullDescription}
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                      <a
                        href={spotlightApp.downloadUrl}
                        className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#0F2438] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#081522] transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download APK ({spotlightApp.fileSize})</span>
                      </a>

                      <Link
                        to="/artxhub/apps/$slug"
                        params={{ slug: spotlightApp.id }}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300/80 bg-white/80 px-4 py-3 text-xs font-semibold text-slate-800 hover:bg-white transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#1B4266]" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Features Column */}
                  <div className="md:col-span-5 flex flex-col gap-6 pt-2">
                    {spotlightApp.features.map((feature, index) => {
                      const Icon = featureIcons[index % featureIcons.length];
                      return (
                        <div key={feature.title} className="flex items-start gap-3.5">
                          <div className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs text-slate-700">
                            <Icon className="w-4 h-4 text-[#1B4266]" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900">
                              {feature.title}
                            </div>
                            <div className="text-[11px] text-slate-600 mt-0.5 font-normal">
                              {feature.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. STAY UPDATED / NEWSLETTER SECTION                         */}
      {/* ============================================================ */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="relative rounded-2xl bg-[#EAF2F8] border border-[#D7E6F3] p-6 sm:p-10 overflow-hidden shadow-sm">
            {/* Minimal diagonal line in right corner */}
            <div className="absolute right-10 bottom-6 w-24 h-[1px] bg-slate-300 transform -rotate-45 hidden md:block pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Preview Graphic */}
              <div className="lg:col-span-3 flex justify-center lg:justify-start">
                <div className="relative w-36 h-28 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                  <img
                    src="/artxhub/hero-reeds.png"
                    alt="ArtXHub releases preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-[10px] text-white font-medium">
                    ArtX Studio Releases
                  </div>
                </div>
              </div>

              {/* Middle Column: Form & Heading */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                    STAY UPDATED —
                  </span>
                </div>

                <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                  New apps, fresh ideas.
                </h3>

                <p className="mt-1.5 text-xs text-slate-600 font-normal">
                  Be the first to know about the latest app releases, updates and exclusive picks
                  from ArtXHub.
                </p>

                {/* Form */}
                <form
                  onSubmit={handleSubscribe}
                  className="mt-5 w-full flex flex-col sm:flex-row gap-2"
                >
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address"
                    aria-label="Email address for ArtXHub updates"
                    className="flex-1 rounded-lg bg-white px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-[#1B4266] shadow-xs"
                    disabled={subscribed || subscribeStatus === "sending"}
                  />
                  <button
                    type="submit"
                    disabled={subscribed || subscribeStatus === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B4266] px-5 py-2.5 text-xs font-medium text-white hover:bg-[#13324E] transition-all disabled:opacity-75 shadow-xs shrink-0"
                  >
                    <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                    {!subscribed && <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </form>

                {subscribed && (
                  <p className="text-[11px] text-emerald-700 font-medium mt-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Thank you! You're subscribed to ArtX app notifications.
                  </p>
                )}

                {subscribeStatus === "error" && (
                  <p className="text-[11px] text-red-700 font-medium mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>

              {/* Right Column: Slogan & Accent */}
              <div className="lg:col-span-3 text-right hidden lg:block">
                <div className="text-xs text-slate-500 font-normal leading-relaxed">
                  <div>More apps.</div>
                  <div>More possibilities.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. GEO & AEO KNOWLEDGE BASE / FAQ (SEO & AI Engines)         */}
      {/* ============================================================ */}
      <section className="py-12 border-t border-slate-200/60 bg-white/60">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-8">
            <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold text-slate-900">
              Direct APK Downloads
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl mx-auto">
              Every app on ArtXHub is published as a direct Android APK download.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Official Releases</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Download links point to the official release of each app, published by its
                developers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Always the Latest Version</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Download links open the newest published release, so you get the latest version of
                the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArtXHubFooter />
    </div>
  );
}
