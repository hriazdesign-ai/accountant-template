"use client";

import { useEffect, useRef, useState } from "react";

type StackedSectionProps = {
  children: React.ReactNode;
  order: number;
};

export function StackedSection({ children, order }: StackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [stackTop, setStackTop] = useState(0);
  const [stackExtra, setStackExtra] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const desktopMedia = window.matchMedia("(min-width: 768px)");

    const recalc = () => {
      if (!desktopMedia.matches) {
        setStackTop(0);
        setStackExtra(0);
        return;
      }

      const sectionHeight = el.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight;

      // Short sections keep the original behavior (pin at top: 0).
      // Tall sections pin later so their lower content can enter view first.
      const nextTop = sectionHeight > viewportHeight ? viewportHeight - sectionHeight : 0;
      const extraScroll = Math.max(0, sectionHeight - viewportHeight);
      setStackTop(nextTop);
      setStackExtra(extraScroll);
    };

    recalc();

    const resizeObserver = new ResizeObserver(recalc);
    resizeObserver.observe(el);
    window.addEventListener("resize", recalc);
    desktopMedia.addEventListener("change", recalc);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalc);
      desktopMedia.removeEventListener("change", recalc);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="stacked-section"
      style={
        {
          "--stack-order": order,
          "--stack-top": `${stackTop}px`,
          "--stack-extra": `${stackExtra}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function StackedGroup({ children }: { children: React.ReactNode }) {
  return <div className="stacked-group">{children}</div>;
}
