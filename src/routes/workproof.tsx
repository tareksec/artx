import { useState, useMemo, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Files,
  FolderItem,
  FolderTrigger,
  FolderContent,
  SubFiles,
  FileItem,
} from "@/components/ui/files";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  FolderTree,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Globe,
  ShoppingCart,
  ShoppingBag,
  LayoutDashboard,
  Search,
  Cpu,
  Star,
  Truck,
  CreditCard,
  Gauge,
  ArrowUpRight,
  BookOpen,
  Eye,
  SlidersHorizontal,
  Lock,
} from "lucide-react";
import { WorkShowcaseSection } from "@/components/sections/WorkShowcaseSection";
import { AutoMediaPreview } from "@/components/ui/AutoMediaPreview";

// Asset imports
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import imgSamriddhi from "@/assets/Samriddhi.png";
import imgMohaimin from "@/assets/Mohaimin Patwary.png";
import imgTechvrs from "@/assets/Techvrs-security.png";
import imgOkkhor from "@/assets/Okkhor Pathagar.png";

export const Route = createFileRoute("/workproof")({
  head: () => ({
    meta: [
      { title: "Workproof & Project Directory | ArtX Studio" },
      {
        name: "description",
        content:
          "Explore ArtX's verifiable proof of work: real production e-commerce websites (Next.js, WordPress, dashboards), SaaS platforms, and custom codebases.",
      },
      { property: "og:title", content: "Workproof & Project Directory | ArtX Studio" },
      {
        property: "og:description",
        content:
          "Explore ArtX's verifiable proof of work: real production e-commerce websites (Next.js, WordPress, dashboards), SaaS platforms, and custom codebases.",
      },
      { property: "og:url", content: "https://artxdev.tech/workproof" },
    ],
    links: [{ rel: "canonical", href: "https://artxdev.tech/workproof" }],
  }),
  component: WorkproofPage,
});

// Detailed natural interface for worked projects without developer file extensions
export interface WorkedProject {
  id: string;
  name: string;
  nameBn: string;
  category: "ecommerce" | "saas" | "agency";
  categoryLabel: string;
  categoryLabelBn: string;
  subCategoryLabel: string;
  subCategoryLabelBn: string;
  folderPath: string;
  folderPathBn: string;
  image: string;
  images?: string[];
  video?: string;
  isPrivate?: boolean;
  liveUrl?: string;
  caseStudyUrl?: string;
  status: "Live in Production" | "Client Delivered" | "Open Demo";
  statusBn: "লাইভ প্রোডাকশন" | "ক্লায়েন্ট ডেলিভার্ড" | "ওপেন ডেমো";
  description: string;
  descriptionBn: string;
  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  metrics: {
    speed: string;
    lighthouse: number;
    completionYear: string;
    clientCountry: string;
  };
}

// Master archive of worked projects categorized naturally into clean folders
const WORKED_PROJECTS: Record<string, WorkedProject> = {
  // ─── VERIFIED LIVE PRODUCTION CLIENT WORKS (PLACED AT TOP) ──────────────────
  "biniyog-sme": {
    id: "biniyog-sme",
    name: "Biniyog Briddhi — SME Investment Portal",
    nameBn: "বিনিয়োগ বৃদ্ধি — ভেরিফায়েড SME ইনভেস্টমেন্ট",
    category: "saas",
    categoryLabel: "Fintech & SME Platforms",
    categoryLabelBn: "ফিনটেক ও ইনভেস্টমেন্ট প্ল্যাটফর্ম",
    subCategoryLabel: "SME Investment & Dividend Portal",
    subCategoryLabelBn: "SME বিনিয়োগ ও ডিভিডেন্ড পোর্টাল",
    folderPath: "Verified Live Projects › Fintech & SME › Biniyog Briddhi",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › ফিনটেক ও SME › বিনিয়োগ বৃদ্ধি",
    image: "/desgins/binoyg/binioyg.png",
    images: [
      "/desgins/binoyg/binioyg.png",
      "/desgins/binoyg/biniyog.png",
      "/desgins/binoyg/biniyog (2).png",
      "/desgins/binoyg/biniyog.png1.png",
    ],
    video: "/desgins/binoyg/biniyog-video.mp4",
    liveUrl: "https://biniyogbriddhi.com/",
    caseStudyUrl: "/work/biniyogbriddhi",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "A complete verified SME investment and capital allocation platform in Bangladesh. Features real-time investment tracking, investor KYC verification, automated dividend ledgers, and venture performance metrics.",
    descriptionBn:
      "যাচাইকৃত SME ব্যবসার জন্য আধুনিক নিরাপদ বিনিয়োগ প্ল্যাটফর্ম। নিরাপদ পেমেন্ট, স্বয়ংক্রিয় ডিভিডেন্ড ডিস্ট্রিবিউশন এবং ইনভেস্টর পোর্টফোলিও ট্র্যাকিং সহ।",
    challenge: "Traditional SME funding lacked transparency, verifiable audit trails, and automated return tracking for retail investors.",
    solution: "Architected a secure digital portfolio portal with automated transaction reconciliations and real-time business health monitoring.",
    techStack: ["Next.js", "React 19", "Tailwind CSS", "Node.js", "PostgreSQL", "bKash API"],
    features: [
      "Automated investor identity KYC verification workflow",
      "Real-time venture performance telemetry & financial ledger",
      "Direct dividend distribution gateway with SMS notifications",
      "Bank-grade audit log compliance and encrypted investor vaults",
    ],
    metrics: {
      speed: "1.1s LCP",
      lighthouse: 99,
      completionYear: "2026",
      clientCountry: "Dhaka, Bangladesh",
    },
  },

  "bec-portal": {
    id: "bec-portal",
    name: "The BEC — Professional Academy & Training",
    nameBn: "দ্য বিইসি — স্কিলস ও একাডেমি পোর্টাল",
    category: "agency",
    categoryLabel: "EdTech & Academy Platforms",
    categoryLabelBn: "এডটেক ও একাডেমি প্ল্যাটফর্ম",
    subCategoryLabel: "Interactive Training & Admissions",
    subCategoryLabelBn: "ট্রেইনিং ও স্টুডেন্ট এডমিশন",
    folderPath: "Verified Live Projects › EdTech & Academy › The BEC",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › এডটেক ও একাডেমি › দ্য বিইসি",
    image: "/desgins/bec/bec-preview.mp4",
    video: "/desgins/bec/bec-preview.mp4",
    liveUrl: "https://www.thebec.site/",
    caseStudyUrl: "/work/thebec",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "High-conversion educational platform for professional skills training, certification programs, dynamic admissions, student dashboard, and course video outlines.",
    descriptionBn:
      "প্রফেশনাল স্কিলস ট্রেইনিং ও এডুকেশন একাডেমি প্ল্যাটফর্ম। অনলাইন কোর্স তালিকা, স্টুডেন্ট এডমিশন এবং রিসোর্স হাব সহ।",
    challenge: "Needed an intuitive, fast-loading digital academy experience that builds trust and boosts course enrollment rates.",
    solution: "Designed a clean, modern learning ecosystem with video previews, interactive syllabi, and friction-free enrollment forms.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Edge", "Framer Motion"],
    features: [
      "Instant video preview and automated lesson outline player",
      "Interactive admission form with instant confirmation",
      "Sub-second page navigation across course catalogs",
      "Mobile-first responsive UX optimized for young professionals",
    ],
    metrics: {
      speed: "1.0s LCP",
      lighthouse: 98,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  "artstroy-studio": {
    id: "artstroy-studio",
    name: "ArtX Dev & ArtStory — Design & Engineering",
    nameBn: "আর্টএক্স দেব ও আর্টস্টোরি — ডিজিটাল স্টুডিও",
    category: "agency",
    categoryLabel: "Digital Agency & Studios",
    categoryLabelBn: "ডিজিটাল এজেন্সি ও স্টুডিও",
    subCategoryLabel: "High-Performance Agency Flagship",
    subCategoryLabelBn: "হাই-পারফর্ম্যান্স এজেন্সি ফ্ল্যাগশিপ",
    folderPath: "Verified Live Projects › Agency & Studios › ArtX Dev",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › এজেন্সি ও স্টুডিও › আর্টএক্স দেব",
    image: "/desgins/artstroy/Screenshot_68.png",
    images: [
      "/desgins/artstroy/Screenshot_68.png",
      "/desgins/artstroy/Screenshot_69.png",
      "/desgins/artstroy/Screenshot_71.png",
    ],
    liveUrl: "https://www.artxdev.tech/",
    caseStudyUrl: "/work/artstroy",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Official studio web presence delivering editorial typography, fluid animations, bilingual localization, and verified portfolio proof.",
    descriptionBn:
      "ফাউন্ডার ও এন্টারপ্রাইজের জন্য তৈরি হাই-কনভার্সন ক্রিয়েটিভ ডিজাইন ও ডেভেলপমেন্ট স্টুডিও ফ্ল্যাগশিপ পোর্টাল।",
    challenge: "Standing out with world-class motion design while sustaining 95+ Core Web Vitals on mobile.",
    solution: "Engineered ultra-lean animations with SSR-safe hydration and zero render-blocking dependencies.",
    techStack: ["React 19", "TanStack Router", "Tailwind CSS v4", "Cloudflare Workers", "Framer Motion"],
    features: [
      "Fluid bilingual switching (Bengali / English) with full SEO indexing",
      "Sub-1.2s mobile loading with Edge SSR",
      "Interactive project explorer and proof-of-work catalog",
      "Conversion-focused call booking & client lead funnel",
    ],
    metrics: {
      speed: "1.2s LCP",
      lighthouse: 99,
      completionYear: "2026",
      clientCountry: "Bangladesh / UAE",
    },
  },

  "ims-platform": {
    id: "ims-platform",
    name: "Techvrs IMS — Multi-Warehouse Inventory ERP",
    nameBn: "টেকভার্স IMS — এন্টারপ্রাইজ ইনভেন্টরি ERP",
    category: "saas",
    categoryLabel: "SaaS & Web Applications",
    categoryLabelBn: "SaaS ও ওয়েব অ্যাপ",
    subCategoryLabel: "Enterprise ERP & Inventory",
    subCategoryLabelBn: "ইনভেন্টরি ও সাপ্লাই চেইন ERP",
    folderPath: "Verified Live Projects › Enterprise ERP › Techvrs IMS",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › এন্টারপ্রাইজ ERP › টেকভার্স IMS",
    image: "/desgins/ims/ims.png",
    images: [
      "/desgins/ims/ims.png",
      "/desgins/ims/ims1.png",
      "/desgins/ims/Screenshot_82.png",
      "/desgins/ims/Screenshot_83.png",
      "/desgins/ims/Screenshot_84.png",
      "/desgins/ims/Screenshot_85.png",
      "/desgins/ims/Screenshot_86.png",
    ],
    liveUrl: "https://ims.techvrs.com/",
    caseStudyUrl: "/work/techvrs-ims",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Enterprise-grade cloud ERP platform managing multi-location warehouses, SKU tracking, automated re-order thresholds, vendor purchase orders, and barcode dispatch.",
    descriptionBn:
      "মাল্টি-ওয়্যারহাউস স্টক ট্র্যাকিং, অটোমেটেড সাপ্লাই চেইন ও পারচেজ রিকুইজিশন ম্যানেজমেন্ট সিস্টেম।",
    challenge: "Inventory discrepancies across multiple distribution centers caused delayed shipments and stockouts.",
    solution: "Implemented atomic stock transactions with real-time WebSocket synchronization across branch terminals.",
    techStack: ["React 19", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    features: [
      "Real-time multi-branch inventory tracking & ledger sync",
      "Automated low-stock threshold alerts and PO generators",
      "Fast barcode & QR code scanning for dispatch teams",
      "Comprehensive role-based access control (RBAC)",
    ],
    metrics: {
      speed: "0.8s TTI",
      lighthouse: 98,
      completionYear: "2026",
      clientCountry: "Bangladesh & GCC",
    },
  },

  "okkhor-library": {
    id: "okkhor-library",
    name: "Okkhor Pathagar — Digital Public Archive",
    nameBn: "অক্ষর পাঠাগার — ডিজিটাল পাবলিক লাইব্রেরি",
    category: "agency",
    categoryLabel: "Public & Cultural Portals",
    categoryLabelBn: "কালচারাল ও পাবলিক পোর্টাল",
    subCategoryLabel: "Digital Libraries & Catalogs",
    subCategoryLabelBn: "ডিজিটাল লাইব্রেরি ও আর্কাইভ",
    folderPath: "Verified Live Projects › Public Archives › Okkhor Pathagar",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › পাবলিক আর্কাইভ › অক্ষর পাঠাগার",
    image: "/desgins/library/library.png",
    images: [
      "/desgins/library/library.png",
      "/desgins/library/library3.png",
      "/desgins/library/livrary.png",
      "/desgins/library/Screenshot_62.png",
      "/desgins/library/Screenshot_67.png",
    ],
    liveUrl: "https://okkhorpathagar.com/",
    caseStudyUrl: "/work/okkhor-pathagar",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "A community open library and digital book archive with real-time ISBN lookup, reader membership registration, study desk bookings, and donation handling.",
    descriptionBn:
      "কমিউনিটি লাইব্রেরির জন্য অনলাইন বই সার্চ, ডিজিটাল মেম্বারশিপ ও অনলাইন ডোনেশন গেটওয়ে।",
    challenge: "Manually keeping track of 10,000+ volumes, loaned books, and membership cards.",
    solution: "Built an intuitive digital archive with automated book loan reminders and virtual QR reader cards.",
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "bKash Gateway"],
    features: [
      "Search 10,000+ publications by author, genre, or ISBN",
      "Virtual QR-enabled member ID cards",
      "1-click bKash book donation integration",
      "Full Bengali typographic rendering",
    ],
    metrics: {
      speed: "1.1s LCP",
      lighthouse: 100,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  "tasneem-textile": {
    id: "tasneem-textile",
    name: "Tasneem Knit Industry — RMG Export Portal",
    nameBn: "তাসনিম নিট ইন্ডাস্ট্রি — গার্মেন্টস ও আরএমজি এক্সপোর্ট",
    category: "agency",
    categoryLabel: "Industrial & Manufacturing",
    categoryLabelBn: "শিল্প ও ম্যানুফ্যাকচারিং",
    subCategoryLabel: "Garment & Knitwear Export",
    subCategoryLabelBn: "গার্মেন্টস ও টেক্সটাইল এক্সপোর্ট",
    folderPath: "Verified Live Projects › Manufacturing › Tasneem Knit",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › ম্যানুফ্যাকচারিং › তাসনিম নিট",
    image: "/desgins/tasneem/tasneem.png",
    images: [
      "/desgins/tasneem/tasneem.png",
      "/desgins/tasneem/tasneem (2).png",
      "/desgins/tasneem/tasneem (3).png",
      "/desgins/tasneem/tasneem (4).png",
    ],
    liveUrl: "https://tasneemknitindustry.com/",
    caseStudyUrl: "/work/tasneemknit",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Corporate export portal for a major garment manufacturing mill showcasing international labor compliance certifications (OEKO-TEX, BSCI), knitting machinery, and B2B RFQ.",
    descriptionBn:
      "আন্তর্জাতিক বায়ারদের জন্য তৈরি কমপ্লায়েন্স-সার্টিফায়েড নিটওয়্যার ও গার্মেন্টস প্রস্তুতকারক প্রতিষ্ঠানের কর্পোরেট পোর্টাল।",
    challenge: "European & North American buyers required verified compliance proof and immediate sample request flows.",
    solution: "Crafted an international-grade corporate portal highlighting sustainability milestones, audit reports, and quotation workflows.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion"],
    features: [
      "Interactive fabric & yarn catalog with technical specs",
      "Global compliance certification verification center",
      "B2B Sample request & RFQ direct dispatcher",
      "Factory virtual production tour gallery",
    ],
    metrics: {
      speed: "1.1s LCP",
      lighthouse: 98,
      completionYear: "2026",
      clientCountry: "Bangladesh / Global",
    },
  },

  "noor-solar": {
    id: "noor-solar",
    name: "Noor Solar Energy — Clean Tech Engineering",
    nameBn: "নূর সোলার এনার্জি — নবায়নযোগ্য শক্তি সলিউশন",
    category: "agency",
    categoryLabel: "Industrial & Energy Portals",
    categoryLabelBn: "শিল্প ও শক্তি পোর্টাল",
    subCategoryLabel: "Solar Power & EPC Engineering",
    subCategoryLabelBn: "সোলার পাওয়ার ও ক্লিনটেক",
    folderPath: "Verified Live Projects › Clean Energy › Noor Solar",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › ক্লিন এনার্জি › নূর সোলার",
    image: "/desgins/nooor/httpnoorsolarencom.png",
    images: [
      "/desgins/nooor/httpnoorsolarencom.png",
      "/desgins/nooor/n.png",
      "/desgins/nooor/norr.png",
    ],
    liveUrl: "http://noorsolaren.com/",
    caseStudyUrl: "/work/noorsolaren",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Clean tech engineering web platform featuring industrial rooftop PV systems, net metering estimations, and sustainability project portfolios.",
    descriptionBn:
      "শিল্প ও আবাসিক সোলার পিভি সিস্টেম, এনার্জি অডিট এবং গ্রিন পাওয়ার প্রজেক্ট শোকেস পোর্টাল।",
    challenge: "Commercial factory owners needed clear ROI projections and technical payback models before investing in solar installations.",
    solution: "Implemented an interactive solar capacity estimator and comprehensive case study gallery of completed megawatts.",
    techStack: ["React", "Tailwind CSS", "HTML5", "Vercel"],
    features: [
      "Interactive solar kilowatt & tariff savings calculator",
      "Completed commercial & residential project showcase",
      "Direct site inspection request & engineering inquiry",
      "Equipment specification and Tier-1 solar panel breakdown",
    ],
    metrics: {
      speed: "1.2s LCP",
      lighthouse: 97,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  "bengal-bulletin-news": {
    id: "bengal-bulletin-news",
    name: "Bengal Bulletin — Edge-Powered News Portal",
    nameBn: "বেঙ্গল বুলেটিন — হাই-স্পিড ডিজিটাল নিউজ মিডিয়া",
    category: "agency",
    categoryLabel: "Media & Publishing Portals",
    categoryLabelBn: "মিডিয়া ও প্রকাশনা পোর্টাল",
    subCategoryLabel: "Edge Serverless Newsroom",
    subCategoryLabelBn: "এজ সার্ভারলেস নিউজ রুম",
    folderPath: "Verified Live Projects › Media & Publishing › Bengal Bulletin",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › মিডিয়া ও প্রকাশনা › বেঙ্গল বুলেটিন",
    image: "/desgins/news/news.png",
    images: [
      "/desgins/news/news.png",
      "/desgins/news/news (2).png",
      "/desgins/news/news (3).png",
      "/desgins/news/news3.png",
      "/desgins/news/news3 (2).png",
    ],
    liveUrl: "https://bb.napaextra376.workers.dev/",
    caseStudyUrl: "/work/bengalbulletin",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Sub-second edge-rendered digital news portal built on Cloudflare Workers, handling millions of breaking news views with instant editorial feeds.",
    descriptionBn:
      "ক্লাউডফ্লেয়ার এজ আর্কিটেকচারে তৈরি দ্রুতগতির অনলাইন নিউজ পোর্টাল। ইনস্ট্যান্ট ব্রেকিং নিউজ আপডেট সহ।",
    challenge: "Breaking news spikes frequently crashed traditional CMS hosting and resulted in high server costs.",
    solution: "Built an Edge-native content architecture on Cloudflare Workers capable of handling infinite viral traffic with zero downtime.",
    techStack: ["Cloudflare Workers", "Hono", "React", "Tailwind CSS", "KV Storage"],
    features: [
      "Under-100ms global response time with Edge caching",
      "Instant live ticker for breaking news broadcasts",
      "Category filters for politics, tech, finance, and culture",
      "SEO news schema automated generation",
    ],
    metrics: {
      speed: "0.6s LCP",
      lighthouse: 100,
      completionYear: "2026",
      clientCountry: "Bangladesh & Global",
    },
  },

  "freedom-plus": {
    id: "freedom-plus",
    name: "Freedom Plus — Productivity & Workspace",
    nameBn: "ফ্রিডম প্লাস — প্রোডাক্টিভিটি ও ওয়ার্কস্পেস",
    category: "saas",
    categoryLabel: "SaaS & Web Applications",
    categoryLabelBn: "SaaS ও ওয়েব অ্যাপ",
    subCategoryLabel: "Modern Team Workspace",
    subCategoryLabelBn: "টিম কলাবোরেশন ও ওয়ার্কস্পেস",
    folderPath: "Verified Live Projects › SaaS & Apps › Freedom Plus",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › SaaS ও অ্যাপস › ফ্রিডম প্লাস",
    image: "/desgins/fredom/ffreedom.png",
    images: ["/desgins/fredom/ffreedom.png", "/desgins/fredom/ffreedom.png2.png"],
    liveUrl: "https://freedomplus.lovable.app",
    caseStudyUrl: "/work/freedomplus",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Modern productivity web application offering collaborative team hubs, smart notifications, and streamlined project progress boards.",
    descriptionBn:
      "টিম কলাবোরেশন, টাস্ক ট্র্যাকিং এবং মসৃণ ইউজার এক্সপেরিয়েন্স সমৃদ্ধ আধুনিক SaaS ওয়েব অ্যাপ্লিকেশন।",
    challenge: "Simplifying task management for fast-moving remote teams without overwhelming clutter.",
    solution: "Created a minimalist kanban workspace with real-time status syncing and rapid keyboard shortcuts.",
    techStack: ["React 19", "Tailwind CSS", "Supabase", "Lovable Engine"],
    features: [
      "Drag-and-drop workflow status boards",
      "Real-time notifications and team member assignments",
      "Sub-second interactive response times",
      "Responsive mobile layout for on-the-go updates",
    ],
    metrics: {
      speed: "1.0s LCP",
      lighthouse: 98,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  "techvrs-platform-live": {
    id: "techvrs-platform-live",
    name: "Techvrs — Security Prompts & Threat Intelligence",
    nameBn: "টেকভার্স — সিকিউরিটি প্রম্পটস ও ডিফেন্স হাব",
    category: "saas",
    categoryLabel: "SaaS & Web Applications",
    categoryLabelBn: "SaaS ও ওয়েব অ্যাপ",
    subCategoryLabel: "Cybersecurity & AI Intelligence",
    subCategoryLabelBn: "সাইবার সিকিউরিটি ও AI",
    folderPath: "Verified Live Projects › Cybersecurity › Techvrs Prompts",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › সাইবার সিকিউরিটি › টেকভার্স প্রম্পটস",
    image: "/desgins/techvrs/Screenshot_61.png",
    images: ["/desgins/techvrs/Screenshot_61.png", "/desgins/techvrs/Screenshot_63.png"],
    liveUrl: "https://techvrs.com/pormts",
    caseStudyUrl: "/work/techvrs-security",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Enterprise cybersecurity prompts directory, compliance playbooks, and threat intelligence telemetry dashboard.",
    descriptionBn:
      "এন্টারপ্রাইজ সিকিউরিটি প্রম্পটস, কমপ্লায়েন্স গাইডলাইন এবং সাইবার থ্রেট ডিফেন্স রিসোর্স হাব।",
    challenge: "Security engineers needed instant, vetted AI prompts for threat hunting, code reviews, and pen-testing.",
    solution: "Designed a searchable prompt engine with categorized attack vectors, copy-paste snippets, and defense workflows.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Search Index"],
    features: [
      "Curated offensive & defensive cybersecurity AI prompts",
      "1-click prompt copying with format customization",
      "CVE and threat vector categorized taxonomies",
      "Dark high-contrast terminal theme",
    ],
    metrics: {
      speed: "0.9s LCP",
      lighthouse: 99,
      completionYear: "2026",
      clientCountry: "International",
    },
  },

  "tarek-portfolio": {
    id: "tarek-portfolio",
    name: "TarekSec — Cyber Security Researcher",
    nameBn: "তারিক সিক — সাইবার সিকিউরিটি রিসার্চার",
    category: "agency",
    categoryLabel: "Editorial & Portfolios",
    categoryLabelBn: "এডিটোরিয়াল ও পোর্টফোলিও",
    subCategoryLabel: "Security Researcher Portfolio",
    subCategoryLabelBn: "সিকিউরিটি রিসার্চার পোর্টফোলিও",
    folderPath: "Verified Live Projects › Portfolios › TarekSec",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › পোর্টফোলিও › তারিক সিক",
    image: "/desgins/my-portfoli/portfolio.png",
    images: [
      "/desgins/my-portfoli/portfolio.png",
      "/desgins/my-portfoli/Screenshot_64.png",
      "/desgins/my-portfoli/Screenshot_65.png",
      "/desgins/my-portfoli/Screenshot_66.png",
    ],
    liveUrl: "https://tareksec.dev/",
    caseStudyUrl: "/work/tareksec",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Personal cybersecurity portfolio featuring bug bounty CVEs, security tooling, vulnerability writeups, and terminal aesthetics.",
    descriptionBn:
      "সাইবার সিকিউরিটি স্পেশালিস্ট ও এথিক্যাল হ্যাকারের প্রফেশনাল পোর্টফোলিও এবং রিসার্চ পাবলিকেশন।",
    challenge: "Displaying technical security vulnerabilities and bug bounty recognitions in a compelling, authoritative manner.",
    solution: "Developed a cyber-themed minimalist web presence with interactive terminal elements and publication archives.",
    techStack: ["React 19", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    features: [
      "Published CVE and bug bounty hall-of-fame directory",
      "Interactive terminal emulator with custom commands",
      "Encrypted contact & PGP public key sharing",
      "Blazing fast performance on low-bandwidth networks",
    ],
    metrics: {
      speed: "0.8s LCP",
      lighthouse: 100,
      completionYear: "2026",
      clientCountry: "Bangladesh & Global",
    },
  },

  "imran-blog": {
    id: "imran-blog",
    name: "Imran Khan — Thought Leadership & Blog",
    nameBn: "ইমরান খান — ডিজিটাল জার্নাল ও ব্লগ",
    category: "agency",
    categoryLabel: "Editorial & Portfolios",
    categoryLabelBn: "এডিটোরিয়াল ও পোর্টফোলিও",
    subCategoryLabel: "Minimalist Thought Journal",
    subCategoryLabelBn: "এডিটোরিয়াল ব্লগ ও জার্নাল",
    folderPath: "Verified Live Projects › Editorial › Imran Khan",
    folderPathBn: "ভেরিফায়েড লাইভ কাজ › এডিটোরিয়াল › ইমরান খান",
    image: "/desgins/New folder (3)/imran.png",
    images: ["/desgins/New folder (3)/imran.png", "/desgins/New folder (3)/imran1.png"],
    liveUrl: "https://imrankhanblog.netlify.app/",
    caseStudyUrl: "/work/imrankhanblog",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Clean modern blog publication focused on technology insights, software architecture essays, and personal reflections.",
    descriptionBn:
      "মিনিমালিস্ট ও রিডার-ফার্স্ট এডিটোরিয়াল ব্লগ প্ল্যাটফর্ম। ক্যাটাগরি ফিল্টার এবং পরিচ্ছন্ন লেআউট সহ।",
    challenge: "Eliminating digital distractions to provide a distraction-free, elegant typography reading experience.",
    solution: "Built a content-first editorial publication with serif headings, estimated read timers, and dark mode.",
    techStack: ["Astro / React", "Tailwind CSS", "Netlify", "Markdown"],
    features: [
      "Carefully balanced typographic hierarchy for long-form reading",
      "Automated read time estimator and table of contents",
      "Topic taxonomy filtering (AI, Code, Philosophy)",
      "Instant static page generation",
    ],
    metrics: {
      speed: "0.7s LCP",
      lighthouse: 100,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  // ─── PRIVATE ENTERPRISE PORTALS (PREVIEW ONLY) ──────────────────────────────
  "trade-portal-b2b": {
    id: "trade-portal-b2b",
    name: "Global Trade Portal — B2B Logistics (Private)",
    nameBn: "গ্লোবাল ট্রেড পোর্টাল — B2B লজিস্টিকস (প্রাইভেট)",
    category: "agency",
    categoryLabel: "Private Enterprise Systems",
    categoryLabelBn: "প্রাইভেট এন্টারপ্রাইজ সিস্টেম",
    subCategoryLabel: "Cross-Border Trade & LC Management",
    subCategoryLabelBn: "ট্রেড ও কাস্টমস ম্যানেজমেন্ট",
    folderPath: "Private Enterprise Systems › Trade & Logistics › Global Trade Portal",
    folderPathBn: "প্রাইভেট এন্টারপ্রাইজ সিস্টেম › ট্রেড ও লজিস্টিকস › গ্লোবাল ট্রেড পোর্টাল",
    image: "/desgins/treadportal/Screenshot_59.png",
    images: ["/desgins/treadportal/Screenshot_59.png", "/desgins/treadportal/Screenshot_60.png"],
    isPrivate: true,
    status: "Client Delivered",
    statusBn: "ক্লায়েন্ট ডেলিভার্ড",
    description:
      "Confidential enterprise B2B trade management system, shipment tracking, and LC document processing. Private client system — preview images only.",
    descriptionBn:
      "কনফিডেনশিয়াল এন্টারপ্রাইজ B2B ট্রেড ও শিপমেন্ট ট্র্যাকিং পোর্টাল। ক্লায়েন্টের অভ্যন্তরীণ সিস্টেম হওয়ায় কেবল প্রিভিউ প্রদর্শিত হচ্ছে।",
    challenge: "Paper-heavy export-import customs clearance and letter-of-credit (LC) document reconciliation.",
    solution: "Developed an internal digital trade dashboard for shipment tracking, container manifest status, and bank LC milestones.",
    techStack: ["React Enterprise", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Real-time shipment & container customs status tracking",
      "Letter of Credit (LC) milestone & document vault",
      "Multi-party exporter, buyer & freight forwarder access",
      "High-security air-gapped internal client infrastructure",
    ],
    metrics: {
      speed: "0.9s TTI",
      lighthouse: 96,
      completionYear: "2026",
      clientCountry: "Private Client",
    },
  },

  // ─── E-COMMERCE > NEXT.JS ──────────────────────────────────────────────────
  "gearabout-storefront": {
    id: "gearabout-storefront",
    name: "Gearabout Outdoor Store",
    nameBn: "গিয়ারঅ্যাবাউট আউটডোর স্টোর",
    category: "ecommerce",
    categoryLabel: "E-Commerce Websites",
    categoryLabelBn: "ইকমার্স ওয়েবসাইট",
    subCategoryLabel: "Next.js Storefronts",
    subCategoryLabelBn: "Next.js স্টোরফ্রন্ট",
    folderPath: "E-Commerce Websites › Next.js Storefronts › Gearabout Outdoor Store",
    folderPathBn: "ইকমার্স ওয়েবসাইট › Next.js স্টোরফ্রন্ট › গিয়ারঅ্যাবাউট আউটডোর স্টোর",
    image: w1,
    liveUrl: "https://artxdev.tech/work/gearabout",
    caseStudyUrl: "/work/gearabout",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "A headless Next.js 15 e-commerce storefront engineered for an outdoor gear brand. Features instant bKash/Nagad checkout tokenization, sub-second product filtering, and an editorial reading layout.",
    descriptionBn:
      "আউটডোর গিয়ারের জন্য তৈরি হেডলেস নেক্সট.জেএস ১৫ ইকমার্স স্টোরফ্রন্ট। ইনস্ট্যান্ট বিকাশ/নগদ অটোমেটেড চেকআউট এবং দ্রুত ফিল্টারিং সহ তৈরি।",
    challenge:
      "The client was losing mobile shoppers due to a 5.8s load time and complicated multi-step checkout processes.",
    solution:
      "Migrated to headless Next.js with App Router, server-rendered product carousels, and one-tap WhatsApp + MFS payment flow.",
    techStack: ["Next.js 15", "React 19", "Tailwind CSS v4", "bKash API", "Zod", "Sanity CMS"],
    features: [
      "Sub-1.8s Core Web Vitals LCP on mobile networks",
      "Direct bKash & Nagad automated payment verification",
      "Dynamic stock status and cart reservation drawer",
      "SEO Product Schema & OpenGraph automated generation",
    ],
    metrics: {
      speed: "1.4s LCP",
      lighthouse: 99,
      completionYear: "2026",
      clientCountry: "Bangladesh / UK",
    },
  },

  "urban-threads-store": {
    id: "urban-threads-store",
    name: "Urban Threads Apparel",
    nameBn: "আরবান থ্রেডস ফ্যাশন স্টোর",
    category: "ecommerce",
    categoryLabel: "E-Commerce Websites",
    categoryLabelBn: "ইকমার্স ওয়েবসাইট",
    subCategoryLabel: "Next.js Storefronts",
    subCategoryLabelBn: "Next.js স্টোরফ্রন্ট",
    folderPath: "E-Commerce Websites › Next.js Storefronts › Urban Threads Apparel",
    folderPathBn: "ইকমার্স ওয়েবসাইট › Next.js স্টোরফ্রন্ট › আরবান থ্রেডস ফ্যাশন স্টোর",
    image: w2,
    liveUrl: "https://artxdev.tech/concepts/sportswear-ecommerce",
    caseStudyUrl: "/concepts/sportswear-ecommerce",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "High-converting lifestyle apparel store featuring smooth micro-interactions, responsive sizing charts, and quick-add sliding cart drawers.",
    descriptionBn:
      "স্মুথ মাইক্রো-ইন্টারঅ্যাকশন এবং কুইক কার্ট ড্রয়ার সহ লাক্সারি লাইফস্টাইল ক্লথিং স্টোরফ্রন্ট।",
    challenge: "High cart abandonment due to clunky size selection and slow product switching.",
    solution: "Designed an interactive slide-over drawer with instant size matrix and optimistic cart updates.",
    techStack: ["Next.js 15", "Framer Motion", "Tailwind CSS", "SSLCommerz", "Shadcn UI"],
    features: [
      "Optimistic UI updates for instant cart additions",
      "Custom responsive size calculator and fit assistant",
      "Dynamic color variant switcher with cached previews",
      "Steadfast Courier API automated label dispatch",
    ],
    metrics: {
      speed: "1.2s LCP",
      lighthouse: 98,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  "stride-footwear-store": {
    id: "stride-footwear-store",
    name: "Stride Footwear Drops",
    nameBn: "স্ট্রাইড স্নিকার ড্রপ স্টোর",
    category: "ecommerce",
    categoryLabel: "E-Commerce Websites",
    categoryLabelBn: "ইকমার্স ওয়েবসাইট",
    subCategoryLabel: "Next.js Storefronts",
    subCategoryLabelBn: "Next.js স্টোরফ্রন্ট",
    folderPath: "E-Commerce Websites › Next.js Storefronts › Stride Footwear Drops",
    folderPathBn: "ইকমার্স ওয়েবসাইট › Next.js স্টোরফ্রন্ট › স্ট্রাইড স্নিকার ড্রপ স্টোর",
    image: w3,
    liveUrl: "https://artxdev.tech/services/ecommerce-website-design",
    caseStudyUrl: "/services/ecommerce-website-design",
    status: "Client Delivered",
    statusBn: "ক্লায়েন্ট ডেলিভার্ড",
    description:
      "Headless sneaker commerce platform built to handle sudden flash-sale traffic spikes without rate limits or inventory overselling.",
    descriptionBn:
      "হঠাৎ ট্রাফিক স্পাইক ও ফ্ল্যাশ সেল সহজে হ্যান্ডেল করার মতো হাই-পারফর্ম্যান্স হেডলেস স্নিকার স্টোর।",
    challenge: "Flash sale drops crashed the previous server, causing oversold stock and customer disputes.",
    solution: "Edge-cached static catalog with Redis atomic transaction queues for zero overselling.",
    techStack: ["Next.js", "Redis / Upstash", "Tailwind CSS", "AamarPay", "PostgreSQL"],
    features: [
      "Atomic queue reservation during product drop events",
      "CDN edge caching serving 50,000+ concurrent shoppers",
      "Automated SMS notification on order confirmation",
      "Instant WhatsApp customer support widget",
    ],
    metrics: {
      speed: "0.9s LCP",
      lighthouse: 100,
      completionYear: "2025",
      clientCountry: "Bangladesh",
    },
  },

  // ─── E-COMMERCE > WORDPRESS / WOOCOMMERCE ─────────────────────────────────
  "chawkbazar-grocery-woo": {
    id: "chawkbazar-grocery-woo",
    name: "ChawkBazar Organic Grocery",
    nameBn: "চকবাজার অর্গানিক গ্রোসারি",
    category: "ecommerce",
    categoryLabel: "E-Commerce Websites",
    categoryLabelBn: "ইকমার্স ওয়েবসাইট",
    subCategoryLabel: "WordPress & WooCommerce",
    subCategoryLabelBn: "ওয়ার্ডপ্রেস ও উকমার্স",
    folderPath: "E-Commerce Websites › WordPress & WooCommerce › ChawkBazar Organic Grocery",
    folderPathBn: "ইকমার্স ওয়েবসাইট › ওয়ার্ডপ্রেস ও উকমার্স › চকবাজার অর্গানিক গ্রোসারি",
    image: w4,
    liveUrl: "https://artxdev.tech/services/ecommerce-website-design",
    caseStudyUrl: "/services/ecommerce-website-design",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Custom-crafted WooCommerce storefront built with zero bloated visual page builders. Includes custom 1-click bKash checkout, morning/evening delivery slot selector, and Pathao shipping sync.",
    descriptionBn:
      "কোনো ভারী প্লাগইন ছাড়া কাস্টম-কোডেড উকমার্স স্টোরফ্রন্ট। ওয়ান-ক্লিক বিকাশ পেমেন্ট ও ডেলিভারি স্লট সহ।",
    challenge: "The client’s prior WordPress setup had 45+ plugins and took 8+ seconds to open on mobile.",
    solution: "Developed a lightweight bespoke theme with native WooCommerce hooks, cutting plugins down to 6.",
    techStack: ["WordPress", "WooCommerce", "PHP 8.3", "Tailwind CSS", "Pathao Courier API"],
    features: [
      "Custom one-page checkout eliminating 4 unnecessary checkout steps",
      "Same-day delivery slot selector with cutoff timer",
      "Automated Pathao courier consignment generation",
      "Native lazy-loading achieving 1.6s load time on mobile",
    ],
    metrics: {
      speed: "1.6s LCP",
      lighthouse: 96,
      completionYear: "2025",
      clientCountry: "Dhaka, Bangladesh",
    },
  },

  "glam-boutique-fashion": {
    id: "glam-boutique-fashion",
    name: "Glam Boutique Fashion",
    nameBn: "গ্ল্যাম বুটিক ফ্যাশন",
    category: "ecommerce",
    categoryLabel: "E-Commerce Websites",
    categoryLabelBn: "ইকমার্স ওয়েবসাইট",
    subCategoryLabel: "WordPress & WooCommerce",
    subCategoryLabelBn: "ওয়ার্ডপ্রেস ও উকমার্স",
    folderPath: "E-Commerce Websites › WordPress & WooCommerce › Glam Boutique Fashion",
    folderPathBn: "ইকমার্স ওয়েবসাইট › ওয়ার্ডপ্রেস ও উকমার্স › গ্ল্যাম বুটিক ফ্যাশন",
    image: w2,
    liveUrl: "https://artxdev.tech/pricing",
    caseStudyUrl: "/pricing",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Editorial WooCommerce boutique store featuring high-res lookbooks, Instagram feed shopping integration, and automated discount vouchers for repeat buyers.",
    descriptionBn:
      "হাই-রেজোলিউশন লুকবুক এবং ইনস্ট্যান্ট শপিং অভিজ্ঞতা সহ কাস্টম ফ্যাশন বুটিক প্ল্যাটফর্ম।",
    challenge: "Product lookbook images were heavy, causing high bounce rates among social media visitors.",
    solution: "Engineered next-gen WebP image transformations and inline CSS critical rendering path.",
    techStack: ["WordPress", "WooCommerce", "bKash Merchant API", "Nagad Gateway", "Redis Cache"],
    features: [
      "Automated WebP image compression reducing asset weight by 75%",
      "WhatsApp direct inquiry button with pre-filled product details",
      "Instant coupon codes for cart recovery",
      "Mobile sticky checkout bar increasing conversion by 34%",
    ],
    metrics: {
      speed: "1.5s LCP",
      lighthouse: 97,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  // ─── E-COMMERCE > DASHBOARDS ──────────────────────────────────────────────
  "merchant-sales-analytics": {
    id: "merchant-sales-analytics",
    name: "Merchant Revenue Analytics",
    nameBn: "মার্চেন্ট রেভিনিউ অ্যানালিটিক্স",
    category: "ecommerce",
    categoryLabel: "E-Commerce Websites",
    categoryLabelBn: "ইকমার্স ওয়েবসাইট",
    subCategoryLabel: "E-Commerce Dashboards",
    subCategoryLabelBn: "ইকমার্স ড্যাশবোর্ড",
    folderPath: "E-Commerce Websites › E-Commerce Dashboards › Merchant Revenue Analytics",
    folderPathBn: "ইকমার্স ওয়েবসাইট › ইকমার্স ড্যাশবোর্ড › মার্চেন্ট রেভিনিউ অ্যানালিটিক্স",
    image: imgSamriddhi,
    liveUrl: "https://artxdev.tech/services/web-development",
    caseStudyUrl: "/services/web-development",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Executive merchant command center providing real-time sales visibility, average order value (AOV) tracking, courier return rates, and customer acquisition metrics.",
    descriptionBn:
      "রিয়েলটাইম সেলস রেভিনিউ, পার্সেল রিটার্ন রেট এবং কাস্টমার কোহোর্ট মনিটরিং করার আধুনিক মার্চেন্ট ড্যাশবোর্ড।",
    challenge: "Store owners struggled with reconciling cash-on-delivery payments across 3 different couriers.",
    solution: "Built a centralized dashboard that reconciles bank payouts, courier settlements, and live stock.",
    techStack: ["React 19", "TanStack Table", "Recharts", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Real-time revenue charts with daily, weekly & monthly breakdown",
      "Automated cash-on-delivery courier discrepancy detection",
      "Top-selling product rankings with profit margin indicators",
      "One-click CSV/Excel accounting export",
    ],
    metrics: {
      speed: "0.8s TTI",
      lighthouse: 99,
      completionYear: "2026",
      clientCountry: "Bangladesh & UAE",
    },
  },

  "courier-shipping-hub": {
    id: "courier-shipping-hub",
    name: "Pathao & Steadfast Shipping Hub",
    nameBn: "পাঠাও ও স্টেডফাস্ট শিপিং অটোমেশন",
    category: "ecommerce",
    categoryLabel: "E-Commerce Websites",
    categoryLabelBn: "ইকমার্স ওয়েবসাইট",
    subCategoryLabel: "E-Commerce Dashboards",
    subCategoryLabelBn: "ইকমার্স ড্যাশবোর্ড",
    folderPath: "E-Commerce Websites › E-Commerce Dashboards › Pathao & Steadfast Shipping Hub",
    folderPathBn: "ইকমার্স ওয়েবসাইট › ইকমার্স ড্যাশবোর্ড › পাঠাও ও স্টেডফাস্ট শিপিং অটোমেশন",
    image: imgTechvrs,
    liveUrl: "https://artxdev.tech/why-us",
    caseStudyUrl: "/why-us",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Automated logistics gateway connecting e-commerce storefronts directly to Pathao, Steadfast, and RedX for 1-click parcel dispatch and live delivery tracking.",
    descriptionBn:
      "ইকমার্স স্টোর থেকে এক ক্লিকে পার্সেল বুকিং, বারকোড লেবেল তৈরি এবং লাইভ ডেলিভারি ট্র্যাকিং হাব।",
    challenge: "Fulfillment team was manually copying customer addresses into courier apps 200+ times a day.",
    solution: "Engineered automated webhook dispatch with bulk thermal label printing and live customer tracking.",
    techStack: ["Node.js", "TypeScript", "Pathao API", "Steadfast API", "Webhooks"],
    features: [
      "Bulk consignment creation supporting 100+ parcels per batch",
      "Automated standard 4x6 thermal shipping label generator",
      "Real-time SMS tracking updates sent to customers on dispatch",
      "Auto-sync of delivery status ('Delivered' / 'Returned') into database",
    ],
    metrics: {
      speed: "< 250ms API",
      lighthouse: 100,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  // ─── SAAS & WEB APPS ──────────────────────────────────────────────────────
  "samriddhi-fintech": {
    id: "samriddhi-fintech",
    name: "Samriddhi FinTech Platform",
    nameBn: "সমৃদ্ধি ফিনটেক ও ইনভেস্টমেন্ট পোর্টাল",
    category: "saas",
    categoryLabel: "SaaS & Web Applications",
    categoryLabelBn: "SaaS ও ওয়েব অ্যাপ",
    subCategoryLabel: "React & Next.js Platforms",
    subCategoryLabelBn: "React ও Next.js প্ল্যাটফর্ম",
    folderPath: "SaaS & Web Applications › React & Next.js Platforms › Samriddhi FinTech Platform",
    folderPathBn: "SaaS ও ওয়েব অ্যাপ › React ও Next.js প্ল্যাটফর্ম › সমৃদ্ধি ফিনটেক ও ইনভেস্টমেন্ট পোর্টাল",
    image: imgSamriddhi,
    liveUrl: "https://artxdev.tech/work/samriddhi",
    caseStudyUrl: "/work/samriddhi",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Multi-tenant financial advisory and portfolio management platform. Engineered with encrypted document vaults, client KYC verification, and dynamic yield calculators.",
    descriptionBn:
      "এনক্রিপ্টেড ক্লায়েন্ট ভল্ট এবং পোর্টফোলিও অ্যানালিটিক্স সহ মাল্টি-টেন্যান্ট ফিনটেক প্ল্যাটফর্ম।",
    challenge: "Handling confidential financial documents while maintaining accessible speeds on mobile.",
    solution: "Implemented client-side AES-256 encryption with serverless edge compute for sub-second report generation.",
    techStack: ["React 19", "TanStack Router", "PostgreSQL", "Tailwind CSS", "Prisma"],
    features: [
      "Role-Based Access Control (RBAC) with granular member permissions",
      "Real-time investment portfolio rebalancing calculations",
      "Automated PDF wealth statement generation",
      "Enterprise audit logging meeting regulatory compliance",
    ],
    metrics: {
      speed: "1.1s LCP",
      lighthouse: 98,
      completionYear: "2026",
      clientCountry: "Bangladesh & Singapore",
    },
  },

  // ─── BUSINESS & CYBER SECURITY ────────────────────────────────────────────
  "techvrs-security": {
    id: "techvrs-security",
    name: "Techvrs Security Hub",
    nameBn: "টেকভিআরএস সাইবার সিকিউরিটি হাব",
    category: "agency",
    categoryLabel: "Business & Agency Portals",
    categoryLabelBn: "বিজনেস ও এজেন্সি ওয়েবসাইট",
    subCategoryLabel: "Cybersecurity Portals",
    subCategoryLabelBn: "সাইবার সিকিউরিটি",
    folderPath: "Business & Agency Portals › Cybersecurity Portals › Techvrs Security Hub",
    folderPathBn: "বিজনেস ও এজেন্সি ওয়েবসাইট › সাইবার সিকিউরিটি › টেকভিআরএস সাইবার সিকিউরিটি হাব",
    image: imgTechvrs,
    liveUrl: "https://artxdev.tech/work/techvrs",
    caseStudyUrl: "/work/techvrs",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Corporate web portal and penetration testing booking system for a cybersecurity firm. Features strict CSP headers, zero external tracker leaks, and real-time vulnerability scan requests.",
    descriptionBn:
      "সাইবার সিকিউরিটি ফার্মের জন্য উচ্চ-নিরাপত্তা বিশিষ্ট করপোরেট পোর্টাল ও পেনিট্রেশন টেস্ট বুকিং সিস্টেম।",
    challenge: "A security firm required absolute 100/100 security posture with zero vulnerabilities or CSP leaks.",
    solution: "Hardened headers, static edge delivery, and zero client-side analytics trackers.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "CSP Level 3", "Cloudflare"],
    features: [
      "Strict Content-Security-Policy with zero inline unsafe scripts",
      "Client vulnerability reporting form with end-to-end encryption",
      "ISO 27001 compliance documentation showcase",
      "Sub-1.0s global edge latency across 200+ CDN nodes",
    ],
    metrics: {
      speed: "0.8s LCP",
      lighthouse: 100,
      completionYear: "2026",
      clientCountry: "International",
    },
  },

  "mohaimin-portfolio": {
    id: "mohaimin-portfolio",
    name: "Mohaimin Patwary Portfolio",
    nameBn: "মহাইমিন পাটোয়ারী ক্রিয়েটিভ পোর্টফোলিও",
    category: "agency",
    categoryLabel: "Business & Agency Portals",
    categoryLabelBn: "বিজনেস ও এজেন্সি ওয়েবসাইট",
    subCategoryLabel: "Editorial & Portfolios",
    subCategoryLabelBn: "এডিটোরিয়াল ও পোর্টফোলিও",
    folderPath: "Business & Agency Portals › Editorial & Portfolios › Mohaimin Patwary Portfolio",
    folderPathBn: "বিজনেস ও এজেন্সি ওয়েবসাইট › এডিটোরিয়াল ও পোর্টফোলিও › মহাইমিন পাটোয়ারী ক্রিয়েটিভ পোর্টফোলিও",
    image: imgMohaimin,
    liveUrl: "https://artxdev.tech/work/mohaimin",
    caseStudyUrl: "/work/mohaimin",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Editorial portfolio showcasing creative direction, digital product designs, and agency leadership with fluid typography and smooth page transitions.",
    descriptionBn:
      "এডিটোরিয়াল টাইপোগ্রাফি এবং ফ্লুইড মোশন ট্রানজিশন সমৃদ্ধ প্রিমিয়াম ক্রিয়েটিভ পোর্টফোলিও।",
    challenge: "Balancing heavy visual assets with fast mobile responsiveness.",
    solution: "Implemented Lenis smooth scrolling, responsive picture sets, and hardware-accelerated animations.",
    techStack: ["React 19", "Lenis Scroll", "Framer Motion", "Tailwind CSS"],
    features: [
      "Fluid editorial typography adapting seamlessly across screen widths",
      "Micro-interaction hover cards with custom cursor effects",
      "Interactive case study galleries with high-res thumbnails",
      "Accessible dark/light aesthetic matching client branding",
    ],
    metrics: {
      speed: "1.3s LCP",
      lighthouse: 99,
      completionYear: "2026",
      clientCountry: "Bangladesh",
    },
  },

  "okkhor-pathagar": {
    id: "okkhor-pathagar",
    name: "Okkhor Pathagar Library",
    nameBn: "অক্ষর পাঠাগার ডিজিটাল আর্কাইভ",
    category: "agency",
    categoryLabel: "Business & Agency Portals",
    categoryLabelBn: "বিজনেস ও এজেন্সি ওয়েবসাইট",
    subCategoryLabel: "Editorial & Portfolios",
    subCategoryLabelBn: "এডিটোরিয়াল ও পোর্টফোলিও",
    folderPath: "Business & Agency Portals › Editorial & Portfolios › Okkhor Pathagar Library",
    folderPathBn: "বিজনেস ও এজেন্সি ওয়েবসাইট › এডিটোরিয়াল ও পোর্টফোলিও › অক্ষর পাঠাগার ডিজিটাল আর্কাইভ",
    image: imgOkkhor,
    liveUrl: "https://artxdev.tech/work/okkhor",
    caseStudyUrl: "/work/okkhor",
    status: "Live in Production",
    statusBn: "লাইভ প্রোডাকশন",
    description:
      "Non-profit public community library catalog with online book search, digital membership cards, reading room reservation, and online book donation gateway.",
    descriptionBn:
      "কমিউনিটি লাইব্রেরির জন্য অনলাইন বই সার্চ, ডিজিটাল মেম্বারশিপ কার্ড ও ডোনেশন পোর্টাল।",
    challenge: "Volunteers had difficulty cataloging 10,000+ donated books manually.",
    solution: "Created an ISBN barcode scanner web app with instant cover artwork lookup and catalog indexing.",
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "bKash Donation Gateway"],
    features: [
      "Instant book search by title, author, category, or ISBN number",
      "Digital membership registration with virtual QR card issuance",
      "Direct bKash donation channel supporting library expansion",
      "Bilingual interface fully localized in Bengali and English",
    ],
    metrics: {
      speed: "1.1s LCP",
      lighthouse: 100,
      completionYear: "2025",
      clientCountry: "Bangladesh",
    },
  },
};

function WorkproofPage() {
  const { language } = useLanguage();

  // Active selected project
  const [selectedProjectId, setSelectedProjectId] = useState<string>("biniyog-sme");
  const activeProject = WORKED_PROJECTS[selectedProjectId] || WORKED_PROJECTS["biniyog-sme"];

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Mobile navigation mode: 'folders' (Tree view) vs 'details' (Selected project preview)
  const [mobileTab, setMobileTab] = useState<"folders" | "details">("folders");

  // Ref for auto-scrolling to the workspace when project is selected on mobile
  const workspaceRef = useRef<HTMLDivElement>(null);

  // Folders open in the Files tree
  const [openFolders, setOpenFolders] = useState<string[]>([
    "verified-live-client-works",
    "private-enterprise-projects",
    "ecommerce-websites",
    "ecommerce-nextjs",
    "ecommerce-wordpress",
    "ecommerce-dashboard",
    "saas-web-applications",
    "saas-fullstack",
    "business-agency-websites",
    "business-security",
    "business-editorial",
  ]);

  // Handler when clicking any project item
  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    // On small screens, auto-switch to details view and scroll into view smoothly
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setMobileTab("details");
      if (workspaceRef.current) {
        workspaceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return Object.values(WORKED_PROJECTS);
    const q = searchQuery.toLowerCase();
    return Object.values(WORKED_PROJECTS).filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.nameBn.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.subCategoryLabel.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#f4f4f2] dark:bg-[#0e0f11] text-foreground overflow-x-hidden pt-16 sm:pt-20">
      {/* ─── SECTION: Visual Works & Live Demo Showcase (Exact match to sample UI) ──── */}
      <WorkShowcaseSection />

      {/* ─── MAIN SECTION: Interactive Worked Work Files Explorer ────────────────── */}
      <section ref={workspaceRef} className="px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 2xl:py-20 border-b border-border/40">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1780px]">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-2">
                <FolderTree className="h-4 w-4" />
                <span>Interactive Work Directory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
                {language === "bn"
                  ? "ইন্টারেক্টিভ প্রজেক্ট ডিরেক্টরি"
                  : "Interactive Worked Projects Explorer"}
              </h2>
              <p className="mt-2 text-xs sm:text-sm 2xl:text-base text-muted-foreground max-w-2xl 2xl:max-w-3xl">
                {language === "bn"
                  ? "ফোল্ডারগুলো ওপেন করে আমাদের বিভিন্ন ক্যাটাগরির কাজ দেখুন। যেকোনো প্রজেক্টে ক্লিক করলেই ডানে তার লাইভ প্রিভিউ, বিবরণ ও লিংক দেখতে পাবেন।"
                  : "Browse our client work using the natural directory tree. Expand folders to explore Next.js stores, WordPress / WooCommerce shops, e-commerce dashboards, and SaaS applications."}
              </p>
            </div>

            {/* Quick search input */}
            <div className="relative w-full md:w-72 2xl:w-84">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "bn" ? "প্রজেক্ট সার্চ করুন..." : "Search worked projects..."}
                className="w-full rounded-xl border border-border/60 bg-card pl-10 pr-4 py-2 text-xs sm:text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {/* Mobile Screen Tab Toggle (Shown only on screens < 1024px) */}
          <div className="flex lg:hidden items-center justify-between mb-4 p-1.5 rounded-xl border border-border/60 bg-card shadow-sm">
            <button
              onClick={() => setMobileTab("folders")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                mobileTab === "folders"
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FolderTree className="h-3.5 w-3.5" />
              <span>{language === "bn" ? "ফোল্ডার দেখুন" : "Browse Folders"}</span>
            </button>

            <button
              onClick={() => setMobileTab("details")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                mobileTab === "details"
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{language === "bn" ? "প্রজেক্ট প্রিভিউ ও বিবরণ" : "Project Details"}</span>
            </button>
          </div>

          {/* Master Explorer Workspace Card: Responsive on both 1899px laptop & mobile */}
          <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-xl">
            {/* Top Workspace Breadcrumb Bar */}
            <div className="p-3 sm:p-4 2xl:p-5 border-b border-border/40 bg-secondary/30 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span className="flex h-2.5 w-2.5 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="truncate font-medium text-foreground">
                  {language === "bn" ? activeProject.folderPathBn : activeProject.folderPath}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-xs shrink-0">
                <button
                  onClick={() =>
                    setOpenFolders([
                      "ecommerce-websites",
                      "ecommerce-nextjs",
                      "ecommerce-wordpress",
                      "ecommerce-dashboard",
                      "saas-web-applications",
                      "saas-fullstack",
                      "business-agency-websites",
                      "business-security",
                      "business-editorial",
                    ])
                  }
                  className="text-muted-foreground hover:text-foreground underline decoration-dotted"
                >
                  {language === "bn" ? "সব ফোল্ডার খুলুন" : "Expand all"}
                </button>
                <span className="text-muted-foreground">•</span>
                <button
                  onClick={() => setOpenFolders([])}
                  className="text-muted-foreground hover:text-foreground underline decoration-dotted"
                >
                  {language === "bn" ? "সব বন্ধ করুন" : "Collapse all"}
                </button>
              </div>
            </div>

            {/* Workspace Body: Natural Tree on Left, Rich Project Showcase on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 2xl:grid-cols-12 min-h-[580px] 2xl:min-h-[680px]">
              {/* ── LEFT COLUMN: FOLDER TREE COMPONENT ──────────────────────────────── */}
              <div
                className={`lg:col-span-4 2xl:col-span-3.5 p-3 sm:p-4 2xl:p-6 border-b lg:border-b-0 lg:border-r border-border/40 overflow-y-auto max-h-[750px] 2xl:max-h-[850px] bg-secondary/10 ${
                  mobileTab === "folders" ? "block" : "hidden lg:block"
                }`}
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider mb-3 px-2 font-medium">
                  <span>{language === "bn" ? "প্রজেক্ট ফোল্ডার" : "Project Categories"}</span>
                  <span className="font-mono">{Object.keys(WORKED_PROJECTS).length} Items</span>
                </div>

                <Files
                  open={openFolders}
                  onOpenChange={setOpenFolders}
                  className="text-xs sm:text-sm font-sans"
                >
                  {/* ======================================================== */}
                  {/* TOP FOLDER: VERIFIED LIVE CLIENT PRODUCTIONS             */}
                  {/* ======================================================== */}
                  <FolderItem value="verified-live-client-works">
                    <FolderTrigger gitStatus="untracked">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        {language === "bn" ? "ভেরিফায়েড লাইভ সাইটস (টপ প্রুফ)" : "Verified Live Client Works"}
                      </span>
                    </FolderTrigger>

                    <FolderContent>
                      <SubFiles>
                        <FileItem
                          icon={CreditCard}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("biniyog-sme")}
                          className={selectedProjectId === "biniyog-sme" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "বিনিয়োগ বৃদ্ধি (SME ইনভেস্টমেন্ট)" : "Biniyog Briddhi (SME Portal)"}
                        </FileItem>

                        <FileItem
                          icon={BookOpen}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("bec-portal")}
                          className={selectedProjectId === "bec-portal" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "দ্য বিইসি (একাডেমি পোর্টাল)" : "The BEC (Academy Portal)"}
                        </FileItem>

                        <FileItem
                          icon={Globe}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("artstroy-studio")}
                          className={selectedProjectId === "artstroy-studio" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "আর্টএক্স দেব ও আর্টস্টোরি" : "ArtX Dev & ArtStory Studio"}
                        </FileItem>

                        <FileItem
                          icon={LayoutDashboard}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("ims-platform")}
                          className={selectedProjectId === "ims-platform" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "টেকভার্স IMS (ইনভেন্টরি ERP)" : "Techvrs IMS (Inventory ERP)"}
                        </FileItem>

                        <FileItem
                          icon={BookOpen}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("okkhor-library")}
                          className={selectedProjectId === "okkhor-library" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "অক্ষর পাঠাগার (পাবলিক আর্কাইভ)" : "Okkhor Pathagar Library"}
                        </FileItem>

                        <FileItem
                          icon={Truck}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("tasneem-textile")}
                          className={selectedProjectId === "tasneem-textile" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "তাসনিম নিট (গার্মেন্টস এক্সপোর্ট)" : "Tasneem Knit Industry"}
                        </FileItem>

                        <FileItem
                          icon={Zap}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("noor-solar")}
                          className={selectedProjectId === "noor-solar" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "নূর সোলার (ক্লিনটেক এনার্জি)" : "Noor Solar Energy"}
                        </FileItem>

                        <FileItem
                          icon={Globe}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("bengal-bulletin-news")}
                          className={selectedProjectId === "bengal-bulletin-news" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "বেঙ্গল বুলেটিন (নিউজ পোর্টাল)" : "Bengal Bulletin News"}
                        </FileItem>

                        <FileItem
                          icon={Sparkles}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("freedom-plus")}
                          className={selectedProjectId === "freedom-plus" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "ফ্রিডম প্লাস (SaaS ওয়ার্কস্পেস)" : "Freedom Plus SaaS App"}
                        </FileItem>

                        <FileItem
                          icon={ShieldCheck}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("techvrs-platform-live")}
                          className={selectedProjectId === "techvrs-platform-live" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "টেকভার্স (সিকিউরিটি প্রম্পটস)" : "Techvrs Security Prompts"}
                        </FileItem>

                        <FileItem
                          icon={ShieldCheck}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("tarek-portfolio")}
                          className={selectedProjectId === "tarek-portfolio" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "তারিক সিকিউরিটি পোর্টফোলিও" : "TarekSec Cyber Portfolio"}
                        </FileItem>

                        <FileItem
                          icon={BookOpen}
                          gitStatus="untracked"
                          onClick={() => handleSelectProject("imran-blog")}
                          className={selectedProjectId === "imran-blog" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "ইমরান খান ব্লগ ও পাবলিকেশন" : "Imran Khan Journal Blog"}
                        </FileItem>
                      </SubFiles>
                    </FolderContent>
                  </FolderItem>

                  {/* ======================================================== */}
                  {/* SECOND FOLDER: PRIVATE ENTERPRISE SYSTEMS (PREVIEWS)     */}
                  {/* ======================================================== */}
                  <FolderItem value="private-enterprise-projects">
                    <FolderTrigger gitStatus="modified">
                      <span className="font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                        <Lock className="h-3.5 w-3.5" />
                        {language === "bn" ? "প্রাইভেট ক্লায়েন্ট সিস্টেম (প্রিভিউ)" : "Private Enterprise Systems"}
                      </span>
                    </FolderTrigger>

                    <FolderContent>
                      <SubFiles>
                        <FileItem
                          icon={Lock}
                          gitStatus="modified"
                          onClick={() => handleSelectProject("trade-portal-b2b")}
                          className={selectedProjectId === "trade-portal-b2b" ? "bg-accent/20 text-accent font-semibold" : ""}
                        >
                          {language === "bn" ? "ট্রেডপোর্টাল (গ্লোবাল B2B লজিস্টিকস)" : "Global Trade Portal (Private)"}
                        </FileItem>
                      </SubFiles>
                    </FolderContent>
                  </FolderItem>

                  {/* ======================================================== */}
                  {/* MAIN FOLDER 1: E-COMMERCE WEBSITES                       */}
                  {/* ======================================================== */}
                  <FolderItem value="ecommerce-websites">
                    <FolderTrigger gitStatus="modified">
                      <span className="font-semibold text-foreground">
                        {language === "bn" ? "ইকমার্স ওয়েবসাইটসমূহ" : "E-Commerce Websites"}
                      </span>
                    </FolderTrigger>

                    <FolderContent>
                      <SubFiles>
                        {/* Sub-folder 1.1: Next.js */}
                        <FolderItem value="ecommerce-nextjs">
                          <FolderTrigger gitStatus="untracked">
                            <span className="text-foreground/90 font-medium">
                              {language === "bn" ? "Next.js স্টোরফ্রন্ট" : "Next.js Storefronts"}
                            </span>
                          </FolderTrigger>
                          <FolderContent>
                            <SubFiles>
                              <FileItem
                                icon={Globe}
                                gitStatus="untracked"
                                onClick={() => handleSelectProject("gearabout-storefront")}
                                className={
                                  selectedProjectId === "gearabout-storefront"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "গিয়ারঅ্যাবাউট আউটডোর স্টোর" : "Gearabout Outdoor Store"}
                              </FileItem>

                              <FileItem
                                icon={Globe}
                                onClick={() => handleSelectProject("urban-threads-store")}
                                className={
                                  selectedProjectId === "urban-threads-store"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "আরবান থ্রেডস ফ্যাশন" : "Urban Threads Apparel"}
                              </FileItem>

                              <FileItem
                                icon={Globe}
                                onClick={() => handleSelectProject("stride-footwear-store")}
                                className={
                                  selectedProjectId === "stride-footwear-store"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "স্ট্রাইড স্নিকার ড্রপ" : "Stride Footwear Drops"}
                              </FileItem>
                            </SubFiles>
                          </FolderContent>
                        </FolderItem>

                        {/* Sub-folder 1.2: WordPress & WooCommerce */}
                        <FolderItem value="ecommerce-wordpress">
                          <FolderTrigger gitStatus="modified">
                            <span className="text-foreground/90 font-medium">
                              {language === "bn" ? "ওয়ার্ডপ্রেস ও উকমার্স" : "WordPress & WooCommerce"}
                            </span>
                          </FolderTrigger>
                          <FolderContent>
                            <SubFiles>
                              <FileItem
                                icon={ShoppingCart}
                                gitStatus="modified"
                                onClick={() => handleSelectProject("chawkbazar-grocery-woo")}
                                className={
                                  selectedProjectId === "chawkbazar-grocery-woo"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "চকবাজার গ্রোসারি স্টোর" : "ChawkBazar Organic Grocery"}
                              </FileItem>

                              <FileItem
                                icon={ShoppingBag}
                                onClick={() => handleSelectProject("glam-boutique-fashion")}
                                className={
                                  selectedProjectId === "glam-boutique-fashion"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "গ্ল্যাম বুটিক ফ্যাশন" : "Glam Boutique Fashion"}
                              </FileItem>
                            </SubFiles>
                          </FolderContent>
                        </FolderItem>

                        {/* Sub-folder 1.3: E-Commerce Dashboards */}
                        <FolderItem value="ecommerce-dashboard">
                          <FolderTrigger gitStatus="modified">
                            <span className="text-foreground/90 font-medium">
                              {language === "bn" ? "ইকমার্স ড্যাশবোর্ড" : "E-Commerce Dashboards"}
                            </span>
                          </FolderTrigger>
                          <FolderContent>
                            <SubFiles>
                              <FileItem
                                icon={LayoutDashboard}
                                gitStatus="modified"
                                onClick={() => handleSelectProject("merchant-sales-analytics")}
                                className={
                                  selectedProjectId === "merchant-sales-analytics"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "মার্চেন্ট রেভিনিউ অ্যানালিটিক্স" : "Merchant Revenue Analytics"}
                              </FileItem>

                              <FileItem
                                icon={Truck}
                                onClick={() => handleSelectProject("courier-shipping-hub")}
                                className={
                                  selectedProjectId === "courier-shipping-hub"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "পাঠাও ও স্টেডফাস্ট শিপিং হাব" : "Pathao & Steadfast Shipping Hub"}
                              </FileItem>
                            </SubFiles>
                          </FolderContent>
                        </FolderItem>
                      </SubFiles>
                    </FolderContent>
                  </FolderItem>

                  {/* ======================================================== */}
                  {/* MAIN FOLDER 2: SAAS & WEB APPS                           */}
                  {/* ======================================================== */}
                  <FolderItem value="saas-web-applications">
                    <FolderTrigger>
                      <span className="font-semibold text-foreground">
                        {language === "bn" ? "SaaS ও ওয়েব অ্যাপ" : "SaaS & Web Applications"}
                      </span>
                    </FolderTrigger>

                    <FolderContent>
                      <SubFiles>
                        <FolderItem value="saas-fullstack">
                          <FolderTrigger gitStatus="untracked">
                            <span className="text-foreground/90 font-medium">
                              {language === "bn" ? "React ও Next.js প্ল্যাটফর্ম" : "React & Next.js Platforms"}
                            </span>
                          </FolderTrigger>
                          <FolderContent>
                            <SubFiles>
                              <FileItem
                                icon={Cpu}
                                gitStatus="untracked"
                                onClick={() => handleSelectProject("samriddhi-fintech")}
                                className={
                                  selectedProjectId === "samriddhi-fintech"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "সমৃদ্ধি ফিনটেক প্ল্যাটফর্ম" : "Samriddhi FinTech Platform"}
                              </FileItem>
                            </SubFiles>
                          </FolderContent>
                        </FolderItem>
                      </SubFiles>
                    </FolderContent>
                  </FolderItem>

                  {/* ======================================================== */}
                  {/* MAIN FOLDER 3: BUSINESS & AGENCY WEBSITES                */}
                  {/* ======================================================== */}
                  <FolderItem value="business-agency-websites">
                    <FolderTrigger>
                      <span className="font-semibold text-foreground">
                        {language === "bn" ? "বিজনেস ও এজেন্সি ওয়েবসাইট" : "Business & Agency Portals"}
                      </span>
                    </FolderTrigger>

                    <FolderContent>
                      <SubFiles>
                        {/* Sub-folder 3.1: Cyber Security */}
                        <FolderItem value="business-security">
                          <FolderTrigger gitStatus="modified">
                            <span className="text-foreground/90 font-medium">
                              {language === "bn" ? "সাইবার সিকিউরিটি" : "Cybersecurity Portals"}
                            </span>
                          </FolderTrigger>
                          <FolderContent>
                            <SubFiles>
                              <FileItem
                                icon={ShieldCheck}
                                gitStatus="modified"
                                onClick={() => handleSelectProject("techvrs-security")}
                                className={
                                  selectedProjectId === "techvrs-security"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "টেকভিআরএস সিকিউরিটি হাব" : "Techvrs Security Hub"}
                              </FileItem>
                            </SubFiles>
                          </FolderContent>
                        </FolderItem>

                        {/* Sub-folder 3.2: Editorial & Portfolio */}
                        <FolderItem value="business-editorial">
                          <FolderTrigger>
                            <span className="text-foreground/90 font-medium">
                              {language === "bn" ? "এডিটোরিয়াল ও পোর্টফোলিও" : "Editorial & Portfolios"}
                            </span>
                          </FolderTrigger>
                          <FolderContent>
                            <SubFiles>
                              <FileItem
                                icon={Globe}
                                onClick={() => handleSelectProject("mohaimin-portfolio")}
                                className={
                                  selectedProjectId === "mohaimin-portfolio"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "মহাইমিন পাটোয়ারী পোর্টফোলিও" : "Mohaimin Patwary Portfolio"}
                              </FileItem>

                              <FileItem
                                icon={BookOpen}
                                onClick={() => handleSelectProject("okkhor-pathagar")}
                                className={
                                  selectedProjectId === "okkhor-pathagar"
                                    ? "bg-accent/20 text-accent font-semibold"
                                    : ""
                                }
                              >
                                {language === "bn" ? "অক্ষর পাঠাগার আর্কাইভ" : "Okkhor Pathagar Library"}
                              </FileItem>
                            </SubFiles>
                          </FolderContent>
                        </FolderItem>
                      </SubFiles>
                    </FolderContent>
                  </FolderItem>
                </Files>

                {/* Tree legend with friendly terms */}
                <div className="mt-8 p-3 rounded-xl border border-border/40 bg-card/60 text-xs text-muted-foreground space-y-2">
                  <div className="font-semibold text-foreground text-[11px] uppercase tracking-wider">
                    {language === "bn" ? "স্ট্যাটাস ইন্ডিকেটর" : "Project Status"}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{language === "bn" ? "নতুন সমাপ্ত কাজ (New)" : "Recently Completed"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span>{language === "bn" ? "লাইভ আপডেট করা কাজ (Live)" : "Live Production Maintained"}</span>
                  </div>
                </div>
              </div>

              {/* ── RIGHT COLUMN: RICH PROJECT DETAILS, IMAGE & ACTION LINKS ────────── */}
              {/* Responsive: 1899px widescreen uses optimal 2-col side-by-side; mobile uses full-width */}
              <div
                className={`lg:col-span-8 2xl:col-span-8.5 p-4 sm:p-6 lg:p-8 2xl:p-10 flex flex-col justify-between bg-card overflow-y-auto ${
                  mobileTab === "details" ? "block" : "hidden lg:block"
                }`}
              >
                <div className="space-y-6 2xl:space-y-8">
                  {/* Top Bar with Project Status and Country/Year */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border/40">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {language === "bn" ? activeProject.statusBn : activeProject.status}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {activeProject.metrics.clientCountry} • {activeProject.metrics.completionYear}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-accent font-semibold">
                      {language === "bn" ? activeProject.subCategoryLabelBn : activeProject.subCategoryLabel}
                    </div>
                  </div>

                  {/* Project Title and Live Action Buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-tight text-foreground">
                        {language === "bn" ? activeProject.nameBn : activeProject.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {language === "bn" ? activeProject.categoryLabelBn : activeProject.categoryLabel} ›{" "}
                        {language === "bn" ? activeProject.subCategoryLabelBn : activeProject.subCategoryLabel}
                      </p>
                    </div>

                    {/* Direct Live Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs sm:text-sm font-semibold shadow hover:brightness-110 transition-all hover:-translate-y-0.5"
                        >
                          <span>{language === "bn" ? "লাইভ সাইট দেখুন" : "Visit Live Site"}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}

                      {activeProject.isPrivate && (
                        <span className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs sm:text-sm font-semibold">
                          <Lock className="h-4 w-4" />
                          <span>{language === "bn" ? "প্রাইভেট ক্লায়েন্ট সিস্টেম (প্রিভিউ)" : "Private Enterprise Client (Preview)"}</span>
                        </span>
                      )}

                      {activeProject.caseStudyUrl && (
                        <Link
                          to={activeProject.caseStudyUrl}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-border/80 bg-secondary/80 text-foreground text-xs sm:text-sm font-semibold hover:bg-secondary transition-all"
                        >
                          <span>{language === "bn" ? "কেস স্টাডি" : "Case Study"}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* 1899px Widescreen Split Layout: Left side big media, Right side specs & details */}
                  <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 2xl:gap-8 items-start">
                    {/* Media Column (Takes full width on tablet/laptop, 7 cols on 1899px wide displays) */}
                    <div className="2xl:col-span-7 space-y-4">
                      {/* Main Project Image/Video Preview with Autoplay and Auto-Slider */}
                      <div className="relative rounded-2xl border border-border/60 overflow-hidden bg-secondary/30 group shadow-md">
                        {activeProject.video ? (
                          <div className="relative w-full h-56 sm:h-72 md:h-84 2xl:h-[420px] bg-black flex items-center justify-center">
                            <video
                              src={activeProject.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              controls
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : activeProject.images && activeProject.images.length > 1 ? (
                          <AutoMediaPreview
                            images={activeProject.images}
                            alt={activeProject.name}
                            aspectRatio="aspect-auto"
                            className="w-full h-56 sm:h-72 md:h-84 2xl:h-[420px]"
                          />
                        ) : (
                          <img
                            src={activeProject.image}
                            alt={activeProject.name}
                            className="w-full h-56 sm:h-72 md:h-84 2xl:h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                        {/* Bottom Overlay inside image */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 text-white pointer-events-none z-20">
                          <div className="text-xs font-medium backdrop-blur-md bg-black/60 px-3 py-1.5 rounded-lg border border-white/20">
                            {activeProject.techStack.join(" • ")}
                          </div>
                          <div className="text-xs font-bold backdrop-blur-md bg-emerald-500/90 text-white px-2.5 py-1 rounded-lg shadow">
                            Lighthouse: {activeProject.metrics.lighthouse}/100
                          </div>
                        </div>
                      </div>

                      {/* Performance Bar */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                        <div className="p-3 rounded-xl border border-border/40 bg-secondary/20 text-center">
                          <Gauge className="h-4 w-4 text-accent mx-auto mb-1" />
                          <div className="text-[11px] text-muted-foreground">Mobile Speed</div>
                          <div className="text-xs sm:text-sm font-bold font-mono text-foreground mt-0.5">
                            {activeProject.metrics.speed}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl border border-border/40 bg-secondary/20 text-center">
                          <Star className="h-4 w-4 text-amber-400 mx-auto mb-1" />
                          <div className="text-[11px] text-muted-foreground">Lighthouse</div>
                          <div className="text-xs sm:text-sm font-bold font-mono text-foreground mt-0.5">
                            {activeProject.metrics.lighthouse}/100
                          </div>
                        </div>

                        <div className="p-3 rounded-xl border border-border/40 bg-secondary/20 text-center">
                          <CreditCard className="h-4 w-4 text-emerald-500 mx-auto mb-1" />
                          <div className="text-[11px] text-muted-foreground">Payments</div>
                          <div className="text-xs sm:text-sm font-bold text-foreground mt-0.5">
                            bKash / Nagad
                          </div>
                        </div>

                        <div className="p-3 rounded-xl border border-border/40 bg-secondary/20 text-center">
                          <Truck className="h-4 w-4 text-accent mx-auto mb-1" />
                          <div className="text-[11px] text-muted-foreground">Logistics</div>
                          <div className="text-xs sm:text-sm font-bold text-foreground mt-0.5">
                            Pathao / Steadfast
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content & Details Column (Takes 5 cols on 1899px wide displays) */}
                    <div className="2xl:col-span-5 space-y-5">
                      {/* Description & Overview */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                          {language === "bn" ? "প্রজেক্টের বিবরণ" : "Project Overview"}
                        </h4>
                        <p className="text-sm sm:text-base 2xl:text-lg text-foreground/90 leading-relaxed">
                          {language === "bn" ? activeProject.descriptionBn : activeProject.description}
                        </p>
                      </div>

                      {/* Challenge & Solution Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1 gap-3 sm:gap-4">
                        <div className="p-3.5 sm:p-4 rounded-xl border border-border/40 bg-secondary/20">
                          <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold mb-1">
                            {language === "bn" ? "চ্যালেঞ্জ" : "The Challenge"}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {activeProject.challenge}
                          </p>
                        </div>

                        <div className="p-3.5 sm:p-4 rounded-xl border border-border/40 bg-secondary/20">
                          <div className="text-xs uppercase tracking-wider text-emerald-500 font-semibold mb-1">
                            {language === "bn" ? "আমাদের সমাধান" : "ArtX Solution"}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {activeProject.solution}
                          </p>
                        </div>
                      </div>

                      {/* Key Features & Deliverables */}
                      <div className="space-y-2.5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                          {language === "bn" ? "কী কী ফিচার তৈরি করা হয়েছে" : "Key Deliverables & Built Features"}
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {activeProject.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border/40 bg-secondary/15 text-xs sm:text-sm text-foreground/90"
                            >
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>
                      {language === "bn"
                        ? "ভেরিফায়েড প্রোডাকশন ডেলিভারি • ক্লায়েন্ট অনুমোদিত"
                        : "Production Verified Deliverable • Client Approved"}
                    </span>
                  </div>

                  <Link
                    to="/contact"
                    className="text-accent hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>{language === "bn" ? "অনুরূপ ওয়েবসাইট তৈরি করতে চান?" : "Want a similar build?"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: Category Card Gallery (4 cols on 1899px laptop, 1 on mobile) ── */}
      <section className="px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 py-16 sm:py-20 border-b border-border/40 bg-secondary/15">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1780px]">
          <div className="mb-10 sm:mb-12 text-center max-w-2xl 2xl:max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold tracking-tight">
              {language === "bn" ? "ক্যাটাগরি অনুযায়ী প্রজেক্টসমূহ" : "Explore All Completed Works"}
            </h2>
            <p className="mt-3 text-xs sm:text-base 2xl:text-lg text-muted-foreground">
              {language === "bn"
                ? "আমাদের তৈরি হাই-কনভার্টিং ইকমার্স স্টোর, কাস্টম উকমার্স সাইট এবং ড্যাশবোর্ডগুলোর ভিজ্যুয়াল গ্যালারি।"
                : "Direct gallery showcase of our high-converting e-commerce builds, custom WooCommerce portals, and SaaS dashboards."}
            </p>
          </div>

          {/* Grid adapts to 4 columns on 1899px, 3 on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-6 2xl:gap-8">
            {Object.values(WORKED_PROJECTS).map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedProjectId(item.id);
                  setMobileTab("details");
                  if (workspaceRef.current) {
                    workspaceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`group rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col justify-between ${
                  selectedProjectId === item.id
                    ? "border-accent bg-accent/5 ring-1 ring-accent/30 shadow-md"
                    : "border-border/60 bg-card hover:border-accent/50 hover:bg-secondary/40 shadow-sm"
                }`}
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/20">
                      {item.metrics.speed}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="text-[11px] font-medium text-accent uppercase tracking-wider mb-1">
                      {language === "bn" ? item.subCategoryLabelBn : item.subCategoryLabel}
                    </div>
                    <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {language === "bn" ? item.nameBn : item.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {language === "bn" ? item.descriptionBn : item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0 flex items-center justify-between border-t border-border/30 mt-3 pt-3 text-xs">
                  <span className="text-muted-foreground font-medium">
                    {language === "bn" ? item.categoryLabelBn : item.categoryLabel}
                  </span>
                  <span className="text-accent font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>{language === "bn" ? "বিস্তারিত দেখুন" : "View Details"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Why Workproof Matters ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 py-16 sm:py-20 border-b border-border/40">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1780px]">
          <div className="text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold tracking-tight">
              {language === "bn" ? "কেন কাজের স্বচ্ছতা জরুরি?" : "Why Proof of Work Matters"}
            </h2>
            <p className="mt-3 text-xs sm:text-base 2xl:text-lg text-muted-foreground">
              {language === "bn"
                ? "কেন সাধারণ এজেন্সির ৭০% প্রজেক্ট পরবর্তীতে মেইনটেইন করা যায় না? দেখুন সাধারণ এজেন্সি বনাম ArtX স্টুডিওর কোয়ালিটি পার্থক্য।"
                : "Why do 70% of outsourced digital projects fail or become unmaintainable? See the difference between traditional agencies and ArtX Studio's engineering standard."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-12 max-w-5xl 2xl:max-w-6xl mx-auto">
            {/* Typical Agency */}
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-6 sm:p-8 2xl:p-10">
              <div className="text-xs sm:text-sm font-mono uppercase text-rose-500 font-semibold mb-2">
                Typical Outsourced Agency
              </div>
              <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold mb-4">The "Black Box" Trap</h3>
              <ul className="space-y-3 text-xs sm:text-sm 2xl:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Delivers an unmaintainable ZIP file with 40+ unverified plugins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Opaque git history; no automated tests or linting standards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Slow load times (6s+ LCP) hurting Google rankings and conversions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Agency retains hostage access or disappears when bugs arise.</span>
                </li>
              </ul>
            </div>

            {/* ArtX Studio Workproof */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8 2xl:p-10 relative">
              <div className="absolute top-4 right-4 text-xs font-mono font-semibold px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">
                Guaranteed Standard
              </div>
              <div className="text-xs sm:text-sm font-mono uppercase text-emerald-500 font-semibold mb-2">
                ArtX Studio Standard
              </div>
              <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold mb-4">Transparent Engineering</h3>
              <ul className="space-y-3 text-xs sm:text-sm 2xl:text-base text-foreground/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Full repository transfer to your GitHub/GitLab account from day one.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>100% TypeScript strict mode, clean modular component trees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Sub-2.0s Core Web Vitals guaranteed in the contract.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Enterprise security audits delivered with partner Techvrs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Final Call to Action ──────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 py-20 sm:py-24 2xl:py-28 bg-card/40">
        <div className="mx-auto max-w-4xl 2xl:max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl font-bold tracking-tight">
            {language === "bn"
              ? "আপনার পরবর্তী প্রজেক্টে এই মানের কাজ চান?"
              : "Ready for verifiable, high-craft engineering?"}
          </h2>
          <p className="mt-4 text-sm sm:text-lg 2xl:text-xl text-muted-foreground max-w-2xl 2xl:max-w-3xl mx-auto">
            {language === "bn"
              ? "চলুন আলোচনা করি। আপনার প্রজেক্টের রিকোয়ারমেন্ট অনুযায়ী আমরা কাস্টম আর্কিটেকচার, অটোমেটেড পেমেন্ট ও সম্পূর্ণ স্বচ্ছ ডেলিভারি নিশ্চিত করব।"
              : "Whether you need a high-converting Next.js e-commerce storefront, a custom-crafted WooCommerce build, or an executive dashboard, ArtX delivers code you'll be proud to own."}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg hover:brightness-110 transition-all hover:-translate-y-0.5"
            >
              <span>{language === "bn" ? "প্রজেক্ট শুরু করুন" : "Start Your Project"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
            >
              <span>{language === "bn" ? "কেস স্টাডি দেখুন" : "View Case Studies"}</span>
            </Link>

            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
            >
              <span>{language === "bn" ? "প্রাইসিং প্যাকেজ" : "View Pricing"}</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
