'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const whatsappNumber = '2349039335282' // Milez Comedy WhatsApp number

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.a
        href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <MessageCircle size={28} className="text-white" />
        </motion.div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: showTooltip ? 1 : 0,
            x: showTooltip ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background dark:bg-card shadow-lg rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap pointer-events-none"
        >
          Chat on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-background dark:border-l-card" />
        </motion.div>
      </motion.a>
    </motion.div>
  )
}
