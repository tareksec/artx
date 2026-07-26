"use client";

import * as React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { to: "/work", label: t.nav.work },
    { to: "/services", label: t.nav.services },
    { to: "/about", label: t.nav.about },
    { to: "/blog", label: t.nav.blog },
    { to: "/pricing", label: t.nav.pricing },
    { to: "/faq", label: t.nav.faq },
    { to: "/testimonials", label: t.nav.testimonials },
    { to: "/careers", label: t.nav.careers },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4"
    >
      <nav className="flex w-full max-w-fit items-center justify-between gap-1 rounded-full border border-border/60 bg-background/80 px-2 py-2 shadow-[0_8px_30px_-12px_rgba(26,26,26,0.15)] backdrop-blur-xl">
        <Link
          to="/"
          onClick={(e) => {
            setMobileMenuOpen(false);
            if (window.location.pathname === "/" || window.location.pathname === "") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="px-4 py-1.5 text-sm font-bold tracking-tight cursor-pointer"
          aria-label="ArtX home"
        >
          Art<span className="text-accent">X</span>
        </Link>
        <span className="mx-1 hidden h-5 w-px bg-border md:block" />
        <ul className="hidden items-center md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-full px-3.5 py-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-1 flex items-center gap-1.5">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {t.nav.letsTalk}
          </Link>

          <div className="flex items-center rounded-full border border-border bg-secondary/80 p-0.5">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200 ${
                language === "en"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("bn")}
              className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200 ${
                language === "bn"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Switch to Bangla"
            >
              বাংলা
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-secondary/80 text-foreground md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mt-2 w-full max-w-xs rounded-3xl border border-border/80 bg-background/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                    activeProps={{ className: "bg-secondary text-foreground font-bold" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
