import { useEffect, useRef, useState } from "react";

/**
 * Rotating asterisk that pauses its CSS animation when off-screen
 * to reduce GPU/battery usage on long pages.
 */
export function RotatingAsterisk({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "80px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`inline-block spin-slow leading-none ${className}`}
      style={{ animationPlayState: visible ? "running" : "paused" }}
    >
      ✱
    </span>
  );
}
