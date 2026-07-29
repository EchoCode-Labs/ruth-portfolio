export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ToolItem {
  name: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  file: string;
}

export interface ProjectContribution {
  label: string;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudy {
  slug: string;
  index: string;
  title: string;
  client: string;
  objective: string;
  tools: string[];
  contributions: string[];
  media: ProjectMedia[];
}

export interface DesignSample {
  src: string;
  alt: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}