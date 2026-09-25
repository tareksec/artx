"use client";

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
      <ScrollReveal className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-32">
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
              {language === "bn" ? "লোকেশন হাব" : "Locations"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/location/dhaka" className="hover:text-accent transition-colors">Web Design Dhaka</Link></li>
              <li><Link to="/location/bangladesh" className="hover:text-accent transition-colors">Web Design Bangladesh</Link></li>
              <li className="text-xs text-dark-foreground/50 pt-2">Gulshan · Banani · Uttara</li>
              <li className="text-xs text-dark-foreground/50">Dhanmondi · Motijheel · Mirpur</li>
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

        <div className="flex flex-col items-start justify-between gap-4 border-t border-dark-foreground/15 pt-8 text-xs text-dark-foreground/50 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} ArtX (ArtXdev). {language === "bn" ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}</span>
            <Link to="/privacy-policy" className="hover:text-accent underline underline-offset-4 transition-colors">
              {language === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy"}
            </Link>
          </div>
          <p>{language === "bn" ? "ইন-হাউস ডিজাইন ও ডেভেলপকৃত।" : "Designed and built in-house."}</p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
