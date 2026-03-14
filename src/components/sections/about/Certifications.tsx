import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// Fix NodeJS.Timeout type for browser/React usage
type Timeout = ReturnType<typeof setTimeout>;

interface CertificationsProps {
  isDark?: boolean;
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  logo: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Introduction to Cybersecurity Tools & Cyberattacks",
    issuer: "IBM",
    issueDate: "May 2024",
    credentialId: "PPMPJNJSPEKV",
    logo: "ibm",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/PPMPJNJSPEKV"
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    issueDate: "May 2024",
    credentialId: "836HFQZEE7JE",
    logo: "deeplearning",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/836HFQZEE7JE"
  },
  {
    id: 3,
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    issueDate: "Jan 2024",
    credentialId: "BYEP42DJ5XY5",
    logo: "google",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/BYEP42DJ5XY5"
  },
  {
    id: 4,
    title: "Building Web Applications in PHP",
    issuer: "University of Michigan",
    issueDate: "Dec 2022",
    credentialId: "ET5CGA5CSKY4",
    logo: "michigan",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/ET5CGA5CSKY4"
  },
  {
    id: 5,
    title: "Cryptography I",
    issuer: "Stanford University",
    issueDate: "Nov 2022",
    credentialId: "D782Z66RLR3D",
    logo: "stanford",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/D782Z66RLR3D"
  },
  {
    id: 6,
    title: "Crash Course on Python",
    issuer: "Google",
    issueDate: "May 2022",
    credentialId: "5DXEVT8C4BHR",
    logo: "google",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/5DXEVT8C4BHR"
  },
  {
    id: 7,
    title: "Cybersecurity and Its Ten Domains",
    issuer: "Kennesaw State University",
    issueDate: "May 2022",
    credentialId: "JH92ELQKBMT5",
    logo: "kennesaw",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/JH92ELQKBMT5"
  },
  {
    id: 8,
    title: "Learn C++ Programming -Beginner to Advance- Deep Dive in C++",
    issuer: "Udemy",
    issueDate: "Jan 2021",
    credentialId: "UC-c8b41149-7111-48e8-be81-41b0a0d5fb90",
    logo: "udemy",
    credentialUrl: "https://www.udemy.com/certificate/UC-c8b41149-7111-48e8-be81-41b0a0d5fb90/"
  }
];

const LEVELS = [-2, -1, 0, 1, 2];

function getResponsiveValues(width: number) {
  if (width >= 1536) return { cardWidth: 280, cardHeight: 420, spacing: 305 };
  if (width >= 1280) return { cardWidth: 260, cardHeight: 400, spacing: 270 };
  if (width >= 1024) return { cardWidth: 240, cardHeight: 380, spacing: 230 };
  if (width >= 768)  return { cardWidth: 220, cardHeight: 360, spacing: 180 };
  return { cardWidth: 230, cardHeight: 350, spacing: 145 };
}

const logoBox = (logo: string) => {
  const logoClass = "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl font-bold shadow-sm border border-white/10";
  switch (logo) {
    case "ibm": return <div className={`${logoClass} bg-blue-600 text-white text-sm md:text-base`}>IBM</div>;
    case "deeplearning": return <div className={`${logoClass} bg-gradient-to-br from-orange-500 to-red-500 text-white text-xs md:text-sm`}>DL.AI</div>;
    case "google": return <div className={`${logoClass} bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 text-white text-sm md:text-base`}>G</div>;
    case "michigan": return <div className={`${logoClass} bg-blue-800 text-white text-xs md:text-sm`}>UM</div>;
    case "stanford": return <div className={`${logoClass} bg-red-700 text-white text-xs md:text-sm`}>SU</div>;
    case "kennesaw": return <div className={`${logoClass} bg-yellow-700 text-white text-xs md:text-sm`}>KSU</div>;
    case "udemy": return <div className={`${logoClass} bg-purple-600 text-white text-sm md:text-base`}>U</div>;
    default: return <div className={`${logoClass} bg-gray-500 text-white text-sm md:text-base`}>?</div>
  }
};

const Certifications = ({ isDark = false }: CertificationsProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [screenW, setScreenW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const rotationRef = useRef<Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Minimum distance (in pixels) to be considered a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Snappier, more premium easing curve for the 3D coverflow effect
  const spring = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';

  const startAutoRotate = () => {
    if (rotationRef.current) clearInterval(rotationRef.current);
    rotationRef.current = setInterval(() => {
      setCurrentIdx(i => (i + 1) % certifications.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoRotate();
    return () => { if (rotationRef.current) clearInterval(rotationRef.current); };
  }, []);

  useEffect(() => {
    const handler = () => setScreenW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const goToIdx = (idx: number) => {
    setCurrentIdx(idx);
    startAutoRotate();
  };

  const nextSlide = () => goToIdx((currentIdx + 1) % certifications.length);
  const prevSlide = () => goToIdx((currentIdx - 1 + certifications.length) % certifications.length);

  const { cardWidth, cardHeight, spacing } = getResponsiveValues(screenW);

  // Improved smoothness for last two cards: extra scale/opacity/spacing refinement
  const getCardStyle = (level: number): React.CSSProperties => {
    const levelStr = String(level);

    // Smooth scale, opacity, rotation, and distance
    const scaleArr: Record<string, number> = {
      '0': 1,      '1': 0.85,  '-1': 0.85,
      '2': 0.72,   '-2': 0.72
    };
    const opacityArr: Record<string, number> = {
      '0': 1,      '1': 0.85,  '-1': 0.85,
      '2': 0.55,   '-2': 0.55
    };
    const rotateArr: Record<string, number> = {
      '0': 0,      '1': -25,   '-1': 25,
      '2': -35,    '-2': 35
    };
    const zArr: Record<string, number> = { '0': 20, '1': 15, '-1': 15, '2': 5, '-2': 5 };

    const scale = scaleArr[levelStr] ?? 0.7;
    const opacity = opacityArr[levelStr] ?? 0.7;
    const rotateY = rotateArr[levelStr] ?? 40;
    const zIndex = zArr[levelStr] ?? 3;

    // Pull angled cards slightly closer for a tighter 3D spread
    let translate = level * spacing;
    if (Math.abs(level) === 1) translate = level * spacing * 0.95;
    if (Math.abs(level) === 2) translate = level * spacing * 0.88;

    // Slight y-offset for side cards for perspective (folding effect)
    let top = "0px";
    if (Math.abs(level) === 1) top = "12px";
    if (Math.abs(level) === 2) top = "24px";

    return {
      left: `calc(50% + ${translate}px - ${cardWidth / 2}px)`,
      top,
      transform: `perspective(1200px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      position: "absolute",
      width: cardWidth,
      height: cardHeight,
      padding: '24px',
      transformStyle: 'preserve-3d',
      transition: spring,
      boxShadow:
        level === 0
          ? "0 25px 50px -12px rgba(0,0,0,0.5)"
          : "0 10px 15px -3px rgba(0,0,0,0.3)",
      cursor: level === 0 ? "pointer" : "grab",
      pointerEvents: (level < -2 || level > 2) ? "none" : "auto"
    };
  };

  const getVisibleCards = () =>
    LEVELS.map(level => {
      const idx = (currentIdx + level + certifications.length) % certifications.length;
      return { cert: certifications[idx], level, idx };
    });

  return (
    <section
      id="certifications"
      className="py-12 pb-24 md:py-20 relative transition-colors duration-300 bg-white dark:bg-gray-900 overflow-hidden"
      style={{ minHeight: cardHeight + 120 }}
    >
      <div className="container mx-auto px-6 max-w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-slate-500 dark:text-slate-400">
              Professional Development
            </h3>
            <h2 className="mt-2 sm:mt-3 text-slate-900 dark:text-white">
              Licenses & Certifications
            </h2>
            
          </motion.div>
        </div>
        {/* Carousel */}
        <div 
          className="relative mx-auto"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{height: cardHeight + 60, minHeight: cardHeight + 60, width: "100%"}}
        >
          {/* Navigation Buttons (Desktop) */}
          <button
            className={`hidden md:flex absolute bottom-[-60px] md:bottom-auto md:top-1/2 left-[20%] md:left-24 lg:left-32 md:transform md:-translate-y-1/2 w-12 h-12 items-center justify-center transition-all duration-300 z-30 group
              ${isDark ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-gray-900"}`}
            onClick={prevSlide}
            aria-label="Previous"
            style={{zIndex:40}}
          >
            <svg className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={`hidden md:flex absolute bottom-[-60px] md:bottom-auto md:top-1/2 right-[20%] md:right-24 lg:right-32 md:transform md:-translate-y-1/2 w-12 h-12 items-center justify-center transition-all duration-300 z-30 group
              ${isDark ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-gray-900"}`}
            onClick={nextSlide}
            aria-label="Next"
            style={{zIndex:40}}
          >
            <svg className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Controls (Mobile Arrows + Dots) */}
          <div className="absolute bottom-0 left-0 right-0 flex md:hidden items-center justify-center gap-8 z-40">
            <button
              type="button"
              onClick={prevSlide}
              className={`p-1.5 rounded-full outline-none ring-0 focus:outline-none focus-visible:outline-none hover:scale-110 transition-transform ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {certifications.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goToIdx(i)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === currentIdx
                      ? 'bg-blue-600 w-6'
                      : 'bg-slate-400 hover:bg-slate-500 dark:bg-slate-600 dark:hover:bg-slate-500 w-2'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === currentIdx}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className={`p-1.5 rounded-full outline-none ring-0 focus:outline-none focus-visible:outline-none hover:scale-110 transition-transform ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel cards */}
          <div className="relative h-full w-full mx-auto" style={{ minHeight: cardHeight + 10 }}>
            {getVisibleCards().map(({ cert, level, idx }) => (
              <div
                key={cert.id + '-' + idx}
                style={getCardStyle(level)}
                tabIndex={0}
                onClick={() => {
                  if (level === 0) {
                    window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    goToIdx(idx);
                  }
                }}
                className={`
                  group transition-all duration-700 ease-out select-none rounded-[2rem] overflow-hidden
                  border backdrop-blur-xl shadow-2xl
                  ${isDark ? 'border-white/20 bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-black/95' : 'bg-gradient-to-br from-white/95 to-slate-50/95 border-gray-200/80'}
                  ${level !== 0 && "hover:border-blue-500/50 cursor-pointer hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]"}
                  focus-override
                `}
                role="button"
                aria-label={level === 0 ? `View ${cert.title} credential` : `Go to ${cert.title} certification`}
                title={level === 0 ? "Click to view credential" : `Go to: ${cert.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                <div className="relative z-10 h-full flex flex-col p-2">
                  <div className="flex justify-center mb-2 -mt-4">
                    <div className="transition-transform duration-500 transform group-hover:-translate-y-1 group-hover:scale-105 shadow-md rounded-2xl">
                      {logoBox(cert.logo)}
                    </div>
                  </div>
                  <div className="text-center mb-1 px-2">
                    <h3 className={`text-sm md:text-base font-bold tracking-wide uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                      {cert.issuer}
                    </h3>
                  </div>
                  <div className="flex-1 flex items-center justify-center px-4 md:px-6">
                    <h4 className={`text-base md:text-lg lg:text-xl font-black leading-snug tracking-tight text-center ${isDark ? "!text-white" : "text-slate-900"}`}>
                      {cert.title}
                    </h4>
                  </div>
                  <div className="space-y-3 mt-4 mb-2">
                    <div className="flex items-center justify-center space-x-1">
                      <span className={`text-[11px] md:text-xs font-semibold tracking-wide uppercase
                        ${isDark ? "text-gray-500" : "text-gray-400"}`}>Issued:</span>
                      <p className={`text-[11px] md:text-xs font-medium tracking-wide uppercase
                        ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {cert.issueDate}
                      </p>
                    </div>
                    <div className={`
                      w-full py-1.5 px-3 rounded-xl text-center backdrop-blur-sm transition-colors duration-300
                      ${isDark ?
                        "bg-white/5 text-gray-300 border border-white/10 group-hover:bg-white/10" :
                        "bg-gray-100 text-gray-700 border border-gray-200 group-hover:bg-gray-200"}
                      `}>
                      <p className="text-[11px] md:text-xs font-mono tracking-wider truncate opacity-80">
                        ID: {cert.credentialId.slice(0, 10)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
