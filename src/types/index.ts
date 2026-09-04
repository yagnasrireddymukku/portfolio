export type ProjectCategory = 'All' | 'AI' | 'Full-Stack' | 'Creative Technology' | 'Web Development' | 'E-Commerce';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  status: string;
  role: string;
  featured: boolean;
  tags: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  technicalArchitecture: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  bannerGradient: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  team?: string;
  period: string;
  dateStart: string;
  dateEnd: string;
  roleArea: string;
  badge: string;
  isCurrent: boolean;
  description: string;
  focusAreas: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    description: string;
    tags: string[];
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  branch: string;
  period: string;
  status?: string;
  institution?: string;
  location?: string;
  grade?: string;
  isProminent: boolean;
  summary: string;
  coursework: string[];
}

export type CertificateCategory = 'All' | 'Artificial Intelligence' | 'Programming' | 'Web Development' | 'Software Engineering';

export interface CertificateItem {
  id: string;
  name: string;
  organization: string;
  date: string;
  category: CertificateCategory;
  credentialUrl?: string;
  credentialId?: string;
  certificateImage?: string;
  certificatePdf?: string;
  organizationLogo?: string;
  description: string;
  keySkills: string[];
}

export interface CreativeItem {
  id: string;
  title: string;
  medium: string;
  description: string;
  category: 'Resin Art' | 'UV Resin Art' | 'Crafts';
  accentColor: string;
  aspectRatio: string;
  details: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
