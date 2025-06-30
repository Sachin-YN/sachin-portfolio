// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

// List out your tech-stack icons here
const techStack = [
  { name: 'JavaScript', src: '/icons/js.svg' },
  { name: 'TypeScript', src: '/icons/ts.svg' },
  { name: 'React', src: '/icons/react.svg' },
  { name: 'Next.js', src: '/icons/nextjs.svg' },
  { name: 'HTML5', src: '/icons/html5.svg' },
  { name: 'CSS3', src: '/icons/css3.svg' },
  { name: 'Tailwind', src: '/icons/tailwind.svg' },
  { name: 'Node.js', src: '/icons/nodejs.svg' },
  { name: 'Express', src: '/icons/express.svg' },
  { name: 'MongoDB', src: '/icons/mongodb.svg' },
  { name: 'PostgreSQL', src: '/icons/postgresql.svg' },
  { name: 'MySQL', src: '/icons/mysql.svg' },
  { name: 'Git', src: '/icons/git.svg' },
  { name: 'GitHub', src: '/icons/github.svg' },
  // add more as needed…
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* HERO */}
      <motion.section
        className="text-center py-20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      >
        <h1 className="text-5xl font-extrabold text-electric-blue">
          Hey, I’m Sachin Yoganandham
        </h1>
        <p className="mt-4 text-lg text-white">
          Turning raw numbers into dynamic, interactive stories.
        </p>
      </motion.section>

      {/* TECH STACK */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-electric-blue text-center mb-8">
          Experience & Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto px-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-sm text-white">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <motion.section
        id="contact"
        className="text-center py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-electric-blue">
          Let’s Connect
        </h2>
        <div className="flex justify-center space-x-6">
          <Link
            href="mailto:you@sachiny.me"
            className="px-6 py-3 bg-electric-blue text-black font-semibold rounded hover:bg-electric-blue/80"
          >
            Email Me
          </Link>
          <Link
            href="https://linkedin.com/in/ing-sachin-yoganandham"
            className="px-6 py-3 border-2 border-electric-blue text-electric-blue rounded hover:bg-electric-blue/10"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Sachin-YN"
            className="px-6 py-3 border-2 border-electric-blue text-electric-blue rounded hover:bg-electric-blue/10"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </div>
      </motion.section>
    </Layout>
  )
}
