// components/Navbar.js
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <a className="group relative flex items-center">
            <motion.div
              className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center text-white font-bold"
              whileHover={{ scale: 1.2 }}
            >
              SY
            </motion.div>
            <motion.span
              className="absolute left-full ml-3 whitespace-nowrap text-white opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              Sachin Yoganandham
            </motion.span>
          </a>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" passHref>
                <a className="text-white hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects" passHref>
                <a className="text-white hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <a className="text-white hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ing-sachin-yoganandham-a06b88117"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity text-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sachin-YN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity text-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
