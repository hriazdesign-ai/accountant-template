import Button from "@/components/Button";
import EyebrowTag from "@/components/EyebrowTag";
import MeridianEditorialImage from "@/components/MeridianEditorialImage";
import MeridianGrid from "@/components/MeridianGrid";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="w-full bg-paper">
      {/* Mobile hero */}
      <div className="flex flex-col md:hidden">
        <div className="flex flex-col gap-6 px-5 pb-10 pt-5 opacity-[0.93]">
          <Reveal>
            <EyebrowTag>Chartered Accountant · London</EyebrowTag>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="w-full font-display text-[56px] leading-[62px] tracking-[-0.56px] text-ink">
              Financial clarity,
              <br />
              made simple
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="w-full font-serif text-base font-light leading-6 text-ink">
              Straightforward accounting, tax and financial advice for individuals and growing businesses.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Button href="/contact" fullWidth>
              Speak to an accountant
            </Button>
          </Reveal>
        </div>
        <div className="relative h-[269px] w-full overflow-hidden">
          <Image
            src="/images/meridian/hero.jpg"
            alt="Accountant meeting a client"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Desktop hero */}
      <MeridianGrid className="hidden md:block">
        <div className="col-span-7 col-start-1 flex min-w-0 flex-col items-start justify-center py-10">
          <div className="flex w-full flex-col items-start gap-[52px]">
            <Reveal>
              <EyebrowTag>Chartered Accountant · London</EyebrowTag>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="w-full font-display text-[114px] leading-[113px] tracking-[-1.14px] text-ink">
                Financial clarity,
                <br />
                made simple
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="w-full font-serif text-base font-light leading-6 text-ink">
                Straightforward accounting, tax and financial advice for individuals and growing businesses.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Button href="/contact">
                Speak to an accountant
              </Button>
            </Reveal>
          </div>
        </div>
        <MeridianEditorialImage
          side="right"
          className="col-span-5 col-start-8 h-[894px] min-w-0 w-full"
        >
          <ParallaxImage>
            <Image
              src="/images/meridian/hero.jpg"
              alt="Accountant meeting a client"
              fill
              priority
              className="h-full w-full object-cover"
              sizes="(min-width: 1450px) 520px, 42vw"
            />
          </ParallaxImage>
        </MeridianEditorialImage>
      </MeridianGrid>
    </section>
  );
}
