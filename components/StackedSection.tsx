type StackedSectionProps = {
  children: React.ReactNode;
  order: number;
};

export function StackedSection({ children, order }: StackedSectionProps) {
  return (
    <div
      className="stacked-section"
      style={{ "--stack-order": order } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function StackedGroup({ children }: { children: React.ReactNode }) {
  return <div className="stacked-group">{children}</div>;
}
