import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { IconLocation, IconMail, IconPhone } from "@/components/icons";
import { cardHoverClass } from "@/lib/card-styles";
import { contactFaqs, siteConfig } from "@/lib/content";
import { container, containerNarrow, sectionIntroMarginCompact, sectionY, sectionYContact } from "@/lib/layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Meridian & Co. for a free accounting consultation. Call, email, or fill in our contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="Let's talk about your accounts"
        description="Whether you're switching accountants or setting up for the first time, we'd love to hear from you. Book a free consultation or send us a message — we respond within one business day."
        primaryCta={{ label: "Call us now", href: `tel:${siteConfig.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        image={null}
        showContactCard
        padding="contact"
      />

      <section className={`bg-section-white ${sectionYContact}`}>
        <div className={container}>
          <div className="mb-10 lg:hidden">
            <ImagePlaceholder
              src="/images/office.jpg"
              alt="Meridian and Co. accounting office in London"
              label="Our London office"
              aspectRatio="wide"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-8 hidden lg:block">
                <ImagePlaceholder
                  src="/images/office.jpg"
                  alt="Meridian and Co. accounting office in London"
                  label="Our London office"
                  aspectRatio="wide"
                />
              </div>

              <h2 className="font-serif text-2xl font-medium text-text">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Prefer to talk? Call us directly or drop us an email. Our team is available
                Monday to Friday, 9am to 5:30pm.
              </p>

              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-text transition-colors group-hover:bg-accent-button group-hover:text-white">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">Phone</p>
                      <p className="text-sm text-text-muted">{siteConfig.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-text transition-colors group-hover:bg-accent-button group-hover:text-white">
                      <IconMail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">Email</p>
                      <p className="text-sm text-text-muted">{siteConfig.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-text">
                    <IconLocation className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">Office</p>
                    <p className="text-sm text-text-muted">{siteConfig.address}</p>
                    <p className="mt-1 text-xs text-text-muted">{siteConfig.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-section-warm ${sectionY}`}>
        <div className={containerNarrow}>
          <div className={`text-center ${sectionIntroMarginCompact}`}>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Quick answers before you get in touch."
            />
          </div>

          <dl className="space-y-4">
            {contactFaqs.map((faq) => (
              <div
                key={faq.question}
                className={`rounded-[8px] border border-primary/10 bg-section-white p-6 ${cardHoverClass}`}
              >
                <dt className="font-serif text-lg font-medium text-text">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Ready to speak with an accountant?"
        description="Book your free consultation today — we'll answer your questions and recommend the right approach for your business."
      />
    </>
  );
}
