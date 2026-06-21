import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { IconCheck } from "@/components/icons";
import { cardHoverClass, cardHoverClassDark } from "@/lib/card-styles";
import { pricingPlans } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, fixed monthly accounting fees for sole traders, small businesses, and limited companies. No surprise bills.",
};

const faqs = [
  {
    question: "Are there any setup fees?",
    answer:
      "No. Onboarding is included in your first month. We'll connect your software, review your records, and get everything in order at no extra charge.",
  },
  {
    question: "Can I switch plans as my business grows?",
    answer:
      "Absolutely. Many clients start on Starter and move to Growth or Company as they take on staff or incorporate. We'll adjust your package with 30 days' notice.",
  },
  {
    question: "What if I need something not listed?",
    answer:
      "We offer bespoke packages for businesses with specific needs — R&D claims, multi-entity structures, or high transaction volumes. Contact us for a tailored quote.",
  },
  {
    question: "Do prices include VAT?",
    answer:
      "All prices shown are exclusive of VAT. VAT-registered businesses can reclaim VAT on our fees.",
  },
];

export default function PricingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Pricing"
        title="Clear fees. No surprises."
        description="Fixed monthly pricing so you can budget with confidence. Every package includes a dedicated accountant, cloud software support, and proactive advice."
        primaryCta={{ label: "Get a custom quote", href: "/contact" }}
        secondaryCta={{ label: "Compare services", href: "/services" }}
        highlights={[
          "No long-term contracts",
          "Cancel with 30 days' notice",
          "All packages include support",
        ]}
        image={{
          src: "/images/office-desk.jpg",
          alt: "Accounting team working with clients",
          label: "Trusted accounting advice",
        }}
      />

      <section className="bg-section-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[8px] border p-6 sm:p-8 ${
                  plan.highlighted
                    ? `border-accent bg-primary text-white shadow-xl shadow-primary/15 ${cardHoverClassDark}`
                    : `border-primary/10 bg-white ${cardHoverClass}`
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-none bg-accent-button px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h3
                  className={`font-serif text-2xl font-medium ${
                    plan.highlighted ? "text-white" : "text-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-white/90" : "text-text-muted"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-serif text-4xl font-medium ${
                      plan.highlighted ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/85" : "text-text-muted"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <IconCheck
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlighted ? "text-accent-on-dark" : "text-accent-text"
                        }`}
                      />
                      <span className={plan.highlighted ? "text-white/90" : "text-text"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-white text-primary hover:bg-section-warm"
                      : "bg-primary text-white hover:bg-primary-light"
                  }`}
                >
                  Get started
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-text-muted">
            All prices exclude VAT. Need a bespoke package?{" "}
            <Link href="/contact" className="font-semibold text-accent-text hover:text-accent-button">
              Contact us
            </Link>{" "}
            for a tailored quote.
          </p>
        </div>
      </section>

      <section className="bg-section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Everything you need to know before getting started."
            />
          </div>

          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className={`rounded-[8px] border border-primary/10 bg-white p-6 ${cardHoverClass}`}
              >
                <dt className="font-serif text-lg font-medium text-text">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Still comparing options?"
        description="Book a free consultation and we'll walk you through the right package for your business — with honest advice, not a sales pitch."
      />
    </>
  );
}
