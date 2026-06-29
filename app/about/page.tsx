import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import { IconCheck } from "@/components/icons";
import { cardHoverClass } from "@/lib/card-styles";
import { team, whyChooseUs } from "@/lib/content";
import { container, divider, gridGap, sectionIntroMargin, sectionY } from "@/lib/layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Meet the team behind Meridian & Co. — chartered accountants with 15+ years of experience supporting UK businesses.",
  path: "/about",
});

const values = [
  {
    title: "Integrity",
    description: "Honest advice, transparent fees, and always acting in your best interest.",
  },
  {
    title: "Clarity",
    description: "Plain English, no jargon. You should always understand your numbers and obligations.",
  },
  {
    title: "Proactivity",
    description: "We don't wait for deadlines — we anticipate them and plan ahead with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Us"
        title="Accountants who understand small business"
        description="Founded in 2009, Meridian & Co. was built on a simple belief: every business deserves the same quality of accounting advice as a large corporation — without the corporate price tag or impersonal service."
        primaryCta={{ label: "Meet the team below", href: "#team" }}
        secondaryCta={{ label: "View our services", href: "/services" }}
        highlights={[
          "FCA registered practice",
          "850+ clients nationwide",
          "Based in London, serving the UK",
        ]}
        image={{
          src: "/images/desk.jpg",
          alt: "Accounting team working with clients",
          label: "Trusted accounting advice",
        }}
      />

      <StatsSection />

      <section className={`bg-section-white ${sectionY}`}>
        <div className={container}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built for businesses like yours"
                description="What started as a two-person practice in the City has grown into a team of eight — but we've never lost the personal touch that our clients value most."
                align="left"
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-muted">
                <p>
                  We specialise in working with sole traders, small businesses, and limited companies
                  at every stage — from first-year startups navigating self-assessment to established
                  companies planning for growth and exit.
                </p>
                <p>
                  Our approach combines traditional chartered expertise with modern cloud accounting
                  tools, giving you real-time visibility into your finances without the overhead of
                  an in-house finance team.
                </p>
              </div>
            </div>

            <div className="rounded-[8px] border border-primary/10 bg-primary p-8 text-white sm:p-10">
              <h3 className="font-serif text-2xl font-medium">Our mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/90">
                To remove the stress and uncertainty from business finances — so our clients can
                make better decisions, pay less tax legally, and sleep soundly knowing their
                compliance is handled.
              </p>
              <ul className="mt-6 space-y-3">
                {values.map((value) => (
                  <li key={value.title} className="flex gap-3">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-on-dark" />
                    <div>
                      <p className="text-sm font-semibold">{value.title}</p>
                      <p className="text-xs text-white/80">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className={container}>
        <div className={divider} />
      </div>

      <section id="team" className={`bg-section-white ${sectionY}`}>
        <div className={container}>
          <div className={`mx-auto max-w-2xl text-center ${sectionIntroMargin}`}>
            <SectionHeading
              eyebrow="Our Team"
              title="The people behind your accounts"
              description="Qualified, experienced, and genuinely invested in your success."
            />
          </div>

          <div className={`grid items-stretch ${gridGap} sm:grid-cols-2 lg:grid-cols-3`}>
            {team.map((member) => (
              <article
                key={member.name}
                className={`flex h-full flex-col rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8 ${cardHoverClass}`}
              >
                {member.image ? (
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                    {member.initials}
                  </div>
                )}

                <h3 className="mt-5 font-serif text-xl font-medium text-text">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent-text">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-section-warm ${sectionY}`}>
        <div className={container}>
          <div className={`mx-auto max-w-2xl text-center ${sectionIntroMargin}`}>
            <SectionHeading
              eyebrow="Our Approach"
              title="What sets us apart"
              description="Four principles that guide every client relationship."
            />
          </div>

          <div className={`grid ${gridGap} sm:grid-cols-2`}>
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className={`rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8 ${cardHoverClass}`}
              >
                <h3 className="font-serif text-lg font-medium text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-text-muted">
            Want to learn more?{" "}
            <Link href="/contact" className="font-semibold text-accent-text hover:text-accent-button">
              Get in touch
            </Link>{" "}
            for an informal chat.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}