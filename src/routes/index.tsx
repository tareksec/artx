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
  head: () => ({
    links: [{ rel: "canonical", href: "https://artxx.lovable.app/" }],
  }),
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

