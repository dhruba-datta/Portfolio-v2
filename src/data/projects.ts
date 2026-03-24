import React from 'react';

import type { Project } from '../types';
import {
  Code2,
  Github,
  Smartphone,
  Languages,
  Code,
  Database,
  Search,
  User,
  Palette,
  LineChart,
  Globe2,
  Webhook,
  FileJson,
  Terminal,
  Settings,
  ShoppingCart,
  FileText,
  BookOpen,
  ListTodo,
} from 'lucide-react';
import { 
  SiN8N, 
  SiReact, 
  SiExpo, 
  SiJavascript, 
  SiGooglesheets,
  SiOpenai,
  SiTrello,
  SiLinkedin,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiPhp,
  SiMysql,
  SiBrevo,
  SiWebflow,
  SiGmail,
  SiGooglechat
} from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoNetlify, BiLogoTypescript } from 'react-icons/bi';
import { GrStorage } from 'react-icons/gr';

export const projects: Project[] = [
  {
  id: 'brevo-email-marketing-n8n',
    title: 'Brevo Email Marketing (n8n)',
    description:
      'Marketing teams waste hours manually managing email lists and coordinating campaigns across multiple platforms, leading to missed opportunities and inconsistent messaging. This automated email orchestration system eliminates that bottleneck entirely by intelligently syncing data between Google Sheets, Webflow CMS, and Brevo\'s API - transforming hours of manual list management into instant, event-driven communication that ensures every subscriber receives perfectly timed, personalized messages without any human intervention.',
    longDescription:
      'Email marketing automation workflow with Google Sheets/Webflow CMS integration, Brevo email delivery, and engagement tracking.',
    image: '/images/projects/Brevo Email Marketing (n8n).webp',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "Brevo", icon: React.createElement(SiBrevo, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Webflow", icon: React.createElement(SiWebflow, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
      { name: "Workflow JSON", icon: React.createElement(FileJson, { className: "w-3.5 h-3.5" }) },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Brevo%20Email%20Marketing',
    featured: true,
    category: 'automation',
  },
  {
    id: 'seo-audit-n8n',
    title: 'SEO Audit (n8n)',
    description:
      'Agencies struggle to demonstrate immediate value to prospective clients during initial outreach, often losing leads before the first meeting. This automated SEO audit engine solves that by instantly analyzing any website\'s performance, generating AI-powered professional reports, and delivering them directly to clients - transforming cold prospects into engaged leads through immediate, tangible value without any manual analysis work.',
    longDescription:
      'Automated SEO analysis workflow with Google PageSpeed Insights integration, AI-powered audit generation (GPT-4), and automated Gmail reporting.',
    image: '/images/projects/SEO Audit (n8n).webp',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "OpenAI", icon: React.createElement(SiOpenai, { className: "w-3.5 h-3.5" }) },
      { name: "PageSpeed", icon: React.createElement(Search, { className: "w-3.5 h-3.5" }) },
      { name: "Gmail", icon: React.createElement(SiGmail, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
    ],
    link: '/projects/seo-audit-n8n',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/SEO%20Audit',
    featured: true,
    category: 'automation',
  },
  {
    id: 'content-idea-generator-n8n',
    title: 'Content Idea Generator (n8n)',
    description:
      'Content teams waste hours brainstorming variations, writing hooks, and manually organizing ideas across disconnected tools. This AI-powered content generation engine eliminates that bottleneck by automatically transforming raw topics into fully structured content plans - complete with hooks, captions, and CTAs - and organizing them directly into Trello boards, transforming days of creative work into minutes of automated ideation.',
    longDescription:
      'Automated content creation workflow with Google Sheets integration, AI content generation, and Trello management.',
    image: '/images/projects/Content Idea Generator (n8n).webp',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "OpenAI", icon: React.createElement(SiOpenai, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Trello", icon: React.createElement(SiTrello, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
      { name: "Workflow JSON", icon: React.createElement(FileJson, { className: "w-3.5 h-3.5" }) },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation',
    featured: true,
    category: 'automation',
  },
  {
    id: 'social-engagement-group',
    title: 'Social Engagement Group',
    description:
      'Growing agencies lose credibility when their own website feels slow, outdated, or generic - the very problems they promise to solve for clients. This high-performance agency platform eliminates that contradiction by delivering lightning-fast loads, cinematic animations, and AI-optimized indexing that positions the agency as an undeniable leader in modern digital experiences, turning the website itself into the most powerful sales tool.',
    longDescription:
      'The official Social Engagement Group (SEG) website is a state-of-the-art agency platform. Engineered for maximum speed and SEO, it utilizes Next.js 15\'s App Router, Framer Motion 12 for complex animations, and Lenis for cinematic smooth scrolling. The site is optimized for AI agents with specialized indexing and features a comprehensive design system for brand consistency across 24+ routes.',
    image: '/images/projects/Social Engagement Group.webp',
    tags: [
      { name: "Next.js 15", icon: React.createElement(SiVite, { className: "w-3.5 h-3.5" }) },
      { name: "React 19", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Tailwind CSS 4", icon: React.createElement(SiTailwindcss, { className: "w-3.5 h-3.5" }) },
      { name: "Framer Motion", icon: React.createElement(SiFramer, { className: "w-3.5 h-3.5" }) },
      { name: "SEO Optimization", icon: React.createElement(Search, { className: "w-3.5 h-3.5" }) },
    ],
    link: '/projects/social-engagement-group',
    github: 'https://github.com/SocialEngagementGroup/website',
    featured: true,
    category: 'development',
  },
  {
    id: 'seg-marketing',
    title: 'SEG Marketing',
    description:
      'Marketing agencies lose qualified leads every day because generic landing pages fail to speak directly to each industry\'s unique pain points. This specialized lead generation platform solves that by delivering tailored conversion experiences for Legal, Healthcare, and Restaurant clients - each with strategic UX patterns and automated n8n workflows that ensure zero lead loss between form submission and CRM, transforming scattered prospects into organized pipeline opportunities.',
    longDescription:
      'SEG Marketing is a performance-driven multipage application built with React 19 and Vite. It serves as a specialized lead generation engine, featuring industry-specific landing pages (Legal, Healthcare, Restaurants) with unique UX patterns. The platform is deeply integrated with n8n automation workflows to bridge unstructured form data directly into CRM systems, ensuring 99.9% lead capture reliability.',
    image: '/images/projects/SEG Marketing.webp',
    tags: [
      { name: "React 19", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Vite", icon: React.createElement(SiVite, { className: "w-3.5 h-3.5" }) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-3.5 h-3.5" }) },
      { name: "n8n Automation", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "Lead Generation", icon: React.createElement(LineChart, { className: "w-3.5 h-3.5" }) },
    ],
    link: '/projects/seg-marketing',
    github: 'https://github.com/SocialEngagementGroup/marketing',
    featured: true,
    category: 'development',
  },

  {
  id: 'photobooth',
    title: 'PhotoBooth',
    description:
      'Photographers and creatives struggle to showcase their work on platforms that compress images, lack proper organization, or force intrusive ads. This professional photo-sharing platform solves that by delivering Pinterest-quality masonry layouts with full-resolution uploads, social engagement features, and secure authentication - transforming scattered photo libraries into beautifully organized galleries that let the work shine without platform interference or quality loss.',
    longDescription:
      'Full-stack social photo app with Google login, drag-and-drop uploads, comments, likes, and pin-style masonry layout.',
    image: '/images/projects/photobooth.webp',
    tags: [
      { name: "React", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Sanity CMS", icon: React.createElement(Database, { className: "w-3.5 h-3.5" }) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-3.5 h-3.5" }) },
      { name: "Google OAuth", icon: React.createElement(User, { className: "w-3.5 h-3.5" }) },
      { name: "JavaScript ES6+", icon: React.createElement(SiJavascript, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://phootobooth.netlify.app/',
    github: 'https://github.com/dhruba-datta/photoBooth',
    featured: true,
    category: 'development',
  },
  {
    id: 'ab-pharmacy-expo',
    title: 'AB Pharmacy Expo',
    description:
      'Trade show attendees waste hours navigating crowded halls with paper maps, missing sessions, and losing track of exhibitors they wanted to visit. This comprehensive digital trade show companion eliminates that chaos by delivering real-time schedules, interactive exhibitor directories, and product catalogs directly to attendees\' phones - transforming overwhelming event logistics into seamless, personalized experiences that work even offline in crowded convention centers.',
    longDescription:
      'Cross-platform React Native Expo app for pharmacy trade shows with live scheduling, exhibitor directory, product catalog, offline capabilities, and instant search.',
    image: '/images/projects/AB Pharmacy Expo.webp',
    tags: [
      { name: "React Native", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Expo", icon: React.createElement(SiExpo, { className: "w-3.5 h-3.5" }) },
      { name: "JavaScript ES6+", icon: React.createElement(SiJavascript, { className: "w-3.5 h-3.5" }) },
      { name: "React Navigation", icon: React.createElement(Code, { className: "w-3.5 h-3.5" }) },
      { name: "AsyncStorage", icon: React.createElement(GrStorage, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'http://surl.li/lkiufr',
    github: 'https://github.com/dhruba-datta/AB-Pharmacy-Expo',
    featured: true,
    category: 'app',
  },
  {
    id: 'form-verification-n8n',
    title: 'Form Verification (n8n)',
    description:
      'Sales teams drown in low-quality form submissions, wasting hours sorting spam from real leads while high-intent prospects slip through the cracks. This intelligent lead triage system eliminates that chaos by using AI to instantly classify submissions, verify email validity, and route qualified leads to the right team members - transforming messy inbox noise into clean, actionable sales opportunities within seconds of form submission.',
    longDescription:
      'High-performance lead triage automation with AI classification (GPT-Pro), NeverBounce email verification, and multi-channel team notifications.',
    image: '/images/projects/Form Verification (n8n).webp',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "OpenAI", icon: React.createElement(SiOpenai, { className: "w-3.5 h-3.5" }) },
      { name: "NeverBounce", icon: React.createElement(FileJson, { className: "w-3.5 h-3.5" }) },
      { name: "Google Chat", icon: React.createElement(SiGooglechat, { className: "w-3.5 h-3.5" }) },
      { name: "Gmail", icon: React.createElement(SiGmail, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
    ],
    link: '/projects/form-verification-n8n',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Form%20Verification',
    featured: true,
    category: 'automation',
  },
  {
    id: 'intelligent-product-order-n8n',
    title: 'Intelligent Product Order (n8n)',
    description:
      'E-commerce teams drown in email orders, manually copying product details into spreadsheets and task managers while risking costly errors. This AI-powered order automation system eliminates that bottleneck by using GPT to extract order details from emails, verify inventory availability, and automatically create Monday.com tasks - transforming chaotic inbox management into a streamlined fulfillment pipeline that reduces manual data entry by over 90 percent.',
    longDescription:
      'Automated order processing workflow using n8n to sync catalogs, parse emails with OpenAI, and create tasks in Monday.com.',
    image: '/images/projects/Intelligent Product Order (n8n).webp',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "OpenAI", icon: React.createElement(SiOpenai, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Monday.com", icon: React.createElement(ListTodo, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
      { name: "Workflow JSON", icon: React.createElement(FileJson, { className: "w-3.5 h-3.5" }) },
    ],
    link: '/projects/intelligent-product-order-n8n',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Intelligent%20Product%20Order',
    featured: true,
    category: 'automation',
  },
  {
  id: 'cryptoverse',
    title: 'CryptoVerse',
    description:
      'Crypto investors struggle to track market movements across hundreds of coins while coordinating between multiple dashboards, news sites, and charting tools. This unified real-time crypto intelligence platform solves that by consolidating global market metrics, individual token analytics, and breaking news into a single responsive dashboard - transforming scattered market research into instant, data-driven investment decisions with zero context switching.',
    longDescription:
      'Real-time crypto stats, interactive Chart.js visualizations, Redux Toolkit Query state management, Ant Design UI, and aggregated news intelligence.',
    image: '/images/projects/CryptoVerse.webp',
    tags: [
      { name: "React", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Redux Toolkit", icon: React.createElement(Database, { className: "w-3.5 h-3.5" }) },
      { name: "Ant Design", icon: React.createElement(Palette, { className: "w-3.5 h-3.5" }) },
      { name: "Chart.js", icon: React.createElement(LineChart, { className: "w-3.5 h-3.5" }) },
      { name: "API Integration", icon: React.createElement(Globe2, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://cryptoverse20.netlify.app/',
    github: 'https://github.com/dhruba-datta/CryptoVerse',
    featured: true,
    category: 'development',
  },
  {
  id: 'portfolio-v2',
    title: 'Portfolio v2',
    description:
      'Senior developers need portfolios that demonstrate not just technical skills but modern development expertise through the portfolio itself. This advanced interactive portfolio solves that by using React 18, TypeScript, and professional animations to create an immersive experience - transforming a static resume site into a living demonstration of modern frontend mastery that immediately communicates senior-level capabilities through both content and execution.',
    longDescription:
      'Modern, highly interactive portfolio built with React 18, TypeScript, and Tailwind CSS. Features advanced Framer Motion animations, comprehensive case studies, a fully responsive design, and seamless dark mode integration.',
    image: '/images/projects/Portfolio v2.webp',
    tags: [
      { name: "React 18", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "TypeScript", icon: React.createElement(SiTypescript, { className: "w-3.5 h-3.5" }) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-3.5 h-3.5" }) },
      { name: "Framer Motion", icon: React.createElement(SiFramer, { className: "w-3.5 h-3.5" }) },
      { name: "Vite", icon: React.createElement(SiVite, { className: "w-3.5 h-3.5" }) },
      { name: "Dark Theme", icon: React.createElement(Palette, { className: "w-3.5 h-3.5" }) },
    ],
    link: '#',
    github: 'https://github.com/dhruba-datta/Portfolio-v2',
    featured: true,
    category: 'development',
  },
  {
  id: 'ab-pharmacy-orders',
    title: 'AB Pharmacy Orders',
    description:
      'Pharmacies lose critical time and risk medication shortages when managing inventory through handwritten orders, phone calls, and manual spreadsheets. This intelligent procurement platform eliminates those risks by digitizing the entire ordering workflow - from rapid product lookup to automated supplier confirmations - transforming error-prone manual processes into a reliable, trackable system that prevents stockouts and ensures patient safety.',
    longDescription:
      'Pharmacy order management system with Google Sheets backend integration, WhatsApp order confirmation, and streamlined UI for quick order placement and status tracking.',
    image: '/images/projects/AB Pharmacy Orders.webp',
    tags: [
      { name: "React", icon: React.createElement(SiReact, { className: "w-3.5 h-3.5" }) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Netlify", icon: React.createElement(BiLogoNetlify, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://abpharmacy-order.netlify.app/',
    github: 'https://github.com/dhruba-datta/AB-Pharmacy-Order-Management',
    featured: false,
    category: 'development',
  },

  {
  id: 'portfolio-v1',
    title: 'Portfolio v1',
    description:
      'Job seekers lose opportunities when their portfolio loads slowly or looks unprofessional, especially when recruiters spend less than 10 seconds on initial reviews. This lightweight professional portfolio eliminates that risk by delivering instant page loads, clean mobile-responsive design, and optimized SEO - transforming a basic resume into a compelling digital presence that captures attention immediately and ranks well in recruiter searches.',
    longDescription:
      'Lightweight, SEO-focused personal portfolio built with semantic HTML5, CSS3, and Bootstrap. Features a responsive grid layout, accessible design, and Netlify deployment for high performance.',
    image: '/images/projects/Portfolio v1.webp',
    tags: [
      { name: "HTML5", icon: React.createElement(Code, { className: "w-3.5 h-3.5" }) },
      { name: "CSS3", icon: React.createElement(Palette, { className: "w-3.5 h-3.5" }) },
      { name: "JavaScript", icon: React.createElement(SiJavascript, { className: "w-3.5 h-3.5" }) },
      { name: "SEO Optimized", icon: React.createElement(Search, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
      { name: "Netlify", icon: React.createElement(BiLogoNetlify, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://dhruba-datta.netlify.app/',
    github: 'https://github.com/dhruba-datta/Portfolio-v1',
    featured: true,
    category: 'development',
  },

  // Dice Job Search (n8n) automation project
  {
  id: 'dice-job-search-n8n',
    title: 'Dice Job Search (n8n)',
    description:
      'Job seekers waste hours manually refreshing job boards, missing perfect opportunities that disappear within hours. This intelligent job monitoring system eliminates that stress by autonomously tracking Dice.com for relevant tech roles, filtering out noise, and instantly alerting you to high-quality matches - transforming the exhausting hunt into a streamlined pipeline where opportunities come to you, complete with organized tracking and zero missed openings.',
    longDescription:
      'Automated job scraping workflow using n8n to fetch, filter, and alert on new Dice.com job listings via Telegram/Email.',
    image: '/images/projects/Dice Job Search (n8n).webp',
    tags: [
      { name: 'n8n', icon: React.createElement(SiN8N, { className: 'w-3.5 h-3.5' }) },
      { name: 'Dice.com', icon: React.createElement(Search, { className: 'w-3.5 h-3.5' }) },
      { name: 'Web Scraping', icon: React.createElement(Search, { className: 'w-3.5 h-3.5' }) },
      { name: 'Google Sheets', icon: React.createElement(SiGooglesheets, { className: 'w-3.5 h-3.5' }) },
      { name: 'Webhook', icon: React.createElement(Webhook, { className: 'w-3.5 h-3.5' }) },
      { name: 'Workflow JSON', icon: React.createElement(FileJson, { className: 'w-3.5 h-3.5' }) },
    ],
  link: '/projects/dice-job-search-n8n',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Dice%20Job%20Search',
    featured: true,
    category: 'automation',
  },

  {
  id: 'kingsley-group',
    title: 'Kingsley Group',
    description:
      'Professional services firms lose credibility and organic traffic when their website feels outdated or loads slowly, directly impacting lead generation. This comprehensive corporate digital transformation solved that for an environmental engineering leader by delivering a modern, SEO-optimized platform with structured content libraries and sub-second load times - transforming their website from a digital liability into a revenue-generating asset that ranks for target keywords and converts visitors across three international markets.',
    longDescription:
      'Corporate WordPress redesign featuring custom post types for resources & news, granular SEO optimization, Cloudflare performance hardening, and a multi-regional content strategy.',
    image: '/images/projects/Kingsley Group.webp',
    tags: [
      { name: "WordPress", icon: React.createElement(SiWordpress, { className: "w-3.5 h-3.5" }) },
      { name: "PHP", icon: React.createElement(SiPhp, { className: "w-3.5 h-3.5" }) },
      { name: "MySQL", icon: React.createElement(SiMysql, { className: "w-3.5 h-3.5" }) },
      { name: "SEO Optimization", icon: React.createElement(Search, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
      { name: "Content Management", icon: React.createElement(FileText, { className: "w-3.5 h-3.5" }) },
      { name: "Blog System", icon: React.createElement(BookOpen, { className: "w-3.5 h-3.5" }) },
      { name: "Custom Theme", icon: React.createElement(Palette, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://kingsleygroup.co/',
    github: '',
    featured: true,
    category: 'development',
  },
  {
  id: 'linkedin-job-search-n8n',
    title: 'LinkedIn Job Search (n8n)',
    description:
      'Job seekers waste hours manually searching LinkedIn only to find irrelevant postings from recruiters or roles that disappear before they can apply. This intelligent LinkedIn monitoring system eliminates that frustration by automatically tracking relevant opportunities, filtering spam, and delivering instant alerts with organized tracking - transforming the exhausting manual search into a streamlined pipeline where qualified positions find you instead of the other way around.',
    longDescription:
      'Automated job scraping workflow using n8n to fetch, filter, and alert on new LinkedIn job listings via Telegram/Email.',
    image: '/images/projects/LinkedIn Job Search (n8n).webp',
    tags: [
      { name: "n8n", icon: React.createElement(SiN8N, { className: "w-3.5 h-3.5" }) },
      { name: "LinkedIn", icon: React.createElement(SiLinkedin, { className: "w-3.5 h-3.5" }) },
      { name: "Web Scraping", icon: React.createElement(Search, { className: "w-3.5 h-3.5" }) },
      { name: "Google Sheets", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
      { name: "Webhook", icon: React.createElement(Webhook, { className: "w-3.5 h-3.5" }) },
      { name: "Data Extraction", icon: React.createElement(SiGooglesheets, { className: "w-3.5 h-3.5" }) },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Linkedin%20Job%20Search',
    featured: true,
    category: 'automation',
  },
  {
  id: 'kfc-clone',
    title: 'KFC Clone',
    description:
      'Food delivery startups struggle to build professional ordering experiences that work seamlessly across languages and devices without massive development costs. This production-ready food ordering platform solves that by delivering KFC-grade UX with multilingual support, dynamic cart management, and location services - transforming weeks of complex development into a ready-to-deploy foundation that handles the entire ordering flow from discovery to checkout across English, Bengali, and Hindi markets.',
    longDescription:
      'Advanced Vue 3 food ordering SPA featuring internationalization (i18n), dynamic cart management, location-based services with Leaflet.js, and a robust component architecture with data persistence.',
    image: '/images/projects/KFC Clone.webp',
    tags: [
      { name: "Vue 3", icon: React.createElement(FaVuejs, { className: "w-3.5 h-3.5" }) },
      { name: "TailwindCSS", icon: React.createElement(RiTailwindCssFill, { className: "w-3.5 h-3.5" }) },
      { name: "TypeScript/ES6+", icon: React.createElement(BiLogoTypescript, { className: "w-3.5 h-3.5" }) },
      { name: "Vue I18n", icon: React.createElement(Languages, { className: "w-3.5 h-3.5" }) },
      { name: "localStorage", icon: React.createElement(GrStorage, { className: "w-3.5 h-3.5" }) },
      { name: "Netlify", icon: React.createElement(BiLogoNetlify, { className: "w-3.5 h-3.5" }) },
      { name: "GitHub", icon: React.createElement(Github, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://kfc-bd.netlify.app/',
    github: 'https://github.com/dhruba-datta/kfc-clone',
    featured: true,
    category: 'development',
  },
  {
  id: 'easycooking',
    title: 'EasyCooking',
    description:
      'Home cooks struggle to find authentic recipes from diverse cuisines while juggling messy recipe sites loaded with ads and slow load times. This streamlined cooking platform solves that by delivering curated Bengali, Chinese, and Indian recipes with distraction-free instructions that load instantly on any device - transforming kitchen chaos into confident cooking with zero distractions and recipes that are actually usable while your hands are covered in flour.',
    longDescription:
      'Immersive multi-cuisine cooking tutorial platform featuring authentic Bengali, Chinese, and Indian recipes. Built with semantic HTML5 and CSS3 for distraction-free reading, lightning-fast zero-dependency performance, and a fully responsive cross-device experience.',
    image: '/images/projects/EasyCooking.webp',
    tags: [
      { name: "HTML5", icon: React.createElement(SiHtml5, { className: "w-3.5 h-3.5" }) },
      { name: "CSS3", icon: React.createElement(SiCss3, { className: "w-3.5 h-3.5" }) },
      { name: "Responsive Design", icon: React.createElement(Smartphone, { className: "w-3.5 h-3.5" }) },
      { name: "Multi-Cuisine", icon: React.createElement(Globe2, { className: "w-3.5 h-3.5" }) },
      { name: "GitHub Pages", icon: React.createElement(Github, { className: "w-3.5 h-3.5" }) },
    ],
    link: 'https://dhruba-datta.github.io/EasyCooking/',
    github: 'https://github.com/dhruba-datta/EasyCooking',
    featured: true,
    category: 'development',
  },
  {
  id: 'food-ordering-system',
    title: 'Food Ordering System',
    description:
      'Small restaurants and cafeterias lose orders and revenue when relying on handwritten tickets and mental math for billing. This intelligent point-of-sale system eliminates those errors by automating order tracking, bill calculations, and preparation time estimates - transforming manual chaos into a structured, token-based workflow that ensures every order is tracked, every calculation is accurate, and every customer experience is seamless.',
    longDescription:
      'Robust C++ ordering system featuring token-based tracking, smart time estimation, automated billing, and secure password-protected admin panel with persistent file storage.',
    image: '/images/projects/Food Ordering System.webp',
    tags: [
      { name: "C++", icon: React.createElement(SiCplusplus, { className: "w-3.5 h-3.5" }) },
      { name: "OOP", icon: React.createElement(Code, { className: "w-3.5 h-3.5" }) },
      { name: "File Handling", icon: React.createElement(Database, { className: "w-3.5 h-3.5" }) },
      { name: "Admin Panel", icon: React.createElement(Settings, { className: "w-3.5 h-3.5" }) },
      { name: "Console App", icon: React.createElement(Terminal, { className: "w-3.5 h-3.5" }) },
      { name: "Order Management", icon: React.createElement(ShoppingCart, { className: "w-3.5 h-3.5" }) },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/FoodOrderingSystem',
    featured: true,
    category: 'app',
  },
];

export const categories = [
  { key: 'development', label: 'Web', icon: Code2 },
  { key: 'app', label: 'App', icon: Smartphone },
  { key: 'automation', label: 'Automation', icon: SiN8N },
];

export const categoryMeta: Record<string, { label: string; Icon: React.ElementType }> = {
  development: { label: 'Web', Icon: Code2 },
  app: { label: 'App', Icon: Smartphone },
  automation: { label: 'Automation', Icon: SiN8N },
};
