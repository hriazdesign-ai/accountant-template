import Image from "next/image";
import { siteConfig } from "@/lib/content";

type ContactRowProps = {
  variant?: "section" | "footer";
};

const items = [
  {
    icon: "/images/meridian/icons/phone.png",
    alt: "Phone",
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    label: siteConfig.phone,
  },
  {
    icon: "/images/meridian/icons/email.png",
    alt: "Email",
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    underline: true,
  },
  {
    icon: "/images/meridian/icons/location.png",
    alt: "Location",
    label: siteConfig.address,
  },
] as const;

export default function ContactRow({ variant = "section" }: ContactRowProps) {
  const isFooter = variant === "footer";
  const textClass = isFooter
    ? "font-sans text-sm font-normal leading-5 text-ink"
    : "font-sans text-base font-light leading-[22px] text-ink";

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => {
        const content = (
          <>
            <Image src={item.icon} alt="" width={16} height={16} className="size-4 shrink-0 object-contain" />
            <span
              className={`min-w-px flex-1 ${textClass} ${
                "underline" in item && item.underline && !isFooter
                  ? "underline decoration-solid [text-underline-position:from-font]"
                  : ""
              }`}
            >
              {item.label}
            </span>
          </>
        );

        if ("href" in item) {
          return (
            <a key={item.label} href={item.href} className="flex w-full items-center gap-2">
              {content}
            </a>
          );
        }

        return (
          <div key={item.label} className="flex w-full items-center gap-2">
            {content}
          </div>
        );
      })}
    </div>
  );
}
