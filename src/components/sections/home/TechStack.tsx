import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdOutlineWork } from "react-icons/md";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiCanva,
  SiOpenai,
  SiGooglegemini,
  SiClaude,
  SiPython,
  SiPytorch,
  SiHuggingface,
  SiElevenlabs,
  SiTwilio,
  SiJupyter,
  SiOverleaf,
  SiN8N,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiStripe,
  SiDocker,
  SiGit,
  SiVercel,
  SiNetlify,
  SiCloudflare,
  SiNotion,
  SiJira,
  SiConfluence,
  SiShopify,
  SiGooglesearchconsole,
  SiWordpress,
  SiFigma,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { projects } from '../../../data/projects';
import CountUp from '../../ui/CountUp';

interface TechStackProps { isDark?: boolean }
/** icon is optional: items without a brand icon render as a plain text chip. */
interface TechItem { name: string; icon?: string | React.ReactNode; color?: string }

// Moved outside to prevent re-mounting on every render
const TechScroll = ({
  technologies,
  direction = 'left',
  isDark
}: { technologies: TechItem[]; direction?: 'left' | 'right'; isDark?: boolean }) => {
  // Two copies are enough for a seamless loop (animate to -50%); a third only bloated the HTML
  const looped = useMemo(() => [...technologies, ...technologies], [technologies]);
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex items-center will-change-transform"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 37.5, repeat: Infinity, ease: 'linear' }}
        style={{ transform: 'translateZ(0)' }}
      >
        {looped.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            className={`flex items-center gap-1.5 sm:gap-2 ${isDark ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white/90 border-gray-200'} rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border flex-shrink-0 shadow-sm mx-1.5 sm:mx-2`}
            whileHover={{ scale: 1.05 }}
          >
            {typeof t.icon === 'string' ? (
              <img src={t.icon} alt="" aria-hidden className="w-4 sm:w-5 h-4 sm:h-5" />
            ) : (
              t.icon
            )}
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>{t.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Icons for cards
const AcademicIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
  </svg>
);

const BriefcaseIcon = () => (
  <MdOutlineWork className="w-5 h-5" />
);

const TechStack = ({ isDark }: TechStackProps) => {
  // Memoize data to ensure referential stability
  const ic = 'w-4 sm:w-5 h-4 sm:h-5';
  const mono = isDark ? 'text-white' : 'text-black';

  // Row 1 — AI & Research
  const aiResearchTech: TechItem[] = useMemo(() => [
    { name: 'Python', icon: <SiPython className={`${ic} text-[#3776AB]`} /> },
    { name: 'PyTorch', icon: <SiPytorch className={`${ic} text-[#EE4C2C]`} /> },
    { name: 'Hugging Face', icon: <SiHuggingface className={`${ic} text-[#FFD21E]`} /> },
    { name: 'OpenAI', icon: <SiOpenai className={`${ic} ${isDark ? 'text-white' : 'text-[#74aa9c]'}`} /> },
    { name: 'Claude', icon: <SiClaude className={`${ic} text-[#D97757]`} /> },
    { name: 'Gemini', icon: <SiGooglegemini className={`${ic} ${isDark ? 'text-white' : 'text-[#8E75B2]'}`} /> },
    { name: 'Vapi' },
    { name: 'ElevenLabs', icon: <SiElevenlabs className={`${ic} ${mono}`} /> },
    { name: 'Twilio', icon: <SiTwilio className={`${ic} text-[#F22F46]`} /> },
    { name: 'n8n', icon: <SiN8N className={`${ic} text-[#FF6C37]`} /> },
    { name: 'Jupyter', icon: <SiJupyter className={`${ic} text-[#F37626]`} /> },
    { name: 'Overleaf', icon: <SiOverleaf className={`${ic} text-[#47A141]`} /> },
  ], [ic, isDark, mono]);

  // Row 2 — Engineering
  const engineeringTech: TechItem[] = useMemo(() => [
    { name: 'TypeScript', icon: <SiTypescript className={`${ic} text-[#3178C6]`} /> },
    { name: 'React', icon: <SiReact className={`${ic} text-[#61DAFB]`} /> },
    { name: 'Next.js', icon: <SiNextdotjs className={`${ic} ${mono}`} /> },
    { name: 'Node.js', icon: <SiNodedotjs className={`${ic} text-[#339933]`} /> },
    { name: 'NestJS', icon: <SiNestjs className={`${ic} text-[#E0234E]`} /> },
    { name: 'Prisma', icon: <SiPrisma className={`${ic} ${isDark ? 'text-white' : 'text-[#2D3748]'}`} /> },
    { name: 'Supabase', icon: <SiSupabase className={`${ic} text-[#3FCF8E]`} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className={`${ic} text-[#4169E1]`} /> },
    { name: 'MongoDB', icon: <SiMongodb className={`${ic} text-[#47A248]`} /> },
    { name: 'Stripe', icon: <SiStripe className={`${ic} text-[#635BFF]`} /> },
    { name: 'Docker', icon: <SiDocker className={`${ic} text-[#2496ED]`} /> },
    { name: 'Linux', icon: <FcLinux className={ic} /> },
    { name: 'Git', icon: <SiGit className={`${ic} text-[#F05032]`} /> },
    { name: 'Vercel', icon: <SiVercel className={`${ic} ${mono}`} /> },
    { name: 'Netlify', icon: <SiNetlify className={`${ic} text-[#00C8C8]`} /> },
    { name: 'Cloudflare', icon: <SiCloudflare className={`${ic} text-[#F38020]`} /> },
  ], [ic, isDark, mono]);

  // Row 3 — Product, Growth & Design
  const productDesignTech: TechItem[] = useMemo(() => [
    { name: 'Notion', icon: <SiNotion className={`${ic} ${mono}`} /> },
    { name: 'Jira', icon: <SiJira className={`${ic} text-[#0052CC]`} /> },
    { name: 'Confluence', icon: <SiConfluence className={`${ic} ${isDark ? 'text-[#2684FF]' : 'text-[#172B4D]'}`} /> },
    { name: 'Shopify', icon: <SiShopify className={`${ic} text-[#7AB55C]`} /> },
    { name: 'Google Search Console', icon: <SiGooglesearchconsole className={`${ic} text-[#458CF5]`} /> },
    { name: 'Looker Studio' },
    { name: 'WordPress', icon: <SiWordpress className={`${ic} text-[#21759B]`} /> },
    { name: 'Figma', icon: <SiFigma className={`${ic} text-[#F24E1E]`} /> },
    { name: 'Canva', icon: <SiCanva className={`${ic} text-[#00C4CC]`} /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className={`${ic} text-[#31A8FF]`} /> },
    { name: 'Lightroom', icon: <SiAdobelightroom className={`${ic} text-[#31A8FF]`} /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator className={`${ic} text-[#FF9A00]`} /> },
  ], [ic, isDark, mono]);

  // Key Highlights. The final value is in the initial markup (for crawlers,
  // screen readers and no-JS readers); CountUp animates from 0 on the client.
  const automationCount = projects.filter(p => p.category === 'automation').length;
  const papers: number = 1;
  const countries: number = 2;
  const scholarUrl = 'https://scholar.google.co.uk/citations?user=RGxdIVkAAAAJ';
  const highlights: Array<{
    value: number;
    suffix?: string;
    separator?: string;
    duration: number;
    delay: number;
    label: string;
    ariaLabel: string;
    href: string;
    internal?: boolean;
    mobile?: boolean;
  }> = [
    { value: papers, duration: 1.5, delay: 0.2, label: papers === 1 ? 'Paper Published' : 'Papers Published', ariaLabel: `${papers} ${papers === 1 ? 'paper' : 'papers'} published`, href: scholarUrl, mobile: true },
    { value: automationCount, suffix: '+', duration: 1.5, delay: 0.2, label: 'Total Automation', ariaLabel: `${automationCount}+ automation projects`, href: '/projects?tab=automation', internal: true, mobile: true },
    { value: projects.length, suffix: '+', duration: 1.5, delay: 0.2, label: 'Total Projects', ariaLabel: `${projects.length}+ total projects`, href: '/projects', internal: true, mobile: true },
    { value: 500, suffix: '+', separator: ',', duration: 0.5, delay: 0.2, label: 'Solved Leetcode', ariaLabel: '500+ LeetCode problems solved', href: 'https://leetcode.com/u/dhruba-datta/' },
    { value: countries, duration: 1.2, delay: 1, label: countries === 1 ? 'Country Visited' : 'Countries Visited', ariaLabel: `${countries} ${countries === 1 ? 'country' : 'countries'} visited`, href: 'https://www.instagram.com/dhrubz_/' },
  ];

  // helper colors
  const cardBase = 'rounded-3xl overflow-hidden border border-blue-200/60 dark:border-white/[0.08] bg-blue-50/30 dark:bg-slate-950/90 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500 hover:border-blue-300/50 dark:hover:border-sky-400/20';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderSoft = isDark ? 'border-white/10' : 'border-blue-200/50';
  const statBg = isDark ? 'bg-white/[0.03]' : 'bg-blue-50/40';

  // --- Reusable identical feature card (used for Card 1 and Card 4) ---
  const FeatureCard = ({
    to,
    badge,
    title,
    description,
    icon,
    cta = 'Explore'
  }: {
    to: string;
    badge: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    cta?: string;
  }) => (
    <Link to={to} className="block group focus-override" aria-label={`View ${title}`}>
      <div className={`${cardBase} p-6 sm:p-8 h-full flex flex-col relative min-h-[220px] sm:min-h-[240px]`}>
        {/* Top Slot - Fixed Height */}
        <div className="h-6 flex items-center gap-2">
          <div className={`w-[2px] h-3 ${isDark ? 'bg-slate-500' : 'bg-blue-500'} flex-shrink-0`} aria-hidden="true" />
          <span className={`text-[10px] sm:text-[11px] font-outfit uppercase tracking-[0.14em] ${textMuted}`}>{badge}</span>
        </div>

        {/* Middle Slot - Perfectly Centered (shifted up slightly) */}
        <div className="flex-1 flex flex-col justify-center py-4 -translate-y-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-500">{icon}</span>
            <h5 className="font-semibold">{title}</h5>
          </div>
          <p className="mt-2 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>

        {/* Bottom Slot - Same Fixed Height as Top */}
        <div className="h-6 flex items-center justify-between">
          <span className="text-sm sm:text-base font-outfit font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {cta}
          </span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );

  return (
    <section className={`py-12 sm:py-14 lg:py-16 ${isDark ? 'text-white' : 'text-gray-900'} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div>
            <p className={`eyebrow ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Tech Stack & Status
            </p>
            <h2 className={`mt-2 sm:mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Profile Overview
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 h-auto lg:h-[600px]">
          {/* Card 1 (Academic) — identical style */}
          <FeatureCard
            to="/about"
            badge="FOR ACADEMICS"
            title=" Academic excellence"
            description="Scholarships, publications and research interests view my academic profile."
            icon={<AcademicIcon />}
            cta="View profile"
          />

          {/* Card 2 (Tech Stack) */}
          <div className={`lg:col-span-2 ${cardBase} p-6 sm:p-8 flex flex-col justify-center`}>
            <div className="-translate-y-2">
              <div className="mb-4 sm:mb-5 lg:mb-8">
                <h5 className="mb-1">
                  My <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Toolbox</span>
                </h5>
              </div>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <TechScroll technologies={aiResearchTech} direction="right" isDark={isDark} />
                <TechScroll technologies={engineeringTech} direction="left" isDark={isDark} />
                <TechScroll technologies={productDesignTech} direction="right" isDark={isDark} />
              </div>
            </div>
          </div>

          {/* Card 3: Key Highlights — unchanged */}
          <div className={`lg:col-span-2 ${cardBase} p-4 sm:p-5 lg:p-8`}>
            <div className="mb-4 sm:mb-5 lg:mb-8">
              <h5 className="mb-1">
                Key <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Highlights</span>
              </h5>
            </div>

            {/* Mobile: first 3 highlights in one row. Desktop: all 5. */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
              {highlights.map((h) => {
                const tile = (
                  <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                    <div className="flex-1">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none" aria-hidden="true">
                        <CountUp from={0} to={h.value} duration={h.duration} delay={h.delay} separator={h.separator} />{h.suffix}
                      </div>
                    </div>
                    <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto" aria-hidden="true">{h.label}</div>
                  </div>
                );
                const cls = `${h.mobile ? 'block' : 'hidden sm:block'} group focus-override`;
                return h.internal ? (
                  <Link key={h.label} to={h.href} className={cls} aria-label={h.ariaLabel}>{tile}</Link>
                ) : (
                  <a key={h.label} href={h.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={h.ariaLabel}>{tile}</a>
                );
              })}
            </div>
          </div>

          {/* Card 4 (Recruiter) — identical style */}
          <FeatureCard
            to="/projects"
            badge="FOR RECRUITERS"
            title=" Project showcase"
            description="Explore shipped work, case studies, and live demos tailored for hiring."
            icon={<BriefcaseIcon />}
            cta="View recent works"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
