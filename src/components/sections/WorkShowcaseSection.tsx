import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Link as LinkIcon, Lock } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { AutoMediaPreview } from "@/components/ui/AutoMediaPreview";

// Imported showcase assets matching reference UI + additional real workproof assets
import imgMetricra from "@/assets/showcase-metricra.jpg";
import imgFinmain from "@/assets/showcase-finmain.jpg";
import imgLevelUp from "@/assets/showcase-levelup.jpg";
import imgLeads from "@/assets/showcase-leads.jpg";
import imgAether from "@/assets/showcase-aether.jpg";
import imgImperium from "@/assets/showcase-imperium.jpg";
import imgFashion from "@/assets/showcase-fashion.jpg";
import imgCyber from "@/assets/showcase-cyber.jpg";
import imgSamriddhi from "@/assets/Samriddhi.png";
import imgTechvrs from "@/assets/Techvrs-security.png";
import imgMohaimin from "@/assets/Mohaimin Patwary.png";
import imgOkkhor from "@/assets/Okkhor Pathagar.png";

export interface ShowcaseProject {
  id: string;
  title: string;
  titleBn: string;
  category: string;
  categoryBn: string;
  image?: string;
  images?: string[];
  video?: string;
  url?: string;
  caseStudyUrl?: string;
  isLiveExternal?: boolean;
  isPrivate?: boolean;
  badge?: string;
  badgeBn?: string;
  description: string;
  descriptionBn: string;
}

export const ALL_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  // ─── VERIFIED WORK PROOFS & LIVE PRODUCTION SITES (PLACED AT TOP) ───────────
  {
    id: "biniyog-sme",
    title: "Biniyog Briddhi — SME Investment Portal",
    titleBn: "বিনিয়োগ বৃদ্ধি — ভেরিফায়েড SME ইনভেস্টমেন্ট",
    category: "Fintech & Investment",
    categoryBn: "ফিনটেক ও ইনভেস্টমেন্ট",
    video: "/desgins/binoyg/biniyog-video.mp4",
    images: [
      "/desgins/binoyg/binioyg.png",
      "/desgins/binoyg/biniyog.png",
      "/desgins/binoyg/biniyog (2).png",
      "/desgins/binoyg/biniyog.png1.png",
    ],
    url: "https://biniyogbriddhi.com/",
    caseStudyUrl: "/work/biniyogbriddhi",
    isLiveExternal: true,
    badge: "Live Production",
    badgeBn: "লাইভ প্রোডাকশন",
    description: "Live SME business investment and growth platform in Bangladesh with automated KYC, verified venture screening, investor dividend ledger, and financial telemetry.",
    descriptionBn: "যাচাইকৃত SME ব্যবসায় নিরাপদ বিনিয়োগ প্ল্যাটফর্ম। উদ্যোক্তা ও বিনিয়োগকারীদের জন্য রিয়েল-টাইম ড্যাশবোর্ড, KYC ও লাভ বন্টন ব্যবস্থা।",
  },
  {
    id: "bec-portal",
    title: "The BEC — Elite Skills Academy",
    titleBn: "দ্য বিইসি — স্কিলস ও একাডেমি পোর্টাল",
    category: "EdTech & Career",
    categoryBn: "এডটেক ও ক্যারিয়ার",
    video: "/desgins/bec/bec-preview.mp4",
    url: "https://www.thebec.site/",
    caseStudyUrl: "/work/thebec",
    isLiveExternal: true,
    badge: "Live Academy",
    badgeBn: "লাইভ একাডেমি",
    description: "Interactive skill development and education portal with live student admissions, course curricula, video lecture management, and modern onboarding.",
    descriptionBn: "প্রফেশনাল স্কিলস ট্রেইনিং ও এডুকেশন একাডেমি প্ল্যাটফর্ম। অনলাইন কোর্স তালিকা, স্টুডেন্ট এডমিশন এবং রিসোর্স হাব সহ।",
  },
  {
    id: "artstroy-studio",
    title: "ArtX Dev & ArtStory — Design & Engineering",
    titleBn: "আর্টএক্স দেব ও আর্টস্টোরি — ডিজাইন ও ইঞ্জিনিয়ারিং",
    category: "Digital Agency",
    categoryBn: "ক্রিয়েটিভ এজেন্সি",
    images: [
      "/desgins/artstroy/Screenshot_68.png",
      "/desgins/artstroy/Screenshot_69.png",
      "/desgins/artstroy/Screenshot_71.png",
    ],
    url: "https://www.artxdev.tech/",
    caseStudyUrl: "/work/artstroy",
    isLiveExternal: true,
    badge: "Official Studio",
    badgeBn: "অফিসিয়াল স্টুডিও",
    description: "High-performance digital studio flagship experience featuring responsive interactive layouts, case study showcases, and fluid editorial aesthetics.",
    descriptionBn: "আধুনিক ডিজিটাল পণ্য ও ওয়েবসাইটের জন্য তৈরি হাই-কনভার্সন ক্রিয়েটিভ ডিজাইন ও ডেভেলপমেন্ট স্টুডিও।",
  },
  {
    id: "ims-platform",
    title: "Techvrs IMS — Enterprise Multi-Warehouse ERP",
    titleBn: "টেকভার্স IMS — এন্টারপ্রাইজ ইনভেন্টরি ERP",
    category: "Enterprise ERP",
    categoryBn: "ইনভেন্টরি ও ERP",
    images: [
      "/desgins/ims/ims.png",
      "/desgins/ims/ims1.png",
      "/desgins/ims/Screenshot_82.png",
      "/desgins/ims/Screenshot_83.png",
      "/desgins/ims/Screenshot_84.png",
      "/desgins/ims/Screenshot_85.png",
      "/desgins/ims/Screenshot_86.png",
    ],
    url: "https://ims.techvrs.com/",
    caseStudyUrl: "/work/techvrs-ims",
    isLiveExternal: true,
    badge: "Live ERP",
    badgeBn: "লাইভ ERP",
    description: "Comprehensive multi-branch inventory management software featuring real-time stock telemetry, barcode scanning, automated purchase orders, and audit ledgers.",
    descriptionBn: "মাল্টি-ব্রাঞ্চ স্টক কন্ট্রোল, রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং ও সাপ্লাই চেইন ম্যানেজমেন্ট সিস্টেম।",
  },
  {
    id: "okkhor-library-live",
    title: "Okkhor Pathagar — Digital Public Archive",
    titleBn: "অক্ষর পাঠাগার — উন্মুক্ত ডিজিটাল লাইব্রেরি",
    category: "Digital Library",
    categoryBn: "ডিজিটাল লাইব্রেরি ও আর্কাইভ",
    images: [
      "/desgins/library/library.png",
      "/desgins/library/library3.png",
      "/desgins/library/livrary.png",
      "/desgins/library/Screenshot_62.png",
      "/desgins/library/Screenshot_67.png",
    ],
    url: "https://okkhorpathagar.com/",
    caseStudyUrl: "/work/okkhor-pathagar",
    isLiveExternal: true,
    badge: "Live Archive",
    badgeBn: "লাইভ লাইব্রেরি",
    description: "Non-profit community public library with catalog search, reader registration, book reservations, and online donation channels.",
    descriptionBn: "কমিউনিটি লাইব্রেরির জন্য অনলাইন বই সার্চ, ডিজিটাল মেম্বারশিপ ও অনলাইন ডোনেশন গেটওয়ে।",
  },
  {
    id: "tasneem-textile",
    title: "Tasneem Knit Industry — RMG Export Portal",
    titleBn: "তাসনিম নিট ইন্ডাস্ট্রি — গার্মেন্টস ও আরএমজি এক্সপোর্ট",
    category: "Industrial & Export",
    categoryBn: "ইন্ডাস্ট্রি ও ম্যানুফ্যাকচারিং",
    images: [
      "/desgins/tasneem/tasneem.png",
      "/desgins/tasneem/tasneem (2).png",
      "/desgins/tasneem/tasneem (3).png",
      "/desgins/tasneem/tasneem (4).png",
    ],
    url: "https://tasneemknitindustry.com/",
    caseStudyUrl: "/work/tasneemknit",
    isLiveExternal: true,
    badge: "Live Corporate",
    badgeBn: "লাইভ কর্পোরেট",
    description: "International buyer-facing portal for knitwear manufacturing, sustainable fabric sourcing, global compliance certifications, and RFQ workflows.",
    descriptionBn: "আন্তর্জাতিক বায়ারদের জন্য তৈরি কমপ্লায়েন্স-সার্টিফায়েড নিটওয়্যার ও গার্মেন্টস প্রস্তুতকারক প্রতিষ্ঠানের কর্পোরেট পোর্টাল।",
  },
  {
    id: "noor-solar",
    title: "Noor Solar Energy — Clean Tech Infrastructure",
    titleBn: "নূর সোলার এনার্জি — নবায়নযোগ্য শক্তি সলিউশন",
    category: "Renewable Energy",
    categoryBn: "নবায়নযোগ্য শক্তি",
    images: [
      "/desgins/nooor/httpnoorsolarencom.png",
      "/desgins/nooor/n.png",
      "/desgins/nooor/norr.png",
    ],
    url: "http://noorsolaren.com/",
    caseStudyUrl: "/work/noorsolaren",
    isLiveExternal: true,
    badge: "Live GreenTech",
    badgeBn: "গ্রিন এনার্জি",
    description: "Solar power EPC engineering platform featuring industrial rooftop PV systems, net metering estimations, and sustainability tracking.",
    descriptionBn: "শিল্প ও আবাসিক সোলার পিভি সিস্টেম, এনার্জি অডিট এবং গ্রিন পাওয়ার প্রজেক্ট শোকেস পোর্টাল।",
  },
  {
    id: "bengal-bulletin-news",
    title: "Bengal Bulletin — Edge-Powered News Portal",
    titleBn: "বেঙ্গল বুলেটিন — হাই-স্পিড ডিজিটাল নিউজ মিডিয়া",
    category: "News & Media",
    categoryBn: "নিউজ ও মিডিয়া",
    images: [
      "/desgins/news/news.png",
      "/desgins/news/news (2).png",
      "/desgins/news/news (3).png",
      "/desgins/news/news3.png",
      "/desgins/news/news3 (2).png",
    ],
    url: "https://bb.napaextra376.workers.dev/",
    caseStudyUrl: "/work/bengalbulletin",
    isLiveExternal: true,
    badge: "Live News",
    badgeBn: "লাইভ নিউজ পোর্টাল",
    description: "Cloudflare Edge-rendered online news portal built for sub-second breaking news delivery, zero downtime under viral traffic, and instant category filters.",
    descriptionBn: "ক্লাউডফ্লেয়ার এজ আর্কিটেকচারে তৈরি দ্রুতগতির অনলাইন নিউজ পোর্টাল। ইনস্ট্যান্ট ব্রেকিং নিউজ আপডেট সহ।",
  },
  {
    id: "freedom-plus",
    title: "Freedom Plus — Productivity & Workspace",
    titleBn: "ফ্রিডম প্লাস — প্রোডাক্টিভিটি ও ওয়ার্কস্পেস",
    category: "SaaS Application",
    categoryBn: "SaaS ও ওয়েব অ্যাপ",
    images: [
      "/desgins/fredom/ffreedom.png",
      "/desgins/fredom/ffreedom.png2.png",
    ],
    url: "https://freedomplus.lovable.app",
    caseStudyUrl: "/work/freedomplus",
    isLiveExternal: true,
    badge: "Live SaaS",
    badgeBn: "লাইভ SaaS",
    description: "Modern productivity web application offering collaborative team hubs, smart notifications, and streamlined project progress boards.",
    descriptionBn: "টিম কলাবোরেশন, টাস্ক ট্র্যাকিং এবং মসৃণ ইউজার এক্সপেরিয়েন্স সমৃদ্ধ আধুনিক SaaS ওয়েব অ্যাপ্লিকেশন।",
  },
  {
    id: "techvrs-platform-live",
    title: "Techvrs — Security Prompts & Threat Intelligence",
    titleBn: "টেকভার্স — সিকিউরিটি প্রম্পটস ও ডিফেন্স হাব",
    category: "Cybersecurity & AI",
    categoryBn: "সাইবার সিকিউরিটি ও AI",
    images: [
      "/desgins/techvrs/Screenshot_61.png",
      "/desgins/techvrs/Screenshot_63.png",
    ],
    url: "https://techvrs.com/pormts",
    caseStudyUrl: "/work/techvrs-security",
    isLiveExternal: true,
    badge: "Live Platform",
    badgeBn: "লাইভ প্ল্যাটফর্ম",
    description: "Cybersecurity prompts directory and threat intelligence platform designed for defensive engineers, CISOs, and security auditors.",
    descriptionBn: "এন্টারপ্রাইজ সিকিউরিটি প্রম্পটস, কমপ্লায়েন্স গাইডলাইন এবং সাইবার থ্রেট ডিফেন্স রিসোর্স হাব।",
  },
  {
    id: "tarek-portfolio",
    title: "TarekSec — Cyber Security Researcher",
    titleBn: "তারিক সিক — সাইবার সিকিউরিটি রিসার্চার",
    category: "Security Portfolio",
    categoryBn: "সিকিউরিটি ও রিসার্চ",
    images: [
      "/desgins/my-portfoli/portfolio.png",
      "/desgins/my-portfoli/Screenshot_64.png",
      "/desgins/my-portfoli/Screenshot_65.png",
      "/desgins/my-portfoli/Screenshot_66.png",
    ],
    url: "https://tareksec.dev/",
    caseStudyUrl: "/work/tareksec",
    isLiveExternal: true,
    badge: "Live Portfolio",
    badgeBn: "লাইভ পোর্টফোলিও",
    description: "Personal cybersecurity portfolio featuring bug bounty CVEs, security tooling, vulnerability writeups, and terminal aesthetics.",
    descriptionBn: "সাইবার সিকিউরিটি স্পেশালিস্ট ও এথিক্যাল হ্যাকারের প্রফেশনাল পোর্টফোলিও এবং রিসার্চ পাবলিকেশন।",
  },
  {
    id: "imran-blog",
    title: "Imran Khan — Thought Leadership & Blog",
    titleBn: "ইমরান খান — ডিজিটাল জার্নাল ও ব্লগ",
    category: "Editorial & Publications",
    categoryBn: "এডিটোরিয়াল ও ব্লগ",
    images: [
      "/desgins/New folder (3)/imran.png",
      "/desgins/New folder (3)/imran1.png",
    ],
    url: "https://imrankhanblog.netlify.app/",
    caseStudyUrl: "/work/imrankhanblog",
    isLiveExternal: true,
    badge: "Live Blog",
    badgeBn: "লাইভ ব্লগ",
    description: "Clean modern blog publication focused on technology insights, software architecture essays, and personal reflections.",
    descriptionBn: "মিনিমালিস্ট ও রিডার-ফার্স্ট এডিটোরিয়াল ব্লগ প্ল্যাটফর্ম। ক্যাটাগরি ফিল্টার এবং পরিচ্ছন্ন লেআউট সহ।",
  },

  // ─── PRIVATE ENTERPRISE PORTALS (PREVIEW ONLY) ──────────────────────────────
  {
    id: "trade-portal-b2b",
    title: "Global Trade Portal — B2B Logistics & Customs",
    titleBn: "গ্লোবাল ট্রেড পোর্টাল — B2B লজিস্টিকস (প্রাইভেট)",
    category: "Enterprise Trade (Private)",
    categoryBn: "এন্টারপ্রাইজ পোর্টাল (প্রাইভেট)",
    images: [
      "/desgins/treadportal/Screenshot_59.png",
      "/desgins/treadportal/Screenshot_60.png",
    ],
    isPrivate: true,
    badge: "Private Preview",
    badgeBn: "প্রাইভেট প্রিভিউ",
    description: "Confidential enterprise B2B trade management system, shipment tracking, and LC document processing. Private client system — preview images only.",
    descriptionBn: "কনফিডেনশিয়াল এন্টারপ্রাইজ B2B ট্রেড ও শিপমেন্ট ট্র্যাকিং পোর্টাল। ক্লায়েন্টের অভ্যন্তরীণ সিস্টেম হওয়ায় কেবল প্রিভিউ প্রদর্শিত হচ্ছে।",
  },

  // ─── EXISTING SHOWCASE DEMOS & CASE STUDIES (PRESERVED BELOW) ───────────────
  {
    id: "metricra-harbor",
    title: "Metricra — Harbor & Maritime SaaS",
    titleBn: "মেট্রিকরা — মেরিটাইম ও হারবার SaaS",
    category: "Cloud Infrastructure",
    categoryBn: "ক্লাউড প্ল্যাটফর্ম",
    image: imgMetricra,
    url: "/work/gearabout",
    description: "Heritage Mediterranean seaside etching art direction paired with clean minimalist cloud infrastructure telemetry.",
    descriptionBn: "ভূমধ্যসাগরীয় এচিং আর্ট ডিরেকশনের সাথে আধুনিক ক্লাউড সফটওয়্যার ইন্টারফেসের মেলবন্ধন।",
  },
  {
    id: "finmain-budget",
    title: "Finmain — Smart Spending Intelligence",
    titleBn: "ফিনমেইন — স্মার্ট স্পেন্ডিং ইন্টেলিজেন্স",
    category: "Fintech",
    categoryBn: "ফিনটেক",
    image: imgFinmain,
    url: "/work/finmain",
    description: "Surreal cloudscape aesthetic combining physical traffic light metaphors with live budget consumption telemetry and instant spending limits.",
    descriptionBn: "রিয়েল-টাইম ক্যাশফ্লো ও বাজেট নিয়ন্ত্রণের আকর্ষণীয় ভিজ্যুয়াল ড্যাশবোর্ড।",
  },
  {
    id: "levelup-lab",
    title: "Level Up Lab — AI Skills Ecosystem",
    titleBn: "লেভেল আপ ল্যাব — AI স্কিলস ইকোসিস্টেম",
    category: "EdTech & AI",
    categoryBn: "এডটেক ও AI",
    image: imgLevelUp,
    url: "/work/levelup",
    description: "Ultra-clean minimalist interactive curriculum with gamified challenge badges, role tracks, and community hubs.",
    descriptionBn: "গ্যামিফাইড চ্যালেঞ্জ ব্যাজ ও রোল-বেসড ট্র্যাক সহ মিনিমালিস্ট ও হাই-কনভার্সন লার্নিং প্ল্যাটফর্ম।",
  },
  {
    id: "metricra-growth",
    title: "Metricra — Qualified Pipeline Engine",
    titleBn: "মেট্রিকরা — কোয়ালিফাইড লিড পাইপলাইন",
    category: "B2B Marketing",
    categoryBn: "B2B মার্কেটিং",
    image: imgLeads,
    url: "/work/leads",
    description: "High-velocity B2B landing experience featuring floating interactive analytics cards, verified social proof badges, and instant calendaring.",
    descriptionBn: "ফ্লোটিং অ্যানালিটিক্স কার্ড, ভেরিফায়েড সোশ্যাল প্রুফ ও ইনস্ট্যান্ট ক্যালেন্ডার ইন্টিগ্রেশন।",
  },
  {
    id: "aether-exploration",
    title: "Aether — Cosmic Knowledge Engine",
    titleBn: "ইথার — কসমিক নলেজ ইঞ্জিন",
    category: "Generative AI",
    categoryBn: "জেনারেটিভ AI",
    image: imgAether,
    url: "/work/aether",
    description: "Atmospheric, deep-sea & planetary celestial UI with fluid organic animations and real-time generative intelligence.",
    descriptionBn: "গভীর সমুদ্র ও গ্রহের মায়াবী পরিবেশে তৈরি ফ্লুইড অর্গানিক ইন্টারফেস।",
  },
  {
    id: "imperium-ai",
    title: "Imperium — Autonomous AI Legion",
    titleBn: "ইম্পেরিয়াম — অটোনোমাস AI লেজিয়ন",
    category: "Multi-Agent System",
    categoryBn: "মাল্টি-এজেন্ট সিস্টেম",
    image: imgImperium,
    url: "/work/imperium",
    description: "Isometric 3D army art direction paired with high-throughput workflow orchestration controls and mission deployment.",
    descriptionBn: "আইসোমেট্রিক ৩ডি মিনিয়াচার স্টাইলের সাথে হাই-থ্রুপুট মাল্টি-এজেন্ট অর্কেস্ট্রেশন প্ল্যাটফর্ম।",
  },
  {
    id: "samriddhi-ecom",
    title: "Samriddhi — Agro & Organic Commerce",
    titleBn: "সমৃদ্ধি — এগ্রো ও অর্গানিক কমার্স",
    category: "E-Commerce",
    categoryBn: "ইকমার্স",
    image: imgSamriddhi,
    url: "/workproof",
    description: "High-volume organic agricultural products e-commerce platform with automated delivery logistics and payment tokenization.",
    descriptionBn: "অটোমেটেড পেমেন্ট ও ডেলিভারি লজিস্টিকস সহ সফলভাবে লাইভ থাকা ইকমার্স প্ল্যাটফর্ম।",
  },
  {
    id: "techvrs-platform",
    title: "Techvrs — Enterprise Cyber Defense",
    titleBn: "টেকভার্স — এন্টারপ্রাইজ সাইবার ডিফেন্স",
    category: "Cybersecurity",
    categoryBn: "সাইবার সিকিউরিটি",
    image: imgTechvrs,
    url: "/workproof",
    description: "Global attack surface monitoring portal with automated compliance scanners, threat vectors, and real-time vulnerability feeds.",
    descriptionBn: "রিয়েল-টাইম থ্রেট মনিটরিং ও গ্লোবাল সার্ভার অ্যাটাক সারফেস ড্যাশবোর্ড।",
  },
  {
    id: "cyber-radar",
    title: "Sentinel Cyber — Cloud Security Radar",
    titleBn: "সেন্টিনেল সাইবার — ক্লাউড সিকিউরিটি রাডার",
    category: "Cloud Telemetry",
    categoryBn: "ক্লাউড টেলিমেট্রি",
    image: imgCyber,
    url: "/workproof",
    description: "Dark mode high-density operations center featuring live server node maps, radar scanning sweeps, and zero-day threat metrics.",
    descriptionBn: "ডার্ক মোড হাই-ডেনসিটি অপারেশন সেন্টার ও গ্লোবাল নোড ট্র্যাকিং ড্যাশবোর্ড।",
  },
  {
    id: "luxury-fashion-store",
    title: "Aura Atelier — Luxury Apparel Store",
    titleBn: "অরা আতিলিয়ের — লাক্সারি ফ্যাশন স্টোরফ্রন্ট",
    category: "Next.js Storefront",
    categoryBn: "Next.js স্টোরফ্রন্ট",
    image: imgFashion,
    url: "/workproof",
    description: "Editorial luxury fashion e-commerce storefront with sliding slide-over cart drawers, responsive fit assistant, and micro-interactions.",
    descriptionBn: "এডিটরিয়াল লাক্সারি ফ্যাশন ইকমার্স স্টোরফ্রন্ট ও কুইক স্লাইড-আউট কার্ট ড্রয়ার।",
  },
  {
    id: "mohaimin-portfolio",
    title: "Mohaimin Patwary — Executive Portfolio",
    titleBn: "মহাইমিন পাটোয়ারী — এক্সিকিউটিভ পোর্টফোলিও",
    category: "Personal Brand",
    categoryBn: "পার্সোনাল ব্র্যান্ড",
    image: imgMohaimin,
    url: "/workproof",
    description: "Bespoke executive personal branding platform engineered for international speaking engagements, thought leadership, and venture advisory.",
    descriptionBn: "আন্তর্জাতিক স্পিকিং ও কনসালটেন্সির জন্য তৈরি এলিগ্যান্ট এক্সিকিউটিভ পোর্টফোলিও।",
  },
  {
    id: "okkhor-pathagar",
    title: "Okkhor Pathagar — Digital Cultural Archive",
    titleBn: "অক্ষর পাঠাগার — ডিজিটাল কালচারাল আর্কাইভ",
    category: "Culture & Archive",
    categoryBn: "কালচারাল আর্কাইভ",
    image: imgOkkhor,
    url: "/workproof",
    description: "Non-profit open digital library and cultural heritage archive preserving rare historical publications with full-text search.",
    descriptionBn: "ঐতিহাসিক প্রকাশনা ও পাণ্ডুলিপি সংরক্ষণের উন্মুক্ত ডিজিটাল লাইব্রেরি প্ল্যাটফর্ম।",
  },
];

export function WorkShowcaseSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [activeTab, setActiveTab] = useState<"works" | "pricing" | "contact">("works");
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  // Live ticking clock (HH:MM:SS) matching the reference UI
  const [time, setTime] = useState<string>("23:36:20");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#f4f4f2] dark:bg-[#0e0f11] py-6 sm:py-8 md:py-10 px-3 sm:px-5 lg:px-8 xl:px-10 transition-colors duration-300">
      <div className="mx-auto max-w-[1580px]">
        {/* Split 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* ─── LEFT COLUMN: Profile & Bio Card (Exact match to sample) ─────────────── */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-20">
            <div className="rounded-[28px] sm:rounded-[32px] bg-white dark:bg-[#18191c] border border-black/[0.06] dark:border-white/[0.08] p-7 sm:p-9 shadow-[0_2px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              
              <div>
                {/* Top Navigation Tabs */}
                <nav className="flex items-center gap-7 text-[15px]">
                  <button
                    type="button"
                    onClick={() => setActiveTab("works")}
                    className={`relative pb-1 transition-colors ${
                      activeTab === "works"
                        ? "text-neutral-900 dark:text-white font-medium"
                        : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                    }`}
                  >
                    {isBn ? "ওয়ার্কস" : "Works"}
                    {activeTab === "works" && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f95738]" />
                    )}
                  </button>

                  <Link
                    to="/pricing"
                    className="pb-1 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                  >
                    {isBn ? "প্রাইসিং" : "Pricing"}
                  </Link>

                  <Link
                    to="/contact"
                    className="pb-1 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                  >
                    {isBn ? "যোগাযোগ" : "Contact"}
                  </Link>
                </nav>

                {/* Available for new project Badge with Orange Asterisk */}
                <div className="mt-8 flex items-center gap-2 text-[14px] text-neutral-600 dark:text-neutral-300">
                  <span className="text-[#f95738] text-lg font-bold leading-none select-none">
                    ✱
                  </span>
                  <span>
                    {isBn ? "নতুন প্রজেক্টের জন্য প্রস্তুত" : "Available for new project"}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="mt-5 text-[28px] sm:text-[32px] md:text-[34px] font-semibold tracking-[-0.02em] text-neutral-900 dark:text-white leading-[1.16]">
                  {isBn
                    ? "ফাউন্ডারদের আইডিয়াকে চমৎকার সফল প্রোডাক্টে রূপান্তর করি"
                    : "Helping founders turn ideas into great products"}
                </h1>

                {/* Description Body */}
                <p className="mt-4 text-[14px] sm:text-[14.5px] text-neutral-500 dark:text-neutral-400 leading-[1.6]">
                  {isBn
                    ? "আমরা দূরদর্শী ফাউন্ডার ও প্রোডাক্ট টিমের সাথে ঘনিষ্ঠভাবে কাজ করে জটিল ধারণাকে সহজ, কনভার্সন-কেন্দ্রিক ও স্কেলযোগ্য ইন্টারফেসে রূপান্তর করি।"
                    : "I work with founders and product teams to shape complex ideas into simple, conversion-driven interfaces designed to grow with your product."}
                </p>

                {/* Book a call Pill Button */}
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#52525b] hover:bg-[#3f3f46] text-white px-5 py-2.5 text-[13px] font-medium transition-all shadow-sm"
                  >
                    <span>{isBn ? "কল বুক করুন" : "Book a call"}</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>

              {/* Dashed Separator Line */}
              <div className="my-7 border-t border-dashed border-neutral-200 dark:border-neutral-800" />

              {/* Meta Box with Graph Grid Pattern */}
              <div className="relative rounded-2xl p-5 border border-neutral-200/60 dark:border-neutral-800 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:16px_16px]">
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-[12px] text-neutral-400 dark:text-neutral-500">
                        Email
                      </div>
                      <a
                        href="mailto:contact@artxdev.tech"
                        className="text-[13px] font-normal text-neutral-900 dark:text-neutral-200 hover:text-[#f95738] transition-colors break-all"
                      >
                        contact@artxdev.tech
                      </a>
                    </div>

                    <div>
                      <div className="text-[12px] text-neutral-400 dark:text-neutral-500">
                        Links
                      </div>
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-normal text-neutral-900 dark:text-neutral-200 hover:text-[#f95738] transition-colors"
                      >
                        <span>X (Twitter)</span>
                        <LinkIcon className="h-3 w-3 text-neutral-500" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4 text-right flex flex-col justify-between">
                    <div>
                      <div className="text-[12px] text-neutral-400 dark:text-neutral-500">
                        Location
                      </div>
                      <div className="text-[13px] font-normal text-neutral-900 dark:text-neutral-200">
                        {isBn ? "ইউনাইটেড আরব আমিরাত" : "United Arab Emirates"}
                      </div>
                    </div>

                    {/* Real-time Live Clock */}
                    <div>
                      <div
                        suppressHydrationWarning
                        className="font-mono text-[13.5px] font-medium text-neutral-800 dark:text-neutral-300 tracking-wider"
                      >
                        {time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ─── RIGHT COLUMN: 2-Column Showcase Gallery ────────────────────────────── */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {ALL_SHOWCASE_PROJECTS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-[24px] sm:rounded-[28px] border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#18191c] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Clean Visual Card with Auto Video Autoplay and Image Auto-Slider */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <AutoMediaPreview
                      video={item.video}
                      images={item.images}
                      image={item.image}
                      alt={isBn ? item.titleBn : item.title}
                      aspectRatio="aspect-[4/3]"
                    />

                    {/* Top status badge if provided */}
                    {(item.badge || item.badgeBn) && (
                      <div className="absolute top-3 right-3 z-20 pointer-events-none">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-semibold backdrop-blur-md shadow-sm border ${
                          item.isPrivate
                            ? "bg-amber-500/80 text-white border-amber-400/30"
                            : "bg-black/60 text-emerald-400 border-emerald-500/30"
                        }`}>
                          {item.isPrivate && <Lock className="h-3 w-3" />}
                          {isBn ? item.badgeBn || item.badge : item.badge}
                        </span>
                      </div>
                    )}

                    {/* Smooth bottom title bar revealed on hover */}
                    <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between pointer-events-none">
                      <div>
                        <div className="text-[11px] font-medium text-neutral-300 uppercase tracking-wider">
                          {isBn ? item.categoryBn : item.category}
                        </div>
                        <div className="text-[14.5px] font-semibold">
                          {isBn ? item.titleBn : item.title}
                        </div>
                      </div>
                      <div className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-white flex items-center gap-1">
                        <span>
                          {item.isLiveExternal
                            ? isBn ? "লাইভ সাইট" : "Live Site"
                            : item.isPrivate
                            ? isBn ? "প্রাইভেট" : "Private"
                            : isBn ? "প্রিভিউ" : "Preview"}
                        </span>
                        <span>{item.isPrivate ? "🔒" : "↗"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ─── LIGHTBOX MODAL: Full Project View ──────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#18191c] border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 rounded-full bg-black/60 text-white p-2.5 hover:bg-black/80 transition-colors shadow-md"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Media Container: Autoplay Video or Auto-Sliding Images */}
              <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    autoPlay
                    loop
                    controls
                    className="h-full w-full object-contain bg-black"
                  />
                ) : selectedProject.images && selectedProject.images.length > 0 ? (
                  <AutoMediaPreview
                    images={selectedProject.images}
                    alt={isBn ? selectedProject.titleBn : selectedProject.title}
                    aspectRatio="aspect-[16/10]"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={isBn ? selectedProject.titleBn : selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              {/* Project Meta Information */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-[#f95738]">
                      {isBn ? selectedProject.categoryBn : selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                      {isBn ? selectedProject.titleBn : selectedProject.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {selectedProject.isLiveExternal && selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#f95738] hover:bg-[#ea4829] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition shadow-sm"
                      >
                        <span>{isBn ? "লাইভ সাইট ভিজিট করুন" : "Visit Live Website"}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {selectedProject.caseStudyUrl && (
                      <Link
                        to={selectedProject.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-4 py-2.5 text-xs sm:text-sm font-semibold hover:border-[#f95738] transition shadow-xs"
                      >
                        <span>{isBn ? "কেস স্টাডি ও এসইও" : "Case Study & SEO"}</span>
                        <span>→</span>
                      </Link>
                    )}

                    {!selectedProject.isLiveExternal && selectedProject.url && !selectedProject.caseStudyUrl && (
                      <Link
                        to={selectedProject.url}
                        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2.5 text-xs sm:text-sm font-semibold hover:opacity-90 transition shadow-sm"
                      >
                        <span>{isBn ? "কেস স্টাডি দেখুন" : "View Case Study"}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    )}

                    {selectedProject.isPrivate && (
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-semibold">
                        <Lock className="h-3.5 w-3.5" />
                        <span>{isBn ? "প্রাইভেট ক্লায়েন্ট সিস্টেম (প্রিভিউ অনলি)" : "Private Enterprise Client (Preview Only)"}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {isBn ? selectedProject.descriptionBn : selectedProject.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
