import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { IconLocation, IconMail, IconPhone } from "@/components/icons";
import { cardHoverClass } from "@/lib/card-styles";
import { contactFaqs, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Meridian & Co. for a free accounting consultation. Call, email, or fill in our contact form.",
};

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

      <section className="bg-section-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              <form
                className="rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8"
                action="#"
                method="post"
              >
                <h3 className="font-serif text-xl font-medium text-text">
                  Send us a message
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  Fill in the form below and we&apos;ll be in touch shortly.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="email" className="block text-sm font-medium text-text">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="businessType" className="block text-sm font-medium text-text">
                    Business type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="sole-trader">Sole trader</option>
                    <option value="small-business">Small business</option>
                    <option value="limited-company">Limited company</option>
                    <option value="other">Other / Not sure</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-text">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full resize-y rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your business and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-accent-button py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-button-hover sm:w-auto sm:px-8"
                >
                  Send message
                </button>

                <p className="mt-4 text-xs text-text-muted">
                  By submitting this form, you agree to be contacted about our services.
                  We never share your details with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
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
