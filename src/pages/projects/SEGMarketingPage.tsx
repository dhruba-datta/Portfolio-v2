import { Webhook, Target, Users, BarChart3, Rocket, Activity } from "lucide-react";
import { SiReact, SiVite, SiTailwindcss, SiN8N, SiFramer } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface SEGMarketingPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const SEGMarketingPage = ({ isDark, toggleTheme }: SEGMarketingPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="SEG Marketing"
    description="Marketing agencies lose qualified leads every day because generic landing pages fail to speak directly to each industry's unique pain points. This specialized lead generation platform solves that by delivering tailored conversion experiences for Legal, Healthcare, and Restaurant clients - each with strategic UX patterns and automated n8n workflows that ensure zero lead loss between form submission and CRM, transforming scattered prospects into organized pipeline opportunities."
    coverSrc="/images/projects/SEG Marketing.webp"
    chips={[
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite 6", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "n8n Automation", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Lead Generation", icon: <Target className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Conversion UX", icon: <Rocket className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/SocialEngagementGroup/marketing"
    secondaryUrl="https://digital.socialengagementgroup.com/"
    secondaryLabel="Check it out"
    features={[
      { id: "landing-pages", icon: <Rocket className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Industry-Specific Landing Pages", summary: "High-conversion UX tailored for Legal, Healthcare, and Restaurants", details: ["Specialized design patterns for modern lawyers, medical practices, and restaurant marketing", "Strategic multi-step lead capture forms designed to reduce friction and qualify prospects", "Immersive full-screen section transitions optimized for desktop sales presentations", "Tailored value propositions and social proof modules specific to each industry domain"] },
      { id: "automation", icon: <Webhook className="w-4 sm:w-5 h-4 sm:h-5" />, title: "n8n Lead Orchestration", summary: "Bulletproof data routing from structured forms to internal CRMs", details: ["Deep integration with n8n automated workflows for real-time lead capture and notification", "Error-resilient webhook infrastructure ensuring 99.9% data integrity between platforms", "Automated lead tagging and segmentation based on industry-specific qualification criteria", "Direct routing to various CRM endpoints including HubSpot, Salesforce, or Google Sheets"] },
      { id: "conversion", icon: <Users className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Conversion-Focused UX", summary: "Strategic CTAs and interactive marketing components", details: ["Seamless Calendly integration for instant discovery call scheduling and lead booking", "Visually striking 'Elastic' transitions creating a premium, agency-grade browsing experience", "Dynamic hero sections with floating parallax elements and custom scroll indicators", "Sticky conversion anchors and optimized touch targets for high-intent mobile users"] },
      { id: "seo", icon: <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Measurable SEO Strategy", summary: "Dynamic per-page metadata and visibility optimization", details: ["Highly optimized React Router 7 setup for clean, crawlable URL structures across all industry pages", "Dynamic title and meta-tag injection architecture for granular search engine targeting", "Performance-hardened asset pipeline ensuring maximum visibility in high-intent search markets", "Automated canonical URL generation to prevent duplication across localized landing pages"] },
      { id: "immersive-ux", icon: <Target className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Immersive UX Workflow", summary: "Elastic desktop transitions and dynamic parallax hero sections", details: ["Implementation of custom 'Elastic' easing functions for section-to-section navigation", "Floating parallax background elements that react to mouse position or scroll intent", "Sophisticated visual hierarchy using premium display typography and high-contrast layouts", "Interactive services sections with multi-slide carousels and auto-rotating mobile views"] },
      { id: "premium-aesthetics", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Premium Agency Aesthetics", summary: "High-end display typography and refined visual hierarchy", details: ["Curation of agency-grade display fonts for a sophisticated, luxury-market visual appeal", "Precision spacing and 'Glassmorphism' UI effects for a modern, state-of-the-art feel", "Custom iconography and consistent button styling that wows users at first glance", "Aesthetic dark/light mode balance ensuring visual comfort and brand authority"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Building a high-performance, interactive multi-page experience with latest concurrent features." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vite 6", description: "Modern build pipeline for optimized production bundles and lightning-fast developer experience." },
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n Automation", description: "Backend choreography for complex lead capture workflows and automated CRM distribution." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first framework enabling rapid prototyping and consistent design system implementation." },
      { icon: <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Webhooks", description: "Real-time data transmission ensuring instant lead notifications and CRM synchronization." },
      { icon: <SiFramer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Framer Motion", description: "Production-grade animation library powering elastic transitions and parallax effects." },
      { icon: <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Router 7", description: "Advanced client-side routing enabling seamless navigation across industry-specific pages." },
      { icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Calendly API", description: "Embedded scheduling integration converting prospects into booked discovery calls instantly." },
    ]}
    useCases={[
      "Legal: Specialized high-conversion funnels for law practices and attorney lead generation",
      "Healthcare: HIPAA-compliant patient inquiry management for medical clinics and private practices",
      "Restaurants: Modern digital marketing layouts optimized for dining and hospitality businesses",
      "Multi-Industry: Scalable automation-driven platform for diverse industry verticals and niches",
      "Agency Partnerships: White-label solution for marketing agencies managing multiple client campaigns",
      "Lead Qualification: Automated prospect filtering reducing sales team time spent on unqualified leads",
      "CRM Integration: Seamless data flow into HubSpot, Salesforce, or custom internal systems",
    ]}
    howToSteps={[
      <>Clone repository:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/SocialEngagementGroup/marketing</code></>,
      <>Install dependencies:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Start development server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Build for production:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code></>,
      <>Deploy:&nbsp;Drag the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">dist</code> folder to <b>Netlify</b> or connect your repository for automated deployment.</>,
    ]}
    contactCTA={{
      title: "Want to automate your marketing funnel?",
      description: "I build lead generation platforms that scale with your business. Let's talk about your marketing infrastructure.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default SEGMarketingPage;
