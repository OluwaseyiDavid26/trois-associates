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

const REASONS = [
  {
    num: "01",
    title: "We are passionate",
    body: "We have a proven record of accomplishment and are a reputable company in Nigeria. We ensure that all projects are done with the utmost professionalism, using quality materials while offering clients the support and accessibility they deserve.",
  },
  {
    num: "02",
    title: "Honest and dependable",
    body: "For us, honesty is the only policy, and we strive to complete every project with integrity — not just with our clients, but with our suppliers and contractors too. With hundreds of successful projects under our belt, we're one of the most trusted construction companies in the region.",
  },
  {
    num: "03",
    title: "We are always improving",
    body: "We commit ourselves to completing every project within the timeline set with our clients. We use the best technology and tools to ensure jobs are done quickly, while still giving attention to detail and ensuring everything is done correctly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className={`${display.variable} ${mono.variable} mx-auto max-w-[1200px] px-6 py-24 md:px-10`}
    >
      <div className="mb-14 border-b border-[#E7EAEE] pb-6">
        <div className="mb-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#1F5FA8]">
          Why choose us
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-tight text-[#0E2A4A] md:text-[38px]">
          Reasons clients keep coming back
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        {REASONS.map((r, i) => (
          <div
            key={r.num}
            className={`px-0 py-8 md:px-8 md:py-0 ${
              i !== 0
                ? "border-t border-[#E7EAEE] md:border-t-0 md:border-l"
                : ""
            }`}
          >
            <div className="mb-4 font-[family-name:var(--font-mono)] text-[13px] tracking-[0.1em] text-[#D9A441]">
              {r.num}
            </div>
            <h3 className="mb-3 font-[family-name:var(--font-display)] text-[19px] font-semibold text-[#0E2A4A]">
              {r.title}
            </h3>
            <p className="text-[14px] leading-[1.7] text-[#5B6472]">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
