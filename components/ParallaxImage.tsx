"use client";

import { useRef, useEffect, useCallback } from "react";

type ParallaxImageProps = {
  children: React.ReactNode;
  range?: number;
};

const MD_BREAKPOINT = 768;

/**
 * Desktop-only parallax wrapper for images inside an overflow-hidden frame.
 * Translates children from -range to +range px as the *page* scrolls
 * through the section's document position. Uses scrollY + offsetTop
 * instead of getBoundingClientRect so the effect works correctly
 * inside sticky-positioned parents.
 */
export default function ParallaxImage({ children, range = 60 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const layoutRef = useRef({ top: 0, height: 0 });

  const measure = useCallback(() => {
    const el = ref.current?.parentElement;
    if (!el) return;

    let top = 0;
    let node: HTMLElement | null = el;
    while (node) {
      top += node.offsetTop;
      node = node.offsetParent as HTMLElement | null;
    }

    layoutRef.current = {
      top,
      height: el.offsetHeight,
    };
  }, []);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const { top, height } = layoutRef.current;
    if (height === 0) return;

    const vh = window.innerHeight;
    const scrollY = window.scrollY;
    const start = top - vh;
    const end = top + height;
    const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));
    const y = -range + progress * range * 2;

    el.style.transform = `translateY(${y}px)`;
  }, [range]);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onScroll = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = 0;
          update();
        });
      }
    };

    const start = () => {
      if (mql.matches && !prefersReduced.matches) {
        measure();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", measure);
        update();
      }
    };

    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      if (ref.current) ref.current.style.transform = "";
    };

    const handleChange = () => { stop(); start(); };

    start();
    mql.addEventListener("change", handleChange);
    prefersReduced.addEventListener("change", handleChange);

    return () => {
      stop();
      mql.removeEventListener("change", handleChange);
      prefersReduced.removeEventListener("change", handleChange);
    };
  }, [update, measure]);

  return (
    <div
      ref={ref}
      className="parallax-image-inner"
      style={{ top: `-${range}px`, bottom: `-${range}px` }}
    >
      {children}
    </div>
  );
}
