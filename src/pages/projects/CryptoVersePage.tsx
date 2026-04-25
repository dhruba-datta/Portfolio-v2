import {
  TrendingUp,
  Search,
  BarChart3,
  Newspaper,
  Smartphone,
  Database,
  Zap,
  Globe2,
  LineChart,
} from "lucide-react";
import { SiReact, SiReactrouter, SiRedux, SiAntdesign } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface CryptoVersePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const CryptoVersePage = ({ isDark, toggleTheme }: CryptoVersePageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="CryptoVerse"
    description="Crypto investors struggle to track market movements across hundreds of coins while coordinating between multiple dashboards, news sites, and charting tools. This unified real-time crypto intelligence platform solves that by consolidating global market metrics, individual token analytics, and breaking news into a single responsive dashboard - transforming scattered market research into instant, data-driven investment decisions with zero context switching."
    coverSrc="/images/projects/CryptoVerse.webp"
    chips={[
      { name: "React", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Ant Design", icon: <SiAntdesign className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Chart.js", icon: <LineChart className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "RapidAPI", icon: <Globe2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React Router", icon: <SiReactrouter className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/CryptoVerse"
    secondaryUrl="https://cryptoverse20.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "dashboard",
        icon: <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Live Global Crypto Metrics",
        summary: "Real-time aggregation of global market capitalization and trading activity",
        details: [
          "Instant tracking of global crypto market cap and 24-hour trading volumes",
          "Live-updating ticker for total active cryptocurrencies and market pairs",
          "Dynamic leaderboard showcasing top trending coins, gainers, and losers",
        ],
      },
      {
        id: "search",
        icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Advanced Asset Filtering",
        summary: "High-performance search engine with multi-parameter sorting capabilities",
        details: [
          "Fuzzy search implementation allowing users to find assets by name, symbol, or tags",
          "Granular filtering options to sort results by market cap, price, or 24h performance",
          "Integrated watchlist functionality enabling users to bookmark and track favorite tokens",
        ],
      },
      {
        id: "details",
        icon: <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Deep-Dive Token Analytics",
        summary: "Comprehensive individual asset pages with interactive data visualization",
        details: [
          "Interactive Chart.js implementations offering multiple timeframe views (24h, 7d, 30d, 1y)",
          "Detailed breakdown of supply metrics (circulating vs. total) and historical price performance",
          "Rich statistical summaries including rank, trading volume, and all-time high/low data points",
        ],
      },
      {
        id: "news",
        icon: <Newspaper className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Aggregated News Intelligence",
        summary: "Curated real-time news feed drawn from reputable crypto media outlets",
        details: [
          "Context-sensitive news aggregation related to specific tokens or general market trends",
          "Categorized article feeds allowing users to filter news by topic (e.g., DeFi, Regulations)",
          "Sentiment analysis indicators helping users gauge community reactions and market buzz",
        ],
      },
      {
        id: "responsive",
        icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Adaptive Responsive Interface",
        summary: "Professional Ant Design layout optimized for all device form factors",
        details: [
          "Mobile-first responsive grid ensuring usability on smartphones and tablets",
          "Adaptive navigation sidebar that collapses into a drawer on smaller screens",
          "Touch-optimized interactive elements ensuring a native app-like experience on mobile",
        ],
      },
      {
        id: "navigation",
        icon: <Globe2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Seamless SPA Navigation",
        summary: "Fluid client-side routing with deep-linking capabilities",
        details: [
          "Instant page transitions managed by React Router without browser reloads",
          "Deep-linking support allowing users to share direct URLs to specific coin details or news",
          "Breadcrumb navigation trails improving user orientation within the application hierarchy",
        ],
      },
      {
        id: "state",
        icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Enterprise State Management",
        summary: "Robust Redux Toolkit implementation for scalable data handling",
        details: [
          "Centralized store managing global application state, user preferences, and cached API data",
          "Utilization of RTK Query for automated data fetching, caching, and cache invalidation",
          "Optimistic UI updates providing immediate feedback before server confirmation",
        ],
      },
      {
        id: "performance",
        icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Optimized Rendering Strategy",
        summary: "Performance-tuned architecture ensuring consistent 60fps interactions",
        details: [
          "Memoization of expensive chart computations to prevent unnecessary re-renders",
          "Lazy loading of heavy route components to minimize the initial JavaScript bundle size",
          "Efficient API request batching and rate-limit handling to ensure stability under load",
        ],
      },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      {
        icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "React",
        description: "Component-based architecture driving the dynamic, single-page user interface.",
      },
      {
        icon: <SiRedux className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Redux Toolkit (RTK Query)",
        description: "Advanced data fetching, caching, and state management logic.",
      },
      {
        icon: <SiAntdesign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Ant Design",
        description: "Professional-grade UI component library ensuring design consistency.",
      },
      {
        icon: <LineChart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Chart.js",
        description: "Flexible canvas-based charting library for visualizing complex financial datasets.",
      },
      {
        icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "RapidAPI",
        description: "Gateway integration for accessing third-party crypto market and news APIs.",
      },
      {
        icon: <SiReactrouter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "React Router",
        description: "Handling dynamic client-side routing and URL parameter management.",
      },
    ]}
    useCases={[
      "Personalized investor dashboards for tracking portfolios across disparate exchanges",
      "Prototype architecture for scalable FinTech applications utilizing real-time third-party data",
      "Educational resource for developers mastering Redux Toolkit Query and complex state flows",
      "Centralized information hub for crypto communities aggregating market data and relevant news",
    ]}
    howToSteps={[
      <>
        Clone:&nbsp;
        <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">
          git clone https://github.com/dhruba-datta/CryptoVerse
        </code>
      </>,
      <>
        Install deps:&nbsp;
        <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">
          npm install
        </code>
      </>,
      <>Configure environment:&nbsp;Set your RapidAPI keys and API base URLs in <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">.env</code>.</>,
      <>
        Start dev server:&nbsp;
        <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">
          npm run dev
        </code>
      </>,
      <>
        Build & deploy:&nbsp;
        <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">
          npm run build
        </code>
        &nbsp;then deploy to Netlify/Vercel.
      </>,
    ]}
    contactCTA={{
      title: "Need a high-performance web solution?",
      description: "I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default CryptoVersePage;
