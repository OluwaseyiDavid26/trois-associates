"use client";

import Image from "next/image";
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

const SERVICES = [
  {
    num: "01",
    title: "Design and build",
    body: "We aim to eliminate the task of dividing your project between different architecture and construction companies. We offer design and build services from initial sketches to final construction.",
    image: "/services-1.jpg",
    featured: true,
  },
  {
    num: "02",
    title: "Building construction",
    body: "We offer commitment at all levels of a building project, from project design to handing over.",
    image: "/services-2.jpg",
  },
  {
    num: "03",
    title: "Civil engineering",
    body: "Our full remodelling services include plumbing, electrical and structural work.",
    image: "/services-3.jpg",
  },
  {
    num: "04",
    title: "General contractor",
    body: "We deliver construction management services that bring a finished project in on schedule and within the original budget.",
    image: "/services-4.jpg",
  },
  {
    num: "05",
    title: "Merchant and real estate development",
    body: "Attention to detail and skill that allow for controlled project delivery.",
    image: "/services-5.jpg",
  },
];

export default function Services() {
  const [featured, ...rest] = SERVICES;

  return (
    <section
      className={`${display.variable} ${mono.variable} mx-auto max-w-[1200px] px-6 py-24 md:px-10`}
    >
      <div className="mb-14 flex items-end justify-between border-b border-[#E7EAEE] pb-6">
        <div>
          <div className="mb-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#1F5FA8]">
            What we do
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-tight text-[#0E2A4A] md:text-[38px]">
            Services built on process, not guesswork
          </h2>
        </div>
        <span className="hidden font-[family-name:var(--font-mono)] text-[12px] text-[#8A93A0] md:block">
          {SERVICES.length.toString().padStart(2, "0")} disciplines
        </span>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {/* featured card */}
        <ServiceCard service={featured} large />

        {/* smaller grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {rest.map((s) => (
            <ServiceCard key={s.num} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  large = false,
}: {
  service: (typeof SERVICES)[number];
  large?: boolean;
}) {
  return (
    <div
      className={`group relative border-b border-r border-[#E7EAEE] p-6 ${
        large ? "md:row-span-2 md:p-8" : ""
      }`}
    >
      <div
        className={`relative mb-5 overflow-hidden ${
          large ? "h-[280px] md:h-[360px]" : "h-[150px]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover grayscale-[35%] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(14,42,74,0.38)",
            mixBlendMode: "multiply",
          }}
        />
        <span className="absolute right-3 top-3 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em] text-white/80">
          {service.num}
        </span>
      </div>

      <h3
        className={`mb-2 font-[family-name:var(--font-display)] font-semibold text-[#0E2A4A] ${
          large ? "text-[24px]" : "text-[16px]"
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`leading-[1.65] text-[#5B6472] ${
          large ? "text-[14.5px] max-w-[420px]" : "text-[13px]"
        }`}
      >
        {service.body}
      </p>
    </div>
  );
}
