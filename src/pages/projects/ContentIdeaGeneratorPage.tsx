import { Webhook, FileJson, Code2, Send, AlertTriangle, Activity } from "lucide-react";
import { SiN8N, SiOpenai, SiGooglesheets, SiTrello } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface ContentIdeaGeneratorPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const N8nContentAutomationPage = ({ isDark, toggleTheme }: ContentIdeaGeneratorPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Content Idea Generator (n8n)"
    description="A powerful AI-driven content orchestration engine built on n8n. This workflow seamlessly bridges Google Sheets and Trello, using OpenAI's generative capabilities to transform raw topics into fully fleshed-out content plans. By automating the ideation, drafting, and organization phases, it eliminates hours of manual administrative work, enabling creators and teams to scale their output exponentially."
    coverSrc="/images/n8n-cover.jpg"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Trello", icon: <SiTrello className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Webhook", icon: <Webhook className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Workflow JSON", icon: <FileJson className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/n8n"
    secondaryUrl="https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation"
    secondaryLabel="Open Folder"
    features={[
      { id: "pipeline", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "End-to-End Content Pipeline", summary: "Automated lifecycle from raw topic ingestion to actionable backlog items", details: ["Ingests raw thematic inputs and client-specific constraints directly from Google Sheets", "Orchestrates OpenAI API calls to brainstorm, expand, and structure three distinct content variations per topic", "Automatically populates a Trello board with structured cards, complete with hooks, captions, and CTAs"] },
      { id: "integrations", icon: <Send className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Seamless Ecosystem Integration", summary: "Frictionless data synchronization between productivity tools and AI services", details: ["Bi-directional connectivity with Google Sheets for dynamic batch processing of content calendars", "Deep Trello integration facilitating automated board management, list sorting, and card labeling", "Robust OpenAI API implementation leveraging GPT models for high-quality, context-aware copy generation"] },
      { id: "blocks", icon: <Code2 className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Modular Processing Logic", summary: "Scalable workflow architecture designed for flexibility and complex transformations", details: ["Advanced list splitting and merging logic to handle large batch operations efficiently", "Conditional validation steps ensuring only high-quality, complete concepts reach the production board", "Reusable sub-workflows enabling easy adaptation for different content formats (e.g., LinkedIn vs. Twitter)"] },
      { id: "observability", icon: <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Operational Resilience", summary: "Enterprise-grade error handling and execution monitoring", details: ["Granular error catching mechanisms preventing API rate limits from disrupting the entire batch", "Detailed execution logs providing full traceability of every generated idea and API interaction", "Automated alerts for failed operations ensuring data integrity across the integrated stack"] },
    ]}
    techSectionTitle="Nodes & Tech Used"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n Core", description: "Workflow automation engine managing control flow, data branching, and API orchestration." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "OpenAI (GPT)", description: "Generative AI engine producing creative copy, headlines, and strategic content angles." },
      { icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "Structured data input layer for batch-loading topics and campaign parameters." },
      { icon: <SiTrello className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Trello", description: "Project management destination where generated ideas are turned into actionable Kanban cards." },
      { icon: <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Webhook Node", description: "Event receiver allowing the workflow to be triggered programmatically from external apps." },
      { icon: <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Code Node (JS)", description: "Custom scripting block for complex JSON transformation and data payload validation." },
    ]}
    useCases={[
      "Automated brainstorming engine generating creative angles, hooks, and call-to-actions for any topic",
      "Batch processing system for marketing agencies managing multiple client content calendars simultaneously",
      "Seamless bridge between strategy (spreadsheets) and execution (Trello), eliminating copy-paste fatigue",
      "Scalable foundation for building complex AI-driven operational workflows in n8n",
    ]}
    howToSteps={[
      <>Open folder:&nbsp;<a className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600 break-words hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" href="https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation" target="_blank" rel="noopener noreferrer" style={{ outline: "none", boxShadow: "none" }}>GitHub - Content Automation</a></>,
      <>Import workflow:&nbsp;In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">.json</code> file.</>,
      <>Add credentials:&nbsp;Configure OpenAI API key, Google Sheets service account, and Trello token/key.</>,
      <>Set parameters:&nbsp;Define your prompt templates, target Trello lists (Backlog/To Do), and sheet range.</>,
      <>Enable:&nbsp;Turn on the <b>Webhook</b> trigger or use a <b>Cron</b> node for scheduled batch creation.</>,
      <>Test:&nbsp;Run with sample ideas in your sheet to verify AI output quality and card creation.</>,
    ]}
    contactCTA={{
      title: "Need custom n8n automations?",
      description: "I design robust, production-ready n8n workflows for content, growth, and internal tooling. Let's build your pipeline.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default N8nContentAutomationPage;
