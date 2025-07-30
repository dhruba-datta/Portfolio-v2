import { useState, useEffect, useRef } from 'react';
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
  return { cardWidth: 200, cardHeight: 340, spacing: 137 };
}

const logoBox = (logo: string) => {
  const logoClass = "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg font-bold";
  switch (logo) {
    case "ibm": return <div className={`${logoClass} bg-blue-600 text-white text-sm`}>IBM</div>;
    case "deeplearning": return <div className={`${logoClass} bg-gradient-to-br from-orange-500 to-red-500 text-white text-xs`}>DL.AI</div>;
    case "google": return <div className={`${logoClass} bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 text-white text-sm`}>G</div>;
    case "michigan": return <div className={`${logoClass} bg-blue-800 text-white text-xs`}>UM</div>;
    case "stanford": return <div className={`${logoClass} bg-red-700 text-white text-xs`}>SU</div>;
    case "kennesaw": return <div className={`${logoClass} bg-yellow-700 text-white text-xs`}>KSU</div>;
    case "udemy": return <div className={`${logoClass} bg-purple-600 text-white text-sm`}>U</div>;
    default: return <div className={`${logoClass} bg-gray-500 text-white text-sm`}>?</div>
  }
};

const Certifications = ({ isDark = false }: CertificationsProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [screenW, setScreenW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const rotationRef = useRef<Timeout | null>(null);

  // Stabilized animation curve and more “springy” smoothness for all moves
  const spring = 'all 0.8s cubic-bezier(.25,.8,.25,1)';

  const startAutoRotate = () => {
    if (rotationRef.current) clearInterval(rotationRef.current);
    rotationRef.current = setInterval(() => {
      setCurrentIdx(i => (i + 1) % certifications.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoRotate();
    return () => { if (rotationRef.current) clearInterval(rotationRef.current); };
    // eslint-disable-next-line
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
    // More dramatic scale-out/fade-out for outermost cards (for less “abrupt” jump)
    const scaleArr: Record<string, number> = {
      '0': 1,      '1': 0.86,  '-1': 0.86,
      '2': 0.74,   '-2': 0.74
    };
    const opacityArr: Record<string, number> = {
      '0': 1,      '1': 0.88,  '-1': 0.88,
      '2': 0.66,   '-2': 0.66
    };
    const zArr: Record<string, number> = { '0': 20, '1': 13, '2': 5, '-1': 13, '-2': 5 };
    const scale = scaleArr[levelStr] ?? 0.7;
    const opacity = opacityArr[levelStr] ?? 0.7;
    const zIndex = zArr[levelStr] ?? 3;

    let translate = level * spacing;
    if (level === -2 || level === 2) translate = level * spacing * 0.93; // smoother, closer

    // Slight y-offset for side cards for perspective
    let top = "0px";
    if (Math.abs(level) === 1) top = "18px";
    if (Math.abs(level) === 2) top = "36px";

    return {
      left: `calc(50% + ${translate}px - ${cardWidth / 2}px)`,
      top,
      transform: `scale(${scale})`,
      opacity,
      zIndex,
      position: "absolute",
      width: cardWidth,
      height: cardHeight,
      padding: '24px',
      transition: spring,
      boxShadow:
        level === 0
          ? "0 20px 40px rgba(0,0,0,0.12)"
          : "0 8px 16px rgba(0,0,0,0.08)",
      cursor: level === 0 ? "pointer" : "grab",
      pointerEvents: (level < -2 || level > 2) ? "none" : "auto",
      background: "inherit"
    };
  };

  const getVisibleCards = () =>
    LEVELS.map(level => {
      let idx = (currentIdx + level + certifications.length) % certifications.length;
      return { cert: certifications[idx], level, idx };
    });

  return (
    <section
      id="certifications"
      className="py-20 relative transition-colors duration-300"
      style={{ minHeight: cardHeight + 120 }}
    >
      <div className="container mx-auto px-6 max-w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Licenses & Certifications
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Professional certifications and continuous learning achievements
          </p>
        </div>
        {/* Carousel */}
        <div className="relative mx-auto"
          style={{height: cardHeight + 60, minHeight: cardHeight + 60, width: "100%"}}>
          {/* Navigation Buttons */}
          <button
            className={`absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full
              ${isDark ?
                "bg-gray-800/90 hover:bg-gray-700/90 text-white border-gray-600"
                :
                "bg-white/95 hover:bg-white text-gray-900 shadow-lg border-gray-200"
              } border flex items-center justify-center transition-all duration-300 hover:scale-110 z-30`}
            onClick={prevSlide}
            aria-label="Previous"
            style={{zIndex:40}}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={`absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full
              ${isDark ?
                "bg-gray-800/90 hover:bg-gray-700/90 text-white border-gray-600"
                :
                "bg-white/95 hover:bg-white text-gray-900 shadow-lg border-gray-200"
              } border flex items-center justify-center transition-all duration-300 hover:scale-110 z-30`}
            onClick={nextSlide}
            aria-label="Next"
            style={{zIndex:40}}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

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
                  group transition-all duration-700 ease-out select-none rounded-2xl overflow-hidden
                  border
                  ${isDark ? 'border-gray-700/50 bg-gray-800/80' : 'bg-white border-gray-200/60'}
                  ${level !== 0 && "hover:ring-2 ring-blue-400 cursor-pointer"}
                `}
                title={level === 0 ? "Click to view credential" : `Go to: ${cert.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-center mb-2">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {logoBox(cert.logo)}
                    </div>
                  </div>
                  <div className="text-center mb-2">
                    <p className={`text-base md:text-lg font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex-1 flex items-center justify-center px-2">
                    <h4 className={`text-sm md:text-base lg:text-lg font-semibold leading-tight text-center
                      ${isDark ? "text-white" : "text-gray-900"}`}>
                      {cert.title}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <div className="text-center">
                      <p className={`text-xs md:text-sm
                        ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        Issued: {cert.issueDate}
                      </p>
                    </div>
                    <div className={`
                      w-full py-1.5 px-3 rounded-lg text-center
                      ${isDark ?
                        "bg-gray-700/60 text-gray-300" :
                        "bg-gray-100 text-gray-700"}
                      `}>
                      <p className="text-xs md:text-sm font-medium truncate">
                        ID: {cert.credentialId.slice(0, 12)}...
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
