import { Upload, Heart, User, Smartphone, Code, Eye } from "lucide-react";
import { SiReact, SiSanity, SiTailwindcss, SiGoogle, SiReactrouter, SiNetlify } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface PhotoBoothPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const PhotoBoothPage = ({ isDark, toggleTheme }: PhotoBoothPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="PhotoBooth"
    description="I built a photo-sharing gallery app in React with Sanity CMS as the backend. Users sign in with Google, post photos with a title, description, link and category, browse them in a masonry grid, search, save posts and leave comments. Authentication uses Google OAuth, and Sanity stores the users, posts, saves and comments, so there is no custom backend to run."
    coverSrc="/images/projects/photobooth.webp"
    chips={[
      { name: "React", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Sanity.io", icon: <SiSanity className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Google OAuth", icon: <SiGoogle className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React Router", icon: <SiReactrouter className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Netlify", icon: <SiNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/photoBooth"
    secondaryUrl="https://phootobooth.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      { id: "upload", icon: <Upload className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Image Uploads", summary: "Upload and manage photos in a gallery", details: ["Upload an image with a title, description, link and category", "Images stored in Sanity CMS with metadata", "Sanity's CDN for image delivery and optimization"] },
      { id: "gallery", icon: <Eye className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Masonry Gallery Grid", summary: "Browse photos in a responsive masonry layout", details: ["Pinterest-style responsive grid layout", "Images resize based on screen width", "Click to view full-size images"] },
      { id: "engagement", icon: <Heart className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Save, Download & Comment", summary: "Interact with other people's photos", details: ["Save posts to come back to later, with a save count on each", "Download the original image", "Comment on a post from its detail page"] },
      { id: "auth", icon: <User className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Google OAuth Login", summary: "Sign in with your Google account", details: ["One-click login with Google OAuth", "User profile pulled from Google account", "Persistent login across sessions"] },
      { id: "profile", icon: <Code className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Profiles, Categories & Search", summary: "Find photos by person, topic or keyword", details: ["Profile pages with each user's created and saved posts", "Browse by category from the sidebar", "Search across posts"] },
      { id: "responsive", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Responsive Design", summary: "Works on mobile, tablet, and desktop", details: ["Mobile-first responsive layout", "Touch-friendly interactions on mobile", "Full features on all screen sizes"] },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React", description: "Component framework for building the UI." },
      { icon: <SiSanity className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Sanity.io", description: "Headless CMS for users, posts, saves and comments." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first CSS for responsive design and styling." },
      { icon: <SiGoogle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google OAuth", description: "Authentication for one-click login with Google accounts." },
      { icon: <SiReactrouter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Router", description: "Client-side routing for gallery and profile pages." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Hosting with continuous deployment." },
    ]}
    useCases={[
      "Learning how to build a photo sharing app with React and Sanity",
      "Understanding headless CMS architecture for managing users and content",
      "Building a social photo platform with saves, comments and categories",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/photoBooth</code></>,
      <>Install deps:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Configure environment:&nbsp;Set Sanity project vars and Google OAuth credentials in your <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">.env</code>.</>,
      <>Start dev server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Build &amp; deploy (Netlify):&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code>&nbsp;then connect repo on Netlify for CI/CD.</>,
    ]}
    contactCTA={{
      title: "Building a social gallery or portfolio site?",
      description: "I build photo-sharing platforms with React, Sanity CMS for content management, and social features like saves and comments.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default PhotoBoothPage;
