import { Search, Database, Zap, BadgeCheck, FileJson, ShieldCheck, Gauge } from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { SiYoast, SiGoogleanalytics, SiCloudflare, SiElementor, SiMysql } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface KingsleyGroupPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const KingsleyGroupPage = ({ isDark, toggleTheme }: KingsleyGroupPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Kingsley Group"
    description={<>A comprehensive corporate website redesign and development project for a leading environmental engineering firm. This platform features not just a visual overhaul but a robust, scalable digital infrastructure supporting an expanded content strategy with <b>Resources</b>, <b>Blog</b>, and <b>News</b> libraries. Implemented with end-to-end <b> SEO</b> best practices and performance optimization, it serves as a multi-regional digital headquarters for operations in Australia, Bangladesh, and China.</>}
    coverSrc="/images/kingsley-cover.jpg"
    chips={[
      { name: "WordPress", icon: <FaWordpress className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "PHP 8", icon: <BiLogoPhp className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "MySQL", icon: <SiMysql className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Yoast SEO", icon: <SiYoast className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Cloudflare CDN", icon: <SiCloudflare className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Elementor/Gutenberg", icon: <SiElementor className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    secondaryUrl="https://kingsleygroup.co/"
    secondaryLabel="Check it out"
    features={[
      { id: "redesign", icon: <BadgeCheck className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Strategic Website Redesign", summary: "Modern, high-conversion UI/UX overhaul focusing on usability and brand aesthetics", details: ["Completely reworked information architecture with intuitive navigation menus and logical URL structures", "Development of modular, reusable templates for varied content needs across Services, Industries, and Location pages", "Implementation of a cohesive visual design system with accessible color palettes and readable typography standards"] },
      { id: "seo", icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Advanced SEO & Content Strategy", summary: "Comprehensive on-page and technical SEO implementation for maximum organic visibility", details: ["Granular control over titles, meta descriptions, and Open Graph tags via Yoast SEO integration", "Deployment of structured data (Schema markup) for FAQs, Articles, and How-tos to capture rich snippets", "Strategic topic clustering and automated internal linking structures to enhance domain authority and crawlability"] },
      { id: "blog", icon: <FileJson className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Dynamic Blog & Media Hub", summary: "Sophisticated editorial workflow management system for content-rich publishing", details: ["Custom taxonomies and categorization for streamlined organization of diverse content types", "Standardized featured image protocols and rich author profiles to build thought leadership credentials", "Intelligent 'Related Posts' logic and 'Latest Updates' widgets to drive sustained user engagement"] },
      { id: "resources", icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Digital Resources Library", summary: "Centralized repository for downloadable assets enabling lead generation and sales enablement", details: ["Custom Post Type (CPT) architecture dedicated to managing Whitepapers, Brochures, and Technical Files", "Strategic placement of Call-to-Actions (CTAs) with flexible gated/ungated content permission controls", "Full integration of UTM-ready links to accurately track campaign performance and attribution"] },
      { id: "performance", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Performance & Core Web Vitals", summary: "Technical optimizations ensuring rapid load times and passing Core Web Vitals metrics", details: ["Global content delivery and edge caching powered by Cloudflare CDN integration", "Next-gen image optimization (WebP), responsive sizing, and intelligent lazy-loading implementation", "Aggressive asset minification and deferral of non-critical third-party scripts to reduce blocking time"] },
      { id: "accessibility", icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Accessibility & Compliance", summary: "Commitment to inclusive design principles following WCAG guidelines", details: ["Semantic HTML hierarchy with proper heading structures and accessible form labeling", "Full keyboard navigability and visible focus indicators for power users and assistive technologies", "Rigorous color contrast auditing to ensure readability for users with visual impairments"] },
      { id: "analytics", icon: <Gauge className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Data-Driven Analytics", summary: "Robust tracking setup using GA4 to capture meaningful user interactions and conversion events", details: ["Precision tracking of high-value actions including outbound clicks, form fills, and file downloads", "Detailed capture of site search queries to inform future content strategy and identify user intent", "Custom event modeling to visualize the complete user journey from landing to conversion"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <FaWordpress className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "WordPress CMS", description: "Sophisticated custom theme development utilizing proper hierarchy and structured content models for long-term scalability." },
      { icon: <BiLogoPhp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "PHP 8", description: "Modern server-side scripting powering dynamic template logic, performance-optimized hooks, and secure data processing." },
      { icon: <SiMysql className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "MySQL", description: "Reliable and efficient relational database management system handling complex queries and structured data storage." },
      { icon: <FileJson className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "ACF & Custom Post Types", description: "Advanced content architecture for managing bespoke data types like Resources, News, and flexible layout blocks." },
      { icon: <SiYoast className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Yoast SEO", description: "Industry-standard suite for complete on-page optimization, XML sitemap generation, and detailed schema integration." },
      { icon: <SiGoogleanalytics className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Analytics 4 (GA4)", description: "Comprehensive analytics implementation tracking granular events like form submissions, file downloads, and interactions." },
      { icon: <SiCloudflare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Cloudflare", description: "Enterprise-grade Content Delivery Network (CDN) providing edge caching, DDoS protection, and security hardening." },
    ]}
    useCases={[
      "Corporate website redesign initiatives for mid-to-large professional services firms",
      "Implementation of SEO-driven content hubs (Blogs, News, Resources) to drive organic growth",
      "Digital sales enablement through centralized, tracked downloadable resource libraries",
      "Architecture for multi-location businesses requiring regional landing pages and content localization",
      "Streamlined editorial workflows designed for marketing teams to publish without developer intervention",
    ]}
    howToSectionTitle="How to Manage"
    howToSteps={[
      <><b>Create blog/news:</b> Posts → Add New → write content, set Categories/Tags, add Featured Image → fill Yoast title/description → Publish.</>,
      <><b>Add a resource:</b> Resources (CPT) → Add New → upload file or set external link → fill summary &amp; CTA text → publish and link from service pages.</>,
      <><b>Edit pages:</b> Use Elementor/Gutenberg blocks → keep headings semantic (H1/H2/H3) and compress images for performance.</>,
      <><b>Menus &amp; footer:</b> Appearance → Menus (update primary/utility menus) and Widgets if applicable.</>,
      <><b>SEO checks:</b> Ensure Yoast green basics, add internal links, and keep slugs readable; verify page is in XML sitemap.</>,
      <><b>Analytics:</b> GA4 → monitor Events for form submits, downloads, and outbound clicks; use insights to plan next content.</>,
    ]}
    contactCTA={{
      title: "Need a high-performance web solution?",
      description: "I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default KingsleyGroupPage;
