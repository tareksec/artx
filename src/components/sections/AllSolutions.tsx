import { Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingCart, PenTool, Store, User, Newspaper, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RotatingAsterisk } from "@/components/animations/RotatingAsterisk";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { conceptWork } from "@/content/site";

const IconMap: Record<string, React.FC<any>> = {
  ShoppingCart,
  PenTool,
  Store,
  User,
  Newspaper,
  Building2,
};

export function AllSolutions() {
  const { t } = useLanguage();
  const content = t.allSolutions;

  if (!content) return null; // Safety check in case translations aren't loaded

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl leading-tight font-bold md:text-6xl">
              {content.heading}
            </h2>
            <p className="mt-6 text-balance text-lg text-muted-foreground md:text-xl">
              {content.subheading}
            </p>
            <p className="mt-4 text-balance text-lg font-medium text-foreground">
              {content.body}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {content.categoriesLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {content.categories.map((category: { icon: string; label: string }, idx: number) => {
                const IconComponent = IconMap[category.icon];
                
                // Map localized label to conceptWork category
                const mapToConceptCategory = (label: string) => {
                  if (label.includes("E-commerce") || label.includes("Shop") || label.includes("ই-কমার্স") || label.includes("শপ")) return "E-commerce";
                  if (label.includes("Blogging") || label.includes("News") || label.includes("ব্লগিং") || label.includes("নিউজ")) return "Blog & News";
                  if (label.includes("Personal") || label.includes("পার্সোনাল")) return "Brand";
                  if (label.includes("Organization") || label.includes("অর্গানাইজেশন")) return "Agency";
                  return "Web";
                };
                
                const conceptCat = mapToConceptCategory(category.label);
                const match = conceptWork.find(c => c.category === conceptCat);
                const thumbnail = match ? match.images[0] : null;

                return (
                  <Link
                    key={idx}
                    to="/concepts"
                    search={{ category: conceptCat }}
                    className="flex items-center gap-3 rounded-full border border-border bg-secondary/40 p-2 pr-6 transition-colors duration-300 hover:border-accent hover:text-accent group overflow-hidden relative"
                  >
                    {thumbnail && (
                      <div className="relative h-12 w-20 overflow-hidden rounded-full shrink-0">
                        <img 
                          src={thumbnail} 
                          alt={category.label} 
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                    )}
                    {!thumbnail && (
                      <span aria-hidden="true" className="text-xl flex items-center justify-center text-foreground/80 group-hover:text-accent transition-colors pl-4">
                        {IconComponent ? <IconComponent className="h-5 w-5" /> : category.icon}
                      </span>
                    )}
                    <span className="text-sm font-semibold tracking-tight sm:text-base whitespace-nowrap">
                      {category.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-16 text-center">
          <p className="mb-8 text-sm font-medium text-muted-foreground">
            {content.ctaText}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/concepts"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-base font-medium text-accent-foreground transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-0.5"
            >
              <RotatingAsterisk className="text-lg" />
              {content.demoButton}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-4 text-base font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {content.contactText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
