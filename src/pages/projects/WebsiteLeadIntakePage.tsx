import { Webhook, ShieldCheck, Bot, BellRing, UtensilsCrossed, ListChecks, MailCheck } from "lucide-react";
import { SiN8N, SiOpenai, SiGooglesheets, SiGooglechat, SiGmail } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface WebsiteLeadIntakePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const WebsiteLeadIntakePage = ({ isDark, toggleTheme }: WebsiteLeadIntakePageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="AI Lead Intake & Triage (n8n)"
    description="Most website form submissions are sales pitches, bots or tests, and the real enquiries get buried among them. I built a family of production n8n workflows that fix that for restaurants, law firms and agencies. Each submission is cleaned and screened, an AI model sorts real customers from pitches, email addresses are verified, everything is logged to Google Sheets, and the team gets a Google Chat card and an email with one-click reply and call buttons for every genuine lead."
    coverSrc="/images/projects/Website Lead Intake (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Webhooks", icon: <Webhook className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Chat", icon: <SiGooglechat className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
      { name: "Gmail", icon: <SiGmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "NeverBounce", icon: <MailCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    features={[
      {
        id: "webhooks",
        icon: <Webhook className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Authenticated Webhooks",
        summary: "One intake endpoint per form, protected by a shared header secret",
        details: [
          "Separate workflows for the contact form, newsletter sign-up and catering quote request",
          "Each webhook requires a secret header, so only the website's own server can post to it",
          "The browser gets its response before the slower steps run, so a slow AI or Sheets call never leaves a visitor waiting",
        ],
      },
      {
        id: "screening",
        icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Clean & Screen Every Submission",
        summary: "A code step normalises input and stops bots before anything else runs",
        details: [
          "A hidden honeypot field and an empty-submission check flag bots without spending an AI call",
          "Bot traffic is still logged as a blocked row, so the volume stays auditable",
          "Values that start with =, +, - or @ are escaped so a submission can't run as a spreadsheet formula",
          "Whitespace and length limits, phone numbers normalised to a dialable format, timestamps in the business's own time zone",
        ],
      },
      {
        id: "classification",
        icon: <Bot className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "AI Triage of Enquiries",
        summary: "An LLM decides whether the sender is a customer or someone pitching to the business",
        details: [
          "Sorts contact messages into categories that fit the business: reservation, catering, complaint, job application and enquiry for a restaurant; lead, spam or test for a law firm",
          "The prompt treats the submission as untrusted input and tells the model to classify it, never follow it",
          "Defaults to enquiry when unsure: a missed customer costs more than one extra spam alert",
          "If the model fails or returns something unexpected, the message goes to needs review and still reaches the team",
        ],
      },
      {
        id: "verification",
        icon: <MailCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Email Verification",
        summary: "Real leads have their email address checked before anyone replies",
        details: [
          "NeverBounce flags invalid or risky addresses, and the result is saved next to the lead",
          "Works with forms that already write to a Google Sheet: the workflow checks for new rows every minute",
        ],
      },
      {
        id: "catering",
        icon: <UtensilsCrossed className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Catering Quote Processing",
        summary: "Turns a nested quote request into one clean row and a ready-to-price summary",
        details: [
          "Flattens contact, event, order and fulfilment details into spreadsheet columns",
          "Picks the right address for delivery, pickup or an on-site chef, and adds venue notes only when they apply",
          "Flags events less than 48 hours away as urgent",
        ],
      },
      {
        id: "alerts",
        icon: <BellRing className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Team Alerts With One-Click Actions",
        summary: "Google Chat cards and HTML emails built for acting on, not just reading",
        details: [
          "Chat cards with contact details, the message, the page it came from, and Reply by Email and Call buttons",
          "Spam gets a short quiet message instead of a full card, so real enquiries stand out",
          "HTML email with a suggested next step for each category, and a same-day reply prompt for complaints",
          "Anything the visitor typed is HTML-escaped before it goes into an email or card",
        ],
      },
      {
        id: "logging",
        icon: <ListChecks className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Sheets as the Audit Log",
        summary: "Every submission, including blocked ones, lands in Google Sheets",
        details: [
          "Append-only rows with the AI category and a short reason next to each message",
          "Retries on Sheets, Chat and Gmail steps so a temporary API error doesn't lose a lead",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n", description: "Webhook, Code, If and Respond to Webhook nodes orchestrating each intake flow." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "OpenAI", description: "GPT models classify each message and return a category and a short reason as JSON." },
      { icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "Append-only log of every submission, one sheet per form." },
      { icon: <SiGooglechat className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Chat", description: "Card alerts with reply and call buttons for the team." },
      { icon: <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Gmail", description: "HTML notification emails for contact and catering requests." },
      { icon: <MailCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "NeverBounce", description: "Verifies leads' email addresses before follow-up." },
    ]}
    useCases={[
      "Contact forms where most inbound messages are sales pitches rather than customers",
      "Law firms and professional services that can't afford to miss a genuine enquiry",
      "Catering or quote requests that need a fast, well-structured summary for whoever prices them",
      "Newsletter sign-ups logged in one place, with an alert for each new subscriber",
      "Any website form that should reach a team chat and a spreadsheet without a CRM",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "A visitor submits a contact, newsletter or catering form on the website.",
      "The webhook checks the secret, replies to the browser and cleans the submission.",
      "Bots are blocked, real messages are sorted by the AI and email addresses are verified.",
      "Every submission is logged to Google Sheets.",
      "The team gets a chat card and an email with Reply and Call buttons.",
    ]}
    contactCTA={{
      title: "Need your forms to reach the right person?",
      description: "I build intake workflows that screen spam, sort enquiries with AI and alert the team the moment something real comes in.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Explore Workflows",
    }}
  />
);

export default WebsiteLeadIntakePage;
