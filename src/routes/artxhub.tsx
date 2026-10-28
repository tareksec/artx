import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import {
  Search,
  Sparkles,
  Zap,
  Image as ImageIcon,
  Download,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Check,
  Copy,
  Smartphone,
  Layers,
  Palette,
  CheckCircle2,
  X,
  ChevronRight,
  Info,
  Menu,
  Heart,
  Share2,
} from "lucide-react";
import { artxHubApps, type ArtXApp } from "@/content/artxhub-apps";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/artxhub")({
  head: () => {
    const seoTitle = "ArtXHub — Discover, Download & Experience Curated Android Apps, Launchers & Themes";
    const metaDesc =
      "ArtXHub is the official creator showcase and download hub for Android APKs, minimalist launchers, and aesthetic themes by ArtX. Download ArtX Image Editor, CloudNote, Vidora, GreenLife, and CyberHome Launcher via high-speed Cloudflare CDN mirrors or direct APK.";
    const canonicalUrl = "https://artxdev.tech/artxhub";
    const ogImageUrl = "https://artxdev.tech/artxhub/artxhub-full-reference.jpg";

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
            name: "Android Mobile Applications, Custom Launchers, and Themes",
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: ogImageUrl,
          },
        },
        {
          "@type": "CollectionPage",
          "@id": `${canonicalUrl}#collection`,
          name: "ArtXHub Android App & Launcher Showcase",
          description:
            "A curated collection of mobile applications, custom Android launchers, icon packs, and themes built for creators.",
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
        // SoftwareApplication schema for ArtX
        {
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}#artx-editor`,
          name: "ArtX — Creative Image Editor",
          operatingSystem: "Android 8.0+",
          applicationCategory: "MultimediaApplication",
          softwareVersion: "2.5.0",
          fileSize: "28.4MB",
          description:
            "Powerful creative image editing application featuring AI-powered tools, neural enhancement, 4K export, and an ad-free clean interface.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1420",
          },
          author: {
            "@type": "Organization",
            name: "ArtX Dev",
            url: "https://artxdev.tech",
          },
          downloadUrl: `${canonicalUrl}#download-artx`,
        },
        // SoftwareApplication schema for CloudNote
        {
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}#cloudnote`,
          name: "CloudNote",
          operatingSystem: "Android 9.0+",
          applicationCategory: "ProductivityApplication",
          softwareVersion: "1.8.2",
          fileSize: "14.2MB",
          description:
            "Fast, beautiful, minimalist note-taking app with markdown checklists, biometric encryption, and offline-first sync.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          author: {
            "@type": "Organization",
            name: "ArtX Dev",
            url: "https://artxdev.tech",
          },
        },
        // SoftwareApplication schema for CyberHome Launcher
        {
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}#cyberhome-launcher`,
          name: "CyberHome Launcher",
          operatingSystem: "Android 10.0+ (Full QuickSwitch on Android 12-15)",
          applicationCategory: "UtilityApplication",
          softwareVersion: "15.0 Beta",
          fileSize: "36.2MB",
          description:
            "Custom Android 15 Launcher3 home screen with Material You dynamic color engine, fluid gestures, and custom Cyber overlays.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          author: {
            "@type": "Organization",
            name: "ArtX Dev",
            url: "https://artxdev.tech",
          },
        },
        // FAQPage schema for Answer Engine Optimization (AEO / GEO)
        {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          mainEntity: [
            {
              "@type": "Question",
              name: "What is ArtXHub?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ArtXHub is the official software portal and APK repository by ArtX Dev. It provides curated Android applications, custom home launchers (such as CyberHome Launcher and ArtX Minimal Launcher), and handcrafted aesthetic themes built for power users and creators.",
              },
            },
            {
              "@type": "Question",
              name: "How do I download Android APKs from ArtXHub?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can download APKs directly from ArtXHub using high-speed Cloudflare CDN mirrors or official Google Play Store links. Each app card has an interactive download modal providing the package name, file size, SHA256 integrity hash, and instant download mirrors.",
              },
            },
            {
              "@type": "Question",
              name: "Are the APKs on ArtXHub safe and verified?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. All applications and launchers published on ArtXHub are digitally signed by ArtX, completely ad-free, verified against malware, and built using modern Android SDKs and open-source foundations like Android 15 Launcher3.",
              },
            },
            {
              "@type": "Question",
              name: "Can I install ArtX launchers and themes on any Android device?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ArtX launchers and theme packages support devices running Android 8.0 (Oreo) through Android 15, including Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, Motorola, and Nothing phones.",
              },
            },
          ],
        },
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
            "ArtXHub, ArtX, ArtX Dev, ArtX Image Editor APK, Android APK download, custom Android launcher, Android themes, CloudNote APK, Vidora video player, GreenLife habit tracker, CyberHome launcher, Lawnchair 15, Cloudflare CDN APK mirror, free android apps bangladesh, aesthetic android setups",
        },
        { name: "author", content: "ArtX Dev" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

        // OpenGraph
        { property: "og:site_name", content: "ArtXHub by ArtX" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: metaDesc },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "ArtXHub — Apps for a brighter you" },

        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@artxstudio" },
        { name: "twitter:creator", content: "@artxstudio" },
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
      links: [
        { rel: "canonical", href: canonicalUrl },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
        },
      ],
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
/* HELPER SVG ICONS (Google Play & Socials)                     */
/* ============================================================ */
function GooglePlayIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path
        d="M60.6 22.8C54.4 29.5 50.8 39.5 50.8 52v408c0 12.5 3.6 22.5 9.8 29.2l1.6 1.6L288 265.1V246.9L62.2 21.2l-1.6 1.6z"
        fill="#00E5FF"
      />
      <path
        d="M365.4 342.5l-77.4-77.4V246.9l77.4-77.4 1.8 1 91.5 52c26.1 14.8 26.1 39 0 53.8l-91.5 52-1.8 1z"
        fill="#FFD600"
      />
      <path
        d="M288 265.1L60.6 492.5c8.6 9.1 22.8 10.2 38.6 1.3l266.2-151.3-77.4-77.4z"
        fill="#FF3A44"
      />
      <path
        d="M288 246.9L365.4 169.5 99.2 18.2c-15.8-8.9-30-7.8-38.6 1.3L288 246.9z"
        fill="#00E676"
      />
    </svg>
  );
}

function TwitterXIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.535-.194 1.006.131.832.942z" />
    </svg>
  );
}

/* ============================================================ */
/* ARTXHUB MAIN COMPONENT                                       */
/* ============================================================ */
function ArtXHubPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("featured");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  const [activeModalApp, setActiveModalApp] = React.useState<ArtXApp | null>(null);
  const [emailInput, setEmailInput] = React.useState<string>("");
  const [subscribed, setSubscribed] = React.useState<boolean>(false);
  const [copiedLink, setCopiedLink] = React.useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  // Filter apps based on category and search query
  const filteredApps = React.useMemo(() => {
    return artxHubApps.filter((app) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (selectedCategory === "all") return matchesSearch;
      if (selectedCategory === "featured") return app.categoryGroup === "featured" && matchesSearch;
      if (selectedCategory === "launcher") return app.categoryGroup === "launcher" && matchesSearch;
      if (selectedCategory === "theme") return app.categoryGroup === "theme" && matchesSearch;
      return matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Spotlight app (ArtX)
  const spotlightApp = React.useMemo(() => {
    return artxHubApps.find((app) => app.isSpotlight) || artxHubApps[0];
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes("@")) return;
    setSubscribed(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1E293B] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1B4266] selection:text-white">
      {/* ============================================================ */}
      {/* 1. ARTXHUB BESPOKE HEADER NAVBAR                             */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-slate-200/50 transition-all">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
          {/* Left Brand Logo */}
          <Link
            to="/artxhub"
            className="group flex items-center gap-1.5 focus:outline-none"
            aria-label="ArtXHub Home"
          >
            <span className="font-['Playfair_Display',serif] text-2xl sm:text-[26px] font-semibold tracking-tight text-slate-900 group-hover:text-[#1B4266] transition-colors">
              ArtXHub
            </span>
          </Link>

          {/* Center Navigation Links (matching design) */}
          <nav
            aria-label="ArtXHub Primary"
            className="hidden md:flex items-center gap-8 text-[14px] font-medium text-slate-600"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative text-slate-900 font-semibold py-1 focus:outline-none transition-colors"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 rounded-full" />
            </button>
            <button
              onClick={() => scrollToSection("featured-apps")}
              className="py-1 hover:text-slate-900 focus:outline-none transition-colors"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="py-1 hover:text-slate-900 focus:outline-none transition-colors"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection("app-spotlight")}
              className="py-1 hover:text-slate-900 focus:outline-none transition-colors"
            >
              About
            </button>
          </nav>

          {/* Right Section: Search & Slogan */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search apps and themes"
              className="p-2 text-slate-700 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            <div className="hidden sm:block text-right text-[11px] leading-[1.25] text-slate-500 font-normal">
              <div>Great apps.</div>
              <div>Better everyday.</div>
            </div>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Collapsible Search Input Bar */}
        {searchOpen && (
          <div className="border-t border-slate-200/60 bg-white/95 px-6 py-3 transition-all animate-in fade-in slide-in-from-top-2">
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ArtX APKs, launchers, themes, and editors..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none py-1.5"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-[#FBFBFA] px-6 py-4 flex flex-col gap-3 text-sm font-medium">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left py-2 text-slate-900 font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("featured-apps")}
              className="text-left py-2 text-slate-600 hover:text-slate-900"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="text-left py-2 text-slate-600 hover:text-slate-900"
            >
              Categories (Launchers & Themes)
            </button>
            <button
              onClick={() => scrollToSection("app-spotlight")}
              className="text-left py-2 text-slate-600 hover:text-slate-900"
            >
              About ArtX
            </button>
            <Link
              to="/"
              className="text-left py-2 text-[#1B4266] text-xs font-semibold flex items-center gap-1 pt-2 border-t border-slate-200"
            >
              ← Back to ArtX Studio
            </Link>
          </div>
        )}
      </header>

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

              {/* Action Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("featured-apps")}
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#1B4266] px-6 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-[#13324E] transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Apps</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("categories")}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-4 py-3.5 text-xs font-medium text-slate-700 hover:bg-white hover:border-slate-400 transition-all"
                >
                  <Layers className="w-3.5 h-3.5 text-slate-500" />
                  <span>Launchers & Themes</span>
                </button>
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
              <button
                type="button"
                onClick={() => setSelectedCategory(selectedCategory === "all" ? "featured" : "all")}
                className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
              >
                <span>{selectedCategory === "all" ? "Show Featured" : "View All"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div id="categories" className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {[
              { id: "featured", label: "Featured (Mockup)", icon: Sparkles },
              { id: "all", label: "All Releases", icon: Layers },
              { id: "launcher", label: "Android Launchers", icon: Smartphone },
              { id: "theme", label: "Aesthetic Themes", icon: Palette },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* App Cards Grid (4 columns on desktop, exactly like mockup) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <article
                key={app.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 border border-slate-200/70 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-8px_rgba(27,66,102,0.1)] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* App Icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-1 bg-slate-50 border border-slate-100">
                      <img
                        src={app.iconSrc}
                        alt={`${app.name} Icon`}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                    {app.isSpotlight && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-0.5 rounded-full">
                        Spotlight
                      </span>
                    )}
                  </div>

                  {/* App Name & Category */}
                  <h3 className="font-['Playfair_Display',serif] text-lg font-semibold text-slate-900 tracking-tight">
                    {app.name}
                  </h3>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                    {app.tagline}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-[12px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {app.description}
                  </p>
                </div>

                {/* Bottom Action: Get it on Google Play / Download Mirror */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalApp(app)}
                    className="w-full inline-flex items-center justify-between rounded-lg bg-[#FAF9F6] border border-slate-200/80 px-3.5 py-2.5 text-[11px] font-medium text-slate-800 hover:bg-slate-100 hover:border-slate-300 transition-colors group/btn"
                  >
                    <div className="flex items-center gap-2">
                      <GooglePlayIcon className="w-3.5 h-3.5" />
                      <div className="text-left">
                        <div className="text-[9px] text-slate-500 uppercase leading-none font-normal">
                          Get it on
                        </div>
                        <div className="font-semibold text-slate-900 leading-tight">
                          Google Play
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-0.5 group-hover/btn:text-slate-700 transition-all" />
                  </button>

                  {/* Quick direct download action button */}
                  <button
                    type="button"
                    onClick={() => setActiveModalApp(app)}
                    className="w-full text-center text-[10px] font-medium text-slate-500 hover:text-[#1B4266] transition-colors py-0.5"
                  >
                    Direct APK & Cloudflare Mirror →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">No applications found matching your query.</p>
              <button
                onClick={() => {
                  setSelectedCategory("featured");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs text-[#1B4266] font-semibold underline underline-offset-4"
              >
                Reset filters
              </button>
            </div>
          )}
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
                        alt="ArtX Mobile App Interface"
                        className="absolute inset-0 w-full h-full object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/60" />

                      {/* Top status */}
                      <div className="relative z-10 pt-2">
                        <div className="w-10 h-10 mx-auto rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-1.5 mb-2 shadow-sm">
                          <img
                            src="/artxhub/icon-artx.png"
                            alt="ArtX emblem"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="font-['Playfair_Display',serif] text-xl font-bold tracking-tight text-white drop-shadow">
                          ArtX
                        </div>
                        <div className="text-[10px] tracking-wider uppercase text-white/80 mt-0.5">
                          Create. Edit. Inspire.
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
                      Turn your imagination into reality with ArtX. Powerful editing tools, AI effects,
                      and a clean interface — designed for creators like you.
                    </p>

                    {/* Google Play Button */}
                    <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setActiveModalApp(spotlightApp)}
                        className="inline-flex items-center justify-between sm:justify-start gap-3 rounded-lg bg-[#0F2438] px-5 py-3 text-white shadow-sm hover:bg-[#081522] transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <GooglePlayIcon className="w-5 h-5" />
                        <div className="text-left">
                          <div className="text-[9px] text-white/70 uppercase leading-none font-normal">
                            Download on
                          </div>
                          <div className="text-xs font-semibold leading-tight">
                            Google Play
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/70 ml-2" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveModalApp(spotlightApp)}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300/80 bg-white/80 px-4 py-3 text-xs font-semibold text-slate-800 hover:bg-white transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 text-[#1B4266]" />
                        <span>Direct APK & Mirrors</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Features Column (AI-Powered, High-Quality, Fast) */}
                  <div className="md:col-span-5 flex flex-col gap-6 pt-2">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs text-slate-700">
                        <Sparkles className="w-4 h-4 text-[#1B4266]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900">
                          AI-Powered Tools
                        </div>
                        <div className="text-[11px] text-slate-600 mt-0.5 font-normal">
                          Generate, edit and enhance with AI.
                        </div>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs text-slate-700">
                        <ImageIcon className="w-4 h-4 text-[#1B4266]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900">
                          High-Quality Export
                        </div>
                        <div className="text-[11px] text-slate-600 mt-0.5 font-normal">
                          Get crisp, high-resolution images.
                        </div>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs text-slate-700">
                        <Zap className="w-4 h-4 text-[#1B4266]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900">
                          Fast & Lightweight
                        </div>
                        <div className="text-[11px] text-slate-600 mt-0.5 font-normal">
                          Smooth performance, less storage use.
                        </div>
                      </div>
                    </div>
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
                <form onSubmit={handleSubscribe} className="mt-5 w-full flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address"
                    aria-label="Email address for ArtXHub updates"
                    className="flex-1 rounded-lg bg-white px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-[#1B4266] shadow-xs"
                    disabled={subscribed}
                  />
                  <button
                    type="submit"
                    disabled={subscribed}
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
              ArtXHub Direct APK & Cloudflare Distribution
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl mx-auto">
              Fast, virus-free, high-bandwidth APK downloads powered by Cloudflare CDN edge nodes
              and official signed releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Virus-Free & Digitally Signed</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Every APK is built in automated reproducible pipelines, signed with ArtX Dev release
                keys, and scanned against Google Play Protect and VirusTotal standards.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Cloudflare CDN Edge Acceleration</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Download links utilize Cloudflare R2 / Workers CDN routing worldwide, ensuring
                maximum download speeds with resume support and zero throttled speeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FOOTER                                                    */}
      {/* ============================================================ */}
      <footer className="border-t border-slate-200 bg-[#FBFBFA] py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Brand & Tagline */}
          <div className="flex items-center gap-3">
            <span className="font-['Playfair_Display',serif] text-base font-semibold text-slate-900">
              ArtXHub
            </span>
            <span className="text-slate-400">—</span>
            <span className="text-xs text-slate-500 font-medium">
              Discover · Download · Enjoy
            </span>
          </div>

          {/* Center: Back to ArtX Studio Link */}
          <div className="text-xs text-slate-500">
            A creation by{" "}
            <Link to="/" className="text-slate-800 hover:text-[#1B4266] font-semibold underline underline-offset-4">
              ArtX Dev
            </Link>{" "}
            © {new Date().getFullYear()}
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4 text-slate-600">
            <a
              href="https://twitter.com/artxstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="p-1.5 hover:text-slate-900 transition-colors"
            >
              <TwitterXIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/artxdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1.5 hover:text-slate-900 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@artxdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-1.5 hover:text-slate-900 transition-colors"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/artxdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-1.5 hover:text-slate-900 transition-colors"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* 8. INTERACTIVE DOWNLOAD & CLOUDFLARE MIRROR MODAL            */}
      {/* ============================================================ */}
      <Dialog open={!!activeModalApp} onOpenChange={(open) => !open && setActiveModalApp(null)}>
        {activeModalApp && (
          <DialogContent className="sm:max-w-lg bg-white border border-slate-200 text-slate-900 p-6 rounded-2xl">
            <DialogHeader className="text-left">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-1 shrink-0">
                  <img
                    src={activeModalApp.iconSrc}
                    alt={activeModalApp.name}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <DialogTitle className="font-['Playfair_Display',serif] text-2xl font-bold text-slate-900">
                    {activeModalApp.name}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-slate-500 font-medium mt-0.5">
                    {activeModalApp.category} · {activeModalApp.version}
                  </DialogDescription>
                  <div className="flex items-center gap-2 mt-1.5 text-[11px] text-emerald-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Clean · No Adware · Safe APK</span>
                  </div>
                </div>
              </div>
            </DialogHeader>

            <div className="mt-4 flex flex-col gap-4">
              {/* Specs Badge Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[10px]">File Size</span>
                  <span className="font-semibold text-slate-800">{activeModalApp.fileSize}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Compatibility</span>
                  <span className="font-semibold text-slate-800">{activeModalApp.minAndroid}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Architecture</span>
                  <span className="font-semibold text-slate-800">{activeModalApp.architecture}</span>
                </div>
              </div>

              {/* Cloudflare Mirror Notice & Download */}
              <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-950">
                    <Zap className="w-3.5 h-3.5 text-sky-600" />
                    <span>Cloudflare High-Speed CDN Mirror</span>
                  </div>
                  <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-medium">
                    Fast CDN
                  </span>
                </div>
                <p className="text-[11px] text-sky-800 leading-relaxed mb-3">
                  Direct download accelerated by Cloudflare edge caching.
                </p>

                <div className="flex items-center gap-2">
                  <a
                    href={activeModalApp.cloudflareDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B4266] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#13324E] transition-colors shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download APK (Cloudflare)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(activeModalApp.cloudflareDownloadUrl, activeModalApp.id)}
                    className="p-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    title="Copy Download Link"
                    aria-label="Copy Cloudflare Download Link"
                  >
                    {copiedLink === activeModalApp.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Google Play Store button if available */}
              {activeModalApp.googlePlayUrl && (
                <a
                  href={activeModalApp.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <GooglePlayIcon className="w-4 h-4" />
                    <span>Get on Google Play Store</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}

              {/* Android APK Installation Quick Tips */}
              <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                <div className="font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Info className="w-3 h-3 text-slate-400" />
                  <span>How to install APK:</span>
                </div>
                <ol className="list-decimal list-inside space-y-0.5 text-slate-500">
                  <li>Download the .apk file to your Android phone</li>
                  <li>Tap the downloaded file in your notification bar or Downloads</li>
                  <li>When prompted, allow "Install Unknown Apps" for your browser</li>
                  <li>Tap "Install" and enjoy!</li>
                </ol>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
