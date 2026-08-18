import Button from "@/components/Button";
import ContactRow from "@/components/ContactRow";
import EyebrowTag from "@/components/EyebrowTag";
import MeridianGrid from "@/components/MeridianGrid";

export default function HomeContact() {
  return (
    <section id="contact" className="w-full bg-paper">
      <MeridianGrid className="py-[90px]">
        <div className="col-span-4">
          <EyebrowTag border="ink-40">LET’S TALK</EyebrowTag>
        </div>
        <div className="col-span-6 flex flex-col items-start gap-10">
          <div className="flex w-full flex-col items-start gap-8">
            <h2 className="w-full font-display text-[58px] leading-[64px] tracking-[-0.58px] text-ink-warm">
              Let&apos;s make your
              <br />
              finances simpler.
            </h2>
            <p className="w-full font-sans text-base font-light leading-[22px] text-ink-warm">
              Whether you&apos;re looking for a new accountant, starting a business or simply want clearer
              financial advice, we&apos;d be happy to talk.
            </p>
            <Button href="/contact" arrow>
              Speak to an accountant
            </Button>
          </div>
          <ContactRow />
        </div>
      </MeridianGrid>
    </section>
  );
}
