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
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'HTML5', Icon: SiHtml5 },
  { name: 'CSS3', Icon: SiCss3 },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Express', Icon: SiExpress },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'Git', Icon: SiGit },
  { name: 'GitHub', Icon: SiGithub },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* HERO */}
      <motion.section
        className="max-w-4xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-xl my-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      >
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Hey, I’m Sachin Yoganandham
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Turning raw numbers into dynamic, interactive stories.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/projects"
            className="px-5 py-2 bg-gray-300 text-gray-900 font-semibold rounded hover:bg-gray-400"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="px-5 py-2 bg-gray-300 text-gray-900 font-semibold rounded hover:bg-gray-400"
          >
            Contact Me
          </Link>
        </div>
      </motion.section>

      {/* TECH STACK */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Experience &amp; Tech Stack
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 px-4">
          {techStack.map(({ name, Icon }) => (
            <motion.div
              key={name}
              className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-4 rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon className="text-4xl text-gray-900 mb-2" />
              <span className="text-sm text-gray-800">{name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="max-w-4xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-xl my-8 text-center"
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
            className="px-6 py-2 bg-gray-300 text-gray-900 font-semibold rounded hover:bg-gray-400"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/ing-sachin-yoganandham"
            className="px-6 py-2 border border-gray-900 text-gray-900 rounded hover:bg-gray-100"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sachin-YN"
            className="px-6 py-2 border border-gray-900 text-gray-900 rounded hover:bg-gray-100"
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
