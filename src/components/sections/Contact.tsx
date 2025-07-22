import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  selectedDate?: string;
  selectedTime?: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
    selectedDate: '',
    selectedTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setForm({ name: '', email: '', message: '', selectedDate: '', selectedTime: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://linkedin.com/in/dhruba',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      href: 'https://github.com/dhruba',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: 'https://twitter.com/dhruba',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              Contact
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Get in touch
          </motion.h2>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
          >
            <a 
              href="mailto:hello@dhruba.dev" 
              className="text-xl text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              hello@dhruba.dev
            </a>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Tab Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('calendar')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'calendar'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Schedule Meeting
              </button>
              <button
                onClick={() => setActiveTab('form')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'form'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Send Message
              </button>
            </div>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'calendar' ? (
            /* Calendar Booking Section */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
            >
              <div className="grid lg:grid-cols-5 min-h-[600px]">
                {/* Left Sidebar - Meeting Details */}
                <div className="lg:col-span-2 bg-gray-800 dark:bg-gray-700 p-8 flex flex-col">
                  {/* Profile Section */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">DD</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Dhruba Datta</h3>
                    </div>
                  </div>

                  {/* Meeting Details */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-6">30 Min Meeting</h2>
                    
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Requires confirmation</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>30m</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Google Meet</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                        <span>Asia/Dhaka</span>
                      </div>
                    </div>

                    {/* Selected Date/Time Display */}
                    {form.selectedDate && (
                      <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-gray-600">
                        <div className="flex items-center gap-2 text-white mb-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">{form.selectedDate}</span>
                        </div>
                        {form.selectedTime && (
                          <div className="text-gray-300 text-sm">
                            {form.selectedTime}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side - Calendar or Form */}
                <div className="lg:col-span-3 bg-gray-900 dark:bg-gray-800 p-8">
                  {!form.selectedDate ? (
                    /* Calendar View */
                    <div>
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-white">July 2025</h3>
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1 mb-6">
                        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                          <div key={day} className="text-center text-sm font-medium text-gray-400 py-3">
                            {day}
                          </div>
                        ))}
                        {Array.from({ length: 35 }, (_, i) => {
                          const date = i - 5; // Start from some offset
                          const isCurrentMonth = date > 0 && date <= 31;
                          const isAvailable = isCurrentMonth && [11, 22, 24, 25, 28, 29, 30, 31].includes(date);
                          const isToday = date === 22;
                          
                          return (
                            <button
                              key={i}
                              onClick={() => {
                                if (isCurrentMonth && isAvailable) {
                                  setForm(prev => ({ ...prev, selectedDate: `Thursday, July ${date}, 2025` }));
                                }
                              }}
                              className={`aspect-square text-sm rounded-lg transition-all duration-200 relative ${
                                !isCurrentMonth 
                                  ? 'text-gray-600 cursor-default'
                                  : isAvailable
                                    ? 'text-white hover:bg-gray-700 cursor-pointer'
                                    : 'text-gray-500 cursor-default'
                              } ${date === 24 ? 'bg-white text-gray-900 font-semibold' : ''}`}
                              disabled={!isCurrentMonth || !isAvailable}
                            >
                              {isCurrentMonth ? date : ''}
                              {isToday && <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>}
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Selection for Selected Date */}
                      {form.selectedDate && (
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <h4 className="text-white font-medium">Thu 24</h4>
                            <div className="flex gap-2">
                              <button className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded">12h</button>
                              <button className="px-3 py-1 text-sm text-gray-400 rounded">24h</button>
                            </div>
                          </div>
                          
                          <div className="max-h-64 overflow-y-auto space-y-2">
                            {[
                              '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm', 
                              '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm'
                            ].map((time) => (
                              <button
                                key={time}
                                onClick={() => setForm(prev => ({ ...prev, selectedTime: time }))}
                                className={`w-full p-3 text-left rounded-lg border transition-colors ${
                                  form.selectedTime === time
                                    ? 'bg-blue-600 border-blue-500 text-white'
                                    : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Booking Form */
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-6">Schedule Appointment</h3>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              Your name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Full Name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              Email address <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="name@company.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              Additional notes
                            </label>
                            <textarea
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              rows={4}
                              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                              placeholder="Please share anything that will help prepare for our meeting."
                            />
                          </div>

                          <div>
                            <button
                              type="button"
                              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              Add guests
                            </button>
                          </div>
                        </div>

                        {/* Terms */}
                        <div className="text-sm text-gray-400">
                          By proceeding, you agree to our{' '}
                          <a href="#" className="text-blue-400 hover:underline">Terms</a>
                          {' '}and{' '}
                          <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
                        </div>

                        {/* Form Actions */}
                        <div className="flex gap-3 pt-4">
                          <button
                            type="button"
                            onClick={() => setForm(prev => ({ ...prev, selectedDate: '', selectedTime: '' }))}
                            className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            Back
                          </button>
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m8-8h-4M6 12H2m15.364-6.364l-2.828 2.828M9.464 9.464L6.636 6.636m12.728 12.728l-2.828-2.828M9.464 14.536l-2.828 2.828" />
                                </svg>
                                <span>Confirming...</span>
                              </>
                            ) : (
                              <span>Confirm</span>
                            )}
                          </motion.button>
                        </div>

                        {submitStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-green-900/30 border border-green-700 rounded-lg"
                          >
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-green-400 font-medium">
                                Meeting request sent! I'll confirm your appointment via email.
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Contact Form Section */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl max-w-2xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Please describe your project or inquiry..."
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                      {form.message.length}/500
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m8-8h-4M6 12H2m15.364-6.364l-2.828 2.828M9.464 9.464L6.636 6.636m12.728 12.728l-2.828-2.828M9.464 14.536l-2.828 2.828" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Submit</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-900/30 border border-green-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-400 font-medium">
                        Message sent successfully. You will receive a response within 24 hours.
                      </span>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          )}
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 dark:text-green-300 font-medium">
              🟢 Available for new projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
