import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, MessageCircle, Mail, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ArtX Studio" },
      {
        name: "description",
        content:
          "Privacy Policy and data protection practices for ArtX Studio. Learn how we collect, use, and protect your information.",
      },
      { property: "og:title", content: "Privacy Policy — ArtX Studio" },
      {
        property: "og:description",
        content:
          "Privacy Policy and data protection practices for ArtX Studio. Learn how we collect, use, and protect your information.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen px-6 pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              Legal & Compliance
            </div>
            <h1 className="text-balance text-5xl font-extrabold tracking-tight md:text-7xl">
              Privacy <em className="not-italic text-accent">Policy</em>.
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-medium text-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Last updated: July 26, 2026
              </span>
              <span>Effective Date: July 26, 2026</span>
            </div>
          </header>

          {/* Policy Content */}
          <div className="space-y-14 text-base leading-relaxed text-foreground/85 md:text-lg">
            {/* Section 1 */}
            <section className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                01. Introduction
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Who We Are & What This Policy Covers
              </h2>
              <p>
                At ArtX Studio (&ldquo;ArtX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, store, and safeguard your information when you visit our website, communicate with our team, or engage our digital product design, web development, SEO, and hosting services.
              </p>
              <p>
                By accessing our website or utilizing our services, you acknowledge the terms described in this policy. We believe in complete transparency and aim to make our practices as straightforward and accessible as possible.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                02. Information We Collect
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Personal & Technical Data
              </h2>
              <p>
                We collect information that you voluntarily provide when inquiring about our services, starting a project, or communicating with our support team. The categories of information we collect include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-foreground/80">
                <li>
                  <strong className="text-foreground">Personal Identification:</strong> Name, email address, phone number, and WhatsApp contact number.
                </li>
                <li>
                  <strong className="text-foreground">Project & Business Details:</strong> Company name, project briefs, website URLs, and technical requirements shared during consultations.
                </li>
                <li>
                  <strong className="text-foreground">Payment-Related Information:</strong> Billing addresses, invoice records, and transaction confirmation details required for payment verification.
                </li>
                <li>
                  <strong className="text-foreground">Browsing & Analytics Data:</strong> IP addresses, browser types, device information, referring pages, and standard interaction metrics collected automatically via cookies and analytics tools.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                03. How We Use Information
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Operational & Business Purpose
              </h2>
              <p>
                We use the information we collect strictly to operate our studio, fulfill contractual agreements, and improve client experiences. Specifically, we use your data for:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-foreground/80">
                <li>
                  <strong className="text-foreground">Order Processing & Fulfillment:</strong> Designing, building, deploying, and managing your digital products and service tiers.
                </li>
                <li>
                  <strong className="text-foreground">Communication:</strong> Responding to inquiries, delivering project updates, coordinating reviews, and sending critical administrative notices.
                </li>
                <li>
                  <strong className="text-foreground">Service Improvement:</strong> Analyzing website performance and engagement to refine our design architecture, development workflows, and user experience.
                </li>
                <li>
                  <strong className="text-foreground">Marketing & Updates:</strong> Sending occasional updates regarding studio milestones, new capabilities, or relevant packages. <em className="text-foreground font-medium">(You have the absolute right to opt out of marketing communications at any time by replying &ldquo;STOP&rdquo; or emailing us directly.)</em>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                04. Payment Information
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                WhatsApp Redirect & Billing Security
              </h2>
              <p>
                ArtX provides streamlined payment workflows, including convenient WhatsApp redirect payment methods where invoice summaries, payment links, and verification steps are coordinated directly via secure messaging.
              </p>
              <p>
                <strong className="text-foreground">We do not directly collect, process, or store credit card numbers, bank account passwords, or financial credentials on our local servers.</strong> All online digital transactions are processed through compliant third-party payment gateways and verified banking institutions that adhere to strict industry security standards (such as PCI-DSS).
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                05. Cookies & Analytics
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Google Analytics & Tracking Technologies
              </h2>
              <p>
                Our website utilizes cookies and industry-standard web analytics services, including Google Analytics, to help us understand visitor traffic patterns and optimize overall site performance. Cookies are small text files stored on your device that enable essential site functionality (such as remembering your language preference between English and Bangla).
              </p>
              <p>
                The analytics data collected is aggregated and anonymized wherever possible. You can instruct your browser to refuse all cookies or notify you when a cookie is being set. Please note that disabling cookies may affect certain interactive features of the site.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                06. Data Sharing
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Third-Party Service Providers
              </h2>
              <p>
                <strong className="text-foreground">We do not sell, rent, trade, or monetize your personal data to any external parties under any circumstances.</strong>
              </p>
              <p>
                We only share necessary information with vetted, trusted third-party service providers who directly assist us in operating our studio and delivering your services. This includes:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-foreground/80">
                <li>Cloud hosting and deployment infrastructure (e.g., Vercel, Google Cloud).</li>
                <li>Domain registration authorities and DNS management platforms.</li>
                <li>Secure payment processors and merchant banking partners.</li>
              </ul>
              <p>
                These partners are contractually and legally obligated to maintain the confidentiality and security of your data, using it strictly for specified operational functions.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                07. Data Security
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Safeguarding Your Information
              </h2>
              <p>
                We implement robust technical and organizational security protocols to safeguard your personal data against unauthorized access, disclosure, alteration, or accidental destruction. Our security practices include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-foreground/80">
                <li>Standard SSL/TLS encryption for all data transmitted between your browser and our servers.</li>
                <li>Strict administrative access controls, ensuring only authorized team members can view project or billing details.</li>
                <li>Regular system evaluations and security monitoring of our hosting infrastructure.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="space-y-4 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                08. User Rights
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Your Control Over Your Data
              </h2>
              <p>
                You retain complete rights and ownership over your personal information. In accordance with global privacy principles, you have the right to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-foreground/80">
                <li><strong className="text-foreground">Access:</strong> Request a summary or copy of the personal data we hold about you.</li>
                <li><strong className="text-foreground">Correction:</strong> Ask us to update or correct any inaccurate or outdated information.</li>
                <li><strong className="text-foreground">Deletion:</strong> Request the complete erasure of your personal data from our active databases and communications lists.</li>
                <li><strong className="text-foreground">Withdraw Consent:</strong> Opt out of marketing messages or promotional communications at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please reach out to us via email or WhatsApp. We respond to all legitimate privacy requests promptly.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                09. Changes to This Policy
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Policy Updates & Effective Date
              </h2>
              <p>
                We reserve the right to modify or update this Privacy Policy periodically to reflect changes in our studio operations, regulatory obligations, or technological capabilities.
              </p>
              <p>
                Whenever changes are made, we will revise the &ldquo;Last updated&rdquo; date at the top of this document. We encourage you to review this page occasionally. Continued engagement with our website or services after any changes constitutes your acceptance of the updated policy terms.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-6 border-t border-border/80 pt-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                10. Contact Information
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Get in Touch
              </h2>
              <p>
                If you have any questions, feedback, or requests regarding this Privacy Policy or our data protection practices, please contact us directly through any of our official channels:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <a
                  href="mailto:artxstudiocom@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-accent hover:bg-secondary/80"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email Us
                    </div>
                    <div className="text-base font-bold text-foreground">
                      artxstudiocom@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/8801645441584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-accent hover:bg-secondary/80"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      WhatsApp Support
                    </div>
                    <div className="text-base font-bold text-foreground">
                      01645441584
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
