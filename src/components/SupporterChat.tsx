import React, { useState, useEffect, useRef } from "react";
import { Mascot } from "page-mascot";

const FAQ = [
  {
    question: "আমার একটি ওয়েবসাইট লাগবে (I need a website)",
    keywords: ["ওয়েবসাইট লাগবে", "website lagbe", "need a website", "create website", "website banabo", "website dorkar", "ওয়েবসাইট বানাবো", "নতুন ওয়েবসাইট", "new website", "website needed", "website create", "make website", "website", "ওয়েবসাইট"],
    answer: "দারুণ! আমরা ই-কমার্স, কর্পোরেট, পার্সোনাল পোর্টফোলিও, এবং নিউজ পোর্টালসহ সব ধরনের ওয়েবসাইট তৈরি করি। আপনার ব্যবসার জন্য কেমন ওয়েবসাইট চাচ্ছেন? (We build E-commerce, Corporate, Portfolio, and News portals. What kind of website are you looking for?)",
  },
  {
    question: "কী কী বেনিফিট পাবো? (What are the benefits?)",
    keywords: ["বেনিফিট", "benefit", "ki pabo", "subidha", "সুবিধা", "কেন", "why", "ki ki pabo", "advantages", "profit"],
    answer: "আমাদের ওয়েবসাইটগুলো সুপার ফাস্ট (React/Next.js দিয়ে তৈরি), এসইও (SEO) ফ্রেন্ডলি এবং সব ডিভাইসে সাপোর্ট করে (Responsive)। সাথে থাকছে চমৎকার UI/UX ডিজাইন এবং সিকিউরিটি গ্যারান্টি। (Our sites are super fast, SEO-friendly, fully responsive, and highly secure with great UI/UX!)",
  },
  {
    question: "ওয়েবসাইটের খরচ কেমন? (What's the cost?)",
    keywords: ["খরচ", "khoroch", "price", "cost", "charge", "koto", "টাকা", "taka", "budget", "বাজেট", "প্রাইস", "dam koto", "koto nibe", "pricing"],
    answer: "সার্ভিস চার্জ বা খরচ মূলত ওয়েবসাইটের ফিচার এবং পেজ সংখ্যার উপর নির্ভর করে। তবে আমরা খুবই সাশ্রয়ী মূল্যে প্রিমিয়াম সার্ভিস দিয়ে থাকি। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন। (Pricing depends on features and requirements, but we offer premium services at an affordable price.)",
  },
  {
    question: "আপনারা কি ওয়ার্ডপ্রেস ওয়েবসাইট বানান?",
    keywords: ["ওয়ার্ডপ্রেস", "wordpress", "wp", "cms", "elementor"],
    answer: "হ্যাঁ, আমরা কাস্টম ওয়েবসাইটের পাশাপাশি ক্লায়েন্টের চাহিদা অনুযায়ী ওয়ার্ডপ্রেস (WordPress) দিয়েও দারুণ সব ওয়েবসাইট তৈরি করি। (Yes, alongside custom coded sites, we also build beautiful WordPress websites based on client needs.)",
  },
  {
    question: "এস.ই.ও (SEO) সার্ভিস কি দেন?",
    keywords: ["এসইও", "seo", "rank", "র‍্যাংক", "google", "গুগল", "search engine", "marketing", "মার্কেটিং"],
    answer: "অবশ্যই! আমরা স্পেশালাইজড টেকনিক্যাল, অন-পেজ এবং অফ-পেজ এস.ই.ও (SEO) সার্ভিস প্রদান করি, যা আপনার ওয়েবসাইটকে গুগলে র‍্যাংক করতে সাহায্য করবে। (Absolutely! We provide specialized Technical, On-page, and Off-page SEO services to help you rank on Google.)",
  }
];

const GREETINGS = ["hi", "hello", "hey", "হাই", "হ্যালো", "হেই", "আসসালামু আলাইকুম", "স্লামালাইকুম", "assalamualaikum", "slamalikum", "hlw"];

export function SupporterChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "হ্যালো! আমি আর্টএক্স দেব (ArtX Dev) এর সাপোর্টার। আপনাকে কীভাবে সাহায্য করতে পারি? (Hello! I'm the ArtX Dev supporter. How can I help you?)" }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputText("");

    setTimeout(() => {
      const lowerText = text.toLowerCase().trim();
      
      const isGreeting = GREETINGS.some(g => lowerText === g || lowerText.startsWith(g) || lowerText.includes(` ${g} `));
      if (isGreeting && lowerText.length < 25) {
        setMessages((prev) => [...prev, { sender: "bot", text: "হ্যালো! বলুন, আপনাকে কীভাবে সাহায্য করতে পারি? নিচের প্রশ্নগুলো থেকে বেছে নিতে পারেন অথবা আপনার প্রশ্নটি টাইপ করতে পারেন। (Hello! How can I assist you today?)" }]);
        return;
      }

      // Keyword based matching for English and Banglish
      const match = FAQ.find((faq) => {
        if (faq.question === text) return true;
        // Check if any keyword exists in the user's input
        return faq.keywords.some(kw => lowerText.includes(kw.toLowerCase()));
      });

      if (match) {
        setMessages((prev) => [...prev, { sender: "bot", text: match.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "দুঃখিত, আমি আপনার প্রশ্নটি ঠিক বুঝতে পারিনি। দয়া করে একটু ক্লিয়ার করে বলবেন অথবা নিচের প্রশ্নগুলো থেকে বেছে নিন। (Sorry, I didn't quite get that. Could you please clarify or select from the options below?)" }
        ]);
      }
    }, 600);
  };

  return (
    <>
      <div className="fixed bottom-24 right-4 sm:right-8 z-50 flex items-end pointer-events-none">
        
        {/* Chat UI Panel */}
        {isOpen && (
          <div className="pointer-events-auto bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl w-[calc(100vw-3rem)] sm:w-[380px] overflow-hidden flex flex-col mb-2 mr-3 transform origin-bottom-right transition-all duration-300 ease-out animate-in zoom-in-95">
            
            {/* Header */}
            <div className="bg-primary/90 backdrop-blur-md text-primary-foreground px-5 py-4 flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                <div>
                  <h3 className="font-semibold leading-none">সাপোর্ট</h3>
                  <span className="text-[10px] text-primary-foreground/80 mt-1 block">অনলাইন</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-primary-foreground/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            {/* Chat Area */}
            <div className="flex-1 p-5 overflow-y-auto h-[320px] sm:h-[380px] bg-secondary/10 flex flex-col gap-4 scroll-smooth custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user" 
                      ? "bg-primary text-primary-foreground rounded-br-sm" 
                      : "bg-background border border-border/50 text-foreground rounded-bl-sm"
                  }`}>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-background/80 backdrop-blur-sm">
              <div className="flex flex-wrap gap-2 mb-4">
                {FAQ.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(faq.question)}
                    className="text-xs font-medium bg-secondary/50 hover:bg-secondary text-secondary-foreground py-2 px-3.5 rounded-full text-left transition-all duration-200 border border-transparent hover:border-border"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2 bg-secondary/30 p-1 rounded-full border border-border/50 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(inputText)}
                  placeholder="প্রশ্ন লিখুন / Type here..."
                  className="flex-1 text-sm bg-transparent px-4 py-2.5 focus:outline-none"
                />
                <button
                  onClick={() => handleSend(inputText)}
                  disabled={!inputText.trim()}
                  className="bg-primary text-primary-foreground rounded-full p-2.5 hover:bg-primary/90 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md mr-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mascot Character acting as the Toggle Button */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className="pointer-events-auto cursor-pointer relative group flex items-end drop-shadow-2xl hover:-translate-y-1 transition-transform duration-300"
        >
          {/* Chat Bubble Hint when closed */}
          {!isOpen && (
             <div className="absolute top-8 -left-28 sm:-left-32 bg-primary text-primary-foreground text-xs sm:text-sm px-4 py-2 rounded-2xl rounded-br-none shadow-xl whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                হাই! সাহায্য লাগবে?
             </div>
          )}
          
          <div className="scale-90 sm:scale-100 origin-bottom">
            <Mascot directions="/mascots/glasses-directions.webp" reactions="/mascots/glasses-reactions.webp" />
          </div>
        </div>

      </div>
    </>
  );
}
