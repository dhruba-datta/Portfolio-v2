import { Table2, Lightbulb, ShieldCheck, ClipboardList } from "lucide-react";
import { SiN8N, SiOpenai, SiGooglesheets, SiTrello } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface ContentIdeaGeneratorPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ContentIdeaGeneratorPage = ({ isDark, toggleTheme }: ContentIdeaGeneratorPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Content Idea Generator (n8n)"
    description="Agencies managing social media for several clients spend hours every month coming up with post ideas that fit each client's industry, audience and rules. This workflow reads each client's brief from a Google Sheet, has GPT write three ready-to-edit post options per topic in the client's tone and within their compliance rules, and puts each idea straight onto that client's Trello backlog. The team starts the month editing drafts instead of staring at a blank page."
    coverSrc="/images/projects/Content Idea Generator (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "GPT-4o mini", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Trello", icon: <SiTrello className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    features={[
      {
        id: "brief",
        icon: <Table2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "One Sheet Holds Every Client's Brief",
        summary: "Account managers fill in the brief once; the workflow does the rest",
        details: [
          "Industry, primary service, audience, content goal, USP and call to action",
          "Tone, content pillar, platform and content type",
          "A compliance layer for regulated industries, such as healthcare or legal",
        ],
      },
      {
        id: "ideas",
        icon: <Lightbulb className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Three Options per Topic",
        summary: "GPT writes a topic and three distinct post options for each content type",
        details: [
          "The model writes as a copywriter for that client's industry",
          "Every option follows the client's tone, platform and call to action",
        ],
      },
      {
        id: "compliance",
        icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Rules Built Into the Prompt",
        summary: "Compliance and brand rules are part of every request, not an afterthought",
        details: [
          "Each client's compliance notes and special add-ons are passed to the model with every request",
          "Output is structured, so the ideas are split and formatted the same way every time",
        ],
      },
      {
        id: "trello",
        icon: <ClipboardList className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Straight Onto the Trello Backlog",
        summary: "Each idea becomes a card on the right client's board",
        details: [
          "Numbered, formatted post options in the card, ready for a writer or designer to pick up",
          "Fits the team's existing Trello process, with no new tool to learn",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n", description: "Loops over clients and topics and formats the output." },
      { icon: <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "OpenAI GPT-4o mini", description: "Writes topics and post options from each client's brief." },
      { icon: <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "The client brief database." },
      { icon: <SiTrello className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Trello", description: "Creates a card per idea on each client's backlog." },
    ]}
    useCases={[
      "Social media agencies planning monthly content for many clients",
      "Healthcare, legal and other regulated brands that need compliant copy",
      "In-house marketing teams that want a steady supply of first drafts",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "The team keeps each client's brief in a Google Sheet.",
      "The workflow reads the brief and sends it to GPT with the client's rules.",
      "GPT returns a topic and three post options.",
      "Each idea is added as a card on the client's Trello backlog.",
    ]}
    contactCTA={{
      title: "Want a content pipeline that never runs dry?",
      description: "I can build an idea generator around your clients' briefs and the tools your team already uses.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Explore Workflows",
    }}
  />
);

export default ContentIdeaGeneratorPage;
