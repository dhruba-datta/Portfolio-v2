import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Camera, Heart, MessageCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { formatCaption, formatTimestamp } from '../../../utils/instagram';
import { useInstagram } from '../../../utils/useInstagram';

const Photography = () => {
  const { posts, loading, error, refetch } = useInstagram(6);
  const prefersReducedMotion = useReducedMotion();

  // Decorative background elements
  const bgElements = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        left: `${15 + i * 12}%`,
        top: `${25 + i * 6}%`,
        size: 6 + (i % 3) * 2,
        opacity: 0.03 + (i % 4) * 0.015,
        duration: 8 + i * 0.5,
        delay: i * 0.7,
      })),
    []
  );

  const handleRetry = () => {
    refetch();
  };

  const LoadingSkeleton = () => (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="group">
          <div className="rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-slate-950/90 backdrop-blur-md">
            <div className="relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4 animate-pulse" />
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ErrorState = () => (
    <div className="text-center py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Unable to Load Photos
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-md">
            {error || 'There was an issue loading Instagram posts. Please try again.'}
          </p>
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="photography" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Soft mesh glows */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            background:
              'radial-gradient(900px 500px at 80% -10%, rgba(168,85,247,0.08), transparent 65%), radial-gradient(800px 500px at 10% 110%, rgba(99,102,241,0.06), transparent 70%)',
          }}
        />
        {/* Purple orbs */}
        <motion.div
          className="absolute -top-24 right-1/4 w-[22rem] h-[22rem] rounded-full blur-3xl bg-gradient-to-tr from-purple-500/10 via-violet-500/8 to-pink-500/8"
          animate={
            prefersReducedMotion ? {} : { y: [0, 18, 0], x: [0, -22, 0], scale: [1, 1.05, 1] }
          }
          transition={prefersReducedMotion ? {} : { duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/5 w-[20rem] h-[20rem] rounded-full blur-3xl bg-gradient-to-tl from-indigo-400/8 via-purple-500/6 to-violet-600/6"
          animate={
            prefersReducedMotion ? {} : { y: [0, -15, 0], x: [0, 18, 0], scale: [1, 1.04, 1] }
          }
          transition={prefersReducedMotion ? {} : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Floating elements */}
        {bgElements.map((el, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-purple-400/30 dark:bg-violet-300/30"
            style={{
              left: el.left,
              top: el.top,
              width: el.size,
              height: el.size,
              filter: 'blur(1px)',
              opacity: el.opacity,
            }}
            initial={{ y: 0 }}
            animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
            transition={
              prefersReducedMotion ? {} : { duration: el.duration, delay: el.delay, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="uppercase tracking-[0.2em] text-[11px] text-slate-500 dark:text-slate-400 inline-flex items-center gap-2">
              
              Photography
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Visual Stories
            </h2>
            
          </motion.div>
        </div>

        {/* Content */}
        {loading ? (
          <LoadingSkeleton />
        ) : error && posts.length === 0 ? (
          <ErrorState />
        ) : (
          <>
            {/* Instagram Grid */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-12">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                  className="group"
                >
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-slate-950/90 backdrop-blur-md hover:shadow-xl hover:shadow-purple-500/[0.08] dark:hover:shadow-violet-500/[0.05] transition-all duration-500
                               hover:border-purple-300/50 dark:hover:border-violet-400/20 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={post.media_url}
                        alt={formatCaption(post.caption, 50) || 'Instagram post'}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Instagram indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        </div>
                      </div>

                      {/* Quick interaction icons */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-white">
                            <Heart className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-1 text-white">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.08] dark:ring-white/[0.08] rounded-t-3xl" />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="space-y-2">
                        {post.caption && (
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-2">
                            {formatCaption(post.caption, 100)}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {formatTimestamp(post.timestamp)}
                          </span>
                          <span className="text-xs text-purple-600 dark:text-violet-400 font-medium">
                            View on Instagram
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              >
                <a
                  href="https://www.instagram.com/dhrubz_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 dark:from-violet-500 dark:to-purple-600 text-white hover:from-purple-600 hover:to-violet-700 dark:hover:from-violet-600 dark:hover:to-purple-700 shadow-lg shadow-purple-500/25 dark:shadow-violet-500/20 hover:shadow-xl hover:shadow-purple-500/30 dark:hover:shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <Camera className="w-5 h-5" />
                  <span>Follow on Instagram</span>
                  <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </>
        )}

        {/* Error indicator for when some posts load but there are issues */}
        {error && posts.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-amber-600 dark:text-amber-400">
              Some photos may not be up to date. Instagram updates every 30 minutes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Photography;


