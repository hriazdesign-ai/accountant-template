"use client";

import { useRef } from "react";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useScrollDirectionHeader } from "@/hooks/useScrollDirectionHeader";
import { navLinks } from "@/lib/content";

function HamburgerIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="10" y1="14" x2="30" y2="14" stroke="#0d0c0b" strokeWidth="1.5" />
      <line x1="10" y1="20" x2="30" y2="20" stroke="#0d0c0b" strokeWidth="1.5" />
      <line x1="10" y1="26" x2="30" y2="26" stroke="#0d0c0b" strokeWidth="1.5" />
    </svg>
  );
}

export default function HomeHeader() {
  const headerRef = useRef<HTMLElement>(null);

  useScrollDirectionHeader({
    headerRef,
    enabled: true,
  });

  return (
    <>
      <header ref={headerRef} className="site-header">
        <div className="flex h-[80px] w-full items-center justify-between px-4 md:h-[100px] md:px-[30px]">
          <div className="flex items-center md:h-[60px] md:w-[250px]">
            <Logo />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex size-10 items-center justify-center md:hidden"
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <nav
              className="flex items-center gap-3 whitespace-nowrap font-serif text-base leading-4 tracking-[-0.32px] text-ink"
              aria-label="Main navigation"
            >
              {navLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-3">
                  {index > 0 ? <span className="text-sm leading-[14px]">•</span> : null}
                  <a href={link.href} className="site-nav-link">
                    {link.label}
                  </a>
                </span>
              ))}
            </nav>
            <Button href="/contact" size="header">
              Speak to an accountant
            </Button>
          </div>
        </div>
      </header>
      <div className="site-header-spacer" aria-hidden="true" />
    </>
  );
}
