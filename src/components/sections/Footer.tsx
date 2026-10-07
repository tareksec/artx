"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Mail, Facebook } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RotatingAsterisk } from "@/components/animations/RotatingAsterisk";
import { socialLinks } from "@/content/site";
import { trackOutboundClick } from "@/lib/track-click";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer id="contact" className="bg-dark text-dark-foreground">
      <ScrollReveal className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pb-12 md:pt-32">
        <div className="flex flex-col gap-10 border-b border-dark-foreground/15 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-balance text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            {t.footer.titleStart}
            <br />
            <em className="not-italic text-accent">{t.footer.titleAccent}</em>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 self-start rounded-full bg-accent px-7 py-5 text-base font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <RotatingAsterisk className="text-lg" />
            {t.footer.cta}
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === "/" || window.location.pathname === "") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-2xl font-bold tracking-tight inline-block hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="ArtX home"
            >
              Art<span className="text-accent">X</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-dark-foreground/60 leading-relaxed">
              {language === "bn"
                ? "আন্তর্জাতিক মানের প্রিমিয়াম ওয়েব ডিজাইন ও ডেভেলপমেন্ট স্টুডিও। ঢাকা, বাংলাদেশ ও গ্লোবাল ক্লায়েন্টদের জন্য।"
                : "Full-service web design & engineering studio crafting high-converting digital products for Bangladesh & global brands."}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-dark-foreground/15 bg-white/5 px-3 py-1 text-xs text-dark-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dhaka, Bangladesh · Remote Worldwide</span>
            </div>
          </div>

          <nav aria-label="Company Sitemap">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              {language === "bn" ? "কোম্পানি" : "Company"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/why-us" className="text-accent font-medium hover:underline">{language === "bn" ? "কেন ArtX" : "Why ArtX (GEO)"}</Link></li>
              <li><Link to="/work" className="hover:text-accent transition-colors">{t.nav.work}</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">{t.nav.blog}</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">{t.nav.pricing}</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">{t.nav.faq}</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">{t.nav.testimonials}</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">{t.nav.careers}</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </nav>

          <nav aria-label="Services Navigation">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              {language === "bn" ? "সার্ভিসসমূহ" : "Services"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/ecommerce-website-design" className="hover:text-accent transition-colors">E-Commerce Design</Link></li>
              <li><Link to="/services/wordpress-development" className="hover:text-accent transition-colors">WordPress Development</Link></li>
              <li><Link to="/services/saas-website-design" className="hover:text-accent transition-colors">SaaS Website Design</Link></li>
              <li><Link to="/services/seo-services" className="hover:text-accent transition-colors">SEO & GEO Services</Link></li>
              <li><Link to="/services" className="text-dark-foreground/60 hover:text-accent transition-colors">→ {language === "bn" ? "সব সার্ভিস দেখুন" : "View All Services"}</Link></li>
            </ul>
          </nav>

          <nav aria-label="Locations Navigation">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              {language === "bn" ? "ArtX Dev হাব" : "ArtX Dev Hubs"}
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li><Link to="/artx-dev" className="text-accent font-medium hover:underline">→ ArtX Dev Overview</Link></li>
              <li><Link to="/location/dhaka" className="hover:text-accent transition-colors">ArtX Dev Dhaka</Link></li>
              <li><Link to="/location/bangladesh" className="hover:text-accent transition-colors">ArtX Dev Bangladesh</Link></li>
              <li><Link to="/location/chittagong" className="hover:text-accent transition-colors">ArtX Dev Chittagong</Link></li>
              <li><Link to="/location/sylhet" className="hover:text-accent transition-colors">ArtX Dev Sylhet</Link></li>
              <li><Link to="/location/gulshan" className="hover:text-accent transition-colors">ArtX Dev Gulshan</Link></li>
              <li><Link to="/location/uttara" className="hover:text-accent transition-colors">ArtX Dev Uttara</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              {language === "bn" ? "যোগাযোগ ও সোশ্যাল" : "Contact & Social"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://wa.me/8801645441584" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-2 transition-colors"><MessageCircle className="h-4 w-4 text-accent shrink-0" /> +8801645441584</a></li>
              <li><a href="mailto:artxstudiocom@gmail.com" className="hover:text-accent flex items-center gap-2 transition-colors truncate"><Mail className="h-4 w-4 text-accent shrink-0" /> artxstudiocom@gmail.com</a></li>
              <li><a href="https://www.facebook.com/artxdev" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-2 transition-colors"><Facebook className="h-4 w-4 text-accent shrink-0" /> fb.com/artxdev</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-dark-foreground/10">
              <ul className="space-y-1.5 text-xs text-dark-foreground/70">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      {...(social.live
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      onClick={() =>
                        social.live && trackOutboundClick(`social:${social.label}`)
                      }
                      className={social.live ? "text-accent hover:underline font-medium" : "hover:text-accent"}
                    >
                      {social.label} {!social.live && "— coming soon"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Brand Showcase Card (Website Theme Adjusted + Interactive Hover Spotlight) */}
        <FooterBrandCard language={language} />
      </ScrollReveal>
    </footer>
  );
}

function FooterBrandCard({ language }: { language: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Target coordinates
  const targetCard = useRef({ x: 0, y: 0 });
  const targetText = useRef({ x: 0, y: 0 });
  // Interpolated smooth coordinates for butter-smooth 120fps physics
  const currentCard = useRef({ x: 0, y: 0 });
  const currentText = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const updateLoop = () => {
      // Lerp smoothing factor for fluid motion and physical inertia
      const factor = isHoveredRef.current ? 0.14 : 0.08;
      currentCard.current.x = lerp(currentCard.current.x, targetCard.current.x, factor);
      currentCard.current.y = lerp(currentCard.current.y, targetCard.current.y, factor);
      currentText.current.x = lerp(currentText.current.x, targetText.current.x, factor);
      currentText.current.y = lerp(currentText.current.y, targetText.current.y, factor);

      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const width = rect.width || 1;
        const height = rect.height || 1;

        // Subtle 3D perspective tilt reacting to cursor coordinates
        const tiltX = isHoveredRef.current
          ? ((currentCard.current.y / height) - 0.5) * -5.5
          : 0;
        const tiltY = isHoveredRef.current
          ? ((currentCard.current.x / width) - 0.5) * 5.5
          : 0;

        card.style.setProperty("--mx", `${currentCard.current.x.toFixed(1)}px`);
        card.style.setProperty("--my", `${currentCard.current.y.toFixed(1)}px`);
        card.style.setProperty("--tx", `${currentText.current.x.toFixed(1)}px`);
        card.style.setProperty("--ty", `${currentText.current.y.toFixed(1)}px`);
        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      }

      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      targetCard.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
    if (textRef.current) {
      const textRect = textRef.current.getBoundingClientRect();
      targetText.current = {
        x: e.clientX - textRect.left,
        y: e.clientY - textRect.top,
      };
    }
  }, []);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      isHoveredRef.current = true;
      setIsHovered(true);
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        currentCard.current = { x, y };
        targetCard.current = { x, y };
      }
      if (textRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        const tx = e.clientX - textRect.left;
        const ty = e.clientY - textRect.top;
        currentText.current = { x: tx, y: ty };
        targetText.current = { x: tx, y: ty };
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    setIsHovered(false);
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      targetCard.current = { x: rect.width / 2, y: rect.height / 2 };
    }
    if (textRef.current) {
      const textRect = textRef.current.getBoundingClientRect();
      targetText.current = { x: textRect.width / 2, y: textRect.height / 2 };
    }
  }, []);

  return (
    <div className="mt-14 sm:mt-20 [perspective:1200px]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateZ(0)",
          transition: "transform 0.15s ease-out, border-color 0.4s ease",
          transformStyle: "preserve-3d",
        }}
        className="group/card relative overflow-hidden rounded-[26px] sm:rounded-[40px] border border-white/[0.08] bg-[#070709] px-6 pt-6 pb-2 sm:px-10 sm:pt-8 sm:pb-3 shadow-2xl transition-all duration-500 hover:border-white/[0.18]"
      >
        {/* Subtle Ambient Breathing Aurora Background Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 85% 70% at 50% 90%, rgba(255, 69, 0, 0.16) 0%, rgba(234, 88, 12, 0.05) 50%, transparent 75%)",
          }}
        />

        {/* Dynamic Specular Border Light Beam (lights up the border edge closest to mouse) */}
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-[27px] sm:rounded-[41px] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            padding: "1px",
            background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 120, 50, 0.55) 0%, rgba(255, 69, 0, 0.18) 40%, transparent 75%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Volumetric Smooth Hover Spotlight Beam */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-400 ease-out"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(550px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 87, 34, 0.22) 0%, rgba(255, 69, 0, 0.07) 45%, transparent 75%)`,
          }}
        />

        {/* Top metadata row */}
        <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[11px] sm:text-xs text-white/50 tracking-wide font-normal">
          <span>
            © {new Date().getFullYear()} ArtX Dev.{" "}
            {language === "bn" ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/privacy-policy"
              className="hover:text-white/80 transition-colors underline underline-offset-4"
            >
              {language === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy"}
            </Link>
            <span>·</span>
            <span className="text-white/40">
              Design by ArtX Dev · Powered by artxdev.tech
            </span>
          </div>
        </div>

        {/* Giant Typography Container (ARTX DEV) */}
        <div
          ref={textRef}
          className="relative z-10 mt-6 sm:mt-10 mb-[-1.5%] flex justify-center items-center overflow-hidden select-none cursor-default [transform-style:preserve-3d]"
        >
          {/* Base Layer: Warm Flame & Ember vignette (darkened edges) */}
          <span
            className="block text-center font-black uppercase tracking-[-0.04em] leading-[0.84] text-[15.5vw] sm:text-[16vw] lg:text-[15.5vw] whitespace-nowrap transition-all duration-300"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1f0601 0%, #471103 15%, #b43d0b 38%, #ff6b35 50%, #b43d0b 62%, #471103 85%, #1f0601 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 35px rgba(255, 69, 0, 0.22))",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.25) 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.25) 100%)",
            }}
          >
            ARTX DEV
          </span>

          {/* Enlightened Layer: Ultra-radiant Molten Light centered at smooth cursor physics */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex justify-center items-center text-center font-black uppercase tracking-[-0.04em] leading-[0.84] text-[15.5vw] sm:text-[16vw] lg:text-[15.5vw] whitespace-nowrap transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              backgroundImage:
                "linear-gradient(100deg, #ff5722 0%, #ff8a50 20%, #ffffff 48%, #fff7ed 52%, #ff8a50 80%, #ff5722 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter:
                "drop-shadow(0 0 20px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 45px rgba(255, 115, 55, 0.95)) drop-shadow(0 0 90px rgba(255, 69, 0, 0.75))",
              maskImage: `radial-gradient(340px circle at var(--tx, 50%) var(--ty, 50%), black 0%, rgba(0,0,0,0.6) 45%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(340px circle at var(--tx, 50%) var(--ty, 50%), black 0%, rgba(0,0,0,0.6) 45%, transparent 100%)`,
            }}
          >
            ARTX DEV
          </span>

          {/* Floating Photon Glare / Optical Core at cursor position */}
          <div
            className="pointer-events-none absolute w-36 h-36 rounded-full blur-2xl transition-opacity duration-300 mix-blend-screen"
            style={{
              opacity: isHovered ? 0.75 : 0,
              left: "var(--tx, 50%)",
              top: "var(--ty, 50%)",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 138, 80, 0.6) 40%, rgba(255, 69, 0, 0) 70%)",
            }}
          />
        </div>
      </div>

      {/* Mirrored Floor Reflection below card with dynamic horizontal spotlight tracking */}
      <div className="relative -mt-1 flex justify-center overflow-hidden h-7 sm:h-14 opacity-25 pointer-events-none select-none">
        <span
          className="block text-center font-black uppercase tracking-[-0.04em] leading-[0.84] text-[15.5vw] sm:text-[16vw] lg:text-[15.5vw] whitespace-nowrap scale-y-[-1] blur-[2.5px] transition-all duration-300"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1f0601 0%, #471103 15%, #b43d0b 38%, #ff6b35 50%, #b43d0b 62%, #471103 85%, #1f0601 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
          }}
        >
          ARTX DEV
        </span>
      </div>
    </div>
  );
}
