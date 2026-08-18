import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import Image from "next/image";
import { homeTestimonial } from "@/lib/content";

export default function HomeStories() {
  return (
    <section className="w-full bg-paper">
      <MeridianGrid>
        <div className="col-span-6 col-start-1 flex min-w-0 flex-col items-start justify-center py-10">
          <div className="flex w-full flex-col items-start gap-[52px]">
            <EyebrowTag>CLIENT STORIES</EyebrowTag>
            <blockquote className="w-full font-display text-[58px] leading-[64px] tracking-[-0.58px] text-ink">
              “{homeTestimonial.quote}”
            </blockquote>
            <div className="w-full font-serif text-base text-ink">
              <p className="font-semibold leading-6">{homeTestimonial.name}</p>
              <p className="font-light leading-6">{homeTestimonial.role}</p>
            </div>
          </div>
        </div>
        <div className="relative col-span-5 col-start-8 h-[894px] min-w-0 w-full overflow-hidden">
          <Image
            src="/images/meridian/stories.jpg"
            alt="Client reviewing finances with their accountant"
            fill
            className="h-full w-full object-cover"
            sizes="42vw"
          />
        </div>
      </MeridianGrid>
    </section>
  );
}
