"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-[#E7EAEE] transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_12px_rgba(14,42,74,0.06)]" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="Trois Associates"
            width={280}
            height={70}
            className="h-10 md:h-12 w-auto"
            priority
          />
          {/* <div className="leading-tight">
            <span className="block text-[19px] font-bold tracking-tight text-[#0E2A4A]">
              TROIS ASSOCIATES
            </span>
            <span className="block text-[9px] font-medium tracking-[0.16em] text-[#6B7686] mt-0.5">
              ARCHITECTURE &amp; CONSTRUCTION
            </span>
          </div> */}
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#3D4652] hover:text-[#1F5FA8] transition-colors"
            >
              {link.label}
              <span
                className="pointer-events-none absolute left-1/2 bottom-1 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                  width: 16,
                  height: 7,
                  backgroundColor: "#1F5FA8",
                  clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
                }}
              />
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-3 px-5 py-2.5 rounded-[3px] bg-[#0E2A4A] text-white text-[12.5px] font-semibold uppercase tracking-[0.05em] hover:bg-[#1F5FA8] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
