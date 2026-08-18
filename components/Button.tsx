import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "header" | "body";
  arrow?: boolean;
};

export default function Button({
  href,
  children,
  size = "body",
  arrow = false,
}: ButtonProps) {
  const sizeClass =
    size === "header"
      ? "px-5 py-3 leading-[22px] tracking-[-0.32px]"
      : "px-5 py-4 leading-4";

  return (
    <Link
      href={href}
      className={`cta-button inline-flex items-center justify-center rounded-[8px] bg-ink font-serif text-base font-medium text-white ${sizeClass} ${
        arrow ? "cta-button--arrow" : ""
      }`}
    >
      <span className="cta-button__label">{children}</span>
      {arrow ? (
        <span className="cta-button__arrow-wrap">
          <span className="cta-button__arrow" aria-hidden="true">
            →
          </span>
        </span>
      ) : null}
    </Link>
  );
}
