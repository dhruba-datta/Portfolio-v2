import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

type FormType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type ErrorType = Partial<FormType>;

// Social links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/dhruba-datta",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dhruba-datta/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.co.uk/citations?hl=en&user=RGxdIVkAAAAJ&view_op=list_works&authuser=1&gmla=AH70aAURqNk3ktsHQOlfZFUuNTBsHi7ZPnDjzbSkBWhg2ulKof0-hdur7ndSkkQ72sJwZ2ImrmCa9MtZLRPfjYoH",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
      </svg>
    ),
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_FORM: FormType = { name: "", email: "", subject: "", message: "" };

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormType>(INITIAL_FORM);
  const [errors, setErrors] = useState<ErrorType>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function sendEmail(params: FormType) {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    return emailjs.send(serviceId, templateId, params, userId);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setStatus("idle");
    let errs: ErrorType = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!EMAIL_REGEX.test(form.email)) errs.email = "Enter a valid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      await sendEmail(form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
    setLoading(false);
  }

  // Subtle animated bg dots
  const bgDots = Array.from({ length: 9 }).map((_, i) => ({
    left: `${8 + i * 10}%`,
    top: `${20 + i * 8}%`,
    size: 20 + Math.random() * 16,
    opacity: 0.08 + Math.random() * 0.09,
    duration: 6 + i,
    delay: i * 0.8,
  }));

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 65% 45% at 50% 14%,rgba(99,102,241,0.10),transparent 90%)",
      }}
    >
     {/* --- Animated minimal bg --- */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_28px] opacity-10 [mask-image:radial-gradient(ellipse_60%_40%_at_50%_14%,#000_70%,transparent_120%)]"></div>
        {bgDots.map((r, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              left: r.left,
              top: r.top,
              width: r.size,
              height: r.size,
              opacity: r.opacity,
              filter: "blur(1px)",
              zIndex: 0,
            }}
            initial={{ y: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: [r.opacity, r.opacity * 1.5, r.opacity],
            }}
            transition={{
              duration: r.duration,
              repeat: Infinity,
              delay: r.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* --- 2 Column Main Content --- */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-2">
        {/* --- Left: Profile/Intro --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4"
        >
          {/* Animated Profile */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="relative mb-3"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-2xl"
              animate={{ rotate: 360, scale: [1, 1.10, 1] }}
              transition={{
                rotate: { duration: 7, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ transform: "scale(1.13)" }}
            />
            <img
              src="/images/Headshot.png"
              alt="Profile"
              className="relative z-10 w-32 h-32 rounded-full object-cover shadow-2xl"
              draggable={false}
            />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
              animate={{
                scale: [1, 1.22, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.4)",
                  "0 0 0 8px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0)",
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-2 left-2 w-2 h-2 bg-yellow-300 rounded-full shadow"
              animate={{
                scale: [0, 1.05, 0],
                opacity: [0, 1, 0],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Dhruba <span className="text-blue-600 dark:text-blue-400">Datta</span>
          </h1>
          <div className="flex items-center gap-2 bg-green-100/80 dark:bg-green-900/40 rounded-full px-4 py-1 w-fit mt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-green-700 dark:text-green-300 font-medium text-sm">Open for New Opportunities</span>
          </div>
          <div className="text-blue-600 dark:text-blue-400 font-medium text-xl">Bringing Ideas to Life - Let's build together</div>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mb-2 text-lg">
            Got an idea, a question, or just want to chat? 
            <br />
            Connect on social media for updates, or use the form for detailed inquiries.
          </p>
          <div className="flex gap-4 mb-2 justify-center lg:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800"
              >
                {social.icon}
              </a>
            ))}
          </div>
          
        </motion.div>

        {/* --- Right: Form --- */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full space-y-5"
          aria-label="Contact Form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400`}
                value={form.name}
                onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setStatus("idle"); }}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name && "name-error"}
                placeholder="Full Name"
                required
              />
              {errors.name && <div className="text-xs text-red-400 mt-1" id="name-error">{errors.name}</div>}
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400`}
                value={form.email}
                onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setStatus("idle"); }}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email && "email-error"}
                placeholder="you@email.com"
                required
              />
              {errors.email && <div className="text-xs text-red-400 mt-1" id="email-error">{errors.email}</div>}
            </div>
          </div>
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border ${errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400`}
              value={form.subject}
              onChange={e => { setForm(f => ({ ...f, subject: e.target.value })); setStatus("idle"); }}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject && "subject-error"}
              placeholder="Subject"
              required
            />
            {errors.subject && <div className="text-xs text-red-400 mt-1" id="subject-error">{errors.subject}</div>}
          </div>
          {/* Message */}
          <div className="relative">
            <label htmlFor="message" className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={500}
              className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 resize-none`}
              value={form.message}
              onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setStatus("idle"); }}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message && "message-error"}
              placeholder="How can I help you?"
              required
            />
            {/* Char count bottom-right, always visible */}
            <span className="absolute bottom-2 right-3 text-[11px] text-gray-400">{form.message.length}/500</span>
            {errors.message && <div className="text-xs text-red-400 mt-1" id="message-error">{errors.message}</div>}
          </div>
          {/* Button */}
          <motion.button
            type={status === "success" ? "button" : "submit"}
            whileHover={{ scale: status === "idle" ? 1.04 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
            className={
              "w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-base " +
              (status === "idle"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow"
                : status === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white")
            }
            disabled={loading || status === "success"}
            tabIndex={0}
            aria-live="polite"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/>
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75"/>
                </svg>
                <span className="ml-2">Sending...</span>
              </>
            ) : status === "success" ? (
              <>
                <span>Message Sent!</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </>
            ) : status === "error" ? (
              <>
                <span>Failed. Try again.</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </>
            ) : (
              <>
                <span>Send</span>
                {/* Arrow right */}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
