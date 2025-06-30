// components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
      <ul className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Site nav */}
        <div className="flex space-x-6">
          <Link href="/" className="text-neon-blue hover:underline">
            Home
          </Link>
          <Link href="/projects" className="text-neon-blue hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="text-neon-blue hover:underline">
            Contact
          </Link>
        </div>
        {/* Social */}
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/ing-sachin-yoganandham"
            className="text-neon-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sachin-YN"
            className="text-neon-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </ul>
    </nav>
  )
}
