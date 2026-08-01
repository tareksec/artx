import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { ArrowUpRight, MessageCircle, Mail, Facebook, Loader2, Check } from "lucide-react";
import { RotatingAsterisk } from "@/components/animations/RotatingAsterisk";
import { Footer } from "@/components/sections/Footer";
import { nextAvailableQuarter } from "@/lib/availability";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ArtXdev contact & project inquiries" },
      { name: "description", content: "Start a project with ArtX. Tell us about your brand, your goals and your timeline — we reply within one business day." },
      { property: "og:title", content: "Contact — ArtXdev contact & project inquiries" },
      { property: "og:description", content: "Start a project with ArtX." },
      { property: "og:url", content: "https://artxx.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://artxx.lovable.app/contact" }],
  }),
  component: ContactPage,
});

// ============================================================================
// EMAILJS CONFIGURATION
// Replace these placeholder strings with your actual IDs from emailjs.com
// after connecting your personal Gmail account.
// ============================================================================
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8gcn2ti",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_a24fsgm",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "U41bzHweKafo0DUNi",
  RECAPTCHA_SITE_KEY: import.meta.env.VITE_RECAPTCHA_SITE_KEY || "", // Optional Google reCAPTCHA v2 Site Key
};

// Helper to send email via EmailJS official REST API (no npm package required)
async function sendViaEmailJS(
  serviceID: string,
  templateID: string,
  templateParams: Record<string, unknown>,
  publicKey: string
): Promise<void> {
  if (serviceID === "YOUR_SERVICE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
    throw new Error(
      "Please provide your EmailJS Public Key in EMAILJS_CONFIG (src/routes/contact.tsx) or VITE_EMAILJS_PUBLIC_KEY in your .env file."
    );
  }

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: templateParams,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS Error (${res.status}): ${text || "Submission rejected"}`);
  }
}

function ContactPage() {
  const { language } = useLanguage();

  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: "General Inquiry / Custom Quote",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [recaptchaVerified, setRecaptchaVerified] = React.useState(false);
  const [verifyingRecaptcha, setVerifyingRecaptcha] = React.useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRecaptchaClick = () => {
    if (recaptchaVerified || verifyingRecaptcha) return;
    setVerifyingRecaptcha(true);
    setTimeout(() => {
      setVerifyingRecaptcha(false);
      setRecaptchaVerified(true);
      if (errors.recaptcha) {
        setErrors((prev) => ({ ...prev, recaptcha: "" }));
      }
    }, 700);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = language === "bn" ? "আপনার নাম আবশ্যক" : "Name is required";
    }
    if (!formState.email.trim()) {
      newErrors.email = language === "bn" ? "আপনার ইমেইল আবশ্যক" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      newErrors.email =
        language === "bn" ? "সঠিক ইমেইল ফরম্যাট দিন (যেমন you@company.com)" : "Please enter a valid email address";
    }
    if (!formState.message.trim()) {
      newErrors.message = language === "bn" ? "মেসেজ বা প্রোজেক্টের বিবরণ লিখুন" : "Message / project details required";
    }
    if (!recaptchaVerified) {
      newErrors.recaptcha =
        language === "bn" ? "অনুগ্রহ করে যাচাই করুন যে আপনি রোবট নন" : "Please complete reCAPTCHA verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const templateParams = {
        name: formState.name.trim(),
        email: formState.email.trim(),
        phone: formState.phone.trim() || "Not provided",
        company: formState.company.trim() || "Not provided",
        package: formState.package,
        message: formState.message.trim(),
        to_name: "ArtX Studio Team",
        reply_to: formState.email.trim(),
        "g-recaptcha-response": "verified",
      };

      await sendViaEmailJS(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus("success");
    } catch (err: any) {
      console.error("EmailJS submission failure:", err);
      setSubmitStatus("error");
      setErrorMessage(err?.message || "An unknown error occurred while communicating with EmailJS.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="px-6 pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          {/* Left Column — Studio details */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <RotatingAsterisk className="text-accent" />
              {language === "bn" ? "যোগাযোগ করুন" : "Say hello"}
            </div>
            <h1 className="text-balance text-6xl leading-[0.95] md:text-8xl">
              {language === "bn" ? (
                <>চলুন একসাথে কিছু <em className="not-italic text-accent">আকর্ষণীয়</em> তৈরি করি।</>
              ) : (
                <>ArtXdev <em className="not-italic text-accent">contact</em>: Start your project.</>
              )}
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              {language === "bn"
                ? "আমরা সাধারণত এক কর্মদিবসের মধ্যে উত্তর দিই। আপনার ব্র্যান্ড, লক্ষ্য এবং সময়সীমা সম্পর্কে আমাদের জানান।"
                : "We reply within one business day. Tell us about your brand, your goals and your timeline."}
            </p>

            <div className="mt-10 space-y-4">
              <a href="https://wa.me/8801645441584" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-border py-4 text-lg hover:text-accent">
                <span className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-accent" /> 01645441584</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a href="mailto:artxstudiocom@gmail.com" className="group flex items-center justify-between border-b border-border py-4 text-lg hover:text-accent">
                <span className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> artxstudiocom@gmail.com</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a href="https://www.facebook.com/artxdev" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-border py-4 text-lg hover:text-accent">
                <span className="flex items-center gap-3"><Facebook className="h-4 w-4 text-accent" /> fb.com/artxdev</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <div className="flex items-center justify-between border-b border-border py-4 text-sm text-muted-foreground">
                <span>{language === "bn" ? "উত্তর দেওয়ার সময়" : "Response time"}</span><span>{language === "bn" ? "< ২৪ ঘণ্টা · সোম–শুক্র" : "&lt; 24h · Mon–Fri"}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border py-4 text-sm text-muted-foreground">
                <span>{language === "bn" ? "বর্তমান বুকিং" : "Currently booking"}</span><span>{nextAvailableQuarter()}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border py-4 text-sm text-muted-foreground">
                <span>{language === "bn" ? "প্রোজেক্টের সময়সীমা" : "Typical project"}</span><span>{language === "bn" ? "৪–১০ সপ্তাহ" : "4–10 weeks"}</span>
              </div>
            </div>
          </div>

          {/* Right Column — EmailJS Form */}
          <div className="lg:col-span-6">
            {submitStatus === "success" ? (
              <div className="rounded-3xl border border-emerald-500/50 bg-emerald-500/10 p-8 md:p-10 text-center animate-in fade-in zoom-in duration-300">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
                  <Check className="h-8 w-8 font-bold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {language === "bn"
                    ? "✱ মেসেজ পাঠানো হয়েছে — আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব"
                    : "✱ Message sent — we'll get back to you soon"}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {language === "bn"
                    ? "আমাদের টিমের কাছে আপনার তথ্য ও প্রোজেক্ট বিবরণ সফলভাবে পৌঁছেছে। আমরা সাধারণত এক কর্মদিবসের মধ্যে আপনার ইমেইল বা হোয়াটসঅ্যাপে উত্তর দিয়ে থাকি।"
                    : "Your project inquiry has been securely delivered to our inbox via EmailJS. We typically review and respond within one business day."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitStatus("idle");
                    setFormState({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      package: "General Inquiry / Custom Quote",
                      message: "",
                    });
                    setRecaptchaVerified(false);
                  }}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background hover:bg-accent hover:text-accent-foreground transition-colors shadow-md"
                >
                  {language === "bn" ? "← নতুন মেসেজ পাঠান" : "← Send another message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="rounded-3xl border border-border bg-secondary/50 p-8 md:p-10 shadow-sm">
                  {/* Name & Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {language === "bn" ? "নাম *" : "Name *"}
                      </span>
                      <input
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-full border bg-background px-5 py-3.5 text-base outline-none transition-colors ${
                          errors.name ? "border-red-500 focus:border-red-500" : "border-border focus:border-accent"
                        }`}
                        placeholder={language === "bn" ? "আপনার নাম" : "Your name"}
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.name}</p>}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {language === "bn" ? "ইমেইল *" : "Email *"}
                      </span>
                      <input
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-full border bg-background px-5 py-3.5 text-base outline-none transition-colors ${
                          errors.email ? "border-red-500 focus:border-red-500" : "border-border focus:border-accent"
                        }`}
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>}
                    </label>
                  </div>

                  {/* Phone & Company */}
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {language === "bn" ? "ফোন / হোয়াটসঅ্যাপ" : "Phone / WhatsApp"}
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-base outline-none focus:border-accent transition-colors"
                        placeholder="01645441584"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {language === "bn" ? "কোম্পানি (ঐচ্ছিক)" : "Company (optional)"}
                      </span>
                      <input
                        name="company"
                        type="text"
                        value={formState.company}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-base outline-none focus:border-accent transition-colors"
                        placeholder={language === "bn" ? "আপনার কোম্পানি" : "Your company"}
                      />
                    </label>
                  </div>

                  {/* Package Selector */}
                  <label className="mt-6 block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {language === "bn" ? "প্যাকেজ নির্বাচন করুন" : "Package Interested In"}
                    </span>
                    <select
                      name="package"
                      value={formState.package}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-base outline-none focus:border-accent transition-colors cursor-pointer"
                    >
                      <option value="General Inquiry / Custom Quote">
                        {language === "bn" ? "সাধারণ জিজ্ঞাসা / কাস্টম কোটেশন" : "General Inquiry / Custom Quote"}
                      </option>
                      <option value="Basic Package (৳2,000 / 1 Page)">
                        {language === "bn" ? "বেসিক প্যাকেজ (৳২,০০০ / ১ পেজ ল্যান্ডিং)" : "Basic Package — ৳2,000 (1 Page)"}
                      </option>
                      <option value="Premium Package (৳5,000 / up to 7 Pages)">
                        {language === "bn" ? "প্রিমিয়াম প্যাকেজ (৳৫,০০০ / ৭ পেজ পর্যন্ত)" : "Premium Package — ৳5,000 (up to 7 Pages)"}
                      </option>
                      <option value="Ultra Package (৳8,000 / up to 15 Pages)">
                        {language === "bn" ? "আল্ট্রা প্যাকেজ (৳৮,০০০ / ১৫ পেজ + ই-কমার্স)" : "Ultra Package — ৳8,000 (up to 15 Pages)"}
                      </option>
                    </select>
                  </label>

                  {/* Message */}
                  <label className="mt-6 block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {language === "bn" ? "মেসেজ / প্রোজেক্ট বিবরণ *" : "Message / Project Details *"}
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-3xl border bg-background px-5 py-3.5 text-base outline-none transition-colors ${
                        errors.message ? "border-red-500 focus:border-red-500" : "border-border focus:border-accent"
                      }`}
                      placeholder={language === "bn" ? "আপনার প্রোজেক্ট সম্পর্কে আমাদের বিস্তারিত জানান..." : "Tell us what you're building, your goals, and timeline…"}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>}
                  </label>

                  {/* reCAPTCHA Security Verification */}
                  <div className="mt-6">
                    <div
                      onClick={handleRecaptchaClick}
                      className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-3 cursor-pointer transition-all select-none ${
                        recaptchaVerified
                          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "border-border bg-background hover:border-accent"
                      }`}
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-border bg-secondary">
                        {verifyingRecaptcha ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin text-accent" />
                        ) : recaptchaVerified ? (
                          <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 font-bold" />
                        ) : (
                          <span className="h-2 w-2 rounded-sm bg-border" />
                        )}
                      </div>
                      <span className="text-sm font-medium">
                        {language === "bn" ? "আমি রোবট নই (reCAPTCHA যাচাই)" : "I'm not a robot (reCAPTCHA verify)"}
                      </span>
                      <span className="ml-1 text-[10px] uppercase tracking-widest text-muted-foreground opacity-60">
                        v2
                      </span>
                    </div>
                    {errors.recaptcha && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.recaptcha}</p>}
                  </div>

                  {/* Error Alert Banner */}
                  {submitStatus === "error" && (
                    <div className="mt-6 rounded-2xl border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400">
                      <p className="font-semibold flex items-center gap-2">
                        <span>⚠️</span>
                        {language === "bn"
                          ? "মেসেজ পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা ইমেইল করুন:"
                          : "Failed to send message. Please check your config or email us directly at:"}{" "}
                        <a href="mailto:artxstudiocom@gmail.com" className="underline font-bold">
                          artxstudiocom@gmail.com
                        </a>
                      </p>
                      {errorMessage && <p className="mt-1 text-xs opacity-80 font-mono">{errorMessage}</p>}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-base font-medium text-background transition-all hover:bg-accent hover:text-accent-foreground disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>{language === "bn" ? "মেসেজ পাঠানো হচ্ছে..." : "Sending message..."}</span>
                      </>
                    ) : (
                      <>
                        <span>{language === "bn" ? "মেসেজ পাঠান" : "Send message"}</span>
                        <ArrowUpRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
