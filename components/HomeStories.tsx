import EyebrowTag from "@/components/EyebrowTag";
import MeridianEditorialImage from "@/components/MeridianEditorialImage";
import MeridianGrid from "@/components/MeridianGrid";
import Image from "next/image";
import { homeTestimonial } from "@/lib/content";

export default function HomeStories() {
  return (
    <section className="w-full bg-paper">
      {/* Mobile */}
      <div className="flex flex-col md:hidden">
        <div className="flex flex-col gap-6 px-5 py-10 opacity-[0.93]">
          <EyebrowTag>CLIENT STORIES</EyebrowTag>
          <blockquote className="w-full font-display text-[36px] leading-[42px] tracking-[-0.36px] text-ink">
            &ldquo;{homeTestimonial.quote}&rdquo;
          </blockquote>
          <div className="w-full font-serif text-base text-ink">
            <p className="font-semibold leading-6">{homeTestimonial.name}</p>
            <p className="font-light leading-6">{homeTestimonial.role}</p>
          </div>
        </div>
        <div className="relative h-[269px] w-full overflow-hidden">
          <Image
            src="/images/meridian/stories.jpg"
            alt="Client reviewing finances with their accountant"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Desktop */}
      <MeridianGrid className="hidden md:block">
        <div className="col-span-6 col-start-1 flex min-w-0 flex-col items-start justify-center py-10">
          <div className="flex w-full flex-col items-start gap-[52px]">
            <EyebrowTag>CLIENT STORIES</EyebrowTag>
            <blockquote className="w-full font-display text-[58px] leading-[64px] tracking-[-0.58px] text-ink">
              &ldquo;{homeTestimonial.quote}&rdquo;
            </blockquote>
            <div className="w-full font-serif text-base text-ink">
              <p className="font-semibold leading-6">{homeTestimonial.name}</p>
              <p className="font-light leading-6">{homeTestimonial.role}</p>
            </div>
          </div>
        </div>
        <MeridianEditorialImage
          side="right"
          className="col-span-5 col-start-8 h-[894px] min-w-0 w-full"
        >
          <Image
            src="/images/meridian/stories.jpg"
            alt="Client reviewing finances with their accountant"
            fill
            className="h-full w-full object-cover"
            sizes="42vw"
          />
        </MeridianEditorialImage>
      </MeridianGrid>
    </section>
  );
}
