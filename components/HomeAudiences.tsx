import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import Reveal from "@/components/Reveal";
import { AudienceCard } from "@/components/ServiceCard";
import SectionIntro from "@/components/SectionIntro";
import { homeAudiences } from "@/lib/content";

export default function HomeAudiences() {
  return (
    <section id="who-we-help" className="w-full bg-paper">
      {/* Mobile */}
      <div className="flex flex-col gap-10 px-5 py-10 md:hidden">
        <div className="flex flex-col gap-6">
          <Reveal>
            <EyebrowTag border="ink-20" ink="ink-warm">WHO WE HELP</EyebrowTag>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-[36px] leading-[42px] tracking-[-0.36px] text-ink-warm">
              Different businesses.
              <br />
              Different needs.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-sans text-base font-light leading-[22px] text-ink-warm">
              Our support adapts to the way you work, whether you&apos;re managing your own finances or building a growing company.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-4">
          {homeAudiences.map((audience, i) => (
            <Reveal key={audience.number} delay={240 + i * 80} variant="card">
              <AudienceCard {...audience} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <MeridianGrid className="hidden py-[90px] md:block">
        <SectionIntro
          eyebrow="WHO WE HELP"
          ink="ink-warm"
          title={
            <>
              Different businesses.
              <br />
              Different needs.
            </>
          }
          description="Our support adapts to the way you work, whether you're managing your own finances or building a growing company."
        />
        <div className="col-span-12 grid grid-cols-12 gap-x-4">
          {homeAudiences.map((audience, i) => (
            <Reveal key={audience.number} delay={i * 80} variant="card" className="col-span-3 flex min-w-0">
              <AudienceCard {...audience} />
            </Reveal>
          ))}
        </div>
      </MeridianGrid>
    </section>
  );
}
