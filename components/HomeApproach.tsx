import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import { ApproachCard } from "@/components/ServiceCard";
import SectionIntro from "@/components/SectionIntro";
import { homeApproach } from "@/lib/content";

export default function HomeApproach() {
  return (
    <section className="w-full bg-ink">
      {/* Mobile */}
      <div className="px-5 py-10 md:hidden">
        <div className="flex flex-col gap-6 pb-10">
          <EyebrowTag tone="dark" border="white-40">OUR APPROACH</EyebrowTag>
          <h2 className="font-display text-[36px] leading-[42px] tracking-[-0.36px] text-white">
            Accounting should make business simpler.
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {homeApproach.map((item) => (
            <ApproachCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <MeridianGrid className="hidden py-[90px] md:block">
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
