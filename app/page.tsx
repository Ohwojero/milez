import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import Videos from '@/components/sections/videos'
import Services from '@/components/sections/services'
import SocialLinks from '@/components/sections/social-links'
import Testimonials from '@/components/sections/testimonials'
import Gallery from '@/components/sections/gallery'
import Collaboration from '@/components/sections/collaboration'
import Footer from '@/components/sections/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import BackToTop from '@/components/back-to-top'

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Videos />
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
