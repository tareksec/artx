"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { services as defaultServices, type Service } from "@/content/site";
import { trackOutboundClick } from "@/lib/track-click";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Services({ items = defaultServices }: { items?: Service[] }) {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const current = active ?? 0;

  const renderedItems = items.map((s, i) => {
    const translated = t.services.items[i];
    return {
      ...s,
      t: translated ? translated.t : s.t,
      d: translated ? translated.d : s.d,
    };
  });

  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16">
          <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            {t.services.eyebrow}
          </div>
          <h2 className="text-balance text-5xl leading-[1] md:text-7xl">
            {t.services.titleStart}
            <br />
            <em className="not-italic text-accent">{t.services.titleAccent}</em>
          </h2>
        </ScrollReveal>

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto]">
          <ol
            className="divide-y divide-border border-y border-border"
            aria-label="ArtX services"
          >
            {renderedItems.map((s, i) => (
              <li
                key={s.n}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() =>
                  setActive((prev) => (prev === i ? null : prev))
                }
                className="group relative"
              >
                {s.link ? (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackOutboundClick(`service:${s.t}`)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive((prev) => (prev === i ? null : prev))}
                    aria-label={`Service ${Number(s.n)} of ${renderedItems.length}: ${s.t}. ${s.d} (opens techvrs.com in a new tab)`}
                    className="flex items-baseline justify-between gap-6 py-8 text-accent transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline-none md:py-10"
                  >
                    <span aria-hidden="true" className="w-16 shrink-0 text-sm text-muted-foreground tabular-nums">{s.n}</span>
                    <span className="flex-1 text-4xl font-semibold tracking-tight md:text-6xl">
                      {s.t}
                      <span className="ml-3 align-middle text-xs font-medium uppercase tracking-[0.15em] text-accent">via techvrs.com</span>
                    </span>
                    <span aria-hidden="true" className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">{s.d}</span>
                  </a>
                ) : (
                  <Link
                    to={`/services/${s.slug ?? ""}`}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive((prev) => (prev === i ? null : prev))}
                    aria-label={`Service ${Number(s.n)} of ${renderedItems.length}: ${s.t}. ${s.d}`}
                    className="flex items-baseline justify-between gap-6 py-8 transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline-none md:py-10"
                  >
                    <span
                      aria-hidden="true"
                      className="w-16 shrink-0 text-sm text-muted-foreground tabular-nums"
                    >
                      {s.n}
                    </span>
                    <span className="flex-1 text-4xl font-semibold tracking-tight md:text-6xl">
                      {s.t}
                      {s.link && (
                        <span className="ml-3 align-middle text-xs font-medium uppercase tracking-[0.15em] text-accent">
                          via techvrs.com
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden max-w-xs text-right text-sm text-muted-foreground md:block"
                    >
                      {s.d}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ol>

          <div className="pointer-events-none hidden lg:block lg:w-[22rem]">
            <div className="sticky top-32 aspect-square overflow-hidden rounded-3xl bg-secondary">
              <AnimatePresence mode="wait">
                {current >= 0 && renderedItems[current] && (
                  <motion.img
                    key={renderedItems[current].n}
                    src={renderedItems[current].img}
                    alt={renderedItems[current].t}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.05 }}
                    animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                    exit={{ clipPath: "inset(0 0 100% 0)", scale: 1 }}
                    transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                    style={{ willChange: "transform, clip-path" }}
                    className="h-full w-full object-cover"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
