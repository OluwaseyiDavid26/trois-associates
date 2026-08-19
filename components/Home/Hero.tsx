

"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Lightbulb, Cog, Box } from "lucide-react";

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

const SLIDES = [
  {
    num: "01",
    eyebrow: "Our strategy",
    title: "The best strategy to project development",
    body: "To develop creative solutions to meet and exceed our clients expectations.",
    image: "/hero-1.jpg",
  },
  {
    num: "02",
    eyebrow: "We take care of everything",
    title: "Construction management",
    body: "We provide overall planning, coordination and control of a project, so you don't have to worry about anything.",
    image: "/hero-2.jpg",
  },
  {
    num: "03",
    eyebrow: "Satisfaction guaranteed",
    title: "Relationships that last",
    body: "Our promise as a contractor is to build community value into every project while delivering professional expertise.",
    image: "/hero-3.jpg",
  },
  {
    num: "04",
    eyebrow: "Project approach",
    title: "Project design and construction",
    body: "Our design philosophy is to provide quality, on-time and within-budget proposals — achieved through strong communication with the client, the user, and the total project design and construction staff.",
    image: "/hero-4.jpg",
  },
];

const CAPABILITIES = [
  { icon: Lightbulb, label: "Electrical" },
  { icon: Cog, label: "Mechanical" },
  { icon: Box, label: "Civil" },
];

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, active, paused, reducedMotion]);

  const slide = SLIDES[active];

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className={`${display.variable} ${mono.variable} relative h-[640px] w-full overflow-hidden bg-[#0E1A2A]`}
    >
      {/* sr-only live region so screen readers announce slide changes */}
      <p className="sr-only" role="status" aria-live="polite">
        {slide.eyebrow}: {slide.title}
      </p>

      {/* background images, crossfade */}
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* bottom-left gradient wedge only — keeps most of the photo visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(10,18,30,0.94) 0%, rgba(10,18,30,0.55) 30%, rgba(10,18,30,0) 55%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,18,30,0.55) 0%, rgba(10,18,30,0) 42%)",
        }}
      />

      {/* corner registration marks — architectural drafting motif */}
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />
      <RegistrationMark className="right-6 bottom-6 rotate-180" />
      <RegistrationMark className="left-6 bottom-6 -rotate-90" />

      {/* ghost numeral watermark */}
      <span
        key={slide.num}
        className="pointer-events-none absolute bottom-[-0.06em] left-6 select-none font-[family-name:var(--font-display)] text-[280px] leading-none font-normal text-white/[0.05] animate-[fadeIn_0.7s_ease]"
        aria-hidden="true"
      >
        {slide.num}
      </span>

      {/* top-right: supporting copy + capability icons */}
      <div className="absolute right-6 top-28 z-10 hidden max-w-[340px] text-right md:block md:right-10 md:top-32">
        <p className="mb-5 font-[family-name:var(--font-mono)] text-[13px] leading-[1.7] text-white/75">
          We specialize in electrical, mechanical, and civil engineering,
          delivering top-quality designs, installations, and construction.
        </p>
        <div className="flex items-center justify-end gap-3">
          {CAPABILITIES.map(({ icon: Icon, label }) => (
            <span
              key={label}
              title={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors duration-300 hover:border-[#D9A441] hover:text-[#D9A441]"
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
          ))}
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-24 md:px-10">
        <div className="max-w-[600px]">
          <div className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
            <span className="text-white/40">{slide.num} /</span>
            {slide.eyebrow}
          </div>
          <h1 className="mb-5 font-[family-name:var(--font-display)] text-[38px] font-semibold leading-[1.15] text-white md:text-[46px]">
            {slide.title}
          </h1>
          <p className="max-w-[460px] text-[15px] leading-[1.7] text-white/70">
            {slide.body}
          </p>
        </div>
      </div>

      {/* dot rail — mobile only, replaces the tick-rail as the sole way to
          navigate slides on small screens (previously missing entirely) */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:hidden">
        {SLIDES.map((s, i) => (
          <button
            key={s.num}
            onClick={() => setActive(i)}
            aria-label={`Go to ${s.eyebrow}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1A2A] ${
              i === active ? "w-6 bg-[#D9A441]" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function RegistrationMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`absolute z-10 h-6 w-6 text-white/40 ${className ?? ""}`}
      aria-hidden="true"
    >
      <path d="M16 2 V12" stroke="currentColor" strokeWidth="1" />
      <path d="M2 16 H12" stroke="currentColor" strokeWidth="1" />
      <circle
        cx="16"
        cy="16"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
