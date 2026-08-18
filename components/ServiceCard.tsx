import Image from "next/image";

type ServiceCardProps = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
};

export default function ServiceCard({
  number,
  title,
  eyebrow,
  description,
}: ServiceCardProps) {
  return (
    <article className="flex h-full min-w-px w-full flex-col bg-[#1b1917] p-10">
      <div className="flex w-full flex-col gap-6">
        <div className="relative size-10 overflow-hidden rounded-full bg-black">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18px] leading-[26.5px] tracking-[-0.36px] text-white">
            {number}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-[28px] leading-[30px] tracking-[0.56px] text-white">
            {title}
          </h3>
          <div className="flex flex-col gap-2">
            <p className="font-sans text-xs font-medium leading-4 text-white">{eyebrow}</p>
            <p className="font-sans text-xs font-light leading-[18px] text-white">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

type AudienceCardProps = {
  number: string;
  title: string;
  description: string;
};

export function AudienceCard({ number, title, description }: AudienceCardProps) {
  return (
    <article className="flex h-full min-w-px w-full flex-col bg-white p-10">
      <div className="flex w-full flex-col gap-6">
        <div className="relative size-10 overflow-hidden rounded-full bg-paper">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18px] leading-[26.5px] tracking-[-0.36px] text-ink">
            {number}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-[28px] leading-[30px] tracking-[0.56px] text-ink-warm">
            {title}
          </h3>
          <p className="font-sans text-xs font-light leading-[18px] text-ink-warm">{description}</p>
        </div>
      </div>
    </article>
  );
}

type StatProps = {
  value: string;
  suffix?: string;
  label: string;
};

export function Stat({ value, suffix, label }: StatProps) {
  return (
    <div className="flex w-full min-w-px flex-col gap-4 overflow-hidden">
      <p className="font-display text-[100px] leading-[100px] tracking-[2px] text-white">
        {value}
        {suffix ? <span className="text-[60px] leading-[100px]">{suffix}</span> : null}
      </p>
      <p className="font-sans text-xs font-medium leading-[18px] text-white">{label}</p>
    </div>
  );
}

type ApproachCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
};

export function ApproachCard({ title, eyebrow, description, icon }: ApproachCardProps) {
  return (
    <article className="flex h-full min-w-px w-full flex-col bg-[#1b1917] p-10">
      <div className="flex w-full flex-col gap-6">
        <div className="relative size-10 overflow-hidden rounded-full bg-paper">
          <Image
            src={icon}
            alt=""
            width={30}
            height={30}
            className="absolute left-[5px] top-[5px] size-[30px] object-contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-[28px] leading-[30px] tracking-[0.56px] text-white">
            {title}
          </h3>
          <div className="flex flex-col gap-2">
            <p className="font-sans text-xs font-medium leading-4 text-white">{eyebrow}</p>
            <p className="font-sans text-xs font-light leading-[18px] text-white">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
