// components/LogoRocket.js
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LogoRocket() {
  const [launched, setLaunched] = useState(false)

  return (
    <div
      className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden cursor-pointer group"
      onMouseEnter={() => setLaunched(true)}
      onAnimationEnd={() => setLaunched(false)}
    >
      {/* Static SY initials when not launched */}
      <AnimatePresence>
        {!launched && (
          <motion.span
            className="text-white font-bold z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            SY
          </motion.span>
        )}
      </AnimatePresence>

      {/* Rocket SVG launching */}
      <AnimatePresence>
        {launched && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.5 }}
            animate={{ y: -40, opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 0L38 20H26L32 0Z" fill="#00D1FF" />
              <path d="M26 20L24 30H40L38 20H26Z" fill="#0EA5E9" />
              <path d="M28 30L24 40H40L36 30H28Z" fill="#0369A1" />
              <circle cx="32" cy="48" r="3" fill="#FBBF24">
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
