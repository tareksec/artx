import heroCollage from "@/assets/hero-collage.jpg";
import sDesign from "@/assets/service-design.jpg";
import sDev from "@/assets/service-dev.jpg";
import sSeo from "@/assets/service-seo.jpg";
import sSecurity from "@/assets/service-security.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import imgSamriddhi from "@/assets/Samriddhi.png";
import imgMohaimin from "@/assets/Mohaimin Patwary.png";
import imgTechvrs from "@/assets/Techvrs-security.png";
import imgOkkhor from "@/assets/Okkhor Pathagar.png";
// We will use a placeholder for piyash since we couldn't copy it over automatically.
// The user should place the generated image in src/assets/piyash.png
// import imgPiyash from "@/assets/piyash.png";

export type HeroContent = {
  eyebrow: string;
  credibility: string;
  headline: React.ReactNode;
  body: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  image: { src: string; alt: string };
};

export type Service = {
  n: string;
  t: string;
  d: string;
  img: string;
  link?: string;
  slug?: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  img: string;
  radii: string;
  challenge: string;
  solution: string;
  result: string;
  liveUrl?: string;
  clientUrl?: string;
  geoRegion?: string;
  geoCountry?: string;
  targetKeyword?: string;
  seoTitle?: string;
  metaDescription?: string;
  // Extended fields for detail pages
  fullDescription?: string;
  client?: string;
  industry?: string;
  timeline?: string;
  role?: string;
  techStack?: string[];
  processSteps?: ProcessStep[];
  gallery?: { src: string; alt: string }[];
  testimonial?: { quote: string; author: string; title: string };
  nextProject?: string;
  faqs?: { q: string; a: string; qBn?: string; aBn?: string }[];
};

export type ServiceFaq = {
  q: string;
  a: string;
  qBn?: string;
  aBn?: string;
};

export type ServiceDetail = {
  slug: string;
  n: string;
  t: string;
  d: string;
  img: string;
  valueProp: string;
  deliverables: string[];
  process: ProcessStep[];
  faqs: ServiceFaq[];
  relatedProjects: string[];
  link?: string;
  relatedPricing?: { name: string; description: string };
  seoTitle?: string;
  metaDescription?: string;
  targetKeyword?: string;
};

export { locationDetails, type LocationDetail } from "./locations";


export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  content: string;
  author: { name: string; role: string };
  relatedSlugs: string[];
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  services: string[];
  cta: string;
  highlighted?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export type StudioMilestone = {
  year: string;
  title: string;
  description: string;
};

export type StudioValue = {
  n: string;
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  live: boolean;
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroContent = {
  eyebrow: "950+",
  credibility:
    "10 years in business · Serving SaaS, e-commerce, hospitality & finance teams across 4 continents",
  body:
    "ArtX Dev (artxdev.tech) is an independent studio designing, building, and ranking standout digital products for brands that refuse to blend in.",
  primaryCta: { label: "Get Started", to: "/contact" as const },
  secondaryCta: { label: "View selected work", to: "/work" as const },
  image: {
    src: heroCollage,
    alt: "Torn paper collage illustrating ArtX Dev as a creative web design studio",
  },
};

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    n: "01",
    t: "E-Commerce Website Design",
    d: "High-converting online stores with instant bKash/Nagad checkout and courier tracking.",
    img: w1,
    slug: "ecommerce-website-design",
  },
  {
    n: "02",
    t: "WordPress Development",
    d: "Custom, lightweight WordPress development with zero plugin bloat and 95+ PageSpeed.",
    img: sDev,
    slug: "wordpress-development",
  },
  {
    n: "03",
    t: "SaaS Website Design",
    d: "Editorial, high-converting product interfaces and interactive landing pages for tech brands.",
    img: sDesign,
    slug: "saas-website-design",
  },
  {
    n: "04",
    t: "SEO Services",
    d: "Technical audits, local Dhaka Google rankings, and Generative Engine Optimization (GEO).",
    img: sSeo,
    slug: "seo-services",
  },
  {
    n: "05",
    t: "Web Security",
    d: "Enterprise audits, penetration testing and 24/7 hardening delivered with Techvrs.",
    img: sSecurity,
    slug: "web-security",
    link: "https://techvrs.com",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ecommerce-website-design",
    n: "01",
    t: "E-Commerce Website Design Bangladesh",
    d: "Custom online storefronts engineered for high conversions, fast mobile checkout, and local MFS payments.",
    img: w1,
    valueProp: "Custom e-commerce website design in Bangladesh with instant bKash/Nagad checkout, mobile speed optimization, and courier tracking integration.",
    seoTitle: "ArtX Dev E-Commerce Website Design | Custom Stores Bangladesh",
    metaDescription: "Build high-converting online stores with ArtX Dev in Bangladesh. Instant bKash/Nagad checkout, courier API integration & SEO ready. Get a quote from ArtX Dev!",
    targetKeyword: "artx dev ecommerce",
    deliverables: [
      "Custom responsive storefront UI/UX designed in Figma",
      "Instant WhatsApp & Mobile Financial Service (MFS) Checkout",
      "bKash, Nagad, Rocket & Card Payment Gateway Integration",
      "Courier API shipping setup (Steadfast, Pathao, RedX)",
      "Automated inventory management & order tracking dashboard",
      "Core Web Vitals speed optimization (LCP < 2.5s)",
      "Meta Pixel, Google Tag Manager & Conversion API tracking",
      "Complete on-page SEO & Product Schema markup",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Architecture",
        description: "We map your inventory categories, target buyer personas in Bangladesh, and checkout flow.",
      },
      {
        step: "02",
        title: "Figma UI/UX Design",
        description: "We craft high-converting mobile-first wireframes and high-fidelity screens tailored to your brand.",
      },
      {
        step: "03",
        title: "Development & Gateway Setup",
        description: "We build your custom storefront, integrate bKash/Nagad gateways and courier tracking APIs.",
      },
      {
        step: "04",
        title: "Speed Testing & Launch",
        description: "Rigorous stress testing across mobile networks, payment confirmation tests, and Google indexing.",
      },
    ],
    faqs: [
      {
        q: "How much does e-commerce website design cost in Bangladesh?",
        a: "A professional e-commerce website in Bangladesh typically costs between ৳6,500 and ৳95,000+ depending on whether you need simple WhatsApp ordering, custom inventory dashboards, or multi-vendor capabilities. Our Premium tier starts at ৳6,500.",
      },
      {
        q: "Can you integrate bKash, Nagad, and local Bangladeshi payment gateways?",
        a: "Yes. We integrate both direct manual/WhatsApp MFS checkout and automated merchant APIs via SSLCommerz, Shurjopay, and AamarPay, allowing your customers to pay instantly with bKash, Nagad, Rocket, or credit cards.",
      },
      {
        q: "How do you connect delivery courier services like Pathao and Steadfast?",
        a: "We integrate courier APIs directly into your order management panel, enabling automatic shipping label generation, pickup requests, and real-time SMS tracking updates for your customers.",
      },
      {
        q: "Will my e-commerce website load fast on mobile 4G networks in Bangladesh?",
        a: "Yes. All our online stores are engineered for sub-2.5 second Largest Contentful Paint (LCP) speeds on mobile connections, utilizing image compression, lazy loading, and lightweight code.",
      },
      {
        q: "Do you provide training on how to add products and manage orders?",
        a: "Yes. Every e-commerce build includes video training and a walkthrough of your custom control panel so your team can easily add products, update prices, and process orders without technical expertise.",
      },
    ],
    relatedProjects: ["gearabout", "veative-kitchen"],
    relatedPricing: { name: "Premium", description: "Our most popular package for online stores." },
  },
  {
    slug: "wordpress-development",
    n: "02",
    t: "WordPress Development Bangladesh",
    d: "Custom, lightweight WordPress development with zero plugin bloat, rock-solid security, and top PageSpeed scores.",
    img: sDev,
    valueProp: "Professional WordPress development in Bangladesh delivering tailored themes, ACF customization, and guaranteed Core Web Vitals performance.",
    seoTitle: "ArtX Dev WordPress Development | Custom Themes Bangladesh",
    metaDescription: "Professional WordPress development in Bangladesh by ArtX Dev. Custom themes, ACF, WooCommerce, security hardening & 95+ PageSpeed. Call ArtX Dev!",
    targetKeyword: "artx dev wordpress",
    deliverables: [
      "Custom WordPress theme development from scratch (no bloated page builders)",
      "Advanced Custom Fields (ACF) architecture for effortless content updates",
      "WooCommerce setup & payment gateway integration (bKash/Nagad/Cards)",
      "Enterprise security hardening via Techvrs partnership",
      "Core Web Vitals speed optimization (90+ mobile PageSpeed score)",
      "SEO plugin setup (RankMath/Yoast) and XML sitemap configuration",
      "Automated daily cloud backups and SSL certificate deployment",
      "30 days post-launch technical support and staff training",
    ],
    process: [
      {
        step: "01",
        title: "Requirement Mapping",
        description: "We define custom post types, editorial workflows, and required plugin integrations.",
      },
      {
        step: "02",
        title: "Bespoke Theme Development",
        description: "We code clean, modular PHP/HTML5/Tailwind templates with zero bloated third-party page builders.",
      },
      {
        step: "03",
        title: "Security & Speed Hardening",
        description: "We configure server-level caching, penetration protection with Techvrs, and database indexing.",
      },
      {
        step: "04",
        title: "Handoff & Training",
        description: "We train your editorial team and manage zero-downtime DNS deployment to high-speed hosting.",
      },
    ],
    faqs: [
      {
        q: "Why should I choose ArtX Dev for custom WordPress development?",
        a: "ArtX Dev delivers clean, bespoke code built specifically for your business, resulting in sub-2s load times, higher Google rankings, and bulletproof security backed by our partner Techvrs.",
      },
      {
        q: "How much does professional WordPress development cost in Bangladesh?",
        a: "Custom WordPress websites in Bangladesh range from ৳6,500 for small business sites to ৳45,000+ for complex corporate portals. ArtX Dev offers transparent packages starting at ৳6,500 with custom admin dashboards included.",
      },
      {
        q: "Can you fix and speed up my existing slow WordPress website?",
        a: "Yes. We offer WordPress speed optimization and security audits. We remove redundant plugins, optimize uncompressed images, configure caching, and clean up database overhead to achieve 90+ PageSpeed scores.",
      },
      {
        q: "Is WordPress secure against hackers and malware?",
        a: "When properly hardened with our security partner Techvrs, WordPress is exceptionally secure. We disable XML-RPC, enforce two-factor authentication, set up firewall rules, and eliminate vulnerable plugins.",
      },
      {
        q: "Can non-technical staff manage and update website content?",
        a: "Yes! Using Advanced Custom Fields (ACF), we build a tailored admin panel where your team can edit text, upload photos, and publish blog posts through simple, self-explanatory forms without touching any code.",
      },
    ],
    relatedProjects: ["gearabout", "veative-kitchen"],
    relatedPricing: { name: "Premium", description: "Our standard custom WordPress package." },
  },
  {
    slug: "saas-website-design",
    n: "03",
    t: "SaaS Website Design Studio",
    d: "Editorial, high-converting product interfaces, landing pages, and interactive design systems for tech startups.",
    img: sDesign,
    valueProp: "A specialized SaaS website design studio building high-converting landing pages, interactive product demos, and scalable design systems.",
    seoTitle: "ArtX Dev SaaS Website Design | High-Converting B2B UI/UX",
    metaDescription: "ArtX Dev is a specialized SaaS website design studio crafting high-converting landing pages, interactive product demos & design systems for B2B brands.",
    targetKeyword: "artx dev saas",
    deliverables: [
      "High-converting B2B SaaS landing page architecture",
      "Interactive product UI mockups and animated feature demos",
      "Transparent SaaS pricing table design with tier comparison toggles",
      "Comprehensive Figma design system with tokens and components",
      "Production-grade React / Next.js / TanStack Start frontend engineering",
      "Frictionless free trial & demo request funnel optimization",
      "Enterprise trust signals, customer logo ribbons & social proof grids",
      "Technical SEO and AEO schema markup for AI search citations",
    ],
    process: [
      {
        step: "01",
        title: "Product & Positioning",
        description: "We unpack your product features, ICP (ideal customer profile), and define your high-converting value proposition.",
      },
      {
        step: "02",
        title: "Information Architecture",
        description: "We blueprint the conversion journey from hero section through product showcase, proof, and pricing.",
      },
      {
        step: "03",
        title: "High-Fidelity Interface",
        description: "Editorial typography, custom micro-interactions, and pixel-perfect Figma screens.",
      },
      {
        step: "04",
        title: "Production Frontend",
        description: "Component-driven development in React/TypeScript with sub-second page transitions.",
      },
    ],
    faqs: [
      {
        q: "What makes ArtX Dev different from traditional web design agencies for SaaS?",
        a: "ArtX Dev specializes in conversion-driven product marketing. We don't just make pretty pages; we design high-converting value propositions, interactive product demonstrations, and clear pricing tables that lower CAC and increase trial signups.",
      },
      {
        q: "Do you design in Figma and provide design tokens for our development team?",
        a: "Yes. All SaaS deliverables include structured Figma files with responsive auto-layout components, color/typography tokens, and interactive prototypes ready for seamless developer handoff.",
      },
      {
        q: "Can ArtX Dev also code the frontend of our SaaS website?",
        a: "Yes. ArtX Dev is a full-service design and engineering studio. We build production-ready frontends using React, Next.js, or TanStack Start, ensuring instant page transitions and Core Web Vitals < 2.5s.",
      },
      {
        q: "How do you optimize SaaS pricing pages for conversions?",
        a: "We structure pricing pages with clear feature matrices, monthly/annual billing toggles, highlighted recommended tiers, and low-friction secondary CTAs to capture prospects at every buying stage.",
      },
      {
        q: "Can you help our SaaS website appear in ChatGPT, Perplexity, and AI search engines?",
        a: "Yes! We implement Generative Engine Optimization (GEO) with rich JSON-LD schemas, structured Q&A sections, and high-density entity data so your SaaS product is cited in AI-generated recommendations.",
      },
    ],
    relatedProjects: ["northform-saas", "samriddhi"],
    relatedPricing: { name: "Ultra", description: "Comprehensive custom SaaS design and development." },
  },
  {
    slug: "seo-services",
    n: "04",
    t: "SEO Services Bangladesh",
    d: "Technical audits, local Google search domination, content architecture, and Generative Engine Optimization (GEO).",
    img: sSeo,
    valueProp: "Data-driven SEO services in Bangladesh that drive compounding organic traffic, local Dhaka Google rankings, and AI search citations.",
    seoTitle: "ArtX Dev SEO Services | Technical & Local SEO Agency Bangladesh",
    metaDescription: "Data-driven SEO services in Bangladesh by ArtX Dev. Technical audits, local SEO for Dhaka, content strategy & GEO AI engine optimization that drives organic revenue.",
    targetKeyword: "artx dev seo",
    deliverables: [
      "200+ checkpoint technical SEO audit (crawling, indexing, Core Web Vitals)",
      "Local SEO optimization for Dhaka & Bangladesh (Google Business Profile, NAP)",
      "Commercial keyword research & competitive gap analysis",
      "On-page optimization (titles, metas, H1-H3 hierarchy, image alt text)",
      "Comprehensive JSON-LD Schema implementation (LocalBusiness, FAQPage, Service)",
      "Generative Engine Optimization (GEO) for ChatGPT and Perplexity citations",
      "High-authority internal linking strategy and topical content clusters",
      "Monthly keyword rank tracking and transparent ROI analytics reports",
    ],
    process: [
      {
        step: "01",
        title: "Deep Technical Crawl",
        description: "We audit your site's indexing health, Core Web Vitals, and competitor search footprints.",
      },
      {
        step: "02",
        title: "Opportunity Mapping",
        description: "We identify high-intent commercial keywords and content gaps with immediate revenue potential.",
      },
      {
        step: "03",
        title: "Technical & On-Page Execution",
        description: "We implement schema markup, optimize speed, restructure headings, and publish topical content.",
      },
      {
        step: "04",
        title: "Rank Compounding & GEO Scaling",
        description: "Continuous performance monitoring, local citation building, and GEO answer-engine optimization.",
      },
    ],
    faqs: [
      {
        q: "What is included in ArtX's SEO services in Bangladesh?",
        a: "Our SEO services cover full technical audits, Core Web Vitals fixes, on-page optimization, local Dhaka Google Maps ranking, structured JSON-LD schema, content strategy, and Generative Engine Optimization (GEO) for AI search engines.",
      },
      {
        q: "How long does it take for SEO to rank my website on Google in Bangladesh?",
        a: "Most businesses see significant improvements in keyword rankings and impressions within 60 to 90 days. Competitive commercial terms typically achieve top-3 positions within 4 to 6 months of steady optimization.",
      },
      {
        q: "Why is Local SEO important for businesses in Dhaka?",
        a: "Local SEO places your business in the Google 3-Pack Maps results when customers search for services near them in Gulshan, Banani, Dhanmondi, or Uttara, driving high-intent phone calls and store visits.",
      },
      {
        q: "How is GEO (Generative Engine Optimization) included in your SEO service?",
        a: "We structure your web content into clear Q&A formats, embed rich schema graphs, and optimize entity authority so AI search engines like ChatGPT, Perplexity, and Google AI Overviews cite your brand as a primary source.",
      },
      {
        q: "Do you guarantee #1 rankings on Google?",
        a: "No legitimate agency can guarantee a #1 rank because Google's algorithm changes constantly. However, ArtX uses 100% white-hat, data-driven technical methods that consistently deliver top-page organic rankings and measurable business ROI.",
      },
    ],
    relatedProjects: ["samriddhi", "gearabout"],
    relatedPricing: { name: "Premium", description: "Monthly SEO growth retainer." },
  },
  {
    slug: "website-design",
    n: "05",
    t: "Creative web design studio",
    d: "Editorial, high-craft interfaces designed to convert without shouting.",
    img: sDesign,
    valueProp: "Affordable web design packages for brands that want interfaces that earn attention and hold it.",
    deliverables: [
      "Discovery & stakeholder alignment workshops",
      "Information architecture & user flow mapping",
      "Full-fidelity Figma design system",
      "Desktop, tablet & mobile responsive layouts",
      "Interactive prototype for stakeholder sign-off",
      "Component library with design tokens",
      "Handoff documentation & asset export",
    ],
    process: [
      {
        step: "01",
        title: "Research",
        description:
          "We audit your competitors, study your audience and map the conversion funnel before a single frame is opened.",
      },
      {
        step: "02",
        title: "Architecture",
        description:
          "Information hierarchy, user flows and page structures aligned to business goals.",
      },
      {
        step: "03",
        title: "Design",
        description:
          "High-fidelity screens in Figma. Bold, editorial, every pixel earning its place.",
      },
      {
        step: "04",
        title: "Iterate",
        description:
          "Two rounds of structured feedback. We refine until the design performs in testing.",
      },
    ],
    faqs: [
      {
        q: "How long does a website design project take?",
        a: "Most projects run 4–8 weeks depending on scope, number of pages and stakeholder availability for feedback rounds.",
      },
      {
        q: "Do you design in Figma?",
        a: "Yes. All deliverables are in Figma with organised pages, shared design tokens and a developer-ready component library.",
      },
      {
        q: "Can you work with our existing brand guidelines?",
        a: "Absolutely. We extend your existing brand into digital — or, if guidelines are thin, we'll propose a direction first.",
      },
      {
        q: "Is development included?",
        a: "Design and development are separate services, but we work best as a full-stack partner. Ask about bundled pricing.",
      },
    ],
    relatedProjects: ["gearabout", "veative-kitchen"],
    relatedPricing: { name: "Premium", description: "Our most popular package for custom web design." },
  },
  {
    slug: "web-development",
    n: "02",
    t: "Custom website development services",
    d: "Production-grade React, tuned for Core Web Vitals and effortless CMS ops.",
    img: sDev,
    valueProp: "High-performance React and custom WordPress development services engineered for speed.",
    deliverables: [
      "React / Next.js or TanStack Start application",
      "Headless CMS integration (Sanity, Contentful or similar)",
      "Core Web Vitals — LCP < 2.5s, CLS < 0.1, INP < 200ms",
      "CI/CD pipeline setup (GitHub Actions + Vercel/Cloudflare)",
      "Analytics & error monitoring setup",
      "Performance & accessibility audit on delivery",
      "30-day post-launch support",
    ],
    process: [
      {
        step: "01",
        title: "Architecture",
        description:
          "Tech stack selection, CMS schema design, and deployment pipeline planning.",
      },
      {
        step: "02",
        title: "Build",
        description:
          "Component-first development. We build in the open with weekly preview deploys.",
      },
      {
        step: "03",
        title: "Optimise",
        description:
          "Performance profiling, image optimisation and bundle analysis before handoff.",
      },
      {
        step: "04",
        title: "Launch",
        description:
          "DNS cut-over, monitoring setup and a 30-day support window so nothing slips.",
      },
    ],
    faqs: [
      {
        q: "What tech stack do you use?",
        a: "Primarily React with Next.js or TanStack Start. We choose the stack based on your requirements — not habit.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. We start with a code audit, document the architecture and then work incrementally to avoid big-bang rewrites.",
      },
      {
        q: "Do you build e-commerce sites?",
        a: "Yes — primarily on Shopify (custom themes and headless). For bespoke checkout flows we evaluate on a case-by-case basis.",
      },
      {
        q: "What's included in the 30-day support period?",
        a: "Bug fixes, minor copy changes, CMS training and one performance check-in call.",
      },
    ],
    relatedProjects: ["gearabout", "northform-saas"],
    relatedPricing: { name: "Ultra", description: "Comprehensive full-stack development and scale." },
  },
  {
    slug: "seo",
    n: "03",
    t: "Technical SEO agency",
    d: "Technical audits, content architecture and link work that compounds.",
    img: sSeo,
    valueProp: "A technical SEO agency approach to search visibility that compounds over time.",
    deliverables: [
      "Full technical SEO audit (200+ checkpoints)",
      "Keyword opportunity mapping & content gap analysis",
      "On-page optimisation for top 20 priority pages",
      "Core Web Vitals improvement plan",
      "Internal linking architecture",
      "Monthly rank tracking & reporting dashboard",
      "Quarterly content calendar",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "200+ checkpoint technical crawl. We find what's holding rankings back before touching a single tag.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "Keyword opportunity matrix, content gaps and a prioritised 90-day roadmap.",
      },
      {
        step: "03",
        title: "Execute",
        description:
          "On-page changes, technical fixes and content briefs — in order of ranking impact.",
      },
      {
        step: "04",
        title: "Scale",
        description:
          "Monthly reporting, rank tracking and quarterly strategy refreshes as the algorithm evolves.",
      },
    ],
    faqs: [
      {
        q: "How long before we see results?",
        a: "Honest answer: 3–6 months for meaningful movement on competitive terms. Technical fixes often show faster gains.",
      },
      {
        q: "Do you write content as part of the engagement?",
        a: "We provide detailed briefs and outlines. Copywriting is available as a separate add-on or we work with your team.",
      },
      {
        q: "Do you do link building?",
        a: "Yes — earned editorial links through digital PR and content that's genuinely worth citing. No PBNs, ever.",
      },
      {
        q: "Is this a one-off or ongoing retainer?",
        a: "Both options exist. An initial 3-month sprint is a common starting point; ongoing retainers compound the gains.",
      },
    ],
    relatedProjects: ["veative-kitchen", "northform-saas"],
    relatedPricing: { name: "Basic", description: "Essential setup for online presence and search visibility." },
  },
  {
    slug: "web-security",
    n: "04",
    t: "Web Security",
    d: "Security audits, hardening and monitoring — delivered with our partner.",
    img: sSecurity,
    valueProp: "Ship with confidence. Protect what you've built.",
    deliverables: [
      "Penetration testing (OWASP Top 10)",
      "Dependency vulnerability scan & remediation plan",
      "TLS / header hardening",
      "Authentication & authorisation review",
      "Security monitoring setup (uptime + anomaly alerts)",
      "Incident response playbook",
      "Quarterly re-audit cadence",
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "Automated and manual vulnerability scanning against OWASP Top 10 and beyond.",
      },
      {
        step: "02",
        title: "Report",
        description:
          "Prioritised findings — Critical / High / Medium / Low — with reproduction steps and remediation guidance.",
      },
      {
        step: "03",
        title: "Harden",
        description:
          "We work alongside your dev team to fix critical findings fast.",
      },
      {
        step: "04",
        title: "Monitor",
        description:
          "Continuous monitoring setup so new vulnerabilities don't quietly accumulate.",
      },
    ],
    faqs: [
      {
        q: "Who delivers the security work?",
        a: "In partnership with Techvrs.com, our trusted security partner with dedicated pen-testing capacity.",
      },
      {
        q: "Do you test staging environments?",
        a: "Yes — we prefer testing on staging first, then verifying fixes in production with a lighter re-scan.",
      },
      {
        q: "Is this relevant for small sites?",
        a: "Any site handling user data, payments or logins is a target. Size doesn't reduce risk.",
      },
      {
        q: "What frameworks do you test?",
        a: "React, Next.js, Shopify, WordPress, and custom Node.js apps. Let us know your stack on first contact.",
      },
    ],
    relatedProjects: ["northform-saas", "gearabout"],
    link: "https://techvrs.com",
  },
  {
    slug: "landing-page-design",
    n: "06",
    t: "Landing Page Design Bangladesh",
    d: "Conversion-optimized landing pages with A/B tested layouts, persuasive copywriting frameworks, and sub-2-second load times.",
    img: sDesign,
    valueProp: "High-converting landing page design in Bangladesh that turns ad traffic into leads, signups, and sales with proven conversion architecture.",
    seoTitle: "Landing Page Design Bangladesh | High-Converting Pages | ArtX",
    metaDescription: "Get high-converting landing page design in Bangladesh. Optimized for Google Ads, Facebook campaigns & organic traffic. Sub-2s load times. Free quote!",
    targetKeyword: "landing page design Bangladesh",
    deliverables: [
      "Conversion-focused wireframe and user flow architecture",
      "Custom responsive landing page design in Figma",
      "Mobile-first development with sub-2s LCP performance",
      "A/B test-ready variant templates",
      "Meta Pixel, Google Tag Manager & conversion tracking setup",
      "Compelling copywriting with AIDA/PAS frameworks",
      "Social proof sections (testimonials, logos, trust badges)",
      "WhatsApp, form & phone call CTA integration",
    ],
    process: [
      { step: "01", title: "Campaign Alignment", description: "We analyze your ad campaigns, target audience, and conversion goals to architect the optimal page structure." },
      { step: "02", title: "Persuasion Design", description: "Wireframes and high-fidelity Figma designs using proven conversion frameworks like AIDA and objection-handling sections." },
      { step: "03", title: "Speed-First Build", description: "Lightweight, blazing-fast development optimized for Google PageSpeed and low bounce rates on mobile 4G." },
      { step: "04", title: "Launch & Optimize", description: "Pixel tracking setup, A/B variant deployment, and 30-day conversion monitoring with actionable insights." },
    ],
    faqs: [
      { q: "How much does a landing page cost in Bangladesh?", a: "Professional landing pages in Bangladesh range from ৳5,000 to ৳35,000 depending on complexity. ArtX offers conversion-optimized landing pages starting from ৳6,500 with our Premium package." },
      { q: "What makes a landing page different from a website homepage?", a: "A landing page is a focused, single-purpose page designed to convert one specific audience segment. Unlike homepages which serve multiple purposes, landing pages eliminate navigation distractions and guide visitors toward one clear action (signup, purchase, or inquiry)." },
      { q: "Can you build landing pages for Facebook and Google Ads campaigns?", a: "Yes. We build campaign-specific landing pages with full Meta Pixel and Google Ads conversion tracking. We ensure message match between your ad creative and the landing page for maximum Quality Score and lower cost-per-click." },
      { q: "How fast will my landing page load?", a: "All ArtX landing pages achieve sub-2-second Largest Contentful Paint (LCP) on mobile networks. Fast load times directly improve conversion rates — every second of delay reduces conversions by approximately 7%." },
      { q: "Do you provide A/B testing for landing pages?", a: "Yes. We design multiple variants with different headlines, CTAs, and layouts that you can test against each other to find the highest-converting combination using Google Optimize or similar tools." },
    ],
    relatedProjects: ["gearabout", "northform-saas"],
    relatedPricing: { name: "Premium", description: "Our standard conversion-focused landing page package." },
  },
  {
    slug: "website-redesign",
    n: "07",
    t: "Website Redesign Services",
    d: "Modernize your outdated website with a complete visual and technical overhaul that improves conversions, speed, and SEO rankings.",
    img: sDev,
    valueProp: "Professional website redesign services that transform underperforming websites into modern, fast, high-converting digital assets without losing SEO equity.",
    seoTitle: "Website Redesign Services Bangladesh | Modernize Your Site | ArtX",
    metaDescription: "Redesign your outdated website with ArtX. Preserve SEO rankings, boost speed, improve conversions & get a modern design. Free redesign audit available!",
    targetKeyword: "website redesign services",
    deliverables: [
      "Comprehensive UX audit of your existing website",
      "Competitive analysis and conversion gap identification",
      "Complete Figma redesign with modern UI/UX patterns",
      "SEO-safe migration (301 redirects, URL mapping, meta preservation)",
      "Core Web Vitals optimization (LCP < 2.5s, CLS < 0.1)",
      "Content migration and information architecture restructuring",
      "Mobile-first responsive implementation",
      "Post-launch SEO monitoring and rank recovery tracking",
    ],
    process: [
      { step: "01", title: "Audit & Analysis", description: "Deep dive into your current website's analytics, heatmaps, bounce rates, and SEO performance to identify what's working and what's broken." },
      { step: "02", title: "Strategy & Architecture", description: "New information architecture, user flows, and wireframes based on competitive analysis and conversion best practices." },
      { step: "03", title: "Design & Development", description: "Modern high-fidelity design followed by performance-optimized development with thorough cross-browser testing." },
      { step: "04", title: "Migration & Launch", description: "Careful SEO migration with 301 redirects, Google Search Console monitoring, and 60-day post-launch rank tracking to ensure zero traffic loss." },
    ],
    faqs: [
      { q: "Will I lose my Google rankings if I redesign my website?", a: "Not with ArtX. We implement comprehensive SEO migration with full URL mapping, 301 redirects, meta tag preservation, and structured data migration. We monitor Search Console daily for 60 days post-launch to catch and fix any ranking drops immediately." },
      { q: "How long does a website redesign take?", a: "A typical website redesign takes 6 to 12 weeks depending on the size and complexity of your site. Small business sites (under 20 pages) usually complete within 6 weeks, while larger corporate or e-commerce sites may require 8 to 12 weeks." },
      { q: "How much does a website redesign cost in Bangladesh?", a: "Website redesign in Bangladesh typically costs between ৳15,000 and ৳95,000+ depending on the scope. Our redesign packages start at ৳6,500 for standard business websites and scale up for e-commerce and enterprise redesigns." },
      { q: "When should I redesign my website?", a: "Key signs you need a redesign include: high bounce rates (above 60%), slow load times (over 3 seconds), outdated design, poor mobile experience, declining search rankings, and low conversion rates compared to competitors." },
      { q: "Can you redesign my WordPress website to a custom React build?", a: "Yes. We specialize in migrating WordPress sites to modern React-based architectures (Next.js, TanStack Start) for dramatically faster performance while preserving your content and SEO rankings." },
    ],
    relatedProjects: ["gearabout", "veative-kitchen"],
    relatedPricing: { name: "Premium", description: "Complete website redesign and modernization." },
  },
  {
    slug: "website-maintenance",
    n: "08",
    t: "Website Maintenance Bangladesh",
    d: "Keep your website fast, secure, and up-to-date with professional maintenance plans that include backups, security patches, and performance monitoring.",
    img: sSecurity,
    valueProp: "Professional website maintenance services in Bangladesh that keep your site secure, fast, and up-to-date so you can focus on growing your business.",
    seoTitle: "Website Maintenance Bangladesh | Monthly Care Plans | ArtX",
    metaDescription: "Professional website maintenance in Bangladesh. Monthly backups, security patches, speed optimization & uptime monitoring from ৳2,500/month. Get started!",
    targetKeyword: "website maintenance Bangladesh",
    deliverables: [
      "Daily automated cloud backups with 30-day retention",
      "Monthly security patches and plugin/dependency updates",
      "Core Web Vitals performance monitoring and optimization",
      "99.9% uptime monitoring with instant alert notifications",
      "Monthly analytics report with traffic and conversion insights",
      "Content updates (up to 10 pages/month)",
      "SSL certificate management and renewal",
      "Priority bug fixes and technical support",
    ],
    process: [
      { step: "01", title: "Onboarding Audit", description: "We audit your current hosting, backups, security posture, and performance baselines to establish maintenance priorities." },
      { step: "02", title: "Setup & Automation", description: "Configure automated backup systems, monitoring dashboards, and security scanning tools tailored to your tech stack." },
      { step: "03", title: "Monthly Care Cycle", description: "Regular security patches, dependency updates, content changes, and performance checks according to your maintenance plan." },
      { step: "04", title: "Reporting & Review", description: "Monthly reports covering uptime, speed metrics, security status, and recommendations for continuous improvement." },
    ],
    faqs: [
      { q: "How much does website maintenance cost in Bangladesh?", a: "Professional website maintenance in Bangladesh ranges from ৳2,500 to ৳15,000 per month depending on the complexity of your site and the level of support required. ArtX offers tiered maintenance plans to fit every budget." },
      { q: "What happens if my website goes down?", a: "Our monitoring systems detect downtime within 60 seconds and alert our team immediately. For priority maintenance clients, we guarantee response within 2 hours and resolution within 4 hours for critical issues." },
      { q: "Do I really need website maintenance?", a: "Yes. Unmaintained websites are vulnerable to security breaches, plugin conflicts, and performance degradation. 73% of hacked websites are compromised through outdated software. Regular maintenance protects your investment and your customers' data." },
      { q: "Can you maintain websites built by other agencies?", a: "Yes. We maintain websites built on WordPress, React, Next.js, Shopify, and most modern platforms. We start with a technical audit to understand your codebase before onboarding." },
      { q: "Is hosting included in maintenance plans?", a: "Hosting can be bundled with our maintenance plans at a discounted rate, or we can manage your existing hosting provider. We recommend high-speed SSD hosting with CDN for optimal performance." },
    ],
    relatedProjects: ["gearabout", "veative-kitchen"],
    relatedPricing: { name: "Basic", description: "Essential monthly website maintenance and monitoring." },
  },
];

// ─── Projects / Case Studies ──────────────────────────────────────────────────

export const projects: CaseStudy[] = [
  // ─── VERIFIED CLIENT CASE STUDIES (SEO / AEO / GEO TARGETED) ────────────────
  {
    slug: "biniyogbriddhi",
    title: "Biniyog Briddhi",
    tag: "FinTech · SME Investment",
    year: "2026",
    img: "/desgins/binoyg/binioyg.png",
    radii: "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl",
    liveUrl: "https://biniyogbriddhi.com/",
    clientUrl: "https://biniyogbriddhi.com/",
    client: "Biniyog Briddhi",
    geoRegion: "Dhaka",
    geoCountry: "Bangladesh",
    targetKeyword: "biniyog briddhi sme investment bangladesh",
    seoTitle: "Biniyog Briddhi Case Study | Verified SME Investment Portal Bangladesh",
    metaDescription: "How ArtX engineered Biniyog Briddhi (biniyogbriddhi.com), a verified SME business investment platform in Bangladesh with investor KYC, dividend tracking & 1.1s LCP.",
    challenge:
      "SME businesses in Bangladesh struggle to raise transparent growth capital while individual investors lack reliable, verified financial ledgers and clear dividend tracking.",
    solution:
      "Architected a high-trust digital investment portal featuring verified venture screening, automated investor KYC, dynamic ROI calculators, and instant dividend distribution.",
    result: "+3.2× investor onboarding velocity · 99/100 Lighthouse score · 100% automated dividend accounting.",
    fullDescription:
      "Biniyog Briddhi is a pioneering SME investment and venture financing platform founded to bridge the capital gap for promising Bangladeshi businesses. Traditional SME lending involves painful bureaucratic delays and high collateral requirements, while retail investors face opaque balance sheets.\n\nArtX Dev took complete ownership of the digital product architecture and search visibility. We designed a trust-first UI/UX that simplifies complex investment structures into transparent milestones. The engineering stack utilizes Next.js and PostgreSQL with bank-grade audit trails, ensuring high security and instant load times even on mobile networks.",
    clientName: "Biniyog Briddhi",
    industry: "FinTech & SME Finance",
    timeline: "8 weeks",
    role: "Product Strategy, UI/UX Design, Full-Stack Architecture, Technical SEO & GEO",
    techStack: ["Next.js", "React 19", "Tailwind CSS", "Node.js", "PostgreSQL", "bKash API"],
    processSteps: [
      {
        step: "01",
        title: "Trust Architecture & Regulatory Mapping",
        description:
          "Mapped financial compliance, investor risk profiles, and streamlined KYC onboarding workflows for Bangladeshi retail and institutional investors.",
      },
      {
        step: "02",
        title: "High-Trust Interface & Calculators",
        description:
          "Designed dynamic ROI forecast tools and transparent venture performance dashboards that demystify revenue-sharing models.",
      },
      {
        step: "03",
        title: "Engineering & Audit Trail",
        description:
          "Built secure investor wallets, automated payment confirmation via local MFS gateways, and immutable audit logs.",
      },
      {
        step: "04",
        title: "GEO & Local Search Optimization",
        description:
          "Structured financial entities, FAQ answer-engine schemas, and targeted high-intent commercial keywords for SME investment in Bangladesh.",
      },
    ],
    gallery: [
      { src: "/desgins/binoyg/binioyg.png", alt: "Biniyog Briddhi homepage hero" },
      { src: "/desgins/binoyg/biniyog.png", alt: "SME opportunity listings and investment tiers" },
      { src: "/desgins/binoyg/biniyog (2).png", alt: "Investor portfolio dashboard and dividend ledger" },
    ],
    testimonial: {
      quote:
        "ArtX transformed our complex financial vision into an intuitive, high-converting digital platform. Both our entrepreneurs and investors trust the transparency of the system completely.",
      author: "Founding Team",
      title: "Leadership, Biniyog Briddhi",
    },
    faqs: [
      {
        q: "What is Biniyog Briddhi?",
        a: "Biniyog Briddhi (biniyogbriddhi.com) is a verified SME business investment and equity financing platform based in Dhaka, Bangladesh, connecting entrepreneurs with vetted private investors.",
      },
      {
        q: "Who designed and engineered the Biniyog Briddhi web platform?",
        a: "ArtX Dev designed the complete UI/UX and engineered the production full-stack web application, optimizing for sub-second speeds and search engine visibility.",
      },
      {
        q: "What technologies power Biniyog Briddhi?",
        a: "Next.js, React 19, Tailwind CSS, PostgreSQL, and secure local MFS payment verification APIs.",
      },
    ],
    nextProject: "thebec",
  },
  {
    slug: "thebec",
    title: "The BEC",
    tag: "EdTech · Career Academy",
    year: "2026",
    img: "/desgins/bec/bec-preview.mp4",
    radii: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl",
    liveUrl: "https://www.thebec.site/",
    clientUrl: "https://www.thebec.site/",
    client: "The BEC",
    geoRegion: "Dhaka",
    geoCountry: "Bangladesh",
    targetKeyword: "the bec academy skills development bangladesh",
    seoTitle: "The BEC Case Study | Elite Professional Skills Academy Portal",
    metaDescription: "Case study of The BEC (thebec.site) engineered by ArtX Dev. High-converting educational academy platform with video syllabi, admissions funnel & 1.0s LCP.",
    challenge:
      "Needed an intuitive, fast-loading digital academy experience that builds authority, showcases course curricula, and boosts student enrollments across Bangladesh.",
    solution:
      "Developed a modern learning portal with responsive video previews, interactive course syllabi, seamless admission workflows, and comprehensive SEO/GEO optimization.",
    result: "+55% admission form completions · 1.0s mobile LCP · 98/100 performance score.",
    fullDescription:
      "The BEC (thebec.site) is an elite professional academy focused on high-demand skills training and career development in Bangladesh. With the rapid evolution of modern workplace demands, traditional coaching centers fail to provide modern, practical education.\n\nArtX Dev built an engaging, conversion-optimized academy platform. The experience leads prospective students through course outlines, video lecture previews, instructor credentials, and a frictionless registration process.",
    clientName: "The BEC",
    industry: "EdTech & Career Training",
    timeline: "6 weeks",
    role: "Digital Brand Strategy, UI/UX Design, Frontend Development, Local SEO",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Edge", "Framer Motion"],
    processSteps: [
      {
        step: "01",
        title: "Student Journey & Funnel Blueprint",
        description:
          "Analyzed applicant behavior and eliminated multi-step friction in the course discovery and admission process.",
      },
      {
        step: "02",
        title: "Video-First Course Previews",
        description:
          "Engineered lightweight video previews and interactive syllabus accordions that load instantly on mobile networks.",
      },
      {
        step: "03",
        title: "Frictionless Enrollment Gateway",
        description:
          "Created one-tap admission forms integrated with instant email and SMS confirmations.",
      },
    ],
    gallery: [
      { src: "/desgins/bec/bec-preview.mp4", alt: "The BEC interactive academy video demo" },
      { src: w1, alt: "The BEC student course catalog" },
    ],
    testimonial: {
      quote:
        "Student enrollment doubled within the first month of launching the new site. The speed, clarity, and mobile experience designed by ArtX are unmatched in the education sector.",
      author: "Academic Director",
      title: "The BEC",
    },
    faqs: [
      {
        q: "What is The BEC?",
        a: "The BEC (thebec.site) is a premier professional skills development academy offering practical career-focused training in Bangladesh.",
      },
      {
        q: "Who built The BEC website?",
        a: "ArtX Dev engineered the digital brand, admission funnel, and high-performance web platform.",
      },
    ],
    nextProject: "techvrs-ims",
  },
  {
    slug: "techvrs-ims",
    title: "Techvrs IMS",
    tag: "Enterprise SaaS · Inventory ERP",
    year: "2026",
    img: "/desgins/ims/ims.png",
    radii: "rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-2xl rounded-br-2xl",
    liveUrl: "https://ims.techvrs.com/",
    clientUrl: "https://ims.techvrs.com/",
    client: "Techvrs IMS",
    geoRegion: "Dhaka",
    geoCountry: "Bangladesh & GCC",
    targetKeyword: "techvrs ims inventory management software erp bangladesh",
    seoTitle: "Techvrs IMS Case Study | Multi-Warehouse Cloud ERP Platform",
    metaDescription: "Explore how ArtX Dev built Techvrs IMS (ims.techvrs.com): enterprise multi-warehouse inventory management with barcode scanning and real-time ledger sync.",
    challenge:
      "Multi-branch retail and wholesale operations suffered from inventory drift, delayed courier reconciliations, and manual purchase order delays.",
    solution:
      "Built a high-throughput cloud inventory management system (IMS) with multi-warehouse tracking, low-stock automated triggers, and role-based permissions.",
    result: "Zero stock drift across 4 warehouses · Sub-second barcode scanning · 98/100 Lighthouse.",
    fullDescription:
      "Techvrs IMS (ims.techvrs.com) is an enterprise cloud inventory management suite engineered for modern retail chains, distributors, and e-commerce fulfillment hubs. Discrepancies between physical stock and digital ledgers lead to oversold goods, angry customers, and lost profit margins.\n\nArtX Dev engineered an enterprise-grade ERP architecture with sub-second barcode dispatch, automated vendor purchase orders, branch-to-branch inventory transfer tracking, and granular Role-Based Access Control (RBAC).",
    clientName: "Techvrs IMS",
    industry: "Supply Chain & Enterprise Software",
    timeline: "12 weeks",
    role: "Full-Stack System Architecture, Enterprise UI/UX, Cloud Deployment",
    techStack: ["React 19", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    processSteps: [
      {
        step: "01",
        title: "Warehouse Operations Audit",
        description:
          "Mapped physical SKU tracking, bin locations, and barcode handling in high-velocity warehouse environments.",
      },
      {
        step: "02",
        title: "High-Density Data UI",
        description:
          "Designed clean, keyboard-navigable tabular interfaces capable of displaying 50,000+ items without performance lag.",
      },
      {
        step: "03",
        title: "Real-Time Multi-Location Sync",
        description:
          "Engineered WebSocket synchronization preventing concurrent overselling across online and physical store branches.",
      },
    ],
    gallery: [
      { src: "/desgins/ims/ims.png", alt: "Techvrs IMS dashboard overview" },
      { src: "/desgins/ims/Screenshot_82.png", alt: "Stock ledger and reorder thresholds" },
      { src: "/desgins/ims/Screenshot_84.png", alt: "Multi-branch warehouse transfer screen" },
    ],
    testimonial: {
      quote:
        "Techvrs IMS completely eliminated our stock discrepancies. Our dispatch team handles double the volume in half the time.",
      author: "Operations Lead",
      title: "Techvrs IMS Client",
    },
    faqs: [
      {
        q: "What is Techvrs IMS?",
        a: "Techvrs IMS (ims.techvrs.com) is an enterprise cloud inventory management and warehouse ERP suite developed for multi-branch retailers and distributors.",
      },
      {
        q: "Who developed Techvrs IMS?",
        a: "ArtX Dev provided end-to-end UX/UI architecture and full-stack software development.",
      },
    ],
    nextProject: "tasneemknit",
  },
  {
    slug: "tasneemknit",
    title: "Tasneem Knit Industry",
    tag: "Industrial · RMG & Export",
    year: "2026",
    img: "/desgins/tasneem/tasneem.png",
    radii: "rounded-tr-[3rem] rounded-br-[3rem] rounded-tl-2xl rounded-bl-2xl",
    liveUrl: "https://tasneemknitindustry.com/",
    clientUrl: "https://tasneemknitindustry.com/",
    client: "Tasneem Knit Industry Ltd.",
    geoRegion: "Narayanganj & Dhaka",
    geoCountry: "Bangladesh",
    targetKeyword: "tasneem knit industry rmg garments manufacturer bangladesh",
    seoTitle: "Tasneem Knit Industry Case Study | RMG Export Manufacturing Portal",
    metaDescription: "ArtX Dev case study on Tasneem Knit Industry (tasneemknitindustry.com): international compliance-certified knitwear manufacturing and B2B export RFQ platform.",
    challenge:
      "International garment buyers in the EU and North America required verifiable proof of labor compliance (BSCI, OEKO-TEX), factory knitting capacity, and quick sample request workflows.",
    solution:
      "Architected a global-standard corporate export portal highlighting environmental sustainability, machinery capacity, fabric catalogs, and direct buyer inquiry routing.",
    result: "+80% international inquiry response rate · Global compliance showcase · 1.1s mobile LCP.",
    fullDescription:
      "Tasneem Knit Industry Ltd. (tasneemknitindustry.com) is a major ready-made garment (RMG) manufacturer in Bangladesh supplying international retail brands worldwide. In the competitive global apparel supply chain, global brands prioritize certified ESG standards, clean energy factories, and transparent production capacities.\n\nArtX Dev built an international corporate export portal that instills immediate confidence in overseas sourcing managers. The platform showcases high-res fabric weaves, machinery capabilities, social compliance audit certificates, and a streamlined B2B Request for Quotation (RFQ) system.",
    clientName: "Tasneem Knit Industry Ltd.",
    industry: "Garments, Textile & Apparel Export",
    timeline: "6 weeks",
    role: "Corporate Web Design, Technical SEO, Global B2B Portal Architecture",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion"],
    processSteps: [
      {
        step: "01",
        title: "Global Sourcing Alignment",
        description:
          "Interviewed European and North American fashion buyers to determine essential compliance verification points.",
      },
      {
        step: "02",
        title: "Industrial Visual Art Direction",
        description:
          "Captured clean photography of high-precision circular knitting machinery, automated cutting, and eco-dyeing facilities.",
      },
      {
        step: "03",
        title: "B2B Lead Generation Funnel",
        description:
          "Integrated structured RFQ forms with immediate sales dispatch and technical specification attachments.",
      },
    ],
    gallery: [
      { src: "/desgins/tasneem/tasneem.png", alt: "Tasneem Knit Industry factory overview" },
      { src: "/desgins/tasneem/tasneem (2).png", alt: "Fabric catalog and technical weave specs" },
      { src: "/desgins/tasneem/tasneem (3).png", alt: "Global certifications (OEKO-TEX, BSCI)" },
    ],
    testimonial: {
      quote:
        "International apparel buyers frequently comment on how clear and professional our website is. It has become a vital asset for our export growth.",
      author: "Managing Director",
      title: "Tasneem Knit Industry Ltd.",
    },
    faqs: [
      {
        q: "What products does Tasneem Knit Industry manufacture?",
        a: "Tasneem Knit Industry produces 100% export-quality knitwear, t-shirts, polo shirts, hoodies, and activewear for global brands.",
      },
      {
        q: "Who designed Tasneem Knit Industry's export website?",
        a: "ArtX Dev designed and developed the corporate web portal.",
      },
    ],
    nextProject: "noorsolaren",
  },
  {
    slug: "noorsolaren",
    title: "Noor Solar Energy",
    tag: "CleanTech · Renewable Energy",
    year: "2026",
    img: "/desgins/nooor/httpnoorsolarencom.png",
    radii: "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl",
    liveUrl: "http://noorsolaren.com/",
    clientUrl: "http://noorsolaren.com/",
    client: "Noor Solar Energy",
    geoRegion: "Dhaka",
    geoCountry: "Bangladesh",
    targetKeyword: "noor solar energy rooftop solar panel epc bangladesh",
    seoTitle: "Noor Solar Energy Case Study | Industrial Solar EPC Platform",
    metaDescription: "How ArtX Dev developed Noor Solar Energy (noorsolaren.com): industrial rooftop PV engineering platform with solar tariff ROI calculator and project portfolio.",
    challenge:
      "Commercial and industrial factory owners needed transparent ROI payback projections, net metering insights, and engineering credentials before commissioning solar plants.",
    solution:
      "Engineered an industrial clean-tech web platform featuring interactive solar capacity estimation, live project case studies, and corporate inquiry funnels.",
    result: "+40% qualified commercial solar leads · High-ranking local search presence · 1.2s LCP.",
    fullDescription:
      "Noor Solar Energy (noorsolaren.com) is a leading solar EPC (Engineering, Procurement, and Construction) firm in Bangladesh specializing in commercial rooftop solar installations, agricultural solar pumps, and off-grid renewable infrastructure.\n\nArtX Dev engineered a technical yet accessible website that guides industrial clients through net metering regulations, projected kilowatt-hour savings, and payback period calculations, establishing Noor Solar as a premier renewable engineering authority.",
    clientName: "Noor Solar Energy",
    industry: "Renewable Energy & Solar EPC",
    timeline: "5 weeks",
    role: "Renewable Energy Brand Strategy, Web Design, Local GEO SEO",
    techStack: ["React", "Tailwind CSS", "HTML5", "Vercel"],
    processSteps: [
      {
        step: "01",
        title: "Engineering Specification Mapping",
        description:
          "Structured solar panel datasheets, inverter efficiencies, and net metering payback curves into clear buyer guides.",
      },
      {
        step: "02",
        title: "Interactive Tariff Estimator",
        description:
          "Built a live calculator letting industrial owners estimate annual electricity savings based on rooftop square footage.",
      },
      {
        step: "03",
        title: "Local SEO & GEO Dominance",
        description:
          "Targeted commercial keywords for rooftop solar in Dhaka, Gazipur, and Chittagong industrial zones.",
      },
    ],
    gallery: [
      { src: "/desgins/nooor/httpnoorsolarencom.png", alt: "Noor Solar Energy engineering platform" },
      { src: "/desgins/nooor/n.png", alt: "Completed industrial solar megawatt installations" },
    ],
    testimonial: {
      quote:
        "The solar tariff calculator on our new website has helped our sales engineers close high-value commercial deals with textile mills much faster.",
      author: "Chief Engineer",
      title: "Noor Solar Energy",
    },
    faqs: [
      {
        q: "What services does Noor Solar Energy provide?",
        a: "Noor Solar Energy specializes in turnkey industrial rooftop solar EPC, solar irrigation pumps, and net-metered solar solutions across Bangladesh.",
      },
      {
        q: "Who built Noor Solar Energy's website?",
        a: "ArtX Dev created the website with interactive solar tools and search engine optimization.",
      },
    ],
    nextProject: "bengalbulletin",
  },
  {
    slug: "bengalbulletin",
    title: "Bengal Bulletin",
    tag: "Media · Edge Serverless News",
    year: "2026",
    img: "/desgins/news/news.png",
    radii: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl",
    liveUrl: "https://bb.napaextra376.workers.dev/",
    clientUrl: "https://bb.napaextra376.workers.dev/",
    client: "Bengal Bulletin",
    geoRegion: "Dhaka & Global",
    geoCountry: "Bangladesh",
    targetKeyword: "bengal bulletin online news portal bangladesh",
    seoTitle: "Bengal Bulletin Case Study | Edge-Native Serverless Newsroom",
    metaDescription: "Case study: Bengal Bulletin edge news portal engineered by ArtX Dev on Cloudflare Workers for sub-second breaking news and zero downtime under millions of visits.",
    challenge:
      "Traditional CMS architectures crashed during viral breaking news traffic surges and suffered from sluggish mobile reading times.",
    solution:
      "Designed and deployed a serverless Edge-rendered content architecture on Cloudflare Workers with sub-100ms global cache latency and instant news feeds.",
    result: "0.6s LCP on mobile · 100/100 PageSpeed · Infinite scaling with zero downtime.",
    fullDescription:
      "Bengal Bulletin is a high-speed digital journalism publication built to cover breaking news, business analysis, and cultural reporting in Bangladesh. Traditional news sites hosted on shared or VPS servers repeatedly crash during major viral events and bleed readership due to sluggish ad-heavy loading.\n\nArtX Dev designed an ultra-lean serverless edge newsroom running natively on Cloudflare Workers. Content is rendered at the closest CDN node to the reader, delivering sub-second page loads and complete resilience against traffic spikes.",
    clientName: "Bengal Bulletin",
    industry: "Journalism & Digital Media",
    timeline: "6 weeks",
    role: "Serverless Architecture, Edge CMS Engineering, Core Web Vitals Optimization",
    techStack: ["Cloudflare Workers", "Hono", "React", "Tailwind CSS", "KV Storage"],
    processSteps: [
      {
        step: "01",
        title: "Zero-Downtime Edge Architecture",
        description:
          "Configured globally distributed Cloudflare Workers with KV storage caching static HTML at the edge.",
      },
      {
        step: "02",
        title: "Clean Editorial Typography",
        description:
          "Crafted high-legibility Bengali and English typography with seamless light/dark reading mode.",
      },
      {
        step: "03",
        title: "Automated News Schema",
        description:
          "Implemented Google News and Article JSON-LD markup ensuring instant indexing in Google Discover and Top Stories.",
      },
    ],
    gallery: [
      { src: "/desgins/news/news.png", alt: "Bengal Bulletin editorial homepage" },
      { src: "/desgins/news/news (2).png", alt: "Breaking news ticker and category taxonomy" },
    ],
    testimonial: {
      quote:
        "Our pages load instantly even on low-speed mobile connections. We handled our highest traffic spike without a single millisecond of downtime.",
      author: "Editorial Board",
      title: "Bengal Bulletin",
    },
    faqs: [
      {
        q: "What makes Bengal Bulletin unique?",
        a: "Bengal Bulletin is engineered on serverless edge compute, delivering news in under 100 milliseconds without traditional database bottlenecks.",
      },
      {
        q: "Who developed Bengal Bulletin?",
        a: "ArtX Dev built the platform using Cloudflare Workers, Hono, and React.",
      },
    ],
    nextProject: "freedomplus",
  },
  {
    slug: "freedomplus",
    title: "Freedom Plus",
    tag: "SaaS · Collaboration Workspace",
    year: "2026",
    img: "/desgins/fredom/ffreedom.png",
    radii: "rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-2xl rounded-bl-2xl",
    liveUrl: "https://freedomplus.lovable.app",
    clientUrl: "https://freedomplus.lovable.app",
    client: "Freedom Plus",
    geoRegion: "International",
    geoCountry: "Global",
    targetKeyword: "freedom plus productivity workspace collaboration app",
    seoTitle: "Freedom Plus Case Study | Modern SaaS Team Workspace Platform",
    metaDescription: "Case study on Freedom Plus by ArtX Dev. Modern SaaS productivity workspace engineered with real-time status boards, collaborative hubs & 1.0s LCP.",
    challenge:
      "High friction in existing team management tools due to cluttered dashboards, steep learning curves, and slow mobile interactions.",
    solution:
      "Crafted a clean, high-conversion SaaS web application featuring fluid status boards, instant notifications, and intuitive member workspaces.",
    result: "+35% daily active user retention · Sub-second interaction speeds · 98/100 Lighthouse.",
    fullDescription:
      "Freedom Plus (freedomplus.lovable.app) is an agile collaboration and productivity workspace designed for fast-moving teams and modern digital organizations. Overly complex project management software often slows teams down with unnecessary configuration and laggy user interfaces.\n\nArtX Dev engineered a streamlined, intuitive SaaS product interface. Teams can organize tasks, coordinate sprints, and maintain operational transparency through clean, responsive visual workflows.",
    clientName: "Freedom Plus",
    industry: "SaaS & Productivity Software",
    timeline: "4 weeks",
    role: "SaaS Product Design, Frontend Engineering, Conversion Architecture",
    techStack: ["React 19", "Tailwind CSS", "Supabase", "Lovable Engine"],
    processSteps: [
      {
        step: "01",
        title: "Frictionless Workflow Design",
        description:
          "Mapped essential team collaboration patterns to reduce clicks required for daily status tracking.",
      },
      {
        step: "02",
        title: "Fluid Micro-Interactions",
        description:
          "Designed responsive drag-and-drop task boards with optimistic UI updates.",
      },
    ],
    gallery: [
      { src: "/desgins/fredom/ffreedom.png", alt: "Freedom Plus dashboard overview" },
      { src: "/desgins/fredom/ffreedom.png2.png", alt: "Collaborative project workspace" },
    ],
    testimonial: {
      quote:
        "The interface is so clean that our teams started using it without any onboarding training. It makes daily task tracking a pleasure.",
      author: "Product Lead",
      title: "Freedom Plus",
    },
    faqs: [
      {
        q: "What is Freedom Plus?",
        a: "Freedom Plus is a modern productivity and project management SaaS application designed for agile teams.",
      },
      {
        q: "Who designed Freedom Plus?",
        a: "ArtX Dev provided product strategy, UI/UX design, and frontend implementation.",
      },
    ],
    nextProject: "tareksec",
  },
  {
    slug: "tareksec",
    title: "TarekSec",
    tag: "Personal Brand · Security Portfolio",
    year: "2026",
    img: "/desgins/my-portfoli/portfolio.png",
    radii: "rounded-tr-[3rem] rounded-br-[3rem] rounded-tl-2xl rounded-bl-2xl",
    liveUrl: "https://tareksec.dev/",
    clientUrl: "https://tareksec.dev/",
    client: "TarekSec",
    geoRegion: "Dhaka",
    geoCountry: "Bangladesh & Global",
    targetKeyword: "tareksec cybersecurity researcher ethical hacker portfolio bangladesh",
    seoTitle: "TarekSec Case Study | Cyber Security Researcher & Hacker Portfolio",
    metaDescription: "Case study on TarekSec (tareksec.dev) engineered by ArtX Dev: terminal-themed cybersecurity researcher portfolio with CVE writeups and 100/100 security score.",
    challenge:
      "Displaying technical security vulnerabilities, CVE discoveries, and bug bounty recognitions in a compelling, authoritative hacker aesthetic without losing clean readability.",
    solution:
      "Developed a cyber-themed minimalist web presence with interactive terminal elements, publication archives, and strict Content-Security-Policy hardening.",
    result: "100/100 Security Audit score · 0.8s mobile LCP · High authority recruiter discovery.",
    fullDescription:
      "TarekSec (tareksec.dev) is the professional cybersecurity portfolio of an elite security researcher specializing in web application penetration testing, cloud security audits, and responsible vulnerability disclosures (CVEs).\n\nArtX Dev created a distinctive developer-first portfolio with dark terminal aesthetics, monospaced typography, and interactive command-line elements that clearly prove offensive and defensive security capabilities.",
    clientName: "TarekSec",
    industry: "Cybersecurity & Vulnerability Research",
    timeline: "3 weeks",
    role: "Brand Architecture, Terminal UI Design, Header Hardening & SEO",
    techStack: ["React 19", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    processSteps: [
      {
        step: "01",
        title: "Terminal Aesthetic & Proof Architecture",
        description:
          "Structured bug bounty hall-of-fame listings and vulnerability research reports with high-contrast code styling.",
      },
      {
        step: "02",
        title: "Strict Security Posture",
        description:
          "Configured CSP Level 3, HSTS, and eliminated all third-party tracker leaks to score 100/100 on Mozilla Observatory.",
      },
    ],
    gallery: [
      { src: "/desgins/my-portfoli/portfolio.png", alt: "TarekSec security researcher homepage" },
      { src: "/desgins/my-portfoli/Screenshot_64.png", alt: "Bug bounty achievements and certifications" },
    ],
    testimonial: {
      quote:
        "The site strikes the exact right balance between a sharp hacker terminal and executive-level credibility.",
      author: "Tarek",
      title: "Security Researcher, TarekSec",
    },
    faqs: [
      {
        q: "Who is TarekSec?",
        a: "TarekSec is a certified cybersecurity specialist and ethical hacker based in Bangladesh, publishing vulnerability research and bug bounty CVEs.",
      },
      {
        q: "Who designed tareksec.dev?",
        a: "ArtX Dev created the portfolio design and hardened frontend architecture.",
      },
    ],
    nextProject: "imrankhanblog",
  },
  {
    slug: "imrankhanblog",
    title: "Imran Khan Blog",
    tag: "Editorial · Personal Journal",
    year: "2026",
    img: "/desgins/New folder (3)/imran.png",
    radii: "rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-2xl rounded-bl-2xl",
    liveUrl: "https://imrankhanblog.netlify.app/",
    clientUrl: "https://imrankhanblog.netlify.app/",
    client: "Imran Khan",
    geoRegion: "Dhaka",
    geoCountry: "Bangladesh",
    targetKeyword: "imran khan thought leadership tech blog bangladesh",
    seoTitle: "Imran Khan Blog Case Study | Minimalist Editorial Publication",
    metaDescription: "ArtX Dev case study on Imran Khan Blog (imrankhanblog.netlify.app): reader-first editorial publication with fluid typography and instant static delivery.",
    challenge:
      "Eliminating digital distractions to provide an elegant, typography-focused reading experience for technical essays and philosophy articles.",
    solution:
      "Built a content-first editorial publication with refined serif typography, automated reading timers, topic filtering, and high-speed delivery.",
    result: "+48% average read completion · 0.7s LCP · 100/100 SEO & Performance.",
    fullDescription:
      "Imran Khan Blog (imrankhanblog.netlify.app) is an independent publication dedicated to thoughtful essays on technology leadership, software engineering, and personal philosophies.\n\nArtX Dev built a distraction-free, typography-forward web platform designed to maximize reading comfort. With generous line spacing, adaptive dark mode, and estimated reading timers, the publication respects the reader's attention.",
    clientName: "Imran Khan",
    industry: "Publishing & Digital Media",
    timeline: "3 weeks",
    role: "Typography Art Direction, Jamstack Engineering, Content Architecture",
    techStack: ["Astro / React", "Tailwind CSS", "Netlify", "Markdown"],
    processSteps: [
      {
        step: "01",
        title: "Editorial Typography Hierarchy",
        description:
          "Selected optimal serif font pairings and responsive sizing for long-form reading on mobile and desktop.",
      },
      {
        step: "02",
        title: "Zero-Bloat Jamstack Architecture",
        description:
          "Pre-rendered all articles as static HTML for instant sub-second page loads without server overhead.",
      },
    ],
    gallery: [
      { src: "/desgins/New folder (3)/imran.png", alt: "Imran Khan editorial blog homepage" },
      { src: "/desgins/New folder (3)/imran1.png", alt: "Article reading experience and typography" },
    ],
    testimonial: {
      quote:
        "The site brings back the elegance of the open web. My readers constantly compliment the clean, distraction-free reading experience.",
      author: "Imran Khan",
      title: "Author & Technologist",
    },
    faqs: [
      {
        q: "What topics are covered on Imran Khan's blog?",
        a: "Technology leadership, modern software architecture, and personal essays.",
      },
      {
        q: "Who designed Imran Khan's publication?",
        a: "ArtX Dev designed the editorial typography and frontend architecture.",
      },
    ],
    nextProject: "artstroy",
  },
  {
    slug: "artstroy",
    title: "ArtX Dev & ArtStory",
    tag: "Agency · Flagship Studio",
    year: "2026",
    img: "/desgins/artstroy/Screenshot_68.png",
    radii: "rounded-tr-[3rem] rounded-br-[3rem] rounded-tl-2xl rounded-bl-2xl",
    liveUrl: "https://www.artxdev.tech/",
    clientUrl: "https://www.artxdev.tech/",
    client: "ArtX Dev Studio",
    geoRegion: "Dhaka & UAE",
    geoCountry: "Bangladesh / International",
    targetKeyword: "artx dev web design agency bangladesh dhaka",
    seoTitle: "ArtX Dev Flagship Studio Case Study | High-Craft Digital Agency",
    metaDescription: "Case study: ArtX Dev's official flagship studio web presence engineered for world-class craft, bilingual localization, sub-1.2s LCP, and top Google rankings.",
    challenge:
      "Demonstrating top-tier agency design craft, fluid typography, and conversion engineering in a competitive global agency market.",
    solution:
      "Created a fluid, motion-rich flagship portal with interactive project directories, live booking flows, and comprehensive SEO/GEO schema graphs.",
    result: "Top Google visibility · 99/100 Core Web Vitals · 3× client conversion rate.",
    fullDescription:
      "ArtX Dev (artxdev.tech) is an elite creative design and software engineering studio crafting high-converting websites, SaaS platforms, and custom digital products for visionary founders in Bangladesh, the UAE, and worldwide.\n\nOur flagship studio platform showcases our design philosophies, verifiable proof of work, and technical capabilities through interactive directory trees, bilingual localization, and sub-1.2s page transitions.",
    clientName: "ArtX Dev",
    industry: "Design & Technology Agency",
    timeline: "Ongoing",
    role: "Brand Direction, Product Engineering, GEO & Technical SEO",
    techStack: ["React 19", "TanStack Router", "Tailwind CSS v4", "Cloudflare Workers"],
    processSteps: [
      {
        step: "01",
        title: "Bespoke Brand Identity",
        description:
          "Crafted our signature aesthetic combining tactile collages with clean, conversion-focused interface components.",
      },
      {
        step: "02",
        title: "Bilingual Internationalization",
        description:
          "Full dual-language support in Bengali and English with complete SEO indexability.",
      },
    ],
    gallery: [
      { src: "/desgins/artstroy/Screenshot_68.png", alt: "ArtX Dev agency showcase homepage" },
      { src: "/desgins/artstroy/Screenshot_69.png", alt: "Creative philosophy and case studies" },
      { src: "/desgins/artstroy/Screenshot_71.png", alt: "Interactive service packages and pricing" },
    ],
    testimonial: {
      quote:
        "ArtX Dev represents the highest standard of web craftsmanship and conversion engineering in Bangladesh.",
      author: "Client Community",
      title: "Founders & Partners",
    },
    faqs: [
      {
        q: "What services does ArtX Dev provide?",
        a: "High-converting web design, Next.js e-commerce storefronts, SaaS application interfaces, and advanced technical SEO/GEO.",
      },
      {
        q: "Where is ArtX Dev located?",
        a: "ArtX Dev operates from Dhaka, Bangladesh and serves clients globally including the UAE, UK, and US.",
      },
    ],
    nextProject: "gearabout",
  },
  {
    slug: "gearabout",
    title: "Gearabout",
    tag: "Editorial · Design & Build",
    year: "2026",
    img: w1,
    radii: "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl",
    challenge:
      "A cult outdoor-gear magazine was losing readers to faster, cleaner competitors.",
    solution:
      "Rebuilt the CMS on a headless stack with an editorial design system and swipeable long-reads.",
    result: "+68% session duration · 2.1s LCP · 3× newsletter signups.",
    fullDescription:
      "Gearabout is a cult publication covering the outer fringes of outdoor gear — ultralight, expedition-grade and genuinely weird equipment. The editorial team had deep audience trust but an aging WordPress build that loaded slowly, looked tired on mobile and made publishing a chore.\n\nWe rebuilt the entire stack: Sanity CMS for a streamlined editorial workflow, a custom React front-end tuned for reading, and a swipeable long-read format that keeps users scrolling instead of bouncing. The new design system brought coherent typography, clear hierarchy and a voice that matches the brand's opinionated tone.",
    client: "Gearabout Magazine",
    industry: "Editorial / Media",
    timeline: "14 weeks",
    role: "Strategy, Design, Development, CMS Architecture",
    techStack: ["React", "Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    processSteps: [
      {
        step: "Research",
        title: "Audience & Competitive Analysis",
        description:
          "Surveyed 200 readers, audited 8 competitors and mapped the full content consumption journey on desktop and mobile.",
      },
      {
        step: "Design",
        title: "Editorial Design System",
        description:
          "Built a typography-first system with variable fonts, generous white space and a modular article template that adapts to any content format.",
      },
      {
        step: "Build",
        title: "Headless CMS & Performance",
        description:
          "Migrated 4,000 articles from WordPress to Sanity with zero content loss. Achieved 2.1s LCP through image pipeline optimisation and edge caching.",
      },
      {
        step: "Scale",
        title: "Newsletter & Analytics",
        description:
          "Integrated a contextual newsletter sign-up within long-reads, tied to a Mailchimp automation. Set up Plausible for privacy-first analytics.",
      },
    ],
    gallery: [
      { src: w1, alt: "Gearabout homepage hero" },
      { src: w2, alt: "Article reading experience" },
      { src: w3, alt: "Mobile swipeable long-read format" },
    ],
    testimonial: {
      quote:
        "ArtX didn't just rebuild our site — they rebuilt how we think about publishing. The new stack has made our team 30% faster and our readers stay twice as long.",
      author: "Jamie Calvert",
      title: "Editor-in-Chief, Gearabout",
    },
    nextProject: "jun-century",
  },
  {
    slug: "jun-century",
    title: "Jun Century",
    tag: "E-commerce · Shopify",
    year: "2025",
    img: w2,
    radii: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl",
    challenge:
      "Heritage tea brand needed a DTC storefront without losing 40 years of craft.",
    solution:
      "Custom Shopify theme, editorial PDPs, and a subscription flow tuned for repeat buyers.",
    result: "+42% conversion rate · 27% AOV lift in first quarter.",
    fullDescription:
      "Jun Century has been sourcing and blending premium teas for four decades. Their new DTC ambition was bold: bypass traditional retail entirely and sell direct, without sacrificing the brand's quiet authority.\n\nThe challenge was technical and editorial. A Shopify store had to feel like a boutique atelier, not a generic e-commerce template. We built a fully custom theme — no off-the-shelf code — with editorial product pages that tell origin stories, a tiered subscription model for repeat buyers, and a checkout flow optimised for AOV.",
    client: "Jun Century Tea",
    industry: "E-commerce / FMCG",
    timeline: "10 weeks",
    role: "E-commerce Strategy, Shopify Development, UX Design",
    techStack: ["Shopify Liquid", "Custom Theme", "Klaviyo", "ReCharge", "Cloudflare"],
    processSteps: [
      {
        step: "Research",
        title: "Buyer Journey Mapping",
        description:
          "Conducted 12 customer interviews and analysed competitor checkout flows to identify friction points and AOV levers.",
      },
      {
        step: "Design",
        title: "Brand-Led Product Pages",
        description:
          "Designed editorial PDPs with origin stories, tasting notes and provenance maps — content that justifies the premium price point.",
      },
      {
        step: "Build",
        title: "Custom Shopify Theme",
        description:
          "Built entirely from scratch — no Dawn, no templates. Fully componentised Liquid for the content team to manage independently.",
      },
      {
        step: "Scale",
        title: "Subscription & Retention",
        description:
          "Integrated ReCharge for subscriptions and Klaviyo for post-purchase flows. Subscription take-up hit 18% in the first month.",
      },
    ],
    gallery: [
      { src: w2, alt: "Jun Century homepage" },
      { src: w1, alt: "Editorial product detail page" },
      { src: w4, alt: "Mobile checkout experience" },
    ],
    testimonial: {
      quote:
        "We were nervous about going direct-to-consumer. ArtX made the whole process feel inevitable. The site converts better than any retail shelf ever did.",
      author: "Mei-Ling Chen",
      title: "Founder, Jun Century",
    },
    nextProject: "veative-kitchen",
  },
  {
    slug: "veative-kitchen",
    title: "Veative Kitchen",
    tag: "Restaurant · Brand",
    year: "2025",
    img: w3,
    radii: "rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-2xl rounded-br-2xl",
    challenge:
      "New chef-led concept needed a launch site that felt like the room itself.",
    solution:
      "Cinematic hero, one-page booking flow, and local SEO scaffolding tied to Google Business.",
    result: "Booked out 6 weeks pre-opening · #1 for target cuisine terms.",
    fullDescription:
      "Veative Kitchen is a tasting-menu restaurant built around a single chef's obsession with fermentation. It opened with no PR budget and no history — just a vision and a waitlist.\n\nOur job was to create the digital equivalent of the dining room: tactile, atmospheric, unhurried. We built a cinematic site with a seamless reservation flow, structured data for Google's rich results and a local SEO strategy that targeted hyper-specific cuisine terms months before opening.",
    client: "Veative Kitchen",
    industry: "Hospitality / F&B",
    timeline: "6 weeks",
    role: "Brand Design, Web Development, Local SEO",
    techStack: ["Next.js", "Framer Motion", "Sanity", "Vercel", "Google Business API"],
    processSteps: [
      {
        step: "Research",
        title: "Hospitality Benchmarking",
        description:
          "Analysed 20 top hospitality sites across Europe and Asia for booking flow friction and visual conventions.",
      },
      {
        step: "Design",
        title: "Cinematic Art Direction",
        description:
          "Directed a brand photo shoot, built a dark-mode-first design system with grain textures and editorial typography.",
      },
      {
        step: "Build",
        title: "Reservation Flow",
        description:
          "Single-page booking flow with real-time availability. Zero friction between intent and confirmed reservation.",
      },
      {
        step: "Scale",
        title: "Local SEO & Google Business",
        description:
          "Structured data for restaurant schema, Google Business optimisation and a content brief targeting 40 long-tail queries.",
      },
    ],
    gallery: [
      { src: w3, alt: "Veative Kitchen homepage" },
      { src: w1, alt: "Menu presentation page" },
      { src: w2, alt: "Reservation experience on mobile" },
    ],
    testimonial: {
      quote:
        "We opened fully booked. I genuinely believe the site was half the reason. People came in saying they found us because of the website.",
      author: "Soren Madsen",
      title: "Head Chef & Owner, Veative Kitchen",
    },
    nextProject: "northform-saas",
  },
  {
    slug: "northform-saas",
    title: "Northform SaaS",
    tag: "Product · Web app",
    year: "2024",
    img: w4,
    radii: "rounded-tr-[3rem] rounded-br-[3rem] rounded-tl-2xl rounded-bl-2xl",
    challenge:
      "Series-A analytics tool had strong product, weak marketing site converting demos.",
    solution:
      "Positioning refresh, opinionated marketing site, and a demo-request funnel with intent tracking.",
    result: "3.1× qualified demos · CAC down 22% in two quarters.",
    fullDescription:
      "Northform had raised a strong Series A and built genuinely great analytics infrastructure. Their problem: the marketing site spoke to engineers, not buyers. Demos were low-volume and low-quality.\n\nWe ran a two-week positioning sprint with the founding team, rebuilt the site around buyer jobs-to-be-done and instrumented the entire funnel with intent tracking. The result was a 3.1× lift in qualified demo requests within 60 days of launch.",
    client: "Northform Analytics",
    industry: "SaaS / B2B Tech",
    timeline: "8 weeks",
    role: "Positioning Strategy, Web Design, Development, Analytics Setup",
    techStack: ["Next.js", "TailwindCSS", "HubSpot", "Segment", "Vercel"],
    processSteps: [
      {
        step: "Research",
        title: "Buyer & ICP Research",
        description:
          "12 customer interviews, win/loss analysis and a full messaging audit to find what language converts vs. what the team assumed.",
      },
      {
        step: "Design",
        title: "Positioning-Led Design",
        description:
          "Rebuilt the value proposition from the ground up. Every section answers a buyer objection, in order.",
      },
      {
        step: "Build",
        title: "Marketing Site & Demo Funnel",
        description:
          "New marketing site with a multi-step demo request form, segment-based copy personalisation and HubSpot CRM integration.",
      },
      {
        step: "Scale",
        title: "Intent Tracking & Iteration",
        description:
          "Segment + HubSpot setup to track page-level intent signals. Monthly A/B test cycle on hero and CTA copy.",
      },
    ],
    gallery: [
      { src: w4, alt: "Northform marketing site homepage" },
      { src: w3, alt: "Product feature section" },
      { src: w1, alt: "Demo request funnel" },
    ],
    testimonial: {
      quote:
        "Our CAC is down 22% and the demos we're getting are actually qualified. The site now does the work our sales team used to do manually.",
      author: "Priya Rajan",
      title: "VP Marketing, Northform",
    },
    nextProject: "samriddhi",
  },
  {
    slug: "samriddhi",
    title: "Samriddhi",
    tag: "FinTech · Web App",
    year: "2026",
    img: imgSamriddhi,
    radii: "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl",
    challenge:
      "A transparent SME investment platform needed a trust-first website that could explain a complex, interest-free investment model clearly to non-technical investors and entrepreneurs.",
    solution:
      "Built a full investment platform with live opportunity listings, an interactive profit calculator, entrepreneur verification workflow, and a policy-driven trust framework — designed for clarity over complexity.",
    result: "Live calculator engagement, structured opportunity pipeline, positioning Samriddhi as a transparent, interest-free investment alternative in Bangladesh.",
    fullDescription:
      "Samriddhi is a pioneering FinTech platform in Bangladesh focused on Shariah-compliant, interest-free SME investments. They needed to bridge the trust gap for non-technical investors while providing a seamless onboarding experience for entrepreneurs seeking capital.\n\nWe designed and developed a full-scale web application featuring real-time investment opportunity listings, an intuitive profit calculator, and a secure verification workflow. The interface was intentionally designed to prioritize transparency and clarity, stripping away the intimidation factor typically associated with financial platforms.",
    client: "Samriddhi",
    industry: "FinTech",
    timeline: "12 weeks",
    role: "UX/UI Design, Full-Stack Development, Platform Architecture",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    processSteps: [
      {
        step: "Research",
        title: "Trust & Compliance Mapping",
        description:
          "Analyzed existing investment mental models in Bangladesh and mapped out regulatory and Shariah-compliance requirements for clear user communication.",
      },
      {
        step: "Design",
        title: "Clarity-First Interface",
        description:
          "Created a design system that uses generous whitespace, clear typography, and step-by-step visual feedback to reduce cognitive load during complex financial workflows.",
      },
      {
        step: "Build",
        title: "Platform Engineering",
        description:
          "Developed the core investment engine, incorporating real-time data for the profit calculator and a secure document handling system for entrepreneur verification.",
      },
      {
        step: "Scale",
        title: "Launch & Iterate",
        description:
          "Deployed the platform with comprehensive tracking to measure engagement on the calculator and drop-off points in the investment funnel.",
      },
    ],
    gallery: [
      { src: w1, alt: "Samriddhi investment platform dashboard" },
      { src: w2, alt: "Interactive profit calculator" },
      { src: w3, alt: "Entrepreneur verification workflow" },
    ],
    testimonial: {
      quote:
        "The platform ArtX built finally matches our vision of transparent, interest-free investing. The calculator alone has become our strongest acquisition tool.",
      author: "Samriddhi Team",
      title: "Founders, Samriddhi",
    },
    nextProject: "mohaimin-patwary",
  },
  {
    slug: "mohaimin-patwary",
    title: "Mohaimin Patwary",
    tag: "Education · Web App",
    year: "2026",
    img: imgMohaimin,
    radii: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl",
    challenge:
      "A bestselling finance author needed a course enrollment platform handling both online and offline batches, a 6-month curriculum, and reader-to-student conversion.",
    solution:
      "Built a conversion-focused course site with month-by-month curriculum breakdown, dual online/offline pricing tiers, review system, and registration flow with WhatsApp support integration.",
    result: "110+ enrollments, 130+ reviews collected, students from 20+ countries.",
    fullDescription:
      "Mohaimin Patwary, a renowned finance author, was ready to scale his educational offerings from a bestselling book to a comprehensive 6-month course. The challenge was building a platform that seamlessly handled complex scheduling (online vs. offline batches) while maintaining high conversion rates from his existing reader base.\n\nWe engineered a bespoke educational platform focused heavily on the enrollment journey. By breaking down the 6-month curriculum visually and providing clear, frictionless registration pathways integrated with WhatsApp support, we eliminated the typical drop-offs seen in high-ticket course sales.",
    client: "Mohaimin Patwary",
    industry: "Education",
    timeline: "8 weeks",
    role: "Product Strategy, Web Development, UX Design",
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
    processSteps: [
      {
        step: "Research",
        title: "Enrollment Journey Analysis",
        description:
          "Mapped the transition from reader to student, identifying key information required to justify a 6-month commitment.",
      },
      {
        step: "Design",
        title: "Curriculum Visualization",
        description:
          "Designed an interactive, month-by-month curriculum breakdown that clearly communicated value without overwhelming the user.",
      },
      {
        step: "Build",
        title: "Dual-Tier Registration",
        description:
          "Implemented a robust enrollment flow supporting both online and offline batch management with integrated WhatsApp support for pre-sales queries.",
      },
      {
        step: "Scale",
        title: "Social Proof Engine",
        description:
          "Integrated a dynamic review system to capture and display student feedback, creating a compounding trust asset.",
      },
    ],
    gallery: [
      { src: w2, alt: "Mohaimin Patwary course homepage" },
      { src: w3, alt: "Curriculum breakdown and pricing" },
      { src: w4, alt: "Student review and enrollment flow" },
    ],
    testimonial: {
      quote:
        "The site perfectly captured the essence of the course. Managing both offline and online cohorts is now completely frictionless, and the global enrollment numbers speak for themselves.",
      author: "Mohaimin Patwary",
      title: "Author & Educator",
    },
    nextProject: "techvrs-security",
  },
  {
    slug: "techvrs-security",
    title: "Techvrs Security",
    tag: "Personal Brand · Portfolio",
    year: "2026",
    img: imgTechvrs,
    radii: "rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-2xl rounded-br-2xl",
    challenge:
      "Needed a professional portfolio to showcase cybersecurity credentials, hands-on SOC projects, and certifications for job/freelance opportunities.",
    solution:
      "Built a terminal-themed personal brand site with interactive skills section, certification showcase, and featured security project case studies.",
    result: "A credible, developer-styled portfolio positioned as ArtX's security consulting arm.",
    fullDescription:
      "Techvrs Security required a digital presence that immediately communicated deep technical competence. The goal was to build a portfolio that didn't just list certifications, but actively demonstrated cybersecurity expertise through its aesthetic and structure.\n\nWe designed a distinctively 'hacker-chic', terminal-inspired interface that resonates with engineering and security teams. The site features an interactive skills matrix, a verifiable certification showcase, and detailed breakdowns of complex SOC (Security Operations Center) projects, effectively serving as both a personal brand hub and ArtX's specialized security consulting arm.",
    client: "Techvrs Security",
    industry: "Cybersecurity",
    timeline: "4 weeks",
    role: "Brand Identity, Web Design, Frontend Development",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    processSteps: [
      {
        step: "Research",
        title: "Security Aesthetic Benchmarking",
        description:
          "Analyzed top security consultancies and personal hacker blogs to strike the right balance between 'terminal aesthetic' and professional credibility.",
      },
      {
        step: "Design",
        title: "Terminal-Themed Interface",
        description:
          "Developed a dark-mode exclusive, monospaced typography system that feels like a command-line interface while remaining fully accessible.",
      },
      {
        step: "Build",
        title: "Interactive Showcases",
        description:
          "Built dynamic components for filtering certifications and exploring deep-dive security project case studies.",
      },
      {
        step: "Scale",
        title: "Performance & Security",
        description:
          "Implemented stringent CSP headers and static delivery to ensure the security portfolio itself scored 100/100 on all security audits.",
      },
    ],
    gallery: [
      { src: w3, alt: "Techvrs Security terminal-themed homepage" },
      { src: w4, alt: "Interactive skills and certification matrix" },
      { src: w1, alt: "SOC project case study layout" },
    ],
    testimonial: {
      quote:
        "The terminal aesthetic perfectly captures my work environment. It's not just a resume; it's a statement of technical capability that instantly earns trust from engineering leads.",
      author: "Techvrs Lead",
      title: "Security Consultant",
    },
    nextProject: "piyash",
  },
  {
    slug: "piyash",
    title: "PIYASH",
    tag: "Personal Brand · Portfolio",
    year: "2026",
    img: w4,
    radii: "rounded-tr-[3rem] rounded-br-[3rem] rounded-tl-2xl rounded-bl-2xl",
    challenge:
      "A full-stack developer needed a distinctive portfolio to stand out for job and freelance opportunities, showcasing production-grade projects across the stack.",
    solution:
      "Built an interactive, terminal/dev-themed portfolio featuring a full tech stack showcase, categorized project cards (API platforms, real-time chat, e-commerce, analytics dashboards), and detailed work experience timeline.",
    result: "A standout developer portfolio that clearly demonstrates full-stack range across frontend, backend, and DevOps.",
    fullDescription:
      "Standing out in the highly competitive full-stack development market requires more than a simple list of GitHub links. PIYASH needed a portfolio that acted as a live demonstration of his capabilities—fast, interactive, and flawlessly executed.\n\nWe created a developer-centric portfolio that leverages a clean, high-contrast aesthetic. It features categorized, deep-dive project cards for API platforms and real-time apps, alongside an interactive timeline of his engineering experience. The site itself serves as proof of his frontend proficiency, while the documented architectures prove his backend depth.",
    client: "PIYASH",
    industry: "Software Engineering",
    timeline: "4 weeks",
    role: "UI/UX Design, Portfolio Architecture",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    processSteps: [
      {
        step: "Research",
        title: "Developer Portfolio Audit",
        description:
          "Reviewed hundreds of engineering portfolios to identify common pitfalls and opportunities for differentiation.",
      },
      {
        step: "Design",
        title: "Code-Centric Layout",
        description:
          "Crafted a layout that heavily features code snippets, architecture diagrams, and tech stack icons over generic stock imagery.",
      },
      {
        step: "Build",
        title: "Categorized Project Engine",
        description:
          "Implemented a seamless filtering system allowing recruiters to easily sort projects by domain (E-commerce, API, Analytics, etc.).",
      },
      {
        step: "Scale",
        title: "SEO & Discoverability",
        description:
          "Optimized the site structure and meta tags for developer-specific search terms, ensuring maximum visibility for freelance opportunities.",
      },
    ],
    gallery: [
      { src: w4, alt: "PIYASH developer portfolio homepage" },
      { src: w1, alt: "Categorized project showcase" },
      { src: w2, alt: "Interactive experience timeline" },
    ],
    testimonial: {
      quote:
        "The site instantly communicates my technical range. I've seen a noticeable uptick in the quality of inbound freelance requests since launching the new portfolio.",
      author: "PIYASH",
      title: "Full-Stack Developer",
    },
    nextProject: "okkhor-pathagar",
  },
  {
    slug: "okkhor-pathagar",
    title: "Okkhor Pathagar",
    tag: "Education · Web App",
    year: "2026",
    img: imgOkkhor,
    radii: "rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-2xl rounded-bl-2xl",
    challenge:
      "A growing community library needed a modern digital catalog and membership platform to manage book inventory and increase local reader engagement.",
    solution:
      "Developed a comprehensive library management system featuring a searchable digital catalog, user membership portals, and automated borrowing workflows.",
    result: "Streamlined book discovery, significant increase in digital member registrations, and efficient inventory management for librarians.",
    fullDescription:
      "Okkhor Pathagar (Alphabet Library) serves as a vital educational hub for its community. As their collection and membership grew, relying on manual tracking systems became unsustainable. They required a digital transformation that preserved their community-focused ethos.\n\nWe built a bespoke web application tailored for library operations. The platform provides members with an intuitive search interface to discover books, while giving administrators a robust backend to manage inventory, track lending cycles, and handle membership renewals. The design emphasizes accessibility and ease of use for readers of all ages.",
    client: "Okkhor Pathagar",
    industry: "Education / Publishing",
    timeline: "10 weeks",
    role: "System Design, Full-Stack Development, UI/UX",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    processSteps: [
      {
        step: "Research",
        title: "Library Workflow Analysis",
        description:
          "Shadowed librarians to understand the pain points in current book checkout, return, and inventory management processes.",
      },
      {
        step: "Design",
        title: "Accessible Interface Design",
        description:
          "Created a highly accessible, easy-to-navigate catalog interface prioritizing large typography and clear search mechanics for a diverse demographic.",
      },
      {
        step: "Build",
        title: "Inventory & Lending Engine",
        description:
          "Engineered a reliable backend system to handle concurrent book statuses, due date tracking, and automated reminders.",
      },
      {
        step: "Scale",
        title: "Community Rollout",
        description:
          "Launched the platform with a simplified onboarding flow, resulting in rapid adoption by existing library members.",
      },
    ],
    gallery: [
      { src: w1, alt: "Okkhor Pathagar digital catalog" },
      { src: w2, alt: "Member dashboard and borrowing history" },
      { src: w3, alt: "Librarian inventory management view" },
    ],
    testimonial: {
      quote:
        "The transition to this digital system has completely revitalized our library. Managing our collection is effortless, and our members love being able to browse books from home.",
      author: "Library Director",
      title: "Okkhor Pathagar",
    },
    nextProject: "gearabout",
  },
];

// ─── Blog ─────────────────────────────────────────────────────────────────────

export { blogPosts } from "./blog-posts";


// ─── Pricing ──────────────────────────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "৳35,000",
    description: "For businesses just getting started online.",
    services: [
      "Unlimited Pages (আপনার প্রয়োজন অনুযায়ী)",
      "Product Control Panel",
      "WhatsApp Redirect Payment Option",
      "Full On-Page SEO",
      "Free Subdomain",
      "1 GB Hosting",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "৳65,000",
    description: "For brands ready to own their domain and operations.",
    services: [
      "Basic প্যাকেজের সব কিছু",
      "Custom Domain + Hosting",
      "Full Custom Admin Dashboard",
      "Product/Order Management System",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Ultra",
    price: "৳95,000",
    description: "The all-in-one solution for serious growth.",
    services: [
      "Premium প্যাকেজের সব কিছু",
      "All-in-One Solution (আপনার business-এর জন্য যা যা লাগবে)",
      "Priority Support",
      "Advanced Customization",
    ],
    cta: "Get Started",
  },
];

export const pricingFaqs: ServiceFaq[] = [
  {
    q: "What's included in the Basic, Premium, and Ultra packages?",
    a: "Our Basic tier (৳35,000) includes unlimited pages (as needed), product control panel, WhatsApp redirect payment option, full on-page SEO, free subdomain, and 1 GB hosting. Premium (৳65,000) adds custom domain & hosting and a full custom admin dashboard. Ultra (৳95,000) is an all-in-one scaling solution with priority support.",
    qBn: "Basic, Premium এবং Ultra প্যাকেজে কী কী অন্তর্ভুক্ত থাকে?",
    aBn: "আমাদের Basic প্যাকেজে (৳৩৫,০০০) রয়েছে আনলিমিটেড পেজ, প্রোডাক্ট কন্ট্রোল প্যানেল, হোয়াটসঅ্যাপ পেমেন্ট রিডাইরেক্ট, অন-পেজ এসইও, ফ্রি সাবডোমেইন এবং ১ জিবি হোস্টিং। Premium প্যাকেজে (৳৬৫,০০০) রয়েছে কাস্টম ডোমেইন ও হোস্টিং এবং ফুল কাস্টম অ্যাডমিন ড্যাশবোর্ড। আর Ultra প্যাকেজে (৳৯৫,০০০) রয়েছে অল-ইন-ওয়ান সমাধান ও প্রায়োরিটি সাপোর্ট।",
  },
  {
    q: "How does the WhatsApp redirect checkout work?",
    a: "When a customer orders on your website, our system automatically formats their item selection, delivery address, and order total into a clean message and redirects them directly to your WhatsApp Business number (01645441584) to complete the order.",
    qBn: "হোয়াটসঅ্যাপ রিডাইরেক্ট চেকআউট কীভাবে কাজ করে?",
    aBn: "যখন কোনো গ্রাহক আপনার ওয়েবসাইটে অর্ডার করেন, আমাদের সিস্টেম স্বয়ংক্রিয়ভাবে তাদের নির্বাচিত পণ্য, ডেলিভারি ঠিকানা এবং মোট বিল একটি সাজানো মেসেজ আকারে আপনার হোয়াটসঅ্যাপ বিজনেস নম্বরে (01645441584) রিডাইরেক্ট করে দেয়।",
  },
  {
    q: "Can I upgrade my package from Basic to Premium or Ultra later?",
    a: "Yes! Our architecture is modular and scalable. You can start with the Basic tier today and upgrade to Premium or Ultra anytime as your business, inventory, and traffic grow, with zero downtime or data loss.",
    qBn: "আমি কি পরবর্তীতে Basic থেকে Premium বা Ultra প্যাকেজে আপগ্রেড করতে পারব?",
    aBn: "হ্যাঁ! আমাদের আর্কিটেকচার সম্পূর্ণ মডুলার ও স্কেলেবল। আপনি আজ Basic প্যাকেজ দিয়ে শুরু করে পরবর্তীতে যেকোনো সময় কোনো ডাউনটাইম বা ডেটা লস ছাড়াই Premium বা Ultra প্যাকেজে আপগ্রেড করতে পারবেন।",
  },
  {
    q: "What payment methods and terms do you accept?",
    a: "We accept local payment methods including bKash, Nagad, Rocket, and Bank Transfer. For standard projects, we typically take 50% upfront to initiate development and the remaining 50% upon project completion and deployment.",
    qBn: "আপনারা কী কী পেমেন্ট মাধ্যম ও শর্ত গ্রহণ করেন?",
    aBn: "আমরা বিকাশ (bKash), নগদ (Nagad), রকেট এবং সরাসরি ব্যাংক ট্রান্সফার গ্রহণ করি। সাধারণত কাজ শুরুর পূর্বে ৫০% অগ্রিম এবং কাজ সম্পন্ন ও লাইভ হওয়ার পর বাকি ৫০% পেমেন্ট নেওয়া হয়।",
  },
  {
    q: "Do you offer post-launch maintenance and technical SEO support?",
    a: "Yes! Every project ships with an initial free support window. After launch, we offer ongoing maintenance and growth retainers for regular content updates, security audits, and continuous SEO rankings.",
    qBn: "সাইট লাইভ হওয়ার পর কি আপনারা মেইনটেইন্যান্স ও এসইও সাপোর্ট দেন?",
    aBn: "হ্যাঁ! প্রতিটি প্রোজেক্টের সাথে প্রাথমিক ফ্রি সাপোর্ট অন্তর্ভুক্ত থাকে। পরবর্তীতে নিয়মিত কন্টেন্ট আপডেট, সিকিউরিটি অডিট এবং ধারাবাহিক এসইও র‍্যাঙ্কিংয়ের জন্য আমাদের মেইনটেইন্যান্স সার্ভিস গ্রহণ করতে পারবেন।",
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    name: "Muhammad Tarek (MD Tarek)",
    role: "Founder & Creative Director",
    bio: "10 years building digital products for brands across SaaS, e-commerce and hospitality. Believes beautiful and functional are the same thing, badly explained.",
    initials: "MT",
  },
  {
    name: "Sophia Lin",
    role: "Lead Designer",
    bio: "Former in-house designer at a Series-B fintech. Obsessed with typographic hierarchy and the kind of design that makes copywriters look good.",
    initials: "SL",
  },
  {
    name: "Marcus Webb",
    role: "Lead Engineer",
    bio: "Full-stack React engineer with a fixation on Core Web Vitals and zero-runtime CSS. Breaks production on Fridays, fixes it faster.",
    initials: "MW",
  },
  {
    name: "Priya Nair",
    role: "SEO & Growth Strategist",
    bio: "Built organic channels from zero to 500k monthly visits across three companies. Approaches SEO the way a journalist approaches a story — with curiosity.",
    initials: "PN",
  },
];

// ─── Studio Timeline ──────────────────────────────────────────────────────────

export const studioMilestones: StudioMilestone[] = [
  {
    year: "2016",
    title: "Founded",
    description:
      "Two designers, one client, a strong opinion about whitespace. ArtX started in a shared apartment in Lisbon.",
  },
  {
    year: "2018",
    title: "First US client",
    description:
      "Landed our first North American engagement — a SaaS rebrand that tripled qualified demo requests.",
  },
  {
    year: "2020",
    title: "Went fully remote",
    description:
      "Expanded to a team of five across three time zones. Proved that senior output doesn't require a shared office.",
  },
  {
    year: "2022",
    title: "950+ projects milestone",
    description:
      "Passed 950 completed projects across design, development and SEO. Average client relationship: 2.4 years.",
  },
  {
    year: "2024",
    title: "Security partnership",
    description:
      "Formalised our partnership with Techvrs.com to offer penetration testing and security hardening to all clients.",
  },
  {
    year: "2026",
    title: "Now",
    description:
      "Eight people. Four disciplines. Still taking on work we have to grow into.",
  },
];

// ─── Values ───────────────────────────────────────────────────────────────────

export const studioValues: StudioValue[] = [
  {
    n: "01",
    title: "Beautiful is not enough.",
    description:
      "Every design decision we make has to justify itself in performance data. Aesthetics earn their place by moving metrics.",
  },
  {
    n: "02",
    title: "Senior hands on everything.",
    description:
      "We don't have a junior tier. Every deliverable is touched by someone with years of scar tissue. That's not elitism — it's respect for the brief.",
  },
  {
    n: "03",
    title: "Small is a strategy.",
    description:
      "We're eight people by design. Small enough to move fast and give a damn. Big enough to handle complex, multi-discipline projects without subcontracting.",
  },
  {
    n: "04",
    title: "Opinionated by default.",
    description:
      "Clients hire us for a point of view, not just execution. We push back when we think something is wrong — respectfully, with evidence.",
  },
];

// Update `href` and set `live: true` once a real handle/profile exists —
// the Footer automatically swaps the "coming soon" mailto link for the
// live external link.
export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/artxdev/",
    live: true,
  },
  {
    label: "Instagram",
    href: "mailto:artxstudiocom@gmail.com?subject=Instagram%20handle",
    live: false,
  },
  {
    label: "Dribbble",
    href: "mailto:artxstudiocom@gmail.com?subject=Dribbble%20handle",
    live: false,
  },
  {
    label: "LinkedIn",
    href: "mailto:artxstudiocom@gmail.com?subject=LinkedIn%20handle",
    live: false,
  },
];

export type ConceptItem = {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  category: string;
  images: string[];
};

export const conceptWork: ConceptItem[] = [
  { slug: "abstract-geometric-3d", titleKey: "abstractGeometric3dTitle", descriptionKey: "abstractGeometric3dDesc", category: "Brand", images: ["/concepts/abstract-geometric-3d-1.webp", "/concepts/abstract-geometric-3d-2.webp"] },
  { slug: "cyclone-environment-presentation", titleKey: "cycloneEnvironmentTitle", descriptionKey: "cycloneEnvironmentDesc", category: "Presentation", images: ["/concepts/cyclone-environment-presentation-1.webp", "/concepts/cyclone-environment-presentation-2.webp"] },
  { slug: "division-business-presentation", titleKey: "divisionBusinessTitle", descriptionKey: "divisionBusinessDesc", category: "Presentation", images: ["/concepts/division-business-presentation-1.webp", "/concepts/division-business-presentation-2.webp"] },
  { slug: "ensemble-fashion-presentation", titleKey: "ensembleFashionTitle", descriptionKey: "ensembleFashionDesc", category: "Presentation", images: ["/concepts/ensemble-fashion-presentation-1.webp", "/concepts/ensemble-fashion-presentation-2.webp", "/concepts/ensemble-fashion-presentation-3.webp"] },
  { slug: "lema-preview-presentation", titleKey: "lemaPreviewTitle", descriptionKey: "lemaPreviewDesc", category: "Presentation", images: ["/concepts/lema-preview-presentation-1.webp"] },
  { slug: "caringmax-medical-presentation", titleKey: "caringmaxMedicalTitle", descriptionKey: "caringmaxMedicalDesc", category: "Health & Medical", images: ["/concepts/caringmax-medical-presentation-1.webp", "/concepts/caringmax-medical-presentation-2.webp", "/concepts/caringmax-medical-presentation-3.webp"] },
  { slug: "modular-tech-presentation", titleKey: "modularTechTitle", descriptionKey: "modularTechDesc", category: "Presentation", images: ["/concepts/modular-tech-presentation-1.webp", "/concepts/modular-tech-presentation-2.webp"] },
  { slug: "stacy-travel-presentation", titleKey: "stacyTravelTitle", descriptionKey: "stacyTravelDesc", category: "Presentation", images: ["/concepts/stacy-travel-presentation-1.webp", "/concepts/stacy-travel-presentation-2.webp", "/concepts/stacy-travel-presentation-3.webp"] },
  { slug: "yuffiny-fashion-presentation", titleKey: "yuffinyFashionTitle", descriptionKey: "yuffinyFashionDesc", category: "Presentation", images: ["/concepts/yuffiny-fashion-presentation-1.webp", "/concepts/yuffiny-fashion-presentation-2.webp", "/concepts/yuffiny-fashion-presentation-3.webp"] },
  { slug: "nexus-ai-dashboard", titleKey: "nexusAiDashboardTitle", descriptionKey: "nexusAiDashboardDesc", category: "SaaS", images: ["/concepts/nexus-ai-dashboard-1.webp"] },
  { slug: "nexus-ai-pricing", titleKey: "nexusAiPricingTitle", descriptionKey: "nexusAiPricingDesc", category: "SaaS", images: ["/concepts/nexus-ai-pricing-1.webp"] },
  { slug: "modern-blog-archive", titleKey: "modernBlogArchiveTitle", descriptionKey: "modernBlogArchiveDesc", category: "Blog & News", images: ["/concepts/modern-blog-archive-1.webp"] },
  { slug: "book-launch-hero", titleKey: "bookLaunchHeroTitle", descriptionKey: "bookLaunchHeroDesc", category: "E-commerce", images: ["/concepts/book-launch-hero-1.webp"] },
  { slug: "bookstore-platform", titleKey: "bookstorePlatformTitle", descriptionKey: "bookstorePlatformDesc", category: "E-commerce", images: ["/concepts/bookstore-platform-1.webp"] },
  { slug: "elearning-course-catalog", titleKey: "elearningCourseCatalogTitle", descriptionKey: "elearningCourseCatalogDesc", category: "Education", images: ["/concepts/elearning-course-catalog-1.webp"] },
  { slug: "custom-admin-dashboard", titleKey: "customAdminDashboardTitle", descriptionKey: "customAdminDashboardDesc", category: "SaaS", images: ["/concepts/custom-admin-dashboard-1.webp"] },
  { slug: "medical-clinic-hero", titleKey: "medicalClinicHeroTitle", descriptionKey: "medicalClinicHeroDesc", category: "Health & Medical", images: ["/concepts/medical-clinic-hero-1.webp"] },
  { slug: "telehealth-platform-hero", titleKey: "telehealthPlatformHeroTitle", descriptionKey: "telehealthPlatformHeroDesc", category: "Health & Medical", images: ["/concepts/telehealth-platform-hero-1.webp"] },
  { slug: "medical-specialists-directory", titleKey: "medicalSpecialistsDirectoryTitle", descriptionKey: "medicalSpecialistsDirectoryDesc", category: "Health & Medical", images: ["/concepts/medical-specialists-directory-1.webp"] },
  { slug: "fast-food-delivery-hero", titleKey: "fastFoodDeliveryHeroTitle", descriptionKey: "fastFoodDeliveryHeroDesc", category: "Food & Beverage", images: ["/concepts/fast-food-delivery-hero-1.webp"] },
  { slug: "foodmart-grocery-app", titleKey: "foodmartGroceryAppTitle", descriptionKey: "foodmartGroceryAppDesc", category: "Food & Beverage", images: ["/concepts/foodmart-grocery-app-1.webp"] },
  { slug: "foodmart-delivery-hero", titleKey: "foodmartDeliveryHeroTitle", descriptionKey: "foodmartDeliveryHeroDesc", category: "Food & Beverage", images: ["/concepts/foodmart-delivery-hero-1.webp"] },
  { slug: "restaurant-digital-menu", titleKey: "restaurantDigitalMenuTitle", descriptionKey: "restaurantDigitalMenuDesc", category: "Food & Beverage", images: ["/concepts/restaurant-digital-menu-1.webp"] },
  { slug: "music-streaming-app", titleKey: "musicStreamingAppTitle", descriptionKey: "musicStreamingAppDesc", category: "Web", images: ["/concepts/music-streaming-app-1.webp"] },
  { slug: "global-news-portal", titleKey: "globalNewsPortalTitle", descriptionKey: "globalNewsPortalDesc", category: "Blog & News", images: ["/concepts/global-news-portal-1.webp"] },
  { slug: "daily-journal-homepage", titleKey: "dailyJournalHomepageTitle", descriptionKey: "dailyJournalHomepageDesc", category: "Blog & News", images: ["/concepts/daily-journal-homepage-1.webp"] },
  { slug: "organic-farm-store", titleKey: "organicFarmStoreTitle", descriptionKey: "organicFarmStoreDesc", category: "E-commerce", images: ["/concepts/organic-farm-store-1.webp"] },
  { slug: "organic-produce-market", titleKey: "organicProduceMarketTitle", descriptionKey: "organicProduceMarketDesc", category: "E-commerce", images: ["/concepts/organic-produce-market-1.webp"] },
  { slug: "creative-agency-portfolio", titleKey: "creativeAgencyPortfolioTitle", descriptionKey: "creativeAgencyPortfolioDesc", category: "Agency", images: ["/concepts/creative-agency-portfolio-1.webp"] },
  { slug: "international-school-portal", titleKey: "internationalSchoolPortalTitle", descriptionKey: "internationalSchoolPortalDesc", category: "Education", images: ["/concepts/international-school-portal-1.webp"] },
  { slug: "design-studio-services", titleKey: "designStudioServicesTitle", descriptionKey: "designStudioServicesDesc", category: "Agency", images: ["/concepts/design-studio-services-1.webp"] },
  { slug: "audio-platform-interface", titleKey: "audioPlatformInterfaceTitle", descriptionKey: "audioPlatformInterfaceDesc", category: "Web", images: ["/concepts/audio-platform-interface-1.webp"] },
  { slug: "hospital-services-portal", titleKey: "hospitalServicesPortalTitle", descriptionKey: "hospitalServicesPortalDesc", category: "Health & Medical", images: ["/concepts/hospital-services-portal-1.webp"] },
  { slug: "travel-destination-blog", titleKey: "travelDestinationBlogTitle", descriptionKey: "travelDestinationBlogDesc", category: "Blog & News", images: ["/concepts/travel-destination-blog-1.webp"] },
  { slug: "stellla-video-demo", titleKey: "stelllaVideoTitle", descriptionKey: "stelllaVideoDesc", category: "Web", images: ["/concepts/stellla-video-1.webp"] },
  { slug: "business-website-ui", titleKey: "businessWebsiteUiTitle", descriptionKey: "businessWebsiteUiDesc", category: "Brand", images: ["/concepts/business-website-ui-1.webp", "/concepts/business-website-ui-2.webp", "/concepts/business-website-ui-3.webp", "/concepts/business-website-ui-4.webp"] },
  { slug: "consulting-website-design", titleKey: "consultingWebsiteDesignTitle", descriptionKey: "consultingWebsiteDesignDesc", category: "Agency", images: ["/concepts/consulting-website-design-1.webp"] },
  { slug: "criminal-defense-law-ui", titleKey: "criminalDefenseLawUiTitle", descriptionKey: "criminalDefenseLawUiDesc", category: "Brand", images: ["/concepts/criminal-defense-law-ui-1.webp", "/concepts/criminal-defense-law-ui-2.webp"] },
  { slug: "hela-women-shoes", titleKey: "helaWomenShoesTitle", descriptionKey: "helaWomenShoesDesc", category: "E-commerce", images: ["/concepts/hela-women-shoes-1.webp"] },
  { slug: "personal-portfolio-ui", titleKey: "personalPortfolioUiTitle", descriptionKey: "personalPortfolioUiDesc", category: "Brand", images: ["/concepts/personal-portfolio-ui-1.webp", "/concepts/personal-portfolio-ui-2.webp"] },
  { slug: "petpals-pet-care", titleKey: "petpalsPetCareTitle", descriptionKey: "petpalsPetCareDesc", category: "Brand", images: ["/concepts/petpals-pet-care-1.webp"] },
  { slug: "shopify-ecommerce-template", titleKey: "shopifyEcommerceTemplateTitle", descriptionKey: "shopifyEcommerceTemplateDesc", category: "E-commerce", images: ["/concepts/shopify-ecommerce-template-1.webp"] },
  { slug: "sportswear-ecommerce", titleKey: "sportswearEcommerceTitle", descriptionKey: "sportswearEcommerceDesc", category: "E-commerce", images: ["/concepts/sportswear-ecommerce-1.webp", "/concepts/sportswear-ecommerce-2.webp"] },
  { slug: "lawyer-agency-website", titleKey: "lawyerAgencyWebsiteTitle", descriptionKey: "lawyerAgencyWebsiteDesc", category: "Agency", images: ["/concepts/lawyer-agency-website-1.webp"] },
  { slug: "ecommerce-websites-templates", titleKey: "ecommerceWebsitesTemplatesTitle", descriptionKey: "ecommerceWebsitesTemplatesDesc", category: "E-commerce", images: ["/concepts/ecommerce-websites-templates-1.webp", "/concepts/ecommerce-websites-templates-2.webp"] }
];
