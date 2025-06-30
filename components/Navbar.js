// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black p-4 shadow-lg">
      <ul className="flex space-x-6 justify-center">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="text-neon-blue hover:underline"
          >
            Home
          </Link>
        </li>

        {/* Projects */}
        <li>
          <Link
            href="/projects"
            className="text-neon-blue hover:underline"
          >
            Projects
          </Link>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://linkedin.com/in/ing-sachin-yoganandham"
            className="text-neon-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com/Sachin-YN"
            className="text-neon-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
