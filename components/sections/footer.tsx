'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">Milez Comedy</h3>
            <p className="text-muted-foreground">
              Bringing laughter and entertainment worldwide
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors block">
                About
              </a>
              <a href="#videos" className="hover:text-primary transition-colors block">
                Videos
              </a>
              <a href="#social" className="hover:text-primary transition-colors block">
                Follow
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Email: contact@milezcomedy.com
            </p>
            <p className="text-sm text-muted-foreground">
              WhatsApp: Available 24/7
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-px bg-border mb-8 origin-left"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1"
        >
          <span>© {currentYear} Milez Comedy. All rights reserved. Made with</span>
          <Heart size={16} className="fill-accent text-accent" />
        </motion.div>
      </div>
    </footer>
  )
}
