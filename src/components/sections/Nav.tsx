"use client";

import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Sparkles,
  Tag,
  BookOpen,
  Menu,
  X,
  ChevronDown,
  Zap,
  Compass,
  MessageSquare,
  HelpCircle,
  Users,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GlassDock, type DockItem } from "@/components/ui/glass-dock";
import { cn } from "@/lib/utils";

export function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = React.useState(false);
  const moreDropdownRef = React.useRef<HTMLDivElement>(null);
  const dropdownTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Get current active route from TanStack Router
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  // Close menus on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setMoreDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(e.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Hover helpers with small delay to prevent accidental closing
  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setMoreDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 150);
  };

  // Primary compact links for desktop
  const primaryLinks = [
    { to: "/work", label: t.nav.work },
    { to: "/services", label: t.nav.services },
    { to: "/pricing", label: t.nav.pricing },
    { to: "/about", label: t.nav.about },
    { to: "/blog", label: t.nav.blog },
  ];

  // Secondary organized items inside the "More" dropdown
  const moreLinks = [
    {
      to: "/why-us",
      label: t.nav.whyUs,
      description: language === "bn" ? "GEO ও অপ্টিমাইজেশন সুবিধা" : "GEO, AI search & speed advantage",
      icon: Zap,
      highlight: true,
    },
    {
      to: "/concepts",
      label: t.nav.concepts,
      description: language === "bn" ? "এক্সপেরিমেন্টাল ডিজাইন ল্যাব" : "Experimental design prototypes",
      icon: Compass,
      badge: language === "bn" ? "ল্যাব" : "Lab",
    },
    {
      to: "/testimonials",
      label: t.nav.testimonials,
      description: language === "bn" ? "ক্লায়েন্ট রিভিউ ও ফলাফল" : "Client reviews & case outcomes",
      icon: MessageSquare,
    },
    {
      to: "/faq",
      label: t.nav.faq,
      description: language === "bn" ? "বাজেট, সময়সীমা ও প্রসেস" : "Pricing, timeline & process",
      icon: HelpCircle,
    },
    {
      to: "/careers",
      label: t.nav.careers,
      description: language === "bn" ? "আমাদের টিমে যোগ দিন" : "Join our creative remote team",
      icon: Users,
    },
  ];

  const isMoreActive = moreLinks.some((l) => pathname.startsWith(l.to));

  // Mobile bottom Glass Dock items
  const mobileDockItems: DockItem[] = [
    {
      title: t.nav.home,
      icon: Home,
      href: "/",
      isActive: pathname === "/" || pathname === "",
      onClick: () => {
        setMobileMenuOpen(false);
        if (pathname === "/" || pathname === "") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    },
    {
      title: t.nav.work,
      icon: Briefcase,
      href: "/work",
      isActive: pathname.startsWith("/work"),
      onClick: () => setMobileMenuOpen(false),
    },
    {
      title: t.nav.services,
      icon: Sparkles,
      href: "/services",
      isActive: pathname.startsWith("/services"),
      onClick: () => setMobileMenuOpen(false),
    },
    {
      title: t.nav.pricing,
      icon: Tag,
      href: "/pricing",
      isActive: pathname.startsWith("/pricing"),
      onClick: () => setMobileMenuOpen(false),
    },
    {
      title: t.nav.blog,
      icon: BookOpen,
      href: "/blog",
      isActive: pathname.startsWith("/blog"),
      onClick: () => setMobileMenuOpen(false),
    },
    {
      title: t.nav.more,
      icon: Menu,
      isActive: mobileMenuOpen || isMoreActive,
      onClick: () => setMobileMenuOpen((prev) => !prev),
    },
  ];

  return (
    <>
      {/* ============================================================ */}
      {/* 1. DESKTOP NAVIGATION BAR (Compact & Organized)             */}
      {/* ============================================================ */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="fixed inset-x-0 top-4 z-50 hidden md:flex flex-col items-center px-4 pointer-events-none"
      >
        <nav
          aria-label="Desktop Navigation"
          className="pointer-events-auto flex items-center gap-1 rounded-full border border-border/70 bg-background/85 px-3 py-1.5 shadow-[0_8px_30px_-10px_rgba(26,26,26,0.12)] backdrop-blur-2xl transition-all"
        >
          {/* Studio Brand Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (pathname === "/" || pathname === "") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="px-3 py-1 text-sm font-bold tracking-tight hover:opacity-85 transition-opacity"
            aria-label="ArtX Home"
          >
            Art<span className="text-accent">X</span>
          </Link>

          <span className="mx-1 h-4 w-px bg-border/80" />

          {/* Core Primary Navigation Links */}
          <ul className="flex items-center gap-0.5">
            {primaryLinks.map((link) => {
              const isActive = pathname.startsWith(link.to);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150",
                      isActive
                        ? "bg-foreground/10 text-foreground font-semibold"
                        : "text-foreground/75 hover:bg-secondary/70 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* "More" Organized Dropdown */}
            <li
              ref={moreDropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150",
                  moreDropdownOpen || isMoreActive
                    ? "bg-foreground/10 text-foreground font-semibold"
                    : "text-foreground/75 hover:bg-secondary/70 hover:text-foreground"
                )}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t.nav.more}</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    moreDropdownOpen ? "rotate-180 text-foreground" : "text-muted-foreground"
                  )}
                />
              </button>

              {/* Animated Dropdown Menu Panel */}
              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 rounded-2xl border border-border/80 bg-background/95 p-2 shadow-2xl backdrop-blur-2xl z-50"
                  >
                    <div className="flex flex-col gap-1">
                      {moreLinks.map((item) => {
                        const Icon = item.icon;
                        const isItemActive = pathname.startsWith(item.to);
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setMoreDropdownOpen(false)}
                            className={cn(
                              "group flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-colors",
                              isItemActive
                                ? "bg-accent/10 text-accent font-semibold"
                                : "text-foreground/80 hover:bg-secondary/80 hover:text-foreground"
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={cn(
                                  "flex h-7 w-7 items-center justify-center rounded-lg transition-colors",
                                  isItemActive
                                    ? "bg-accent/20 text-accent"
                                    : "bg-secondary text-foreground/70 group-hover:bg-foreground/10 group-hover:text-foreground"
                                )}
                              >
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-semibold leading-tight">{item.label}</span>
                                <span className="text-[10px] text-muted-foreground leading-tight">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                            {item.badge && (
                              <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold text-accent">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <span className="mx-1 h-4 w-px bg-border/80" />

          {/* Actions: "Let's talk" CTA & Language switcher */}
          <div className="flex items-center gap-1.5">
            <Link
              to="/contact"
              className="rounded-full bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background transition-all hover:bg-accent hover:text-accent-foreground shadow-sm"
            >
              {t.nav.letsTalk}
            </Link>

            <div className="flex items-center rounded-full border border-border/60 bg-secondary/70 p-0.5">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "rounded-full px-2 py-1 text-[11px] font-bold transition-all duration-150",
                  language === "en"
                    ? "bg-foreground text-background shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("bn")}
                className={cn(
                  "rounded-full px-2 py-1 text-[11px] font-bold transition-all duration-150",
                  language === "bn"
                    ? "bg-foreground text-background shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Switch to Bangla"
              >
                বাংলা
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ============================================================ */}
      {/* 2. MOBILE TOP MINIMAL HEADER (Brand + Language + CTA)        */}
      {/* ============================================================ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-x-0 top-3 z-40 flex justify-center px-4 md:hidden pointer-events-none"
      >
        <div className="pointer-events-auto flex w-full max-w-sm items-center justify-between gap-2 rounded-full border border-border/70 bg-background/85 px-3 py-1.5 shadow-md backdrop-blur-2xl">
          <Link
            to="/"
            onClick={(e) => {
              if (pathname === "/" || pathname === "") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="px-2 py-1 text-sm font-bold tracking-tight"
            aria-label="ArtX Home"
          >
            Art<span className="text-accent">X</span>
          </Link>

          <div className="flex items-center gap-1.5">
            {/* Mobile Language Switcher */}
            <div className="flex items-center rounded-full border border-border/60 bg-secondary/80 p-0.5">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors",
                  language === "en"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground"
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("bn")}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors",
                  language === "bn"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground"
                )}
              >
                বাংলা
              </button>
            </div>

            {/* Quick Let's Talk CTA */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t.nav.letsTalk}
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 3. MOBILE BOTTOM GLASS DOCK (VengeanceUI Glass Dock)         */}
      {/* ============================================================ */}
      <div className="fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none md:hidden">
        <GlassDock
          items={mobileDockItems}
          dockClassName="shadow-[0_12px_36px_-6px_rgba(0,0,0,0.22)]"
        />
      </div>

      {/* ============================================================ */}
      {/* 4. MOBILE SLIDE-UP FULL MENU DRAWER                         */}
      {/* ============================================================ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-up Menu Drawer Sheet */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-border/80 bg-background/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              {/* Drawer Top Handle & Close */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold tracking-tight">
                    Art<span className="text-accent">X</span>
                  </span>
                  <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold text-accent">
                    Studio Menu
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Prominent Let's Talk CTA in Drawer */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mb-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground py-3.5 text-center text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground shadow-md"
              >
                <span>{t.nav.letsTalk}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* Grid of Studio Links */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  { to: "/work", label: t.nav.work, icon: Briefcase },
                  { to: "/services", label: t.nav.services, icon: Sparkles },
                  { to: "/pricing", label: t.nav.pricing, icon: Tag },
                  { to: "/blog", label: t.nav.blog, icon: BookOpen },
                  { to: "/about", label: t.nav.about, icon: Users },
                  { to: "/why-us", label: t.nav.whyUs, icon: Zap, highlight: true },
                  { to: "/concepts", label: t.nav.concepts, icon: Compass },
                  { to: "/testimonials", label: t.nav.testimonials, icon: MessageSquare },
                  { to: "/faq", label: t.nav.faq, icon: HelpCircle },
                  { to: "/careers", label: t.nav.careers, icon: Users },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-xl p-3 text-xs font-medium transition-colors",
                        isActive
                          ? "bg-accent/15 text-accent font-semibold border border-accent/20"
                          : item.highlight
                          ? "bg-secondary text-foreground font-semibold"
                          : "bg-secondary/60 text-foreground/80 hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <Icon className={cn("h-4 w-4", isActive ? "text-accent" : "text-muted-foreground")} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Fast Direct Contact Card */}
              <div className="rounded-2xl border border-border/60 bg-secondary/50 p-4 text-xs">
                <p className="font-semibold text-foreground mb-2">
                  {language === "bn" ? "সরাসরি যোগাযোগ করুন:" : "Direct Studio Contact:"}
                </p>
                <div className="flex flex-col gap-2 text-muted-foreground">
                  <a
                    href="mailto:artxstudiocom@gmail.com"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    <span>artxstudiocom@gmail.com</span>
                  </a>
                  <a
                    href="tel:+8801645441584"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    <span>+880 1645-441584 (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
