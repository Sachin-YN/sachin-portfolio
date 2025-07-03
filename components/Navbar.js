import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import LogoRocket from './LogoRocket'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" passHref>
          <a aria-label="Home" className="flex items-center space-x-2">
            <LogoRocket />
          </a>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link href="/" passHref>
            <a className="hover:text-cyan-400 transition">Home</a>
          </Link>
          <Link href="/projects" passHref>
            <a className="hover:text-cyan-400 transition">Projects</a>
          </Link>
          <Link href="#data-stack" passHref>
            <a className="hover:text-cyan-400 transition">Tech</a>
          </Link>
          <Link href="#contact" passHref>
            <a className="hover:text-cyan-400 transition">Contact</a>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Sachin-YN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}
