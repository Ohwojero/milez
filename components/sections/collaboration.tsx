'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, MessageCircle, Briefcase, Clock } from 'lucide-react'

export default function Collaboration() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
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
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const benefits = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Direct Response',
      description: 'Quick turnaround on inquiries and proposals',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Professional Services',
      description: 'Sponsorships, collaborations & brand partnerships',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Timeline',
      description: 'Customized scheduling for your project needs',
    },
  ]

  return (
    <section
      id="collaborate"
      ref={ref}
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Ready to Create Together?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Whether it's a brand collaboration, sponsorship opportunity, or booking inquiry, we're ready to explore possibilities and create something impactful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass dark:glass-dark rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-indigo-600 dark:text-cyan-400">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass dark:glass-dark rounded-3xl p-8 md:p-12 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl shadow-indigo-600/5 dark:shadow-cyan-500/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="relative" whileHover={{ y: -2 }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600/20 transition-all duration-300 peer text-foreground placeholder-shown:bg-background/30"
                />
                <label className="absolute left-5 top-4 text-muted-foreground text-sm pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs transition-all duration-300">
                  Full Name
                </label>
              </motion.div>

              <motion.div className="relative" whileHover={{ y: -2 }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600/20 transition-all duration-300 peer text-foreground placeholder-shown:bg-background/30"
                />
                <label className="absolute left-5 top-4 text-muted-foreground text-sm pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs transition-all duration-300">
                  Email Address
                </label>
              </motion.div>
            </div>

            <motion.div className="relative" whileHover={{ y: -2 }}>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder=" "
                className="w-full px-5 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600/20 transition-all duration-300 peer text-foreground placeholder-shown:bg-background/30"
              />
              <label className="absolute left-5 top-4 text-muted-foreground text-sm pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs transition-all duration-300">
                Company / Brand (Optional)
              </label>
            </motion.div>

            <motion.div className="relative" whileHover={{ y: -2 }}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
                rows={6}
                className="w-full px-5 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600/20 transition-all duration-300 peer resize-none text-foreground placeholder-shown:bg-background/30"
              />
              <label className="absolute left-5 top-4 text-muted-foreground text-sm pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs transition-all duration-300">
                Tell us about your project or inquiry
              </label>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-indigo-600/30 transition-all duration-300"
            >
              {submitted ? (
                <span>Message Received! We'll be in touch soon.</span>
              ) : (
                <>
                  Send Inquiry
                  <Send size={18} />
                </>
              )}
            </motion.button>

            <p className="text-center text-sm text-muted-foreground">
              Expected response time: 24-48 business hours
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
