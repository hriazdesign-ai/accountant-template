import EyebrowTag from "@/components/EyebrowTag";
import Reveal from "@/components/Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  tone?: "light" | "dark";
  layout?: "split" | "stack";
  border?: "ink-20" | "ink-40" | "white-40";
  ink?: "ink" | "ink-warm";
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "light",
  layout = "split",
  border,
  ink = "ink",
}: SectionIntroProps) {
  const isDark = tone === "dark";
  const titleColor = isDark ? "text-white" : ink === "ink-warm" ? "text-ink-warm" : "text-ink";
  const tag = (
    <EyebrowTag tone={isDark ? "dark" : "light"} border={border} ink={ink}>
      {eyebrow}
    </EyebrowTag>
  );

  if (layout === "stack") {
    return (
      <div className="col-span-12 grid grid-cols-12 gap-x-4 gap-y-[52px] pb-[90px]">
        <div className="col-span-4">
          <Reveal>{tag}</Reveal>
        </div>
        <Reveal delay={80} className="col-span-6 col-start-1">
          <h2
            className={`font-display text-[58px] leading-[64px] tracking-[-0.58px] ${titleColor}`}
          >
            {title}
          </h2>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="col-span-12 grid grid-cols-12 gap-x-4 pb-[90px]">
      <div className="col-span-4">
        <Reveal>{tag}</Reveal>
      </div>
      <div className="col-span-6 flex flex-col gap-8">
        <Reveal delay={80}>
          <h2 className={`font-display text-[58px] leading-[64px] tracking-[-0.58px] ${titleColor}`}>
            {title}
          </h2>
        </Reveal>
        {description ? (
          <Reveal delay={160}>
            <p className={`font-sans text-base font-light leading-[22px] ${titleColor}`}>{description}</p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
