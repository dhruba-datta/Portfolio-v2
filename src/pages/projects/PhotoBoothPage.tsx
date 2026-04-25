import { Upload, Search, Heart, User, Smartphone, Code, Zap, Eye } from "lucide-react";
import { SiReact, SiSanity, SiTailwindcss, SiGoogle, SiReactrouter, SiNetlify } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface PhotoBoothPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const PhotoBoothPage = ({ isDark, toggleTheme }: PhotoBoothPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="PhotoBooth"
    description="Photographers and creatives struggle to showcase their work on platforms that compress images, lack proper organization, or force intrusive ads. This professional photo-sharing platform solves that by delivering Pinterest-quality masonry layouts with full-resolution uploads, social engagement features, and secure authentication - transforming scattered photo libraries into beautifully organized galleries that let the work shine without platform interference or quality loss."
    coverSrc="/images/projects/photobooth.webp"
    chips={[
      { name: "React", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Sanity.io", icon: <SiSanity className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google OAuth", icon: <SiGoogle className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React Router", icon: <SiReactrouter className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Netlify", icon: <SiNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/photoBooth"
    secondaryUrl="https://phootobooth.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      { id: "upload", icon: <Upload className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Seamless Drag-and-Drop Uploads", summary: "Intuitive asset management pipeline with automatic format optimization", details: ["Frictionless drag-and-drop interface supporting high-resolution image uploads", "Smart metadata extraction allowing users to tag, categorize, and describe assets instantly", "Automated image optimization and CDN delivery ensured by Sanity's robust media pipeline"] },
      { id: "search", icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Intelligent Search & Discovery", summary: "Instantaneous content retrieval powered by advanced filtering algorithms", details: ["Real-time search functionality querying image titles, descriptions, and user-generated tags", "Dynamic category filtering allowing users to explore curated feeds based on specific interests", "Smart autocomplete suggestions and history tracking to streamline the discovery process"] },
      { id: "engagement", icon: <Heart className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Real-Time Social Interaction", summary: "Foster community engagement with instant feedback mechanisms", details: ["Interactive 'like' system with optimistic UI updates for immediate visual feedback", "Threaded commenting functionality supporting user mentions and conversation tracking", "Personalized activity feeds aggregating likes, comments, and new follower notifications"] },
      { id: "auth", icon: <User className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Secure OAuth Integration", summary: "Enterprise-grade authentication leveraging Google's secure identity platform", details: ["Seamless one-tap sign-in experience using Google OAuth 2.0 protocols", "Automated user profile creation syncing avatars and personal details upon registration", "Persistent session management with secure token handling for long-lived user logins"] },
      { id: "gallery", icon: <Eye className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Immersive Lightbox Experience", summary: "Distraction-free viewing environment for appreciating high-fidelity imagery", details: ["Edge-to-edge modal view with intuitive keyboard navigation (arrow keys, escape)", "Rich metadata display overlaying EXIF data, camera settings, and user attributions", "Smooth gesture-based controls including pinch-to-zoom and swipe transitions on touch devices"] },
      { id: "responsive", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Universal Responsive Design", summary: "Fluid masonry layout that adapts perfectly from 4K desktops to mobile screens", details: ["Mobile-first architecture ensuring full feature parity across all device classes", "Adaptive column sizing that intelligently reflows content based on available viewport width", "PWA (Progressive Web App) compliance allowing installation as a standalone app"] },
      { id: "components", icon: <Code className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Atomic Component Architecture", summary: "Scalable codebase built on reusable, self-contained UI primitives", details: ["Modular design system facilitating easy maintenance and rapid feature extension", "Custom React hooks encapsulating complex logic for API interactions and state management", "Consistent visual language enforced through a centralized Tailwind configuration"] },
      { id: "performance", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "High-Performance Optimization", summary: "Engineered for speed with advanced loading strategies and asset tuning", details: ["Intersection Observer implementation for intelligent lazy-loading of off-screen assets", "Route-based code splitting to minimize initial JavaScript payload execution", "Utilization of modern image formats (WebP) served via a globally distributed CDN"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React", description: "Component-based architecture driving component reusability and declarative UI updates." },
      { icon: <SiSanity className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Sanity.io", description: "Flexible headless CMS providing a real-time content lake for managing users, comments, and assets." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first styling framework enabling rapid development of custom, responsive designs." },
      { icon: <SiGoogle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google OAuth", description: "Secure, industry-standard authentication protocol for frictionless user onboarding and login." },
      { icon: <SiReactrouter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Router", description: "Dynamic client-side routing ensuring smooth transitions between gallery and profile views." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "High-performance edge hosting with integrated CI/CD pipelines for automated deployments." },
    ]}
    useCases={[
      "Professional portfolio and gallery platform for photographers and digital artists",
      "Community-driven image application enabling social interaction and feedback loops",
      "Content management prototype utilizing headless CMS architecture for scalability",
      "Digital asset management system for organizing and tagging large media libraries",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/photoBooth</code></>,
      <>Install deps:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Configure environment:&nbsp;Set Sanity project vars and Google OAuth credentials in your <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">.env</code>.</>,
      <>Start dev server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Build &amp; deploy (Netlify):&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code>&nbsp;then connect repo on Netlify for CI/CD.</>,
    ]}
    contactCTA={{
      title: "Need a high-performance web solution?",
      description: "I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default PhotoBoothPage;
