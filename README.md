# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Professional Portfolio

A modern, responsive portfolio website showcasing multidisciplinary expertise in software engineering, WordPress development, QA automation, AI model training, and research. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Minimalist, professional aesthetic with smooth scroll-based animations
- **Responsive**: Mobile-first design that scales beautifully across all devices
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **Interactive Animations**: Smooth Framer Motion animations that enhance user experience
- **Type Safe**: Built with TypeScript for better development experience and fewer bugs

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Development**: ESLint + TypeScript ESLint
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Research.tsx
│   │   ├── Photography.tsx
│   │   └── Contact.tsx
│   └── ui/               # Reusable UI components
│       ├── Navigation.tsx
│       └── Footer.tsx
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
├── App.tsx               # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles with Tailwind
```

## 🎯 Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Professional background and skills showcase
3. **Projects**: Featured work with technology stacks and live demos
4. **Case Studies**: In-depth problem-solving examples with measurable impact
5. **Research**: Academic work and research interests
6. **Photography**: Creative portfolio with Instagram integration
7. **Contact**: Multi-channel contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors & Branding

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Customize primary colors
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Content

1. **Personal Information**: Update contact details in Footer and Contact sections
2. **Projects**: Replace sample projects in `Projects.tsx` with your actual work
3. **Case Studies**: Update with your real problem-solving examples
4. **Research**: Add your publications and research interests
5. **Photography**: Replace with your actual photography portfolio
6. **Skills**: Modify skill lists in the About section

### Images

- Replace placeholder images with your actual photos
- Optimize images for web (WebP format recommended)
- Use appropriate alt text for accessibility

## 🌐 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up custom domain if needed

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 🔧 Performance Optimization

- Images are lazy-loaded by default
- Animations are optimized for 60fps
- Code splitting is handled by Vite
- CSS is purged in production builds

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About

Created by **Dhruba Datta** - A problem-solver with deep curiosity and a passion for continuous growth.

- **Email**: dhruba.datta@example.com
- **LinkedIn**: [linkedin.com/in/dhrubadatta](https://linkedin.com/in/dhrubadatta)
- **GitHub**: [github.com/dhrubadatta](https://github.com/dhrubadatta)

---

⭐ If you found this portfolio template helpful, please give it a star!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
