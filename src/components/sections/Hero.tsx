"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { RotatingAsterisk } from "@/components/animations/RotatingAsterisk";
import { nextAvailableQuarter } from "@/lib/availability";
import { heroContent } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

const ease = [0.25, 1, 0.5, 1] as const;

type HeroProps = {
  eyebrow?: string;
  credibility?: string;
  body?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  image?: { src: string; alt: string };
};

export function Hero(props: HeroProps = {}) {
  const { t } = useLanguage();
  const { image = heroContent.image } = props;

  const eyebrow = props.eyebrow || t.hero.eyebrow;
  const credibility = props.credibility || t.hero.credibility;
  const body = props.body || t.hero.body;
  const primaryCta = props.primaryCta || { label: t.hero.primaryCta, to: "/contact" as const };
  const secondaryCta = props.secondaryCta || { label: t.hero.secondaryCta, to: "/work" as const };

  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 inline-flex items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            <span className="font-medium text-foreground">{eyebrow}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            className="mb-8 max-w-xl text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            {credibility}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-balance text-[13vw] leading-[0.9] tracking-[-0.04em] sm:text-[10vw] lg:text-[7.5vw]"
          >
            {t.hero.titleStart}
            <em className="not-italic text-accent">{t.hero.titleAccent}</em>
            <br />
            {t.hero.titleEnd}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            {body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to={primaryCta.to}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-base font-medium text-accent-foreground transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-0.5"
            >
              <RotatingAsterisk className="text-lg" />
              {primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to={secondaryCta.to}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-4 text-base font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(26,26,26,0.35)] sm:max-w-sm sm:rounded-[2.5rem] md:max-w-md lg:max-w-none">
            <img
              src={image.src}
              alt={image.alt}
              width={1200}
              height={1408}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-medium text-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.hero.available} {nextAvailableQuarter()}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
