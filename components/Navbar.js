import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
        <li><Link href="/projects"><a className="hover:underline">Projects</a></Link></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  )
}
