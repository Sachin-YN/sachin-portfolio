// components/Navbar.js
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" passHref>
          <a className="text-2xl font-bold text-white hover:text-[#00ffff] transition">
            Sachin Yoganandham
          </a>
        </Link>

        {/* Navigation Links + Social Icons */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" passHref>
                <a className="text-white hover:text-[#00ffff] transition">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects" passHref>
                <a className="text-white hover:text-[#00ffff] transition">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <a className="text-white hover:text-[#00ffff] transition">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <a
                href="linkedin.com/in/ing-sachin-yoganandham-a06b88117"
                target="_blank"
                rel="noreferrer"
                className="text-[#00ffff] hover:opacity-80 transition-opacity text-2xl"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sachin-YN"
                target="_blank"
                rel="noreferrer"
                className="text-[#00ffff] hover:opacity-80 transition-opacity text-2xl"
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
