import React, { useEffect, useRef, useState } from "react";
import { Mascot } from "page-mascot";

type FaqItem = {
  question: string;
  keywords: string[];
  answer: string;
};

const FAQ: FaqItem[] = [
  {
    question: "আমার একটি ওয়েবসাইট লাগবে (I need a website)",
    keywords: [
      "ওয়েবসাইট লাগবে",
      "website lagbe",
      "need a website",
      "create website",
      "website banabo",
      "website dorkar",
      "ওয়েবসাইট বানাবো",
      "নতুন ওয়েবসাইট",
      "new website",
      "website needed",
      "make website",
      "ওয়েবসাইট",
    ],
    answer:
      "দারুণ! আমরা ই-কমার্স, কর্পোরেট, SaaS, পোর্টফোলিও এবং নিউজ পোর্টালসহ বিভিন্ন ধরনের ওয়েবসাইট তৈরি করি। আপনার ব্যবসার লক্ষ্য, পেজের সংখ্যা ও প্রয়োজনীয় ফিচার জানালে আমরা সঠিক direction দিতে পারি। (We build e-commerce, corporate, SaaS, portfolio, and news websites.)",
  },
  {
    question: "আপনারা কী কী সার্ভিস দেন? (What services do you offer?)",
    keywords: [
      "সার্ভিস",
      "services",
      "what do you do",
      "কি করেন",
      "কী করেন",
      "service list",
      "আপনাদের কাজ",
      "offer",
    ],
    answer:
      "ArtX Dev web design, custom development, WordPress, e-commerce, SaaS UI/UX, SEO/GEO এবং web security service দেয়। আপনার project-এর জন্য কোন service দরকার বুঝতে website type, target audience এবং deadline জানাতে পারেন।",
  },
  {
    question: "কী কী বেনিফিট পাবো? (What are the benefits?)",
    keywords: [
      "বেনিফিট",
      "benefit",
      "ki pabo",
      "subidha",
      "সুবিধা",
      "কেন",
      "why",
      "ki ki pabo",
      "advantages",
      "profit",
    ],
    answer:
      "আপনি পাবেন পরিষ্কার UI/UX, mobile-responsive layout, performance-conscious development, SEO-ready structure এবং project অনুযায়ী support plan। কোন benefit আপনার business-এর জন্য সবচেয়ে গুরুত্বপূর্ণ তা brief দেখেই ঠিক করা যায়।",
  },
  {
    question: "ওয়েবসাইটের খরচ কেমন? (What's the cost?)",
    keywords: [
      "খরচ",
      "khoroch",
      "price",
      "cost",
      "charge",
      "koto",
      "টাকা",
      "taka",
      "budget",
      "বাজেট",
      "প্রাইস",
      "dam koto",
      "koto nibe",
      "pricing",
    ],
    answer:
      "খরচ মূলত পেজ, design complexity, CMS, integrations এবং content-এর উপর নির্ভর করে। ArtX-এর package ও scope দেখতে Pricing page দেখুন; exact quote-এর জন্য আপনার প্রয়োজনগুলো পাঠালে আমরা tailored estimate দিতে পারি।",
  },
  {
    question: "কত দিনে ওয়েবসাইট তৈরি হবে? (How long does it take?)",
    keywords: [
      "কত দিনে",
      "কতদিন",
      "সময় লাগবে",
      "time লাগবে",
      "how long",
      "timeline",
      "deadline",
      "কবে পাব",
      "when ready",
    ],
    answer:
      "Simple business website সাধারণত scope ও feedback-এর উপর নির্ভর করে কয়েক সপ্তাহে করা যায়। E-commerce, SaaS বা custom application-এর সময় বেশি হতে পারে। দ্রুত estimate-এর জন্য page list, reference এবং launch deadline পাঠান।",
  },
  {
    question: "আপনারা কি ওয়ার্ডপ্রেস ওয়েবসাইট বানান? (Do you build WordPress sites?)",
    keywords: ["ওয়ার্ডপ্রেস", "wordpress", "wp", "cms", "elementor", "woocommerce"],
    answer:
      "হ্যাঁ, আমরা custom এবং lightweight WordPress website তৈরি করি—যেখানে প্রয়োজন অনুযায়ী CMS, WooCommerce, SEO setup, speed optimization এবং security hardening রাখা যায়।",
  },
  {
    question: "ই-কমার্স ও bKash/Nagad integration করেন?",
    keywords: [
      "ই কমার্স",
      "ecommerce",
      "e-commerce",
      "অনলাইন শপ",
      "online store",
      "bkash",
      "বিকাশ",
      "nagad",
      "নগদ",
      "payment",
      "পেমেন্ট",
      "checkout",
    ],
    answer:
      "হ্যাঁ। Product catalog, mobile-first checkout, bKash/Nagad workflow, card gateway, order management এবং courier integration-এর scope project অনুযায়ী করা যায়। আপনার payment method ও product count জানালে ভালোভাবে guide করা যাবে।",
  },
  {
    question: "এস.ই.ও (SEO) সার্ভিস কি দেন?",
    keywords: [
      "এসইও",
      "seo",
      "seo service",
      "seo agency",
      "rank",
      "র‍্যাংক",
      "google",
      "গুগল",
      "search engine",
      "marketing",
      "মার্কেটিং",
      "জিও",
      "geo",
      "aeo",
    ],
    answer:
      "অবশ্যই। আমরা technical SEO, on-page structure, local SEO, content architecture, structured data এবং GEO/AEO readiness নিয়ে কাজ করি। কোনো agency-ই ranking guarantee করতে পারে না, তবে measurable, white-hat process তৈরি করা যায়।",
  },
  {
    question: "মোবাইলে responsive হবে তো? (Will it work on mobile?)",
    keywords: [
      "মোবাইল",
      "mobile",
      "responsive",
      "রেসপন্সিভ",
      "phone",
      "tablet",
      "mobile friendly",
      "মোবাইলে",
    ],
    answer:
      "হ্যাঁ। প্রতিটি নতুন website mobile, tablet এবং desktop viewport-এর জন্য design ও test করা হয়। Touch-friendly layout, readable typography, image optimization এবং Core Web Vitals-ও scope অনুযায়ী বিবেচনা করা যায়।",
  },
  {
    question: "বাংলা বা multilingual website বানাতে পারবেন?",
    keywords: [
      "বাংলা",
      "bangla",
      "bengali",
      "multilingual",
      "multi language",
      "দুই ভাষা",
      "ভাষা",
      "translation",
      "hreflang",
    ],
    answer:
      "হ্যাঁ। English, বাংলা বা bilingual experience-এর জন্য language switcher, Unicode-friendly typography এবং SEO-aware content structure পরিকল্পনা করা যায়। কোন কোন language ও page translate হবে তা আগে ঠিক করা হবে।",
  },
  {
    question: "Launch-এর পর support বা maintenance দেন?",
    keywords: [
      "support",
      "সাপোর্ট",
      "maintenance",
      "মেইনটেন্যান্স",
      "update",
      "আপডেট",
      "backup",
      "bug fix",
      "post launch",
      "পরের সাপোর্ট",
    ],
    answer:
      "হ্যাঁ, project scope অনুযায়ী post-launch support, bug fixes, content updates, performance review, security updates এবং maintenance plan আলোচনা করা যায়। Launch-এর পর কী ধরনের help দরকার তা জানালে সঠিক option বলা যাবে।",
  },
  {
    question: "কাজ শুরু করতে আপনাদের কী কী তথ্য লাগবে?",
    keywords: [
      "কাজ শুরু",
      "start project",
      "get started",
      "কি কি লাগবে",
      "কী লাগবে",
      "requirements",
      "brief",
      "প্রয়োজন",
      "information লাগবে",
    ],
    answer:
      "শুরুতে business সম্পর্কে সংক্ষিপ্ত brief, target audience, প্রয়োজনীয় pages/features, reference websites, preferred timeline এবং budget range জানালেই ভালো। সবকিছু ready না থাকলেও সমস্যা নেই—আমরা discovery-তে scope পরিষ্কার করতে সাহায্য করি।",
  },
];

const GREETINGS = [
  "hi",
  "hello",
  "hey",
  "হাই",
  "হ্যালো",
  "হেই",
  "আসসালামু আলাইকুম",
  "স্লামালাইকুম",
  "assalamualaikum",
  "slamalikum",
  "hlw",
];

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[!?.,:;()[\]{}"'`/\\|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function findBestFaqMatch(text: string) {
  const normalizedText = normalizeText(text);

  const ranked = FAQ.map((faq) => {
    const exactQuestion = normalizeText(faq.question) === normalizedText ? 1000 : 0;
    const keywordScore = faq.keywords.reduce((score, keyword) => {
      const normalizedKeyword = normalizeText(keyword);
      return normalizedKeyword && normalizedText.includes(normalizedKeyword)
        ? score + Math.max(normalizedKeyword.length, 3)
        : score;
    }, 0);

    return { faq, score: exactQuestion + keywordScore };
  }).sort((a, b) => b.score - a.score);

  return ranked[0]?.score ? ranked[0].faq : null;
}

export function SupporterChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    {
      sender: "bot",
      text: "হ্যালো! আমি আর্টএক্স দেব (ArtX Dev) এর সাপোর্টার। আপনাকে কীভাবে সাহায্য করতে পারি? (Hello! I'm the ArtX Dev supporter. How can I help you?)",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visibleFaqs = showAllFaqs ? FAQ : FAQ.slice(0, 5);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    };
  }, []);

  const handleSend = (text: string) => {
    const cleanedText = text.trim();
    if (!cleanedText || isTyping) return;

    setMessages((prev) => [...prev, { sender: "user", text: cleanedText }]);
    setInputText("");
    setIsTyping(true);

    replyTimerRef.current = setTimeout(() => {
      const lowerText = normalizeText(cleanedText);
      const isGreeting = GREETINGS.some((greeting) => {
        const normalizedGreeting = normalizeText(greeting);
        return (
          lowerText === normalizedGreeting ||
          lowerText.startsWith(`${normalizedGreeting} `) ||
          lowerText.endsWith(` ${normalizedGreeting}`)
        );
      });

      if (isGreeting && lowerText.length < 30) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "হ্যালো! বলুন, আপনাকে কীভাবে সাহায্য করতে পারি? নিচের quick questions থেকে বেছে নিতে পারেন অথবা আপনার প্রশ্নটি টাইপ করতে পারেন। (Hello! How can I assist you today?)",
          },
        ]);
      } else {
        const match = findBestFaqMatch(cleanedText);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text:
              match?.answer ??
              "দুঃখিত, আমি আপনার প্রশ্নটি ঠিক বুঝতে পারিনি। দয়া করে একটু clear করে বলবেন অথবা নিচের quick questions থেকে বেছে নিন। প্রয়োজনে Contact page-এর মাধ্যমে সরাসরি ArtX team-এর সঙ্গে যোগাযোগ করতে পারেন। (Sorry, I didn't quite get that. Please clarify or choose one of the quick questions below.)",
          },
        ]);
      }

      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="pointer-events-none fixed inset-x-3 bottom-3 z-50 flex flex-col items-end sm:inset-x-auto sm:bottom-6 sm:right-8">
      {isOpen && (
        <div className="pointer-events-auto mb-3 flex h-[min(72dvh,36rem)] max-h-[calc(100dvh-6.5rem)] w-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-300 sm:mb-4 sm:w-[380px]">
          <div className="flex shrink-0 items-center justify-between bg-primary/95 px-4 py-3.5 text-primary-foreground shadow-sm sm:px-5 sm:py-4">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              <div>
                <h3 className="font-semibold leading-none">সাপোর্ট</h3>
                <span className="mt-1 block text-[10px] text-primary-foreground/80">
                  অনলাইন · Built-in assistant
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/10 p-2 text-primary-foreground/80 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Close support chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div
            className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-secondary/10 p-3 scroll-smooth sm:space-y-4 sm:p-5"
            aria-live="polite"
            aria-label="Support conversation"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={`flex w-full ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl p-3 text-[13px] leading-relaxed shadow-sm sm:max-w-[85%] sm:p-3.5 sm:text-sm ${
                    message.sender === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm border border-border/50 bg-background text-foreground"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div
                  className="rounded-2xl rounded-bl-sm border border-border/50 bg-background px-3.5 py-3 shadow-sm"
                  aria-label="Assistant is typing"
                >
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="shrink-0 border-t border-border bg-background/90 p-3 backdrop-blur-sm sm:p-4">
            <div className="mb-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  দ্রুত প্রশ্ন · Quick questions
                </span>
                <button
                  type="button"
                  onClick={() => setShowAllFaqs((previous) => !previous)}
                  className="shrink-0 text-[11px] font-medium text-accent underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  aria-expanded={showAllFaqs}
                >
                  {showAllFaqs ? "কম দেখান" : "আরও প্রশ্ন"}
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible">
                {visibleFaqs.map((faq) => (
                  <button
                    key={faq.question}
                    type="button"
                    onClick={() => handleSend(faq.question)}
                    disabled={isTyping}
                    className="min-h-10 max-w-[84vw] shrink-0 rounded-xl border border-border/60 bg-secondary/50 px-3 py-2 text-left text-xs font-medium leading-snug text-secondary-foreground transition-colors hover:border-accent/50 hover:bg-secondary disabled:cursor-wait disabled:opacity-60 sm:max-w-none sm:rounded-full"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 p-1 transition-all focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20">
              <input
                type="text"
                value={inputText}
                maxLength={240}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSend(inputText);
                }}
                placeholder="প্রশ্ন লিখুন / Type here..."
                aria-label="Type your support question"
                enterKeyHint="send"
                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm focus:outline-none sm:px-4"
              />
              <button
                type="button"
                onClick={() => handleSend(inputText)}
                disabled={!inputText.trim() || isTyping}
                aria-label="Send question"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:bg-primary/90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="pointer-events-auto relative flex items-end drop-shadow-2xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-label={isOpen ? "Close support chat" : "Open support chat"}
        aria-expanded={isOpen}
      >
        {!isOpen && (
          <span className="absolute bottom-full right-0 mb-2 max-w-[calc(100vw-5rem)] rounded-2xl rounded-br-none bg-primary px-3.5 py-2 text-right text-xs text-primary-foreground opacity-95 shadow-xl transition-opacity group-hover:opacity-100 sm:right-0 sm:px-4 sm:text-sm">
            হাই! সাহায্য লাগবে?
          </span>
        )}
        <span className="origin-bottom scale-90 sm:scale-100">
          <Mascot
            directions="/mascots/glasses-directions.webp"
            reactions="/mascots/glasses-reactions.webp"
          />
        </span>
      </button>
    </div>
  );
}
