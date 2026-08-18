import Button from "@/components/Button";
import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="w-full bg-paper">
      <MeridianGrid>
        <div className="col-span-7 col-start-1 flex min-w-0 flex-col items-start justify-center py-10">
          <div className="flex w-full flex-col items-start gap-[52px]">
            <EyebrowTag>Chartered Accountant · London</EyebrowTag>
            <h1 className="w-full font-display text-[114px] leading-[113px] tracking-[-1.14px] text-ink">
              Financial clarity,
              <br />
              made simple
            </h1>
            <p className="w-full font-serif text-base font-light leading-6 text-ink">
              Straightforward accounting, tax and financial advice for individuals and growing businesses.
            </p>
            <Button href="/contact" arrow>
              Speak to an accountant
            </Button>
          </div>
        </div>
        <div className="relative col-span-5 col-start-8 h-[894px] min-w-0 w-full overflow-hidden">
          <Image
            src="/images/meridian/hero.jpg"
            alt="Accountant meeting a client"
            fill
            priority
            className="h-full w-full object-cover"
            sizes="(min-width: 1450px) 520px, 42vw"
          />
        </div>
      </MeridianGrid>
    </section>
  );
}
