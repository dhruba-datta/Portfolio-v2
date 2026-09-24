import { Globe2, Smartphone, FileText, Activity, Github } from "lucide-react";
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
    description="I built a recipe site with authentic Bengali, Chinese, and Indian recipes organized by cuisine. It is plain HTML and CSS with no dependencies, so it loads quickly, and it is responsive, so recipes are easy to follow on a phone in the kitchen, without ads or distractions."
    coverSrc="/images/projects/EasyCooking.webp"
    chips={[
      { name: "HTML5", icon: <SiHtml5 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "CSS3", icon: <SiCss3 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Responsive", icon: <Smartphone className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Multi-Cuisine", icon: <Globe2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "GitHub Pages", icon: <Github className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/EasyCooking"
    secondaryUrl="https://dhruba-datta.github.io/EasyCooking/"
    secondaryLabel="Check it out"
    features={[
      { id: "recipes", icon: <Globe2 className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Three Cuisines", summary: "Recipes organized by Bengali, Chinese, and Indian food", details: ["Curated traditional recipes for each cuisine", "Separate sections for easy browsing", "Each recipe with ingredients and step-by-step instructions"] },
      { id: "mobile", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Mobile-Friendly", summary: "Works smoothly on phones, tablets, and desktops", details: ["Responsive layout that adapts to any screen size", "Touch-friendly navigation", "Readable font sizes when cooking in the kitchen"] },
      { id: "clean", icon: <FileText className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Distraction-Free", summary: "Just recipes, no ads or popups", details: ["Fast load times with no JavaScript dependencies", "Clear recipe layout focused on ingredients and instructions", "Clean design that stays out of the way"] },
      { id: "semantic", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Semantic HTML", summary: "Built with proper markup and accessibility", details: ["Semantic HTML tags for screen readers", "Good SEO structure", "Easy to maintain and extend"] },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiHtml5 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "HTML5", description: "Semantic markup with proper structure for accessibility and SEO." },
      { icon: <SiCss3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "CSS3", description: "Responsive layout with Flexbox, mobile-first design approach." },
      { icon: <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Responsive Design", description: "Works on phones, tablets, and desktops without frameworks." },
      { icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Static Content", description: "Organized recipe files with consistent structure for each cuisine." },
      { icon: <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "GitHub Pages", description: "Free static hosting with automatic deployment from the repo." },
    ]}
    useCases={[
      "A learning project to understand HTML, CSS, and responsive design",
      "Template for building static recipe sites without a backend",
      "Demonstration of clean HTML and CSS practices",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/EasyCooking</code></>,
      <>Open&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">index.html</code>&nbsp;in your browser</>,
      <>Browse recipes organized by cuisine (Bengali, Chinese, Indian)</>,
      <>To add recipes, edit the HTML files in the project</>,
      <>Deploy to GitHub Pages by pushing to the repo</>,
    ]}
    contactCTA={{
      title: "Building your first static site?",
      description: "I help developers create fast, clean websites with HTML, CSS, and responsive design.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default EasyCookingPage;
