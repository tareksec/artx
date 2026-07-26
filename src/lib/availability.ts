// Rolling availability badge — always shows the next open quarter based on
// the current date, so it never goes stale.
export function nextAvailableQuarter(now: Date = new Date()): string {
  const month = now.getMonth(); // 0-11
  const year = now.getFullYear();
  const currentQuarter = Math.floor(month / 3) + 1; // 1..4
  const nextQuarter = currentQuarter === 4 ? 1 : currentQuarter + 1;
  const nextYear = currentQuarter === 4 ? year + 1 : year;
  return `Q${nextQuarter} · ${nextYear}`;
}
