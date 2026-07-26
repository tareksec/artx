"use client";

import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16">
          <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            {t.pricing.eyebrow}
          </div>
          <h2 className="text-balance text-5xl leading-[0.95] md:text-7xl">
            {t.pricing.titleStart}
            <br />
            <em className="not-italic text-accent">{t.pricing.titleAccent}</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {t.pricing.subheading}
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {t.pricing.packages.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.1}>
              <div
                className={`group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl md:p-10 ${
                  tier.highlighted
                    ? "border-accent bg-dark text-dark-foreground shadow-xl shadow-accent/5 ring-1 ring-accent/20"
                    : "border-border bg-background shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent-foreground shadow-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      {t.pricing.mostPopular}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div
                    className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                      tier.highlighted ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {tier.name}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold tracking-tight md:text-6xl">{tier.price}</span>
                  </div>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      tier.highlighted ? "text-dark-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <ul className="flex-1 space-y-4 border-t border-current/10 pt-8">
                  {tier.services.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                          tier.highlighted ? "text-accent" : "text-accent"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium leading-normal ${
                          tier.highlighted ? "text-dark-foreground/90" : "text-foreground/90"
                        }`}
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-10 inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
                      : "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12">
          <p className="text-center text-sm text-muted-foreground">
            {t.pricing.footnote}
            <Link to="/contact" className="ml-1 font-medium text-accent hover:underline">
              {t.pricing.customReq}
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
