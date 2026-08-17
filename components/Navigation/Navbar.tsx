// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Our Services", href: "/services" },
//   { label: "Projects", href: "/projects" },
//   // { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-0 z-50 bg-white border-b border-[#E7EAEE] transition-shadow duration-200 ${
//         scrolled ? "shadow-[0_2px_12px_rgba(14,42,74,0.06)]" : ""
//       }`}
//     >
//       <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2.5 shrink-0">
//           <Image
//             src="/logo.png"
//             alt="Trois Associates"
//             width={280}
//             height={70}
//             className="h-10 md:h-12 w-auto"
//             priority
//           />

//         </Link>

//         {/* Nav links */}
//         <div className="flex items-center gap-1">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="group relative px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#3D4652] hover:text-[#1F5FA8] transition-colors"
//             >
//               {link.label}
//               <span
//                 className="pointer-events-none absolute left-1/2 bottom-1 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
//                 style={{
//                   width: 16,
//                   height: 7,
//                   backgroundColor: "#1F5FA8",
//                   clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
//                 }}
//               />
//             </Link>
//           ))}

//           <Link
//             href="/contact"
//             className="ml-3 px-5 py-2.5 rounded-[3px] bg-[#0E2A4A] text-white text-[12.5px] font-semibold uppercase tracking-[0.05em] hover:bg-[#1F5FA8] transition-colors"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Our Services", href: "/services" },
//   { label: "Projects", href: "/projects" },
//   // { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div className="fixed top-0 left-6 right-6 z-50 flex justify-center pointer-events-none">
//       <motion.nav
//         initial={false}
//         animate={{
//           width: scrolled ? "min(1000px, 92%)" : "100%",
//           marginTop: scrolled ? 14 : 0,
//           borderRadius: scrolled ? 999 : 0,
//           boxShadow: scrolled
//             ? "0 8px 30px rgba(14,42,74,0.12)"
//             : "0 1px 0 rgba(14,42,74,0)",
//         }}
//         transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//         className="pointer-events-auto bg-white border border-[#E7EAEE] overflow-hidden"
//       >
//         <div
//           className={`flex items-center justify-between transition-[padding] duration-400 ${
//             scrolled ? "px-6 py-2.5" : "px-6 md:px-10 py-4"
//           }`}
//         >
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2.5 shrink-0">
//             <Image
//               src="/logo.png"
//               alt="Trois Associates"
//               width={280}
//               height={70}
//               className={`w-auto transition-[height] duration-400 ${
//                 scrolled ? "h-8" : "h-10 md:h-12"
//               }`}
//               priority
//             />
//           </Link>

//           {/* Nav links */}
//           <div className="flex items-center gap-1">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="group relative px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#3D4652] hover:text-[#1F5FA8] transition-colors"
//               >
//                 {link.label}
//                 <span
//                   className="pointer-events-none absolute left-1/2 bottom-1 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
//                   style={{
//                     width: 16,
//                     height: 7,
//                     backgroundColor: "#1F5FA8",
//                     clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
//                   }}
//                 />
//               </Link>
//             ))}

//             <Link
//               href="/contact"
//               className="ml-3 px-5 py-2.5 rounded-[3px] bg-[#0E2A4A] text-white text-[12.5px] font-semibold uppercase tracking-[0.05em] hover:bg-[#1F5FA8] transition-colors"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Spacer so page content doesn't sit under the fixed nav */}
//       <div className="h-[72px] md:h-[80px]" />
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

// Dimension-line hover/active indicator — a nod to technical drawing
// tick marks, echoing the engineering-drafting world Trios works in.
function DimensionTick({ active }: { active: boolean }) {
  return (
    <span className="pointer-events-none absolute left-1/2 bottom-1.5 -translate-x-1/2 flex items-center">
      <motion.span
        initial={false}
        animate={{ scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center" }}
        className="relative h-[1.5px] w-6 bg-[#1F5FA8]"
      >
        <span className="absolute -left-[1px] -top-[2.5px] h-[6px] w-[1.5px] bg-[#1F5FA8]" />
        <span className="absolute -right-[1px] -top-[2.5px] h-[6px] w-[1.5px] bg-[#1F5FA8]" />
      </motion.span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? "min(1000px, 92%)" : "100%",
          marginTop: scrolled ? 14 : 0,
          borderRadius: scrolled ? 999 : 0,
          boxShadow: scrolled
            ? "0 8px 30px rgba(14,42,74,0.12)"
            : "0 1px 0 rgba(14,42,74,0)",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto bg-white border border-[#E7EAEE] overflow-hidden"
      >
        <div
          className={`flex items-center justify-between transition-[padding] duration-400 ${
            scrolled ? "px-6 py-2.5" : "px-6 md:px-10 py-4"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.png"
              alt="Trios Associates"
              width={280}
              height={70}
              className={`w-auto transition-[height] duration-400 ${
                scrolled ? "h-8" : "h-10 md:h-12"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              const isHovered = hovered === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(link.href)}
                  className={`group relative px-4 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                    isActive
                      ? "text-[#1F5FA8]"
                      : "text-[#3D4652] hover:text-[#1F5FA8]"
                  }`}
                >
                  {link.label}
                  <DimensionTick active={isActive || isHovered} />
                </Link>
              );
            })}

            <Link
              href="/contact"
              className={`ml-3 px-5 py-2.5 rounded-[3px] text-[12px] font-semibold uppercase tracking-[0.05em] transition-all duration-300 ${
                scrolled
                  ? "bg-[#0E2A4A] text-white hover:bg-[#1F5FA8]"
                  : "bg-transparent text-[#0E2A4A] border border-[#0E2A4A] hover:bg-[#0E2A4A] hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
              className="w-5 h-[1.5px] bg-[#0E2A4A] block"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="w-5 h-[1.5px] bg-[#0E2A4A] block"
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
              className="w-5 h-[1.5px] bg-[#0E2A4A] block"
            />
          </button>
        </div>

        {/* Mobile panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t border-[#E7EAEE] overflow-hidden"
            >
              <div className="flex flex-col px-6 py-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                      setMobileOpen(false);
                    }}
                    className={`py-3 text-[13px] font-semibold uppercase tracking-[0.06em] border-b border-[#F1F3F5] last:border-none ${
                      active === link.href ? "text-[#1F5FA8]" : "text-[#3D4652]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 mb-2 px-5 py-3 rounded-[3px] bg-[#0E2A4A] text-white text-center text-[12px] font-semibold uppercase tracking-[0.05em]"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
