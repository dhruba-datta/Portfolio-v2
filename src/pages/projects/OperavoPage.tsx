import {
  PhoneCall,
  CalendarCheck,
  Users,
  MessageSquare,
  ShieldCheck,
  LayoutDashboard,
  Lock,
  Globe2,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface OperavoPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const OperavoPage = ({ isDark, toggleTheme }: OperavoPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Operavo"
    description="Real estate teams lose qualified buyers every time a call goes to voicemail or sits in a callback queue overnight. This real-time voice AI platform eliminates that leakage entirely by answering every inbound call instantly, qualifying the buyer mid-conversation, and booking the showing on a live calendar before the caller hangs up - transforming the after-hours dead zone into a 24/7 booking engine that captures revenue while the office is closed."
    coverSrc="/images/projects/Operavo.webp"
    chips={[
      { name: "Next.js 16", icon: <SiNextdotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind 4", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Supabase", icon: <SiSupabase className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Voice AI", icon: <PhoneCall className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/OptifyLLC/Operavo"
    secondaryUrl="https://operavo.ai/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "voice-agent",
        icon: <PhoneCall className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Always-On Voice Agent",
        summary: "Picks up every inbound call in real time — day, night, and weekends",
        details: [
          "Sub-second answer time so callers hear a live voice instead of a ringtone or voicemail",
          "Trained on each workspace's tone, listings, and qualification rules for a brand-native feel",
          "Handles natural speech patterns like 'next Tuesday' or 'something in the afternoon' without rigid menus",
          "Graceful fallback flow that retries on misheard audio and bridges to a human before frustration sets in",
        ],
      },
      {
        id: "live-booking",
        icon: <CalendarCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Live Booking on Google Calendar",
        summary: "Confirms the appointment on-call with real availability, never a callback promise",
        details: [
          "Reads the connected Google Calendar in real time so the agent never offers a slot that's already taken",
          "Reads three open alternatives out loud when the caller's first choice is busy",
          "Writes the confirmed event back to the calendar with attendee details before the caller hangs up",
          "OAuth-based account linking with secure scoped permissions managed in the dashboard",
        ],
      },
      {
        id: "lead-scoring",
        icon: <Users className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Lead Qualification & Scoring",
        summary: "Every caller tagged Hot, Warm, or Cold with a two-line summary and next action",
        details: [
          "Per-call qualification capturing budget, timeline, neighborhood, and intent without a manual form",
          "Hot / Warm / Cold scoring so the team knows who to call back first thing in the morning",
          "Two-sentence call summary plus a recommended next step replaces having to re-listen to the recording",
          "Full transcript and audio archived for compliance and quality review",
        ],
      },
      {
        id: "dashboard",
        icon: <LayoutDashboard className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Unified Real-Time Dashboard",
        summary: "Live call log, appointments, and qualified leads in one workspace",
        details: [
          "Live call log with intent, score, duration, and time — filterable by Booked, Transferred, Q&A, and Voicemail",
          "Appointments view synced to Google Calendar with Upcoming / Today / Past tabs and confirmation status",
          "Leads board with score breakdown, summary notes, and one-click contact details",
          "CSV export across calls, appointments, and leads for downstream CRM workflows",
        ],
      },
      {
        id: "sms-confirmation",
        icon: <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Instant SMS Confirmations",
        summary: "Personalized text with a one-tap calendar link delivered while the caller is still on the line",
        details: [
          "Booking confirmation fires the moment the slot is locked, before the caller hangs up",
          "Personalized with the caller's name, appointment time, and add-to-calendar deep link",
          "Reduces no-shows and 'when was it again?' follow-up calls",
          "Per-workspace SMS branding so messages always read like they came from the agency",
        ],
      },
      {
        id: "multi-tenant",
        icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Secure Multi-Tenant Workspaces",
        summary: "Supabase-backed auth, row-level security, and per-business workspace isolation",
        details: [
          "Email + password auth with email verification, password reset, and pending-approval flows",
          "Row-level security policies guaranteeing each workspace only sees its own calls, leads, and settings",
          "Per-workspace branding, business hours, timezone, and Google Calendar integration",
          "Full settings surface for profile, business identity, and connected accounts with safe disconnect flows",
        ],
      },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiNextdotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Next.js 16", description: "App Router, server actions, and edge-rendered routes powering both the marketing site and authenticated dashboard." },
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Latest concurrent features driving the live call log, dashboard tabs, and interactive product spotlight." },
      { icon: <SiTypescript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TypeScript", description: "Strict end-to-end typing across UI, server actions, and Supabase data access for safe refactors." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4", description: "Design-system grade utility styling delivering the cinematic emerald-on-black aesthetic across every screen." },
      { icon: <SiSupabase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Supabase", description: "Auth, Postgres, and row-level security enforcing per-workspace isolation for calls, leads, and settings." },
      { icon: <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "OAuth 2.0", description: "Google OAuth flow for calendar account linking with scoped permissions and safe revocation." },
      { icon: <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Real-Time Voice AI", description: "Low-latency voice pipeline answering inbound calls and driving qualification, booking, and handoff in one conversation." },
      { icon: <SiVercel className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vercel", description: "Production deployment with preview environments, edge runtime, and zero-config Next.js hosting." },
      { icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Calendar API", description: "Live availability reads and event writes so the agent never books over an existing meeting." },
    ]}
    useCases={[
      "Real estate brokerages capturing after-hours buyer inquiries that would otherwise hit voicemail",
      "Solo agents using Operavo as a 24/7 receptionist that books showings while they're already in another meeting",
      "Property management teams routing tenant calls between booking, qualification, and live human handoff",
      "Multi-office agencies running one workspace per branch with isolated calendars, leads, and SMS branding",
      "Sales teams that need every caller scored and summarized so the morning callback queue is already prioritized",
      "Agencies that want a measurable lift in show-up rate via instant SMS confirmation with calendar deep links",
      "Operations leads who need exportable call logs and lead lists to feed an existing CRM without manual data entry",
    ]}
    howToSteps={[
      <>Visit&nbsp;<a href="https://operavo.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">operavo.ai</a>&nbsp;and click <b>Get Started</b> to create a workspace.</>,
      <>Verify your email and complete the workspace profile (business name, phone, and timezone).</>,
      <>Connect your <b>Google Calendar</b> from Settings so Operavo can read live availability and write confirmed bookings.</>,
      <>Configure your voice agent's tone, qualification questions, and routing rules from the dashboard.</>,
      <>Forward your business line to the Operavo number and watch the live call log fill in as inbound calls are answered, scored, and booked.</>,
    ]}
    contactCTA={{
      title: "Want a 24/7 voice agent for your business?",
      description: "I build production-grade voice AI platforms with multi-tenant dashboards. Let's talk about turning your inbound calls into booked revenue.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default OperavoPage;
