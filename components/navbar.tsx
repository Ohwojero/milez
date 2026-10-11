'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Videos', href: '#videos' },
    { label: 'Services', href: '#services' },
    { label: 'Socials', href: '#social' },
    { label: 'Collaborate', href: '#collaborate' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const navbar = document.querySelector('nav')
        const navbarHeight = navbar ? navbar.offsetHeight : 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/85 dark:bg-card/85 backdrop-blur-md border-b border-border/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-extrabold text-lg shadow-sm">
            M
          </div>
          <div>
            <span className="text-xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
              Milez Comedy
            </span>
            <span className="block text-[10px] text-muted-foreground font-medium -mt-1">
              Adams Miles Onome
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-7 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center gap-3">
          {/* Quick Book CTA on Desktop */}
          <button
            onClick={() => handleNavClick('#collaborate')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-sm hover:bg-primary/90 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-muted/60 hover:bg-muted text-foreground transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-primary" />
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted text-foreground transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-card/95 border-b border-border"
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-left w-full cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('#collaborate')}
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center cursor-pointer"
            >
              Book for Events &amp; Ads
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
