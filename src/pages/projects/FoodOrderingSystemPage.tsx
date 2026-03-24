import { Code, Database, Settings, Terminal, ShoppingCart } from "lucide-react";
import { SiCplusplus } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface FoodOrderingSystemPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const FoodOrderingSystemPage = ({ isDark, toggleTheme }: FoodOrderingSystemPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Food Ordering System"
    description="Small restaurants and cafeterias lose orders and revenue when relying on handwritten tickets and mental math for billing. This intelligent point-of-sale system eliminates those errors by automating order tracking, bill calculations, and preparation time estimates - transforming manual chaos into a structured, token-based workflow that ensures every order is tracked, every calculation is accurate, and every customer experience is seamless."
    coverSrc="/images/projects/Food Ordering System.webp"
    chips={[
      { name: "C++", icon: <SiCplusplus className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "OOP", icon: <Code className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "File Handling", icon: <Database className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Admin Panel", icon: <Settings className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Console App", icon: <Terminal className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Order Management", icon: <ShoppingCart className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/FoodOrderingSystem"
    features={[
      { id: "ordering-system", icon: <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Smart Ordering System", summary: "Interactive and user-friendly menu interface with real-time cost calculations", details: ["Diverse interactive menu featuring categorized items like Tea, Dosa, Pizza, and more", "Automated financial logic for precise bill totaling and change return calculations", "Smart algorithms to estimate food preparation time based on order quantity and complexity", "Unique token generation system to efficiently track and manage individual customer orders"] },
      { id: "admin-panel", icon: <Settings className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Secure Admin Panel", summary: "Password-protected administrative dashboard for comprehensive system management", details: ["Secure credential-based login system (Default credentials: Dhruba/2020) for restricted access", "Complete visibility into all active and past token-based order files stored in the system", "Ability to inspect specific customer receipts and order details for verification", "Administrative controls to delete or modify order records to maintain system hygiene"] },
      { id: "oop-design", icon: <Code className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Object-Oriented Architecture", summary: "Robust software architecture built on core C++ Object-Oriented principles", details: ["Utilization of Inheritance (Customer -> getData) for efficient shared data access", "Strict encapsulation of data members to ensure data security and integrity", "Modular function design separating concerns like display, calculation, and storage", "Implementation of Polymorphism for flexible and scalable functional behavior"] },
      { id: "data-persistence", icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />, title: "File System Storage", summary: "Reliable text-file based database system for permanent data retention", details: ["Generation of individual text files for each unique order (e.g., 1.txt, 2.txt) for separation", "Persistent storage capability ensuring order history survives application restarts", "Standardized receipt layout within files for consistent data parsing and reading", "Direct system-level file manipulation for efficient reading, writing, and deletion"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiCplusplus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "C++", description: "High-performance core programming language utilizing the Standard Template Library (STL) for efficient data processing." },
      { icon: <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Object-Oriented Programming", description: "Robust architecture employing Classes (Customer, getData), Multi-level Inheritance, and Encapsulation for modularity." },
      { icon: <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "File Handling", description: "Persistent data storage mechanism using fstream library for creating, reading, and appending to text files." },
      { icon: <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Console Interface", description: "Interactive text-based user interface (TUI) with intuitive navigation menus and system commands." },
      { icon: <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Admin Controls", description: "Secured, password-protected management dashboard allowing full control over order history and deletion." },
      { icon: <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Core Logic", description: "Complex algorithms handling real-time bill calculation, change determination, and preparation time estimation." },
    ]}
    useCases={[
      "Comprehensive educational resource for mastering core C++ OOP concepts",
      "Lightweight management solution suitable for small-scale restaurants, cafeterias, or local diners",
      "Foundational codebase for building larger, more complex point-of-sale (POS) systems",
      "Practical demonstration of file handling, stream manipulation, and data persistence in C++",
      "Scalable template for developing other console-based business logic applications",
      "Ideal reference project for academic assignments and undergraduate programming coursework",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/FoodOrderingSystem</code></>,
      <>Compile:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">g++ main.cpp -o food_ordering</code></>,
      <>Run:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">./food_ordering</code>&nbsp;(Linux/Mac) or&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">food_ordering.exe</code>&nbsp;(Windows)</>,
      <>Follow the console menu to navigate between customer and admin interfaces</>,
      <>In the Admin Panel (Option 2), use default credentials → Name: <b>Dhruba</b>, Password: <b>2020</b>.</>,
      <>For customers: Browse menu, add items to cart, place orders, and receive an order receipt.</>,
      <>For admin: View order files or delete them to manage history.</>,
    ]}
    contactCTA={{
      title: "Need a custom application?",
      description: "I engineer robust, cross-platform solutions focused on performance and user experience. Let's bring your app idea to life.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default FoodOrderingSystemPage;
