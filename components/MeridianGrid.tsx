type MeridianGridProps = {
  children: React.ReactNode;
  className?: string;
};

/** Shared Meridian homepage content grid. Horizontal padding lives on the shell. */
export default function MeridianGrid({ children, className = "" }: MeridianGridProps) {
  return (
    <div className={`meridian-container ${className}`.trim()}>
      <div className="meridian-grid">{children}</div>
    </div>
  );
}
