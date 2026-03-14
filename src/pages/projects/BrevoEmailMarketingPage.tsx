import {
  Webhook,
  FileJson,
  Code2,
  Send,
  AlertTriangle,
  Activity,
} from "lucide-react";
import { SiN8N, SiBrevo, SiGooglesheets, SiWebflow } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface BrevoEmailMarketingPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const BrevoEmailMarketingPage = ({ isDark, toggleTheme }: BrevoEmailMarketingPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Brevo Email Marketing (n8n)"
    description="A sophisticated email automation system engineered with n8n to streamline sophisticated marketing workflows. By orchestrating data flow between Google Sheets, Webflow CMS, and Brevo's transactional API, this solution enables hyper-personalized communication at scale. It replaces manual list management with intelligent, event-driven triggers, ensuring the right message reaches the right user at the perfect moment."
    coverSrc="/images/projects/Brevo Email Marketing (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Brevo", icon: <SiBrevo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Webflow", icon: <SiWebflow className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Webhook", icon: <Webhook className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Workflow JSON", icon: <FileJson className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/n8n"
    secondaryUrl="https://github.com/dhruba-datta/n8n/tree/main/Brevo%20Email%20Marketing"
    secondaryLabel="Open Folder"
    features={[
      {
        id: "pipeline",
        icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "End-to-End Campaign Automation",
        summary: "Full lifecycle management from subscriber ingestion to analytics tracking",
        details: [
          "Automated polling of multiple data sources (Sheets, Webflow) to detect new qualified leads",
          "Dynamic enrichment of user profiles with behavioral tags and custom attribute mapping",
          "Orchestrated dispatch of personalized HTML email templates via Brevo's SMTP relay",
        ],
      },
      {
        id: "integrations",
        icon: <Send className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Unified Data Ecosystem",
        summary: "Seamless synchronization across CRM, CMS, and marketing platforms",
        details: [
          "Bi-directional sync with Google Sheets for real-time audience segmentation and status updates",
          "Deep integration with Webflow CMS to pull dynamic content blocks for newsletters",
          "Native Brevo API connectivity for high-deliverability sending and granular event tracking",
        ],
      },
      {
        id: "blocks",
        icon: <Code2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Advanced Segmentation & Logic",
        summary: "Data-driven control flow for hyper-targeted messaging",
        details: [
          "Conditional routing logic to split audiences based on engagement scores or user attributes",
          "Batch processing capabilities handling thousands of contacts efficiently without API timeouts",
          "Regex-based data validation ensuring only clean, formatted email addresses enter the sending queue",
        ],
      },
      {
        id: "observability",
        icon: <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Enterprise-Grade Reliability",
        summary: "Production-ready error handling and execution monitoring",
        details: [
          "Automated error catching nodes that log failures to Slack/Telegram for immediate resolution",
          "Idempotent workflow design preventing duplicate sends during retries or network blips",
          "Comprehensive execution history for auditing compliance and debugging delivery issues",
        ],
      },
    ]}
    techSectionTitle="Nodes & Tech Used"
    techItems={[
      {
        icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "n8n Core",
        description: "Workflow orchestration engine managing complex data transformations and API choreography.",
      },
      {
        icon: <SiBrevo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Brevo (Sendinblue)",
        description: "Transactional email infrastructure providing high-deliverability SMTP services.",
      },
      {
        icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Google Sheets",
        description: "Flexible database for managing subscriber lists, campaign logs, and analytics.",
      },
      {
        icon: <SiWebflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Webflow CMS",
        description: "Source of truth for dynamic content assets used in automated newsletters.",
      },
      {
        icon: <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Webhook Node",
        description: "Real-time listener enabling instant triggers from signup forms or external apps.",
      },
      {
        icon: <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Code Node (JS)",
        description: "Custom Javascript logic for parsing JSON payloads and formatting HTML strings.",
      },
    ]}
    useCases={[
      "Automated weekly newsletters aggregating content from Webflow CMS and dispatching via Brevo",
      "Intelligent lead nurturing sequences triggered by real-time updates in Google Sheets pipelines",
      "Transactional system alerts ensuring critical notifications are delivered with high reliability",
      "Scalable boilerplate for any email marketing workflow requiring advanced segmentation and personalization",
    ]}
    howToSteps={[
      <>
        Open folder:&nbsp;
        <a
          className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600 break-words hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          href="https://github.com/dhruba-datta/n8n/tree/main/Brevo%20Email%20Marketing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ outline: "none", boxShadow: "none" }}
        >
          GitHub - Brevo Email Marketing
        </a>
      </>,
      <>
        Import workflow:&nbsp;
        In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">.json</code> file.
      </>,
      <>Add credentials:&nbsp;Configure Brevo API key, Google Sheets, and Webflow API token.</>,
      <>Set parameters:&nbsp;Define your sender identity, template IDs, and campaign tags.</>,
      <>Enable:&nbsp;Activate the <b>Webhook</b> trigger or set up a polling schedule for new rows/items.</>,
      <>Test:&nbsp;Trigger a manual run to send a test email to your own address and verify Brevo tracking.</>,
    ]}
    contactCTA={{
      title: "Need custom n8n automations?",
      description: "I design robust, production-ready n8n workflows for content, growth, and internal tooling. Let's build your pipeline.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default BrevoEmailMarketingPage;