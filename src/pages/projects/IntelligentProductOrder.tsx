import { FileJson, Brain, Database, ListTodo, Zap } from "lucide-react";
import { SiN8N, SiOpenai, SiGooglesheets, SiGmail } from "react-icons/si";
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
    description="A comprehensive order fulfillment automation system engineered with n8n to bridge the gap between unstructured communication and structured data. By intelligently parsing incoming emails using OpenAI's GPT models, this workflow extracts critical order details, verifies product availability against a synchronized Google Sheets catalog, and autonomously orchestrates task creation in Monday.com. It transforms a chaotic inbox into a streamlined, error-free fulfillment pipeline, reducing manual data entry by over 90%."
    coverSrc="/images/projects/Intelligent Product Order (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Gmail", icon: <SiGmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Monday.com", icon: <ListTodo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "JSON", icon: <FileJson className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/n8n"
    secondaryUrl="https://github.com/dhruba-datta/n8n/tree/main/Intelligent%20Product%20Order"
    secondaryLabel="Open Folder"
    features={[
      { id: "product-sync", icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Product Data Sync", summary: "Automated catalog synchronization from distributed external sources", details: ["Aggregates product metadata from disparate JSON endpoints (e.g., GitHub Gists) into a unified schema", "Performs intelligent upserts into Google Sheets, ensuring pricing and inventory data is always current", "Establishes a single source of truth for downstream validation logic"] },
      { id: "smart-processing", icon: <Brain className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Smart Order Processing", summary: "AI-powered parsing of unstructured natural language orders", details: ["Leverages OpenAI (GPT-3.5) to interpret free-form email bodies, extracting intent, product IDs, and quantities", "Implements fuzzy matching logic to correlate customer requests with exact SKU codes", "Automatically filters out non-transactional inquiries to focus solely on actionable revenue opportunities"] },
      { id: "task-automation", icon: <ListTodo className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Task Automation", summary: "Seamless orchestration of cross-platform fulfillment workflows", details: ["Instantly generates detailed Monday.com items for verified orders, complete with customer context", "Maps extracted data fields to specific board columns for immediate team visibility", "Appends formatted update logs to each item, preserving the original communication trail for auditability"] },
      { id: "integration-logic", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Integration Logic", summary: "Robust data validation and error-resilient architecture", details: ["Bi-directional verification ensuring only orders for valid, in-stock products are processed", "Granular error routing to flag ambiguous or incomplete orders for manual review", "Idempotent design principles to prevent duplicate tasks from generated from the same email thread"] },
    ]}
    techSectionTitle="Nodes & Tech Used"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n Core", description: "Workflow orchestration engine managing complex data transformations and API choreography." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "OpenAI (GPT-3.5)", description: "Natural Language Processing engine capable of extracting structured JSON from free-text emails." },
      { icon: <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Gmail", description: "Event-driven trigger source monitoring specific inboxes for new customer correspondence." },
      { icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "Relational database layer acting as the master product catalog and order validator." },
      { icon: <ListTodo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Monday.com", description: "Collaborative work OS where raw orders are converted into trackable fulfillment tasks." },
    ]}
    useCases={[
      "Automating e-commerce order entry from legacy email-based ordering systems",
      "Synchronizing distributed inventory data from multiple suppliers into a central dashboard",
      "Reducing customer service response times by instantly routing valid orders to warehouse teams",
      "Scaling fulfillment operations without increasing administrative headcount",
    ]}
    howToSteps={[
      <>Open folder:&nbsp;<a className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600 break-words hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" href="https://github.com/dhruba-datta/n8n/tree/main/Intelligent%20Product%20Order" target="_blank" rel="noopener noreferrer" style={{ outline: "none", boxShadow: "none" }}>GitHub - Intelligent Product Order</a></>,
      <>Import workflow:&nbsp;In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">.json</code> file.</>,
      <>Configure Credentials:&nbsp;Set up OAuth2 for Google Sheets, Gmail, and Monday.com, and add your OpenAI API key.</>,
      <>Customize Google Sheets:&nbsp;Ensure your sheet has columns for `ID`, `Name`, `Price`, and `Category` and update the Sheet ID in the nodes.</>,
      <>Configure Monday.com:&nbsp;Update the Board ID and Group ID in the Monday.com nodes to match your workflow.</>,
      <>Run:&nbsp;Manually sync the product catalog, then activate the workflow to start monitoring for email orders.</>,
    ]}
    contactCTA={{
      title: "Need custom n8n automations?",
      description: "I design robust, production-ready n8n workflows for content, growth, and internal tooling. Let's build your pipeline.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default IntelligentProductOrderPage;
