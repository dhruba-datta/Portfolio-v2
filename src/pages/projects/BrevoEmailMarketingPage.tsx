import { Send, Activity, BellRing, Trash2, Clock, Table2 } from "lucide-react";
import { SiN8N, SiBrevo, SiGooglesheets, SiGooglechat } from "react-icons/si";
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
    description="Outbound email only works if every contact gets the first email and the follow-ups on time, and someone keeps the list clean. This system runs that on autopilot from a Google Sheet. New contacts are added to Brevo and sent a first email, follow-ups go out on a schedule, opens and clicks are written back to the sheet, and old contacts are cleared out so the account stays within its plan. The team gets a Google Chat alert before the account runs out of sending credits."
    coverSrc="/images/projects/Brevo Email Marketing (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Brevo", icon: <SiBrevo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Chat", icon: <SiGooglechat className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    ]}
    features={[
      {
        id: "first-email",
        icon: <Send className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "First Email, Automatically",
        summary: "Contacts added to the sheet are pushed to Brevo and emailed without anyone touching them",
        details: [
          "New contacts are added or updated in Brevo with their name and job title",
          "Each one gets the first email from a Brevo template",
          "The sheet is marked as added, with the date the email was sent",
        ],
      },
      {
        id: "follow-ups",
        icon: <Clock className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Follow-Ups on Schedule",
        summary: "Follow-up emails go out on weekdays to contacts who are due one",
        details: [
          "Scheduled weekday runs pick up everyone due a follow-up",
          "Sends in batches with pauses in between, to stay within Brevo's rate limits",
          "In production, each audience segment has its own pipeline and contact list",
        ],
      },
      {
        id: "engagement",
        icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Engagement Written Back",
        summary: "Opens and clicks from Brevo update the sheet as they happen",
        details: [
          "A Brevo webhook trigger reports engagement in real time",
          "The contact's status in Google Sheets is updated (for example, to Clicked), so sales can see who is warm",
        ],
      },
      {
        id: "limits",
        icon: <BellRing className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Credit and Limit Alerts",
        summary: "Checks the Brevo account before sending and warns the team in Google Chat",
        details: [
          "Warns when sending credits are nearly used up",
          "Alerts when no more emails or contacts can be added, instead of failing silently",
        ],
      },
      {
        id: "cleanup",
        icon: <Trash2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "List Cleanup",
        summary: "Scheduled jobs remove contacts who have finished the sequence",
        details: [
          "Removes finished contacts from Brevo so the account stays within its contact limit",
          "Tidies the tracking sheet on the same schedule",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n", description: "Schedules, batching, waits and branching across the whole sequence." },
      { icon: <SiBrevo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Brevo", description: "Contacts, template emails, engagement webhooks and account limits via the API." },
      { icon: <Table2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "The team's single view of contacts, status and send dates." },
      { icon: <SiGooglechat className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Chat", description: "Alerts when the account is close to its sending or contact limits." },
    ]}
    useCases={[
      "Agencies running outreach to several industries at once",
      "Small teams who manage leads in a spreadsheet and don't want a full CRM",
      "Anyone on a Brevo plan with contact or sending limits to manage",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "The team adds contacts to a Google Sheet.",
      "The workflow adds them to Brevo and sends the first email.",
      "Follow-ups go out on weekdays in paced batches.",
      "Opens and clicks are written back to the sheet as they happen.",
      "Finished contacts are cleaned out, and the team is alerted before any limit is hit.",
    ]}
    contactCTA={{
      title: "Want outreach that runs itself?",
      description: "I build email sequences on the tools you already pay for, with follow-ups, tracking and guardrails built in.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Explore Workflows",
    }}
  />
);

export default BrevoEmailMarketingPage;
