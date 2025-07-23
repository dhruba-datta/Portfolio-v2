import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// TYPES
interface ContactFormState {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
interface BookingState {
  date: string;
  time: string;
  name: string;
  email: string;
  notes?: string;
}
interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  date?: string;
  time?: string;
}
type ResultState = null | { success?: string; error?: string };

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

// CONSTANTS
const TIMES = [
  "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm",
  "2:00pm", "2:30pm", "3:00pm", "3:30pm", "4:00pm",
];
const AVAIL_DATES = [11, 22, 24, 25, 28, 29, 30, 31];

const socials: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dhruba",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "hover:text-blue-600"
  },
  {
    name: "GitHub",
    href: "https://github.com/dhruba",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/dhruba",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    color: "hover:text-blue-400"
  }
];

// EMAIL REGEX
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};
const INITIAL_BOOKING: BookingState = {
  date: "",
  time: "",
  name: "",
  email: "",
  notes: ""
};

const Contact: React.FC = () => {
  const [tab, setTab] = useState<"form" | "calendar">("form");
  const [form, setForm] = useState<ContactFormState>({ ...INITIAL_FORM });
  const [booking, setBooking] = useState<BookingState>({ ...INITIAL_BOOKING });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResultState>(null);

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // ---- VALIDATION ----
  function validateForm(values: ContactFormState | BookingState): ValidationErrors {
    const errs: ValidationErrors = {};
    if (!values.name || !values.name.trim()) errs.name = "Name is required";
    if (!EMAIL_REGEX.test(values.email)) errs.email = "Enter a valid email";
    if ("message" in values && (!values.message || !values.message.trim())) errs.message = "Message is required";
    if ("date" in values && !values.date) errs.date = "Pick a date";
    if ("time" in values && !values.time) errs.time = "Pick a time";
    return errs;
  }

  // ---- EMAILJS ----
  async function sendEmail(templateParams: Record<string, string>) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID as string;
  return emailjs.send(serviceId, templateId, templateParams, userId);
}


  // ---- HANDLE CONTACT ----
  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setResult(null);

    const formErrors = validateForm(form);
    setErrors(formErrors);
    if (Object.keys(formErrors).length) return;

    setLoading(true);
    try {
      await sendEmail({
        name: form.name,
        email: form.email,
        title: form.subject || "Contact",
        message: form.message
      });
      setResult({ success: "Message sent successfully! You will receive a reply soon." });
      setForm({ ...INITIAL_FORM });
    } catch {
      setResult({ error: "Failed to send message. Try again later." });
    }
    setLoading(false);
  }

  // ---- HANDLE BOOKING ----
  async function handleBookingSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setResult(null);

    const vals: BookingState = {
      ...booking,
      date: selectedDate,
      time: selectedTime,
    };
    const bookErrors = validateForm(vals);
    setErrors(bookErrors);
    if (Object.keys(bookErrors).length) return;

    setLoading(true);
    try {
      await sendEmail({
        name: vals.name,
        email: vals.email,
        title: `Session Booking: ${vals.date} @ ${vals.time}`,
        message: vals.notes || ""
      });
      setResult({ success: "Booking request sent! Confirmation will be emailed." });
      setBooking({ ...INITIAL_BOOKING });
      setSelectedDate("");
      setSelectedTime("");
    } catch {
      setResult({ error: "Failed to send booking. Try again later." });
    }
    setLoading(false);
  }

  function CalendarGrid() {
    return (
      <div className="grid grid-cols-7 gap-1 mb-6">
        {["SUN","MON","TUE","WED","THU","FRI","SAT"].map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-400 py-3">{day}</div>
        ))}
        {Array.from({ length: 35 }, (_, i) => {
          const date = i - 5;
          const isCurrent = date > 0 && date <= 31;
          const isAvailable = isCurrent && AVAIL_DATES.includes(date);
          return (
            <button
              key={i}
              type="button"
              aria-label={`Book ${date}`}
              onClick={() => isAvailable && setSelectedDate(`July ${date}, 2025`)}
              className={`aspect-square text-sm rounded-lg relative
                ${!isCurrent ? 'text-gray-700' : isAvailable ? 'text-white hover:bg-blue-600 cursor-pointer' : 'text-gray-400'}
                ${selectedDate === `July ${date}, 2025` ? 'bg-blue-500' : ''}
              `}
              disabled={!isAvailable}
            >
              {isCurrent ? date : ''}
            </button>
          );
        })}
      </div>
    );
  }

  function Timeslots() {
    if (!selectedDate) return null;
    return (
      <div className="space-y-2">
        {TIMES.map(time => (
          <button
            type="button"
            key={time}
            aria-label={`Select ${time}`}
            onClick={() => setSelectedTime(time)}
            className={`w-full p-2 rounded-lg border
              ${selectedTime === time ? 'bg-blue-600 border-blue-500 text-white' : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'}`}
          >
            {time}
          </button>
        ))}
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header & Tabs */}
        <div className="text-center mb-16">
          <motion.span initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Contact</motion.span>
          <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} className="text-4xl md:text-5xl font-bold mb-6">Get in touch</motion.h2>
          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a href="mailto:hello@yourmail.com" className="text-xl text-blue-600 hover:underline font-medium">hello@yourmail.com</a>
            <div className="flex gap-4">
              {socials.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition ${s.color}`}>{s.icon}</a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="flex justify-center gap-2 mb-12">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button className={`px-6 py-3 rounded-md text-sm font-medium ${tab==='calendar' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`} onClick={()=>setTab('calendar')}>Schedule Meeting</button>
              <button className={`px-6 py-3 rounded-md text-sm font-medium ${tab==='form' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`} onClick={()=>setTab('form')}>Send Message</button>
            </div>
          </motion.div>
        </div>

        {/* --- CONTACT OR BOOKING FORM --- */}
        <div className="max-w-4xl mx-auto">
          {tab === "form" ? (
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl max-w-2xl mx-auto">
              <form onSubmit={handleContactSubmit} className="space-y-6" aria-label="Contact Form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name <span className="text-red-400">*</span></label>
                    <input
                      id="name" name="name" type="text" autoComplete="name"
                      className={`w-full px-4 py-3 bg-gray-800 border ${errors.name ? "border-red-500" : "border-gray-600"} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500`}
                      value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      aria-invalid={!!errors.name} aria-describedby={errors.name && "name-error"}
                      placeholder="Full Name" required
                    />
                    {errors.name && <div className="text-xs text-red-400 mt-1" id="name-error">{errors.name}</div>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email <span className="text-red-400">*</span></label>
                    <input
                      id="email" name="email" type="email" autoComplete="email"
                      className={`w-full px-4 py-3 bg-gray-800 border ${errors.email ? "border-red-500" : "border-gray-600"} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500`}
                      value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      aria-invalid={!!errors.email} aria-describedby={errors.email && "email-error"}
                      placeholder="name@company.com" required
                    />
                    {errors.email && <div className="text-xs text-red-400 mt-1" id="email-error">{errors.email}</div>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message <span className="text-red-400">*</span></label>
                  <textarea
                    id="message" name="message" rows={6} maxLength={500}
                    className={`w-full px-4 py-3 bg-gray-800 border ${errors.message ? "border-red-500" : "border-gray-600"} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 resize-none`}
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    aria-invalid={!!errors.message} aria-describedby={errors.message && "message-error"}
                    placeholder="How can I help you?" required
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-500">{form.message.length}/500</div>
                  {errors.message && <div className="text-xs text-red-400 mt-1" id="message-error">{errors.message}</div>}
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{scale:1.02}} whileTap={{scale:0.98}}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (<>
                    <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m8-8h-4M6 12H2m15.364-6.364l-2.828 2.828M9.464 9.464L6.636 6.636m12.728 12.728l-2.828-2.828M9.464 14.536l-2.828 2.828"/></svg>
                    <span className="ml-2">Sending...</span>
                  </>) : (<span>Submit</span>)}
                </motion.button>
                {result && result.success && <div className="p-3 mt-3 bg-green-900/30 border border-green-700 rounded-lg text-green-400">{result.success}</div>}
                {result && result.error && <div className="p-3 mt-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400">{result.error}</div>}
              </form>
            </motion.div>
          ) : (
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl max-w-2xl mx-auto">
              {!selectedDate ? (
                <>
                  <h3 className="text-xl font-semibold text-white mb-6">Choose a date for your session</h3>
                  <CalendarGrid />
                </>
              ) : !selectedTime ? (
                <>
                  <h3 className="text-xl font-semibold text-white mb-6">Pick a timeslot for {selectedDate}</h3>
                  <Timeslots />
                  <button type="button" className="mt-4 text-blue-400" onClick={() => setSelectedDate("")}>← Back</button>
                </>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Enter your details</h3>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Name <span className="text-red-400">*</span></label>
                    <input
                      type="text" name="name" required
                      className={`w-full px-4 py-3 bg-gray-800 border ${errors.name ? "border-red-500" : "border-gray-600"} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500`}
                      value={booking.name}
                      onChange={e => setBooking(b => ({ ...b, name: e.target.value }))}
                    />
                    {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email <span className="text-red-400">*</span></label>
                    <input
                      type="email" name="email" required
                      className={`w-full px-4 py-3 bg-gray-800 border ${errors.email ? "border-red-500" : "border-gray-600"} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500`}
                      value={booking.email}
                      onChange={e => setBooking(b => ({ ...b, email: e.target.value }))}
                    />
                    {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Notes</label>
                    <textarea
                      name="notes" rows={3}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 resize-none"
                      value={booking.notes}
                      onChange={e => setBooking(b => ({ ...b, notes: e.target.value }))}
                      placeholder="Anything specific for the meeting?"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => { setSelectedTime(""); }} className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600">Back</button>
                    <motion.button
                      type="submit" disabled={loading}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? "Booking..." : "Confirm Booking"}
                    </motion.button>
                  </div>
                  {result && result.success && <div className="p-3 mt-3 bg-green-900/30 border border-green-700 rounded-lg text-green-400">{result.success}</div>}
                  {result && result.error && <div className="p-3 mt-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400">{result.error}</div>}
                </form>
              )}
            </motion.div>
          )}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 dark:text-green-300 font-medium">Available for new projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
