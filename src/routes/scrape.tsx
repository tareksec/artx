import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { scrapePage, crawlSite } from "@/lib/firecrawl.server";
import {
  runSiteAudit,
  scoreColor,
  scoreBg,
  severityColor,
  type SiteAudit,
} from "@/lib/seo-audit";
import { downloadAuditCsv, printAuditPdf } from "@/lib/export-audit";
import { buildRecommendations, type Recommendation } from "@/lib/seo-recommendations";
import { Footer } from "@/components/sections/Footer";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  Globe,
  Lightbulb,
  Loader2,
  Printer,
  Search,
  ShieldCheck,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/scrape")({
  head: () => ({
    meta: [
      { title: "Site Analyser — ArtX Studio" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ScrapePage,
});

type Mode = "scrape" | "crawl" | "audit" | "compare";
type Status = "idle" | "loading" | "done" | "error";

const MODES: { id: Mode; label: string }[] = [
  { id: "scrape", label: "Scrape page" },
  { id: "crawl", label: "Crawl site" },
  { id: "audit", label: "SEO audit" },
  { id: "compare", label: "Compare vs competitor" },
];

function ScoreRing({ score, size = 96 }: { score: number; size?: number }) {
  const color =
    score >= 80 ? "#16a34a" : score >= 50 ? "#ca8a04" : "#dc2626";
  const r = (size / 2) * 0.75;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const cx = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle cx={cx} cy={cx} r={r} fill="none" stroke="#e5e7eb" strokeWidth={size * 0.083} />
      <circle
        cx={cx} cy={cx} r={r} fill="none"
        stroke={color} strokeWidth={size * 0.083}
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cx})`}
      />
      <text x={cx} y={cx + size * 0.07} textAnchor="middle"
        fontSize={size * 0.19} fontWeight="700" fill={color}>
        {score}
      </text>
    </svg>
  );
}

function SiteColumn({
  label,
  audit,
  url,
  isWinner,
}: {
  label: string;
  audit: SiteAudit;
  url: string;
  isWinner: boolean;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const page = audit.pages[activeIdx];

  return (
    <div className={`flex flex-col gap-4 rounded-2xl border p-5 ${isWinner ? "border-accent bg-accent/5" : "border-border bg-secondary/50"}`}>
      {/* Header */}
      <div className="flex items-center gap-3">
        {isWinner && <Trophy className="h-4 w-4 shrink-0 text-accent" />}
        <div className="min-w-0">
          <p className="truncate text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            {label}
          </p>
          <p className="truncate text-sm font-medium">{url}</p>
        </div>
      </div>

      {/* Score ring + issue counts */}
      <div className="flex items-center gap-4">
        <ScoreRing score={audit.overallScore} size={72} />
        <div className="space-y-1 text-sm">
          {(["critical", "warning"] as const).map((sev) => (
            <div key={sev} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${sev === "critical" ? "bg-red-500" : "bg-yellow-500"}`} />
              <span className="text-muted-foreground capitalize">{sev}:</span>
              <span className="font-medium">{audit.totalIssues[sev]}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-300" />
            <span className="text-muted-foreground">Pages:</span>
            <span className="font-medium">{audit.pages.length}</span>
          </div>
        </div>
      </div>

      {/* Page selector */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">Pages</p>
        <div className="flex max-h-40 flex-col gap-1 overflow-y-auto pr-1">
          {audit.pages.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={`rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                activeIdx === i
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-background text-foreground/70"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className={`font-bold ${activeIdx === i ? "text-accent-foreground" : scoreColor(p.score)}`}>
                  {p.score}
                </span>
                <span className="truncate">{p.title || p.url.replace(/^https?:\/\/[^/]+/, "") || "/"}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active page issues */}
      {page && (
        <div>
          <a
            href={page.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 inline-flex items-center gap-1 text-xs text-accent hover:underline"
          >
            {page.url} <ArrowUpRight className="h-3 w-3" />
          </a>
          {page.issues.length === 0 ? (
            <p className="text-xs text-green-700">✓ No issues on this page.</p>
          ) : (
            <div className="space-y-1.5">
              {page.issues.map((issue, j) => (
                <div key={j} className="flex items-start gap-2 text-xs">
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium capitalize ${severityColor(issue.severity)}`}>
                    {issue.severity}
                  </span>
                  <span className="text-foreground/80">
                    <span className="font-medium">{issue.field}:</span> {issue.message}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const SEV_STYLES: Record<string, { bar: string; badge: string; icon: string }> = {
  critical: { bar: "border-red-200 bg-red-50", badge: "bg-red-100 text-red-700", icon: "text-red-500" },
  warning:  { bar: "border-yellow-200 bg-yellow-50", badge: "bg-yellow-100 text-yellow-700", icon: "text-yellow-500" },
  info:     { bar: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700", icon: "text-blue-500" },
};

function RecommendationCard({ rec, done, onToggle }: {
  rec: Recommendation;
  done: boolean;
  onToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const s = SEV_STYLES[rec.severity];

  return (
    <div className={`rounded-2xl border transition-opacity ${done ? "opacity-40" : ""} ${s.bar}`}>
      {/* Header row */}
      <div className="flex items-start gap-3 p-4">
        <button
          type="button"
          onClick={onToggle}
          className="mt-0.5 shrink-0"
          aria-label="Mark as done"
        >
          <CheckCircle2
            className={`h-5 w-5 transition-colors ${done ? "text-green-500" : "text-foreground/20 hover:text-green-400"}`}
          />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${s.badge}`}>
              {rec.severity}
            </span>
            <span className="text-xs text-muted-foreground">{rec.field}</span>
            <span className="text-xs text-muted-foreground">
              · {rec.affectedCount} page{rec.affectedCount !== 1 ? "s" : ""}
            </span>
          </div>
          <p className={`mt-1 font-semibold ${done ? "line-through" : ""}`}>{rec.headline}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 text-muted-foreground hover:text-foreground"
        >
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {/* Expanded detail */}
      {open && (
        <div className="border-t border-current/10 px-4 pb-5 pt-3 space-y-3 text-sm">
          <div>
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Why it matters</p>
            <p className="text-foreground/80">{rec.what}</p>
          </div>
          <div>
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">How to fix</p>
            <p className="text-foreground/80">{rec.how}</p>
          </div>
          {rec.example && (
            <div>
              <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Example</p>
              <code className="block rounded-lg bg-background/70 px-3 py-2 text-xs text-foreground/80 whitespace-pre-wrap">
                {rec.example}
              </code>
            </div>
          )}
          {rec.affectedUrls.length > 0 && (
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Affected pages</p>
              <ul className="space-y-0.5">
                {rec.affectedUrls.map((u) => (
                  <li key={u}>
                    <a
                      href={u}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                    >
                      {u} <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RecommendationsPanel({ audit }: { audit: SiteAudit }) {
  const recs = buildRecommendations(audit);
  const [done, setDone] = useState<Set<string>>(new Set());

  if (recs.length === 0) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-5 text-green-700">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <p className="font-medium">No recommendations — this site looks great!</p>
      </div>
    );
  }

  const criticalCount = recs.filter((r) => r.severity === "critical").length;
  const remaining = recs.length - done.size;

  function toggle(id: string) {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-4">
      {/* Panel header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-accent" />
          <h2 className="font-semibold">Action plan</h2>
        </div>
        <span className="rounded-full bg-secondary px-3 py-0.5 text-xs text-muted-foreground">
          {remaining} of {recs.length} remaining
        </span>
        {criticalCount > 0 && (
          <span className="rounded-full bg-red-100 px-3 py-0.5 text-xs font-medium text-red-700">
            {criticalCount} critical
          </span>
        )}
        {done.size > 0 && (
          <button
            type="button"
            onClick={() => setDone(new Set())}
            className="ml-auto text-xs text-muted-foreground hover:text-accent"
          >
            Reset
          </button>
        )}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {recs.map((rec) => (
          <RecommendationCard
            key={rec.id}
            rec={rec}
            done={done.has(rec.id)}
            onToggle={() => toggle(rec.id)}
          />
        ))}
      </div>
    </div>
  );
}

function ScrapePage() {
  const [url, setUrl] = useState("https://artxx.lovable.app");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [mode, setMode] = useState<Mode>("scrape");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [scrapeResult, setScrapeResult] = useState<Awaited<ReturnType<typeof scrapePage>> | null>(null);
  const [crawlResult, setCrawlResult] = useState<Awaited<ReturnType<typeof crawlSite>> | null>(null);
  const [auditResult, setAuditResult] = useState<SiteAudit | null>(null);
  const [competitorAudit, setCompetitorAudit] = useState<SiteAudit | null>(null);
  const [crawlLimit, setCrawlLimit] = useState(10);
  const [activePageIdx, setActivePageIdx] = useState(0);
  const [auditPageIdx, setAuditPageIdx] = useState(0);

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "print-audit-styles";
    style.textContent = `
      @media print {
        body > *:not(#audit-print-root) { display: none !important; }
        #audit-print-root { display: block !important; }
        nav, header, footer, button, input, .no-print { display: none !important; }
        .print-page { page-break-after: always; padding: 2rem; }
        .print-page:last-child { page-break-after: auto; }
        a { color: inherit; text-decoration: none; }
        * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  async function handleRun() {
    if (!url.trim()) return;
    setStatus("loading");
    setError(null);
    setScrapeResult(null);
    setCrawlResult(null);
    setAuditResult(null);
    setCompetitorAudit(null);
    setActivePageIdx(0);
    setAuditPageIdx(0);

    try {
      if (mode === "scrape") {
        const data = await scrapePage({ data: { url: url.trim() } });
        setScrapeResult(data);
      } else if (mode === "crawl") {
        const data = await crawlSite({ data: { url: url.trim(), limit: crawlLimit } });
        setCrawlResult(data);
      } else if (mode === "audit") {
        const data = await crawlSite({ data: { url: url.trim(), limit: crawlLimit } });
        setCrawlResult(data);
        setAuditResult(runSiteAudit(data.pages));
      } else {
        // compare — run both in parallel
        const compUrl = competitorUrl.trim() || url.trim();
        const [myData, theirData] = await Promise.all([
          crawlSite({ data: { url: url.trim(), limit: crawlLimit } }),
          crawlSite({ data: { url: compUrl, limit: crawlLimit } }),
        ]);
        setAuditResult(runSiteAudit(myData.pages));
        setCompetitorAudit(runSiteAudit(theirData.pages));
      }
      setStatus("done");
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong.");
      setStatus("error");
    }
  }

  const crawlPages = crawlResult?.pages ?? [];

  return (
    <>
      <section className="min-h-screen px-6 pt-40 pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            Powered by Firecrawl
          </div>
          <h1 className="mb-2 text-5xl leading-[0.95] md:text-7xl">
            Site <em className="not-italic text-accent">Analyser</em>
          </h1>
          <p className="mb-12 max-w-xl text-lg text-muted-foreground">
            Scrape a page, crawl a site, run a scored SEO audit, or compare
            yourself against a competitor — all powered by Firecrawl.
          </p>

          {/* Controls */}
          <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-border bg-secondary/50 p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMode(m.id)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    mode === m.id
                      ? "bg-accent text-accent-foreground"
                      : "border border-border text-foreground/70 hover:text-accent hover:border-accent"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {/* Your URL */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Globe className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={mode === "compare" ? "Your site URL" : "https://example.com"}
                    className="w-full rounded-full border border-border bg-background py-3 pl-10 pr-5 text-base outline-none transition-colors focus:border-accent"
                  />
                </div>
                {(mode === "crawl" || mode === "audit" || mode === "compare") && (
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="shrink-0">Max pages</span>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={crawlLimit}
                      onChange={(e) => setCrawlLimit(Number(e.target.value) || 10)}
                      className="w-20 rounded-full border border-border bg-background px-4 py-3 text-center outline-none focus:border-accent"
                    />
                  </label>
                )}
                {mode !== "compare" && (
                  <button
                    type="button"
                    onClick={handleRun}
                    disabled={status === "loading" || !url.trim()}
                    className="flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent disabled:opacity-50"
                  >
                    {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> :
                      mode === "audit" ? <ShieldCheck className="h-4 w-4" /> :
                      <Search className="h-4 w-4" />}
                    {status === "loading" ? "Running…" : mode === "audit" ? "Run audit" : "Analyse"}
                  </button>
                )}
              </div>

              {/* Competitor URL (compare mode only) */}
              {mode === "compare" && (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative flex-1">
                    <Globe className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="url"
                      value={competitorUrl}
                      onChange={(e) => setCompetitorUrl(e.target.value)}
                      placeholder="Competitor URL"
                      className="w-full rounded-full border border-border bg-background py-3 pl-10 pr-5 text-base outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleRun}
                    disabled={status === "loading" || !url.trim() || !competitorUrl.trim()}
                    className="flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent disabled:opacity-50"
                  >
                    {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trophy className="h-4 w-4" />}
                    {status === "loading" ? "Comparing…" : "Compare"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Error */}
          {status === "error" && error && (
            <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* ── COMPARE RESULT ── */}
          {status === "done" && auditResult && competitorAudit && (
            <div className="space-y-6">
              {/* Winner banner */}
              {(() => {
                const myScore = auditResult.overallScore;
                const theirScore = competitorAudit.overallScore;
                const diff = myScore - theirScore;
                const tied = diff === 0;
                const weWin = diff > 0;
                return (
                  <div className={`rounded-2xl border p-5 text-center ${tied ? "border-border bg-secondary/50" : weWin ? "border-accent bg-accent/5" : "border-red-200 bg-red-50"}`}>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Result</p>
                    {tied ? (
                      <p className="mt-1 text-xl font-bold">It's a tie — {myScore}/100 each</p>
                    ) : weWin ? (
                      <p className="mt-1 text-xl font-bold text-accent">
                        You're ahead by {diff} point{diff !== 1 ? "s" : ""} 🏆
                      </p>
                    ) : (
                      <p className="mt-1 text-xl font-bold text-red-600">
                        Competitor leads by {Math.abs(diff)} point{Math.abs(diff) !== 1 ? "s" : ""} — room to improve
                      </p>
                    )}
                    <p className="mt-1 text-sm text-muted-foreground">
                      Your score: <strong className={scoreColor(myScore)}>{myScore}</strong>
                      {" · "}
                      Competitor: <strong className={scoreColor(theirScore)}>{theirScore}</strong>
                    </p>
                  </div>
                );
              })()}

              {/* Side-by-side issue comparison table */}
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="border-b border-border bg-secondary/50">
                    <tr>
                      <th className="px-5 py-3 text-left text-xs uppercase tracking-[0.15em] text-muted-foreground">Metric</th>
                      <th className="px-5 py-3 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground">You</th>
                      <th className="px-5 py-3 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground">Competitor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { label: "Overall score", mine: auditResult.overallScore, theirs: competitorAudit.overallScore, unit: "/100", higherIsBetter: true },
                      { label: "Pages crawled", mine: auditResult.pages.length, theirs: competitorAudit.pages.length, higherIsBetter: true },
                      { label: "Critical issues", mine: auditResult.totalIssues.critical, theirs: competitorAudit.totalIssues.critical, higherIsBetter: false },
                      { label: "Warnings", mine: auditResult.totalIssues.warning, theirs: competitorAudit.totalIssues.warning, higherIsBetter: false },
                      {
                        label: "Avg word count",
                        mine: Math.round(auditResult.pages.reduce((s, p) => s + p.wordCount, 0) / (auditResult.pages.length || 1)),
                        theirs: Math.round(competitorAudit.pages.reduce((s, p) => s + p.wordCount, 0) / (competitorAudit.pages.length || 1)),
                        higherIsBetter: true,
                      },
                    ].map(({ label, mine, theirs, unit = "", higherIsBetter }) => {
                      const myBetter = higherIsBetter ? mine > theirs : mine < theirs;
                      const tied = mine === theirs;
                      return (
                        <tr key={label}>
                          <td className="px-5 py-3 text-foreground/80">{label}</td>
                          <td className={`px-5 py-3 text-center font-semibold ${tied ? "" : myBetter ? "text-accent" : "text-red-600"}`}>
                            {mine}{unit}
                          </td>
                          <td className={`px-5 py-3 text-center font-semibold ${tied ? "" : !myBetter ? "text-accent" : "text-red-600"}`}>
                            {theirs}{unit}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Side-by-side per-page detail */}
              <div className="grid gap-6 lg:grid-cols-2">
                <SiteColumn
                  label="Your site"
                  audit={auditResult}
                  url={url}
                  isWinner={auditResult.overallScore >= competitorAudit.overallScore}
                />
                <SiteColumn
                  label="Competitor"
                  audit={competitorAudit}
                  url={competitorUrl}
                  isWinner={competitorAudit.overallScore > auditResult.overallScore}
                />
              </div>
            </div>
          )}

          {/* ── SEO AUDIT ── */}
          {status === "done" && auditResult && !competitorAudit && (
            <div id="audit-print-root" className="space-y-6">
              {/* Summary bar */}
              <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-border bg-secondary/50 p-6">
                <ScoreRing score={auditResult.overallScore} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Overall SEO score</p>
                  <p className={`text-4xl font-bold ${scoreColor(auditResult.overallScore)}`}>
                    {auditResult.overallScore} / 100
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Across {auditResult.pages.length} page{auditResult.pages.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex gap-4 text-sm">
                  {(["critical", "warning", "info"] as const).map((sev) => (
                    <div key={sev} className="text-center">
                      <p className={`text-2xl font-bold ${sev === "critical" ? "text-red-600" : sev === "warning" ? "text-yellow-600" : "text-blue-600"}`}>
                        {auditResult.totalIssues[sev]}
                      </p>
                      <p className="capitalize text-muted-foreground">{sev}</p>
                    </div>
                  ))}
                </div>
                <div className="no-print ml-auto flex gap-2">
                  <button
                    type="button"
                    onClick={() => downloadAuditCsv(auditResult, url)}
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Download className="h-4 w-4" /> CSV
                  </button>
                  <button
                    type="button"
                    onClick={printAuditPdf}
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Printer className="h-4 w-4" /> PDF
                  </button>
                </div>
              </div>

              {/* Print-only full report */}
              <div className="hidden print:block">
                <h1 className="mb-2 text-2xl font-bold">SEO Audit Report</h1>
                <p className="mb-6 text-sm text-gray-500">
                  Site: {url} · Score: {auditResult.overallScore}/100 ·{" "}
                  {new Date().toLocaleDateString()}
                </p>
                {auditResult.pages.map((page, i) => (
                  <div key={i} className="print-page mb-8 border-t pt-6">
                    <p className="text-xs text-gray-400">{page.url}</p>
                    <h2 className="mb-1 text-lg font-semibold">{page.title ?? "(no title)"}</h2>
                    <p className="mb-3 text-sm font-bold">Score: {page.score}/100 · {page.wordCount} words</p>
                    {page.issues.length === 0 ? (
                      <p className="text-sm text-green-700">✓ No issues found.</p>
                    ) : (
                      <ul className="space-y-1">
                        {page.issues.map((issue, j) => (
                          <li key={j} className="text-sm">
                            <span className="font-semibold capitalize">[{issue.severity}]</span>{" "}
                            {issue.field}: {issue.message}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <RecommendationsPanel audit={auditResult} />

              {/* Per-page breakdown */}
              <div className="grid gap-4 lg:grid-cols-[18rem_1fr]">
                <nav className="flex flex-col gap-1">
                  {auditResult.pages.map((p, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setAuditPageIdx(i)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                        auditPageIdx === i
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-secondary text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      <span className={`shrink-0 text-base font-bold ${auditPageIdx === i ? "text-accent-foreground" : scoreColor(p.score)}`}>
                        {p.score}
                      </span>
                      <span>
                        <span className="block truncate font-medium">
                          {p.title || p.url.replace(/^https?:\/\/[^/]+/, "") || "/"}
                        </span>
                        <span className="block truncate text-xs opacity-70">{p.url}</span>
                      </span>
                    </button>
                  ))}
                </nav>

                {auditResult.pages[auditPageIdx] && (() => {
                  const page = auditResult.pages[auditPageIdx];
                  return (
                    <div className="space-y-4">
                      <div className={`flex items-center gap-4 rounded-2xl border p-5 ${scoreBg(page.score)}`}>
                        <ScoreRing score={page.score} />
                        <div>
                          <p className="font-semibold">{page.title ?? "(no title)"}</p>
                          <a href={page.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
                            {page.url} <ArrowUpRight className="h-3 w-3" />
                          </a>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {page.wordCount} words · {page.issues.length} issue{page.issues.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                      {page.issues.length === 0 ? (
                        <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-5 text-sm text-green-700">
                          ✓ No issues found on this page.
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {page.issues.map((issue, j) => (
                            <div key={j} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm">
                              <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${severityColor(issue.severity)}`}>
                                {issue.severity}
                              </span>
                              <div>
                                <span className="font-medium">{issue.field}: </span>
                                {issue.message}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="rounded-2xl border border-border bg-secondary/50 p-5 text-sm">
                        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Meta snapshot</p>
                        <dl className="grid gap-2 sm:grid-cols-2">
                          {[["Title", page.title ?? "—"], ["Description", page.description ?? "—"]].map(([k, v]) => (
                            <div key={k}>
                              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{k}</dt>
                              <dd className="mt-0.5 text-foreground/85">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* ── SCRAPE RESULT ── */}
          {status === "done" && scrapeResult && (
            <div className="space-y-6">
              {scrapeResult.metadata && (
                <div className="rounded-2xl border border-border bg-secondary/50 p-6">
                  <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Page metadata</h2>
                  <dl className="grid gap-2 text-sm sm:grid-cols-2">
                    {[
                      ["Title", scrapeResult.metadata.title],
                      ["Description", scrapeResult.metadata.description],
                      ["OG title", (scrapeResult.metadata as any).ogTitle],
                      ["Language", (scrapeResult.metadata as any).language],
                      ["Status", scrapeResult.metadata.statusCode],
                      ["Canonical", (scrapeResult.metadata as any).canonicalUrl],
                    ].filter(([, v]) => v).map(([k, v]) => (
                      <div key={String(k)}>
                        <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{k}</dt>
                        <dd className="mt-0.5 text-foreground/85">{String(v)}</dd>
                      </div>
                    ))}
                  </dl>
                  {(scrapeResult.metadata as any).sourceURL && (
                    <a href={(scrapeResult.metadata as any).sourceURL} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs text-accent hover:underline">
                      Open source URL <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
              {scrapeResult.markdown && (
                <div className="rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
                  <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Extracted content (markdown)</h2>
                  <div className="prose prose-sm prose-neutral max-w-none">
                    <ReactMarkdown>{scrapeResult.markdown}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── CRAWL RESULT ── */}
          {status === "done" && crawlResult && !auditResult && (
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground">
                {crawlPages.length} page{crawlPages.length !== 1 ? "s" : ""} crawled
              </p>
              <div className="grid gap-4 lg:grid-cols-[18rem_1fr]">
                <nav className="flex flex-col gap-1">
                  {crawlPages.map((p, i) => (
                    <button key={i} type="button" onClick={() => setActivePageIdx(i)}
                      className={`rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                        activePageIdx === i ? "bg-accent text-accent-foreground" : "hover:bg-secondary text-foreground/70 hover:text-foreground"
                      }`}>
                      <span className="block truncate font-medium">
                        {p.metadata?.title || p.url.replace(/^https?:\/\/[^/]+/, "") || "/"}
                      </span>
                      <span className="block truncate text-xs opacity-70">{p.url}</span>
                    </button>
                  ))}
                </nav>
                {crawlPages[activePageIdx] && (
                  <div className="rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
                    <a href={crawlPages[activePageIdx].url} target="_blank" rel="noopener noreferrer"
                      className="mb-6 inline-flex items-center gap-1.5 text-xs text-accent hover:underline">
                      {crawlPages[activePageIdx].url} <ArrowUpRight className="h-3 w-3" />
                    </a>
                    <div className="prose prose-sm prose-neutral max-w-none">
                      <ReactMarkdown>
                        {crawlPages[activePageIdx].markdown ?? "_No content extracted._"}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
