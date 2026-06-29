import Link from "next/link";
import { container, sectionY } from "@/lib/layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({
    title: "Page not found",
    description: "The page you are looking for could not be found.",
  }),
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className={`bg-section-white ${sectionY}`}>
      <div className={`${container} flex flex-col items-center text-center`}>
        <span className="mb-4 block h-1 w-10 rounded-none bg-accent-text" />
        <h1 className="font-serif text-3xl font-medium tracking-tight text-text sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 mb-10 max-w-md text-base leading-relaxed text-text-muted sm:mb-12">
          Sorry, we couldn&apos;t find the page you were looking for. It may have been moved or
          no longer exists.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-accent-button px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
