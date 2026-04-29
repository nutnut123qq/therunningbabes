"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "UGC Journey", href: "#ugc-challenge" },
  { label: "Marathon", href: "#marathon" },
  { label: "Trade-in", href: "#trade-in" },
];

export function LandingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#f0f0f0]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-lg sm:text-xl font-black uppercase tracking-tighter text-[#181d26]"
        >
          BABÉ Stop AKN
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 tracking-tight text-[#181d26]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#41454d] hover:text-[#181d26] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ugc-challenge"
            className={cn(
              "inline-flex items-center justify-center rounded-full px-6 py-2",
              "bg-[#6FA234] text-white font-bold text-sm",
              "scale-95 active:scale-90 transition-transform"
            )}
          >
            Join the Loop
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#ddd]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#181d26]">
            {mobileOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#f0f0f0] px-4 sm:px-6 py-5 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-[#41454d] hover:text-[#181d26] text-base py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ugc-challenge"
            className={cn(
              "inline-flex items-center justify-center rounded-full px-6 py-3",
              "bg-[#6FA234] text-white font-bold text-sm w-full mt-2"
            )}
            onClick={() => setMobileOpen(false)}
          >
            Join the Loop
          </a>
        </div>
      )}
    </header>
  );
}
