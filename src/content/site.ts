import heroCollage from "@/assets/hero-collage.jpg";
import sDesign from "@/assets/service-design.jpg";
import sDev from "@/assets/service-dev.jpg";
import sSeo from "@/assets/service-seo.jpg";
import sSecurity from "@/assets/service-security.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";

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
};

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
    "ArtX is an independent studio designing, building, and ranking standout digital products for brands that refuse to blend in.",
  primaryCta: { label: "Get Started", to: "/contact" as const },
  secondaryCta: { label: "View selected work", to: "/work" as const },
  image: {
    src: heroCollage,
    alt: "Torn paper collage illustrating ArtX creative craft",
  },
};

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    n: "01",
    t: "Website Design",
    d: "Editorial, high-craft interfaces designed to convert without shouting.",
    img: sDesign,
    slug: "website-design",
  },
  {
    n: "02",
    t: "Web Development",
    d: "Production-grade React, tuned for Core Web Vitals and effortless CMS ops.",
    img: sDev,
    slug: "web-development",
  },
  {
    n: "03",
    t: "SEO",
    d: "Technical audits, content architecture and link work that compounds.",
    img: sSeo,
    slug: "seo",
  },
  {
    n: "04",
    t: "Web Security",
    d: "Security audits, hardening and monitoring — delivered with our partner.",
    img: sSecurity,
    slug: "web-security",
    link: "https://techvrs.com",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "website-design",
    n: "01",
    t: "Website Design",
    d: "Editorial, high-craft interfaces designed to convert without shouting.",
    img: sDesign,
    valueProp: "Interfaces that earn attention and hold it.",
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
  },
  {
    slug: "web-development",
    n: "02",
    t: "Web Development",
    d: "Production-grade React, tuned for Core Web Vitals and effortless CMS ops.",
    img: sDev,
    valueProp: "Fast, maintainable code that your team can actually own.",
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
  },
  {
    slug: "seo",
    n: "03",
    t: "SEO",
    d: "Technical audits, content architecture and link work that compounds.",
    img: sSeo,
    valueProp: "Organic growth that doesn't stop when the ad budget does.",
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
];

// ─── Projects / Case Studies ──────────────────────────────────────────────────

export const projects: CaseStudy[] = [
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
    nextProject: "gearabout",
  },
];

// ─── Blog ─────────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: "web-design-trends-2025",
    title: "Web Design Trends That Actually Matter in 2025",
    excerpt:
      "Beyond the noise: the shifts in interface design that are genuinely moving the needle on engagement and conversion.",
    date: "2025-11-12",
    readTime: 7,
    category: "Design",
    author: { name: "ArtX Studio", role: "Creative Director" },
    relatedSlugs: ["core-web-vitals-seo-guide", "gearabout-retrospective"],
    content: `## The signal vs. the noise

Every year, design Twitter announces the death of something and the birth of something else. Most of it is aesthetic churn. The trends worth paying attention to are the ones tied to how people actually read, scroll and decide on a screen.

Here are the shifts we're seeing in client work that are changing outcomes — not just portfolios.

## 1. Typographic hierarchy is doing more lifting

The "hero image + headline" formula is tired. The sites performing best right now lead with a single, confident typographic statement at large scale. No hero image, no gradient backdrop — just type, space and a clear value proposition.

This works because it forces the brand to have a real point of view. You can't hide behind a nice photo when words have to carry the room.

**What it means in practice:** Invest in type selection and hierarchy before you think about imagery. The image should reinforce the message, not replace it.

## 2. Micro-interactions are being edited, not added

For years, the brief was "add more animation." Now the best work is about restraint. Transitions that communicate state change (hover, load, scroll) earn their place. Decorative motion that runs on loop, unbidden, costs attention.

The shift: animate outcomes, not aesthetics.

**What it means in practice:** Audit every animation for purpose. If removing it changes nothing about usability or information flow, remove it.

## 3. Density is back — but earned

The zero-chrome, lots-of-whitespace aesthetic peaked around 2022. Users are now comfortable with denser information layouts, provided the hierarchy is airtight. The SaaS and fintech sectors are leading this — dashboards that actually show data, comparison tables that earn the scroll.

**What it means in practice:** Whitespace is a tool, not a style. Use density where the information demands it.

## 4. Mobile-first is mobile-only for key flows

The stat that changed our process: on the sites we audited in 2025, 73% of conversions on mobile happened within the first two scroll positions. The fold is back, just on a different screen.

**What it means in practice:** Design your conversion flow on a 390px viewport first. If the CTA isn't above the fold at that width, you're leaving conversions on the table.

## 5. Dark mode is a product decision, not a toggle

Sites that ship a truly considered dark mode — with separate colour tokens, not just CSS invert — convert better in evening sessions. But shipping a half-considered dark mode (washed-out images, wrong contrast ratios) actively hurts trust.

**What it means in practice:** Dark mode is either fully resourced or not shipped. There's no middle ground that doesn't damage the brand.

---

These aren't trend forecasts — they're observations from sites we built or audited in the last 12 months. The common thread: design decisions grounded in user behaviour data outperform design decisions grounded in aesthetic taste, every time.`,
  },
  {
    slug: "core-web-vitals-seo-guide",
    title: "Core Web Vitals in 2025: What Still Moves Rankings",
    excerpt:
      "A practical guide to LCP, CLS and INP — what the signals mean, how to measure them and the fixes that actually move the needle.",
    date: "2025-09-03",
    readTime: 9,
    category: "SEO",
    author: { name: "ArtX Studio", role: "Technical SEO Lead" },
    relatedSlugs: ["web-design-trends-2025", "gearabout-retrospective"],
    content: `## Why Core Web Vitals still matter

Google's Page Experience signals have been part of the ranking algorithm since 2021. Four years in, the majority of sites — including many built by professional agencies — still fail on at least one metric. That's a competitive opportunity.

This guide covers what the three key signals actually measure, how to diagnose failures and the fixes that move the dial in real projects.

## The three signals, plainly

**LCP (Largest Contentful Paint)** measures how long it takes for the largest visible element — usually a hero image or heading — to render. Google's threshold: under 2.5 seconds. Most of the sites we audit land between 3.5s and 6s.

**CLS (Cumulative Layout Shift)** measures visual stability — how much content jumps around as the page loads. The classic culprit: images without declared dimensions, or web fonts causing text reflow. Threshold: under 0.1.

**INP (Interaction to Next Paint)** replaced FID in 2024. It measures how long the browser takes to respond to any user interaction — click, tap, keystroke. Threshold: under 200ms.

## Diagnosing your site

Start with [PageSpeed Insights](https://pagespeed.web.dev). It gives you both lab data (simulated) and field data (real users via Chrome UX Report). Field data is what Google uses for ranking — don't optimise for the lab number alone.

For deeper diagnosis, use WebPageTest with a throttled mobile connection. This surfaces issues that fast developer machines hide.

## LCP: the fixes that actually work

1. **Preload the hero image.** Add \`<link rel="preload" as="image">\` for the LCP element. This is the single highest-impact fix on most sites.

2. **Use next-gen image formats.** WebP or AVIF at the right size for the viewport. A 2400px image served to a 390px screen is a direct LCP penalty.

3. **Eliminate render-blocking resources.** Third-party scripts (analytics, chat widgets, A/B testing tools) loaded in \`<head>\` without \`async\` or \`defer\` are the primary culprit in slow LCP scores.

4. **Use a CDN for static assets.** Cloudflare's free tier is enough for most sites. Edge caching cuts TTFB dramatically.

## CLS: the fixes that actually work

1. **Set explicit width/height on all images and videos.** The browser needs aspect ratio information before the image loads to hold the space.

2. **Use \`font-display: optional\` or preload web fonts.** Invisible-text flash (FOIT) causes CLS on systems that haven't cached the font.

3. **Reserve space for ad slots and embeds.** If something is going to appear, declare its dimensions upfront.

## INP: the harder problem

INP is the signal most teams underestimate. It's not about page load — it's about runtime performance. Long JavaScript tasks block the main thread and make the page feel unresponsive.

**Profile with Chrome DevTools Performance tab.** Look for tasks over 50ms. Common sources: large event handlers, React re-renders triggered by scroll events, and analytics payloads processed synchronously.

**Solutions:**
- Break long tasks with \`setTimeout(..., 0)\` or \`scheduler.postTask\`
- Debounce scroll and resize handlers
- Use React 18's concurrent features (Suspense, useTransition) to defer non-urgent updates

## The compounding effect

Fixing Core Web Vitals rarely produces a single dramatic ranking jump. The effect compounds over 3–6 months as Google's crawl re-evaluates your field data. Pair it with solid on-page SEO and the combined effect is substantial.

On a recent client project (Veative Kitchen), LCP improvements from 4.8s to 1.9s contributed to a #1 ranking for their target cuisine terms within 90 days — alongside a broader local SEO push.`,
  },
  {
    slug: "gearabout-retrospective",
    title: "What We Learned Building Gearabout's Editorial Platform",
    excerpt:
      "A retrospective on rebuilding a cult magazine's digital presence — the technical decisions, the mistakes and what we'd do differently.",
    date: "2025-07-18",
    readTime: 11,
    category: "Case Study",
    author: { name: "ArtX Studio", role: "Lead Engineer" },
    relatedSlugs: ["web-design-trends-2025", "core-web-vitals-seo-guide"],
    content: `## Why we're writing this

Gearabout was our most technically ambitious project of 2026. A 4,000-article archive, a fastidious editorial team and a readership that would notice — and write about — any regression in quality.

We shipped it on time and within budget. But there were decisions we'd make differently. This is an honest account.

## What went well

### The CMS migration

Moving 4,000 articles from WordPress to Sanity without content loss was the thing we were most nervous about. We built a custom migration script with full round-trip validation — every field in WordPress mapped to a Sanity document type, with automated checks on word count, image presence and internal links.

Final result: zero content loss, zero broken internal links. We're proud of this.

### The reading experience

The long-read format — swipeable on mobile, keyboard-navigable on desktop — tested better than anything we'd shipped before. Bounce rates dropped from 67% to 31% on article pages within the first month.

The key decision: we read every long-form article ourselves during design. You can't design for a reading experience you haven't had.

### The image pipeline

Gearabout's photo library is extensive. We built an automated pipeline: images upload to Sanity, get processed by Cloudinary (WebP conversion, responsive sizes, art-direction cropping), and serve from Cloudflare. LCP on article pages averaged 1.8s at launch.

## What we'd do differently

### We underestimated the CMS training

The technical delivery was smooth. The content team handoff was not. We allocated 4 hours for CMS training. We needed 12.

The Sanity schema we built was sophisticated — rich text with custom annotations, structured image metadata, related article linking. The editorial team needed time to build mental models for all of it.

**Lesson:** CMS complexity is a UX problem for editors, not just readers. Budget training time proportional to schema complexity, not feature count.

### We over-engineered the article template system

We built a flexible template system with 7 layout variants. The editorial team uses 2 of them. The other 5 added scope to the build and cognitive load to the publishing workflow.

**Lesson:** Build for the jobs the content team actually does, not the jobs they theoretically might do. Flexibility has a cost.

### We shipped dark mode as an afterthought

Dark mode was added in the final two weeks at the client's request. We implemented it with CSS variables, which was fast — but the image treatment in dark mode was never properly resolved. Hero images that worked in light mode looked flat and underexposed in dark.

We've since fixed it (editorial images now have separate dark-mode crops), but it cost us an extra sprint post-launch.

**Lesson:** Dark mode is a day-one design decision or it's a post-launch problem. There's no in-between.

## The numbers, 3 months post-launch

- Session duration: +68%
- Newsletter sign-ups: 3× previous rate
- LCP (p75): 2.1s (down from 5.8s)
- CLS: 0.04 (down from 0.22)
- Editorial publishing time: −30% (Sanity vs. WordPress for the team)

---

We'd take the project again, with the lessons built in. The combination of genuine editorial ambition and a technically capable client made it one of the best collaborations we've had.`,
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "৳2,000",
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
    price: "৳5,000",
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
    price: "৳8,000",
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
    a: "Our Basic tier (৳2,000) includes unlimited pages (as needed), product control panel, WhatsApp redirect payment option, full on-page SEO, free subdomain, and 1 GB hosting. Premium (৳5,000) adds custom domain & hosting and a full custom admin dashboard. Ultra (৳8,000) is an all-in-one scaling solution with priority support.",
    qBn: "Basic, Premium এবং Ultra প্যাকেজে কী কী অন্তর্ভুক্ত থাকে?",
    aBn: "আমাদের Basic প্যাকেজে (৳2,000) রয়েছে আনলিমিটেড পেজ, প্রোডাক্ট কন্ট্রোল প্যানেল, হোয়াটসঅ্যাপ পেমেন্ট রিডাইরেক্ট, অন-পেজ এসইও, ফ্রি সাবডোমেইন এবং ১ জিবি হোস্টিং। Premium প্যাকেজে (৳5,000) রয়েছে কাস্টম ডোমেইন ও হোস্টিং এবং ফুল কাস্টম অ্যাডমিন ড্যাশবোর্ড। আর Ultra প্যাকেজে (৳8,000) রয়েছে অল-ইন-ওয়ান সমাধান ও প্রায়োরিটি সাপোর্ট।",
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
    name: "Alex Mercer",
    role: "Founder & Creative Director",
    bio: "10 years building digital products for brands across SaaS, e-commerce and hospitality. Believes beautiful and functional are the same thing, badly explained.",
    initials: "AM",
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
