import ContactRow from "@/components/ContactRow";
import Logo from "@/components/Logo";
import MeridianGrid from "@/components/MeridianGrid";
import { navLinks, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(13,12,11,0.2)] bg-paper">
      <MeridianGrid className="py-[80px]">
        <div className="col-span-12 grid grid-cols-12 gap-x-4 pb-[80px]">
          <div className="col-span-3 flex flex-col items-start justify-center gap-[30px]">
            <Logo />
          </div>
          <div className="col-span-3" aria-hidden="true" />
          <div className="col-span-3 flex flex-col items-start justify-center gap-[30px]">
            <p className="font-serif text-sm leading-5 text-ink">NAVIGATION</p>
            <ul className="flex w-full flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block font-sans text-sm leading-5 text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-center gap-[30px]">
            <p className="font-serif text-base leading-[22px] text-ink">CONTACT</p>
            <ContactRow variant="footer" />
          </div>
        </div>
        <p className="col-span-12 font-sans text-xs font-normal leading-[22px] text-ink">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </MeridianGrid>
    </footer>
  );
}
