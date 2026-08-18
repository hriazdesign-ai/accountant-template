import MeridianGrid from "@/components/MeridianGrid";
import { Stat } from "@/components/ServiceCard";
import SectionIntro from "@/components/SectionIntro";
import { homeStats } from "@/lib/content";

export default function HomeResults() {
  return (
    <section className="w-full bg-ink">
      <MeridianGrid className="py-[90px]">
        <SectionIntro
          tone="dark"
          layout="stack"
          border="ink-40"
          eyebrow="OUR RESULTS"
          title="Experience you can measure."
        />
        <div className="col-span-12 grid grid-cols-12 gap-x-4">
          {homeStats.map((stat) => (
            <div key={stat.label} className="col-span-3 min-w-0">
              <Stat {...stat} />
            </div>
          ))}
        </div>
      </MeridianGrid>
    </section>
  );
}
