import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Download, ExternalLink, Info, Mail } from "lucide-react";
import { artxHubApps } from "@/content/artxhub-apps";
import {
  artxHubFontLink,
  artxHubPageClass,
  ArtXHubFooter,
  ArtXHubHeader,
} from "@/components/artxhub/ArtXHubChrome";

const installSteps = [
  `Tap "Download APK" and wait for the file to finish downloading.`,
  "Open the downloaded file from your notification bar or Downloads folder.",
  `If Android asks, allow "Install unknown apps" for your browser.`,
  `Tap "Install", then open the app.`,
];

export const Route = createFileRoute("/artxhub_/apps_/$slug")({
  loader: ({ params }) => {
    const app = artxHubApps.find((a) => a.id === params.slug);
    if (!app) throw notFound();
    return { app };
  },
  head: ({ params }) => {
    const app = artxHubApps.find((a) => a.id === params.slug);
    if (!app) return {};

    const seoTitle = `${app.name} App Download for ${app.platform} — ArtXHub`;
    const metaDesc = `Download ${app.name}${app.nameBn ? ` (${app.nameBn})` : ""} for ${app.platform}. ${app.description}`;
    const canonicalUrl = `https://artxdev.tech/artxhub/apps/${app.id}`;
    const ogImageUrl = "https://biniyogbriddhi.com/og-image.jpg";

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: metaDesc },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: metaDesc },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: ogImageUrl },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }, artxHubFontLink],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "@id": `${canonicalUrl}#app`,
            name: app.name,
            alternateName: app.nameBn,
            url: canonicalUrl,
            operatingSystem: app.platform,
            applicationCategory: `${app.category}Application`,
            softwareVersion: app.version.replace("v", ""),
            fileSize: app.fileSize.replace(" ", ""),
            description: app.fullDescription,
            image: app.iconSrc,
            downloadUrl: app.downloadUrl,
            offers: { "@type": "Offer", price: "0", priceCurrency: "BDT" },
            author: { "@type": "Organization", name: app.developer },
          }),
        },
      ],
    };
  },
  component: ArtXHubAppDetailsPage,
});

function ArtXHubAppDetailsPage() {
  const { app } = Route.useLoaderData();

  const stats = [
    { value: app.version, label: "Version" },
    { value: app.fileSize, label: "Size" },
    { value: app.platform, label: "Platform" },
    { value: "Free", label: "Price" },
  ];

  const appInfo = [
    { label: "Version", value: app.version },
    { label: "Size", value: app.fileSize },
    { label: "Platform", value: app.platform },
    { label: "Category", value: app.category },
    { label: "Developer", value: app.developer },
    ...(app.requires ? [{ label: "Requires", value: app.requires }] : []),
  ];

  return (
    <div className={artxHubPageClass}>
      <ArtXHubHeader />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-6 pb-16">
        <Link
          to="/artxhub/apps"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Apps</span>
        </Link>

        {/* App Header */}
        <section className="mt-6">
          <div className="flex items-start gap-5">
            <img
              src={app.iconSrc}
              alt={`${app.name} icon`}
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-[22%] object-cover border border-slate-200/80 shadow-sm shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                {app.name}
              </h1>
              {app.nameBn && <div className="mt-1 text-sm text-slate-600">{app.nameBn}</div>}
              <div className="mt-1 text-sm font-semibold text-[#01875F]">{app.developer}</div>
              <div className="mt-0.5 text-xs text-slate-500">{app.category}</div>
            </div>
          </div>

          {/* Stats Row */}
          <dl className="mt-6 grid grid-cols-4 divide-x divide-slate-200">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 text-center first:pl-0 last:pr-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <div className="text-sm font-semibold text-slate-900">{stat.value}</div>
                  <div className="mt-0.5 text-[11px] text-slate-500">{stat.label}</div>
                </dd>
              </div>
            ))}
          </dl>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={app.downloadUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#01875F] px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#016B4B] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </a>
            {app.websiteUrl && (
              <a
                href={app.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-[#01875F] hover:bg-slate-50 transition-colors"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </section>

        {/* Screenshots */}
        {app.screenshots.length > 0 && (
          <section aria-label="Screenshots" className="mt-10">
            <div className="flex gap-3 overflow-x-auto pb-3 -mx-6 px-6 sm:mx-0 sm:px-0">
              {app.screenshots.map((shot) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-52 sm:h-64 w-auto max-w-none rounded-xl border border-slate-200/80 shrink-0"
                />
              ))}
            </div>
          </section>
        )}

        {/* About this app */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">About this app</h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">{app.fullDescription}</p>
          <ul className="mt-4 space-y-3">
            {app.features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#01875F]" />
                <div className="text-sm">
                  <span className="font-semibold text-slate-900">{feature.title}.</span>{" "}
                  <span className="text-slate-600">{feature.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <span className="inline-block rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600">
              {app.category}
            </span>
          </div>
        </section>

        {/* How to install */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">How to install</h2>
          <ol className="mt-3 space-y-2 text-sm text-slate-600 list-decimal list-inside">
            {(app.installSteps ?? installSteps).map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          {app.notice && (
            <p className="mt-4 flex items-start gap-2 text-xs text-slate-500">
              <Info className="w-3.5 h-3.5 mt-px shrink-0 text-slate-400" />
              <span>{app.notice}</span>
            </p>
          )}
        </section>

        {/* App info */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">App info</h2>
          <dl className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            {appInfo.map((item) => (
              <div key={item.label}>
                <dt className="text-xs text-slate-500">{item.label}</dt>
                <dd className="mt-0.5 font-medium text-slate-900">{item.value}</dd>
              </div>
            ))}
          </dl>
          {app.supportEmail && (
            <a
              href={`mailto:${app.supportEmail}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#01875F] hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>{app.supportEmail}</span>
            </a>
          )}
        </section>
      </div>

      <ArtXHubFooter />
    </div>
  );
}
