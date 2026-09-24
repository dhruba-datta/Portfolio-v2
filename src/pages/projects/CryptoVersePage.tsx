import {
  TrendingUp,
  Search,
  BarChart3,
  Newspaper,
  Smartphone,
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
    description="I built a cryptocurrency market dashboard in React that pulls market data from the Coinranking API and news from Bing News, both through RapidAPI. It shows global market statistics and the top 10 coins, lets users search the coin list, opens a detail page for each coin with a price chart over eight time periods, and lists the latest news by coin. Data fetching and caching use Redux Toolkit Query, and the UI uses Ant Design."
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
        id: "overview",
        icon: <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Global Market Overview",
        summary: "See the state of the crypto market at a glance",
        details: [
          "Total market cap and 24-hour trading volume",
          "Total cryptocurrencies, exchanges and markets",
          "The top 10 coins and the latest news on the home page",
        ],
      },
      {
        id: "search",
        icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Search & Filter Coins",
        summary: "Find cryptocurrencies by name or symbol",
        details: [
          "Search the coin list by name as you type",
          "Each coin shown as a card with price, market cap and daily change",
        ],
      },
      {
        id: "details",
        icon: <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Coin Details & Charts",
        summary: "View detailed information about any cryptocurrency",
        details: [
          "Price chart with Chart.js over eight time periods, from 3 hours to 5 years",
          "Market rank, trading volume, and supply metrics",
          "All-time high, number of markets and exchanges, and supply figures",
        ],
      },
      {
        id: "news",
        icon: <Newspaper className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Crypto News Feed",
        summary: "Read recent news and updates from the crypto industry",
        details: [
          "News from Bing News, filtered by the coin you pick",
          "Each article links to the original source",
        ],
      },
      {
        id: "responsive",
        icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Responsive Layout",
        summary: "Works on mobile, tablet, and desktop",
        details: [
          "Built with Ant Design for professional UI",
          "Sidebar navigation that collapses on mobile",
          "Touch-friendly on all devices",
        ],
      },
      {
        id: "navigation",
        icon: <Globe2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Client-Side Navigation",
        summary: "Fast page transitions with React Router",
        details: [
          "Single-page app with no full page reloads",
          "Deep links so you can share coin details directly",
          "Breadcrumb navigation for easy orientation",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      {
        icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "React 18",
        description: "Component framework for building the UI.",
      },
      {
        icon: <SiRedux className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Redux Toolkit",
        description: "RTK Query for fetching and caching API data.",
      },
      {
        icon: <SiAntdesign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Ant Design",
        description: "UI component library for professional styling.",
      },
      {
        icon: <LineChart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "Chart.js",
        description: "Charting library for price history graphs.",
      },
      {
        icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "RapidAPI",
        description: "Coinranking for market data and Bing News for articles.",
      },
      {
        icon: <SiReactrouter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
        label: "React Router 6",
        description: "Client-side routing for navigation between pages.",
      },
    ]}
    useCases={[
      "Learning how to build a dashboard that pulls data from external APIs",
      "Understanding Redux Toolkit for managing complex app state",
      "Reference for integrating Chart.js and Ant Design in a real project",
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
      title: "Need a data dashboard or analytics app?",
      description: "I build React dashboards with external APIs, Redux for state management, and Chart.js for visualizations.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default CryptoVersePage;
