import type { ServiceFaq, ProcessStep } from "./site";

export type LocationDetail = {
  slug: string;
  city: string;
  country: string;
  targetKeyword: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  subheading: string;
  intro: string;
  marketOverview: {
    title: string;
    description: string;
    points: string[];
  };
  servicesProvided: {
    title: string;
    description: string;
    link: string;
  }[];
  whyLocalMatters: {
    title: string;
    description: string;
  }[];
  localPricingHighlights: {
    tier: string;
    price: string;
    description: string;
    highlights: string[];
  }[];
  process: ProcessStep[];
  faqs: ServiceFaq[];
};

export const locationDetails: LocationDetail[] = [
  {
    slug: "dhaka",
    city: "Dhaka",
    country: "Bangladesh",
    targetKeyword: "web design agency Dhaka",
    seoTitle: "Web Design Agency Dhaka | Custom Websites & SEO | ArtX",
    metaDescription: "Looking for a top web design agency in Dhaka? ArtX delivers custom websites, e-commerce stores & SEO tailored for Dhaka businesses. Call +8801645441584!",
    h1: "Top Web Design Agency in Dhaka, Bangladesh",
    subheading: "High-performance digital products engineered for Dhaka's most ambitious businesses, startups, and enterprises.",
    intro: "ArtX is an independent digital product studio crafting high-converting, lightning-fast websites in Dhaka. From fast-growing tech startups in Banani and Gulshan to established corporate headquarters in Motijheel and Uttara, we build digital flagships that convert visitors into paying clients.",
    marketOverview: {
      title: "Why Dhaka Businesses Need Modern Web Architecture in 2025",
      description: "Dhaka is one of the fastest-growing commercial hubs in South Asia. Over 80% of local customer discovery now happens on mobile devices over 4G/5G connections. If your website takes more than 3 seconds to load, uses outdated templates, or fails to provide seamless bKash/Nagad payments, your prospective clients will bounce to your competitors.",
      points: [
        "Mobile-first consumer behavior across Gulshan, Banani, Dhanmondi, and Uttara.",
        "Crucial need for Core Web Vitals optimization to win competitive local Google search rankings.",
        "Frictionless integration of local payment gateways (bKash, Nagad, Rocket, SSLCommerz).",
        "Clean, modern UI/UX design that elevates brand authority above template competitors."
      ]
    },
    servicesProvided: [
      {
        title: "E-Commerce Website Design",
        description: "Bespoke online stores built for high conversion, WhatsApp ordering, and instant MFS payment processing.",
        link: "/services/ecommerce-website-design"
      },
      {
        title: "Custom WordPress Development",
        description: "Hardened, custom-built WordPress themes with zero plugin bloat and 95+ Google PageSpeed scores.",
        link: "/services/wordpress-development"
      },
      {
        title: "SaaS & Web Application UI/UX",
        description: "Editorial-grade product interfaces and design systems for Dhaka software companies and international clients.",
        link: "/services/saas-website-design"
      },
      {
        title: "Technical & Local SEO Services",
        description: "Dominate Dhaka local search packs and organic Google rankings with structured data and content architecture.",
        link: "/services/seo-services"
      }
    ],
    whyLocalMatters: [
      {
        title: "Deep Understanding of Dhaka's Consumer Psychology",
        description: "We know what drives conversions in Bangladesh: clear pricing, social proof, WhatsApp contact prompts, and localized trust triggers."
      },
      {
        title: "Direct Communication & Rapid Turnaround",
        description: "Operate in the same time zone (GMT+6) with direct access to senior designers and developers via WhatsApp, phone, and video calls."
      },
      {
        title: "Flexible Local Payment Terms",
        description: "Pay conveniently through local bank transfer, bKash Merchant, or milestone-based contracts with transparent VAT invoicing."
      }
    ],
    localPricingHighlights: [
      {
        tier: "Basic Package",
        price: "৳3,500",
        description: "Ideal for Dhaka micro-businesses, personal portfolios, and emerging boutiques.",
        highlights: ["Unlimited Pages", "Product Control Panel", "WhatsApp Checkout", "Full On-Page SEO", "Free Subdomain + Hosting"]
      },
      {
        tier: "Premium Package",
        price: "৳6,500",
        description: "Our most popular package for Dhaka SMEs, corporate brands, and online retailers.",
        highlights: ["Custom Domain + Hosting", "Full Custom Admin Dashboard", "Order & Inventory Management", "Core Web Vitals Optimized"]
      },
      {
        tier: "Ultra Package",
        price: "৳9,500",
        description: "Comprehensive scaling tier with full-funnel custom design, security hardening, and priority support.",
        highlights: ["All-in-One Custom Solution", "Advanced Animations & UI", "Priority 24/7 Support", "Technical SEO Architecture"]
      }
    ],
    process: [
      {
        step: "01",
        title: "Local Discovery & Strategy",
        description: "We analyze your Dhaka competitors, target demographics, and commercial objectives to blueprint the ideal site architecture."
      },
      {
        step: "02",
        title: "High-Craft Figma Design",
        description: "We craft custom, responsive UI designs with typography and visuals tailored to command trust and drive conversions."
      },
      {
        step: "03",
        title: "Production Engineering",
        description: "We code your website using modern React/TanStack or clean WordPress, integrating bKash/Nagad and technical SEO schema."
      },
      {
        step: "04",
        title: "Launch & Local Search Indexing",
        description: "We deploy to high-speed CDN servers, submit your XML sitemap to Google Search Console, and verify local Dhaka indexing."
      }
    ],
    faqs: [
      {
        q: "What makes ArtX the best web design agency in Dhaka?",
        a: "ArtX combines 10 years of international craft with deep local market insight. Unlike traditional Dhaka agencies that rely on pirated WordPress themes, we build clean, production-grade custom websites with Core Web Vitals < 2.5s, guaranteed mobile responsiveness, and built-in technical SEO that drives real business revenue."
      },
      {
        q: "How much does web design cost in Dhaka, Bangladesh?",
        a: "Website design in Dhaka typically ranges from ৳3,500 for entry-level landing pages up to ৳70,000+ for custom corporate portals and bespoke e-commerce platforms. ArtX offers transparent packages starting at ৳3,500 (Basic), ৳6,500 (Premium), and ৳9,500 (Ultra), as well as custom enterprise quotes."
      },
      {
        q: "Can you integrate bKash, Nagad, and local Bangladeshi payment gateways?",
        a: "Yes. We integrate direct WhatsApp ordering, bKash Merchant, Nagad, Rocket, and automated payment aggregators like SSLCommerz and Shurjopay for seamless instant transactions in Bangladeshi Taka (BDT)."
      },
      {
        q: "How long does it take to design and launch a website in Dhaka?",
        a: "Standard business websites are typically delivered in 5 to 10 business days. Custom e-commerce and complex web applications require 2 to 4 weeks depending on the required features, custom integrations, and content readiness."
      },
      {
        q: "Do you provide ongoing website maintenance and SEO support in Dhaka?",
        a: "Yes. Every website we build includes post-launch warranty and technical support. We also provide monthly SEO retainers, security hardening via Techvrs, and content management packages to ensure your site continues ranking at the top of Google Dhaka results."
      }
    ]
  },
  {
    slug: "bangladesh",
    city: "Nationwide",
    country: "Bangladesh",
    targetKeyword: "web design company Bangladesh",
    seoTitle: "Web Design Company Bangladesh | Creative Digital Studio",
    metaDescription: "ArtX is a premier web design company in Bangladesh. We build fast, high-converting websites for local businesses, exporters & startups. Book a free call!",
    h1: "Premier Web Design Company in Bangladesh",
    subheading: "World-class digital experiences built in Bangladesh for local market leaders, RMG exporters, and global tech brands.",
    intro: "ArtX is a premier web design and development company founded in Bangladesh. Over the past decade, we have completed 950+ projects across 4 continents. We empower Bangladeshi enterprises, manufacturers, e-commerce retailers, and service providers with websites that stand shoulder-to-shoulder with global industry leaders.",
    marketOverview: {
      title: "Transforming Bangladesh's Digital Business Landscape",
      description: "As Smart Bangladesh takes shape, digital presence is no longer optional. Whether you are an RMG manufacturer in Gazipur, an IT startup in Chittagong, a resort in Sylhet, or an e-commerce retailer serving customers nationwide, your website is your most valuable 24/7 sales representative.",
      points: [
        "Rapid digitization with over 130 million active mobile internet subscriptions across Bangladesh.",
        "Exponential growth in digital commerce requiring robust, high-traffic web infrastructure.",
        "Rising international demand for Bangladeshi export manufacturers requiring professional English digital storefronts.",
        "Increased consumer reliance on Google search and AI answer engines for service provider verification."
      ]
    },
    servicesProvided: [
      {
        title: "E-Commerce Website Development",
        description: "Full-stack online stores engineered for high volume traffic, automated courier API integration, and MFS payments.",
        link: "/services/ecommerce-website-design"
      },
      {
        title: "Custom Web Application Engineering",
        description: "Ultra-fast React and TanStack web applications designed for scale, maximum security, and sub-second load times.",
        link: "/services/saas-website-design"
      },
      {
        title: "WordPress & CMS Solutions",
        description: "Tailored WordPress development designed for effortless content publishing, bulletproof security, and fast speed.",
        link: "/services/wordpress-development"
      },
      {
        title: "Search Engine Optimization (SEO & GEO)",
        description: "Top-ranking search strategies combining technical speed, schema markup, and Generative Engine Optimization.",
        link: "/services/seo-services"
      }
    ],
    whyLocalMatters: [
      {
        title: "Proven 10-Year Track Record",
        description: "Established in 2016 with over 950 completed websites and a 98% client retention rate across B2B, SaaS, and retail."
      },
      {
        title: "Full-Stack Security with Techvrs",
        description: "Our exclusive partnership with Techvrs ensures your website is protected against DDoS attacks, malware, and database breaches."
      },
      {
        title: "Bilingual Capabilities (Bangla + English)",
        description: "Seamless multilingual websites with elegant Bangla typography (Noto Serif Bengali) and fluent international English."
      }
    ],
    localPricingHighlights: [
      {
        tier: "Basic Starter",
        price: "৳3,500",
        description: "For new businesses and entrepreneurs across Bangladesh launching their online presence.",
        highlights: ["Unlimited Pages", "Control Panel", "WhatsApp Payment Redirect", "Complete On-Page SEO", "Free Hosting Included"]
      },
      {
        tier: "Business Premium",
        price: "৳6,500",
        description: "The complete package for growing companies wanting domain ownership and full control.",
        highlights: ["Custom .com/.xyz/.top Domain", "High-Speed SSD Hosting", "Custom Admin Dashboard", "Order Management"]
      },
      {
        tier: "Enterprise Ultra",
        price: "৳9,500",
        description: "Maximum performance, custom design features, and priority technical support.",
        highlights: ["All-in-One Solution", "High-End UX/UI", "24/7 Priority Assistance", "Advanced Speed & Security Tuning"]
      }
    ],
    process: [
      {
        step: "01",
        title: "Strategic Consultation",
        description: "We review your commercial model, customer base across Bangladesh, and define conversion goals."
      },
      {
        step: "02",
        title: "Bespoke Design System",
        description: "We craft an editorial-grade design system tailored to elevate your brand perception and maximize user trust."
      },
      {
        step: "03",
        title: "Engineering & Local Integrations",
        description: "We build your site with clean code, integrate courier and MFS APIs (bKash/Nagad), and test across all devices."
      },
      {
        step: "04",
        title: "Deployment & Search Optimization",
        description: "We launch your website, configure Google Analytics & Search Console, and submit structured data for instant indexing."
      }
    ],
    faqs: [
      {
        q: "Why should I choose ArtX over other web design companies in Bangladesh?",
        a: "ArtX is an established studio with 10 years of experience, 950+ shipped projects, and senior-only talent. Unlike typical agencies that use bloated off-the-shelf templates that break and score poorly on Google, we engineer custom, lightweight, high-ranking websites backed by an enterprise security partnership with Techvrs."
      },
      {
        q: "Can businesses outside Dhaka work with ArtX?",
        a: "Absolutely. We work with clients across all 64 districts of Bangladesh—including Chittagong, Sylhet, Rajshahi, Khulna, and Gazipur—as well as international clients in North America, Europe, and Asia. Our remote-first workflow makes collaboration smooth via WhatsApp, Google Meet, and phone."
      },
      {
        q: "How does ArtX ensure my website ranks on Google in Bangladesh?",
        a: "Every website we build is crafted around Google's Core Web Vitals standards. We configure complete on-page SEO, JSON-LD Schema markup (LocalBusiness, Organization, Service, FAQPage), mobile optimization, XML sitemaps, and proper semantic heading hierarchy from day one."
      },
      {
        q: "What payment methods do you accept for website projects in Bangladesh?",
        a: "We accept all major Bangladeshi payment methods, including bKash, Nagad, Rocket, Bank Wire/EFT, and international credit cards. Standard terms are 50% advance to start the project and 50% upon final sign-off and deployment."
      },
      {
        q: "Do I get full ownership of my website and domain?",
        a: "Yes! You receive 100% full ownership of your custom domain name, web hosting access, database, and all source code upon project completion. There are never any lock-in contracts or hidden licensing fees."
      }
    ]
  }
];
