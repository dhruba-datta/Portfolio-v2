import { Store, Layers, RefreshCw, LayoutDashboard, ShieldCheck, Smartphone, Palette } from "lucide-react";
import { SiReact, SiVite, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiStripe, SiPaypal } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface UpcellPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const UpcellPage = ({ isDark, toggleTheme }: UpcellPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="UpCell"
    description="UpCell sells certified premium iPhones, iPads and MacBooks in the US. Every device is inspected, graded for condition and covered by a 12-month warranty, and customers can trade in their old device for a quote. I worked on the platform as part of a small agency team. I rebuilt the storefront's design and product catalogue, added the trade-in and admin tools, and prepared the site for payment-processor review. I also tightened the API's validation and error handling."
    coverSrc="/images/projects/UpCell.webp"
    chips={[
      { name: "React", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Stripe", icon: <SiStripe className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    secondaryUrl="https://www.upcellit.com/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "storefront",
        icon: <Store className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Storefront Redesign",
        summary: "Moved the whole storefront onto Tailwind CSS with a new look",
        details: [
          "Redesigned header, hero, product cards and footer",
          "A shop page with checkbox category filters, category search and a mobile filter toggle",
          "Error boundaries on every route and a proper 404 page",
        ],
      },
      {
        id: "catalogue",
        icon: <Layers className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Product Families and Variants",
        summary: "Each device is one product with storage, colour and condition options",
        details: [
          "Groups variants under a product family, such as iPhone 15 Pro, with a storage and colour selector",
          "Batch product creation in the admin, so a whole range goes in at once",
          "Seed data for iPhone, iPad and MacBook models, plus audit scripts that find and remove discontinued models",
        ],
      },
      {
        id: "trade-in",
        icon: <RefreshCw className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Trade-In",
        summary: "Customers get a quote for their old device",
        details: [
          "A device questionnaire covering model, storage, carrier and condition",
          "Extended beyond Apple to Samsung, Google and other Android devices",
          "Requests move through statuses, from new to paid, in the admin",
        ],
      },
      {
        id: "admin",
        icon: <LayoutDashboard className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Admin Tools",
        summary: "Staff manage the store without a developer",
        details: [
          "Modules for trade-ins, contact submissions and newsletter subscribers, with delete and toast feedback",
          "Shop category management backed by its own API",
          "Sits alongside the orders, payments, refunds, reviews and analytics modules",
        ],
      },
      {
        id: "compliance",
        icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Ready for Payment-Processor Review",
        summary: "The site changes card processors look for before approving a merchant",
        details: [
          "A public payment information page with accepted cards, USD pricing, ship-to country and a PCI note",
          "Card logos at checkout, a promotions terms page and an expanded return policy",
          "A single canonical domain, consistent shipping details and real social links",
        ],
      },
      {
        id: "brand",
        icon: <Palette className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Rebrand to Premium",
        summary: "A new identity and clearer copy",
        details: [
          "Moved from 'refurbished' to 'premium' wording across the site",
          "New logo and favicon, the Roboto typeface and a red theme",
          "Rewritten page copy and meta descriptions for search",
        ],
      },
      {
        id: "mobile",
        icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Mobile and Accessibility",
        summary: "Every page usable on a phone and by screen readers",
        details: [
          "Responsive layouts across the storefront",
          "Labelled controls so screen readers announce them properly",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React + Vite", description: "Storefront and admin, with lazy-loaded routes and React Query." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS + MUI", description: "The redesigned UI, alongside Material UI components." },
      { icon: <SiExpress className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Node.js + Express", description: "REST API with Zod validation, Helmet and rate limiting." },
      { icon: <SiMongodb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "MongoDB + Mongoose", description: "Products, variants, orders, trade-ins and customer data." },
      { icon: <SiStripe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Stripe", description: "Card checkout." },
      { icon: <SiPaypal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "PayPal", description: "Alternative checkout." },
    ]}
    useCases={[
      "Resellers of refurbished or premium electronics",
      "Stores that need a trade-in flow alongside sales",
      "Merchants preparing a site for card-processor approval",
    ]}
    contactCTA={{
      title: "Selling online and need it to convert?",
      description: "I build and fix e-commerce storefronts, catalogues and admin tools that are ready for real payments.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default UpcellPage;
