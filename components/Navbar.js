import Link from 'next/link'
import { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [launching, setLaunching] = useState(false)
  const router = useRouter()

  const handleLaunch = () => {
    if (launching) return
    setLaunching(true)
    setTimeout(() => setLaunching(false), 4000)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Tech', href: '/#data-stack' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md flex items-center justify-between px-6 py-3">
      {/* Left Logo Trigger */}
      <div onClick={handleLaunch} className="relative cursor-pointer">
        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white font-bold">
          SY
        </div>
      </div>

      {/* Rocket animation */}
      {launching && (
        <>
          <motion.img
            src="/rocket.png"
            alt="Rocket"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: '110vw', opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            className="fixed top-20 left-0 w-12 h-12 z-50 pointer-events-none"
          />
          <div className="fixed top-24 left-0 w-full h-1 z-40 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="star animate-star"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Middle Nav Links */}
      <div className="flex space-x-6 text-white text-sm">
        {navItems.map(item => (
          <Link key={item.name} href={item.href}>
            <a
              className={`hover:text-cyan-400 transition ${
                router.pathname === item.href ? 'text-cyan-400' : ''
              }`}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex space-x-4 text-white text-lg">
        <a href="https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Sachin-YN" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  )
}
