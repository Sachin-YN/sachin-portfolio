import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Tech', href: '/#data-stack' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const router = useRouter()
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md flex items-center justify-between px-4 sm:px-6 py-3">
      <Link href="/" aria-label="Home" className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white font-bold hover:border-cyan-400 hover:text-cyan-400 transition">
        SY
      </Link>

      <div className="flex space-x-3 sm:space-x-6 text-white text-xs sm:text-sm">
        {navItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className={`hover:text-cyan-400 transition ${router.asPath === item.href ? 'text-cyan-400' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex space-x-4 text-white text-lg">
        <a href="https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition"><FaLinkedin /></a>
        <a href="https://github.com/Sachin-YN" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition"><FaGithub /></a>
      </div>
    </nav>
  )
}
