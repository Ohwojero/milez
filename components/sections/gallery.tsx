'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Video, Scissors, Music, Share2, MessageSquare, Sparkles } from 'lucide-react'

const stages = [
  {
    step: '01',
    title: 'Concept & Punchline',
    tag: 'Ideation',
    description: 'Transforming everyday relatable African moments and hilarious realities into gold punchlines.',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'Character Immersion',
    tag: 'Acting Range',
    description: 'Embodying distinct personas—the strict lecturer, stubborn roommate, and the street-smart friend.',
    icon: Video,
  },
  {
    step: '03',
    title: 'Skit Shooting',
    tag: 'Production',
    description: 'Capturing raw comedic energy on camera with signature facial expressions and improvised timing.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Sound FX & Timing',
    tag: 'Post-Production',
    description: 'Precision editing, comedic sound drops, and reaction pauses calibrated for maximum laughter.',
    icon: Music,
  },
  {
    step: '05',
    title: 'Viral Distribution',
    tag: 'Launch',
    description: 'Synchronized cross-platform release optimized for TikTok, Instagram Reels, and YouTube Shorts.',
    icon: Share2,
  },
  {
    step: '06',
    title: 'Community Banter',
    tag: 'Fan Engagement',
    description: 'Connecting directly with millions of fans in the comment section and igniting viral trends.',
    icon: MessageSquare,
  },
]

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="gallery" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 inline-block">
            Behind The Scenes
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
            Comedy Creation <span className="text-primary">Chronicles</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl mx-auto">
            The 6-stage creative pipeline behind every viral skit and memorable comedy moment.
          </p>
        </motion.div>

        {/* 6-Stage Process Grid - Compact, Sleek & Sequential */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative bg-card border border-border hover:border-primary/50 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/10 flex flex-col justify-between"
              >
                {/* Top Row: Icon + Step Pill */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                        STAGE
                      </span>
                      <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-muted text-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        {stage.step}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-1">
                    {stage.tag}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Bottom subtle progress line */}
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-medium">Step {index + 1} of 6</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Compact Integrated Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-5 sm:p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-around gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-border"
        >
          <div className="w-full sm:w-auto px-4 py-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-primary">500+</p>
            <p className="text-xs text-muted-foreground font-medium mt-0.5">Original Comedy Skits</p>
          </div>
          <div className="w-full sm:w-auto px-4 py-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-foreground">50M+</p>
            <p className="text-xs text-muted-foreground font-medium mt-0.5">Organic Content Views</p>
          </div>
          <div className="w-full sm:w-auto px-4 py-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-primary">100%</p>
            <p className="text-xs text-muted-foreground font-medium mt-0.5">Viral Consistency</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
