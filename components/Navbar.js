// components/Navbar.js
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur-sm">
      {/* Logo Section */}
      <Link href="/">
        <a
          className="group relative w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-bold cursor-pointer overflow-hidden"
          aria-label="Sachin Yoganandham Logo"
        >
          {/* SY Default */}
          <span className="absolute transition-opacity duration-300 group-hover:opacity-0">
            SY
          </span>

          {/* Binary Hover */}
          <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs px-2 text-green-400 font-mono">
            01010011&nbsp;01011001
          </span>
        </a>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-white text-sm font-medium">
        <Link href="/">
          <a className="hover:text-cyan-400 transition">Home</a>
        </Link>
        <Link href="/projects">
          <a className="hover:text-cyan-400 transition">Projects</a>
        </Link>
        <Link href="#contact">
          <a className="hover:text-cyan-400 transition">Contact</a>
        </Link>

        {/* Socials */}
        <a
          href="https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.98 0h4.79v2.17h.07c.67-1.26 2.29-2.59 4.72-2.59 5.04 0 5.97 3.32 5.97 7.63V24h-5v-7.4c0-1.77-.03-4.06-2.48-4.06-2.48 0-2.86 1.94-2.86 3.93V24h-5V8z" />
          </svg>
        </a>
        <a
          href="https://github.com/Sachin-YN"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.8-1.4-3.8-1.4-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.9-1.7-2.5-.3-5.1-1.3-5.1-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3.9-.2 1.8-.3 2.8-.3s1.9.1 2.8.3c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.3.7.8 1.2 1.9 1.2 3.1 0 4.7-2.6 5.6-5.1 5.9.5.4 1 .9 1 .7v3.3c0 .3.2.7.8.6C20.7 21.4 24 17.1 24 12 24 5.7 18.8.5 12 .5z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
