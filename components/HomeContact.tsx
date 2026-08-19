import Button from "@/components/Button";
import ContactRow from "@/components/ContactRow";
import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";
import Reveal from "@/components/Reveal";

export default function HomeContact() {
  return (
    <section id="contact" className="w-full bg-paper">
      {/* Mobile */}
      <div className="px-5 py-10 md:hidden">
        <div className="flex flex-col gap-6">
          <Reveal>
            <EyebrowTag border="ink-20">LET&apos;S TALK</EyebrowTag>
          </Reveal>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Reveal delay={80}>
                <h2 className="w-full font-display text-[58px] leading-[64px] tracking-[-0.58px] text-ink-warm">
                  Let&apos;s make your
                  <br />
                  finances simpler.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="w-full font-sans text-base font-light leading-[22px] text-ink-warm">
                  Whether you&apos;re looking for a new accountant, starting a business or simply want clearer
                  financial advice, we&apos;d be happy to talk.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <Button href="/contact">
                  Speak to an accountant
                </Button>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <ContactRow />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <MeridianGrid className="hidden py-[90px] md:block">
        <div className="col-span-4">
          <Reveal>
            <EyebrowTag border="ink-40">LET&apos;S TALK</EyebrowTag>
          </Reveal>
        </div>
        <div className="col-span-6 flex flex-col items-start gap-10">
          <div className="flex w-full flex-col items-start gap-8">
            <Reveal delay={80}>
              <h2 className="w-full font-display text-[58px] leading-[64px] tracking-[-0.58px] text-ink-warm">
                Let&apos;s make your
                <br />
                finances simpler.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="w-full font-sans text-base font-light leading-[22px] text-ink-warm">
                Whether you&apos;re looking for a new accountant, starting a business or simply want clearer
                financial advice, we&apos;d be happy to talk.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Button href="/contact">
                Speak to an accountant
              </Button>
            </Reveal>
          </div>
          <Reveal delay={320}>
            <ContactRow />
          </Reveal>
        </div>
      </MeridianGrid>
    </section>
  );
}
