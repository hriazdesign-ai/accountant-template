"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { layoutPadding, layoutMaxWidth } from "@/lib/layout";
import { navLinks, siteConfig } from "@/lib/content";

const linkFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-section-white/95 backdrop-blur-md">
      <div className={`mx-auto flex ${layoutMaxWidth} items-center justify-between ${layoutPadding} py-4`}>
        <Link href="/" className={`group flex flex-col ${linkFocus} rounded-[4px]`}>
          <span className="font-serif text-xl font-medium tracking-tight text-primary sm:text-2xl">
            {siteConfig.name}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-accent-text">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${linkFocus} rounded-[4px] ${
                  isActive
                    ? "text-accent-text"
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className={`text-sm font-medium text-text-muted transition-colors hover:text-primary ${linkFocus} rounded-[4px]`}
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className={`rounded-full bg-accent-button px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-button-hover ${linkFocus}`}
          >
            Free consultation
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-[4px] p-2 text-primary lg:hidden ${linkFocus}`}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className={`border-t border-primary/10 bg-section-white px-4 py-4 lg:hidden ${layoutPadding}`}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-none px-3 py-2.5 text-base font-medium ${
                      isActive
                        ? "bg-primary/5 text-accent-text"
                        : "text-text hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-primary/10 pt-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="px-3 text-sm font-medium text-text-muted"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-accent-button px-5 py-3 text-center text-sm font-semibold text-white hover:bg-accent-button-hover"
            >
              Free consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
