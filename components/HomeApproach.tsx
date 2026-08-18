import MeridianGrid from "@/components/MeridianGrid";
import { ApproachCard } from "@/components/ServiceCard";
import SectionIntro from "@/components/SectionIntro";
import { homeApproach } from "@/lib/content";

export default function HomeApproach() {
  return (
    <section className="w-full bg-ink">
      <MeridianGrid className="py-[90px]">
        <SectionIntro
          tone="dark"
          border="ink-40"
          eyebrow="OUR APPROACH"
          title="Accounting should make business simpler."
        />
        <div className="col-span-12 grid grid-cols-12 gap-x-4">
          {homeApproach.map((item) => (
            <div key={item.title} className="col-span-3 flex min-w-0">
              <ApproachCard {...item} />
            </div>
          ))}
        </div>
      </MeridianGrid>
    </section>
  );
}
