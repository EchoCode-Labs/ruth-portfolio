import type {
  SkillGroup,
  Certificate,
  CaseStudy,
  DesignSample,
  ContactChannel,
  NavItem,
} from "./types";

export const profile = {
  name: "Ezinwoke Ruth Chika",
  role: "Virtual Assistant",
  tagline: "Helping professionals stay organized, efficient and productive.",
  bio: "Hello! I'm Ruth Chika, a detail-oriented and dependable Virtual Assistant with a passion for helping businesses stay organized and productive. I provide administrative support, calendar and email management, data entry, internet research, document creation, spreadsheet management and more.",
  closingStatement:
    "I bring organization, clear communication, and reliable follow-through to every task, from content planning to admin support. Ready to help your business run smoother.",
  location: "Lagos, Nigeria",
  cvFile: "/documents/ezinwoke-ruth-chika-cv.pdf",
  availability: "Available for new projects",
} as const;

export const heroStats: { value: string; label: string }[] = [
  { value: "1", label: "Live client project" },
  { value: "2", label: "Case studies documented" },
  { value: "<24h", label: "Typical response time" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "rchika230@gmail.com",
    href: "mailto:rchika230@gmail.com",
  },
  {
    label: "Phone",
    value: "+234 802 874 0253",
    href: "tel:+2348028740253",
  },
  {
    label: "Phone (alt)",
    value: "+234 810 478 5501",
    href: "tel:+2348104785501",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ezinwoke-ruth",
    href: "https://www.linkedin.com/in/ezinwoke-ruth-9a4324260",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Executive & Administrative Support",
    items: [
      "Email & Calendar Management",
      "Appointment & Meeting Scheduling",
      "Travel Coordination",
      "Document Preparation",
      "Project Planning & Execution",
    ],
  },
  {
    title: "Customer Support & Client Relations",
    items: [
      "Customer Inquiry Handling",
      "Client Communication",
      "Issue Resolution",
      "Service Excellence",
    ],
  },
  {
    title: "CRM & Data Management",
    items: [
      "Database Management",
      "CRM Updates & Maintenance",
      "Data Entry",
      "Report Generation",
      "Record Keeping",
    ],
  },
  {
    title: "Lead Generation & Business Development",
    items: [
      "Prospect Identification",
      "Contact List Building",
      "Market Research",
      "CRM Data Entry & Management",
    ],
  },
];

export const tools: string[] = [
  "Google Workspace",
  "Google Meet",
  "Zoom",
  "Asana",
  "Slack",
  "Trello",
  "Microsoft Tools",
  "Calendly",
  "Gmail",
  "Canva",
  "Notion",
  "Monday.com",
];

export const softSkills: string[] = [
  "Communication",
  "Time Management",
  "Problem Solving",
  "Adaptability",
  "Attention to Detail",
];

export const certificates: Certificate[] = [
  {
    title: "High-Impact Executive Assistant Training Program",
    issuer: "Skill2Scale Digital",
    year: "2026",
    description:
      "A practical training program signifying professional growth, dedication, and the ability to perform with excellence in executive-level administrative support.",
    file: "/images/certificates/executive-assistant.pdf",
  },
  {
    title: "High-Impact Virtual Assistant Training Program",
    issuer: "Skill2Scale Digital",
    year: "2026",
    description:
      "Covered core virtual assistant skills: administrative support, calendar & email management, online research, customer communication, social media assistance, and basic digital tools, delivered through live classes, weekly tasks, and assessments.",
    file: "/images/certificates/virtual-assistant.pdf",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "executive-support-system",
    index: "01",
    title: "Executive Support System Setup & Business Operations",
    client: "Ezeoha Rejoice — Founder & CEO, Glow By Rejoice Hub",
    objective:
      "Set up efficient systems to improve email management, scheduling, file organization, and client onboarding for a growing skincare brand.",
    tools: ["Google Calendar", "Google Meet", "Google Docs", "Canva"],
    contributions: [
      "Managed calendar and scheduled meetings",
      "Organized email with filters, signatures, and templates",
      "Created a structured Google Drive filing system and file management SOP",
      "Developed a client onboarding document",
      "Drafted three template responses for common inquiries",
      "Created a contact list to keep a record of customers' information",
    ],
    // All-landscape app screenshots — a tighter ratio than the page default,
    // paired with "contain" since it already matches closely (near-zero
    // matting) rather than needing any cropping.
    mediaAspectRatio: "3 / 2",
    mediaObjectFit: "contain",
    media: [
      {
        src: "/images/projects/calendar-management.jpeg",
        alt: "Google Calendar week view showing scheduled meetings and tasks",
        caption: "Calendar management — weekly meeting & task scheduling",
      },
      {
        src: "/images/projects/email-management.jpeg",
        alt: "Gmail inbox organized with labels",
        caption: "Email management — organized inbox",
      },
      {
        src: "/images/projects/email-labels.jpeg",
        alt: "Gmail filters and labels configuration",
        caption: "Filters & labels for automatic email routing",
      },
      {
        src: "/images/projects/drive-sop.jpeg",
        alt: "Google Drive folder structure for Glow By Rejoice Hub",
        caption: "Google Drive organization SOP — 9-folder client system",
      },
    ],
  },
  {
    slug: "content-strategy-brand-engagement",
    index: "02",
    title: "Content Strategy & Brand Engagement Support",
    client: "Ezeoha Rejoice — CEO & Founder, Glow By Rejoice Hub",
    objective:
      "Improve the brand's digital presence and operations through social media content, visual designs, meeting documentation, and webinar promotional materials that boost engagement and support business growth.",
    tools: ["Google Docs", "Canva", "Instagram"],
    contributions: [
      "Built and managed a 5-stage content workflow",
      "Designed an Instagram carousel post to boost audience engagement",
      "Designed a promotional webinar flyer for client outreach",
      "Built a 1-page content strategy",
      "Developed professional meeting minutes capturing key decisions, actions, and next steps",
    ],
    // Mostly portrait/square marketing graphics — "cover" fills every frame
    // edge-to-edge. Note: this will crop a bit off the sides of the portrait
    // pieces (Instagram carousel, webinar flyer) to match this landscape
    // ratio. Preview after this change — if any headline/logo/CTA text gets
    // cut off near the edges, either bump mediaAspectRatio narrower here
    // (e.g. "4 / 5") or re-export those two graphics with a bit more margin.
    mediaAspectRatio: "4 / 3",
    mediaObjectFit: "cover",
    media: [
      {
        src: "/images/projects/trello-board.png",
        alt: "Trello board with planning, in-progress, review, scheduled, and posted columns",
        caption: "5-stage content workflow system",
      },
      {
        src: "/images/projects/instagram-carousel.jpeg",
        alt: "Instagram carousel: Quick Skin Fixes You Actually Have Time For",
        caption: "Instagram carousel — “Quick Skin Fixes You Actually Have Time For”",
      },
      {
        src: "/images/projects/webinar-flyer.jpeg",
        alt: "Business webinar promotional flyer",
        caption: "Business webinar flyer design",
      },
    ],
  },
];

export const designSamples: DesignSample[] = [
  { src: "/images/designs/tech-gadgets-ad.png", alt: "Tech Hub Gadgets promotional ad" },
  { src: "/images/designs/election-poster.png", alt: "Public Relations Officer campaign poster" },
  { src: "/images/designs/perfume-ad.png", alt: "Ruth Essence perfume brand ad" },
  { src: "/images/designs/book-cover.png", alt: "Book cover layout design" },
  { src: "/images/designs/valentine-flyer.png", alt: "Valentine's Dinner Night event flyer" },
  { src: "/images/designs/keke-napepe-ad.png", alt: "KekeNapepe transport service ad" },
];

export const faqs = [
  {
    question: "What kind of businesses do you support?",
    answer:
      "Small business owners and founders — especially those who need help staying on top of email, scheduling, content, and day-to-day operations so they can focus on growth.",
  },
  {
    question: "How quickly do you respond?",
    answer:
      "Within 24 hours for email and typically much sooner for urgent requests.",
  },
  {
    question: "What tools do you already work in?",
    answer:
      "Google Workspace, Gmail, Slack, Asana, Trello, Notion, Monday.com, Calendly, Zoom, Google Meet, and Canva — see the full list on the About page.",
  },
];