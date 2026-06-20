const badges = [
  "Primary",
  "KS2 SATs",
  "11+ Entrance",
  "GCSE",
  "A-Level",
  "Online Tuition",
];

export default function SoftwareLogosSection() {
  return (
    <section className="border-y border-primary/8 bg-section-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span className="mx-auto mb-4 block h-1 w-10 rounded-full bg-accent-text" />

        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent-text">
          Education Pathways
        </p>

        <h2 className="mt-3 text-center font-serif text-2xl font-medium tracking-tight text-text sm:text-3xl">
          Supporting learners at every stage
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge) => (
            <li key={badge}>
              <div className="flex h-full min-h-[4.5rem] items-center justify-center rounded-full border border-primary/10 bg-white px-5 py-4 text-center text-sm font-semibold text-primary shadow-sm">
                {badge}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-sm text-text-muted">
          Specialist support from primary school through to A-Level, tailored to each student's goals and learning style.
        </p>
      </div>
    </section>
  );
}