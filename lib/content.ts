export const siteConfig = {
  name: "Meridian & Co.",
  tagline: "Chartered Accountants",
  phone: "020 7946 0958",
  email: "hello@meridianco.co.uk",
  address: "42 Threadneedle Street, London EC2R 8AY",
  hours: "Mon–Fri, 9:00am – 5:30pm",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "850+", label: "Clients supported" },
  { value: "98%", label: "Client retention rate" },
  { value: "£2.4M", label: "Tax saved last year" },
];

export const services = [
  {
    title: "Self Assessment",
    description:
      "Accurate tax returns for sole traders and freelancers, submitted on time with every allowable expense claimed.",
    icon: "document",
  },
  {
    title: "Bookkeeping",
    description:
      "Clean, up-to-date records using cloud accounting software so you always know where your business stands.",
    icon: "ledger",
  },
  {
    title: "Payroll",
    description:
      "Compliant payroll processing, RTI submissions, and pension auto-enrolment handled without the admin burden.",
    icon: "payroll",
  },
  {
    title: "VAT Returns",
    description:
      "Quarterly VAT preparation and filing, with proactive advice on schemes that reduce your liability.",
    icon: "vat",
  },
  {
    title: "Year-End Accounts",
    description:
      "Statutory accounts prepared to Companies House standards, with clear reporting for directors and shareholders.",
    icon: "accounts",
  },
  {
    title: "Tax Planning",
    description:
      "Forward-looking strategies to minimise tax legally — from dividend planning to R&D relief and capital allowances.",
    icon: "planning",
  },
];

export const audiences = [
  {
    title: "Sole Traders",
    description:
      "From your first self-assessment to scaling your freelance income, we keep your tax simple and your records compliant.",
    highlights: ["Self-assessment", "Expense tracking", "HMRC correspondence"],
  },
  {
    title: "Small Businesses",
    description:
      "Whether you're a shop, agency, or consultancy, we handle the numbers so you can focus on growth.",
    highlights: ["Monthly bookkeeping", "Cash flow insights", "VAT & payroll"],
  },
  {
    title: "Limited Companies",
    description:
      "Full company accounting, confirmation statements, and director support — structured for compliance and clarity.",
    highlights: ["Year-end accounts", "Corporation tax", "Director payroll"],
  },
];

export const whyChooseUs = [
  {
    title: "Dedicated accountant",
    description:
      "You'll work with the same qualified accountant every time — no call centres, no rotating teams.",
  },
  {
    title: "Fixed, transparent fees",
    description:
      "Clear monthly pricing with no surprise bills. You know exactly what you're paying before we start.",
  },
  {
    title: "Proactive advice",
    description:
      "We don't just file your returns. We flag opportunities, deadlines, and risks before they become problems.",
  },
  {
    title: "Cloud-first approach",
    description:
      "Real-time access to your figures via Xero, QuickBooks, or FreeAgent — wherever you are.",
  },
];

export const testimonials = [
  {
    quote:
      "Meridian & Co. transformed how I manage my freelance finances. My tax return used to stress me out every January — now it's handled before I even think about it.",
    name: "Sarah Mitchell",
    role: "Graphic Designer, Sole Trader",
    initials: "SM",
  },
  {
    quote:
      "We switched from a large firm and immediately noticed the difference. Our accountant knows our business inside out and always picks up the phone.",
    name: "James Okonkwo",
    role: "Director, Okonkwo Digital Ltd",
    initials: "JO",
  },
  {
    quote:
      "Clear pricing, no jargon, and genuinely helpful advice on VAT and payroll as we grew from two to twelve employees. Couldn't recommend them more.",
    name: "Emma Richardson",
    role: "Founder, Richardson & Bloom",
    initials: "ER",
  },
];

export const softwareLogos = [
  { name: "Xero", src: "/images/xero.png" },
  { name: "QuickBooks", src: "/images/quickbooks.png" },
  { name: "FreeAgent", src: "/images/freeagent.png" },
  { name: "Sage", src: "/images/sage.png" },
  { name: "Dext", src: "/images/dext.png" },
];

export const contactFaqs = [
  {
    question: "How quickly do you respond?",
    answer:
      "We respond to all enquiries within one business day. Urgent matters are typically handled the same day during office hours.",
  },
  {
    question: "Can I switch accountants easily?",
    answer:
      "Yes. We manage the handover from your previous accountant, including requesting records and aligning opening balances with minimal disruption.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Absolutely. Most of our clients work with us remotely via cloud accounting software, video calls, and secure document sharing.",
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Yes — your initial 30-minute consultation is completely free with no obligation to proceed.",
  },
];

export const footerBadges = [
  "FCA Registered",
  "ICO Registered",
  "Making Tax Digital Ready",
  "Cloud Accounting Specialists",
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "£79",
    period: "per month",
    description: "Ideal for sole traders and freelancers getting started.",
    features: [
      "Annual self-assessment",
      "Quarterly bookkeeping review",
      "HMRC correspondence",
      "Email support",
      "Cloud software setup",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£149",
    period: "per month",
    description: "For small businesses with regular transactions and payroll.",
    features: [
      "Everything in Starter",
      "Monthly bookkeeping",
      "VAT returns (if registered)",
      "Payroll for up to 5 staff",
      "Quarterly management reports",
      "Priority phone support",
    ],
    highlighted: true,
  },
  {
    name: "Company",
    price: "£249",
    period: "per month",
    description: "Full-service accounting for limited companies.",
    features: [
      "Everything in Growth",
      "Year-end statutory accounts",
      "Corporation tax return",
      "Confirmation statement",
      "Director payroll & dividends",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

export const team = [
  {
    name: "David Clarke FCA",
    image: "/images/Profile-1.png",
    role: "Managing Partner",
    bio: "20 years advising SMEs across London and the South East. Specialises in tax planning for growing businesses.",
    initials: "DC",
  },
  {
    name: "Priya Sharma ACCA",
    image: "/images/priya.png",
    role: "Senior Accountant",
    bio: "Expert in cloud accounting and VAT. Helps clients migrate from spreadsheets to real-time financial visibility.",
    initials: "PS",
  },
  {
    name: "Michael Torres",
    image: "/images/Profile-2.png",
    role: "Payroll & Compliance",
    bio: "Ensures every client meets HMRC and Companies House deadlines — payroll, pensions, and statutory filings.",
    initials: "MT",
  },
];
