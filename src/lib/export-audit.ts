import type { SiteAudit } from "./seo-audit";

function escapeCell(value: string | number | null | undefined): string {
  const str = String(value ?? "");
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Downloads the audit results as a CSV file.
 */
export function downloadAuditCsv(audit: SiteAudit, siteUrl: string) {
  const rows: string[][] = [
    ["URL", "Score", "Title", "Description", "Word Count", "Issues"],
  ];

  for (const page of audit.pages) {
    const issuesSummary = page.issues
      .map((i) => `[${i.severity.toUpperCase()}] ${i.field}: ${i.message}`)
      .join(" | ");
    rows.push([
      page.url,
      String(page.score),
      page.title ?? "",
      page.description ?? "",
      String(page.wordCount),
      issuesSummary,
    ]);
  }

  // Summary row
  rows.push([]);
  rows.push(["OVERALL SCORE", String(audit.overallScore), "", "", "", ""]);
  rows.push(["Critical issues", String(audit.totalIssues.critical), "", "", "", ""]);
  rows.push(["Warning issues", String(audit.totalIssues.warning), "", "", "", ""]);

  const csv = rows.map((r) => r.map(escapeCell).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);

  const domain = (() => {
    try { return new URL(siteUrl).hostname; } catch { return "site"; }
  })();
  const date = new Date().toISOString().slice(0, 10);
  link.download = `seo-audit-${domain}-${date}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

/**
 * Opens a print dialog — the browser renders to PDF.
 * Call after injecting print-only styles via the <style id="print-audit"> tag
 * already in the DOM (handled in the component).
 */
export function printAuditPdf() {
  window.print();
}
