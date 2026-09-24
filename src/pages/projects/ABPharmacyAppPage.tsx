import { Smartphone, Search, ShoppingCart, MessageCircle, Calendar, Lock, Table2 } from "lucide-react";
import { SiReact, SiExpo, SiTypescript, SiGooglesheets, SiWhatsapp } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface ABPharmacyAppPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ABPharmacyAppPage = ({ isDark, toggleTheme }: ABPharmacyAppPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="AB Pharmacy App"
    description="Before the web platform, AB Pharmacy's customers ordered by phone and had no easy way to see what was in stock. I built this Android app so pharmacies could browse the catalogue by category or company, search, check product details and send an order with one tap. The catalogue, market schedule and login codes all come from Google Sheets, so the store's staff could update everything without a developer. Orders arrive as a formatted WhatsApp message, which fitted how the business already worked."
    coverSrc="/images/projects/AB Pharmacy App.webp"
    chips={[
      { name: "React Native", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Expo", icon: <SiExpo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "WhatsApp", icon: <SiWhatsapp className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/AB-Pharmacy-App"
    secondaryUrl="http://surl.li/lkiufr"
    secondaryLabel="Check it out"
    features={[
      {
        id: "catalogue",
        icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Mobile Catalogue",
        summary: "The full product list in a pharmacy owner's pocket",
        details: [
          "Browse and sort products by category or by pharmaceutical company",
          "Product detail pages with the information a buyer needs",
          "Pull to refresh for the latest stock and prices",
        ],
      },
      {
        id: "search",
        icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Search and Filter",
        summary: "Find a medicine quickly by name, then narrow the results",
        details: ["Search across the whole catalogue from its own tab", "Filters to narrow results down"],
      },
      {
        id: "cart",
        icon: <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Cart and Order Now",
        summary: "Build an order with quantities, or order a single item straight away",
        details: ["Quantity selector on every product", "A shared cart that persists as you browse"],
      },
      {
        id: "whatsapp",
        icon: <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Orders Through WhatsApp",
        summary: "The finished order opens as a ready-to-send WhatsApp message",
        details: [
          "Customer details and every line item are formatted automatically",
          "Staff receive orders in the channel they already use, with no new system to learn",
        ],
      },
      {
        id: "schedule",
        icon: <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Market Schedule",
        summary: "Shows which areas are served on which days",
        details: ["Loaded live from a sheet, so changes show up in the app at once"],
      },
      {
        id: "access",
        icon: <Lock className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Customer-Only Access",
        summary: "A login screen keeps the catalogue to approved customers",
        details: ["Access codes are managed in a Google Sheet by the store"],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Native 0.74", description: "Native Android app from one TypeScript codebase." },
      { icon: <SiExpo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Expo 51 + Expo Router", description: "Tab navigation, fonts, over-the-air updates and EAS builds." },
      { icon: <Table2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets (CSV)", description: "Catalogue, schedule and access codes, parsed with Papa Parse." },
      { icon: <SiWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "WhatsApp deep links", description: "Sends the finished order to the store." },
    ]}
    useCases={[
      "Small wholesalers who want an ordering app without running a backend",
      "Businesses whose staff already manage products in spreadsheets",
      "A first step before a full ordering platform",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "The pharmacy logs in with an access code.",
      "It browses or searches the catalogue and adds products to the cart.",
      "Checkout opens WhatsApp with the order ready to send.",
      "Store staff update products and schedules in Google Sheets, and the app picks up the changes.",
    ]}
    contactCTA={{
      title: "Need an app your team can update themselves?",
      description: "I build mobile apps on simple back-ends your staff already know how to use.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default ABPharmacyAppPage;
