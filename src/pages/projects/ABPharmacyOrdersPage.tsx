import { Database, Package, Activity, FileJson, User } from "lucide-react";
import { LuSettings2 } from "react-icons/lu";
import { SiReact, SiJavascript, SiTailwindcss, SiVite, SiFirebase } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

/* Custom cart icon kept from original */
function ShoppingCartIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6h15l-1.5 9h-11L6 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="19" r="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="19" r="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

interface ABPharmacyOrdersPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ABPharmacyOrdersPage = ({ isDark, toggleTheme }: ABPharmacyOrdersPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="AB Pharmacy Orders"
    description="A streamlined web application designed to digitize and optimize pharmacy procurement workflows. Integrating a React-based frontend with a flexible Google Sheets-powered backend, this solution facilitates rapid order placement, intelligent status tracking, and automated WhatsApp confirmations, significantly reducing manual errors in inventory replenishment."
    coverSrc="/images/AB Pharmacy Orders.webp"
    chips={[
      { name: "React", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Firebase", icon: <SiFirebase className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Firestore", icon: <Database className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/AB-Pharmacy-Order-Management"
    secondaryUrl="https://abpharmacy-order.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      { id: "orders", icon: <ShoppingCartIcon />, title: "Intelligent Order Management", summary: "Comprehensive tracking system for pending, regular, and urgent procurement needs", details: ["Real-time categorization of orders into urgent (STAT) and regular fulfillment queues", "Granular status tracking from submission to supplier confirmation and final delivery", "Automated history logging providing a searchable audit trail of all past transactions"] },
      { id: "inventory", icon: <Package className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Inventory & Stock Control", summary: "Centralized product database with intelligent categorization and alert mechanisms", details: ["Dynamic CRUD operations for managing a diverse catalog of pharmaceutical products", "Automated low-stock threshold alerts preventing critical medication shortages", "Intuitive category-based filtering for rapid product lookup during high-volume periods"] },
      { id: "sales", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Sales Analytics & Reporting", summary: "Data-driven insights with integrated financial tools and export capabilities", details: ["Interactive dashboard visualizing daily sales trends and high-performing product lines", "Builtpointer-in financial calculator for instant margin and tax computations", "One-click PDF generation using jsPDF for standardized daily and monthly inventory reports"] },
      { id: "contacts", icon: <User className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Supplier Relationship Management", summary: "Digital rolodex for managing pharmaceutical companies and medical representatives", details: ["Centralized directory of pharmaceutical suppliers and their contact points", "Relationship tracking with medical representatives for streamlined reordering", "Integrated delivery schedule monitoring to optimize stock intake logistics"] },
      { id: "users", icon: <LuSettings2 className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Secure User Administration", summary: "Robust authentication system with role-based access control (RBAC)", details: ["Enterprise-grade authentication powered by Firebase Auth for secure login sessions", "Detailed profile management allowing distinct user preferences and settings", "Strict role-based permission gating to separate staff operational views from admin controls"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React", description: "Component-driven UI architecture facilitating seamless product browsing and complex order flow tracking." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vite", description: "Ultra-fast frontend build tool enabling rapid development cycles and optimized asset delivery." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first CSS framework ensuring a highly responsive, uniform, and maintainable design system." },
      { icon: <SiJavascript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "JavaScript (ES6+)", description: "Modern standard scripting handling asynchronous API interactions, state management, and form logic." },
      { icon: <SiFirebase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Firebase Platform", description: "Comprehensive backend solution managing Cloud Firestore databases, Auth, and Cloud Functions." },
      { icon: <FileJson className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "jsPDF", description: "specialized client-side library for generating dynamic, printable PDF inventory and sales reports." },
    ]}
    useCases={[
      "Streamlining pharmacy operations by prioritizing urgent (STAT) vs. regular inventory replenishment",
      "Real-time tracking of product stock levels to prevent shortages in critical medication supplies",
      "Digital sales tracking and automated report generation for better financial oversight",
      "Rapid product lookup and categorization to assist pharmacists during peak customer hours",
      "Centralized management of supplier interactions and delivery scheduling logistics",
      "Secure, role-based access preventing unauthorized changes to sensitive inventory data",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/AB-Pharmacy-Order-Management</code></>,
      <>Install deps:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Start dev server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Build for production:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code></>,
      <>Configure Firebase credentials and environment variables in <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">.env</code> as described in the repo README.</>,
    ]}
    contactCTA={{
      title: "Need a high-performance web solution?",
      description: "I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default ABPharmacyOrdersPage;
