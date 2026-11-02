import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Search } from "lucide-react";
import { artxHubApps, artxHubCategories, type ArtXApp } from "@/content/artxhub-apps";
import {
  artxHubFontLink,
  artxHubPageClass,
  ArtXHubAppCard,
  ArtXHubDownloadDialog,
  ArtXHubFooter,
  ArtXHubHeader,
} from "@/components/artxhub/ArtXHubChrome";

export const Route = createFileRoute("/artxhub_/apps")({
  head: () => {
    const seoTitle = "All Apps — ArtXHub by ArtX Dev";
    const metaDesc =
      "Browse and download every app built by ArtX Dev, including the Biniyog Briddhi Android app.";
    const canonicalUrl = "https://artxdev.tech/artxhub/apps";

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: metaDesc },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: metaDesc },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: "https://biniyogbriddhi.com/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }, artxHubFontLink],
    };
  },
  component: ArtXHubAppsPage,
});

function ArtXHubAppsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [activeModalApp, setActiveModalApp] = React.useState<ArtXApp | null>(null);

  // Filter apps based on category and search query
  const filteredApps = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return artxHubApps.filter((app) => {
      const matchesCategory = selectedCategory === "all" || app.category === selectedCategory;
      const matchesSearch =
        query === "" ||
        app.name.toLowerCase().includes(query) ||
        app.nameBn?.includes(query) ||
        app.tagline.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const tabs = [
    { id: "all", label: "All Apps" },
    ...artxHubCategories.map((category) => ({ id: category, label: category })),
  ];

  return (
    <div className={artxHubPageClass}>
      <ArtXHubHeader />

      <section className="pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
              DISCOVER
            </span>
          </div>
          <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl text-slate-900 tracking-[-0.02em]">
            All Apps
          </h1>
          <p className="mt-3 text-slate-600 text-sm max-w-md">
            Every app built by ArtX Dev, in one place.
          </p>

          {/* Search */}
          <div
            id="search"
            className="mt-8 flex items-center gap-3 rounded-xl bg-white border border-slate-200/80 px-4 py-2.5 max-w-xl"
          >
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search apps..."
              aria-label="Search apps"
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none py-1"
            />
          </div>

          {/* Interactive Category Filter Pills */}
          <div
            id="categories"
            className="flex items-center gap-2 overflow-x-auto mt-6 pb-4 mb-8 scrollbar-none"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === tab.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* App Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <ArtXHubAppCard key={app.id} app={app} onDetails={() => setActiveModalApp(app)} />
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">No apps found matching your search.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs text-[#1B4266] font-semibold underline underline-offset-4"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      <ArtXHubFooter />
      <ArtXHubDownloadDialog app={activeModalApp} onClose={() => setActiveModalApp(null)} />
    </div>
  );
}
