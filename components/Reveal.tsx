"use client";

import { useRef, useEffect, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "text" | "card";
};

export default function Reveal({ children, delay = 0, className = "", variant = "text" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) {
      el.classList.add("reveal--visible");
      return;
    }

    /* DEBUG */ console.log("[Reveal] observing", el.textContent?.slice(0, 30));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /* DEBUG */ console.log("[Reveal] triggered", el.textContent?.slice(0, 30), "ratio:", entry.intersectionRatio);
          el.classList.add("reveal--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = variant === "card" ? "reveal reveal--card" : "reveal";

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
