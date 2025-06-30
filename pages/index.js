// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si'

const techStack = [
  { name: 'JavaScript', Icon: SiJavascript,   color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript,   color: '#3178C6' },
  { name: 'React',      Icon: SiReact,        color: '#61DAFB' },
  { name: 'Next.js',    Icon: SiNextdotjs,    color: '#000000' },
  { name: 'HTML5',      Icon: SiHtml5,        color: '#E34F26' },
  { name: 'CSS3',       Icon: SiCss3,         color: '#1572B6' },
  { name: 'Tailwind',   Icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'Node.js',    Icon: SiNodedotjs,    color: '#339933' },
  { name: 'Express',    Icon: SiExpress,      color: '#000000' },
  { name: 'MongoDB',    Icon: SiMongodb,      color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql,   color: '#336791' },
  { name: 'MySQL',      Icon: SiMysql,        color: '#4479A1' },
  { name: 'Git',        Icon: SiGit,          color: '#F05032' },
  { name: 'GitHub',     Icon: SiGithub,       color: '#181717' },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero Section */}
      <motion.section
        className="section-card text-center max-w-3xl mx-auto"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-[#FF6B6B]">
          Hey, I’m Sachin Yoganandham
        </h1>
        <p className="text-lg mb-6 text-gray-900">
          Turning raw numbers into dynamic, interactive stories.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/projects"
            className="px-6 py-2 bg-white/30 text-gray-900 rounded-md hover:bg-white/50 transition"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 bg-[#FF6B6B] text-white rounded-md hover:bg-[#ff5252] transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Experience &amp; Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto px-4">
          {techStack.map(({ name, Icon, color }, i) => (
            <motion.div
              key={name}
              className="section-card flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon size={48} color={color} className="mb-2" />
              <span className="text-gray-900">{name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="section-card text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          Let’s Connect
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:you@sachiny.me"
            className="px-6 py-2 bg-white/30 text-gray-900 rounded-md hover:bg-white/50 transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/ing-sachin-yoganandham"
            className="px-6 py-2 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-100 transition"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sachin-YN"
            className="px-6 py-2 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-100 transition"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </motion.section>
    </Layout>
  )
}
