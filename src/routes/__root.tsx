import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Nav } from "@/components/sections/Nav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SupporterChat } from "@/components/SupporterChat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold tracking-tight text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ArtX Dev — Web Design & Development Agency Bangladesh | artxdev.tech" },
      { name: "description", content: "ArtX Dev (artxdev.tech) is a full-service web design and development studio in Bangladesh crafting high-speed custom websites, SaaS interfaces, e-commerce stores & technical SEO." },
      { name: "keywords", content: "artx dev, artx dev bangladesh, artx dev web design, artx dev studio, artx dev agency, artx dev dhaka, artx dev tech, artxdev.tech, web design agency bangladesh" },
      { name: "author", content: "ArtX Dev" },
      { property: "og:site_name", content: "ArtX Dev" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "ArtX Dev — Web Design & Development Agency Bangladesh | artxdev.tech" },
      { property: "og:description", content: "ArtX Dev is a full-service digital product studio designing, building, and ranking standout websites for B2B, SaaS, and e-commerce brands." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ArtX Dev — Web Design & Development Agency Bangladesh | artxdev.tech" },
      { name: "twitter:description", content: "ArtX Dev is a full-service digital product studio designing, building, and ranking standout websites for B2B, SaaS, and e-commerce brands." },
      { name: "theme-color", content: "#FAF9F6" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/85ca78c5-4ef2-4c68-ba7b-59d7f3a2320c" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/85ca78c5-4ef2-4c68-ba7b-59d7f3a2320c" },
      { name: "p:domain_verify", content: "813fab2cbf978a29a36aa845982dc00c" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@100..900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "ProfessionalService"],
              "@id": "https://artxdev.tech/#organization",
              name: "ArtX Dev",
              alternateName: [
                "artx dev",
                "ArtX Dev",
                "ArtXdev",
                "ArtX",
                "ArtX Dev Studio",
                "ArtX Dev Bangladesh",
                "ArtX Studio"
              ],
              url: "https://artxdev.tech",
              logo: {
                "@type": "ImageObject",
                url: "https://artxdev.tech/favicon.ico",
                width: 512,
                height: 512,
              },
              brand: {
                "@type": "Brand",
                name: "ArtX Dev",
                alternateName: "artx dev",
                url: "https://artxdev.tech",
              },
              description:
                "ArtX Dev (artxdev.tech) is a full-service web design and development studio founded in 2016 in Bangladesh, offering custom website design, React & WordPress software engineering, SEO, and cybersecurity services to SaaS, e-commerce, and B2B brands worldwide.",
              email: "artxstudiocom@gmail.com",
              telephone: "+8801645441584",
              foundingDate: "2016",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 15 },
              knowsAbout: [
                "artx dev",
                "ArtX Dev",
                "Web Design",
                "Web Development",
                "E-Commerce Development",
                "WordPress Development",
                "SaaS Website Design",
                "React Development",
                "Next.js Development",
                "Search Engine Optimization",
                "Technical SEO",
                "Local SEO Bangladesh",
                "Generative Engine Optimization",
                "Answer Engine Optimization",
                "Core Web Vitals",
                "UI/UX Design",
                "Figma Design Systems",
                "Website Security",
                "Penetration Testing",
                "bKash Payment Integration",
                "Nagad Payment Integration",
                "SSLCommerz Integration",
                "TanStack Start",
              ],
              sameAs: [
                "https://www.facebook.com/artxdev/",
                "https://twitter.com/artxstudio",
                "https://github.com/artxstudio",
                "https://linkedin.com/company/artxstudio",
                "https://wa.me/8801645441584",
                "https://www.pinterest.com/artxdev/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+8801645441584",
                  contactType: "customer service",
                  areaServed: ["BD", "US", "GB", "CA", "AU", "AE"],
                  availableLanguage: ["English", "Bengali"],
                },
                {
                  "@type": "ContactPoint",
                  email: "artxstudiocom@gmail.com",
                  contactType: "sales",
                  areaServed: "Worldwide",
                  availableLanguage: ["English", "Bengali"],
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "ArtX Dev Digital Services",
                itemListElement: [
                  { "@type": "OfferCatalog", name: "E-Commerce Website Design", url: "https://artxdev.tech/services/ecommerce-website-design" },
                  { "@type": "OfferCatalog", name: "WordPress Development", url: "https://artxdev.tech/services/wordpress-development" },
                  { "@type": "OfferCatalog", name: "SaaS Website Design", url: "https://artxdev.tech/services/saas-website-design" },
                  { "@type": "OfferCatalog", name: "SEO Services Bangladesh", url: "https://artxdev.tech/services/seo-services" },
                  { "@type": "OfferCatalog", name: "Web Security", url: "https://artxdev.tech/services/web-security" },
                  { "@type": "OfferCatalog", name: "Landing Page Design", url: "https://artxdev.tech/services/landing-page-design" },
                  { "@type": "OfferCatalog", name: "Website Redesign", url: "https://artxdev.tech/services/website-redesign" },
                  { "@type": "OfferCatalog", name: "Website Maintenance", url: "https://artxdev.tech/services/website-maintenance" },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": "https://artxdev.tech/#localbusiness",
              name: "ArtX Dev",
              alternateName: ["artx dev", "ArtXdev", "ArtX Dev Studio", "ArtX"],
              url: "https://artxdev.tech",
              email: "artxstudiocom@gmail.com",
              telephone: "+8801645441584",
              priceRange: "৳৳৳",
              currenciesAccepted: "BDT, USD",
              paymentAccepted: "Cash, Credit Card, bKash, Nagad, Bank Transfer",
              image: "https://artxdev.tech/favicon.ico",
              areaServed: [
                { "@type": "City", name: "Dhaka" },
                { "@type": "City", name: "Chittagong" },
                { "@type": "City", name: "Sylhet" },
                { "@type": "City", name: "Rajshahi" },
                { "@type": "City", name: "Khulna" },
                { "@type": "Country", name: "Bangladesh" },
                { "@type": "AdministrativeArea", name: "Worldwide" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressRegion: "Dhaka Division",
                postalCode: "1205",
                addressCountry: "BD",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.8103,
                longitude: 90.4125,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
                opens: "10:00",
                closes: "20:00",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://artxdev.tech/#website",
              url: "https://artxdev.tech",
              name: "ArtX Dev",
              alternateName: ["artx dev", "ArtXdev", "ArtX"],
              publisher: { "@id": "https://artxdev.tech/#organization" },
              inLanguage: ["en", "bn"],
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://artxdev.tech/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SmoothScrollProvider>
          <ScrollProgress />
          <Nav />
          <main suppressHydrationWarning>
            <Outlet />
          </main>
          <SupporterChat />
        </SmoothScrollProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
