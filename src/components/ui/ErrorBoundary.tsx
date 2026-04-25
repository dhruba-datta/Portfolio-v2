import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="relative min-h-screen bg-white dark:bg-[#0a0f1c] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Background — matches home-page section style */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(800px 400px at 60% -5%, rgba(59,130,246,0.08), transparent 65%), radial-gradient(700px 400px at 20% 105%, rgba(244,63,94,0.06), transparent 70%)',
              }}
            />
            <div className="absolute -top-20 left-1/3 w-[20rem] h-[20rem] rounded-full blur-3xl bg-gradient-to-tr from-blue-500/10 via-indigo-500/8 to-rose-500/8" />
            <div className="absolute -bottom-16 right-1/4 w-[18rem] h-[18rem] rounded-full blur-3xl bg-gradient-to-tl from-rose-400/8 via-pink-500/6 to-indigo-600/8" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-full max-w-md mx-auto rounded-2xl border border-slate-200/70 dark:border-white/[0.08] bg-white/90 dark:bg-slate-950/70 backdrop-blur-md shadow-lg p-6 sm:p-8 text-center"
          >
            {/* Icon */}
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-500/10 ring-1 ring-rose-200/70 dark:ring-rose-400/20">
              <AlertTriangle className="h-7 w-7 text-rose-600 dark:text-rose-400" strokeWidth={2} />
            </div>

            {/* Eyebrow */}
            <h3 className="text-slate-500 dark:text-slate-400">
              Error
            </h3>

            {/* Title */}
            <h2 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Something went wrong
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              We hit an unexpected error. Try refreshing the page, or head back to the homepage.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm sm:text-base font-outfit font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all focus-override"
              >
                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:rotate-180" />
                Refresh page
              </button>

              <a
                href="/"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm sm:text-base font-outfit font-semibold text-slate-900 dark:text-white bg-blue-50/60 dark:bg-white/[0.04] ring-1 ring-blue-200/80 dark:ring-white/[0.08] backdrop-blur-md hover:ring-blue-300/80 dark:hover:ring-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all focus-override"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                Go home
              </a>
            </div>

            {/* Technical details — collapsible, dev-friendly */}
            {this.state.error && (
              <details className="text-left mt-6 group">
                <summary className="cursor-pointer text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors focus-override font-outfit inline-flex items-center gap-1.5 list-none">
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-open:rotate-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Technical details
                </summary>
                <pre className="mt-2 p-3 rounded-lg bg-slate-100 dark:bg-slate-900/80 ring-1 ring-slate-200/70 dark:ring-white/[0.06] text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 overflow-auto font-mono leading-relaxed">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
