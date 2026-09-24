import { ShoppingBag, FileText, ShoppingCart, Search, Building2, Video, Palette, Globe2, Mail, HelpCircle } from "lucide-react";
import { SiShopify, SiTiktok, SiInstagram, SiCanva, SiPython, SiGooglesearchconsole } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface AllureHivePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const AllureHivePage = ({ isDark, toggleTheme }: AllureHivePageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="AllureHive"
    description="AllureHive is an Optify Transformation Partners e-commerce brand selling natural woven home décor: jute rugs, storage baskets and eco-friendly accents made from jute, seagrass, water hyacinth, rattan and cotton rope. The store had traffic but leaked buyers at the product page and checkout. I run its operations and growth: I rebuilt the catalog copy, fixed the checkout leaks, restructured the store for search and AI answer engines, opened a Business & Bulk channel for trade buyers, and planned the short-form video engine that drives discovery."
    coverSrc="/images/projects/AllureHive.webp"
    chips={[
      { name: "Shopify", icon: <SiShopify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "SEO", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Email Marketing", icon: <Mail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TikTok", icon: <SiTiktok className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Instagram", icon: <SiInstagram className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    secondaryUrl="https://allurehive.store"
    secondaryLabel="Check it out"
    features={[
      {
        id: "catalog",
        icon: <FileText className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Catalog Rebuild",
        summary: "Every product page rewritten in one brand voice with clean data behind it",
        details: [
          "Rewrote all product descriptions in a consistent brand voice",
          "Cleaned product titles and removed leftover supplier copy",
          "Standardised SKUs and product metafields across the catalog",
          "Scripted the product-page template rollout so every listing follows the same structure",
        ],
      },
      {
        id: "checkout",
        icon: <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Cart-to-Checkout Fixes",
        summary: "Removed the leaks that made the cart look broken and cost orders",
        details: [
          "Fixed a $0.00 compare-at price shown on every product that made the cart look like a broken checkout",
          "Abandoned-checkout emails to recover shoppers who left at payment",
          "Express wallets for faster checkout",
          "Free-shipping threshold to lift order value",
        ],
      },
      {
        id: "seo",
        icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Search & AI Answer Engines",
        summary: "Store structure, metadata and FAQ content built to be found and quoted",
        details: [
          "Meta titles and descriptions across pages and collections",
          "Homepage copy rewritten across 9 sections and collection descriptions filled in",
          "Store verified in Google Search Console and every internal link checked",
          "Content structured so AI answer engines can read and cite it",
        ],
      },
      {
        id: "faq",
        icon: <HelpCircle className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "About, FAQ & Policies",
        summary: "Trust pages that answer buyers' questions before they ask",
        details: [
          "New About page telling the brand and materials story",
          "FAQ page with 31 questions and matching FAQPage structured data",
          "4 legal policies corrected and restyled to match the brand",
          "One contact email used consistently across the whole store",
        ],
      },
      {
        id: "merchant",
        icon: <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Google Merchant Center",
        summary: "Catalog synced to Google so products can appear in Shopping results",
        details: [
          "Catalog synced to Google Merchant Center",
          "Product data cleaned first so listings pass Google's checks",
          "Six categories mapped: Storage Baskets, Rugs & Runners, Plant Decor, Table & Dining, Wall & Decor, Gifts & Bags",
          "Opens a free Shopping channel alongside organic search",
        ],
      },
      {
        id: "b2b",
        icon: <Building2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Business & Bulk",
        summary: "A dedicated page and pricing approach for trade buyers",
        details: [
          "Business & Bulk page for B2B buyers, linked from the main menu",
          "Aimed at interior designers, short-term rental hosts, event stylists and boutiques",
          "Tiered trade pricing strategy with quotes handled through Shopify draft orders",
          "A second revenue channel alongside direct shoppers",
        ],
      },
      {
        id: "video",
        icon: <Video className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Short-Form Video Engine",
        summary: "A 90-day plan for TikTok, Instagram and YouTube, run as a weekly batch",
        details: [
          "TikTok for discovery, Instagram for trust and sales, YouTube for an evergreen library",
          "One video published to all three platforms, targeting 5 videos a week",
          "6 content types with an 80/20 rule of four value posts to every sales post",
          "AI-assisted video production in a single weekly batch of about 4 hours",
        ],
      },
      {
        id: "brand",
        icon: <Palette className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Brand System",
        summary: "A brand kit so every page, post and document looks like AllureHive",
        details: [
          "Logo, social share card and a forest-green and copper palette",
          "Branded document template for proposals and reports",
          "Theme-level styling inside the existing Shopify theme, no rebuild needed",
          "Groundwork for the Phase 2 redesign on the same theme",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiShopify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Shopify", description: "Storefront, checkout, draft orders and theme customisation through the theme editor and Admin API." },
      { icon: <SiPython className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Python", description: "Scripts for the catalog workbook and the product-page template rollout." },
      { icon: <SiGooglesearchconsole className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Search Console", description: "Site verification and search performance tracking." },
      { icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Merchant Center", description: "Product feed for Google Shopping listings." },
      { icon: <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Email Marketing", description: "Abandoned-checkout and campaign emails." },
      { icon: <SiTiktok className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TikTok, Instagram & YouTube", description: "Short-form video channels for discovery, trust and an evergreen library." },
      { icon: <SiCanva className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Canva & CapCut", description: "Social graphics and video editing." },
      { icon: <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "AI video tools", description: "AI-assisted generation for the weekly short-form video batch." },
    ]}
    useCases={[
      "Small e-commerce brands with traffic that isn't turning into orders",
      "Fixing product pages and checkout before spending more on ads",
      "Making a store readable by search engines and AI answer engines",
      "Opening a trade or bulk channel alongside direct-to-consumer sales",
      "Running short-form video for discovery on a small team's weekly schedule",
      "Giving a young brand one consistent voice and visual identity",
    ]}
    howToSteps={[
      <>Visit&nbsp;<a href="https://allurehive.store" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">allurehive.store</a>.</>,
      <>Browse by category: Storage Baskets, Rugs &amp; Runners, Plant Decor, Table &amp; Dining, Wall &amp; Decor, or Gifts &amp; Bags.</>,
      <>Open a product to see materials, sizing and care, then add it to your cart.</>,
      <>Buying for a business? Use <b>Business &amp; Bulk</b> in the menu to request trade pricing.</>,
      <>Check the <b>FAQ</b> for shipping, returns and materials questions.</>,
    ]}
    contactCTA={{
      title: "Growing an e-commerce brand?",
      description: "I work on catalog, conversion, SEO and content for online stores. Let's talk about yours.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default AllureHivePage;
