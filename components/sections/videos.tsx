'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Eye, Clock, X, ExternalLink, Youtube, Sparkles } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: 'viral' | 'shorts' | 'specials'
  views: string
  duration: string
  platform: 'YouTube' | 'TikTok' | 'Instagram'
  youtubeId?: string
  thumbnailUrl: string
  description: string
}

const videoData: VideoItem[] = [
  {
    id: '1',
    title: 'When Your Village People Follow You To The City',
    category: 'viral',
    views: '1.4M views',
    duration: '2:48',
    platform: 'YouTube',
    youtubeId: 'dQw4w9WgXcQ', // Can be updated with Milez's exact YouTube skit ID
    thumbnailUrl: '/qqq.jpg',
    description: 'Milez navigates a hilarious encounter when bad luck meets unexpected comic twists in this viral hit.',
  },
  {
    id: '2',
    title: 'African Parents When You Try To Explain Modern Tech',
    category: 'viral',
    views: '980K views',
    duration: '1:55',
    platform: 'YouTube',
    youtubeId: 'L_LUpnjgPso',
    thumbnailUrl: '/www.jpg',
    description: 'Relatable family banter where asking for Wi-Fi password turns into a 2-hour lecture on life morals.',
  },
  {
    id: '3',
    title: 'The Over-Sabi Housemate: Rent Due Edition',
    category: 'shorts',
    views: '2.1M views',
    duration: '0:58',
    platform: 'TikTok',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnailUrl: '/qqq.jpg',
    description: 'When living with an over-dramatic roommate reaches peak hilarity on rent collection day.',
  },
  {
    id: '4',
    title: 'First Date on a Tight Budget: Lagos Restaurant Chronicles',
    category: 'viral',
    views: '1.1M views',
    duration: '3:15',
    platform: 'YouTube',
    youtubeId: 'L_LUpnjgPso',
    thumbnailUrl: '/www.jpg',
    description: 'Calculators come out under the table as the date orders items not on the regular menu.',
  },
  {
    id: '5',
    title: 'Strict Lecturer vs Final Year Project Defense',
    category: 'specials',
    views: '850K views',
    duration: '4:10',
    platform: 'YouTube',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnailUrl: '/qqq.jpg',
    description: 'Unprepared student faces the ultimate academic interrogation in this fan-favorite skit.',
  },
  {
    id: '6',
    title: 'Nightclub Bouncer With Zero Patience',
    category: 'shorts',
    views: '1.7M views',
    duration: '0:45',
    platform: 'TikTok',
    youtubeId: 'L_LUpnjgPso',
    thumbnailUrl: '/www.jpg',
    description: 'Milez plays the stern security guard who refuses entry to everyone with hilariously petty reasons.',
  },
]

export default function Videos() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'viral' | 'shorts' | 'specials'>('all')
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null)

  const filteredVideos =
    activeFilter === 'all' ? videoData : videoData.filter((v) => v.category === activeFilter)

  return (
    <section id="videos" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Comedy Releases</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Watch <span className="text-primary">Milez Comedy</span> In Action
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg">
            Stream the most popular viral skits, character sketches, and laugh-out-loud comedy directly from YouTube &amp; TikTok.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { label: 'All Skits', value: 'all' },
              { label: 'Viral Hits', value: 'viral' },
              { label: 'Shorts & Reels', value: 'shorts' },
              { label: 'Specials & Sketches', value: 'specials' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value as typeof activeFilter)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col cursor-pointer"
                onClick={() => setActiveModalVideo(video)}
              >
                {/* Thumbnail Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Top Platform Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1.5">
                    <Youtube className="w-3.5 h-3.5 text-primary" />
                    <span>{video.platform}</span>
                  </div>

                  {/* Bottom Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-white text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mb-1.5">
                      <span className="flex items-center gap-1 text-primary font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        {video.views}
                      </span>
                      <span>•</span>
                      <span className="capitalize">{video.category}</span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Watch Now</span>
                    <Play className="w-3.5 h-3.5 fill-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Channel Banner Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-card border border-primary/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Want more hilarious skits &amp; comedy episodes?
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to the official YouTube channel and never miss a weekly comedy drop.
            </p>
          </div>

          <a
            href="https://youtube.com/@milezcomedy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-md shrink-0"
          >
            <Youtube className="w-5 h-5 fill-current" />
            <span>Visit @milezcomedy on YouTube</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeModalVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-card/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <h4 className="font-bold text-sm sm:text-base text-foreground truncate max-w-md sm:max-w-xl">
                    {activeModalVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player (Responsive aspect-video) */}
              <div className="relative aspect-video w-full bg-black">
                {activeModalVideo.youtubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeModalVideo.youtubeId}?autoplay=1`}
                    title={activeModalVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span>Preview video player</span>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card">
                <div>
                  <p className="text-xs text-muted-foreground">
                    {activeModalVideo.views} • {activeModalVideo.duration} • {activeModalVideo.platform}
                  </p>
                  <p className="text-sm text-foreground mt-1 max-w-xl">
                    {activeModalVideo.description}
                  </p>
                </div>
                <a
                  href={`https://youtube.com/@milezcomedy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors shrink-0"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
