import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight, ExternalLink, MapPin, Globe, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/work_/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return {};

    const pageUrl = `https://artxdev.tech/work/${project.slug}`;
    const imageUrl = project.img.startsWith("http")
      ? project.img
      : `https://artxdev.tech${project.img.startsWith("/") ? project.img : "/" + project.img}`;

    // 1. Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://artxdev.tech",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work & Case Studies",
          item: "https://artxdev.tech/work",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: pageUrl,
        },
      ],
    };

    // 2. Comprehensive AEO & GEO Case Study Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: project.seoTitle ?? `${project.title} — Web Development & SEO Case Study`,
      description: project.metaDescription ?? project.challenge,
      image: imageUrl,
      url: pageUrl,
      datePublished: "2026-01-15T00:00:00+06:00",
      dateModified: "2026-10-25T00:00:00+06:00",
      author: {
        "@type": "Organization",
        name: "ArtX Dev",
        url: "https://artxdev.tech",
        logo: "https://artxdev.tech/favicon.ico",
      },
      publisher: {
        "@type": "Organization",
        name: "ArtX Dev",
        url: "https://artxdev.tech",
        logo: {
          "@type": "ImageObject",
          url: "https://artxdev.tech/favicon.ico",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      // Entity Linking & Reciprocal Client Citation
      about: {
        "@type": "Organization",
        name: project.client ?? project.title,
        url: project.liveUrl ?? project.clientUrl ?? pageUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: project.geoRegion ?? "Dhaka",
          addressCountry: project.geoCountry ?? "Bangladesh",
        },
      },
      // GEO targeting
      contentLocation: {
        "@type": "Place",
        name: `${project.geoRegion ?? "Dhaka"}, ${project.geoCountry ?? "Bangladesh"}`,
      },
      mentions: [
        {
          "@type": "Thing",
          name: project.industry ?? "Software Development",
        },
        ...(project.techStack ?? []).map((tech) => ({
          "@type": "SoftwareApplication",
          name: tech,
        })),
      ],
    };

    // 3. AEO FAQPage Schema for AI Search Engines & Google Rich Answers
    const faqSchema =
      project.faqs && project.faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: project.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }
        : null;

    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(articleSchema),
      },
      ...(faqSchema
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(faqSchema),
            },
          ]
        : []),
    ];

    return {
      meta: [
        {
          title: (
            project.seoTitle ?? `${project.title} — Web Development & SEO Case Study | ArtX Dev`
          ).slice(0, 68),
        },
        {
          name: "description",
          content: (project.metaDescription ?? (project.fullDescription ?? project.challenge)).slice(
            0,
            155
          ),
        },
        {
          name: "keywords",
          content: `${project.targetKeyword ?? ""}, ${project.client ?? project.title}, web design Bangladesh, web development Dhaka, ArtX Dev`,
        },
        {
          property: "og:title",
          content: (project.seoTitle ?? `${project.title} | ArtX Dev Case Study`).slice(0, 68),
        },
        {
          property: "og:description",
          content: (project.metaDescription ?? project.challenge).slice(0, 155),
        },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "article" },
        { property: "og:image", content: imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: (project.seoTitle ?? `${project.title} | ArtX Dev Case Study`).slice(0, 68),
        },
        {
          name: "twitter:description",
          content: (project.metaDescription ?? project.challenge).slice(0, 155),
        },
        { name: "twitter:image", content: imageUrl },
        { name: "geo.region", content: "BD-13" },
        { name: "geo.placename", content: project.geoRegion ?? "Dhaka" },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts,
    };
  },
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    const next = projects.find((p) => p.slug === project.nextProject);
    return { project, next: next ?? projects[0] };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project, next } = Route.useLoaderData();
  const liveUrl = project.liveUrl ?? project.clientUrl;

  return (
    <>
      {/* Back nav */}
      <div className="fixed top-20 left-6 z-40 hidden md:block">
        <Link
          to="/work"
          className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Work Showcase</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 pt-36 pb-0 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              <span>{project.tag}</span>
              <span>·</span>
              <span>{project.year}</span>
              {project.geoRegion && (
                <>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 text-emerald-500 font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.geoRegion}, {project.geoCountry ?? "Bangladesh"}
                  </span>
                </>
              )}
            </div>
            <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.98]">
              {project.title}
            </h1>
            {project.fullDescription && (
              <p className="mt-6 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription.split("\n\n")[0]}
              </p>
            )}

            {/* Live Client Link Callout Banner */}
            {liveUrl && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f95738] hover:bg-[#ea4829] text-white px-6 py-3 text-sm font-semibold transition-all shadow-md hover:-translate-y-0.5"
                >
                  <Globe className="h-4 w-4" />
                  <span>Visit Official Site ({project.client ?? project.title})</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <Link
                  to="/workproof"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-5 py-3 text-sm font-medium hover:bg-secondary transition"
                >
                  <span>Interactive Workproof Directory</span>
                  <span>→</span>
                </Link>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Hero image / Video */}
      <ScrollReveal className="mt-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className={`overflow-hidden ${project.radii} bg-secondary/40 border border-border/40 shadow-lg`}>
            {project.img.endsWith(".mp4") ? (
              <video
                src={project.img}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="aspect-[16/9] w-full object-cover"
              />
            ) : (
              <img
                src={project.img}
                alt={`${project.title} — client case study hero`}
                width={1400}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="aspect-[16/9] w-full object-cover"
              />
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Overview */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
                <span className="h-px w-8 bg-foreground/30" />
                Project Specifications
              </div>
              <dl className="mt-8 space-y-6">
                {project.client && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Client</dt>
                    <dd className="mt-1 font-semibold text-foreground text-base">{project.client}</dd>
                  </div>
                )}
                {liveUrl && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-[#f95738] font-mono font-semibold">Live Production Domain</dt>
                    <dd className="mt-1.5">
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-[#f95738] underline decoration-dotted transition"
                      >
                        <span>{liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-[#f95738]" />
                      </a>
                    </dd>
                  </div>
                )}
                {(project.geoRegion || project.geoCountry) && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Geographic Citation</dt>
                    <dd className="mt-1 font-medium text-sm flex items-center gap-1.5 text-foreground/90">
                      <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{project.geoRegion ? `${project.geoRegion}, ` : ""}{project.geoCountry ?? "Bangladesh"}</span>
                    </dd>
                  </div>
                )}
                {project.industry && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Industry</dt>
                    <dd className="mt-1 font-medium text-foreground">{project.industry}</dd>
                  </div>
                )}
                {project.timeline && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Timeline</dt>
                    <dd className="mt-1 font-medium text-foreground">{project.timeline}</dd>
                  </div>
                )}
                {project.role && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Our Role</dt>
                    <dd className="mt-1 font-medium text-foreground">{project.role}</dd>
                  </div>
                )}
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Technology Stack</dt>
                    <dd className="mt-2.5 flex flex-wrap gap-2">
                      {project.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border/80 bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground/80 shadow-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-10">
                <div className="p-6 rounded-2xl border border-border/60 bg-secondary/20">
                  <div className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-500 font-mono font-semibold">The Client Challenge</div>
                  <p className="text-base sm:text-lg leading-relaxed text-foreground/90">{project.challenge}</p>
                </div>

                <div className="p-6 rounded-2xl border border-border/60 bg-secondary/20">
                  <div className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-500 font-mono font-semibold">ArtX Engineering & Solution</div>
                  <p className="text-base sm:text-lg leading-relaxed text-foreground/90">{project.solution}</p>
                </div>

                <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.05]">
                  <div className="mb-2 text-xs uppercase tracking-[0.2em] text-accent font-mono font-semibold">Measurable Results & Metrics</div>
                  <p className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">{project.result}</p>
                </div>

                {project.fullDescription && project.fullDescription.split("\n\n").length > 1 && (
                  <div className="border-t border-border/40 pt-8 space-y-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono font-semibold">In-Depth Case Study Analysis</h3>
                    {project.fullDescription.split("\n\n").slice(1).map((para, i) => (
                      <p key={i} className="text-base sm:text-lg leading-relaxed text-foreground/85">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      {project.processSteps && project.processSteps.length > 0 && (
        <section className="bg-dark px-6 py-24 text-dark-foreground md:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-dark-foreground/60">
                <span className="h-px w-8 bg-dark-foreground/40" />
                Execution Blueprint
              </div>
              <h2 className="text-balance text-4xl leading-[1] md:text-6xl font-bold">
                How we <em className="not-italic text-accent">architected & delivered it</em>.
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.processSteps.map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 0.1}>
                  <div className="rounded-2xl border border-dark-foreground/10 bg-dark-foreground/[0.04] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[#f95738] font-mono font-bold">
                        Phase {s.step}
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-white">{s.title}</h3>
                      <p className="text-sm leading-relaxed text-dark-foreground/70">{s.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 py-20 md:py-28 border-b border-border/40">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10">
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
                <span className="h-px w-8 bg-foreground/30" />
                Visual Deliverables & Interface Artifacts
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Production Artifacts</h2>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="overflow-hidden rounded-2xl bg-secondary border border-border/50 group shadow-sm">
                    {img.src.endsWith(".mp4") ? (
                      <video src={img.src} autoPlay loop muted playsInline className="aspect-[4/3] w-full object-cover" />
                    ) : (
                      <img
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AEO Frequently Asked Questions (GEO & AI Search Optimized) */}
      {project.faqs && project.faqs.length > 0 && (
        <section className="px-6 py-20 md:py-28 bg-secondary/15 border-b border-border/40">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#f95738] font-mono font-semibold">
                <span className="h-px w-8 bg-[#f95738]" />
                Answer Engine Optimization (AEO)
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Frequently Asked Questions About {project.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-10">
                Key questions answered regarding the technology stack, development agency, and business results for {project.client ?? project.title}.
              </p>

              <div className="space-y-4">
                {project.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs transition hover:border-[#f95738]/40"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-start gap-2.5">
                      <span className="text-[#f95738] font-bold">Q:</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="rounded-3xl bg-secondary p-8 md:p-14 border border-border/40 shadow-md">
                <blockquote>
                  <p className="text-xl sm:text-2xl leading-relaxed text-foreground/95 italic before:content-['\u201C'] after:content-['\u201D']">
                    {project.testimonial.quote}
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground shadow-sm">
                      {project.testimonial.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-base">{project.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{project.testimonial.title}</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Contextual Related Services Interlinking */}
      <section className="px-6 py-16 bg-secondary/10 border-t border-border/40">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-[#f95738] font-mono font-semibold">Ready to Build Your Platform?</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2">
                Explore Our Web Design & Engineering Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/services/ecommerce-website-design"
                className="p-5 rounded-2xl border border-border/60 bg-card hover:border-[#f95738] transition shadow-xs group"
              >
                <div className="text-xs font-mono text-[#f95738] font-bold">01</div>
                <h3 className="font-semibold text-foreground group-hover:text-[#f95738] transition mt-1">E-Commerce Stores</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">Headless Next.js stores with instant bKash checkout.</p>
              </Link>

              <Link
                to="/services/web-development"
                className="p-5 rounded-2xl border border-border/60 bg-card hover:border-[#f95738] transition shadow-xs group"
              >
                <div className="text-xs font-mono text-[#f95738] font-bold">02</div>
                <h3 className="font-semibold text-foreground group-hover:text-[#f95738] transition mt-1">Custom Web Apps</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">SaaS platforms and ERP dashboards built to scale.</p>
              </Link>

              <Link
                to="/services/seo-services"
                className="p-5 rounded-2xl border border-border/60 bg-card hover:border-[#f95738] transition shadow-xs group"
              >
                <div className="text-xs font-mono text-[#f95738] font-bold">03</div>
                <h3 className="font-semibold text-foreground group-hover:text-[#f95738] transition mt-1">Technical SEO & GEO</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">Local Dhaka rankings & Generative AI search citations.</p>
              </Link>

              <Link
                to="/services/web-security"
                className="p-5 rounded-2xl border border-border/60 bg-card hover:border-[#f95738] transition shadow-xs group"
              >
                <div className="text-xs font-mono text-[#f95738] font-bold">04</div>
                <h3 className="font-semibold text-foreground group-hover:text-[#f95738] transition mt-1">Web Security & Audits</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">OWASP Top 10 hardening and penetration testing.</p>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Next project */}
      {next && (
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-8 rounded-3xl border border-border p-8 text-center md:p-16 bg-card shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  Next Case Study
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">{next.title}</h2>
                <p className="max-w-md text-muted-foreground">{next.tag}</p>
                <Link
                  to={`/work/${next.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
