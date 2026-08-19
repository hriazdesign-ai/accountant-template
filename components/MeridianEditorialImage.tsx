type MeridianEditorialImageProps = {
  side: "left" | "right";
  className?: string;
  children: React.ReactNode;
};

/**
 * Grid-locked editorial image with a decorative black strip that bleeds
 * from the outer edge of the photograph to the matching viewport edge.
 * The photograph itself is unchanged — same grid columns, same dimensions.
 *
 * Outer div: position relative, no overflow clip → ::after can escape.
 * Inner div: position relative + overflow hidden → clips the fill image.
 */
export default function MeridianEditorialImage({
  side,
  className = "",
  children,
}: MeridianEditorialImageProps) {
  return (
    <div
      className={`meridian-editorial-image meridian-editorial-image--${side} ${className}`.trim()}
    >
      <div className="relative h-full w-full overflow-hidden">{children}</div>
    </div>
  );
}
