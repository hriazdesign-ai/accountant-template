import Image from "next/image";
import { softwareLogos } from "@/lib/content";
import { container, logoImageClass, logoTileClass, sectionYCompact } from "@/lib/layout";
import { publicImageExists } from "@/lib/image-utils";

export default function SoftwareLogosSection() {
  return (
    <section className={`border-y border-primary/8 bg-section-white ${sectionYCompact}`}>
      <div className={container}>
        <span className="mx-auto mb-4 block h-1 w-10 rounded-full bg-accent-text" />
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent-text">
          Cloud Accounting
        </p>
        <h2 className="mt-3 text-center font-serif text-2xl font-medium tracking-tight text-text sm:text-3xl">
          Works with the tools you already use
        </h2>

        <ul className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-5">
          {softwareLogos.map((logo) => {
            const exists = publicImageExists(logo.src);

            return (
              <li key={logo.name}>
                <div className={logoTileClass}>
                  {exists ? (
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={140}
                      height={40}
                      className={logoImageClass}
                    />
                  ) : (
                    <span className="text-sm font-semibold tracking-tight text-primary/75 transition duration-200 group-hover:opacity-100">
                      {logo.name}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-center text-sm text-text-muted">
          Trusted cloud accounting software partners.
        </p>
      </div>
    </section>
  );
}
