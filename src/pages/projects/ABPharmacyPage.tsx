import {
  Store,
  UserCheck,
  Package,
  Truck,
  Users,
  ShieldCheck,
  Layers,
  ClipboardList,
  Database,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiFirebase,
} from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface ABPharmacyPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ABPharmacyPage = ({ isDark, toggleTheme }: ABPharmacyPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="AB Pharmacy"
    description="AB Pharmacy is a wholesale medicine supplier in Bangladesh. Pharmacies used to order by phone and WhatsApp, and stock, packing and deliveries were tracked by hand. I led the build of the platform that now runs the business at abpharmacy.bd. Approved pharmacies use the storefront to browse the catalogue, order, track deliveries and file returns. Staff use the admin system for inventory with batch and expiry tracking, purchases, wholesale orders, packaging, deliveries, payments and customer accounts. It grew out of an order-management tool I built in 2025 and now runs as a Next.js frontend on a NestJS API, built with a team of three. The work also covered deployment, a code audit and end-to-end QA."
    coverSrc="/images/projects/AB Pharmacy.webp"
    chips={[
      { name: "Next.js 16", icon: <SiNextdotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "NestJS 11", icon: <SiNestjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Prisma", icon: <SiPrisma className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    secondaryUrl="https://abpharmacy.bd/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "storefront",
        icon: <Store className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Wholesale Storefront",
        summary: "An installable web app where pharmacies order from the full catalogue",
        details: [
          "Catalogue with product pages, a shop view and prices in taka (৳)",
          "Cart, checkout, order history and order tracking",
          "Returns, notifications and account status in the customer's own dashboard",
          "Installs to the home screen as a PWA, for pharmacy staff ordering from a phone",
        ],
      },
      {
        id: "accounts",
        icon: <UserCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Approved Wholesale Accounts",
        summary: "Only verified pharmacies can see prices and place orders",
        details: [
          "Pharmacies register, then staff approve, reject, pause or resume the account",
          "Guests, pending, paused and approved customers each see a different version of the site",
          "Profile changes wait for staff review before they take effect",
        ],
      },
      {
        id: "inventory",
        icon: <Package className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Inventory With Batches and Expiry",
        summary: "Stock is tracked batch by batch, so nothing ships too close to its expiry date",
        details: [
          "Products, price batches and stock batches, with a minimum shelf-life check before sale",
          "Purchases from pharmaceutical companies, with purchase payments and history",
          "Stock movements and manual adjustments, each recorded",
        ],
      },
      {
        id: "fulfilment",
        icon: <Truck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Orders, Packaging and Delivery",
        summary: "The whole path from order to doorstep, in one system",
        details: [
          "Wholesale orders placed online by customers or entered by staff",
          "Packaging batches that group the day's orders by customer for the packing team",
          "Deliveries assigned to delivery staff, with delivery history",
          "Invoices, order payments, cash settlement and returns",
        ],
      },
      {
        id: "crm",
        icon: <Users className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Customer and Supplier Records",
        summary: "Everyone the business deals with, in one place",
        details: [
          "Customers, pharmaceutical companies, medical representatives, markets and delivery staff",
          "A summary page for each, with its orders and activity",
          "Announcements to customers, and reports for management",
        ],
      },
      {
        id: "security",
        icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Security and Accountability",
        summary: "Audited and hardened before launch",
        details: [
          "A code audit of the first version found authentication weaknesses, and they were fixed before launch",
          "Hashed passwords, token-based sessions and rate limiting on the API",
          "Admin and super-admin roles, and an audit log of staff actions",
        ],
      },
      {
        id: "architecture",
        icon: <Layers className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Split Into a Frontend and an API",
        summary: "Rebuilt from a single Next.js app into two independent services",
        details: [
          "The frontend is a pure UI client and holds no database access at all",
          "The NestJS API owns the data: 37 data models across inventory, wholesale, customers and admin",
          "The user's session is passed to the API server-side, so tokens never reach the browser",
          "The UI and API can be deployed and scaled separately",
        ],
      },
      {
        id: "ordering",
        icon: <ClipboardList className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Where It Started: the Order Manager",
        summary: "The 2025 tool that took ordering off WhatsApp and paper",
        details: [
          "A React and Firebase app for incoming orders, sorted into pending, regular and urgent",
          "Inventory, sales history and contacts for companies and medical representatives",
          "Order lists exported to PDF for suppliers",
          "Its workflows became the basis of the current platform",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiNextdotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Next.js 16 + React 19", description: "Storefront and admin panel, installable as a PWA." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4 + shadcn/ui", description: "Accessible Radix-based components for about 60 screens." },
      { icon: <SiNestjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "NestJS 11", description: "REST API for inventory, wholesale, customers, storefront and admin." },
      { icon: <SiPrisma className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Prisma", description: "Typed data layer over 37 models." },
      { icon: <SiPostgresql className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "PostgreSQL", description: "Production database on Supabase." },
      { icon: <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "NextAuth, Zod, Zustand", description: "Sessions, validated forms and client state." },
      { icon: <SiVercel className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vercel", description: "Hosting for the frontend and the API." },
      { icon: <SiFirebase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Firebase", description: "Data layer for the original order manager." },
    ]}
    useCases={[
      "Wholesale distributors moving customers off phone and WhatsApp ordering",
      "Businesses that need batch and expiry tracking, not just stock counts",
      "Teams running packing and delivery from the same system as sales",
    ]}
    howToSectionTitle="How It Works"
    howToSteps={[
      "A pharmacy registers and is approved by AB Pharmacy staff.",
      "It browses the catalogue and places an order from the storefront.",
      "Staff check stock by batch and expiry, then pack the order in the day's packaging batch.",
      "The order is assigned to a delivery person and invoiced, and payment is recorded.",
      "The pharmacy tracks the order, and can file a return, from its own dashboard.",
    ]}
    contactCTA={{
      title: "Running a business on phone calls and spreadsheets?",
      description: "I build ordering and operations platforms that replace manual work with one system your customers and staff both use.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default ABPharmacyPage;
