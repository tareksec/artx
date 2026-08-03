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
import { PromoPopup } from "@/components/PromoPopup";
import { Nav } from "@/components/sections/Nav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

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
      { title: "ArtX — Custom website development services & Creative web design studio" },
      { name: "description", content: "ArtX is a full-service digital product studio designing, building, and ranking standout websites for B2B, SaaS, and e-commerce brands that refuse to blend in." },
      { name: "author", content: "ArtX Studio" },
      { property: "og:site_name", content: "ArtX" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "ArtX — Custom website development services & Creative web design studio" },
      { property: "og:description", content: "ArtX is a full-service digital product studio designing, building, and ranking standout websites for B2B, SaaS, and e-commerce brands." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ArtX — Custom website development services & Creative web design studio" },
      { name: "twitter:description", content: "ArtX is a full-service digital product studio designing, building, and ranking standout websites for B2B, SaaS, and e-commerce brands." },
      { name: "theme-color", content: "#FAF9F6" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/85ca78c5-4ef2-4c68-ba7b-59d7f3a2320c" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/85ca78c5-4ef2-4c68-ba7b-59d7f3a2320c" },
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
              "@type": "Organization",
              "@id": "https://artxx.lovable.app/#organization",
              name: "ArtX Studio",
              alternateName: "ArtXdev",
              url: "https://artxx.lovable.app",
              logo: "https://artxx.lovable.app/og-image.png",
              description:
                "ArtX is an independent creative studio founded in 2016, based in Bangladesh, offering website design, development, SEO, and security services to SaaS, e-commerce, and hospitality brands worldwide.",
              email: "artxstudiocom@gmail.com",
              telephone: "+8801645441584",
              foundingDate: "2016",
              sameAs: [
                "https://twitter.com/artxstudio",
                "https://github.com/artxstudio",
                "https://linkedin.com/company/artxstudio",
                "https://wa.me/8801645441584",
              ],
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://artxx.lovable.app/#localbusiness",
              name: "ArtX Studio",
              url: "https://artxx.lovable.app",
              email: "artxstudiocom@gmail.com",
              telephone: "+8801645441584",
              priceRange: "৳৳৳",
              image: "https://artxx.lovable.app/og-image.png",
              areaServed: ["Bangladesh", "Worldwide", "Remote"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Bangladesh",
                addressRegion: "Dhaka",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://artxx.lovable.app/#website",
              url: "https://artxx.lovable.app",
              name: "ArtX",
              publisher: { "@id": "https://artxx.lovable.app/#organization" },
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
          <PromoPopup />
        </SmoothScrollProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
