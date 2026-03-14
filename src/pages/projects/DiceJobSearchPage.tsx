import { Globe2, Webhook, Clock, FileJson, Code2, Send, AlertTriangle, Activity, Search, Filter } from "lucide-react";
import { SiN8N, SiGooglesheets } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface DiceJobSearchPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const DiceJobSearchPage = ({ isDark, toggleTheme }: DiceJobSearchPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Dice Job Search (n8n)"
    description="A sophisticated low-code automation workflow engineered with n8n to revolutionize the job search process. This system autonomously monitors Dice.com for varied tech roles, applying complex filtering logic to curate high-quality opportunities. It seamlessly integrates with Google Sheets for application tracking and delivers instant multi-channel notifications, ensuring users never miss a critical opening."
    coverSrc="/images/dice-job-cover.jpg"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Dice.com", icon: <Globe2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Web Scraping", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Webhook", icon: <Webhook className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Data Extraction", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/n8n"
    secondaryUrl="https://github.com/dhruba-datta/n8n/tree/main/Dice%20Job%20Search"
    secondaryLabel="Open Folder"
    features={[
      { id: "discovery", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Automated Job Scraping Pipeline", summary: "High-frequency polling of Dice.com for real-time job market data", details: ["Configurable HTTP Request nodes mimicking browser behavior to fetch raw job listings", "Robust HTML parsing (or API consumption) to extract key metadata like salary and tech stack", "Normalization of unstructured data fields into a consistent JSON schema for processing"] },
      { id: "filters", icon: <Filter className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Intelligent Filtering & Deduplication", summary: "Advanced logic gates ensuring only relevant, unique opportunities are surfaced", details: ["Granular exclusion criteria filtering out recruiters, contract roles, or specific keywords", "Smart de-duplication hash algorithms preventing alert fatigue from reposted listings", "Context-aware filtering based on job freshness (e.g., 'Posted within 24 hours')"] },
      { id: "scheduler", icon: <Clock className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Flexible Trigger Mechanisms", summary: "Hybrid execution model supporting cron schedules and on-demand alerts", details: ["Customizable cron expressions for automated daily 'morning coffee' digests", "Webhook endpoints enabling instantaneous manual triggers via CLI or dashboard", "Stateful execution ensuring no scheduled runs overlap or cause race conditions"] },
      { id: "storage", icon: <SiGooglesheets className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Centralized Application Tracking", summary: "Automated database maintenance for your personal job hunt pipeline", details: ["Append-only logic writing clean, structured job data into Google Sheets", "Status columns (Applied, Interview, Offer) enabling long-term pipeline management", "Historical data retention allowing for retrospective analysis of application trends"] },
      { id: "alerts", icon: <Send className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Multi-Channel Alert System", summary: "Instant notifications delivered to your preferred communication platforms", details: ["Real-time Telegram or Slack messages for high-priority 'Urgent' job postings", "Rich-text email digests summarizing the day's top opportunities in a readable format", "Actionable notification buttons (e.g., 'Apply Now') linking directly to the application portal"] },
      { id: "safety", icon: <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Enterprise-Grade Reliability", summary: "Production-ready error handling and secure credential management", details: ["Comprehensive 'Error Trigger' nodes capturing and logging workflow failures", "Secure storage of API keys and sensitive tokens using n8n's credential vault", "Graceful degradation strategies ensuring partial successes (e.g., one failed alert) don't crash the run"] },
    ]}
    techSectionTitle="Nodes & Tech Used"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n Core", description: "Powerful workflow orchestration engine handling control flow, merging, and logic nodes." },
      { icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "HTTP Request Node", description: "Flexible client for executing complex GET/POST requests to fetch external data." },
      { icon: <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Function Node (JS)", description: "Custom JavaScript execution block for advanced data transformation and deduplication." },
      { icon: <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Cron Trigger", description: "Time-based scheduler ensuring consistent, unattended workflow execution." },
      { icon: <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Webhook Node", description: "Event-driven entry point allowing external systems or scripts to trigger the pipeline." },
      { icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets Node", description: "Crucial integration for persisting job data in a structured, accessible spreadsheet format." },
      { icon: <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Email/Telegram Node", description: "Communication bridge sending formatted alerts to user devices." },
      { icon: <FileJson className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "JSON Data Structure", description: "Standardized data interchange format used throughout the workflow lifecycle." },
    ]}
    useCases={[
      "Automated daily surveillance of Dice.com for niche technical roles using custom search parameters",
      "Centralized job application tracking system powered by real-time Google Sheets synchronization",
      "Instant mobile alerts for high-priority listings via Telegram integration, enabling rapid response times",
      "Scalable boilerplate for web scraping and data aggregation workflows using n8n's low-code platform",
    ]}
    howToSteps={[
      <>Open folder:&nbsp;<a className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600 break-words hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" href="https://github.com/dhruba-datta/n8n/tree/main/Dice%20Job%20Search" target="_blank" rel="noopener noreferrer" style={{ outline: "none", boxShadow: "none" }}>GitHub - Dice Job Search</a></>,
      <>Import workflow:&nbsp;In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">.json</code> file.</>,
      <>Add credentials:&nbsp;Configure Dice source, Google Sheets, and your alert integrations (Email/Telegram).</>,
      <>Set parameters:&nbsp;Define keywords, tech stacks, cities/remote type, and de-duplication logic.</>,
      <>Enable:&nbsp;Turn on the <b>Cron</b> schedule or use the <b>Webhook</b> for on-demand execution.</>,
      <>Test:&nbsp;Run manually to verify data flow to sheets and notifications before full deployment.</>,
    ]}
    contactCTA={{
      title: "Need custom n8n automations?",
      description: "I design robust, production-ready n8n workflows for content, growth, and internal tooling. Let's build your pipeline.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default DiceJobSearchPage;
