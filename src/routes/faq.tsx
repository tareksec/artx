import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Frequently Asked Questions | ArtX Studio" },
      {
        name: "description",
        content:
          "Everything you need to know about ArtX services, project timelines, BDT pricing packages, WhatsApp checkout, and ongoing support.",
      },
      { property: "og:title", content: "FAQ — ArtX Studio" },
      {
        property: "og:description",
        content:
          "Frequently asked questions about website design, development, SEO, and pricing packages at ArtX Studio.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does ArtX do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ArtX is an independent creative studio specializing in high-craft website design, production-grade React development, technical SEO, and web security. We design, build, and rank standout websites.",
              },
            },
            {
              "@type": "Question",
              name: "How long does a typical project take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A standard website design and development project typically takes between 3 to 6 weeks from initial discovery to final deployment, depending on project scope and page volume.",
              },
            },
            {
              "@type": "Question",
              name: "What's included in Basic/Premium/Ultra packages?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our Basic tier (৳2,000) includes unlimited pages, a product control panel, WhatsApp redirect payment option, full on-page SEO, a free subdomain, and 1 GB hosting. Premium (৳5,000) adds custom domain & hosting, and a custom admin dashboard. Ultra (৳8,000) provides an all-in-one scaling solution.",
              },
            },
            {
              "@type": "Question",
              name: "How does WhatsApp redirect payment work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "When a customer completes checkout on your website, our system automatically formats their order details into a clean WhatsApp message and redirects them to chat directly with your business WhatsApp number.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});

type FaqItem = {
  qEn: string;
  qBn: string;
  aEn: string;
  aBn: string;
};

type FaqCategory = {
  categoryEn: string;
  categoryBn: string;
  items: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    categoryEn: "General",
    categoryBn: "সাধারণ প্রশ্নাবলী",
    items: [
      {
        qEn: "What does ArtX do?",
        qBn: "ArtX মূলত কী কাজ করে?",
        aEn: "ArtX is an independent creative studio specializing in high-craft website design, production-grade React development, technical SEO, and web security. We design, build, and rank standout websites for brands across SaaS, e-commerce, hospitality, and finance that refuse to blend in.",
        aBn: "ArtX একটি স্বাধীন ক্রিয়েটিভ স্টুডিও, যা আধুনিক ও উচ্চমানের ওয়েবসাইট ডিজাইন, প্রোডাকশন-গ্রেড React ডেভেলপমেন্ট, টেকনিক্যাল এসইও (SEO) এবং ওয়েব সিকিউরিটি সার্ভিস প্রদান করে। আমরা আধুনিক ব্র্যান্ডের জন্য আকর্ষণীয় ও দ্রুতগতির ওয়েবসাইট তৈরি করি।",
      },
      {
        qEn: "How long does a typical project take?",
        qBn: "একটি প্রোজেক্ট সম্পন্ন হতে সাধারণত কত দিন সময় লাগে?",
        aEn: "A standard website design and development project typically takes between 3 to 6 weeks from initial discovery to final deployment, depending on project scope, page volume, and any custom backend integration requirements.",
        aBn: "একটি স্ট্যান্ডার্ড ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট প্রোজেক্ট সম্পন্ন হতে সাধারণত ৩ থেকে ৬ সপ্তাহ সময় লাগে, যা প্রোজেক্টের পরিধি, পেজ সংখ্যা এবং কাস্টম ফিচারের চাহিদার ওপর নির্ভর করে।",
      },
      {
        qEn: "Do you work with clients outside Bangladesh?",
        qBn: "আপনারা কি বাংলাদেশের বাইরের ক্লায়েন্টদের সাথে কাজ করেন?",
        aEn: "Absolutely. While we are proud of our roots, our studio operates remotely and collaborates with teams across 4 continents. We have successfully completed over 950+ projects for clients globally across North America, Europe, Asia, and Australia.",
        aBn: "অবশ্যই। আমাদের স্টুডিও রিমোটলি কাজ করে এবং আমরা ইতোমধ্যে ৪ মহাদেশ জুড়ে বিশ্বব্যাপী ক্লায়েন্টদের সাথে ৯৫০+ এর বেশি প্রোজেক্ট সফলভাবে সম্পন্ন করেছি।",
      },
    ],
  },
  {
    categoryEn: "Pricing & Packages",
    categoryBn: "প্যাকেজ ও মূল্য তালিকা",
    items: [
      {
        qEn: "What's included in Basic/Premium/Ultra packages?",
        qBn: "Basic, Premium এবং Ultra প্যাকেজে কী কী অন্তর্ভুক্ত থাকে?",
        aEn: "Our Basic tier (৳2,000) includes unlimited pages (as needed), a product control panel, WhatsApp redirect payment option, full on-page SEO, a free subdomain, and 1 GB hosting. Premium (৳5,000) adds a custom domain & hosting, a full custom admin dashboard, and an order management system. Ultra (৳8,000) is an all-in-one scaling solution featuring priority support and advanced customization.",
        aBn: "আমাদের Basic প্যাকেজে (৳2,000) রয়েছে আনলিমিটেড পেজ, প্রোডাক্ট কন্ট্রোল প্যানেল, হোয়াটসঅ্যাপ পেমেন্ট রিডাইরেক্ট, অন-পেজ এসইও, ফ্রি সাবডোমেইন এবং ১ জিবি হোস্টিং। Premium প্যাকেজে (৳5,000) রয়েছে কাস্টম ডোমেইন ও হোস্টিং, ফুল কাস্টম অ্যাডমিন ড্যাশবোর্ড এবং অর্ডার ম্যানেজমেন্ট সিস্টেম। আর Ultra প্যাকেজে (৳8,000) রয়েছে অল-ইন-ওয়ান সমাধান, প্রায়োরিটি সাপোর্ট এবং অ্যাডভান্সড কাস্টমাইজেশন।",
      },
      {
        qEn: "Can I upgrade my package later?",
        qBn: "আমি কি পরবর্তীতে আমার প্যাকেজ আপগ্রেড করতে পারব?",
        aEn: "Yes! Our packages are built to scale with your business. You can start with our Basic or Premium tier and seamlessly upgrade to a higher tier as your operations, inventory, and traffic grow—without any data loss or site downtime.",
        aBn: "হ্যাঁ! আমাদের প্যাকেজগুলো আপনার ব্যবসার বৃদ্ধির সাথে সামঞ্জস্যপূর্ণ। আপনি Basic বা Premium দিয়ে শুরু করে পরবর্তীতে যেকোনো সময় কোনো ডেটা লস বা ডাউনটাইম ছাড়াই উপরের প্যাকেজে আপগ্রেড করতে পারবেন।",
      },
      {
        qEn: "Do you offer custom quotes outside these packages?",
        qBn: "আপনারা কি এই প্যাকেজগুলোর বাইরে কাস্টম কোট বা কাস্টম সার্ভিস দেন?",
        aEn: "Definitely. If your brand requires complex bespoke web applications, custom API integrations, enterprise-grade cloud architecture, or dedicated ongoing SEO campaigns, we can tailor a customized proposal that fits your exact technical roadmap.",
        aBn: "অবশ্যই। আপনার ব্যবসার যদি বিশেষ কোনো ওয়েব অ্যাপ্লিকেশন, কাস্টম এপিআই ইন্টিগ্রেশন বা এন্টারপ্রাইজ সমাধানের প্রয়োজন হয়, তবে আমরা আপনার চাহিদা অনুযায়ী সম্পূর্ণ কাস্টম কোট ও সমাধান প্রদান করি।",
      },
    ],
  },
  {
    categoryEn: "Process",
    categoryBn: "কাজের প্রক্রিয়া",
    items: [
      {
        qEn: "How do I get started?",
        qBn: "কীভাবে প্রোজেক্ট শুরু করব?",
        aEn: "Simply click the 'Let's talk' or 'Contact us' button to reach out via our contact form or directly on WhatsApp. We will schedule a brief discovery consultation to understand your goals, timeline, and requirements before outlining a tailored roadmap.",
        aBn: "আমাদের ওয়েবসাইটের 'Let's talk' বা 'যোগাযোগ করুন' বাটনে ক্লিক করে ফর্ম পূরণ করুন অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন। আমরা আপনার প্রয়োজন ও লক্ষ্য নিয়ে একটি সংক্ষিপ্ত আলোচনার মাধ্যমে কাজের রূপরেখা তৈরি করব।",
      },
      {
        qEn: "What do you need from me to begin the project?",
        qBn: "কাজ শুরু করার জন্য আমার থেকে কী কী তথ্য বা উপাদান প্রয়োজন হবে?",
        aEn: "To kick off, we generally need your brand guidelines (logos, typography preferences, color schemes), general content or copywriting drafts, reference websites you admire, and access to your domain or hosting account if you already own one.",
        aBn: "কাজ শুরু করতে সাধারণত আপনার ব্র্যান্ড লোগো, রঙের পছন্দ, ওয়েবসাইটের টেক্সট বা কন্টেন্টের ধারণা, আপনার পছন্দের কিছু রেফারেন্স ওয়েবসাইট এবং ডোমেইন/হোস্টিং থাকলে তার এক্সেস প্রয়োজন হয়।",
      },
      {
        qEn: "How many revisions are included?",
        qBn: "কাজে কতবার রিভিশন বা সংশোধনের সুযোগ থাকবে?",
        aEn: "Every package ships production-ready with structured collaborative review cycles included. We work closely with you through interactive feedback rounds during the design phase to refine layouts and aesthetics until you are 100% satisfied before launching live.",
        aBn: "প্রতিটি প্যাকেজেই নির্দিষ্ট রিভিশন সাইকেল অন্তর্ভুক্ত থাকে। ডিজাইন ধাপে আপনার ফিডব্যাক অনুযায়ী আমরা প্রয়োজনীয় সংশোধন করি, যাতে সাইট লাইভ হওয়ার আগেই আপনি ১০০% সন্তুষ্ট হতে পারেন।",
      },
    ],
  },
  {
    categoryEn: "Payment",
    categoryBn: "পেমেন্ট ও বিলিং",
    items: [
      {
        qEn: "How does WhatsApp redirect payment work?",
        qBn: "হোয়াটসঅ্যাপ রিডাইরেক্ট পেমেন্ট সিস্টেম কীভাবে কাজ করে?",
        aEn: "Our WhatsApp redirect checkout workflow streamlines online ordering. When a customer confirms an order on your website, they are seamlessly redirected to your business WhatsApp with a pre-formatted message containing their exact order summary, enabling instant customer interaction and easy digital payment verification.",
        aBn: "হোয়াটসঅ্যাপ রিডাইরেক্ট সিস্টেমে গ্রাহক আপনার ওয়েবসাইটে অর্ডার কনফার্ম করার সাথে সাথেই অর্ডারের বিস্তারিত বিবরণসহ সরাসরি আপনার বিজনেস হোয়াটসঅ্যাপে রিডাইরেক্ট হয়ে যাবে। এতে গ্রাহকের সাথে সহজে যোগাযোগ এবং পেমেন্ট ভেরিফিকেশন করা যায়।",
      },
      {
        qEn: "What payment methods do you accept?",
        qBn: "আপনারা কী কী পেমেন্ট মাধ্যম গ্রহণ করেন?",
        aEn: "We accept all standard local and international payment methods, including bank transfers, mobile financial services (bKash, Nagad), and major credit/debit cards processed through compliant, regulated payment gateways.",
        aBn: "আমরা সকল প্রচলিত লোকাল এবং আন্তর্জাতিক পেমেন্ট মাধ্যম গ্রহণ করি, যার মধ্যে ব্যাংক ট্রান্সফার, বিকাশ (bKash), নগদ (Nagad) এবং ডেবিট/ক্রেডিট কার্ড অন্তর্ভুক্ত।",
      },
      {
        qEn: "Is there a refund if I change my mind?",
        qBn: "আমি মত পরিবর্তন করলে কি রিফান্ড বা টাকা ফেরত পাওয়ার সুযোগ আছে?",
        aEn: "Due to the custom, labor-intensive nature of digital product design and software engineering, project deposits and completed milestone payments are non-refundable once work has officially commenced. However, we ensure total alignment at every phase before moving forward.",
        aBn: "ডিজিটাল প্রোডাক্ট ডিজাইন এবং ওয়েব ডেভেলপমেন্ট একটি সময়সাপেক্ষ ও কাস্টমাইজড কাজ হওয়ায় কাজ শুরু হওয়ার পর অগ্রিম বা জমাকৃত পেমেন্ট অফেরতযোগ্য। তবে প্রতিটি ধাপে আপনার পূর্ণ সম্মতি নিয়েই আমরা পরবর্তী ধাপে এগোই।",
      },
    ],
  },
  {
    categoryEn: "Support & Maintenance",
    categoryBn: "সাপোর্ট ও মেইনটেইনেন্স",
    items: [
      {
        qEn: "Do you provide post-launch support?",
        qBn: "ওয়েবসাইট লাইভ হওয়ার পর কি সাপোর্ট প্রদান করা হয়?",
        aEn: "Yes! Every completed project includes a dedicated post-launch warranty period to address any unforeseen technical glitches or adjustments. For ongoing peace of mind, we also offer dedicated monthly maintenance and support retainers.",
        aBn: "হ্যাঁ! প্রতিটি প্রোজেক্ট সম্পন্ন হওয়ার পর নির্দিষ্ট সময় পর্যন্ত ফ্রি টেকনিক্যাল সাপোর্ট প্রদান করা হয়। এছাড়াও নিয়মিত সাইট রক্ষণাবেক্ষণের জন্য আমাদের মাসিক মেইনটেইনেন্স প্যাকেজ রয়েছে।",
      },
      {
        qEn: "What if I need changes after the site is live?",
        qBn: "ওয়েবসাইট লাইভ হওয়ার পর কোনো পরিবর্তন বা নতুন কিছু যোগ করতে চাইলে কী করণীয়?",
        aEn: "Minor text, image, or product updates can be managed effortlessly through your custom admin dashboard or CMS. For larger structural additions, new page designs, or feature expansions, our team is always available on demand for quick sprints or monthly retainers.",
        aBn: "ছোটখাটো টেক্সট, ছবি বা প্রোডাক্ট আপডেট আপনি নিজেই কাস্টম অ্যাডমিন ড্যাশবোর্ডের মাধ্যমে সহজেই করতে পারবেন। বড় কোনো পরিবর্তন বা নতুন ফিচার যুক্ত করতে চাইলে আমাদের টিম স্বল্প খরচে দ্রুত তা সম্পন্ন করে দেবে।",
      },
      {
        qEn: "How do I manage my products/orders after launch?",
        qBn: "সাইট লাইভ হওয়ার পর আমি কীভাবে প্রোডাক্ট ও অর্ডার পরিচালনা করব?",
        aEn: "If you select our Premium or Ultra package, you receive a full custom admin dashboard and an intuitive order management system. Upon launch, we provide comprehensive onboarding and walkthrough training so you and your team can effortlessly manage inventory, orders, and content.",
        aBn: "আপনি Premium বা Ultra প্যাকেজ নিলে একটি সম্পূর্ণ কাস্টম অ্যাডমিন ড্যাশবোর্ড ও অর্ডার ম্যানেজমেন্ট সিস্টেম পাবেন। সাইট ডেলিভারির সময় আমরা আপনাকে ও আপনার টিমকে বিস্তারিত ট্রেনিং প্রদান করি, যাতে আপনারা সহজেই প্রোডাক্ট ও অর্ডার পরিচালনা করতে পারেন।",
      },
    ],
  },
];

function FaqPage() {
  const { language } = useLanguage();

  return (
    <>
      <main className="min-h-screen px-6 pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-5xl">
          {/* Back Link */}
          <ScrollReveal className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === "bn" ? "হোমে ফিরে যান" : "Back to Home"}
            </Link>
          </ScrollReveal>

          {/* Page Header */}
          <ScrollReveal className="mb-20 border-b border-border pb-12">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              {language === "bn" ? "সাধারণ জিজ্ঞাসা" : "Frequently Asked Questions"}
            </div>
            <h1 className="text-balance text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
              {language === "bn" ? (
                <>
                  আপনার প্রয়োজনীয় সকল <em className="not-italic text-accent">তথ্য</em>।
                </>
              ) : (
                <>
                  Everything you need to <em className="not-italic text-accent">know</em>.
                </>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {language === "bn"
                ? "আমাদের কাজ, প্যাকেজ, পেমেন্ট মাধ্যম এবং সাপোর্ট সম্পর্কিত সাধারণ প্রশ্নগুলোর উত্তর নিচে দেওয়া হলো।"
                : "Clear answers on our creative process, timeline, BDT pricing packages, WhatsApp checkout, and ongoing support."}
            </p>
          </ScrollReveal>

          {/* FAQ Categories & Accordions */}
          <div className="space-y-20">
            {faqCategories.map((cat, catIndex) => (
              <ScrollReveal key={catIndex} delay={0.05 * catIndex} className="space-y-8">
                <div className="flex items-center gap-4 border-b border-border/80 pb-4">
                  <span className="text-xl font-extrabold text-accent md:text-2xl">
                    0{catIndex + 1}.
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {language === "bn" ? cat.categoryBn : cat.categoryEn}
                  </h2>
                </div>

                <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
                  {cat.items.map((item, itemIndex) => (
                    <AccordionPrimitive.Item
                      key={itemIndex}
                      value={`cat-${catIndex}-item-${itemIndex}`}
                      className="group rounded-3xl border border-border bg-card/60 px-6 py-2 shadow-sm transition-all duration-300 hover:border-foreground/30 data-[state=open]:border-accent/80 data-[state=open]:bg-card data-[state=open]:shadow-md md:px-8"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left text-lg font-semibold tracking-tight text-foreground cursor-pointer transition-colors hover:text-accent focus-visible:outline-none md:text-xl">
                          <span>{language === "bn" ? item.qBn : item.qEn}</span>
                          <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/80 text-sm font-bold text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:border-accent group-hover:text-accent group-data-[state=open]:border-accent group-data-[state=open]:bg-accent group-data-[state=open]:text-accent-foreground group-data-[state=open]:rotate-180">
                            ✱
                          </span>
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionPrimitive.Content className="overflow-hidden text-base leading-relaxed text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="pb-6 pt-2 text-foreground/80 md:text-lg">
                          {language === "bn" ? item.aBn : item.aEn}
                        </div>
                      </AccordionPrimitive.Content>
                    </AccordionPrimitive.Item>
                  ))}
                </AccordionPrimitive.Root>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <ScrollReveal className="mt-28">
            <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-dark p-10 text-center text-dark-foreground shadow-2xl md:flex-row md:p-16 md:text-left">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {language === "bn" ? "আরো প্রশ্ন আছে?" : "Still have questions?"}
                </div>
                <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
                  {language === "bn" ? "আমরা উত্তর দিতে প্রস্তুত।" : "We're here to help you build."}
                </h2>
                <p className="mt-3 text-sm text-dark-foreground/70 md:text-base">
                  {language === "bn"
                    ? "আপনার কাস্টম রিকোয়ারমেন্ট বা প্রোজেক্ট নিয়ে বিস্তারিত কথা বলতে আমাদের মেসেজ দিন।"
                    : "Reach out to discuss custom requirements or learn more about our workflow."}
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-8 py-5 text-base font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/25"
              >
                <span>{language === "bn" ? "আরো প্রশ্ন আছে?" : "Still have questions?"}</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-foreground/15 text-sm transition-transform duration-500 group-hover:rotate-180">
                  ✱
                </span>
                <span>{language === "bn" ? "যোগাযোগ করুন" : "Contact us"}</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
