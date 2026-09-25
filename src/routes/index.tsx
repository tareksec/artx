import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { BrandPhilosophy } from "@/components/sections/BrandPhilosophy";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { AllSolutions } from "@/components/sections/AllSolutions";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => {
    const seoTitle = "Web Design Agency Bangladesh & Custom Development | ArtX";
    const metaDesc = "ArtX is a premier web design agency in Bangladesh crafting custom websites, SaaS interfaces & high-converting e-commerce stores. Get a free proposal today!";
    const canonicalUrl = "https://artxdev.tech/";

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: metaDesc },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: metaDesc },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seoTitle },
        { name: "twitter:description", content: metaDesc },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <BrandPhilosophy />
      <Portfolio limit={4} />
      <Services />
      <AllSolutions />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}
