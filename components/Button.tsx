import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "header" | "body";
  fullWidth?: boolean;
};

export default function Button({ href, children, size = "body", fullWidth = false }: ButtonProps) {
  const sizeClass =
    size === "header"
      ? "px-5 py-3 leading-[22px] tracking-[-0.32px]"
      : "px-5 py-4 leading-4";

  return (
    <Link
      href={href}
      className={`cta-button inline-flex items-center justify-center rounded-[8px] bg-ink font-serif text-base font-medium text-white ${sizeClass} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </Link>
  );
}
