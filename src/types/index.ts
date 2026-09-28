export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  defaultContactMessage?: string;
  defaultContactSubject?: string;
}

export interface HeroData {
  statusBadge: string;
  tagline: string;
  subheadline: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface AboutData {
  summary: string;
  careerObjective: string;
  strengths: string[];
  highlights: string[];
  languages: string[];
}

export interface Project {
  id: number;
  title: string;
  category: 'AI / ML' | 'Full Stack' | 'Web Development' | 'Data Science';
  tech: string[];
  description: string;
  githubLink: string;
  projectUrl?: string;
  image: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  role?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  isCurrent?: boolean;
  points: string[];
  technologies?: string[];
  certificateUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  details?: string[];
  markcardImage?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  credentialId?: string;
  category?: string;
  date?: string;
  description?: string;
  pdf?: string;
  file?: string;
  thumbnail?: string;
  previewImage?: string;
  verifyUrl?: string;
  badgeImage?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  category: string;
  iconName: string;
}
