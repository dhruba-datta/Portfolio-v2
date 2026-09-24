import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect, Suspense, lazy } from 'react';
import ErrorBoundary from './components/ui/ErrorBoundary';
import PageLoader from './components/ui/PageLoader';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const KfcClonePage = lazy(() => import('./pages/projects/KfcClonePage'));
const PortfolioV1Page = lazy(() => import('./pages/projects/PortfolioV1Page'));
const PortfolioV2Page = lazy(() => import('./pages/projects/PortfolioV2Page'));
const ABPharmacyAppPage = lazy(() => import('./pages/projects/ABPharmacyAppPage'));
const ABPharmacyPage = lazy(() => import('./pages/projects/ABPharmacyPage'));
const UpcellPage = lazy(() => import('./pages/projects/UpcellPage'));
const RydeBondhuPage = lazy(() => import('./pages/projects/RydeBondhuPage'));
const PhotoBoothPage = lazy(() => import('./pages/projects/PhotoBoothPage'));
const CryptoVersePage = lazy(() => import('./pages/projects/CryptoVersePage'));
const ContentIdeaGeneratorPage = lazy(() => import('./pages/projects/ContentIdeaGeneratorPage'));
const EasyCookingPage = lazy(() => import('./pages/projects/EasyCookingPage'));
const FoodOrderingSystemPage = lazy(() => import('./pages/projects/FoodOrderingSystemPage'));
const KingsleyGroupPage = lazy(() => import('./pages/projects/KingsleyGroupPage'));
const BrevoEmailMarketingPage = lazy(() => import('./pages/projects/BrevoEmailMarketingPage'));
const IntelligentProductOrderPage = lazy(() => import('./pages/projects/IntelligentProductOrder'));
const SocialEngagementGroupPage = lazy(() => import('./pages/projects/SocialEngagementGroupPage'));
const SEGMarketingPage = lazy(() => import('./pages/projects/SEGMarketingPage'));
const SEOAuditPage = lazy(() => import('./pages/projects/SEOAuditPage'));
const OperavoPage = lazy(() => import('./pages/projects/OperavoPage'));
const AquaPage = lazy(() => import('./pages/projects/AquaPage'));
const FlameHibachiPage = lazy(() => import('./pages/projects/FlameHibachiPage'));
const AllureHivePage = lazy(() => import('./pages/projects/AllureHivePage'));
const OptifyPage = lazy(() => import('./pages/projects/OptifyPage'));
const MantissaPage = lazy(() => import('./pages/projects/MantissaPage'));
const ColdEmailPipelinePage = lazy(() => import('./pages/projects/ColdEmailPipelinePage'));
const WebsiteLeadIntakePage = lazy(() => import('./pages/projects/WebsiteLeadIntakePage'));
const AIVoiceAgentPage = lazy(() => import('./pages/projects/AIVoiceAgentPage'));

// Preload critical routes have been moved to src/utils/routePreloads.ts

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function AppRoutes({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/about" element={<AboutPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<ProjectsPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/contact" element={<ContactPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/kfc-clone" element={<KfcClonePage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/portfolio-v2" element={<PortfolioV2Page isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/portfolio-v1" element={<PortfolioV1Page isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/content-idea-generator-n8n" element={<ContentIdeaGeneratorPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/ab-pharmacy-app" element={<ABPharmacyAppPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/ab-pharmacy" element={<ABPharmacyPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/upcell" element={<UpcellPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/rydebondhu" element={<RydeBondhuPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/photobooth" element={<PhotoBoothPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/cryptoverse" element={<CryptoVersePage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/kingsley-group" element={<KingsleyGroupPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/easycooking" element={<EasyCookingPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/food-ordering-system" element={<FoodOrderingSystemPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/brevo-email-marketing-n8n" element={<BrevoEmailMarketingPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/seo-audit-n8n" element={<SEOAuditPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/cold-email-pipeline-n8n" element={<ColdEmailPipelinePage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/website-lead-intake-n8n" element={<WebsiteLeadIntakePage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/ai-voice-agent-n8n" element={<AIVoiceAgentPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/intelligent-product-order-n8n" element={<IntelligentProductOrderPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/social-engagement-group" element={<SocialEngagementGroupPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/seg-marketing" element={<SEGMarketingPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/operavo" element={<OperavoPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/aqua-innovations" element={<AquaPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/flame-hibachi" element={<FlameHibachiPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/allurehive" element={<AllureHivePage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/optify" element={<OptifyPage isDark={isDark} toggleTheme={toggleTheme} />} />
  <Route path="/projects/mantissa-design" element={<MantissaPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="*" element={<NotFoundPage isDark={isDark} toggleTheme={toggleTheme} />} />
      </Routes>
    </Suspense>
  );
}

// Runs as a layout effect in the browser only (no-op during pre-rendering)
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Everything inside the router. Shared by the browser entry and the pre-renderer. */
export function AppShell() {
  // Dark by default. The pre-rendered HTML is always dark, so the first client
  // render must match it; a saved 'light' preference is applied before paint.
  const [isDark, setIsDark] = useState(true);

  useIsomorphicLayoutEffect(() => {
    if (localStorage.getItem('theme') === 'light') setIsDark(false);
  }, []);

  useEffect(() => {
    // Sync the class with the state
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newIsDark = !prev;
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      return newIsDark;
    });
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0a0f1c] transition-colors duration-300">
        <ScrollToTop />
        <AppRoutes isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
