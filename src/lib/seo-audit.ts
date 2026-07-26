export type IssueSeverity = "critical" | "warning" | "info";

export type Issue = {
  severity: IssueSeverity;
  field: string;
  message: string;
};

export type PageAudit = {
  url: string;
  title: string | null;
  description: string | null;
  wordCount: number;
  score: number;
  issues: Issue[];
};

export type SiteAudit = {
  pages: PageAudit[];
  overallScore: number;
  totalIssues: { critical: number; warning: number; info: number };
};

const DEDUCTIONS: Record<IssueSeverity, number> = {
  critical: 25,
  warning: 10,
  info: 2,
};

function countWords(markdown: string | null): number {
  if (!markdown) return 0;
  return markdown.trim().split(/\s+/).filter(Boolean).length;
}

function hasH1(markdown: string | null): boolean {
  if (!markdown) return false;
  return /^#\s+.+/m.test(markdown);
}

function auditPage(
  page: { url: string; markdown: string | null; metadata: any },
  allTitles: string[],
  allDescriptions: string[],
): PageAudit {
  const issues: Issue[] = [];
  const title: string | null = page.metadata?.title ?? null;
  const description: string | null = page.metadata?.description ?? null;
  const wordCount = countWords(page.markdown);

  if (!title) {
    issues.push({ severity: "critical", field: "Title", message: "Missing <title> tag." });
  } else if (title.length < 30) {
    issues.push({ severity: "warning", field: "Title", message: `Title too short (${title.length} chars). Aim for 30–60.` });
  } else if (title.length > 60) {
    issues.push({ severity: "warning", field: "Title", message: `Title too long (${title.length} chars). Keep under 60.` });
  }

  if (!description) {
    issues.push({ severity: "critical", field: "Meta description", message: "Missing meta description." });
  } else if (description.length < 70) {
    issues.push({ severity: "warning", field: "Meta description", message: `Description too short (${description.length} chars). Aim for 70–160.` });
  } else if (description.length > 160) {
    issues.push({ severity: "warning", field: "Meta description", message: `Description too long (${description.length} chars). Keep under 160.` });
  }

  if (wordCount === 0) {
    issues.push({ severity: "critical", field: "Content", message: "No content extracted from this page." });
  } else if (wordCount < 100) {
    issues.push({ severity: "critical", field: "Content", message: `Thin content — only ${wordCount} words. Search engines may treat this as low-quality.` });
  } else if (wordCount < 300) {
    issues.push({ severity: "warning", field: "Content", message: `Sparse content — ${wordCount} words. Consider expanding to 300+.` });
  }

  if (!hasH1(page.markdown)) {
    issues.push({ severity: "warning", field: "H1", message: "No H1 heading detected on this page." });
  }

  if (title) {
    const dupes = allTitles.filter((t) => t === title);
    if (dupes.length > 1) {
      issues.push({ severity: "warning", field: "Title", message: "Duplicate title shared with another page." });
    }
  }

  if (description) {
    const dupes = allDescriptions.filter((d) => d === description);
    if (dupes.length > 1) {
      issues.push({ severity: "warning", field: "Meta description", message: "Duplicate description shared with another page." });
    }
  }

  const score = Math.max(
    0,
    100 - issues.reduce((sum, i) => sum + DEDUCTIONS[i.severity], 0),
  );

  return { url: page.url, title, description, wordCount, score, issues };
}

export function runSiteAudit(
  pages: Array<{ url: string; markdown: string | null; metadata: any }>,
): SiteAudit {
  const allTitles = pages.map((p) => p.metadata?.title ?? "").filter(Boolean);
  const allDescriptions = pages.map((p) => p.metadata?.description ?? "").filter(Boolean);

  const audited = pages.map((p) => auditPage(p, allTitles, allDescriptions));

  const totals = audited.reduce(
    (acc, p) => {
      p.issues.forEach((i) => acc[i.severity]++);
      return acc;
    },
    { critical: 0, warning: 0, info: 0 },
  );

  const overallScore =
    audited.length > 0
      ? Math.round(audited.reduce((s, p) => s + p.score, 0) / audited.length)
      : 0;

  return { pages: audited, overallScore, totalIssues: totals };
}

export function scoreColor(score: number): string {
  if (score >= 80) return "text-green-600";
  if (score >= 50) return "text-yellow-600";
  return "text-red-600";
}

export function scoreBg(score: number): string {
  if (score >= 80) return "bg-green-50 border-green-200";
  if (score >= 50) return "bg-yellow-50 border-yellow-200";
  return "bg-red-50 border-red-200";
}

export function severityColor(s: IssueSeverity): string {
  if (s === "critical") return "text-red-600 bg-red-50";
  if (s === "warning") return "text-yellow-700 bg-yellow-50";
  return "text-blue-600 bg-blue-50";
}
