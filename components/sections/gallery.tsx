'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Lightbulb, Mic, Users, Film, TrendingUp } from 'lucide-react'

const processStages = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'Joke Crafting',
    description: 'Brainstorming hilarious punchlines and relatable scenarios that hit the funny bone',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    icon: Mic,
    title: 'Skit Shooting',
    description: 'Capturing raw comedic energy and authentic character performances on camera',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    icon: Film,
    title: 'Edit Magic',
    description: 'Transforming raw footage into cinematic comedy gold with timing and effects',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    icon: Zap,
    title: 'Punchline Polish',
    description: 'Fine-tuning delivery, reactions, and comedic timing for maximum laughs',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Viral Launch',
    description: 'Strategic release across social platforms to maximize comedy reach and engagement',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    id: 6,
    icon: Users,
    title: 'Fan Laughter',
    description: 'Building a community of comedy lovers through interaction and shared humor',
    color: 'from-rose-500 to-red-500',
  },
]

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="gallery" ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Comedy Creation Chronicles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From punchline to viral sensation: the hilarious journey of crafting comedy gold
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processStages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full group-hover:border-white/40 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stage.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">{stage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{stage.description}</p>

                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stage.color} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Content Pieces', value: '200+' },
            { label: 'Hours of Content', value: '500+' },
            { label: 'Quality Standards', value: '100%' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center group-hover:border-white/40 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
