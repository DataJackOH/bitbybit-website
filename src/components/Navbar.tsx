"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-charcoal/5 bg-offwhite/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-2xl font-bold text-charcoal">
          bit by bit
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-sage after:transition-all after:duration-200 ${
                  isActive
                    ? "text-sage after:w-full"
                    : "text-charcoal/70 after:w-0 hover:text-charcoal hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://apps.apple.com/app/bit-by-bit/id6756225068"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sage px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`h-0.5 w-6 bg-charcoal transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-charcoal transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-charcoal transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-[65px] z-40 bg-charcoal/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-50 border-t border-charcoal/5 bg-offwhite px-6 py-4 md:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sage"
                      : "text-charcoal/70 hover:text-charcoal"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://apps.apple.com/app/bit-by-bit/id6756225068"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 py-3 text-sm font-semibold text-sage transition-colors hover:text-sage-dark"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-[40px] w-auto"
              />
            </a>
          </div>
        </>
      )}
    </nav>
  );
}
