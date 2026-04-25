// Project types
export interface Project {
  id: string;
  title: string;
  /** Short pitch (~80 chars, 1 sentence) shown on cards. */
  tagline: string;
  /** Full problem-solution-impact paragraph shown on detail pages. */
  description: string;
  image: string;
  /** Year shipped (4-digit). Shown in detail-page quick-facts strip. */
  year: string;
  /** My role on the project (e.g. "Lead Engineer", "Solo Developer"). */
  role: string;
  /** Optional outcome / impact line — only fill when there's a real metric. */
  outcome?: string;
  tags: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  /** Optional override for which 2 tag names to show on cards. Falls back to first 2 tags. */
  cardTags?: string[];
  github?: string;
  /** Live demo URL (used by detail page secondary button). */
  liveUrl?: string;
  /** Optional manual curation for the related-projects strip. Falls back to same-category. */
  relatedIds?: string[];
  featured: boolean;
  category: 'development' | 'research' | 'automation' | 'ai' | 'app';
}

// Experience types
export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  current: boolean;
}

// Skill types
export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai' | 'other';
}

// Animation variants
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      staggerChildren?: number;
    };
  };
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

// Social links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  external: boolean;
}

// Achievement types
export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'award' | 'certification' | 'publication' | 'education';
  link?: string;
}

// Photography types
export interface PhotoItem {
  id: string;
  title: string;
  image: string;
  location: string;
  description?: string;
}

// Education types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
  relevant: string[];
}

// Theme types
export interface Theme {
  isDark: boolean;
}
