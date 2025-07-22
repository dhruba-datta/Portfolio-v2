import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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

const Certifications = ({ isDark = false }: CertificationsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive calculations
  const getResponsiveValues = () => {
    if (screenSize.width >= 1536) { // 2xl
      return { cardWidth: 280, cardHeight: 420, spacing: 320 };
    } else if (screenSize.width >= 1280) { // xl
      return { cardWidth: 260, cardHeight: 400, spacing: 300 };
    } else if (screenSize.width >= 1024) { // lg
      return { cardWidth: 240, cardHeight: 380, spacing: 280 };
    } else if (screenSize.width >= 768) { // md
      return { cardWidth: 220, cardHeight: 360, spacing: 260 };
    } else { // sm
      return { cardWidth: 200, cardHeight: 340, spacing: 240 };
    }
  };

  // Add credentialUrl to each item in the order you provided:
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
      issuer: "University System of Georgia",
      issueDate: "May 2022",
      credentialId: "JH92ELQKBMT5",
      logo: "georgia",
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

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [certifications.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + certifications.length) % certifications.length;
      cards.push({ cert: certifications[index], position: i, index });
    }
    return cards;
  };

  const getLogo = (logoName: string) => {
    const logoClass = "w-10 h-10 md:w-12 md:h-12";
    switch (logoName) {
      case 'ibm':
        return (
          <div className={`${logoClass} bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
            IBM
          </div>
        );
      case 'deeplearning':
        return (
          <div className={`${logoClass} bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
            DL.AI
          </div>
        );
      case 'google':
        return (
          <div className={`${logoClass} bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
            G
          </div>
        );
      case 'michigan':
        return (
          <div className={`${logoClass} bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
            UM
          </div>
        );
      case 'stanford':
        return (
          <div className={`${logoClass} bg-red-700 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
            SU
          </div>
        );
      case 'georgia':
        return (
          <div className={`${logoClass} bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
            USG
          </div>
        );
      case 'udemy':
        return (
          <div className={`${logoClass} bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
            U
          </div>
        );
      default:
        return (
          <div className={`${logoClass} bg-gray-500 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
            ?
          </div>
        );
    }
  };

  return (
    <section 
      id="certifications" 
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 max-w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className={`text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Licenses & Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}
          >
            Professional certifications and continuous learning achievements
          </motion.p>
        </motion.div>

        {/* Certification Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          {/* Carousel Container */}
          <div className="relative h-[380px] md:h-[410px] lg:h-[430px] xl:h-[450px] flex items-center justify-center overflow-hidden w-full">
            {/* Cards */}
            <AnimatePresence mode="wait">
              {getVisibleCards().map(({ cert, position, index }) => {
                const { cardWidth, cardHeight, spacing } = getResponsiveValues();
                const isCenter = position === 0;
                const isFirstLayer = Math.abs(position) === 1;
                const isSecondLayer = Math.abs(position) === 2;

                // Custom spacing for outer cards
                const getCustomSpacing = (pos: number) => {
                  if (Math.abs(pos) === 2) {
                    return pos * spacing * 0.9;
                  }
                  return pos * spacing;
                };

                // Center card: click opens URL in new tab
                if (isCenter) {
                  return (
                    <motion.a
                      key={`${cert.id}-${currentIndex}`}
                      initial={{
                        x: getCustomSpacing(position),
                        scale: 1,
                      }}
                      animate={{
                        x: getCustomSpacing(position),
                        scale: 1.02,
                        zIndex: 20,
                        opacity: 1,
                      }}
                      exit={{
                        x: getCustomSpacing(position),
                        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "tween"
                      }}
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: cardWidth,
                        height: cardHeight
                      }}
                      className={`absolute ${
                        isDark 
                          ? 'bg-gray-800/70 border-gray-700/50' 
                          : 'bg-white border-gray-200/60 shadow-xl'
                      } backdrop-blur-lg border rounded-2xl p-4 md:p-5 cursor-pointer group overflow-hidden`}
                      whileHover={{ scale: 1.06, transition: { duration: 0.2, ease: "easeOut" } }}
                      title="Click to view credential"
                    >
                      {/* Gradient Background Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Logo at Top */}
                        <div className="flex justify-center mb-2">
                          <div className="group-hover:scale-110 transition-transform duration-300">
                            {getLogo(cert.logo)}
                          </div>
                        </div>
                        
                        {/* Company Name after Logo */}
                        <div className="text-center mb-2">
                          <p className={`text-base md:text-lg font-bold ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {cert.issuer}
                          </p>
                        </div>
                        
                        {/* Course Name in Center */}
                        <div className="flex-1 flex items-center justify-center px-2">
                          <h4 className={`text-sm md:text-base lg:text-lg font-semibold leading-tight text-center ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {cert.title}
                          </h4>
                        </div>
                        
                        {/* Issue Date and ID at Bottom */}
                        <div className="space-y-2">
                          <div className="text-center">
                            <p className={`text-xs md:text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              Issued: {cert.issueDate}
                            </p>
                          </div>
                          
                          {/* ID Badge */}
                          <div className={`w-full py-1.5 px-3 rounded-lg text-center ${
                            isDark 
                              ? 'bg-gray-700/60 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            <p className="text-xs md:text-sm font-medium truncate">
                              ID: {cert.credentialId.slice(0, 12)}...
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                }
                // Side cards: click navigates
                return (
                  <motion.div
                    key={`${cert.id}-${currentIndex}-${index}`}
                    initial={{ 
                      x: getCustomSpacing(position),
                      scale: isFirstLayer ? 0.85 : 0.7,
                    }}
                    animate={{
                      x: getCustomSpacing(position),
                      scale: isFirstLayer ? 0.85 : 0.7,
                      zIndex: isFirstLayer ? 15 : 5,
                      opacity: isSecondLayer ? 0.7 : 1,
                    }}
                    exit={{ 
                      x: getCustomSpacing(position),
                      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                    transition={{ 
                      duration: 0.7, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "tween"
                    }}
                    style={{
                      width: cardWidth,
                      height: cardHeight
                    }}
                    className={`absolute ${
                      isDark 
                        ? 'bg-gray-800/70 border-gray-700/50' 
                        : 'bg-white border-gray-200/60 shadow-xl'
                    } backdrop-blur-lg border rounded-2xl p-4 md:p-5 cursor-pointer group overflow-hidden`}
                    onClick={() => goToSlide(index)}
                    whileHover={{ 
                      scale: isFirstLayer ? 0.88 : 0.73,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    {/* Gradient Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Logo at Top */}
                      <div className="flex justify-center mb-2">
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {getLogo(cert.logo)}
                        </div>
                      </div>
                      
                      {/* Company Name after Logo */}
                      <div className="text-center mb-2">
                        <p className={`text-base md:text-lg font-bold ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {cert.issuer}
                        </p>
                      </div>
                      
                      {/* Course Name in Center */}
                      <div className="flex-1 flex items-center justify-center px-2">
                        <h4 className={`text-sm md:text-base lg:text-lg font-semibold leading-tight text-center ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {cert.title}
                        </h4>
                      </div>
                      
                      {/* Issue Date and ID at Bottom */}
                      <div className="space-y-2">
                        <div className="text-center">
                          <p className={`text-xs md:text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            Issued: {cert.issueDate}
                          </p>
                        </div>
                        
                        {/* ID Badge */}
                        <div className={`w-full py-1.5 px-3 rounded-lg text-center ${
                          isDark 
                            ? 'bg-gray-700/60 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          <p className="text-xs md:text-sm font-medium truncate">
                            ID: {cert.credentialId.slice(0, 12)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full ${
              isDark 
                ? 'bg-gray-800/90 hover:bg-gray-700/90 text-white border-gray-600' 
                : 'bg-white/95 hover:bg-white text-gray-900 shadow-lg border-gray-200'
            } backdrop-blur-md border flex items-center justify-center transition-all duration-300 hover:scale-110 z-30`}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full ${
              isDark 
                ? 'bg-gray-800/90 hover:bg-gray-700/90 text-white border-gray-600' 
                : 'bg-white/95 hover:bg-white text-gray-900 shadow-lg border-gray-200'
            } backdrop-blur-md border flex items-center justify-center transition-all duration-300 hover:scale-110 z-30`}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
