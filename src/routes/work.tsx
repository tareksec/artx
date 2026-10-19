import { createFileRoute } from "@tanstack/react-router";
import { WorkShowcaseSection } from "@/components/sections/WorkShowcaseSection";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Works & Case Studies | ArtX Studio" },
      {
        name: "description",
        content:
          "Explore selected web design, SaaS interfaces, and custom development case studies from ArtX Studio.",
      },
      { property: "og:title", content: "Works & Case Studies | ArtX Studio" },
      {
        property: "og:description",
        content:
          "Explore selected web design, SaaS interfaces, and custom development case studies from ArtX Studio.",
      },
      { property: "og:url", content: "https://artxdev.tech/work" },
    ],
    links: [{ rel: "canonical", href: "https://artxdev.tech/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="pt-16 sm:pt-20 bg-[#f4f4f2] dark:bg-[#0e0f11]">
      <WorkShowcaseSection />
      <Footer />
    </div>
  );
}
