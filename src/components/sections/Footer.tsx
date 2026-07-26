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

        <div className="grid gap-12 py-16 md:grid-cols-4">
          <div>
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
            <p className="mt-4 max-w-xs text-sm text-dark-foreground/60">
              {t.hero.body}
            </p>
          </div>
          <nav aria-label="Sitemap">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              {language === "bn" ? "সাইটম্যাপ" : "Sitemap"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/work" className="hover:text-accent">{t.nav.work}</Link></li>
              <li><Link to="/services" className="hover:text-accent">{t.nav.services}</Link></li>
              <li><Link to="/about" className="hover:text-accent">{t.nav.about}</Link></li>
              <li><Link to="/blog" className="hover:text-accent">{t.nav.blog}</Link></li>
              <li><Link to="/pricing" className="hover:text-accent">{t.nav.pricing}</Link></li>
              <li><Link to="/faq" className="hover:text-accent">{t.nav.faq}</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent">{t.nav.testimonials}</Link></li>
              <li><Link to="/careers" className="hover:text-accent">{t.nav.careers}</Link></li>
              <li><Link to="/contact" className="hover:text-accent">{t.nav.contact}</Link></li>
            </ul>
          </nav>
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              {language === "bn" ? "যোগাযোগ" : "Contact"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://wa.me/8801645441584" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-2"><MessageCircle className="h-4 w-4 text-accent" /> 01645441584</a></li>
              <li><a href="mailto:artxstudiocom@gmail.com" className="hover:text-accent flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> artxstudiocom@gmail.com</a></li>
              <li><a href="https://www.facebook.com/artxdev" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-2"><Facebook className="h-4 w-4 text-accent" /> fb.com/artxdev</a></li>
              <li className="text-dark-foreground/60 pt-1">{language === "bn" ? "রিমোট · বিশ্বব্যাপী" : "Remote · Worldwide"}</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              {language === "bn" ? "সোশ্যাল" : "Social"}
            </h3>
            <ul className="space-y-2 text-sm">
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
                    className={
                      social.live
                        ? social.label === "Facebook"
                          ? "font-semibold text-accent hover:underline bg-accent/10 px-3 py-2 rounded-lg inline-block"
                          : "font-semibold text-accent hover:underline"
                        : "hover:text-accent"
                    }
                  >
                    {social.label}
                    {!social.live && (language === "bn" ? " — শীঘ্রই আসছে" : " — coming soon")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-dark-foreground/15 pt-8 text-xs text-dark-foreground/50 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} ArtX Studio. {language === "bn" ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}</span>
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
