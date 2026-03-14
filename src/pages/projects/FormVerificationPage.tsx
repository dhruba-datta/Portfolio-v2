import { Send, CheckCircle } from "lucide-react";
import { SiN8N, SiOpenai, SiGooglesheets, SiGooglechat, SiGmail } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface FormVerificationPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const FormVerificationPage = ({ isDark, toggleTheme }: FormVerificationPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Form Verification (n8n)"
    description="Streamline your lead generation process with this n8n workflow. It automatically triages incoming form submissions using advanced AI (GPT-Pro), verifies email addresses via NeverBounce, and sends real-time notifications to your team via Google Chat and Gmail."
    coverSrc="/images/projects/Form Verification (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "NeverBounce", icon: <CheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Chat", icon: <SiGooglechat className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
      { name: "Gmail", icon: <SiGmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/n8n"
    secondaryUrl="https://github.com/dhruba-datta/n8n/tree/main/Form%20Verification"
    secondaryLabel="Open Folder"
    features={[
      { id: "ai-triage", icon: <SiOpenai className="w-4 sm:w-5 h-4 sm:h-5" />, title: "AI-Powered Lead Triage", summary: "Autonomous classification of form submissions using OpenAI GPT models", details: ["Real-time processing of website leads to classify as 'High Value', 'Spam', or 'Information Request'", "Intelligent extraction of key intent fields from unstructured messages to populate CRM data", "Granular scoring logic that categorizes submissions based on service requirements and urgency"] },
      { id: "verification", icon: <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Automated Email Verification", summary: "Zero-bounce lead validation via NeverBounce API integration", details: ["Instant validation of user-submitted email addresses to prevent fake or disposable entries", "Automatic filtration of invalid or high-risk domains to protect sender reputation", "Ensures high-deliverability for sales outreach by sanitizing the lead database in real-time"] },
      { id: "alerts", icon: <Send className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Multi-Channel Team Notifications", summary: "Real-time alerts delivered to Google Chat and Gmail for immediate action", details: ["Instant delivery of detailed lead summaries to dedicated Google Chat spaces via webhooks", "Automated Gmail notifications to specific departments for prioritized follow-up based on triage", "Rich-text alerts providing the team with all necessary lead context before they even open the sheet"] },
      { id: "sync", icon: <SiGooglesheets className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Sheet-Based Data Synchronization", summary: "End-to-end management of lead records and status tracking in Google Sheets", details: ["Automated monitoring of entry sheets for new submissions using n8n polling and trigger nodes", "Append-only logging of AI triage results, verification status, and notification timestamps", "Scalable data bridge ensuring zero lead loss between front-end forms and back-end operations"] },
    ]}
    techSectionTitle="Nodes & Tech Used"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n Orchestration", description: "Multi-stage workflow engine handling lead ingestion, AI logic, and multi-channel notifications." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "GPT-5.2-Pro", description: "Cutting-edge AI model used for high-fidelity classification and triaging of website contacts." },
      { icon: <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "NeverBounce API", description: "Real-time email verification node ensuring lead data integrity and outreach deliverability." },
      { icon: <SiGooglechat className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Chat", description: "Enterprise messaging integration for instantaneous team-wide lead alerts." },
      { icon: <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Gmail Node", description: "Dispatcher for high-priority lead notifications to internal departments like Legal or Sales." },
      { icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "Serves as the primary data lake for monitoring new entries and logging historical lead status." },
    ]}
    useCases={[
      "Automated triage for high-volume law firm leads, prioritizing urgent cases via AI analysis",
      "Real-time CRM data cleaning by verifying email validity at the point of ingestion",
      "Elimination of manual inbox sorting by autonomously flagging spam and test submissions",
      "Bridging external landing page forms with internal team communication platforms like Google Chat",
    ]}
    howToSteps={[
      <>Open folder:&nbsp;<a className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600 break-words hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" href="https://github.com/dhruba-datta/n8n/tree/main/Form%20Verification" target="_blank" rel="noopener noreferrer" style={{ outline: "none", boxShadow: "none" }}>GitHub - Form Verification</a></>,
      <>Import workflow:&nbsp;In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">Form_Verification.json</code> file.</>,
      <>Set up Monitoring:&nbsp;Configure the <b>Google Sheets Trigger</b> to watch for new rows in your leads spreadsheet.</>,
      <>Add Credentials:&nbsp;Input API keys for <b>OpenAI (GPT-Pro)</b> and <b>NeverBounce</b> in the respective n8n nodes.</>,
      <>Define Notifications:&nbsp;Update the <b>Google Chat Space ID</b> and <b>Gmail Recipients</b> to point to your team's channels.</>,
      <>Deploy:&nbsp;Enable the workflow to begin processing real-time leads autonomously.</>,
    ]}
    contactCTA={{
      title: "Scale your lead operations?",
      description: "I architect AI-driven pipelines that automate lead verification and team triage. Let's rebuild your sales workflow.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Explore Workflows",
    }}
  />
);

export default FormVerificationPage;
