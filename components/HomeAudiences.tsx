import MeridianGrid from "@/components/MeridianGrid";
import { AudienceCard } from "@/components/ServiceCard";
import SectionIntro from "@/components/SectionIntro";
import { homeAudiences } from "@/lib/content";

export default function HomeAudiences() {
  return (
    <section id="who-we-help" className="w-full bg-paper">
      <MeridianGrid className="py-[90px]">
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
          {homeAudiences.map((audience) => (
            <div key={audience.number} className="col-span-3 flex min-w-0">
              <AudienceCard {...audience} />
            </div>
          ))}
        </div>
      </MeridianGrid>
    </section>
  );
}
