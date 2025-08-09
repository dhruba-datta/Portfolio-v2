// Project data structure for portfolio
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  link?: string;
  github?: string;
}
// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  link?: string;
  github?: string;
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
  description?: string;
  instagramUrl?: string;
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
