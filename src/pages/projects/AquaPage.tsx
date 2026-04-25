import {
  Sparkles,
  MousePointer2,
  Layout,
  Zap,
  Menu,
  Briefcase,
  Smartphone,
} from "lucide-react";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNetlify,
  SiGreensock,
} from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface AquaPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const AquaPage = ({ isDark, toggleTheme }: AquaPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Aqua Innovations"
    description="Modern agencies struggle to win premium clients when their own website looks like every other template-built portfolio. This high-end agency platform solves that by combining momentum-based smooth scrolling, GSAP-powered cinematic transitions, and a transformative slide-out navigation - turning the website itself into a portfolio piece that signals quality before a prospect ever reads a word of copy."
    coverSrc="/images/projects/Aqua.webp"
    chips={[
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite 7", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind 4", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "GSAP", icon: <SiGreensock className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Lenis", icon: <MousePointer2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Netlify", icon: <SiNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/Aqua"
    secondaryUrl="https://aqua-bd.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "fluid-motion",
        icon: <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Fluid Motion & Momentum Scroll",
        summary: "Cinematic 'quiet luxury' feel powered by GSAP and Lenis",
        details: [
          "Lenis momentum-based smooth scrolling delivering the buttery, physics-driven scroll prospects expect from premium agencies",
          "GSAP-driven entrance animations for hero headings, statements, and section reveals tuned to a calm 'quiet luxury' cadence",
          "Interactive hero mouse trail that spawns rotating image cards as the visitor explores, creating a tactile first impression",
          "Carefully orchestrated reveal sequences across Statement, Industries, and Approach sections for a consistent rhythm",
        ],
      },
      {
        id: "navigation",
        icon: <Menu className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Transformative Slide-Out Navigation",
        summary: "Scaling-origin menu transition that feels native, not bolted-on",
        details: [
          "Custom slide-out menu using scaling-origin transforms for a cinematic, app-like opening sequence",
          "Smooth route transitions across Home, Privacy, Terms, and Legal pages without jarring page swaps",
          "Sticky GET STARTED CTA persisting in the top-right so the conversion path is always one tap away",
          "Touch-optimized interactions ensuring the same premium feel on mobile and desktop",
        ],
      },
      {
        id: "section-system",
        icon: <Layout className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Modular Section-Driven Layout",
        summary: "A library of pre-styled blocks ready to recompose for any pitch",
        details: [
          "Rich suite of modular sections: Statement, Services, Industries, Why Aqua, Approach, Portfolio, Testimonials, Team, Clients, Marquee, and Contact",
          "Each block is self-contained so the homepage narrative can be reordered without touching styles or layout primitives",
          "Consistent type system (uppercase eyebrows, large display headings, subtle micro-copy) bonded across every section",
          "Responsive scaling using clamp-based fluid typography so the design holds up from 360px phones to 4K displays",
        ],
      },
      {
        id: "performance",
        icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Lightning-Fast Performance",
        summary: "React 19 + Vite 7 with a deliberately minimal bundle footprint",
        details: [
          "React 19 concurrent rendering keeping the hero animation, mouse trail, and scroll effects buttery even on mid-tier hardware",
          "Vite 7 build pipeline producing tightly tree-shaken bundles for fast first paint and instant route switches",
          "Hero background blur and overlay handled in CSS to avoid expensive runtime image processing",
          "Lazy-mounted trail items that auto-clean after their fade so memory stays flat during long scroll sessions",
        ],
      },
      {
        id: "design-system",
        icon: <Briefcase className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Premium Agency Design System",
        summary: "Tailwind CSS v4 utility system tuned for high-end brand work",
        details: [
          "Tailwind CSS v4 with custom fluid typography utilities and brand-aligned color tokens for absolute design flexibility",
          "Hover states across Industries and Why Aqua cards using a signature cyan accent that locks in the Aqua identity",
          "Aspect-locked imagery and consistent radii across portfolio thumbnails for a cohesive editorial feel",
          "Dedicated Privacy, Terms, and Legal pages styled to match the marketing pages — no template-looking footer routes",
        ],
      },
      {
        id: "responsive",
        icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Responsive Across Every Device",
        summary: "From 360px phones to ultrawide monitors without breakpoints showing",
        details: [
          "Mobile-first layouts collapsing the slide-out menu, hero copy, and section grids without losing the cinematic feel",
          "Mouse-trail interaction gracefully disabled on touch devices in favor of the tap-driven navigation flow",
          "Contact form and CTAs sized for thumb reach so mobile prospects convert as easily as desktop ones",
          "Tested across breakpoints with fluid clamp-based typography so headlines never overflow or truncate awkwardly",
        ],
      },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Latest concurrent features driving the hero mouse trail, animated reveals, and route transitions." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vite 7", description: "Modern build tooling delivering instant HMR in development and tightly tree-shaken production bundles." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4", description: "Utility-first framework powering the fluid typography, responsive grid, and brand color system." },
      { icon: <SiGreensock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "GSAP", description: "Production-grade animation library orchestrating the hero entrance, scroll reveals, and mouse-trail choreography." },
      { icon: <MousePointer2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Lenis Smooth Scroll", description: "Momentum-based scrolling library giving the entire site its signature cinematic, physics-driven feel." },
      { icon: <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Router 7", description: "Client-side routing across Home, Privacy, Terms, and Legal pages with seamless transitions." },
      { icon: <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Component Architecture", description: "Reusable section components (Statement, Industries, Portfolio, Team, Testimonials) for rapid recomposition." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Production deployment with instant cache invalidation and global CDN delivery." },
    ]}
    useCases={[
      "Boutique digital agencies needing a homepage that signals premium pricing before the first conversation",
      "Creative studios pitching brand, web, and product clients with one cohesive editorial-feel narrative",
      "Freelancers wanting a portfolio framework that doesn't look like every Figma template on the market",
      "Established agencies refreshing an outdated site with a cinematic motion layer without rebuilding from scratch",
      "Architecture, interior, and luxury services brands where visual storytelling is the entire sales pitch",
      "Small teams needing a modular section library so new case studies and offers can be added in minutes",
      "Anyone who wants Lenis smooth-scrolling and GSAP motion patterns referenced as a working production starter",
    ]}
    howToSteps={[
      <>Clone repository:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/Aqua</code></>,
      <>Install dependencies:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Start dev server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code>&nbsp;and open <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">http://localhost:5173</code>.</>,
      <>Production build:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code></>,
      <>Deploy:&nbsp;Drag the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">dist</code> folder to <b>Netlify</b> or connect the repository for automated continuous deployment.</>,
    ]}
    contactCTA={{
      title: "Need an agency-grade website that converts?",
      description: "I design and build premium, motion-rich web experiences for studios and creative brands. Let's talk about elevating yours.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default AquaPage;
