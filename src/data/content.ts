/**
 * Hants Family Mediation Content & Official Links
 * Strict link rule: Only use the exact supplied URLs.
 * No email address anywhere. Phone: 03300 100 015.
 */

export const BRAND_NAME = "Hants Family Mediation";
export const PHONE_DISPLAY = "03300 100 015";
export const PHONE_HREF = "tel:03300100015";
export const LOGO_URL = "https://www.hantsfamilymediation.org.uk/wp-content/uploads/2026/05/hantsfamilymediation__logo.webp";

export const URLS = {
  aboutUs: "https://www.hantsfamilymediation.org.uk/about-us/",
  contactUs: "https://www.hantsfamilymediation.org.uk/contact-us/",
  miam: "https://www.hantsfamilymediation.org.uk/miam-appointments-in-hampshire/",
  shuttleMediation: "https://www.hantsfamilymediation.org.uk/shuttle-mediation-in-hampshire/",
  legalAid: "https://www.hantsfamilymediation.org.uk/legal-aid-family-mediation-voucher-scheme-in-hampshire/",
  onlineMediation: "https://www.hantsfamilymediation.org.uk/online-family-mediation-in-hampshire/",
} as const;

export const SERVICE_LINKS = [
  {
    label: "MIAM",
    fullLabel: "MIAM Appointments",
    href: URLS.miam,
    description: "Individual assessment & court certification",
  },
  {
    label: "Shuttle Mediation",
    fullLabel: "Shuttle Mediation",
    href: URLS.shuttleMediation,
    description: "Mediate safely in separate private rooms",
  },
  {
    label: "Legal Aid",
    fullLabel: "Legal Aid & Voucher Scheme",
    href: URLS.legalAid,
    description: "Funding checks & £500 MoJ mediation voucher",
  },
  {
    label: "Online Mediation",
    fullLabel: "Online Family Mediation",
    href: URLS.onlineMediation,
    description: "Secure video sessions from home",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: URLS.aboutUs },
  { label: "Contact Us", href: URLS.contactUs },
  { label: "MIAM", href: URLS.miam },
  { label: "Shuttle Mediation", href: URLS.shuttleMediation },
  { label: "Legal Aid", href: URLS.legalAid },
  { label: "Online Mediation", href: URLS.onlineMediation },
];

export const TRUST_POINTS = [
  { text: "100% Confidential" },
  { text: "1-Hour MIAM" },
  { text: "Online & In-Person" },
  { text: "Legal Aid Available" },
];

export const HELP_CARDS = [
  {
    id: "help-miam",
    title: "MIAM Appointments",
    subtitle: "Mediation Information & Assessment Meeting",
    description: "An essential individual 1-hour session to understand how mediation works, evaluate your options, and check suitability before court application.",
    url: URLS.miam,
    badge: "Essential First Step",
  },
  {
    id: "help-child",
    title: "Child Arrangements",
    subtitle: "Parenting plans & children's welfare",
    description: "Practical solutions for living arrangements, school holidays, regular contact schedules, and establishing constructive co-parenting communication.",
    url: URLS.contactUs,
    badge: "Child-Focused",
  },
  {
    id: "help-financial",
    title: "Financial & Property",
    subtitle: "Assets, property & maintenance",
    description: "Clarity on separating family finances, division of the family home, pensions, savings, business interests, and mutual debt obligations.",
    url: URLS.contactUs,
    badge: "Pragmatic & Structured",
  },
  {
    id: "help-online",
    title: "Online Mediation",
    subtitle: "Flexible sessions via secure video",
    description: "Mediate from the comfort and privacy of your own home across Hampshire, England & Wales, saving travel time and reducing emotional tension.",
    url: URLS.onlineMediation,
    badge: "Convenient & Safe",
  },
  {
    id: "help-shuttle",
    title: "Shuttle Mediation",
    subtitle: "Separate rooms or video spaces",
    description: "Mediate without being in the same room or seeing the other person. The mediator moves between private spaces to facilitate constructive dialogue.",
    url: URLS.shuttleMediation,
    badge: "Low Conflict",
  },
];

export const FEATURED_SERVICES = [
  {
    id: "service-miam",
    title: "MIAM Appointments",
    tag: "Court Required Assessment",
    summary: "The Mediation Information & Assessment Meeting is a private, one-to-one consultation designed to assess suitability, explain options, and sign court forms if required.",
    bullets: [
      "Individual confidential one-to-one appointment",
      "Exploration of options without pressure",
      "Domestic abuse and safety screening",
      "Accredited mediator court form sign-off (C100 / Form A)",
    ],
    url: URLS.miam,
    ctaText: "Book a MIAM Appointment",
  },
  {
    id: "service-online",
    title: "Online Family Mediation",
    tag: "Hampshire & Across England/Wales",
    summary: "High-quality, secure remote family mediation offering the full benefits of structured mediation without geographical or logistical constraints.",
    bullets: [
      "Join securely from your laptop, tablet, or smartphone",
      "Both joint video calls and private shuttle breakout rooms",
      "Flexible daytime and early appointment slots",
      "Zero travel costs and reduced stress for both parties",
    ],
    url: URLS.onlineMediation,
    ctaText: "Explore Online Mediation",
  },
  {
    id: "service-legal-aid",
    title: "Legal Aid & Voucher Scheme",
    tag: "Financial Support & MoJ Scheme",
    summary: "Affordable family mediation options including Legal Aid eligibility checks and access to the UK Government's £500 Family Mediation Voucher Scheme for eligible parenting disputes.",
    bullets: [
      "Full Legal Aid assessment for qualifying individuals",
      "£500 non-means-tested Family Mediation Voucher Scheme contribution",
      "If one party qualifies for Legal Aid, both receive a free MIAM",
      "Clear, transparent fee structure with no hidden fees",
    ],
    url: URLS.legalAid,
    ctaText: "Check Legal Aid & Voucher Scheme",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Contact Us",
    description: "Reach out via our contact page or call our team on 03300 100 015. We will discuss your situation and explain how we can help.",
    actionUrl: URLS.contactUs,
    actionText: "Contact Us",
  },
  {
    stepNumber: "02",
    title: "Attend MIAM",
    description: "You attend an individual, confidential 1-hour assessment meeting with an accredited mediator to review your circumstances.",
    actionUrl: URLS.miam,
    actionText: "Learn about MIAM",
  },
  {
    stepNumber: "03",
    title: "Other Person Invited",
    description: "We reach out to the other person, gently explaining mediation and inviting them to book their own private assessment meeting.",
  },
  {
    stepNumber: "04",
    title: "Mediation Sessions",
    description: "When both parties agree, we hold structured mediation sessions (joint or shuttle, online or in person) focusing on your key priorities.",
  },
  {
    stepNumber: "05",
    title: "Written Outcome",
    description: "At the conclusion, the mediator drafts a clear Memorandum of Understanding or Parenting Plan for you and your legal advisers.",
  },
];

export const WHY_CHOOSE_POINTS = [
  {
    title: "Fully Confidential",
    description: "All discussions remain without prejudice and strictly private, allowing you to speak freely and explore realistic solutions without fear of court disclosures.",
  },
  {
    title: "Impartial & Fair",
    description: "Our mediators remain strictly neutral. We do not take sides, judge past actions, or impose decisions, but guide constructive dialogue.",
  },
  {
    title: "Child-Focused",
    description: "We place the emotional well-being and practical everyday needs of your children at the center of every conversation and parenting plan.",
  },
  {
    title: "FMC Accredited",
    description: "All sessions are conducted in accordance with the professional code of practice of the Family Mediation Council (FMC).",
  },
  {
    title: "Flexible Options",
    description: "Choose between online video sessions or in-person meetings, joint rooms or shuttle mediation where you never have to be in the same space.",
  },
  {
    title: "Cost-Conscious",
    description: "A fraction of the cost of protracted court battles, with support to access the £500 Voucher Scheme and Legal Aid funding.",
  },
];

export const HAMPSHIRE_LOCATIONS = [
  "Southampton",
  "Portsmouth",
  "Winchester",
  "Basingstoke",
  "Eastleigh",
  "Fareham",
  "Andover",
  "Gosport",
  "Havant",
  "New Forest",
  "Aldershot",
  "Farnborough",
  "Petersfield",
  "Romsey",
  "Waterlooville",
  "Alton",
];

export const FAQS = [
  {
    question: "What is a MIAM and is it compulsory?",
    answer: "A MIAM (Mediation Information & Assessment Meeting) is a private, confidential one-hour meeting between you and an accredited family mediator. Under UK family law, you are generally required to attend a MIAM before making an application to the Family Court for child arrangements or financial remedies, unless an exemption applies (such as urgent safety risks or documented domestic abuse). The MIAM assesses whether mediation is suitable for your situation and helps you understand all resolution pathways.",
  },
  {
    question: "Do we have to be in the same room?",
    answer: "No. You do not have to be in the same room. We offer Shuttle Mediation, where you and the other party remain in separate private rooms (or separate online breakout rooms). The mediator moves between the two spaces to facilitate negotiations. This ensures you can negotiate calmly, safely, and comfortably without direct face-to-face contact.",
  },
  {
    question: "How long does family mediation usually take?",
    answer: "After the initial individual MIAMs, families typically require between 1 to 4 mediation sessions, each lasting around 90 minutes, depending on the complexity of the issues. For parenting arrangements, agreements are often reached within 1 to 2 sessions. Financial and property disputes may take 2 to 4 sessions to gather financial disclosure and review options.",
  },
  {
    question: "Is an agreement reached in family mediation legally binding?",
    answer: "Mediation proposals themselves are not automatically legally binding. Instead, at the conclusion of mediation, your mediator prepares a comprehensive summary (such as a Memorandum of Understanding and an Open Financial Statement). You can then take this document to your solicitor, who can turn it into a legally binding Consent Order approved by the court with minimal expense.",
  },
  {
    question: "Can I get Legal Aid or use the Family Mediation Voucher Scheme?",
    answer: "Yes. Family mediation is one of the few family law areas where Legal Aid remains available. If eligible, your MIAM and all mediation sessions will be completely free of charge. Additionally, if one party qualifies for Legal Aid, the other party's MIAM and first joint mediation session are also covered. For child arrangement cases, you may also qualify for the UK Government's £500 Family Mediation Voucher Scheme, which is non-means-tested.",
  },
  {
    question: "What happens if the other person refuses to attend?",
    answer: "Mediation is entirely voluntary. If you attend your MIAM and the other person declines our invitation, or if the mediator assesses that mediation is unsuitable, your FMC-accredited mediator can sign the relevant court application form (such as Form C100 for children or Form A for financial orders) so you can proceed to court.",
  },
  {
    question: "Can Hants Family Mediation help with both child arrangements and finances?",
    answer: "Yes. We offer all-issues mediation. This covers living arrangements, parenting schedules, holiday contact, and communication protocols for children, as well as property division, mortgage transfers, pensions, debts, and spousal maintenance.",
  },
];
