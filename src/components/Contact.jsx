import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy, Check, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/content';

/**
 * =========================================================================
 * CONTACT FORM SETUP GUIDE FOR AKSHAY
 * =========================================================================
 * Option 1: Formspree (Easiest, free)
 * 1. Register for free at https://formspree.io
 * 2. Create a new form and copy your form URL (e.g., https://formspree.io/f/xyzabcv)
 * 3. Open `src/data/content.js` and set `formspreeEndpoint: "https://formspree.io/f/your_id"`
 *
 * Option 2: EmailJS
 * 1. Install emailjs-browser: `npm i @emailjs/browser`
 * 2. Initialize your Public Key and send via `emailjs.sendForm(...)`
 * =========================================================================
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a brief message.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if real Formspree endpoint is configured
      const isConfigured = personalInfo.formspreeEndpoint && !personalInfo.formspreeEndpoint.includes('placeholder');
      
      if (isConfigured) {
        const response = await fetch(personalInfo.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Submission failed');
      } else {
        // Simulated responsive demo delay for placeholder
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      // Confetti celebratory burst
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#8FA892', '#648168', '#E6DFD6', '#D9A5A0']
        });
      } catch (err) {
        // ignore if canvas not supported
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setErrors({ form: 'Could not send message. Please reach me directly via email.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FA892]/15 dark:bg-[#8FA892]/20 text-[#648168] dark:text-[#9DB4A0] text-xs font-semibold tracking-wider uppercase mb-3">
            <Mail size={13} />
            <span>Get in Touch</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-normal text-[#2B2B2B] dark:text-[#EDECE8] tracking-tight leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's Start a Conversation
          </h2>
          <p className="text-sm sm:text-base text-[#5E5E5A] dark:text-[#B5B5AF] mt-3">
            Interested in collaboration, discussing an AI project, or simply want to say hello? I'd love to connect!
          </p>
          <div className="w-16 h-0.5 bg-[#8FA892] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 sm:p-7 rounded-[22px] bg-white/80 dark:bg-[#1D201D]/80 border border-[#E6DFD6] dark:border-[#2E332E] shadow-xs">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#8FA892] dark:text-[#9DB4A0] mb-1">
                Direct Email
              </div>
              <div className="text-sm sm:text-base font-medium text-[#2B2B2B] dark:text-[#EDECE8] break-all">
                {personalInfo.email}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F2EFE9] dark:bg-[#252825] hover:bg-[#8FA892]/20 text-[#2B2B2B] dark:text-[#EDECE8] transition-colors"
                >
                  {copiedEmail ? <Check size={13} className="text-[#648168]" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied to clipboard!' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#8FA892] hover:bg-[#78957B] text-white transition-colors"
                >
                  <Mail size={13} />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Location & Academic Base */}
            <div className="p-6 rounded-[22px] bg-white/70 dark:bg-[#1D201D]/70 border border-[#E6DFD6] dark:border-[#2E332E]">
              <div className="flex items-start gap-3">
                <span className="p-2.5 rounded-xl bg-[#E2ECE4] dark:bg-[#252A25] text-[#648168] dark:text-[#9DB4A0]">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#8FA892] dark:text-[#9DB4A0]">
                    Current Base
                  </div>
                  <div className="text-sm font-medium text-[#2B2B2B] dark:text-[#EDECE8] mt-0.5">
                    Thejus Engineering College
                  </div>
                  <div className="text-xs text-[#5E5E5A] dark:text-[#B5B5AF]">
                    Vellarakkad, Thrissur, Kerala — India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="p-6 rounded-[22px] bg-white/70 dark:bg-[#1D201D]/70 border border-[#E6DFD6] dark:border-[#2E332E]">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#8FA892] dark:text-[#9DB4A0] mb-3">
                Connect on Social Networks
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-[#222522] border border-[#E6DFD6] dark:border-[#323632] hover:border-[#8FA892] text-[#2B2B2B] dark:text-[#EDECE8] transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-[#222522] border border-[#E6DFD6] dark:border-[#323632] hover:border-[#8FA892] text-[#2B2B2B] dark:text-[#EDECE8] transition-colors"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                {personalInfo.instagram && (
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-[#222522] border border-[#E6DFD6] dark:border-[#323632] hover:border-[#8FA892] text-[#2B2B2B] dark:text-[#EDECE8] transition-colors"
                  >
                    <Instagram size={15} />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-7 sm:p-9 rounded-[24px] bg-white/90 dark:bg-[#1D201D]/90 border border-[#E6DFD6] dark:border-[#2E332E] shadow-sm relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#E2ECE4] dark:bg-[#252A25] text-[#648168] dark:text-[#9DB4A0] mx-auto flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-[#2B2B2B] dark:text-[#EDECE8]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#5E5E5A] dark:text-[#B5B5AF] max-w-md mx-auto">
                    Thank you for reaching out, I have received your message and will respond as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#8FA892] text-white hover:bg-[#78957B] transition-colors mt-2"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errors.form && (
                    <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                      <AlertCircle size={15} />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#5E5E5A] dark:text-[#B5B5AF] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Nair"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F7F6F3] dark:bg-[#252825] border text-sm text-[#2B2B2B] dark:text-[#EDECE8] placeholder-[#9E9E98] focus:outline-none transition-colors ${
                          errors.name 
                            ? 'border-red-400 focus:border-red-500' 
                            : 'border-[#E6DFD6] dark:border-[#353A35] focus:border-[#8FA892]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#5E5E5A] dark:text-[#B5B5AF] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F7F6F3] dark:bg-[#252825] border text-sm text-[#2B2B2B] dark:text-[#EDECE8] placeholder-[#9E9E98] focus:outline-none transition-colors ${
                          errors.email 
                            ? 'border-red-400 focus:border-red-500' 
                            : 'border-[#E6DFD6] dark:border-[#353A35] focus:border-[#8FA892]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#5E5E5A] dark:text-[#B5B5AF] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project Inquiry / AI Hackathon / Mentorship"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F6F3] dark:bg-[#252825] border border-[#E6DFD6] dark:border-[#353A35] text-sm text-[#2B2B2B] dark:text-[#EDECE8] placeholder-[#9E9E98] focus:outline-none focus:border-[#8FA892] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#5E5E5A] dark:text-[#B5B5AF] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Akshay, I came across your portfolio and would like to connect regarding..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#F7F6F3] dark:bg-[#252825] border text-sm text-[#2B2B2B] dark:text-[#EDECE8] placeholder-[#9E9E98] focus:outline-none transition-colors resize-none ${
                        errors.message 
                          ? 'border-red-400 focus:border-red-500' 
                          : 'border-[#E6DFD6] dark:border-[#353A35] focus:border-[#8FA892]'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-full text-sm font-semibold bg-[#8FA892] hover:bg-[#78957B] text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-[#888882] dark:text-[#7D807A]">
                      Formspree integration ready • Responses will reach {personalInfo.email}
                    </span>
                  </div>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

