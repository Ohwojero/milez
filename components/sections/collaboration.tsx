'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react'

import { collaborationTypes, serviceOptions } from '@/lib/collaboration-data'

export default function Collaboration() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [selectedService, setSelectedService] = useState(serviceOptions[0])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 4000)
  }

  const whatsappNumber = '2349039335282'

  return (
    <section
      id="collaborate"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/60 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>Open for Bookings &amp; Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Ready to Create <span className="text-primary">Together?</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Partner with Milez Comedy for high-impact branded entertainment, viral social campaigns, and charismatic live event hosting.
          </p>
        </motion.div>

        {/* 3D Interactive Collaboration Offering Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16 [perspective:1000px]">
          {collaborationTypes.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  rotateX: 4,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 350, damping: 18 },
                }}
                className="group relative bg-card border border-border hover:border-primary/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/15 transform-gpu cursor-default"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Subtle top glow bar */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-500" />

                <div>
                  {/* Card Header: Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-border">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground/85">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* The Professional Inquiry Hub Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card border border-border hover:border-primary/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/5 dark:shadow-black/20"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center sm:text-left mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Submit a Booking or Collaboration Brief
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Fill out the details below. Our team reviews all requests within 24 hours.
              </p>
            </div>

            {/* Service Type Selection Pills */}
            <div className="mb-8">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                Select Service of Interest:
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedService(opt)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      selectedService === opt
                        ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                        : 'bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    Your Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tunde Adebayo"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground/60"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. tunde@brand.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-foreground block mb-1.5">
                  Company / Brand Name <span className="text-muted-foreground text-[11px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Pulse Media / Guinness / Flutterwave"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground/60"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-foreground block mb-1.5">
                  Project Brief &amp; Timeline <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your campaign goals, event date, target deliverable, or budget range..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground/60 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:bg-primary/95 transition-all text-sm cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-2 text-white font-bold"
                    >
                      <ShieldCheck className="w-5 h-5" />
                      <span>Inquiry Sent! Milez&apos;s team will respond within 24 hours.</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-2"
                    >
                      <span>Send Collaboration Proposal</span>
                      <Send size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>

            {/* Direct WhatsApp Instant Route */}
            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Verified Official Management Channel</span>
              </span>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hello Milez Comedy Team, I am reaching out to inquire regarding: ${selectedService}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-bold text-primary hover:underline cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>Prefer WhatsApp? Chat Directly with Booking Desk &rarr;</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
