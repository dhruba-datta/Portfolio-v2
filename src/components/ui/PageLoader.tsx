/** Branded route loader shown while a lazy page chunk loads. */
const PageLoader = () => (
  <div
    className="min-h-screen bg-white dark:bg-[#0a0f1c] transition-colors duration-300 flex items-center justify-center"
    role="status"
    aria-live="polite"
  >
    <div className="relative flex items-center justify-center">
      <span
        aria-hidden
        className="absolute w-20 h-20 rounded-2xl bg-blue-500/20 blur-xl motion-safe:animate-pulse"
      />
      <div
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#0a2240] motion-safe:animate-pulse"
        style={{ boxShadow: '0 4px 24px -1px rgba(31, 38, 135, 0.12)' }}
      >
        <img src="/images/logo.svg" alt="" className="w-10 h-10 object-contain" />
      </div>
    </div>
    <span className="sr-only">Loading page…</span>
  </div>
);

export default PageLoader;
