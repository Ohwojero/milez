'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, 50)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [text, delay])

  return <span>{displayedText}</span>
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-animated absolute inset-0 opacity-30 dark:opacity-20" />
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#0099FF" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,200 Q300,150 600,200 T1200,200 L1200,800 L0,800 Z"
            fill="url(#wave)"
            animate={{ d: ['M0,200 Q300,150 600,200 T1200,200 L1200,800 L0,800 Z', 'M0,250 Q300,200 600,250 T1200,250 L1200,800 L0,800 Z', 'M0,200 Q300,150 600,200 T1200,200 L1200,800 L0,800 Z'] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Floating Emojis */}
      {['😂', '🎤', '🎭'].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-6xl"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-cyan-500 to-blue-600 rounded-full blur-2xl opacity-75" />
            <div className="absolute inset-2 bg-background rounded-full border-4 border-primary/20 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-indigo-600/30 to-cyan-500/30 flex items-center justify-center text-6xl font-bold text-indigo-600">
                AM
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-balance-custom"
        >
          Milez Comedy
          <span className="block text-xl md:text-2xl text-muted-foreground mt-2">
            Adams Miles Onome (@milezcomedy)
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-primary mb-8 h-8"
        >
          <TypeWriter text="Comedian • Content Creator • Entertainer" delay={800} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="https://www.youtube.com/@milezcomedy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 magnetic-btn inline-block text-center"
          >
            Watch Videos
          </a>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 magnetic-btn">
            Follow on Socials
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown size={32} className="text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
