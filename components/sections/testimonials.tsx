'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const testimonials = [
  {
    name: 'Chioma Obi',
    handle: '@chioma_obi',
    text: 'Milez Comedy never fails to make me laugh! His skits are so relatable and well-executed.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Tunde Adeyemi',
    handle: '@tunde_adey',
    text: 'The creativity and energy in every video is unmatched. A true entertainer!',
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    name: 'Zainab Hassan',
    handle: '@zainab_hassan',
    text: 'I recommend Milez Comedy to everyone. His humor brings people together.',
    rating: 4,
    avatar: '👩‍🎤',
  },
  {
    name: 'Chukwu Ebube',
    handle: '@chukwu_ebube',
    text: 'From laughs to life lessons, Milez delivers premium entertainment every time.',
    rating: 5,
    avatar: '👨‍🎬',
  },
  {
    name: 'Amara Okonkwo',
    handle: '@amara_okonkwo',
    text: 'The production quality and comedic timing are absolutely incredible!',
    rating: 5,
    avatar: '👩‍🎨',
  },
  {
    name: 'Kwame Mensah',
    handle: '@kwame_mensah',
    text: 'Watching Milez Comedy has become part of my daily routine. Absolutely brilliant!',
    rating: 4,
    avatar: '👨‍⚕️',
  },
  {
    name: 'Grace Okafor',
    handle: '@grace_okafor',
    text: 'The diversity of content is amazing. There is something for everyone!',
    rating: 5,
    avatar: '👩‍⚖️',
  },
  {
    name: 'David Okoro',
    handle: '@david_okoro',
    text: 'A true master of his craft. Consistently delivering viral-worthy content.',
    rating: 5,
    avatar: '👨‍🚀',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="testimonials" ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            What Fans Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the impact of Milez Comedy through authentic fan experiences
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -12,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group h-full perspective-1000"
                >
                  <div className="glass dark:glass-dark rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-600/20 dark:hover:shadow-cyan-500/20 transform-gpu">
                    {/* Quote icon with glow effect */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="relative"
                    >
                      <Quote className="w-6 h-6 text-indigo-600/60 dark:text-cyan-400/60 mb-3 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-indigo-600/20 dark:bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Stars with enhanced animation */}
                    <div className="flex gap-1 mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                          >
                            <Star
                              size={16}
                              className={`${
                                i < testimonial.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300 dark:text-gray-600'
                              } transition-all duration-300 group-hover:scale-110`}
                            />
                          </motion.div>
                        ))}
                    </div>

                    {/* Testimonial text with enhanced typography */}
                    <p className="text-foreground mb-6 leading-relaxed flex-1 text-base group-hover:text-foreground/90 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>

                    {/* User info with avatar animation */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-3xl relative"
                      >
                        {testimonial.avatar}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  )
}
