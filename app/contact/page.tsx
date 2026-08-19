// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.15 + i * 0.07,
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

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Location",
    content: (
      < a
        href="https://www.google.com/maps/search/?api=1&query=%231%2C+El-Shaddai+Avenue%2C+Opp+Iye-Oma+Plaza%2C+Alagbaka+GRA%2C+Akure%2C+Ondo+State"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-sm leading-relaxed hover:text-[#D9A441] transition-colors duration-300"
      >
        #1, El-Shaddai Avenue, Opp Iye-Oma Plaza
        <br />
        Alagbaka GRA, Akure, Ondo State
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      < a
        href="mailto:info@troisassociates.com"
        className="text-white text-sm hover:text-[#D9A441] transition-colors duration-300"
      >
        info@troisassociates.com
      </a>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    content: (
      <>
        < a 
          href="tel:+2348033942200"
          className="block text-white text-sm hover:text-[#D9A441] transition-colors duration-300"
        >
          +234 803 394 2200
        </a>
        < a 
          href="tel:+2348050955295"
          className="block text-white text-sm hover:text-[#D9A441] transition-colors duration-300"
        >
          +234 805 095 5295
        </a>
      </>
    ),
  },
];

type FieldName = "name" | "email" | "company" | "topic" | "message";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });
  const [focused, setFocused] = useState<FieldName | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ): void {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire up to Supabase / API route
    console.log("Contact form submitted:", form);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  const fieldWrap = (name: FieldName) =>
    `w-full bg-white/5 border rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors duration-300 ${
      focused === name ? "border-[#D9A441]" : "border-white/15"
    }`;

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

        {/* corner registration marks — shared site motif */}
        <RegistrationMark className="left-6 top-6" custom={0} />
        <RegistrationMark className="right-6 top-6 rotate-90" custom={1} />

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
              {CONTACT_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-start gap-4"
                >
                  <span className="shrink-0 w-10 h-10 rounded-md border border-[#D9A441]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#D9A441] group-hover:bg-[#D9A441]/10 group-hover:scale-105">
                    <item.icon className="w-4 h-4 text-[#D9A441]" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-1">
                      {item.label}
                    </p>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40 mb-4">
              Follow Us
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-md border border-white/15 flex items-center justify-center text-white/60 hover:border-[#D9A441] hover:text-[#D9A441] transition-colors duration-300"
                >
                  <Icon />
                </motion.a>
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
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/5 border border-white/10 rounded-sm p-10 md:p-14 text-center"
                >
                  <motion.svg
                    viewBox="0 0 52 52"
                    className="w-14 h-14 mx-auto mb-6"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="24"
                      fill="none"
                      stroke="#D9A441"
                      strokeWidth="1.5"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                          pathLength: 1,
                          opacity: 1,
                          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    />
                    <motion.path
                      d="M15 27 L22 34 L37 18"
                      fill="none"
                      stroke="#D9A441"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      variants={{
                        hidden: { pathLength: 0 },
                        visible: {
                          pathLength: 1,
                          transition: { duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    />
                  </motion.svg>
                  <p className="font-serif text-2xl text-white mb-3">
                    Message sent.
                  </p>
                  <p className="text-white/60 text-sm">
                    Thanks for reaching out — we'll be in touch within one
                    business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div initial="hidden" animate="visible" custom={0} variants={fieldVariants}>
                      <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        placeholder="Your full name"
                        className={fieldWrap("name")}
                      />
                    </motion.div>
                    <motion.div initial="hidden" animate="visible" custom={1} variants={fieldVariants}>
                      <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="you@example.com"
                        className={fieldWrap("email")}
                      />
                    </motion.div>
                  </div>

                  <motion.div initial="hidden" animate="visible" custom={2} variants={fieldVariants}>
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
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      placeholder="Your company or organisation"
                      className={fieldWrap("company")}
                    />
                  </motion.div>

                  <motion.div initial="hidden" animate="visible" custom={3} variants={fieldVariants}>
                    <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">
                      What are you reaching out about? *
                    </label>
                    <select
                      name="topic"
                      required
                      value={form.topic}
                      onChange={handleChange}
                      onFocus={() => setFocused("topic")}
                      onBlur={() => setFocused(null)}
                      className={`${fieldWrap("topic")} text-white/80`}
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
                  </motion.div>

                  <motion.div initial="hidden" animate="visible" custom={4} variants={fieldVariants}>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-white/50">
                        Message *
                      </label>
                      <span className="font-mono text-[10px] text-white/30">
                        {form.message.length}/600
                      </span>
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      maxLength={600}
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell us what you have in mind..."
                      className={`${fieldWrap("message")} resize-none`}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    initial="hidden"
                    animate="visible"
                    custom={5}
                    variants={fieldVariants}
                    whileHover={{ scale: submitting ? 1 : 1.03 }}
                    whileTap={{ scale: submitting ? 1 : 0.98 }}
                    className="self-start inline-flex items-center gap-3 bg-[#D9A441] text-[#0E1A2A] font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-colors duration-300 hover:bg-[#e5b158] disabled:opacity-70 disabled:cursor-wait"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {submitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3"
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="w-3.5 h-3.5 border-[1.5px] border-[#0E1A2A]/30 border-t-[#0E1A2A] rounded-full"
                          />
                          Sending
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3"
                        >
                          Send Message
                          <span aria-hidden="true">→</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function RegistrationMark({ className, custom }: { className?: string; custom?: number }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.7, delay: 0.15 + (custom ?? 0) * 0.08, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <svg
      viewBox="0 0 32 32"
      className={`absolute z-10 h-6 w-6 text-white/40 ${className ?? ""}`}
      aria-hidden="true"
    >
      <motion.path d="M16 2 V12" stroke="currentColor" strokeWidth="1" initial="hidden" animate="visible" variants={draw} />
      <motion.path d="M2 16 H12" stroke="currentColor" strokeWidth="1" initial="hidden" animate="visible" variants={draw} />
      <motion.circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1" fill="none" initial="hidden" animate="visible" variants={draw} />
    </svg>
  );
}