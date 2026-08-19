// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const SOCIALS = [
  { icon: XIcon, href: "https://x.com/troisassociates", label: "X" },
  {
    icon: FacebookIcon,
    href: "https://facebook.com/troisassociates",
    label: "Facebook",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/troisassociates",
    label: "Instagram",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/company/troisassociates",
    label: "LinkedIn",
  },
];

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// const LEGAL_LINKS = [
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Terms & Conditions", href: "/terms" },
// ];

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative overflow-hidden bg-[#0E1A2A]">
      {/* faint blueprint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top block */}
      <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:items-center md:gap-8">
          {/* Left: tagline + CTA */}
          <div className="max-w-[340px]">
            <p className="text-[15px] leading-[1.7] text-white/60">
              Building spaces that honor both form and function design and
              construction under one roof, across Nigeria.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2.5 rounded-sm bg-[#D9A441] px-6 py-3.5 font-[family-name:var(--font-mono)] text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0E1A2A] transition-colors duration-300 hover:bg-[#e5b158]"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Center: logo */}
          <div className="flex justify-center md:justify-center">
            <Image
              src="/logo.png"
              alt="Trois Associates"
              width={220}
              height={90}
              className="h-16 w-auto md:h-20"
            />
          </div>

          {/* Right: contact details + socials */}
          <div className="flex flex-col items-start gap-4">
            <a
              href="mailto:info@troisassociates.com"
              className="group flex items-center gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/15 text-white/60 transition-colors duration-300 group-hover:border-[#D9A441] group-hover:text-[#D9A441]">
                <Mail className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col text-[14px] text-white/70 transition-colors duration-300 group-hover:text-[#D9A441]">
                <span>info@troisassociates.com</span>
                <span>info@troisassociates-ng.com</span>
              </span>
            </a>

            <a
              href="tel:+2348033942200"
              className="group flex items-center gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/15 text-white/60 transition-colors duration-300 group-hover:border-[#D9A441] group-hover:text-[#D9A441]">
                <Phone className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="text-[14px] text-white/70 transition-colors duration-300 group-hover:text-[#D9A441]">
                +234 803 394 2200
              </span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=%231%2C+El-Shaddai+Avenue%2C+Opp+Iye-Oma+Plaza%2C+Alagbaka+GRA%2C+Akure%2C+Ondo+State"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/15 text-white/60 transition-colors duration-300 group-hover:border-[#D9A441] group-hover:text-[#D9A441]">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="text-left text-[14px] leading-[1.5] text-white/70 transition-colors duration-300 group-hover:text-[#D9A441]">
                #1, El-Shaddai Avenue, Opp Iye-Oma
                <br />
                Plaza, Alagbaka GRA, Akure
              </span>
            </a>

            {/* Socials */}
            <div className="mt-2 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/50 transition-colors duration-300 hover:border-[#D9A441] hover:text-[#D9A441]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between md:px-10">
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-white/35">
            © {new Date().getFullYear()} Trois Associates
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-white/50 transition-colors duration-300 hover:text-[#D9A441]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554z" />
    </svg>
  );
}
