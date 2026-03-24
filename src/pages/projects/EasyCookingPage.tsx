import { Globe2, Smartphone, Activity, BadgeCheck, Github } from "lucide-react";
import { SiHtml5, SiCss3 } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface EasyCookingPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const EasyCookingPage = ({ isDark, toggleTheme }: EasyCookingPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="EasyCooking"
    description="Home cooks struggle to find authentic recipes from diverse cuisines while juggling messy recipe sites loaded with ads and slow load times. This streamlined cooking platform solves that by delivering curated Bengali, Chinese, and Indian recipes with distraction-free instructions that load instantly on any device - transforming kitchen chaos into confident cooking with zero distractions and recipes that are actually usable while your hands are covered in flour."
    coverSrc="/images/projects/EasyCooking.webp"
    chips={[
      { name: "HTML5", icon: <SiHtml5 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "CSS3", icon: <SiCss3 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Responsive Design", icon: <Smartphone className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Multi-Cuisine", icon: <Globe2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "GitHub Pages", icon: <Github className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/EasyCooking"
    secondaryUrl="https://dhruba-datta.github.io/EasyCooking/"
    secondaryLabel="Check it out"
    features={[
      { id: "multi-cuisine", icon: <Globe2 className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Multi-Cuisine Support", summary: "Extensive library of authentic recipes spanning Bengali, Chinese, and Indian culinary traditions", details: ["Dedicated, culturally distinct sections for each cuisine type providing an immersive thematic experience", "Collection of traditional and authentic recipes curated for both beginners and experienced cooks", "Seamless and intuitive navigation system allowing users to effortlessly switch between culinary regions", "Rich visual presentation showcasing the cultural diversity and vibrancy of each food category"] },
      { id: "responsive", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Cross-Platform Design", summary: "Fully responsive architecture ensuring a flawless reading experience on any device", details: ["Mobile-first design approach prioritizing readability and usability on smartphones and tablets", "Touch-friendly interface elements designed for easy interaction in a kitchen environment", "Consistent visual hierarchy and user experience maintained across desktops, tablets, and phones", "Optimized layout that adapts fluidly to different screen sizes without compromising content accessibility"] },
      { id: "fullscreen", icon: <BadgeCheck className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Fullscreen Mode", summary: "Distraction-free immersive viewing mode designed specifically for active cooking sessions", details: ["Dedicated reading mode that removes UI clutter to focus purely on ingredients and instructions", "Structured step-by-step breakdown of recipes to ensure clarity and ease of following", "Typography optimized for legibility at a distance, perfect for glancing while cooking", "Enhanced visual layout that turns your device into a smart kitchen companion"] },
      { id: "performance", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Pure HTML/CSS Architecture", summary: "Ultra-lightweight implementation delivering instant page loads and superior performance", details: ["Zero-dependency architecture built without heavy JavaScript frameworks for maximum speed", "Minimal file sizes ensuring near-instant loading times even on slower network connections", "Semantic HTML structure providing excellent accessibility and out-of-the-box SEO optimization", "Clean, maintainable codebase that is easy to extend with new recipes or styling updates"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiHtml5 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "HTML5", description: "Semantic and accessible markup structure ensuring SEO optimization and a readable, maintainable codebase." },
      { icon: <SiCss3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "CSS3", description: "Modern styling techniques utilizing Flexbox/Grid layouts and custom animations for a polished look." },
      { icon: <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Responsive Design", description: "Fluid, mobile-first approach ensuring consistent rendering and usability across all devices and screen sizes." },
      { icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Multi-Cuisine Architecture", description: "Modularly organized content sections dedicated to distinct culinary styles for easy navigation." },
      { icon: <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "GitHub Pages", description: "Reliable and free static site hosting solution with automated deployment pipelines from the repository." },
    ]}
    useCases={[
      "Ideal for home cooking enthusiasts eager to explore and master new international cuisines",
      "A digital gateway for cultural food exploration, preserving and sharing traditional recipes",
      "A practical, distraction-free kitchen companion for following recipes in real-time",
      "An accessible educational resource for beginners learning the fundamentals of cooking",
      "A clean, high-performance web template suitable for other content-focused recipe blogs",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/EasyCooking</code></>,
      <>Open&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">index.html</code>&nbsp;in your browser</>,
      <>Navigate through different cuisine sections</>,
      <>Browse recipes by category (Bengali, Chinese, Indian)</>,
      <>For development: Host locally with&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">live-server</code>&nbsp;or similar</>,
    ]}
    contactCTA={{
      title: "Need a high-performance web solution?",
      description: "I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default EasyCookingPage;
