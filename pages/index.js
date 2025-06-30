// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Full-color SVG logos in public/icons/
const techStack = [
  { name: 'JavaScript', icon: '/icons/js.svg' },
  { name: 'TypeScript', icon: '/icons/ts.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'HTML5', icon: '/icons/html5.svg' },
  { name: 'CSS3', icon: '/icons/css3.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express', icon: '/icons/express.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'GitHub', icon: '/icons/github.svg' },
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
        <p className="text-lg mb-6 text-gray-100">
          Turning raw numbers into dynamic, interactive stories.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/projects"
            className="px-6 py-2 bg-white/30 text-white rounded-md hover:bg-white/50 transition"
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
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          Experience &amp; Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-5xl mx-auto px-4">
          {techStack.map(({ name, icon }, i) => (
            <motion.div
              key={name}
              className="section-card flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={icon} alt={name} className="w-12 h-12 mb-2" />
              <span className="text-white">{name}</span>
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
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Let’s Connect
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:you@sachiny.me"
            className="px-6 py-2 bg-white/30 text-white rounded-md hover:bg-white/50 transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/ing-sachin-yoganandham"
            className="px-6 py-2 border border-white text-white rounded-md hover:bg-white/20 transition"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sachin-YN"
            className="px-6 py-2 border border-white text-white rounded-md hover:bg-white/20 transition"
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
