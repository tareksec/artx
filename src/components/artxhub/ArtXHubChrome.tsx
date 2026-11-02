import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Facebook,
  Info,
  Mail,
  Menu,
  MessageCircle,
  Search,
  X,
  Zap,
} from "lucide-react";
import type { ArtXApp } from "@/content/artxhub-apps";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const artxHubFontLink = {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
};

export const artxHubPageClass =
  "min-h-screen bg-[#FBFBFA] text-[#1E293B] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1B4266] selection:text-white";

/* ============================================================ */
/* ARTXHUB BESPOKE HEADER NAVBAR                                */
/* ============================================================ */
export function ArtXHubHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const navLinkClass = (active: boolean) =>
    `relative py-1 transition-colors focus:outline-none ${
      active ? "text-slate-900 font-semibold" : "hover:text-slate-900"
    }`;
  const activeBar = (
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 rounded-full" />
  );
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-slate-200/50 transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        {/* Left Brand Logo */}
        <Link
          to="/artxhub"
          className="group flex items-center gap-1.5 focus:outline-none"
          aria-label="ArtXHub Home"
        >
          <span className="font-['Playfair_Display',serif] text-2xl sm:text-[26px] font-semibold tracking-tight text-slate-900 group-hover:text-[#1B4266] transition-colors">
            ArtXHub
          </span>
        </Link>

        {/* Center Navigation Links (matching design) */}
        <nav
          aria-label="ArtXHub Primary"
          className="hidden md:flex items-center gap-8 text-[14px] font-medium text-slate-600"
        >
          <Link to="/artxhub" className={navLinkClass(pathname === "/artxhub")}>
            Home
            {pathname === "/artxhub" && activeBar}
          </Link>
          <Link to="/artxhub/apps" className={navLinkClass(pathname === "/artxhub/apps")}>
            Apps
            {pathname === "/artxhub/apps" && activeBar}
          </Link>
          <Link to="/artxhub/apps" hash="categories" className={navLinkClass(false)}>
            Categories
          </Link>
          <Link to="/artxhub/about" className={navLinkClass(pathname === "/artxhub/about")}>
            About
            {pathname === "/artxhub/about" && activeBar}
          </Link>
        </nav>

        {/* Right Section: Search & Slogan */}
        <div className="flex items-center gap-5">
          <Link
            to="/artxhub/apps"
            hash="search"
            aria-label="Search apps"
            className="p-2 text-slate-700 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
          >
            <Search className="w-[18px] h-[18px]" />
          </Link>

          <div className="hidden sm:block text-right text-[11px] leading-[1.25] text-slate-500 font-normal">
            <div>Great apps.</div>
            <div>Better everyday.</div>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#FBFBFA] px-6 py-4 flex flex-col gap-3 text-sm font-medium">
          <Link
            to="/artxhub"
            onClick={closeMenu}
            className="text-left py-2 text-slate-600 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            to="/artxhub/apps"
            onClick={closeMenu}
            className="text-left py-2 text-slate-600 hover:text-slate-900"
          >
            Apps
          </Link>
          <Link
            to="/artxhub/apps"
            hash="categories"
            onClick={closeMenu}
            className="text-left py-2 text-slate-600 hover:text-slate-900"
          >
            Categories
          </Link>
          <Link
            to="/artxhub/about"
            onClick={closeMenu}
            className="text-left py-2 text-slate-600 hover:text-slate-900"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-left py-2 text-[#1B4266] text-xs font-semibold flex items-center gap-1 pt-2 border-t border-slate-200"
          >
            ← Back to ArtX Dev
          </Link>
        </div>
      )}
    </header>
  );
}

/* ============================================================ */
/* APP CARD                                                     */
/* ============================================================ */
export function ArtXHubAppCard({ app, onDetails }: { app: ArtXApp; onDetails: () => void }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 border border-slate-200/70 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-8px_rgba(27,66,102,0.1)] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* App Icon */}
        <div className="mb-5 flex items-center justify-between">
          <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-1 bg-slate-50 border border-slate-100">
            <img
              src={app.iconSrc}
              alt={`${app.name} Icon`}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          {app.isSpotlight && (
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-0.5 rounded-full">
              Spotlight
            </span>
          )}
        </div>

        {/* App Name & Category */}
        <h3 className="font-['Playfair_Display',serif] text-lg font-semibold text-slate-900 tracking-tight">
          {app.name}
        </h3>
        <div className="text-[11px] font-medium text-slate-500 mt-0.5">{app.tagline}</div>

        {/* Description */}
        <p className="mt-3 text-[12px] text-slate-600 leading-relaxed font-normal line-clamp-3">
          {app.description}
        </p>
      </div>

      {/* Bottom Action: Download / Details */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
        <a
          href={app.downloadUrl}
          className="w-full inline-flex items-center justify-between rounded-lg bg-[#FAF9F6] border border-slate-200/80 px-3.5 py-2.5 text-[11px] font-medium text-slate-800 hover:bg-slate-100 hover:border-slate-300 transition-colors group/btn"
        >
          <span className="flex items-center gap-2">
            <Download className="w-3.5 h-3.5 text-[#1B4266]" />
            <span className="font-semibold text-slate-900">Download APK</span>
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-0.5 group-hover/btn:text-slate-700 transition-all" />
        </a>

        <button
          type="button"
          onClick={onDetails}
          className="w-full text-center text-[10px] font-medium text-slate-500 hover:text-[#1B4266] transition-colors py-0.5"
        >
          View details →
        </button>
      </div>
    </article>
  );
}

/* ============================================================ */
/* INTERACTIVE DOWNLOAD MODAL                                   */
/* ============================================================ */
export function ArtXHubDownloadDialog({
  app,
  onClose,
}: {
  app: ArtXApp | null;
  onClose: () => void;
}) {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Dialog open={!!app} onOpenChange={(open) => !open && onClose()}>
      {app && (
        <DialogContent className="sm:max-w-lg bg-white border border-slate-200 text-slate-900 p-6 rounded-2xl">
          <DialogHeader className="text-left">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-1 shrink-0">
                <img
                  src={app.iconSrc}
                  alt={app.name}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div>
                <DialogTitle className="font-['Playfair_Display',serif] text-2xl font-bold text-slate-900">
                  {app.name}
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-500 font-medium mt-0.5">
                  {app.nameBn ? `${app.nameBn} · ` : ""}
                  {app.category} · {app.version}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-4 flex flex-col gap-4">
            <p className="text-[12px] text-slate-600 leading-relaxed">{app.fullDescription}</p>

            {/* Specs Badge Grid */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px]">
              <div>
                <span className="text-slate-400 block text-[10px]">File Size</span>
                <span className="font-semibold text-slate-800">{app.fileSize}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Version</span>
                <span className="font-semibold text-slate-800">{app.version}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Platform</span>
                <span className="font-semibold text-slate-800">{app.platform}</span>
              </div>
            </div>

            {/* Direct Download */}
            <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-950 mb-3">
                <Zap className="w-3.5 h-3.5 text-sky-600" />
                <span>Direct APK Download</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={app.downloadUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B4266] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#13324E] transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(app.downloadUrl)}
                  className="p-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                  title="Copy Download Link"
                  aria-label="Copy Download Link"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Official website if available */}
            {app.websiteUrl && (
              <a
                href={app.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            {/* Android APK Installation Quick Tips */}
            <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-3">
              <div className="font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Info className="w-3 h-3 text-slate-400" />
                <span>How to install APK:</span>
              </div>
              <ol className="list-decimal list-inside space-y-0.5 text-slate-500">
                <li>Download the .apk file to your Android phone</li>
                <li>Tap the downloaded file in your notification bar or Downloads</li>
                <li>When prompted, allow "Install Unknown Apps" for your browser</li>
                <li>Tap "Install" and enjoy!</li>
              </ol>
              {app.notice && <p className="mt-2 text-slate-500">{app.notice}</p>}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

/* ============================================================ */
/* FOOTER                                                       */
/* ============================================================ */
export function ArtXHubFooter() {
  const headingClass = "mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500";
  const linkClass = "text-slate-600 hover:text-slate-900 transition-colors";

  return (
    <footer className="border-t border-slate-200 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Tagline */}
        <div>
          <Link
            to="/artxhub"
            className="font-['Playfair_Display',serif] text-xl font-semibold text-slate-900"
          >
            ArtXHub
          </Link>
          <p className="mt-3 text-xs text-slate-500 leading-relaxed max-w-xs">
            Discover · Download · Enjoy. The home for every app built by ArtX Dev.
          </p>
        </div>

        <nav aria-label="ArtXHub Footer">
          <h3 className={headingClass}>ArtXHub</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/artxhub" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/artxhub/apps" className={linkClass}>
                Apps
              </Link>
            </li>
            <li>
              <Link to="/artxhub/apps" hash="categories" className={linkClass}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/artxhub/about" className={linkClass}>
                About
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="ArtX Dev">
          <h3 className={headingClass}>ArtX Dev</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className={linkClass}>
                Website
              </Link>
            </li>
            <li>
              <Link to="/services" className={linkClass}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className={headingClass}>Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://wa.me/8801645441584"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} flex items-center gap-2`}
              >
                <MessageCircle className="w-4 h-4 shrink-0 text-[#1B4266]" /> +8801645441584
              </a>
            </li>
            <li>
              <a
                href="mailto:artxstudiocom@gmail.com"
                className={`${linkClass} flex items-center gap-2 break-all`}
              >
                <Mail className="w-4 h-4 shrink-0 text-[#1B4266]" /> artxstudiocom@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/artxdev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} flex items-center gap-2`}
              >
                <Facebook className="w-4 h-4 shrink-0 text-[#1B4266]" /> fb.com/artxdev
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            A creation by{" "}
            <Link
              to="/"
              className="text-slate-800 hover:text-[#1B4266] font-semibold underline underline-offset-4"
            >
              ArtX Dev
            </Link>{" "}
            © {new Date().getFullYear()}
          </div>
          <div>
            A{" "}
            <a
              href="https://techvrs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-[#1B4266] font-semibold underline underline-offset-4"
            >
              TechVRS
            </a>{" "}
            company
          </div>
        </div>
      </div>
    </footer>
  );
}
