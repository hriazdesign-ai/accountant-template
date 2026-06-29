import Link from "next/link";
import { IconLocation, IconMail, IconPhone } from "@/components/icons";
import { container, footerBadgeRow } from "@/lib/layout";
import { footerBadges, navLinks, siteConfig } from "@/lib/content";

const linkFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-on-dark rounded-[4px]";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-light/30 bg-primary text-white">
      <div className={`${container} py-12 lg:py-16`}>
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link href="/" className={`inline-block ${linkFocus}`}>
              <span className="font-serif text-2xl font-medium">{siteConfig.name}</span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-widest text-accent-on-dark">
                {siteConfig.tagline}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
              Trusted accounting for sole traders, small businesses, and limited companies across the UK.
            </p>
          </div>

          <div className="col-span-full grid grid-cols-3 gap-4 sm:gap-6 lg:contents">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/75 sm:text-sm">
                Navigation
              </h3>
              <ul className="mt-3 space-y-2 sm:mt-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-xs text-white/90 transition-colors hover:text-white sm:text-sm ${linkFocus}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/75 sm:text-sm">
                Services
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-white/90 sm:mt-4 sm:text-sm">
                <li>Self Assessment</li>
                <li>Bookkeeping</li>
                <li>Payroll & VAT</li>
                <li>Year-End Accounts</li>
                <li>Tax Planning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/75 sm:text-sm">
                Contact
              </h3>
              <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className={`flex items-start gap-1.5 text-xs text-white/90 transition-colors hover:text-white sm:gap-2 sm:text-sm ${linkFocus}`}
                  >
                    <IconPhone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-on-dark sm:h-4 sm:w-4" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={`flex items-start gap-1.5 text-xs text-white/90 transition-colors hover:text-white sm:gap-2 sm:text-sm ${linkFocus}`}
                  >
                    <IconMail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-on-dark sm:h-4 sm:w-4" />
                    <span className="break-all">{siteConfig.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-1.5 text-xs text-white/90 sm:gap-2 sm:text-sm">
                  <IconLocation className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-on-dark sm:h-4 sm:w-4" />
                  {siteConfig.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mt-10 ${footerBadgeRow} border-t border-white/15 pt-8`}>
          {footerBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/70">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
