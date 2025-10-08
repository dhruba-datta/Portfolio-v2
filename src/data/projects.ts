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
  SiMysql
} from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoNetlify, BiLogoTypescript } from 'react-icons/bi';
import { GrStorage } from 'react-icons/gr';

export const projects: Project[] = [
  {
  id: 'content-idea-generator-n8n',
    title: 'Content Idea Generator (n8n)',
    description:
      'Automate content ideation with this n8n workflow. It pulls topics from Google Sheets, generates three ideas per topic with OpenAI, and creates Trello cards automatically. This single automation saves you 20+ hours a month by eliminating manual tasks, freeing you to focus on creating great content.',
    longDescription:
      'Automated content creation workflow with Google Sheets integration, AI content generation, and Trello management.',
    image: '/images/projects/Content Idea Generator (n8n).svg',
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
  id: 'linkedin-job-search-n8n',
    title: 'LinkedIn Job Search (n8n)',
    description:
      'Automate your job hunt with this n8n workflow. It automatically searches LinkedIn by keyword and location, filters results, saves them to a Google Sheet, and sends you instant alerts, saving you valuable time.',
    longDescription:
      'Web form-driven job search automation with dynamic URL building, data extraction, and Google Sheets integration.',
    image: '/images/projects/LinkedIn Job Search (n8n).svg',
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
  id: 'photobooth',
    title: 'PhotoBooth',
    description:
      'A modern photo-sharing web app to upload, discover, and engage with images. Built with React + Tailwind + Sanity.io, featuring Google authentication, real-time social interactions, and an immersive gallery.',
    longDescription:
      'Fullscreen mode, Google authentication, create/edit/delete posts, like/comment, search/filter images.',
    image: '/images/projects/photobooth.svg',
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
      'A production-ready React Native Expo app for pharmacy trade shows: live schedules, exhibitor directory, product catalogs, and instant search, built with modular components and offline-first UX.',
    longDescription:
      'Sort by categories, search/filter products, add to cart, WhatsApp integration, and more.',
    image: '/images/projects/AB Pharmacy Expo.svg',
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
  id: 'cryptoverse',
    title: 'CryptoVerse',
    description:
      'A real-time cryptocurrency dashboard built with React, Redux Toolkit & Chart.js. Live markets, smart filters, detailed coin pages and news wrapped in a clean Ant Design UI.',
    longDescription: 'Search/filter cryptocurrencies, latest news, detailed info, cross-platform.',
    image: '/images/projects/CryptoVerse.svg',
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
      'A modern, responsive portfolio website showcasing multidisciplinary expertise with React 18, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark theme, and comprehensive project showcases.',
    longDescription:
      'Modern React portfolio with TypeScript, Tailwind CSS, animations, and comprehensive project case studies.',
    image: '/images/projects/Portfolio v2.svg',
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
  id: 'portfolio-v1',
    title: 'Portfolio v1',
    description:
      'A clean, SEO-friendly personal portfolio highlighting your skills, projects and resume. Built with a basic Bootstrap template using HTML/CSS/JS and later deployed on Netlify.',
    longDescription:
      'SEO indexed personal portfolio with about, skills, resume, projects, and contact sections.',
    image: '/images/projects/Portfolio v1.svg',
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
      "This n8n workflow automates your tech job search on Dice.com, saving you valuable time. It scrapes new job posts, applies your custom filters, and saves the relevant listings directly into a Google Sheet. You also receive instant alerts, ensuring you're always one step ahead without the need for endless manual browsing.",
    longDescription:
      'n8n workflow for Dice.com job search automation: dynamic search, web scraping, Google Sheets integration, and instant notifications.',
    image: '/images/projects/Dice Job Search (n8n).svg',
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
      'Corporate WordPress redesign for an environmental engineering company. Added Resources, Blog, and News sections, implemented end-to-end SEO, optimized performance, and built a scalable content model for a multi-location presence (Australia, Bangladesh, China).',
    longDescription:
      'WordPress website redesign with custom theme development, SEO optimization, content management, blog system, news section, resource pages, and responsive design for environmental engineering services.',
    image: '/images/projects/Kingsley Group.svg',
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
  id: 'kfc-clone',
    title: 'KFC Clone',
    description:
      'A sleek, single-page food ordering app inspired by KFC Bangladesh. Built with Vue 3 and Tailwind, focused on performance, multilingual UX, and a clean component architecture.',
    longDescription: 'Seamless UI, dynamic menu, multi-language, and e-commerce features.',
    image: '/images/projects/KFC Clone.svg',
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
      'A cooking tutorial website featuring recipes from different cuisines including Bengali, Chinese, and Indian. Built with pure HTML and CSS for optimal performance and cross-platform compatibility.',
    longDescription:
      'Fullscreen recipe viewing, multi-cuisine support, responsive design, and easy navigation across different cooking tutorials.',
    image: '/images/projects/EasyCooking.svg',
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
      'A console-based C++ application for food ordering with menu selection, bill calculation, payment processing, and admin panel for order management. Features object-oriented design and file handling for data persistence.',
    longDescription:
      'Complete food ordering system with customer interface, admin panel, order management, bill calculation, and data persistence.',
    image: '/images/projects/Food Ordering System.svg',
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
