'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Facebook, Instagram, Youtube, Twitter, ArrowUpRight } from 'lucide-react'

// Authentic SVG for TikTok
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.46V8.78a8.18 8.18 0 0 0 4.91 1.63V7a4.88 4.88 0 0 1-1-.31z" />
  </svg>
)

// Authentic SVG for Snapchat
const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 2c-4.43 0-6.757 3.32-6.757 5.76 0 1.48.51 2.38 1.13 3.16.19.24.28.47.23.75-.08.41-.65 1.05-1.22 1.42-.42.27-.79.52-.79.9 0 .42.44.69 1.15.86.32.08.62.24.8.49.25.35.19.86.13 1.25-.09.6-.26 1.43-.26 1.76 0 .84.81 1.25 1.88 1.25.43 0 .86-.06 1.29-.18.4-.11.75.14.98.44.66.86 1.19.94 1.48.94.28 0 .81-.08 1.47-.94.23-.3.58-.55.98-.44.43.12.86.18 1.29.18 1.07 0 1.88-.41 1.88-1.25 0-.33-.17-1.16-.26-1.76-.06-.39-.12-.9.13-1.25.18-.25.48-.41.8-.49.71-.17 1.15-.44 1.15-.86 0-.38-.37-.63-.79-.9-.57-.37-1.14-1.01-1.22-1.42-.05-.28.04-.51.23-.75.62-.78 1.13-1.68 1.13-3.16 0-2.44-2.327-5.76-6.757-5.76z" />
  </svg>
)

const socialChannels = [
  {
    name: 'Instagram',
    handle: '@milezcomedy',
    badge: '1.2M+ Followers',
    url: 'https://www.instagram.com/milezcomedy?igsh=OXB6cGJoN2hwN2s3&utm_source=qr',
    Icon: Instagram,
  },
  {
    name: 'TikTok',
    handle: '@milezcomedy',
    badge: '1.8M+ Followers',
    url: 'https://www.tiktok.com/@milezcomedy?_r=1&_t=ZN-91Puojy2UfD',
    Icon: TikTokIcon,
  },
  {
    name: 'YouTube',
    handle: '@milezcomedy',
    badge: '500K+ Subscribers',
    url: 'https://youtube.com/@milezcomedy?si=YjkqCVfLos6P6k-I',
    Icon: Youtube,
  },
  {
    name: 'Facebook',
    handle: 'Milez Comedy',
    badge: 'Official Page',
    url: 'https://www.facebook.com/share/1GUmaCNbRH/?mibextid=wwXIfr',
    Icon: Facebook,
  },
  {
    name: 'X (Twitter)',
    handle: '@milezcomedy',
    badge: 'Updates & Banter',
    url: 'https://x.com/milezcomedy?s=21',
    Icon: Twitter,
  },
  {
    name: 'Snapchat',
    handle: 'milezcomedy',
    badge: 'Daily Behind The Scenes',
    url: 'https://www.snapchat.com/add/milezcomedy?share_id=KwCOZAZpSTu4RfgAlygfHw&locale=en_GB',
    Icon: SnapchatIcon,
  },
]

export default function SocialLinks() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="social" ref={ref} className="relative py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/60">
      <div className="max-w-5xl mx-auto">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 inline-block">
            Official Channels
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Connect With <span className="text-primary">Milez</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-lg mx-auto">
            Stay updated across all official streaming and community platforms.
          </p>
        </motion.div>

        {/* Compact, Sleek 2x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {socialChannels.map((channel, index) => {
            const { Icon } = channel
            return (
              <motion.a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/10 cursor-pointer"
              >
                {/* Left: Icon & Info */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-200 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                        {channel.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground block truncate">
                      {channel.handle}
                    </span>
                  </div>
                </div>

                {/* Right: Badge / Follow Link */}
                <div className="flex items-center gap-1 text-xs font-semibold text-primary opacity-80 group-hover:opacity-100 transition-opacity pl-2 shrink-0">
                  <span className="hidden sm:inline text-[11px] font-medium text-muted-foreground/80 group-hover:text-primary">
                    Follow
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
