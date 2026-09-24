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
    description="I built a console-based point-of-sale system in C++ for managing restaurant orders. Customers browse a menu, add items to their cart, pay, and receive a unique token. Staff can view all orders and manage them in an admin panel. The system calculates bills automatically, estimates prep time, and saves all order data to files."
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
      { id: "ordering", icon: <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Customer Ordering", summary: "Menu browsing, cart management, and checkout", details: ["Browse items organized by category (Tea, Dosa, Pizza, etc.)", "Add items to cart with quantity control", "Real-time bill calculation with automatic change", "Order confirmation with unique token number"] },
      { id: "admin", icon: <Settings className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Admin Panel", summary: "Password-protected management interface", details: ["Secure login (default: Dhruba / 2020)", "View all active and past orders", "Delete orders to manage system", "See order history and customer details"] },
      { id: "oop", icon: <Code className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Object-Oriented Design", summary: "Classes, inheritance, and encapsulation", details: ["Customer and Order classes for data organization", "Inheritance for shared functionality", "Encapsulation of member variables", "Modular function design"] },
      { id: "persistence", icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />, title: "File Storage", summary: "Orders saved to text files", details: ["Each order stored in a separate text file (1.txt, 2.txt, etc.)", "Standardized receipt format for consistent reading", "Data persists between program runs"] },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiCplusplus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "C++", description: "Console application using Standard Template Library (STL) for data structures." },
      { icon: <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "OOP Principles", description: "Classes, inheritance, polymorphism, and encapsulation for clean architecture." },
      { icon: <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "File I/O", description: "fstream library for reading and writing order data to text files." },
      { icon: <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Console UI", description: "Text-based menu interface with clear navigation between customer and admin modes." },
      { icon: <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Admin Controls", description: "Password-protected dashboard for managing orders and system data." },
      { icon: <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Business Logic", description: "Algorithms for bill calculation, change determination, and prep time estimation." },
    ]}
    useCases={[
      "A learning project to practice C++, OOP, and file handling",
      "Educational template for understanding console-based POS systems",
      "Basis for building a more advanced point-of-sale application",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/FoodOrderingSystem</code></>,
      <>Compile:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">g++ main.cpp -o food_ordering</code></>,
      <>Run:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">./food_ordering</code>&nbsp;(Linux/Mac) or&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">food_ordering.exe</code>&nbsp;(Windows)</>,
      <>For customers: Browse menu, add items, view bill, and get your order token</>,
      <>For admin: Login with default credentials (Dhruba / 2020) to view or delete orders</>,
    ]}
    contactCTA={{
      title: "Learning C++ and data structures?",
      description: "I build console applications, web backends, and full-stack solutions using modern programming practices.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default FoodOrderingSystemPage;
