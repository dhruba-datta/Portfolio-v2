import { Globe2, Webhook, Activity, Search, Mail } from "lucide-react";
import { SiN8N, SiGooglesheets, SiOpenai, SiGmail } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface SEOAuditPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const SEOAuditPage = ({ isDark, toggleTheme }: SEOAuditPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="SEO Audit (n8n)"
    description="Optimize your website's search engine visibility and loading speed with this n8n workflow. It automates website performance analysis using Google PageSpeed Insights, generates a professional audit report using GPT-4, and sends it directly to your clients via Gmail."
    coverSrc="/images/projects/SEO Audit (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "PageSpeed", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Gmail", icon: <SiGmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Webhook", icon: <Webhook className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/n8n"
    secondaryUrl="https://github.com/dhruba-datta/n8n/tree/main/SEO%20Audit"
    secondaryLabel="Open Folder"
    features={[
      { id: "analysis", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Automated Performance Pipeline", summary: "High-precision website analysis using Google PageSpeed Insights API", details: ["Real-time fetching of Lighthouse mobile performance metrics for any URL via automated REST API calls", "Extraction of critical Core Web Vitals (LCP, FID, CLS) and PageSpeed scores to quantify user experience", "Deep data parsing logic that benchmarks results against industry standards to pinpoint specific latency issues"] },
      { id: "ai", icon: <SiOpenai className="w-4 sm:w-5 h-4 sm:h-5" />, title: "AI-Powered Audit Generation", summary: "GPT-4 driven analysis transforming raw metrics into professional, persuasive reports", details: ["Intelligent interpretation of performance data by OpenAI's GPT-4 model to articulate technical findings into business value", "Generation of concise, persuasive audits designed for high-impact client presentations and sales decks", "Strategic prioritization of optimization tasks based on their projected impact on SEO rankings and conversion rates"] },
      { id: "reporting", icon: <Mail className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Automated Gmail Reporting", summary: "Seamless delivery of professional audit results directly to clients via custom HTML templates", details: ["Dynamic creation of beautifully formatted HTML email reports with embedded performance charts and AI insights", "Automated dispatching via secure Gmail API nodes with personalized subject lines and clear Call-to-Actions (CTAs)", "Zero-touch client communication flow triggered instantly by form submissions or manual webhook pings"] },
      { id: "logging", icon: <SiGooglesheets className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Centralized Lead Management", summary: "Production-ready tracking of audit requests and client data in Google Sheets", details: ["Persistent logging of every audit request to track lead sources and maintain a historical database of client performance", "Bi-directional synchronization of client metadata across the agency tech stack for unified lead nurturing", "Automated sheet maintenance that flags high-priority leads based on their performance scores for immediate sales follow-up"] },
    ]}
    techSectionTitle="Nodes & Tech Used"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n Orchestration", description: "Core engine managing the end-to-end automation from webhook trigger to final reporting." },
      { icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "HTTP Request Node", description: "Executes high-performance calls to the Google PageSpeed Insights API for real-time metrics." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "GPT-4 Model", description: "Advanced AI model used for interpreting technical Lighthouse data into human-readable business audits." },
      { icon: <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Gmail Integration", description: "Transactional email system for delivering personalized SEO reports directly to client inboxes." },
      { icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "Serves as a lightweight CRM and request log for long-term client tracking and pipeline monitoring." },
      { icon: <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Webhook Node", description: "Universal entry point allowing external contact forms or apps to trigger audits instantaneously." },
    ]}
    useCases={[
      "Automated lead generation engine delivering immediate value to prospective clients via SEO audits",
      "Scalable performance monitoring for agency clients with weekly or monthly automated reporting",
      "Internal technical debt auditing for development teams to maintain high Lighthouse scores at scale",
      "Strategic sales tool for identifying and approaching businesses with underperforming website metrics",
    ]}
    howToSteps={[
      <>Open folder:&nbsp;<a className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600 break-words hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" href="https://github.com/dhruba-datta/n8n/tree/main/SEO%20Audit" target="_blank" rel="noopener noreferrer">GitHub - SEO Audit</a></>,
      <>Import workflow:&nbsp;In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">SEO_Audit.json</code> file.</>,
      <>Configure API Keys:&nbsp;Set up your <b>Google PageSpeed API</b> key, <b>OpenAI</b> credentials, and <b>Gmail OAuth2</b> permissions.</>,
      <>Connect Trigger:&nbsp;Point your website's contact form or a custom script to the n8n <b>Webhook URL</b>.</>,
      <>Test Pipeline:&nbsp;Perform a manual trigger with test data to verify the audit generation and email delivery flow.</>,
    ]}
    contactCTA={{
      title: "Automate your agency growth?",
      description: "I build intelligent n8n workflows that transform technical data into high-value client experiences. Let's optimize your pipeline.",
      primaryButtonText: "Start Automation",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default SEOAuditPage;
