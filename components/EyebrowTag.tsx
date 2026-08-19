type EyebrowTagProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  border?: "ink-20" | "ink-40" | "white-40";
  ink?: "ink" | "ink-warm";
};

export default function EyebrowTag({
  children,
  tone = "light",
  border,
  ink = "ink",
}: EyebrowTagProps) {
  const isDark = tone === "dark";
  const borderClass =
    border === "ink-40"
      ? "border-[rgba(13,12,11,0.4)]"
      : border === "white-40"
        ? "border-[#6E6D6D]"
        : isDark
          ? "border-[#6E6D6D]"
          : "border-[rgba(13,12,11,0.2)]";
  const textClass = isDark ? "text-white" : ink === "ink-warm" ? "text-ink-warm" : "text-ink";

  return (
    <span
      className={`inline-flex w-fit items-center justify-center self-start rounded-[52px] border border-solid px-[18px] py-3 font-serif text-[12px] uppercase leading-3 tracking-[0.24px] ${borderClass} ${textClass}`}
    >
      {children}
    </span>
  );
}
