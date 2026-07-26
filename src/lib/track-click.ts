const STORAGE_KEY = "artx_link_clicks";

type ClickLog = Record<string, { count: number; lastClicked: string }>;

function readLog(): ClickLog {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ClickLog) : {};
  } catch {
    return {};
  }
}

function writeLog(log: ClickLog) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
  } catch {
    // Storage may be unavailable (private browsing, quota). Fail silently —
    // click tracking is a nice-to-have, not critical path.
  }
}

/**
 * Records an outbound link click locally (localStorage) so click counts can
 * be reviewed later via `getClickStats()`. This is intentionally lightweight
 * and has no external dependency — swap the body for a real analytics call
 * (e.g. gtag, Plausible) once one is wired up.
 */
export function trackOutboundClick(label: string) {
  const log = readLog();
  const existing = log[label];
  log[label] = {
    count: (existing?.count ?? 0) + 1,
    lastClicked: new Date().toISOString(),
  };
  writeLog(log);
}

/** Returns click counts recorded via `trackOutboundClick`, most-clicked first. */
export function getClickStats() {
  const log = readLog();
  return Object.entries(log)
    .map(([label, data]) => ({ label, ...data }))
    .sort((a, b) => b.count - a.count);
}
