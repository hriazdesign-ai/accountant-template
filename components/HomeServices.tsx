import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import SectionIntro from "@/components/SectionIntro";
import ServiceCard from "@/components/ServiceCard";
import { homeServices } from "@/lib/content";

export default function HomeServices() {
  return (
    <section id="services" className="w-full bg-ink">
      {/* Mobile */}
      <div className="flex flex-col gap-10 px-5 py-10 md:hidden">
        <div className="flex flex-col gap-6">
          <EyebrowTag tone="dark">services</EyebrowTag>
          <h2 className="font-display text-[36px] leading-[42px] tracking-[-0.36px] text-white">
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
          <p className="font-sans text-base font-light leading-[22px] text-white">
            Practical accounting and tax support, without the complexity or unnecessary jargon.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {homeServices.map((service) => (
            <ServiceCard key={service.number} {...service} />
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
          {homeServices.map((service) => (
            <div key={service.number} className="col-span-4 flex min-w-0">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </MeridianGrid>
    </section>
  );
}
