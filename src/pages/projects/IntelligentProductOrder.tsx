import { Inbox, Sparkles, PackageCheck, ClipboardList, ListTodo, Table2 } from "lucide-react";
import { SiN8N, SiOpenai, SiGmail, SiGooglesheets } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface IntelligentProductOrderPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const IntelligentProductOrderPage = ({ isDark, toggleTheme }: IntelligentProductOrderPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Intelligent Product Order (n8n)"
    description="Many businesses still take orders by email, and someone has to read each one, find the product and copy the details into the team's task board. This workflow watches the inbox, has an AI model pull the order out of the email as structured data, matches it against the product catalogue, and creates a ready-to-work item on Monday.com with the customer, product, quantity, delivery date and priority. Inquiries and issues are recognised and kept out of the order queue."
    coverSrc="/images/projects/Intelligent Product Order (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Gmail", icon: <SiGmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Monday.com", icon: <ListTodo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    features={[
      {
        id: "inbox",
        icon: <Inbox className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Watches the Order Inbox",
        summary: "New emails are picked up every minute",
        details: [
          "Spam and trash are ignored",
          "Customers keep ordering the way they already do, with no new portal or form",
        ],
      },
      {
        id: "extract",
        icon: <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "AI Reads the Email",
        summary: "An OpenAI model turns free-text emails into a strict order record",
        details: [
          "Extracts intent (order, inquiry, issue), product ID or name, quantity, delivery date, customer, address and phone",
          "Converts written dates like 'next Friday' into a proper date",
          "Marks the order high priority when the email says urgent or ASAP",
        ],
      },
      {
        id: "catalogue",
        icon: <PackageCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Checked Against the Catalogue",
        summary: "The product is looked up before anything is created",
        details: [
          "A separate pipeline pulls the product catalogue from an API, page by page, into Google Sheets",
          "Each order is matched to the catalogue by product ID, so the task carries the right product details",
        ],
      },
      {
        id: "monday",
        icon: <ClipboardList className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Ready-to-Work Monday.com Item",
        summary: "Only real orders reach the board, fully filled in",
        details: [
          "Creates an item with the order details mapped to the board's columns",
          "Adds an update with the full order context for whoever picks it up",
          "Emails classified as inquiries or issues don't create order items",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n", description: "Email trigger, parsing, lookups and branching logic." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "OpenAI", description: "Extracts the order from the email as validated JSON." },
      { icon: <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Gmail", description: "The inbox the workflow watches for orders." },
      { icon: <Table2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "Product catalogue kept in sync from the product API." },
      { icon: <ListTodo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Monday.com", description: "Order items and updates for the fulfilment team." },
    ]}
    useCases={[
      "Wholesalers and distributors who receive orders by email",
      "Pharmacies and suppliers that need orders on a shared board fast",
      "Any team copying details from emails into a project tool by hand",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "A customer emails an order the way they always have.",
      "The AI model pulls out the product, quantity, date, customer and priority.",
      "The product is matched against the catalogue.",
      "A Monday.com item is created with every detail the team needs.",
    ]}
    contactCTA={{
      title: "Still copying orders out of emails?",
      description: "I can connect your inbox to your task board so orders arrive ready to fulfil.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Explore Workflows",
    }}
  />
);

export default IntelligentProductOrderPage;
