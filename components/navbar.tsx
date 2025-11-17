'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Menu, X, Moon, Sun } from 'lucide-react'

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
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Social', href: '#social' },
    { label: 'Collaborate', href: '#collaborate' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass dark:glass-dark backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Milez Comedy
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle + Menu */}
        <div className="flex items-center gap-4">
          {mounted && (
            <motion.button
              whileHover={{ rotate: 20 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-secondary" />
              ) : (
                <Moon size={20} className="text-primary" />
              )}
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-4 space-y-2 bg-background/80">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
