import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/content/site";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/work_/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return {};
    return {
      meta: [
        { title: `${project.title} — ArtX Studio` },
        { name: "description", content: project.fullDescription?.slice(0, 160) ?? project.challenge },
        { property: "og:title", content: `${project.title} — ArtX Studio` },
        { property: "og:description", content: project.challenge },
        { property: "og:url", content: `/work/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${project.slug}` }],
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

  return (
    <>
      {/* Back nav */}
      <div className="fixed top-20 left-6 z-40 hidden md:block">
        <Link
          to="/work"
          className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Work
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 pt-40 pb-0 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              <span>{project.tag}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h1 className="text-balance text-6xl leading-[0.95] md:text-8xl">
              {project.title}
            </h1>
            {project.fullDescription && (
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                {project.fullDescription.split("\n\n")[0]}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Hero image */}
      <ScrollReveal className="mt-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className={`overflow-hidden ${project.radii}`}>
            <img
              src={project.img}
              alt={`${project.title} — hero image`}
              width={1400}
              height={800}
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Overview */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                Overview
              </div>
              <dl className="mt-8 space-y-6">
                {project.client && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Client</dt>
                    <dd className="mt-1 font-medium">{project.client}</dd>
                  </div>
                )}
                {project.industry && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Industry</dt>
                    <dd className="mt-1 font-medium">{project.industry}</dd>
                  </div>
                )}
                {project.timeline && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Timeline</dt>
                    <dd className="mt-1 font-medium">{project.timeline}</dd>
                  </div>
                )}
                {project.role && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Role</dt>
                    <dd className="mt-1 font-medium">{project.role}</dd>
                  </div>
                )}
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Stack</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70"
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
                <div>
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Challenge</div>
                  <p className="text-lg leading-relaxed text-foreground/85">{project.challenge}</p>
                </div>
                <div>
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Solution</div>
                  <p className="text-lg leading-relaxed text-foreground/85">{project.solution}</p>
                </div>
                <div>
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">Result</div>
                  <p className="text-xl font-semibold leading-snug">{project.result}</p>
                </div>
                {project.fullDescription && project.fullDescription.split("\n\n").length > 1 && (
                  <div className="border-t border-border pt-8">
                    {project.fullDescription.split("\n\n").slice(1).map((para, i) => (
                      <p key={i} className="mt-4 text-base leading-relaxed text-foreground/75">
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
                Process
              </div>
              <h2 className="text-balance text-4xl leading-[1] md:text-6xl">
                How we <em className="not-italic text-accent">built it</em>.
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {project.processSteps.map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 0.1}>
                  <div className="rounded-2xl border border-dark-foreground/10 bg-dark-foreground/[0.04] p-6">
                    <div className="mb-4 text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
                      {s.step}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-dark-foreground/70">{s.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-12">
              <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                Gallery
              </div>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="overflow-hidden rounded-2xl bg-secondary">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="rounded-3xl bg-secondary p-8 md:p-14">
                <blockquote>
                  <p className="text-xl leading-relaxed text-foreground/90 before:content-['\u201C'] after:content-['\u201D'] md:text-2xl">
                    {project.testimonial.quote}
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {project.testimonial.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold">{project.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{project.testimonial.title}</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Next project */}
      {next && (
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-8 rounded-3xl border border-border p-8 text-center md:p-16">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Next project
                </div>
                <h2 className="text-4xl font-semibold md:text-6xl">{next.title}</h2>
                <p className="max-w-md text-muted-foreground">{next.tag}</p>
                <Link
                  to={`/work/${next.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
                >
                  View case study
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
