import PptxGenJS from "pptxgenjs";

// Initialize Presentation
const pptx = new PptxGenJS();

// Slide Layout 16:9 (10" x 5.625")
pptx.layout = "LAYOUT_16x9";
pptx.author = "ArtX Studio";
pptx.company = "ArtX (artx.techvrs.com)";
pptx.title = "ArtX Partnership Proposal";
pptx.subject = "Digital Product Studio Partnership";

// 🎨 DESIGN SYSTEM
const COLORS = {
  bg: "0D0D0D", // Near Black Background
  primary: "C8F135", // Lime/Neon Green (ArtX Brand Accent)
  white: "FFFFFF", // Secondary Accent / Crisp White
  cardBg: "1A1A1A", // Dark Card Background
  cardBorder: "2A2A2A", // Subtle Border
  cardBorderHighlight: "C8F135", // Active/Highlight Border
  cardInner: "242424", // Inner pill/badge background
  muted: "888888", // Muted Gray Text
  mutedDark: "444444", // Very Muted Separator
  watermark: "141A0E", // Very low opacity lime tint on dark background
};

const FONTS = {
  title: "Arial", // Clean, bold headline font
  heading: "Arial",
  body: "Calibri",
  mono: "Consolas",
};

// Helper: Common slide initialization
function createSlide() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };
  return slide;
}

// Helper: Standard Slide Header (No underline, clean spacing)
function addSlideHeader(slide, category, title) {
  if (category) {
    slide.addText(category.toUpperCase(), {
      x: 0.6,
      y: 0.45,
      w: 8.8,
      h: 0.28,
      fontFace: FONTS.heading,
      fontSize: 10,
      bold: true,
      color: COLORS.primary,
      charSpacing: 2,
    });
  }

  slide.addText(title, {
    x: 0.6,
    y: category ? 0.72 : 0.45,
    w: 8.8,
    h: 0.58,
    fontFace: FONTS.title,
    fontSize: 34,
    bold: true,
    color: COLORS.white,
  });
}

// ==========================================
// SLIDE 1: COVER
// ==========================================
{
  const slide = createSlide();

  // Large decorative ✱ symbol in C8F135 positioned top-right
  slide.addText("✱", {
    x: 7.2,
    y: 0.15,
    w: 2.5,
    h: 2.5,
    fontFace: FONTS.title,
    fontSize: 120,
    color: COLORS.primary,
    align: "center",
    valign: "middle",
  });

  // Large text: PARTNERSHIP PROPOSAL (color: 888888, 16pt)
  slide.addText("PARTNERSHIP PROPOSAL", {
    x: 0.8,
    y: 1.3,
    w: 6.8,
    h: 0.35,
    fontFace: FONTS.heading,
    fontSize: 16,
    bold: true,
    color: COLORS.muted,
    charSpacing: 3,
  });

  // Main title: ArtX × [Your Name/Company] (color: FFFFFF, 48pt bold)
  slide.addText("ArtX × [Your Name/Company]", {
    x: 0.8,
    y: 1.75,
    w: 8.4,
    h: 1.25,
    fontFace: FONTS.title,
    fontSize: 46,
    bold: true,
    color: COLORS.white,
    lineSpacingMultiple: 1.05,
  });

  // Subtitle: Building standout digital products together (color: C8F135, 20pt)
  slide.addText("Building standout digital products together", {
    x: 0.8,
    y: 3.1,
    w: 8.2,
    h: 0.5,
    fontFace: FONTS.body,
    fontSize: 20,
    color: COLORS.primary,
    bold: true,
  });

  // Bottom card block
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8,
    y: 4.4,
    w: 8.4,
    h: 0.65,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.1,
  });

  slide.addText(
    "Full-Service Digital Product Studio  •  Design  •  Engineering  •  SEO  •  Security",
    {
      x: 1.0,
      y: 4.4,
      w: 5.4,
      h: 0.65,
      fontFace: FONTS.body,
      fontSize: 11,
      color: COLORS.muted,
      valign: "middle",
    }
  );

  // Bottom right: artx.techvrs.com (small, muted)
  slide.addText("artx.techvrs.com", {
    x: 6.6,
    y: 4.4,
    w: 2.4,
    h: 0.65,
    fontFace: FONTS.body,
    fontSize: 12,
    color: COLORS.primary,
    align: "right",
    valign: "middle",
    bold: true,
  });
}

// ==========================================
// SLIDE 2: WHO IS ARTX?
// ==========================================
{
  const slide = createSlide();
  addSlideHeader(slide, "ABOUT THE STUDIO", "About ArtX");

  // 3 stat blocks (card style, background 1A1A1A, rounded):
  // 950+ / Projects Completed
  // 10 Yrs / In Business
  // 4 / Continents Served
  const stats = [
    { num: "950+", label: "Projects Completed" },
    { num: "10 Yrs", label: "In Business" },
    { num: "4", label: "Continents Served" },
  ];

  const statWidth = 2.75;
  const statGap = 0.275;
  const startX = 0.6;

  stats.forEach((stat, i) => {
    const cardX = startX + i * (statWidth + statGap);

    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: cardX,
      y: 1.45,
      w: statWidth,
      h: 1.3,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.12,
    });

    slide.addText(stat.num, {
      x: cardX,
      y: 1.55,
      w: statWidth,
      h: 0.65,
      fontFace: FONTS.title,
      fontSize: 34,
      bold: true,
      color: COLORS.primary,
      align: "center",
      valign: "middle",
    });

    slide.addText(stat.label, {
      x: cardX,
      y: 2.18,
      w: statWidth,
      h: 0.45,
      fontFace: FONTS.body,
      fontSize: 13,
      color: COLORS.white,
      align: "center",
    });
  });

  // Paragraph block: "ArtX is a full-service digital product studio designing, building, and ranking standout websites for B2B, SaaS, E-commerce, Hospitality and Finance brands worldwide."
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6,
    y: 2.95,
    w: 8.8,
    h: 1.35,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.12,
  });

  slide.addText(
    "ArtX is a full-service digital product studio designing, building, and ranking standout websites for B2B, SaaS, E-commerce, Hospitality and Finance brands worldwide.",
    {
      x: 0.9,
      y: 3.1,
      w: 8.2,
      h: 1.05,
      fontFace: FONTS.body,
      fontSize: 15,
      color: COLORS.white,
      lineSpacingMultiple: 1.25,
      valign: "middle",
    }
  );

  // Clients label: Trusted by: Northform, Gearabout, Jun Century, Veative Kitchen
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6,
    y: 4.5,
    w: 8.8,
    h: 0.65,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.1,
  });

  slide.addText(
    [
      { text: "Trusted by:   ", options: { color: COLORS.muted, bold: true, fontSize: 12 } },
      { text: "Northform", options: { color: COLORS.primary, bold: true, fontSize: 12 } },
      { text: "   •   ", options: { color: COLORS.mutedDark, fontSize: 12 } },
      { text: "Gearabout", options: { color: COLORS.white, bold: true, fontSize: 12 } },
      { text: "   •   ", options: { color: COLORS.mutedDark, fontSize: 12 } },
      { text: "Jun Century", options: { color: COLORS.white, bold: true, fontSize: 12 } },
      { text: "   •   ", options: { color: COLORS.mutedDark, fontSize: 12 } },
      { text: "Veative Kitchen", options: { color: COLORS.white, bold: true, fontSize: 12 } },
    ],
    {
      x: 0.9,
      y: 4.5,
      w: 8.2,
      h: 0.65,
      fontFace: FONTS.body,
      valign: "middle",
    }
  );
}

// ==========================================
// SLIDE 3: SERVICES OVERVIEW
// ==========================================
{
  const slide = createSlide();
  addSlideHeader(slide, "CORE SERVICES", "What ArtX Offers");

  // 4 cards in a 2×2 grid (background 1A1A1A):
  // 🎨 Website Design — Editorial, high-craft interfaces designed to convert
  // 💻 Web Development — Production-grade React, Core Web Vitals optimized
  // 🔍 SEO — Technical audits, content architecture & link building that compounds
  // 🔐 Web Security — Security audits, hardening & monitoring (via techvrs.com)
  const services = [
    {
      icon: "🎨",
      title: "Website Design",
      desc: "Editorial, high-craft interfaces designed to convert, build brand authority, and elevate customer experience.",
      meta: "Figma · Design Systems · UI/UX Art Direction",
    },
    {
      icon: "💻",
      title: "Web Development",
      desc: "Production-grade React, modern clean component architecture, and Core Web Vitals optimized performance.",
      meta: "React · TypeScript · Tailwind · Fast Loading",
    },
    {
      icon: "🔍",
      title: "SEO & Content Architecture",
      desc: "Technical audits, structured data schemas & organic link architecture that compound sustained traffic over time.",
      meta: "Technical SEO · Schema Markup · Ranking Strategy",
    },
    {
      icon: "🔐",
      title: "Web Security & Hardening",
      desc: "Comprehensive security audits, server hardening, vulnerability mitigation & active monitoring (via techvrs.com).",
      meta: "Audits · Hardening · Monitoring · techvrs.com",
    },
  ];

  const gridW = 4.25;
  const gridH = 1.75;
  const gapX = 0.3;
  const gapY = 0.25;
  const startX = 0.6;
  const startY = 1.45;

  services.forEach((svc, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (gridW + gapX);
    const y = startY + row * (gridH + gapY);

    // Card background
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x,
      y,
      w: gridW,
      h: gridH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.12,
    });

    // Icon Circle Badge
    slide.addShape(pptx.shapes.OVAL, {
      x: x + 0.22,
      y: y + 0.2,
      w: 0.46,
      h: 0.46,
      fill: { color: COLORS.cardInner },
      line: { color: COLORS.cardBorder, width: 1 },
    });

    slide.addText(svc.icon, {
      x: x + 0.22,
      y: y + 0.2,
      w: 0.46,
      h: 0.46,
      fontSize: 16,
      align: "center",
      valign: "middle",
    });

    // Card Title in C8F135
    slide.addText(svc.title, {
      x: x + 0.8,
      y: y + 0.18,
      w: gridW - 0.95,
      h: 0.46,
      fontFace: FONTS.heading,
      fontSize: 16,
      bold: true,
      color: COLORS.primary,
      valign: "middle",
    });

    // Card Description in white small text
    slide.addText(svc.desc, {
      x: x + 0.22,
      y: y + 0.72,
      w: gridW - 0.45,
      h: 0.65,
      fontFace: FONTS.body,
      fontSize: 12,
      color: COLORS.white,
      lineSpacingMultiple: 1.15,
    });

    // Meta highlight
    slide.addText(svc.meta, {
      x: x + 0.22,
      y: y + 1.4,
      w: gridW - 0.45,
      h: 0.25,
      fontFace: FONTS.body,
      fontSize: 10,
      color: COLORS.muted,
    });
  });
}

// ==========================================
// SLIDE 4: PRICING PACKAGES
// ==========================================
{
  const slide = createSlide();
  addSlideHeader(slide, "AFFORDABLE & TRANSPARENT", "Transparent Pricing");

  // 3 pricing cards side by side:
  // Basic — ৳3,500 | Unlimited Pages · On-page SEO · Free Subdomain · 1GB Hosting
  // Premium — ৳6,500 ⭐ MOST POPULAR | Everything in Basic · Custom Domain · Admin Dashboard · Order Management
  // Ultra — ৳9,500 | Everything in Premium · All-in-One · Priority Support · Advanced Customization
  const plans = [
    {
      name: "Basic",
      price: "৳3,500",
      period: "one-time setup",
      popular: false,
      features: [
        "Unlimited Pages",
        "On-page SEO Architecture",
        "Free Subdomain Included",
        "1GB High-Speed Hosting",
        "Fully Mobile Responsive",
      ],
    },
    {
      name: "Premium",
      price: "৳6,500",
      period: "most popular choice",
      popular: true,
      features: [
        "Everything in Basic",
        "Custom Domain (.com/.net)",
        "Admin Control Dashboard",
        "Order Management System",
        "WhatsApp Checkout Flow",
      ],
    },
    {
      name: "Ultra",
      price: "৳9,500",
      period: "full scaling solution",
      popular: false,
      features: [
        "Everything in Premium",
        "All-in-One Growth Suite",
        "Priority VIP Support",
        "Advanced Customization & API",
        "Web Security & Hardening",
      ],
    },
  ];

  const cardW = 2.75;
  const gap = 0.275;
  const startX = 0.6;

  plans.forEach((plan, i) => {
    const x = startX + i * (cardW + gap);
    const isPopular = plan.popular;
    const cardY = isPopular ? 1.35 : 1.45;
    const cardH = isPopular ? 3.65 : 3.55;

    // Card background & highlight border
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x,
      y: cardY,
      w: cardW,
      h: cardH,
      fill: { color: COLORS.cardBg },
      line: {
        color: isPopular ? COLORS.primary : COLORS.cardBorder,
        width: isPopular ? 2 : 1,
      },
      rectRadius: 0.14,
    });

    let currentY = cardY + 0.16;

    // Popular Badge
    if (isPopular) {
      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: x + 0.35,
        y: cardY + 0.14,
        w: cardW - 0.7,
        h: 0.3,
        fill: { color: COLORS.primary },
        line: { color: COLORS.primary, width: 0 },
        rectRadius: 0.08,
      });

      slide.addText("⭐  MOST POPULAR", {
        x: x + 0.35,
        y: cardY + 0.14,
        w: cardW - 0.7,
        h: 0.3,
        fontFace: FONTS.heading,
        fontSize: 10,
        bold: true,
        color: COLORS.bg,
        align: "center",
        valign: "middle",
      });

      currentY += 0.36;
    }

    // Plan Title
    slide.addText(plan.name, {
      x: x + 0.22,
      y: currentY,
      w: cardW - 0.44,
      h: 0.32,
      fontFace: FONTS.heading,
      fontSize: 18,
      bold: true,
      color: COLORS.white,
    });

    // Price in BDT
    slide.addText(plan.price, {
      x: x + 0.22,
      y: currentY + 0.32,
      w: cardW - 0.44,
      h: 0.55,
      fontFace: FONTS.title,
      fontSize: 30,
      bold: true,
      color: COLORS.primary,
    });

    // Plan subtitle
    slide.addText(plan.period, {
      x: x + 0.22,
      y: currentY + 0.85,
      w: cardW - 0.44,
      h: 0.22,
      fontFace: FONTS.body,
      fontSize: 10,
      color: COLORS.muted,
    });

    // Divider Line
    slide.addShape(pptx.shapes.LINE, {
      x: x + 0.22,
      y: currentY + 1.15,
      w: cardW - 0.44,
      h: 0,
      line: { color: COLORS.cardBorder, width: 1 },
    });

    // Features
    const featureText = plan.features.map((f) => ({
      text: `✓  ${f}\n`,
      options: {
        fontSize: 11,
        color: COLORS.white,
        lineSpacingMultiple: 1.3,
      },
    }));

    slide.addText(featureText, {
      x: x + 0.22,
      y: currentY + 1.25,
      w: cardW - 0.44,
      h: 1.6,
      fontFace: FONTS.body,
    });
  });

  // Footer Note
  slide.addText("* All prices in BDT. Custom enterprise contracts & partner SLA terms available.", {
    x: 0.6,
    y: 5.15,
    w: 8.8,
    h: 0.3,
    fontFace: FONTS.body,
    fontSize: 10,
    color: COLORS.muted,
    align: "center",
  });
}

// ==========================================
// SLIDE 5: WHY PARTNER WITH ARTX?
// ==========================================
{
  const slide = createSlide();
  addSlideHeader(slide, "PARTNERSHIP VALUE", "Why This Partnership Makes Sense");

  // 4 horizontal stat/reason blocks:
  // ✅ Full-service studio (Design + Dev + SEO + Security)
  // ✅ 950+ successful projects globally
  // ✅ Affordable BDT pricing for local market
  // ✅ Proven results: +42% conversion, 3.1× qualified demos, #1 SEO rankings
  const reasons = [
    {
      title: "Full-Service Studio",
      highlight: "Design + Dev + SEO + Security",
      desc: "Complete end-to-end execution under one roof so your client projects ship 2× faster with zero handoff friction.",
    },
    {
      title: "950+ Successful Projects Globally",
      highlight: "10 Years Experience",
      desc: "A decade of battle-tested delivery across 4 continents for SaaS, B2B, and high-growth consumer brands.",
    },
    {
      title: "Affordable BDT Pricing for Local Market",
      highlight: "High Partner Margins",
      desc: "Transparent tier pricing structured for Bangladesh businesses, allowing exceptional markup & client retention.",
    },
    {
      title: "Proven Results & Search Dominance",
      highlight: "+42% Conversion · #1 SEO",
      desc: "Quantifiable metrics including 3.1× qualified inbound demo growth and top-ranking search positioning.",
    },
  ];

  const cardW = 8.8;
  const cardH = 0.82;
  const gapY = 0.14;
  const startX = 0.6;
  const startY = 1.45;

  reasons.forEach((item, i) => {
    const y = startY + i * (cardH + gapY);

    // Card background
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: startX,
      y,
      w: cardW,
      h: cardH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.1,
    });

    // Checkmark Badge in C8F135
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: startX + 0.2,
      y: y + 0.18,
      w: 0.45,
      h: 0.45,
      fill: { color: COLORS.cardInner },
      line: { color: COLORS.primary, width: 1 },
      rectRadius: 0.08,
    });

    slide.addText("✓", {
      x: startX + 0.2,
      y: y + 0.18,
      w: 0.45,
      h: 0.45,
      fontFace: FONTS.heading,
      fontSize: 16,
      bold: true,
      color: COLORS.primary,
      align: "center",
      valign: "middle",
    });

    // White bold label + Muted description
    slide.addText(
      [
        { text: item.title + "  ", options: { bold: true, color: COLORS.white, fontSize: 13 } },
        { text: `(${item.highlight})\n`, options: { color: COLORS.primary, fontSize: 11, bold: true } },
        { text: item.desc, options: { color: COLORS.muted, fontSize: 11 } },
      ],
      {
        x: startX + 0.8,
        y: y + 0.08,
        w: 7.7,
        h: 0.66,
        fontFace: FONTS.body,
        valign: "middle",
      }
    );
  });
}

// ==========================================
// SLIDE 6: CLIENT RESULTS (SOCIAL PROOF)
// ==========================================
{
  const slide = createSlide();
  addSlideHeader(slide, "PROVEN PERFORMANCE", "Proven Results");

  // 3 result cards:
  // Gearabout: +68% session duration · 3× newsletter signups
  // Jun Century: +42% conversion rate · 27% AOV lift
  // Northform SaaS: 3.1× qualified demos · 22% CAC reduction
  // Large numbers in C8F135, label text in white, company name in 888888
  const results = [
    {
      company: "GEARABOUT",
      category: "E-Commerce & Retail",
      stat1: "+68%",
      label1: "Session Duration",
      stat2: "3×",
      label2: "Newsletter Signups",
      summary: "Modern editorial design and lightning-fast page speed increased total on-site engagement.",
    },
    {
      company: "JUN CENTURY",
      category: "Direct-to-Consumer",
      stat1: "+42%",
      label1: "Conversion Rate",
      stat2: "27%",
      label2: "AOV Lift",
      summary: "Conversion-first product catalog redesign with friction-free WhatsApp ordering workflow.",
    },
    {
      company: "NORTHFORM SAAS",
      category: "B2B Software",
      stat1: "3.1×",
      label1: "Qualified Demos",
      stat2: "-22%",
      label2: "CAC Reduction",
      summary: "Positioning clarity, landing page speed optimization, and targeted technical SEO structure.",
    },
  ];

  const cardW = 2.75;
  const gap = 0.275;
  const startX = 0.6;
  const cardY = 1.45;
  const cardH = 3.65;

  results.forEach((item, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x,
      y: cardY,
      w: cardW,
      h: cardH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.14,
    });

    // Company name in 888888
    slide.addText(item.company, {
      x: x + 0.22,
      y: cardY + 0.2,
      w: cardW - 0.44,
      h: 0.3,
      fontFace: FONTS.heading,
      fontSize: 12,
      bold: true,
      color: COLORS.muted,
      charSpacing: 2,
    });

    slide.addText(item.category, {
      x: x + 0.22,
      y: cardY + 0.48,
      w: cardW - 0.44,
      h: 0.22,
      fontFace: FONTS.body,
      fontSize: 10,
      color: COLORS.mutedDark,
    });

    // Divider
    slide.addShape(pptx.shapes.LINE, {
      x: x + 0.22,
      y: cardY + 0.78,
      w: cardW - 0.44,
      h: 0,
      line: { color: COLORS.cardBorder, width: 1 },
    });

    // Stat 1 in C8F135
    slide.addText(item.stat1, {
      x: x + 0.22,
      y: cardY + 0.88,
      w: cardW - 0.44,
      h: 0.58,
      fontFace: FONTS.title,
      fontSize: 32,
      bold: true,
      color: COLORS.primary,
    });

    // Label 1 in White
    slide.addText(item.label1, {
      x: x + 0.22,
      y: cardY + 1.44,
      w: cardW - 0.44,
      h: 0.28,
      fontFace: FONTS.body,
      fontSize: 12,
      color: COLORS.white,
      bold: true,
    });

    // Stat 2 in C8F135
    slide.addText(item.stat2, {
      x: x + 0.22,
      y: cardY + 1.82,
      w: cardW - 0.44,
      h: 0.5,
      fontFace: FONTS.title,
      fontSize: 26,
      bold: true,
      color: COLORS.primary,
    });

    // Label 2 in White
    slide.addText(item.label2, {
      x: x + 0.22,
      y: cardY + 2.3,
      w: cardW - 0.44,
      h: 0.28,
      fontFace: FONTS.body,
      fontSize: 12,
      color: COLORS.white,
      bold: true,
    });

    // Divider
    slide.addShape(pptx.shapes.LINE, {
      x: x + 0.22,
      y: cardY + 2.7,
      w: cardW - 0.44,
      h: 0,
      line: { color: COLORS.cardBorder, width: 1 },
    });

    // Summary Text
    slide.addText(item.summary, {
      x: x + 0.22,
      y: cardY + 2.8,
      w: cardW - 0.44,
      h: 0.72,
      fontFace: FONTS.body,
      fontSize: 11,
      color: COLORS.muted,
      lineSpacingMultiple: 1.15,
    });
  });
}

// ==========================================
// SLIDE 7: PARTNERSHIP BENEFITS
// ==========================================
{
  const slide = createSlide();
  addSlideHeader(slide, "MUTUAL BENEFIT", "What You Gain as a Partner");

  // 2-column layout:
  // Left column (4 points): Revenue share opportunity · Resell premium services · Serve local clients with global quality · Expand your service portfolio
  const benefits = [
    {
      title: "Revenue Share Opportunity",
      desc: "Earn attractive referral commissions & co-sell profits on every successfully closed project.",
    },
    {
      title: "Resell Premium Services",
      desc: "White-label or co-brand top-tier design and web engineering without growing your in-house headcount.",
    },
    {
      title: "Serve Local Clients with Global Quality",
      desc: "Deliver international UI/UX standards and elite React code at highly competitive BDT pricing.",
    },
    {
      title: "Expand Your Service Portfolio",
      desc: "Instantly add full-stack React apps, Core Web Vitals SEO, and web security audits to your offerings.",
    },
  ];

  const leftW = 4.6;
  const leftX = 0.6;
  const itemH = 0.82;
  const gapY = 0.12;
  const startY = 1.45;

  benefits.forEach((b, i) => {
    const y = startY + i * (itemH + gapY);

    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: leftX,
      y,
      w: leftW,
      h: itemH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.1,
    });

    // Number Badge
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: leftX + 0.18,
      y: y + 0.18,
      w: 0.45,
      h: 0.45,
      fill: { color: COLORS.cardInner },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.08,
    });

    slide.addText(`0${i + 1}`, {
      x: leftX + 0.18,
      y: y + 0.18,
      w: 0.45,
      h: 0.45,
      fontFace: FONTS.heading,
      fontSize: 12,
      bold: true,
      color: COLORS.primary,
      align: "center",
      valign: "middle",
    });

    slide.addText(
      [
        { text: b.title + "\n", options: { bold: true, color: COLORS.white, fontSize: 12 } },
        { text: b.desc, options: { color: COLORS.muted, fontSize: 11 } },
      ],
      {
        x: leftX + 0.75,
        y: y + 0.1,
        w: leftW - 0.9,
        h: 0.62,
        fontFace: FONTS.body,
        valign: "middle",
      }
    );
  });

  // Right column: Quote block (background: 1A1A1A, left border accent in C8F135)
  // "Design, build and SEO under one roof made the whole project ship two months faster." — Priya Shah, VP Marketing
  const rightX = 5.5;
  const rightW = 3.9;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: rightX,
    y: 1.45,
    w: rightW,
    h: 2.65,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.14,
  });

  // Left border accent in C8F135
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: rightX + 0.04,
    y: 1.5,
    w: 0.08,
    h: 2.55,
    fill: { color: COLORS.primary },
    line: { color: COLORS.primary, width: 0 },
    rectRadius: 0.04,
  });

  // Quote icon
  slide.addText("“", {
    x: rightX + 0.3,
    y: 1.5,
    w: 0.6,
    h: 0.5,
    fontFace: FONTS.title,
    fontSize: 48,
    color: COLORS.primary,
  });

  // Quote statement
  slide.addText(
    '"Design, build and SEO under one roof made the whole project ship two months faster."',
    {
      x: rightX + 0.35,
      y: 2.05,
      w: rightW - 0.65,
      h: 1.1,
      fontFace: FONTS.body,
      fontSize: 15,
      italic: true,
      color: COLORS.white,
      lineSpacingMultiple: 1.2,
    }
  );

  // Author info
  slide.addText(
    [
      { text: "— Priya Shah\n", options: { bold: true, color: COLORS.primary, fontSize: 13 } },
      { text: "VP Marketing, Northform", options: { color: COLORS.muted, fontSize: 11 } },
    ],
    {
      x: rightX + 0.35,
      y: 3.25,
      w: rightW - 0.65,
      h: 0.65,
      fontFace: FONTS.body,
    }
  );

  // Sub-block below quote
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: rightX,
    y: 4.22,
    w: rightW,
    h: 0.88,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.1,
  });

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: rightX + 0.2,
    y: 4.38,
    w: 0.55,
    h: 0.55,
    fill: { color: COLORS.cardInner },
    line: { color: COLORS.primary, width: 1 },
    rectRadius: 0.1,
  });

  slide.addText("★", {
    x: rightX + 0.2,
    y: 4.38,
    w: 0.55,
    h: 0.55,
    fontSize: 16,
    color: COLORS.primary,
    align: "center",
    valign: "middle",
  });

  slide.addText(
    [
      { text: "Seamless Partner Collaboration\n", options: { bold: true, color: COLORS.white, fontSize: 12 } },
      { text: "Direct Slack channel, shared staging & dedicated SLA.", options: { color: COLORS.muted, fontSize: 10 } },
    ],
    {
      x: rightX + 0.9,
      y: 4.28,
      w: rightW - 1.05,
      h: 0.75,
      fontFace: FONTS.body,
      valign: "middle",
    }
  );
}

// ==========================================
// SLIDE 8: NEXT STEPS / CTA
// ==========================================
{
  const slide = createSlide();

  // Big ✱ watermark in background (very low opacity C8F135 tint)
  slide.addText("✱", {
    x: 3.2,
    y: 0.8,
    w: 3.6,
    h: 3.6,
    fontFace: FONTS.title,
    fontSize: 220,
    color: COLORS.watermark,
    align: "center",
    valign: "middle",
  });

  // Title: Let's Build Together (Center-aligned)
  slide.addText("LET'S COLLABORATE", {
    x: 0.6,
    y: 0.45,
    w: 8.8,
    h: 0.28,
    fontFace: FONTS.heading,
    fontSize: 11,
    bold: true,
    color: COLORS.primary,
    align: "center",
    charSpacing: 3,
  });

  slide.addText("Let's Build Together", {
    x: 0.6,
    y: 0.75,
    w: 8.8,
    h: 0.6,
    fontFace: FONTS.title,
    fontSize: 38,
    bold: true,
    color: COLORS.white,
    align: "center",
  });

  slide.addText("Ready to elevate your digital products and grow mutual revenue.", {
    x: 0.6,
    y: 1.38,
    w: 8.8,
    h: 0.35,
    fontFace: FONTS.body,
    fontSize: 13,
    color: COLORS.muted,
    align: "center",
  });

  // Center-aligned content:
  // 📞 01645441584
  // 📧 artxstudiocom@gmail.com
  // 🌐 artx.techvrs.com
  // 📘 fb.com/artxdev
  const contacts = [
    { icon: "📞", title: "Direct / WhatsApp", value: "01645441584" },
    { icon: "📧", title: "Official Email", value: "artxstudiocom@gmail.com" },
    { icon: "🌐", title: "Portfolio & Website", value: "artx.techvrs.com" },
    { icon: "📘", title: "Facebook Page", value: "fb.com/artxdev" },
  ];

  const contactW = 4.25;
  const contactH = 0.85;
  const cGapX = 0.3;
  const cGapY = 0.2;
  const cStartX = 0.6;
  const cStartY = 1.85;

  contacts.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = cStartX + col * (contactW + cGapX);
    const y = cStartY + row * (contactH + cGapY);

    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x,
      y,
      w: contactW,
      h: contactH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.12,
    });

    slide.addShape(pptx.shapes.OVAL, {
      x: x + 0.2,
      y: y + 0.18,
      w: 0.48,
      h: 0.48,
      fill: { color: COLORS.cardInner },
      line: { color: COLORS.cardBorder, width: 1 },
    });

    slide.addText(c.icon, {
      x: x + 0.2,
      y: y + 0.18,
      w: 0.48,
      h: 0.48,
      fontSize: 15,
      align: "center",
      valign: "middle",
    });

    slide.addText(
      [
        { text: c.value + "\n", options: { bold: true, color: COLORS.white, fontSize: 13 } },
        { text: c.title, options: { color: COLORS.primary, fontSize: 10, bold: true } },
      ],
      {
        x: x + 0.8,
        y: y + 0.12,
        w: contactW - 0.95,
        h: 0.6,
        fontFace: FONTS.body,
        valign: "middle",
      }
    );
  });

  // CTA button shape: Get in Touch in C8F135 filled rectangle, black text
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 3.6,
    y: 3.95,
    w: 2.8,
    h: 0.58,
    fill: { color: COLORS.primary },
    line: { color: COLORS.primary, width: 0 },
    rectRadius: 0.29,
  });

  slide.addText("Get in Touch  →", {
    x: 3.6,
    y: 3.95,
    w: 2.8,
    h: 0.58,
    fontFace: FONTS.heading,
    fontSize: 14,
    bold: true,
    color: COLORS.bg,
    align: "center",
    valign: "middle",
  });

  // Bottom text: Available for Q4 · 2026
  slide.addText("Available for Q4 · 2026  •  ArtX Studio Partnership Program", {
    x: 0.6,
    y: 4.85,
    w: 8.8,
    h: 0.35,
    fontFace: FONTS.body,
    fontSize: 11,
    color: COLORS.muted,
    align: "center",
  });
}

// Generate the presentation file
const outputPath = "artx_partnership_proposal.pptx";
console.log(`Generating presentation to ${outputPath}...`);

pptx
  .writeFile({ fileName: outputPath })
  .then((fileName) => {
    console.log(`✅ Successfully generated: ${fileName}`);
  })
  .catch((err) => {
    console.error("❌ Error generating presentation:", err);
    process.exit(1);
  });
