'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Target, Zap } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const stats = [
    { label: 'Followers', value: '1.8M+', icon: Sparkles },
    { label: 'Viral Skits', value: '500+', icon: Zap },
    { label: 'Collaborations', value: '100+', icon: Target },
  ]

  const highlights = [
    {
      title: 'Content Creator',
      description: 'Crafting viral comedy skits and entertaining content across all platforms',
    },
    {
      title: 'Digital Entertainer',
      description: 'Connecting with millions through storytelling, humor, and authentic engagement',
    },
    {
      title: 'Brand Ambassador',
      description: 'Open to collaborations, sponsorships, and premium entertainment partnerships',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }
  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Who is<span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Milez</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet Adams Miles Onome, a multi-talented entertainer revolutionizing digital comedy
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8 backdrop-blur-xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-3">Adams Miles Onome</h3>
              <p className="text-primary font-semibold mb-4">@Milezcomedy</p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                With millions of followers across TikTok, Instagram, YouTube, and beyond, Milez Comedy has become a household name in digital entertainment.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                His unique blend of witty humor, relatable storytelling, and authentic character work has captivated audiences worldwide, making him one of Africa's most influential comedy creators.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="glass dark:glass-dark rounded-xl p-4 text-center border border-primary/10 backdrop-blur-xl"
                  >
                    <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-[url('/qqq.jpg')] hover:bg-[url('/www.jpg')] bg-cover bg-center rounded-2xl min-h-[500px] flex items-center justify-center transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl" />
            {/* Backdrop with Creative Text */}
            <div className="absolute bottom-4 left-4 glass dark:glass-dark rounded-xl p-4 backdrop-blur-xl border border-primary/20">
              <p className="text-white font-bold text-lg">Comedy Maestro</p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass dark:glass-dark rounded-2xl p-8 md:p-12 border border-primary/20 backdrop-blur-xl text-center"
        >
          <p className="text-foreground/90 mb-6">
            From viral skits to premium collaborations, Milez Comedy continues to push boundaries and deliver world-class entertainment that resonates with millions worldwide.
          </p>
          <a
            href="#social"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Follow & Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}
