export const preloadAbout = () => {
  // Preload component
  const componentPromise = import('../pages/AboutPage');
  // Preload critical images
  ['/images/me1.webp', '/images/me2.webp', '/images/me.webp'].forEach(src => {
    const img = new Image();
    img.src = src;
  });
  return componentPromise;
};

export const preloadProjects = () => import('../pages/ProjectsPage');
