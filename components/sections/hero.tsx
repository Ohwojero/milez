'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Calendar, CheckCircle2, ChevronDown, Sparkles, Youtube, Instagram } from 'lucide-react'

const TypeWriter = ({ words, delay = 100 }: { words: string[]; delay?: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 40 : delay)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, delay])

  return (
    <span className="inline-flex items-center text-primary font-semibold">
      <span>{currentText}</span>
      <span className="w-0.5 h-6 bg-primary ml-1 animate-pulse" />
    </span>
  )
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      const navbar = document.querySelector('nav')
      const offset = navbar ? navbar.offsetHeight : 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle single-color ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">
          {/* Verified Identity Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-medium tracking-wide shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 fill-primary text-background" />
            <span>Official Portfolio of Adams Miles Onome</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold">@milezcomedy</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Bringing Laughter <br />
              <span className="text-primary">To Millions Worldwide</span>
            </h1>

            <div className="text-lg sm:text-2xl font-medium text-muted-foreground h-8 flex items-center justify-center lg:justify-start gap-2">
              <span>Expert in</span>
              <TypeWriter
                words={[
                  'Viral Comedy Skits',
                  'Stand-Up & Hosting',
                  'Creative Storytelling',
                  'Brand Partnerships',
                ]}
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Adams Miles Onome (known globally as <strong className="text-foreground">Milez Comedy</strong>) is one of Africa&apos;s most influential comedy creators, delivering authentic, viral humor and premium entertainment across digital platforms and live stages.
          </motion.p>

          {/* Quick Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 py-3 w-full max-w-lg border-y border-border/80"
          >
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">1.8M+</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Followers</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-foreground">500+</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Viral Skits</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">50M+</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Total Views</p>
            </div>
          </motion.div>

          {/* High-Impact Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={() => scrollTo('#videos')}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2.5 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Watch Viral Skits</span>
            </button>

            <button
              onClick={() => scrollTo('#collaborate')}
              className="px-8 py-4 rounded-xl border-2 border-primary/40 bg-background/50 hover:bg-primary/10 text-foreground hover:text-primary font-semibold flex items-center justify-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>Book for Events & Ads</span>
            </button>
          </motion.div>

          {/* Quick Platform Links with Eye-Catching 3D Animation Effect */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full pt-2"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 [perspective:1000px]">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Follow:
              </span>

              {/* 3D Instagram Badge */}
              <motion.a
                href="https://www.instagram.com/milezcomedy"
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: 1.12,
                  rotateX: -12,
                  rotateY: 8,
                  y: -8,
                  transition: { type: 'spring', stiffness: 400, damping: 15 },
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/60 text-foreground transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_-6px_rgba(123,47,247,0.45)] transform-gpu overflow-hidden cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D Glossy Light Reflection Sheen */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 pointer-events-none" />

                <div className="w-6 h-6 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300 shrink-0">
                  <Instagram className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold group-hover:text-primary transition-colors">Instagram</span>
                  <span className="text-[10px] text-muted-foreground -mt-0.5 font-medium">@milezcomedy</span>
                </div>
              </motion.a>

              {/* 3D YouTube Badge */}
              <motion.a
                href="https://youtube.com/@milezcomedy"
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                whileHover={{
                  scale: 1.12,
                  rotateX: -12,
                  rotateY: -8,
                  y: -8,
                  transition: { type: 'spring', stiffness: 400, damping: 15 },
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/60 text-foreground transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_-6px_rgba(123,47,247,0.45)] transform-gpu overflow-hidden cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D Glossy Light Reflection Sheen */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 pointer-events-none" />

                <div className="w-6 h-6 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300 shrink-0">
                  <Youtube className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold group-hover:text-primary transition-colors">YouTube</span>
                  <span className="text-[10px] text-muted-foreground -mt-0.5 font-medium">@milezcomedy</span>
                </div>
              </motion.a>

              {/* 3D TikTok Badge */}
              <motion.a
                href="https://www.tiktok.com/@milezcomedy"
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.12,
                  rotateX: -12,
                  rotateY: 8,
                  y: -8,
                  transition: { type: 'spring', stiffness: 400, damping: 15 },
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/60 text-foreground transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_-6px_rgba(123,47,247,0.45)] transform-gpu overflow-hidden cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D Glossy Light Reflection Sheen */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 pointer-events-none" />

                <div className="w-6 h-6 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300 shrink-0">
                  {/* Official TikTok Icon SVG */}
                  <svg
                    className="w-3.5 h-3.5 fill-primary group-hover:fill-primary-foreground transition-colors"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.46V8.78a8.18 8.18 0 0 0 4.91 1.63V7a4.88 4.88 0 0 1-1-.31z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold group-hover:text-primary transition-colors">TikTok</span>
                  <span className="text-[10px] text-muted-foreground -mt-0.5 font-medium">@milezcomedy</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Serious Portrait Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Subtle solid primary back aura */}
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform scale-95 -z-10" />

          {/* Portrait Container */}
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-primary/30 shadow-2xl bg-card">
            <Image
              src="/qqq.jpg"
              alt="Adams Miles Onome - Milez Comedy"
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 420px"
            />

            {/* Bottom Gradient overlay on photo for clean readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Lower info overlay on photo */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg text-white">Adams Miles Onome</p>
                  <p className="text-xs text-primary font-medium">Creator • Comedian • Entertainer</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
            </div>

            {/* Floating Top Status Badge */}
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span>Top Nigerian Creator</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator pointing to the Video section */}
      <motion.button
        onClick={() => scrollTo('#videos')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll to videos"
      >
        <span>Watch Skits</span>
        <ChevronDown size={18} className="text-primary" />
      </motion.button>
    </section>
  )
}
