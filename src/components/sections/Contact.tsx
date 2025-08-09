import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

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
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dhruba-datta/",
    icon: <FaLinkedinIn className="w-5 h-5" />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/dhruba.datta.anjan",
    icon: <FaFacebookF className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dhrubz_/",
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/dhruba_datta_anjan",
    icon: <FaTelegramPlane className="w-5 h-5" />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/DhrubaDattaAnjan",
    icon: <FaYoutube className="w-5 h-5" />,
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
    const errs: ErrorType = {};
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
      className="lg:min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden py-16 lg:py-0"
    >
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Soft mesh glow */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          style={{
            background:
              "radial-gradient(1000px 520px at 50% 5%, rgba(99,102,241,0.18), transparent 70%), radial-gradient(900px 560px at 80% 90%, rgba(236,72,153,0.16), transparent 72%), radial-gradient(900px 560px at 10% 85%, rgba(59,130,246,0.16), transparent 72%)",
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-20 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-blue-500/30 via-indigo-500/25 to-fuchsia-500/25"
          animate={{
            y: [0, 24, 0],
            x: [0, 32, 0],
            scale: [1, 1.08, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 right-1/5 w-[24rem] h-[24rem] rounded-full blur-3xl bg-gradient-to-tl from-fuchsia-400/25 via-purple-500/20 to-blue-500/25"
          animate={{
            y: [0, -26, 0],
            x: [0, -28, 0],
            scale: [1, 1.06, 1],
            opacity: [0.7, 0.95, 0.7],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle grid with radial mask */}
        <div
          className="absolute inset-0 opacity-10
            [mask-image:radial-gradient(ellipse_60%_40%_at_50%_14%,#000_70%,transparent_120%)]
            bg-[linear-gradient(to_right,#64748b33_1px,transparent_1px),linear-gradient(to_bottom,#64748b33_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,#94a3b833_1px,transparent_1px),linear-gradient(to_bottom,#94a3b833_1px,transparent_1px)]
            bg-[size:18px_28px]"
        />

        {/* Floating micro-dots */}
        {bgDots.map((r, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 dark:bg-indigo-300"
            style={{
              left: r.left,
              top: r.top,
              width: r.size,
              height: r.size,
              opacity: r.opacity,
              filter: "blur(1px)",
            }}
            initial={{ y: 0 }}
            animate={{ y: [0, -18, 0], opacity: [r.opacity, r.opacity * 1.4, r.opacity] }}
            transition={{
              duration: r.duration,
              repeat: Infinity,
              delay: r.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Slow rotating conic sheen */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.06), transparent 30%, rgba(255,255,255,0.06) 60%, transparent 80%, rgba(255,255,255,0.06))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* --- 2 Column Main Content --- */}
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center px-4 md:px-6 lg:px-2">
        {/* --- Left: Profile/Intro --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 pt-10 md:pt-16 lg:pt-0"
        >
          {/* Animated Profile */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="relative mb-3"
          >
            {/* Outer animated glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-2xl"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 7, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ transform: "scale(1.13)" }}
            />
            {/* Floating geometric shapes */}
            <motion.div
              className="absolute -top-8 right-2 w-6 h-6 border-2 border-purple-400 opacity-60"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              animate={{
                rotate: [0, 360],
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <motion.div
              className="absolute -left-8 bottom-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 opacity-70"
              style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
              animate={{
                rotate: [0, -360],
                x: [0, 8, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            {/* Floating sparkles */}
            <motion.div
              className="absolute -top-3 -left-3 w-2 h-2 bg-yellow-400 rounded-full shadow-lg"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
                x: [0, 3, 0],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 -right-3 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-lg"
              animate={{
                scale: [0, 1.2, 0],
                opacity: [0, 1, 0],
                x: [0, -2, 0],
                y: [0, 2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
            {/* Main profile image */}
            <img
              src="/images/Headshot.png"
              alt="Profile"
              className="relative z-10 w-32 h-32 rounded-full object-cover shadow-2xl"
              draggable={false}
            />
            {/* Status indicator */}
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
            <span className="text-green-700 dark:text-green-300 font-medium text-sm">
              Open for New Opportunities
            </span>
          </div>

          <div className="text-blue-600 dark:text-blue-400 font-medium text-xl">
            Bringing Ideas to Life - Let's build together
          </div>

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
                className={
                  `p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 ` +
                  (social.name === "LinkedIn" ? "hover:text-blue-600 dark:hover:text-blue-400" : "") +
                  (social.name === "Instagram" ? "hover:text-pink-500 dark:hover:text-pink-400" : "") +
                  (social.name === "Telegram" ? "hover:text-blue-400 dark:hover:text-blue-300" : "") +
                  (social.name === "YouTube" ? "hover:text-red-500 dark:hover:text-red-400" : "") +
                  (social.name === "Facebook" ? "hover:text-blue-700 dark:hover:text-blue-500" : "")
                }
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
          className="w-full space-y-5 pb-10 md:pb-16 lg:pb-0"
          aria-label="Contact Form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1"
              >
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border ${
                  errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400`}
                value={form.name}
                onChange={(e) => {
                  setForm((f) => ({ ...f, name: e.target.value }));
                  setStatus("idle");
                }}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Full Name"
                required
              />
              {errors.name && (
                <div className="text-xs text-red-400 mt-1" id="name-error">
                  {errors.name}
                </div>
              )}
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400`}
                value={form.email}
                onChange={(e) => {
                  setForm((f) => ({ ...f, email: e.target.value }));
                  setStatus("idle");
                }}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@email.com"
                required
              />
              {errors.email && (
                <div className="text-xs text-red-400 mt-1" id="email-error">
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1"
            >
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border ${
                errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400`}
              value={form.subject}
              onChange={(e) => {
                setForm((f) => ({ ...f, subject: e.target.value }));
                setStatus("idle");
              }}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              placeholder="Subject"
              required
            />
            {errors.subject && (
              <div className="text-xs text-red-400 mt-1" id="subject-error">
                {errors.subject}
              </div>
            )}
          </div>
          {/* Message */}
          <div className="relative">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={500}
              className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border ${
                errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 resize-none`}
              value={form.message}
              onChange={(e) => {
                setForm((f) => ({ ...f, message: e.target.value }));
                setStatus("idle");
              }}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="How can I help you?"
              required
            />
            {/* Char count bottom-right, always visible */}
            <span className="absolute bottom-2 right-3 text-[11px] text-gray-400">
              {form.message.length}/500
            </span>
            {errors.message && (
              <div className="text-xs text-red-400 mt-1" id="message-error">
                {errors.message}
              </div>
            )}
          </div>
          {/* Button */}
          <motion.button
            type={status === "success" ? "button" : "submit"}
            whileHover={{ scale: status === "idle" ? 1.04 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
            className={
              "w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-base focus-override " +
              (loading
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow"
                : status === "success"
                ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white shadow"
                : status === "idle"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow"
                : "bg-red-600 text-white")
            }
            disabled={loading || status === "success"}
            tabIndex={0}
            aria-live="polite"
          >
            {loading ? (
              <>
                <span>Sending...</span>
                <svg
                  className="animate-spin w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="opacity-25"
                  />
                  <path
                    d="M4 12a8 8 0 018-8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="opacity-75"
                  />
                </svg>
              </>
            ) : status === "success" ? (
              <>
                <span>Message Sent</span>
                <FaCheck className="w-5 h-5 ml-1 text-white-400" aria-hidden="true" />
              </>
            ) : status === "error" ? (
              <>
                <span>Failed. Try again.</span>
                {/* Modern error icon: circle with X */}
                <svg
                  className="w-5 h-5 ml-2 text-red-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="#ef4444"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9l6 6M15 9l-6 6"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <IoIosSend className="w-5 h-5 ml-0.5" aria-hidden="true" />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
