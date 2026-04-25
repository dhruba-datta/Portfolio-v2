import {
  Smartphone,
  Search,
  Calendar,
  Bell,
  Code,
  Database,
  Package,
  Store,
} from "lucide-react";
import { GrStorage } from "react-icons/gr";
import { SiReact, SiExpo, SiJavascript, SiGooglesheets } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface ABPharmacyExpoPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ABPharmacyExpoPage = ({ isDark, toggleTheme }: ABPharmacyExpoPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="AB Pharmacy Expo"
    description="Trade show attendees waste hours navigating crowded halls with paper maps, missing sessions, and losing track of exhibitors they wanted to visit. This comprehensive digital trade show companion eliminates that chaos by delivering real-time schedules, interactive exhibitor directories, and product catalogs directly to attendees' phones - transforming overwhelming event logistics into seamless, personalized experiences that work even offline in crowded convention centers."
    coverSrc="/images/projects/AB Pharmacy Expo.webp"
    chips={[
      { name: "React Native", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Expo", icon: <SiExpo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "JavaScript ES6+", icon: <SiJavascript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React Navigation", icon: <Code className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "AsyncStorage", icon: <GrStorage className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/AB-Pharmacy-Expo"
    secondaryUrl="http://surl.li/lkiufr"
    secondaryLabel="Check it out"
    features={[
      { id: "native", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Unified Cross-Platform Architecture", summary: "Single codebase ensuring consistent, high-performance execution on both iOS and Android platforms", details: ["Utilization of the Expo ecosystem for rapid iteration and seamless over-the-air updates", "Implementation of native navigation patterns (stacks, tabs) for an intuitive, platform-specific feel", "Optimized gesture handling and haptic feedback to enhance tactile user interaction"] },
      { id: "schedule", icon: <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Live Interactive Scheduling", summary: "Dynamic agenda management with real-time session tracking and reminders", details: ["Personalized timeline view allowing attendees to bookmark and manage their interests", "Instant push notifications for session starts, room changes, or keynote announcements", "Smart caching strategies ensuring schedule availability even in offline connectivity zones"] },
      { id: "directory", icon: <Store className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Smart Exhibitor Directory", summary: "Searchable database connecting attendees with exhibitors via interactive profiles", details: ["Rich exhibitor profiles featuring company bios, key contacts, and booth location integration", "Advanced filtering capabilities to sort exhibitors by product category or hall location", "Interactive floor map linking directly to exhibitor details for streamlined navigation"] },
      { id: "catalog", icon: <Package className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Comprehensive Digital Catalog", summary: "Extensive product showcase with detailed specifications and comparison tools", details: ["High-fidelity image galleries with zoom capabilities for deep product inspection", "Detailed specification sheets including pricing, availability, and technical documentation", "Favorites list functionality allowing users to shortlist interesting products for later review"] },
      { id: "search", icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Instant Global Search", summary: "High-speed text search engine spanning products, exhibitors, and sessions", details: ["Unified search bar providing instantaneous results across all app content modules", "Smart autocomplete suggestions and history tracking to speed up information retrieval", "Multi-parameter filtering to narrow down search results by type, date, or category"] },
      { id: "components", icon: <Code className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Modular Component Library", summary: "Scalable UI system built with reusable, atomic React Native elements", details: ["Consistent design language across all screens enforced by a custom theme provider", "Highly reusable components (cards, lists, modals) reducing maintenance overhead", "Robust form handling with real-time validation for user feedback and error prevention"] },
      { id: "features", icon: <Bell className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Robust Offline Capabilities", summary: "Ensuring critical functionality persists without reliable internet connectivity", details: ["Local data caching strategies to store schedules and directories for offline access", "Background sync mechanisms to update content silently when connectivity is restored", "Graceful degradation of features to maintain usability in low-bandwidth trade show environments"] },
      { id: "persistence", icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Secure Local Persistence", summary: "Reliable client-side storage for managing user sessions and preferences", details: ["Encrypted storage of user authentication tokens and sensitive profile data", "Persisted application state ensuring users return to their last-viewed screen", "Flexible data layer abstraction allowing seamless switching between local and remote sources"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Native", description: "Framework for building native applications using React and the platform's native capabilities." },
      { icon: <SiExpo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Expo Framework", description: "Toolchain for rapid development, testing on physical devices, and simplified builds using EAS." },
      { icon: <SiJavascript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "JavaScript (ES6+)", description: "Modern JS features handling complex asynchronous data flows, state management, and business logic." },
      { icon: <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Navigation", description: "Robust library managing stack, tab, and drawer navigation with native look-and-feel transitions." },
      { icon: <GrStorage className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "AsyncStorage", description: "Key-value storage system for persisting user data, preferences, and session state locally on the device." },
      { icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets API", description: "Flexible backend solution allowing non-technical staff to manage app content dynamically." },
    ]}
    useCases={[
      "Essential companion app for attendees at pharmacy & medical trade shows",
      "Digital information hub for managing large-scale events with hundreds of exhibitors",
      "Showcase of native mobile app capabilities for client demonstrations and prototyping",
      "White-label starter template for event industry mobile products",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/AB-Pharmacy-Expo</code></>,
      <>Install deps:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Start (Expo):&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npx expo start</code>&nbsp;then run on device/emulator.</>,
      <>Build (optional):&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npx expo prebuild && npx expo run:android</code>&nbsp;/&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npx expo run:ios</code></>,
      <>Configure integrations (Sheets/auth) in <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">env</code> or config as needed.</>,
    ]}
    contactCTA={{
      title: "Need a custom application?",
      description: "I engineer robust, cross-platform solutions focused on performance and user experience. Let's bring your app idea to life.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default ABPharmacyExpoPage;
