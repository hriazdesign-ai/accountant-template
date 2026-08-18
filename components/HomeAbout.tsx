import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <section id="about" className="w-full bg-paper">
      <MeridianGrid>
        <div className="relative col-span-5 col-start-1 h-[894px] min-w-0 w-full overflow-hidden">
          <Image
            src="/images/meridian/about.jpg"
            alt="Meridian & Co. accounting office"
            fill
            className="h-full w-full object-cover"
            sizes="42vw"
          />
        </div>
        <div className="col-span-6 col-start-7 flex min-w-0 flex-col items-start justify-center py-10">
          <div className="flex w-full flex-col items-start gap-[52px]">
            <EyebrowTag>About Us</EyebrowTag>
            <h2 className="w-full font-display text-[58px] leading-[64px] text-ink">
              We don&apos;t just record what happened.
              <br />
              We help you decide what happens next.
            </h2>
            <div className="w-full font-serif text-base font-light leading-6 text-ink">
              <p>Good accounting should give you more than compliant numbers.</p>
              <p>&nbsp;</p>
              <p>
                We turn financial information into practical advice, helping you understand where you are
                today and make better decisions about where you&apos;re going next.
              </p>
            </div>
          </div>
        </div>
      </MeridianGrid>
    </section>
  );
}
