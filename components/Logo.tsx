import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function Logo() {
  return (
    <Link
      href="/"
      className="whitespace-nowrap font-display text-[30px] leading-[30px] tracking-[-0.6px] text-ink"
    >
      {siteConfig.name}
    </Link>
  );
}
