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
    description="A lead generation platform for three industries: Legal, Healthcare, and Restaurants. I built it on React 19 with Vite 6, Tailwind CSS, and React Router 7 for fast navigation across industry pages. Each landing page has a form that sends leads via webhook to n8n, which routes them into CRMs and triggers notifications. Features include Calendly integration for instant call booking, Framer Motion animations for section transitions, and per-page SEO metadata."
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
      { id: "landing-pages", icon: <Rocket className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Industry-Specific Landing Pages", summary: "Pages for Legal, Healthcare, and Restaurants with tailored copy", details: ["Separate landing pages for lawyers, medical practices, and restaurants", "Lead capture forms on each page", "Calendly integration for instant call booking", "Per-page meta descriptions and titles"] },
      { id: "automation", icon: <Webhook className="w-4 sm:w-5 h-4 sm:h-5" />, title: "n8n Webhook Routing", summary: "Forms send leads to n8n for CRM integration", details: ["Form submission webhooks connect to n8n workflows", "n8n routes leads to HubSpot, Salesforce, Google Sheets, or custom endpoints", "Lead tagging based on form source and submission data", "Error handling for failed submissions"] },
      { id: "conversion", icon: <Users className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Conversion UX", summary: "Clear CTAs and Calendly scheduling", details: ["Sticky call-to-action anchors on mobile and desktop", "Calendly iframe for booking discovery calls without leaving the page", "Form validation and success/error messages", "Touch-friendly button sizing"] },
      { id: "seo", icon: <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5" />, title: "SEO Metadata", summary: "Per-page titles, descriptions and canonical URLs", details: ["Dynamic page titles and meta descriptions per landing page", "Canonical URLs to prevent duplication", "Clean URL structure via React Router 7", "Open Graph tags for social sharing"] },
      { id: "immersive-ux", icon: <Target className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Animations", summary: "Framer Motion transitions between sections", details: ["Elastic easing functions for section-to-section navigation", "Scroll-triggered fade-in and slide effects", "Parallax hero sections", "Mobile-optimized animations"] },
      { id: "premium-aesthetics", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Design & Branding", summary: "Premium typography and consistent visual hierarchy", details: ["Playfair Display and Inter typography", "Light and dark mode support", "Consistent spacing and component styling", "Custom icons for industry pages"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Building a high-performance, interactive multi-page experience with latest concurrent features." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vite 6", description: "Modern build pipeline for optimized production bundles and lightning-fast developer experience." },
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n Automation", description: "Backend choreography for complex lead capture workflows and automated CRM distribution." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first framework enabling rapid prototyping and consistent design system implementation." },
      { icon: <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Webhooks", description: "Real-time data transmission ensuring instant lead notifications and CRM synchronization." },
      { icon: <SiFramer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Framer Motion", description: "Production-grade animation library powering elastic transitions and parallax effects." },
      { icon: <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Router 7", description: "Client-side routing between the industry-specific pages." },
      { icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Calendly API", description: "Embedded scheduling integration converting prospects into booked discovery calls instantly." },
    ]}
    useCases={[
      "Legal practices and law firms that need industry-focused lead capture",
      "Medical practices and clinics capturing patient inquiries",
      "Restaurants marketing to diners and corporate event planners",
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
