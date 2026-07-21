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

export default function WhoWeAre() {
  return (
    <section
      className={`${display.variable} ${mono.variable} mx-auto max-w-[1200px] px-6 py-24 md:px-10`}
    >
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        {/* left: copy */}
        <div>
          <div className="mb-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#1F5FA8]">
            Who we are
          </div>
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-[32px] font-semibold leading-tight text-[#0E2A4A] md:text-[38px]">
            Built on the ground, in Akure
          </h2>
          {/* TODO: placeholder — replace with the client's real company history / founding story */}
          <p className="mb-4 text-[14.5px] leading-[1.75] text-[#5B6472]">
            Trois Associates is a construction and civil engineering company
            based in Akure, Ondo State, delivering design, build and management
            services across residential, commercial and civil projects.
          </p>
          <p className="text-[14.5px] leading-[1.75] text-[#5B6472]">
            From site excavation to the finished structure, our team stays
            hands-on through every phase — bringing the same standard of craft
            to a family home as we do to a large-scale development.
          </p>
        </div>

        {/* right: staggered duotone images */}
        <div className="relative">
          <div className="relative h-[280px] w-[85%] overflow-hidden">
            <Image
              src="/who-we-are-1.jpg"
              alt="Heavy equipment on site"
              fill
              className="object-cover grayscale-[35%] contrast-[1.05]"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(14,42,74,0.38)",
                mixBlendMode: "multiply",
              }}
            />
            <span className="absolute right-3 top-3 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em] text-white/80">
              01
            </span>
          </div>

          <div className="relative -mt-16 ml-[15%] h-[260px] w-[85%] overflow-hidden border-4 border-white shadow-[0_12px_30px_rgba(14,42,74,0.15)]">
            <Image
              src="/who-we-are-2.jpg"
              alt="Completed building"
              fill
              className="object-cover grayscale-[35%] contrast-[1.05]"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(14,42,74,0.38)",
                mixBlendMode: "multiply",
              }}
            />
            <span className="absolute right-3 top-3 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em] text-white/80">
              02
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
