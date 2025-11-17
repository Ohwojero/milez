'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Video, Users, TrendingUp, Award, Mic, Camera } from 'lucide-react'

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const services = [
    {
      icon: Video,
      title: 'Content Creation',
      description: 'Crafting viral comedy skits, entertaining videos, and engaging content across multiple platforms.',
      experience: '5+ years',
      backContent: [
        'Viral TikTok skits',
        'YouTube comedy series',
        'Instagram Reels mastery',
        'Cross-platform storytelling'
      ]
    },
    {
      icon: Users,
      title: 'Collaborations',
      description: 'Partnering with brands, influencers, and creators for premium entertainment partnerships.',
      experience: '100+ projects',
      backContent: [
        'Brand partnership deals',
        'Influencer networking',
        'Joint content campaigns',
        'Creative co-productions'
      ]
    },
    {
      icon: Award,
      title: 'Brand Ambassador',
      description: 'Representing brands through authentic storytelling and comedic performances.',
      experience: '50+ campaigns',
      backContent: [
        'Authentic brand representation',
        'Comedy-infused marketing',
        'Audience engagement boost',
        'Long-term partnership success'
      ]
    },
    {
      icon: Mic,
      title: 'Live Performances',
      description: 'Delivering stand-up comedy, live shows, and interactive entertainment experiences.',
      experience: '200+ shows',
      backContent: [
        'Stand-up comedy sets',
        'Live event hosting',
        'Interactive audience engagement',
        'Memorable entertainment experiences'
      ]
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

  const handleCardClick = (idx: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(idx)) {
        newSet.delete(idx)
      } else {
        newSet.add(idx)
      }
      return newSet
    })
  }

  return (
    <section id="services" ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            My <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services backed by years of experience in digital entertainment and comedy
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            const isFlipped = flippedCards.has(idx)
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="h-80 cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={() => handleCardClick(idx)}
              >
                <motion.div
                  className="relative h-full w-full"
                  style={{ transformStyle: 'preserve-3d', transformOrigin: 'center' }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 h-full w-full glass dark:glass-dark rounded-2xl p-6 border border-primary/10 backdrop-blur-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl flex items-center justify-center border border-primary/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-primary">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <div className="mt-4 px-4 py-2 bg-primary/10 rounded-full">
                        <span className="text-sm font-semibold text-primary">
                          {service.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 h-full w-full glass dark:glass-dark rounded-2xl p-6 border border-primary/10 backdrop-blur-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 rounded-2xl flex items-center justify-center border border-accent/20"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-8 h-8 text-accent" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-accent">
                        What I Offer
                      </h3>
                      <ul className="text-foreground/80 leading-relaxed text-sm space-y-2">
                        {service.backContent.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 px-4 py-2 bg-accent/10 rounded-full">
                        <span className="text-sm font-semibold text-accent">
                          {service.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 md:p-12 border border-primary/20 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-foreground/90 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Whether it's content creation, brand partnerships, or live performances, I'm here to bring your vision to life.
            </p>
            <a
              href="#social"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
