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
    description="Kingsley Group is an environmental engineering firm serving three international markets. I redesigned their website on WordPress with a custom PHP theme, modernized the UX, and optimized for SEO. The site includes a blog and resources library with structured content types, Yoast SEO integration for on-page optimisation, Google Analytics 4 for tracking conversions, and Cloudflare CDN for performance and security. It's built to let their team publish content without developer help."
    coverSrc="/images/projects/Kingsley Group.webp"
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
      { id: "redesign", icon: <BadgeCheck className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Website Redesign", summary: "Modern design with clearer navigation and structured content", details: ["Reorganized information architecture with logical URL structures", "Custom page templates for services, industries, and locations", "Accessible colour palettes and readable typography", "Mobile-responsive layout"] },
      { id: "seo", icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />, title: "SEO Optimisation", summary: "On-page SEO and structured data via Yoast", details: ["Yoast SEO integration for title, description and keyword management", "Schema.org markup for FAQs and Articles", "Automated XML sitemap generation", "Internal linking strategy"] },
      { id: "blog", icon: <FileJson className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Blog & News", summary: "Publishing system for articles and thought leadership", details: ["Blog with categories and tags", "Featured image and author profiles", "Related posts recommendations", "Archive and search functionality"] },
      { id: "resources", icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Resources Library", summary: "Downloadable whitepapers and technical documents", details: ["Custom post type for resources (whitepapers, brochures)", "Strategic CTAs above and below resource listings", "UTM-tagged download links for analytics", "Gated and ungated access options"] },
      { id: "performance", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Performance", summary: "Cloudflare CDN and image optimisation", details: ["Cloudflare CDN for global edge caching", "WebP image optimisation and lazy-loading", "Minified assets and deferred script loading", "Mobile and desktop performance"] },
      { id: "accessibility", icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Accessibility", summary: "Semantic HTML and keyboard navigation", details: ["Semantic HTML hierarchy with proper heading structure", "Accessible form labeling and error messages", "Keyboard navigation and focus indicators", "Sufficient colour contrast"] },
      { id: "analytics", icon: <Gauge className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Google Analytics 4", summary: "Tracking conversions and user behaviour", details: ["Events for form submissions, file downloads, and outbound clicks", "Site search query logging for content insights", "User journey tracking from landing to conversion", "Regular reporting and analysis"] },
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
      "Professional services firms that need a modern, SEO-optimised site",
      "Businesses with a blog or resource library that the team manages",
      "Companies serving multiple regions that need regional content",
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
