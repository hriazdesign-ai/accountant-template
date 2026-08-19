"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useScrollDirectionHeader } from "@/hooks/useScrollDirectionHeader";
import { navLinks } from "@/lib/content";

const DESKTOP_NAV_MQ = "(min-width: 768px)";

function MenuToggleIcon() {
  return (
    <span className="menu-toggle__icon" aria-hidden="true">
      <span className="menu-toggle__line menu-toggle__line--top" />
      <span className="menu-toggle__line menu-toggle__line--bottom" />
    </span>
  );
}

export default function HomeHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = "meridian-mobile-menu";

  const mobileLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#who-we-help", label: "Who We Help" },
    { href: "#contact", label: "Contact" },
  ];

  useScrollDirectionHeader({
    headerRef,
    enabled: !menuOpen,
  });

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_NAV_MQ);
    const onChange = () => {
      if (media.matches) setMenuOpen(false);
    };
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.body.dataset.navOpen = "true";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior = previousHtmlOverscroll;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
      delete document.body.dataset.navOpen;
      window.removeEventListener("keydown", onKeyDown);
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  return (
    <>
      <header ref={headerRef} className={`site-header ${menuOpen ? "site-header--menu-open" : ""}`}>
        <div className="flex h-[80px] w-full items-center justify-between px-4 md:h-[100px] md:px-[30px]">
          <div className="flex items-center md:h-[60px] md:w-[250px]">
            <Logo className={menuOpen ? "!text-white" : ""} />
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            className={`menu-toggle md:hidden ${menuOpen ? "menu-toggle--close" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <MenuToggleIcon />
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
      <div
        id={menuId}
        className={["mobile-nav-overlay", menuOpen ? "is-open" : null].filter(Boolean).join(" ")}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <div className="mobile-nav-overlay__top">
          <Logo className="!text-white" />
          <button
            type="button"
            className="menu-toggle menu-toggle--close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <MenuToggleIcon />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="mobile-nav-overlay__inner">
          <ul className="mobile-nav__list" style={{ transform: "translateY(-20px)" }}>
            {mobileLinks.map((link) => (
              <li key={`overlay-${link.href}`}>
                <a
                  href={link.href}
                  className="mobile-nav__link"
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? undefined : -1}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="site-header-spacer" aria-hidden="true" />
    </>
  );
}
