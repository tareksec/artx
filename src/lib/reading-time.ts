const WORDS_PER_MINUTE = 200;

/** Estimates reading time (in whole minutes, minimum 1) for a set of text fields. */
export function estimateReadingTime(...parts: string[]): number {
  const words = parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

const VIEW_STORAGE_KEY = "artx_case_study_views";

type ViewLog = Record<string, number>;

function readViews(): ViewLog {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(VIEW_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ViewLog) : {};
  } catch {
    return {};
  }
}

function writeViews(log: ViewLog) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify(log));
  } catch {
    // Storage unavailable — view counts are a nice-to-have, fail silently.
  }
}

/**
 * Increments and returns the locally-tracked view count for a case study.
 * Counts are per-browser (localStorage), not global analytics.
 */
export function recordCaseStudyView(id: string): number {
  const log = readViews();
  log[id] = (log[id] ?? 0) + 1;
  writeViews(log);
  return log[id];
}
