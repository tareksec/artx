import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Monochrome SVG wordmarks — swap for real logos once the client provides them.
const logos: { name: string; mark: React.ReactNode }[] = [
  {
    name: "Northform",
    mark: (
      <span className="font-black tracking-tight">
        <span className="inline-block h-2 w-2 translate-y-[-4px] rounded-full bg-current" />{" "}
        northform
      </span>
    ),
  },
  {
    name: "Gearabout",
    mark: <span className="font-serif italic tracking-tight">Gearabout°</span>,
  },
  {
    name: "Jun Century",
    mark: (
      <span className="font-light uppercase tracking-[0.3em]">JUN / CTY</span>
    ),
  },
  {
    name: "Veative",
    mark: <span className="font-bold tracking-tight">veative✱</span>,
  },
  {
    name: "Kestrel & Co",
    mark: (
      <span className="font-serif tracking-tight">Kestrel &amp; Co.</span>
    ),
  },
  {
    name: "Halden",
    mark: <span className="font-black tracking-[-0.05em]">H·A·L·D·E·N</span>,
  },
  {
    name: "Meridian",
    mark: <span className="font-semibold italic tracking-tight">meridian—</span>,
  },
  {
    name: "Studio Föhn",
    mark: (
      <span className="font-serif tracking-tight">Studio&nbsp;Föhn</span>
    ),
  },
];

export function ClientLogos() {
  const { language } = useLanguage();

  return (
    <section
      aria-label="Trusted by"
      className="border-y border-border bg-secondary/40 py-16"
    >
      <ScrollReveal className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {language === "bn"
            ? "বিশ্বসেরা বিভিন্ন ব্র্যান্ড ও উদ্যোক্তাদের বিশ্বস্ত সঙ্গী"
            : "Trusted by teams shipping ambitious brands"}
        </p>
        <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((l) => (
            <li
              key={l.name}
              title={l.name}
              className="flex items-center justify-center text-lg text-foreground/45 grayscale transition-all duration-300 hover:text-accent hover:grayscale-0"
            >
              {l.mark}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
