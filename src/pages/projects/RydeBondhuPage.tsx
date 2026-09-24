import { Users, Route, Radio, MessageCircle, History, Globe2 } from "lucide-react";
import { SiFlutter, SiNextdotjs, SiNodedotjs, SiExpress, SiPrisma, SiSocketdotio, SiNetlify } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface RydeBondhuPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const RydeBondhuPage = ({ isDark, toggleTheme }: RydeBondhuPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="RydeBondhu"
    description="Motorcycle clubs in Bangladesh plan rides in WhatsApp, share routes as screenshots, track who is coming in a spreadsheet, and lose each other on the hill roads. RydeBondhu is my own product: one app where a club plans the route, sees every rider live on the map, chats and keeps a record of every ride. I wrote the product brief, feature scope and build plan, built the marketing site with a beta waitlist, and built the Phase 1 MVP: a Flutter app on a real-time Node.js API. The site is live and onboarding founding clubs."
    coverSrc="/images/projects/RydeBondhu.webp"
    chips={[
      { name: "Flutter", icon: <SiFlutter className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Next.js 15", icon: <SiNextdotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Prisma", icon: <SiPrisma className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    secondaryUrl="https://rydebondhu.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "groups",
        icon: <Users className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Riding Groups",
        summary: "A club creates a group, and riders join with a code",
        details: [
          "Create or join a group from the app",
          "Group pages with members and the upcoming ride",
        ],
      },
      {
        id: "route",
        icon: <Route className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Route Planning",
        summary: "One shared route instead of screenshots in a chat",
        details: ["Plan the start, destination and stops on a map, with distance and estimated time", "Every rider in the group sees the same plan"],
      },
      {
        id: "live",
        icon: <Radio className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Live Ride",
        summary: "See the whole crew on the map in real time",
        details: [
          "Location updates stream over WebSockets while the ride is on",
          "Distance, speed and ETA on the live ride screen",
        ],
      },
      {
        id: "chat",
        icon: <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Group Chat",
        summary: "The ride's conversation stays with the ride",
        details: ["Real-time group chat built into each group"],
      },
      {
        id: "history",
        icon: <History className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Ride Summary and History",
        summary: "Every ride is logged when it ends",
        details: ["A summary screen after each ride", "A ride history on each rider's profile"],
      },
      {
        id: "site",
        icon: <Globe2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Launch Website and Waitlist",
        summary: "The public site that is onboarding founding clubs",
        details: [
          "Explains the problem, who it's for, the features, safety and the community",
          "A beta waitlist sign-up with email validation",
          "An animated feature carousel and a live-ride preview mock-up",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiFlutter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Flutter", description: "The rider app: groups, route planning, live ride, chat and history." },
      { icon: <SiExpress className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Node.js + Express", description: "REST API for auth, groups, rides and profiles, with JWT sessions." },
      { icon: <SiSocketdotio className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Socket.IO", description: "Real-time location and chat during a ride." },
      { icon: <SiPrisma className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Prisma", description: "Data model for users, groups, memberships, routes, rides, location pings and messages." },
      { icon: <SiNextdotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Next.js 15 + React 19", description: "The marketing site and waitlist." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Hosting for the website." },
    ]}
    useCases={[
      "Motorcycle clubs running group tours",
      "Long-distance tourers riding with friends",
      "Any group that needs to stay together on the road",
    ]}
    contactCTA={{
      title: "Have a product idea to take from brief to MVP?",
      description: "I take products from the first brief to a working app, a real-time backend and a launch site.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default RydeBondhuPage;
