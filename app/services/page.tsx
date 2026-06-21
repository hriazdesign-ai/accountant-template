import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import { IconCheck } from "@/components/icons";
import { cardHoverClass } from "@/lib/card-styles";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive accounting services including bookkeeping, payroll, VAT, self-assessment, year-end accounts, and tax planning.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    description: "We learn about your business, current setup, and what you need from an accountant.",
  },
  {
    step: "02",
    title: "Tailored proposal",
    description: "A clear scope of work and fixed monthly fee — no hidden charges or vague estimates.",
  },
  {
    step: "03",
    title: "Smooth onboarding",
    description: "We connect your cloud software, gather opening balances, and set up your workflows.",
  },
  {
    step: "04",
    title: "Ongoing partnership",
    description: "Regular reviews, proactive advice, and a dedicated point of contact year-round.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Our Services"
        title="Full-service accounting, tailored to your business"
        description="From your first invoice to your year-end filing, we provide the expertise and support you need at every stage — with transparent pricing and no jargon."
        primaryCta={{ label: "Get a custom quote", href: "/contact" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        highlights={[
          "All services under one firm",
          "Qualified chartered accountants",
          "Cloud software included",
        ]}
        image={{
          src: "/images/pexels-rdne-7821716.jpg",
          alt: "Accountant reviewing financial dashboard on screen",
          label: "Real-time financial clarity",
        }}
        showConsultationCard={false}
      />

      <ServicesGrid showHeading={false} tone="white" />

      <section className="bg-section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionHeading
              eyebrow="What's Included"
              title="Every service, explained"
              description="Detailed breakdown of what we handle on your behalf — so you know exactly where our support begins and ends."
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8 ${cardHoverClass}`}
              >
                <h3 className="font-serif text-xl font-medium text-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Dedicated point of contact",
                    "HMRC & Companies House filing",
                    "Quarterly review included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text">
                      <IconCheck className="h-4 w-4 shrink-0 text-accent-text" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>

      <section className="bg-section-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionHeading
              eyebrow="How It Works"
              title="Getting started is straightforward"
              description="We keep onboarding simple so you can focus on running your business from day one."
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className={`rounded-[8px] border border-primary/10 bg-white p-5 sm:p-6 ${cardHoverClass}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium ring-1 ${
                      index % 2 === 0
                        ? "bg-primary/12 text-primary ring-primary/15"
                        : "bg-accent/12 text-accent-text ring-accent/15"
                    }`}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <h3 className="min-w-0 font-serif text-lg font-medium leading-snug text-text">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which services you need?"
        description="Tell us about your business and we'll recommend the right package — or build a bespoke solution that fits."
      />
    </>
  );
}
