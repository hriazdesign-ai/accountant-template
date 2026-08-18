import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/content";

export default function Header() {
  return (
    <header className="flex h-[100px] w-full items-center justify-between border-b border-white/40 bg-paper px-[30px] backdrop-blur-[50px]">
      <div className="flex h-[60px] w-[250px] items-center">
        <Logo />
      </div>
      <div className="flex items-center gap-10">
        <nav
          className="flex items-center gap-3 whitespace-nowrap font-serif text-base leading-4 tracking-[-0.32px] text-ink"
          aria-label="Main navigation"
        >
          {navLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-3">
              {index > 0 ? <span className="text-sm leading-[14px]">•</span> : null}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </nav>
        <Button href="/contact" size="header">
          Speak to an accountant ↗
        </Button>
      </div>
    </header>
  );
}
