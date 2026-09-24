import { Layers, MapPin, FileSearch, MailCheck, Shuffle, ShieldCheck, Table2, Send, Database } from "lucide-react";
import { SiN8N, SiGooglemaps, SiGooglesheets } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface ColdEmailPipelinePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ColdEmailPipelinePage = ({ isDark, toggleTheme }: ColdEmailPipelinePageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Cold Email Pipeline (n8n)"
    description="Most cold email fails for two reasons: it goes to a bought list with bad addresses, and it says nothing specific about the business it's sent to. This pipeline fixes both. It enriches every prospect with their Google Maps data, crawls their website to find problems you can actually point to, writes that evidence in plain English, verifies every address, and loads only the qualified, verified prospects into Instantly across warmed-up mailboxes. Each first email can open with something true about that business."
    coverSrc="/images/projects/Cold Email Pipeline (n8n).webp"
    chips={[
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Maps data", icon: <SiGooglemaps className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Website crawling", icon: <FileSearch className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "MillionVerifier", icon: <MailCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Instantly", icon: <Send className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    features={[
      {
        id: "stages",
        icon: <Layers className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Staged Pipeline, Cheapest Checks First",
        summary: "Separate workflows for enrichment, scoring, verification and sending",
        details: [
          "Free and cheap checks run first, so paid lookups are only spent on prospects worth contacting",
          "Each stage reads one status and writes the next, so any stage can be re-run after a fix without re-buying data",
          "A failure stops one stage instead of silently corrupting the whole list",
          "In the first cohort, 673 businesses were crawled and scored in under four minutes",
        ],
      },
      {
        id: "enrich",
        icon: <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Google Maps Enrichment With a Safety Check",
        summary: "Adds review count, rating and business category to every prospect",
        details: [
          "A domain-match check rejects any Maps result that points to a different website, so a wrong number never ends up in an opening line",
          "In the first run, 84% of businesses matched and 105 mismatches were rejected rather than guessed",
          "The business's own Google category personalises the email, and falls back to a generic term instead of guessing",
        ],
      },
      {
        id: "score",
        icon: <FileSearch className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Website Crawl and Signal Scoring",
        summary: "Finds visible problems on each site and writes them down as evidence",
        details: [
          "Checks each site for weaknesses a prospect would recognise, such as a weak enquiry path, thin reviews, services crammed onto one page or no Spanish-language content",
          "Weighted signals are scored and each prospect is tiered, so the strongest openers go first",
          "Writes plain-English evidence per prospect, ready to drop into the email",
          "No evidence, no email: prospects without a real signal are parked and re-scored later, never padded",
        ],
      },
      {
        id: "verify",
        icon: <MailCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Verification Before Anything Is Queued",
        summary: "Every address is checked, and only confirmed-good ones are mailed",
        details: [
          "Hundreds of addresses verified in a few minutes per run",
          "Invalid addresses are permanently dropped so they can never enter a campaign",
          "Catch-all and unknown results are held back while the sending domains are still new",
          "On the first cohort, this removed addresses that would have produced a bounce rate of around 6.7%, enough to damage new sending domains",
        ],
      },
      {
        id: "assign",
        icon: <Shuffle className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Assign and Push to Instantly",
        summary: "Loads the cohort into campaigns with strict rules and no duplicates",
        details: [
          "Each business is always assigned to the same sender, so one business hears from one person across every future run",
          "One campaign per mailbox, so the signature always matches the account that actually sends",
          "Hard checks before every push, with zero duplicates and zero gate failures in testing",
          "Ships in dry-run mode, so nothing can be sent until someone deliberately switches it on",
        ],
      },
      {
        id: "deliverability",
        icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Deliverability Set Up Properly",
        summary: "The sending setup is built to protect the main domain and reach the inbox",
        details: [
          "Dedicated sending domains, kept separate from the main business domain, with SPF, DKIM and DMARC",
          "Three weeks of mailbox warmup on a slow, weekday-only ramp",
          "Low daily sending caps per mailbox, so no single domain is pushed hard",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n", description: "Runs each stage as its own workflow, with code steps for crawling, scoring and assignment." },
      { icon: <SiGooglemaps className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Outscraper (Google Maps)", description: "Business listings, reviews, ratings and categories." },
      { icon: <MailCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "MillionVerifier", description: "Email verification before any address is queued." },
      { icon: <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Instantly", description: "Campaigns, sending and mailbox warmup." },
      { icon: <Table2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Sheets", description: "System of record for every prospect's stage, evidence and result." },
      { icon: <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Postgres (ready to scale)", description: "Schema designed for when the list outgrows a spreadsheet." },
    ]}
    useCases={[
      "Agencies prospecting local service businesses such as law firms, clinics or contractors",
      "B2B teams that want personalised cold email without writing every line by hand",
      "Anyone starting cold outreach on new domains who can't afford to burn them",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "Start with a list of target businesses in a sheet.",
      "Enrich each one with its Google Maps reviews, rating and category.",
      "Crawl its website, score the problems found and write the evidence.",
      "Verify the email address and drop anything risky.",
      "Assign each qualified business to a sender and push it into that mailbox's Instantly campaign.",
    ]}
    contactCTA={{
      title: "Want cold email that says something real?",
      description: "I build prospecting pipelines that research every business before the first email, and protect your domains while doing it.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Explore Workflows",
    }}
  />
);

export default ColdEmailPipelinePage;
