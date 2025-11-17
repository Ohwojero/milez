'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import SocialLinks from '@/components/sections/social-links'
import Testimonials from '@/components/sections/testimonials'
import Gallery from '@/components/sections/gallery'
import Collaboration from '@/components/sections/collaboration'
import Footer from '@/components/sections/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import BackToTop from '@/components/back-to-top'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SocialLinks />
        <Testimonials />
        <Gallery />
        <Collaboration />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
