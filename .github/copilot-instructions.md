# Copilot Instructions for Portfolio Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a professional portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. The portfolio showcases a software engineer's multidisciplinary background including WordPress development, QA automation, AI model training, and research work.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, scroll-based animations
- **Deployment**: Optimized for static hosting (Netlify, Vercel, etc.)

## Design Principles

- **Minimalist**: Clean, professional design with plenty of white space
- **Responsive**: Mobile-first approach with seamless desktop scaling
- **Performance**: Optimized for fast loading and smooth animations
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation

## Code Style Guidelines

- Use functional components with hooks
- Implement TypeScript interfaces for all data structures
- Follow Tailwind utility-first CSS approach
- Use Framer Motion for all animations with consistent timing
- Maintain consistent naming conventions (camelCase for variables, PascalCase for components)
- Keep components focused and reusable

## Component Structure

- `components/sections/`: Main page sections (Hero, About, Projects, etc.)
- `components/ui/`: Reusable UI components (Navigation, Footer, etc.)
- `types/`: TypeScript type definitions
- `utils/`: Utility functions and helpers

## Animation Patterns

- Use `initial`, `whileInView`, `variants` pattern for scroll-triggered animations
- Implement staggered animations for lists and grids
- Apply hover and tap animations for interactive elements
- Maintain consistent easing and duration values

## Content Guidelines

- Placeholder content should be professional and relevant
- Use realistic project examples that showcase technical skills
- Maintain focus on problem-solving and measurable impact
- Include proper attribution for any external resources

## Performance Considerations

- Optimize images and use appropriate formats
- Implement lazy loading for images and heavy components
- Minimize bundle size with tree shaking
- Use semantic HTML for better SEO
