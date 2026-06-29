import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { IconArrowRight, ServiceIcon } from "@/components/icons";
import { cardHoverClass } from "@/lib/card-styles";
import { services } from "@/lib/content";
import {
  cardsToCta,
  container,
  gridGap,
  sectionIntroMargin,
  sectionY,
} from "@/lib/layout";
import {
  type SectionTone,
  sectionToneClasses,
  serviceIconStyles,
} from "@/lib/section-tones";

type ServicesGridProps = {
  showHeading?: boolean;
  limit?: number;
  tone?: SectionTone;
  compactBottom?: boolean;
};

export default function ServicesGrid({
  showHeading = true,
  limit,
  tone = "white",
  compactBottom = false,
}: ServicesGridProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  const sectionPadding = compactBottom
    ? "pt-16 pb-12 sm:pt-24 sm:pb-16"
    : sectionY;

  return (
    <section className={`${sectionToneClasses[tone]} ${sectionPadding}`}>
      <div className={container}>
        {showHeading && (
          <div className={`mx-auto flex max-w-2xl flex-col items-center text-center ${sectionIntroMargin}`}>
            <span className="mx-auto mb-4 block h-1 w-10 rounded-full bg-accent-text" />
            <SectionHeading
              showKeyline={false}
              eyebrow="Our Services"
              title="Everything your business needs, under one roof"
              description="From day-to-day bookkeeping to strategic tax planning — comprehensive accounting tailored to how you work."
            />
          </div>
        )}

        <div className={`grid items-stretch ${gridGap} sm:grid-cols-2 lg:grid-cols-3`}>
          {displayedServices.map((service) => {
            const iconStyle =
              serviceIconStyles[service.icon] ?? serviceIconStyles.document;

            return (
              <article
                key={service.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-primary/12 bg-section-white p-6 sm:p-8 ${cardHoverClass}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ring-1 ${iconStyle.bg} ${iconStyle.text} ${iconStyle.ring} transition-all duration-300 ${iconStyle.hover} group-hover:text-white group-hover:ring-transparent`}
                >
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-serif text-xl font-medium text-primary">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>

                <p className="mt-5 shrink-0 text-xs font-semibold uppercase tracking-wider text-accent-text opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                </p>
              </article>
            );
          })}
        </div>

        {showHeading && (
          <div className={`${cardsToCta} text-center`}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-accent-text/25 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent-text transition-colors hover:border-accent-text/40 hover:bg-accent/15"
            >
              View all services
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
