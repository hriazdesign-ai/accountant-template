import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import { Stat } from "@/components/ServiceCard";
import SectionIntro from "@/components/SectionIntro";
import { homeStats } from "@/lib/content";

export default function HomeResults() {
  return (
    <section className="w-full bg-ink">
      {/* Mobile */}
      <div className="px-5 py-10 md:hidden">
        <div className="flex flex-col gap-6 pb-10">
          <EyebrowTag tone="dark" border="white-40">OUR RESULTS</EyebrowTag>
          <h2 className="font-display text-[36px] leading-[42px] tracking-[-0.36px] text-white">
            Experience you can measure.
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          {homeStats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <MeridianGrid className="hidden py-[90px] md:block">
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
