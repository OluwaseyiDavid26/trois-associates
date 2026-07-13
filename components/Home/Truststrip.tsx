"use client";

import { useEffect, useRef, useState } from "react";
import { Fraunces, JetBrains_Mono } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// TODO: swap these for real figures
const STATS = [
  { num: "01", value: 15, suffix: "+", label: "Years in operation" },
  { num: "02", value: 120, suffix: "+", label: "Projects completed" },
  { num: "03", value: 40, suffix: "+", label: "Clients served" },
  {
    num: "04",
    value: 3,
    suffix: "",
    label: "Sectors: residential, commercial, civil",
  },
];

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${display.variable} ${mono.variable} border-b border-[#E7EAEE] bg-white`}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.num}
            className={`border-[#E7EAEE] px-6 py-14 md:px-8 ${
              i % 2 === 0 ? "border-r" : "md:border-r"
            } ${i < STATS.length - (STATS.length % 2 === 0 ? 2 : 1) ? "border-b md:border-b-0" : ""} ${
              i === STATS.length - 1 ? "md:border-r-0" : ""
            }`}
          >
            <div className="mb-3 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[#D9A441]">
              {s.num}
            </div>
            <div className="mb-2 font-[family-name:var(--font-display)] text-[36px] font-semibold leading-none text-[#0E2A4A] md:text-[44px]">
              <Counter target={s.value} play={inView} />
              {s.suffix}
            </div>
            <div className="text-[13px] leading-snug text-[#5B6472]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ target, play }: { target: number; play: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!play) return;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [play, target]);

  return <>{value}</>;
}
