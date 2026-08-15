// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const TOPICS = [
  "New Project Inquiry",
  "Renovation",
  "Career Opportunity",
  "Press / Media",
  "General Question",
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554z" />
    </svg>
  );
}

const SOCIALS = [
  {
    icon: InstagramIcon,
    href: "https://instagram.com/troisassociates",
    label: "Instagram",
  },
  { icon: XIcon, href: "https://x.com/troisassociates", label: "X" },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/company/troisassociates",
    label: "LinkedIn",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to Supabase / API route
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  }

  return (
    <main className="bg-[#0E1A2A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-24 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-6"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif text-4xl md:text-6xl leading-[1.1] text-white mb-6"
          >
            Let's talk about
            <br className="hidden md:block" /> your project
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Whether you're planning a new build, a renovation, or just have a
            question — reach out and our team will get back to you within one
            business day.
          </motion.p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: contact details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-4"
          >
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-6">
              Contact Details
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {/* Location */}
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-md border border-[#D9A441]/40 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#D9A441]" />
                </span>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-1">
                    Location
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=%231%2C+El-Shaddai+Avenue%2C+Opp+Iye-Oma+Plaza%2C+Alagbaka+GRA%2C+Akure%2C+Ondo+State"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm leading-relaxed hover:text-[#D9A441] transition-colors duration-300"
                  >
                    #1, El-Shaddai Avenue, Opp Iye-Oma Plaza
                    <br />
                    Alagbaka GRA, Akure, Ondo State
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-md border border-[#D9A441]/40 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#D9A441]" />
                </span>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@troisassociates.com"
                    className="text-white text-sm hover:text-[#D9A441] transition-colors duration-300"
                  >
                    info@troisassociates.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-md border border-[#D9A441]/40 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#D9A441]" />
                </span>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+2348033942200"
                    className="block text-white text-sm hover:text-[#D9A441] transition-colors duration-300"
                  >
                    +234 803 394 2200
                  </a>
                  <a
                    href="tel:+2348050955295"
                    className="block text-white text-sm hover:text-[#D9A441] transition-colors duration-300"
                  >
                    +234 805 095 5295
                  </a>
                </div>
              </div>
            </div>

            <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40 mb-4">
              Follow Us
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-md border border-white/15 flex items-center justify-center text-white/60 hover:border-[#D9A441] hover:text-[#D9A441] transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="md:col-span-8"
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-sm p-10 text-center">
                <p className="font-serif text-2xl text-white mb-3">
                  Message sent.
                </p>
                <p className="text-white/60 text-sm">
                  Thanks for reaching out — we'll be in touch within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#D9A441] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#D9A441] transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">
                    Company{" "}
                    <span className="text-white/30 normal-case">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company or organisation"
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#D9A441] transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">
                    What are you reaching out about? *
                  </label>
                  <select
                    name="topic"
                    required
                    value={form.topic}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-[#D9A441] transition-colors duration-300"
                  >
                    <option value="" className="bg-[#0E1A2A]">
                      Select a topic
                    </option>
                    {TOPICS.map((topic) => (
                      <option
                        key={topic}
                        value={topic}
                        className="bg-[#0E1A2A]"
                      >
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you have in mind..."
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#D9A441] transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start inline-flex items-center gap-3 bg-[#D9A441] text-[#0E1A2A] font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-transform duration-300 hover:scale-[1.03] hover:bg-[#e5b158]"
                >
                  Send Message
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
