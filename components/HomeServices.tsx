import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ServiceCard from "@/components/ServiceCard";
import { homeServices } from "@/lib/content";

export default function HomeServices() {
  return (
    <section id="services" className="w-full bg-ink">
      {/* Mobile */}
      <div className="flex flex-col gap-10 px-5 py-10 md:hidden">
        <div className="flex flex-col gap-6">
          <Reveal>
            <EyebrowTag tone="dark">services</EyebrowTag>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-[36px] leading-[42px] tracking-[-0.36px] text-white">
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-sans text-base font-light leading-[22px] text-white">
              Practical accounting and tax support, without the complexity or unnecessary jargon.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-5">
          {homeServices.map((service, i) => (
            <Reveal key={service.number} delay={240 + i * 150} variant="card">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <MeridianGrid className="hidden py-[90px] md:block">
        <SectionIntro
          tone="dark"
          eyebrow="services"
          title={
            <>
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </>
          }
          description="Practical accounting and tax support, without the complexity or unnecessary jargon."
        />
        <div className="col-span-12 grid grid-cols-12 gap-x-4 gap-y-5">
          {homeServices.map((service, i) => (
            <Reveal key={service.number} delay={i * 150} variant="card" className="col-span-4 flex min-w-0">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </MeridianGrid>
    </section>
  );
}
