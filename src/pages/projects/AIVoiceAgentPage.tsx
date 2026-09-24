import { Mic, CalendarDays, PhoneForwarded, ShieldCheck, Workflow, ListChecks, PhoneCall } from "lucide-react";
import { SiN8N, SiOpenai, SiTwilio, SiGooglecalendar } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface AIVoiceAgentPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const AIVoiceAgentPage = ({ isDark, toggleTheme }: AIVoiceAgentPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="AI Voice Agent (n8n MCP)"
    description="An AI phone agent that answers calls, books appointments against a live calendar and hands the caller to a person when it should. Vapi handles the voice and Twilio the phone line, GPT-4o does the reasoning, and n8n provides the tools. Instead of one webhook per tool, n8n exposes them through a single MCP server, so the agent discovers its tools at the start of the call and can use several of them in one conversation."
    coverSrc="/images/projects/AI Voice Agent (n8n MCP).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "MCP", icon: <Workflow className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vapi", icon: <Mic className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "GPT-4o", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Twilio", icon: <SiTwilio className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Calendar", icon: <SiGooglecalendar className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    features={[
      {
        id: "mcp",
        icon: <Workflow className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "One MCP Server Instead of Many Webhooks",
        summary: "n8n acts as the agent's toolbox through a single connection",
        details: [
          "An MCP server workflow defines the tools; each tool's logic lives in its own sub-workflow",
          "Tools can be updated or added without reconfiguring the voice assistant",
          "The model keeps the conversation context, so one call can use several tools in a row",
          "Details like name and email are only asked for when a tool actually needs them",
        ],
      },
      {
        id: "booking",
        icon: <CalendarDays className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Appointment Booking",
        summary: "Checks the calendar live and books the slot, or offers alternatives",
        details: [
          "Parses the requested date and time and checks Google Calendar for conflicts",
          "If the slot is free, it creates the appointment with the caller's contact details",
          "If it's taken, it searches the next seven days of business hours and offers three open slots",
        ],
      },
      {
        id: "transfer",
        icon: <PhoneForwarded className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Live Call Transfer",
        summary: "Hands the caller to a team member when they ask for a person",
        details: [
          "Tells the caller they're being connected, then transfers the call",
          "If the transfer fails, it tells the caller someone will follow up instead of dropping them",
        ],
      },
      {
        id: "failure",
        icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Failure Handling",
        summary: "A three-step recovery when the agent can't understand the caller",
        details: [
          "Asks the caller to repeat, then asks once more in different words",
          "After a third failure, it apologises and transfers the call to a person",
        ],
      },
      {
        id: "roadmap",
        icon: <ListChecks className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Planned Tools",
        summary: "Next tools on the same MCP server",
        details: [
          "Planned: answering common questions from a knowledge base and flagging unknowns for follow-up",
          "Planned: scoring callers as hot, warm or cold and logging the result for follow-up",
          "Planned: SMS follow-up after the call with the booking confirmation",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vapi", description: "Voice assistant that runs the call and calls tools mid-conversation." },
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n MCP Server", description: "Exposes the agent's tools through one MCP endpoint, with sub-workflows for the logic." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "GPT-4o", description: "Reasons over the conversation and decides which tool to call." },
      { icon: <SiGooglecalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Calendar", description: "Availability checks and appointment creation." },
      { icon: <SiTwilio className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Twilio", description: "Phone number and call routing into the voice agent." },
      { icon: <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Call Transfer", description: "Native transfer tool for handing callers to a person." },
    ]}
    useCases={[
      "Service businesses that miss calls after hours or while staff are busy",
      "Booking appointments straight into a calendar without a receptionist",
      "Routing callers who need a person to the right team member",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "A caller rings the business number, routed through Twilio to the Vapi agent.",
      "The agent talks with the caller and decides which tool it needs.",
      "It calls the n8n MCP server to check the calendar and book the slot, or offer alternatives.",
      "If the caller wants a person, or the agent can't understand them, it transfers the call.",
    ]}
    contactCTA={{
      title: "Thinking about a voice agent?",
      description: "I build voice agents on Vapi and n8n that book, answer and hand off calls reliably.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Explore Workflows",
    }}
  />
);

export default AIVoiceAgentPage;
