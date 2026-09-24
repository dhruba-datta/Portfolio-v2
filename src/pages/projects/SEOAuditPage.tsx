import { Webhook, Gauge, Sparkles, Send, Table2 } from "lucide-react";
import { SiN8N, SiOpenai, SiGooglesheets, SiGmail, SiPagespeedinsights } from "react-icons/si";
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
    description="Agencies win clients by showing them a problem on their own website, but running an audit and writing it up by hand takes time for every prospect. This workflow does it the moment someone submits their site: it runs Google's PageSpeed test for performance and SEO on mobile, has GPT-4 turn the numbers into a short, plain-English audit with the top three issues and fixes, and emails it to the prospect. Every request is logged, so the sales team knows who to follow up with."
    coverSrc="/images/projects/SEO Audit (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "PageSpeed Insights", icon: <SiPagespeedinsights className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "GPT-4", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Gmail", icon: <SiGmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    features={[
      {
        id: "instant",
        icon: <Webhook className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Audit on Request",
        summary: "A website form sends the prospect's name, email and URL straight into the workflow",
        details: [
          "Works with any form that can post to a webhook, including a landing page or a lead magnet",
          "No one on the team has to run the test or write the email",
        ],
      },
      {
        id: "measure",
        icon: <Gauge className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Real Google Metrics",
        summary: "Runs Google PageSpeed Insights for performance and SEO on mobile",
        details: [
          "Pulls the performance score, speed index, first contentful paint, total blocking time and layout shift",
          "Uses Google's own numbers, so the prospect can check them for themselves",
        ],
      },
      {
        id: "write",
        icon: <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "An Audit People Actually Read",
        summary: "GPT-4 turns the metrics into a short, persuasive summary",
        details: [
          "A one-line verdict that includes the score, the three most important issues and three recommended fixes",
          "Explains what fixing them would change for the business, and ends with a call to action",
          "Returns structured JSON, so the email layout stays the same every time",
        ],
      },
      {
        id: "deliver",
        icon: <Send className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Delivered by Email, Logged for Sales",
        summary: "The prospect gets the audit in their inbox; the team gets a record",
        details: [
          "Sent from the agency's Gmail as a 'Performance review of your website' email",
          "Each request is added to Google Sheets with the prospect's details for follow-up",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n", description: "Webhook, HTTP Request and Code nodes run the pipeline end to end." },
      { icon: <SiPagespeedinsights className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "PageSpeed Insights API", description: "Google's Lighthouse test for performance and SEO on mobile." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "OpenAI GPT-4", description: "Writes the audit summary as structured JSON." },
      { icon: <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Gmail", description: "Sends the audit to the prospect." },
      { icon: <Table2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "Logs every audit request for the sales team." },
    ]}
    useCases={[
      "Agencies offering a free website audit as a lead magnet",
      "Sales teams that want a reason to start a conversation with a prospect",
      "Consultants who want to qualify a site before a discovery call",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "A prospect submits their name, email and website URL through a form.",
      "The request is logged in Google Sheets.",
      "Google PageSpeed Insights tests the site for performance and SEO on mobile.",
      "GPT-4 writes a short audit with the score, top issues and recommended fixes.",
      "The audit is emailed to the prospect within minutes.",
    ]}
    contactCTA={{
      title: "Want audits that turn into leads?",
      description: "I can set up an automated audit that runs on your own form, in your brand's voice, and feeds your sales pipeline.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Explore Workflows",
    }}
  />
);

export default SEOAuditPage;
