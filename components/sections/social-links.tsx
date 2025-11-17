'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Facebook, Instagram, MessageCircle, Share2, Youtube, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/milezcomedy?igsh=OXB6cGJoN2hwN2s3&utm_source=qr',
    color: 'from-purple-600 to-indigo-600',
    handle: '@milezcomedy',
  },
  {
    name: 'TikTok',
    icon: Share2,
    url: 'https://www.tiktok.com/@milezcomedy?_r=1&_t=ZN-91Puojy2UfD',
    color: 'from-gray-900 to-gray-700',
    handle: '@milezcomedy',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@milezcomedy?si=YjkqCVfLos6P6k-I',
    color: 'from-rose-600 to-red-700',
    handle: '@milezcomedy',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/share/1GUmaCNbRH/?mibextid=wwXIfr',
    color: 'from-blue-700 to-indigo-700',
    handle: 'Milez Comedy',
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    url: 'https://x.com/milezcomedy?s=21',
    color: 'from-slate-900 to-gray-800',
    handle: '@milezcomedy',
  },
  {
    name: 'Snapchat',
    icon: MessageCircle,
    url: 'https://www.snapchat.com/add/milezcomedy?share_id=KwCOZAZpSTu4RfgAlygfHw&locale=en_GB',
    color: 'from-amber-300 to-yellow-400',
    handle: '@milezcomedy',
  },
]

export default function SocialLinks() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="social" ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect With Me</h2>
          <p className="text-lg text-muted-foreground">Follow across all platforms</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateZ: 2,
                }}
                className="group"
              >
                <div className="glass dark:glass-dark rounded-2xl p-8 border border-primary/20 h-full flex flex-col justify-center items-center text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className={`bg-gradient-to-br ${social.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{social.handle}</p>
                  <span className="text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Follow Now →
                  </span>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
