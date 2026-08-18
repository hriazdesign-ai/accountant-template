import MeridianGrid from "@/components/MeridianGrid";
import SectionIntro from "@/components/SectionIntro";
import ServiceCard from "@/components/ServiceCard";
import { homeServices } from "@/lib/content";

export default function HomeServices() {
  return (
    <section id="services" className="w-full bg-ink">
      <MeridianGrid className="py-[90px]">
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
