// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Tech info with path to your full-color SVGs in public/icons/
const techStack = [
  { name: 'JavaScript', icon: '/icons/js.svg', tintClass: 'section-card--js' },
  { name: 'TypeScript', icon: '/icons/ts.svg', tintClass: '' },
  { name: 'React', icon: '/icons/react.svg', tintClass: 'section-card--react' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', tintClass: '' },
  { name: 'HTML5', icon: '/icons/html5.svg', tintClass: '' },
  { name: 'CSS3', icon: '/icons/css3.svg', tintClass: '' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', tintClass: '' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', tintClass: '' },
  { name: 'Express', icon: '/icons/express.svg', tintClass: '' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg', tintClass: '' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg', tintClass: '' },
  { name: 'MySQL', icon: '/icons/mysql.svg', tintClass: '' },
  { name: 'Git', icon: '/icons/git.svg', tintClass: '' },
  { name: 'GitHub', icon: '/icons/github.svg', tintClass: '' },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero */}
      <motion.div
        className="section-card text-center max-w-3xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, filter: 'hue-rotate(0deg)' }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      >
        <h1 className="text-4xl font-extrabold mb-4">Hey, I’m Sachin Yoganandham</h1>
        <p className="text-lg mb-6">Turning raw numbers into dynamic, interactive stories.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/projects" className="px-5 py-2 bg-gray-300 text-gray-900 rounded">Projects</Link>
          <Link href="#contact" className="px-5 py-2 bg-gray-300 text-gray-900 rounded">Contact Me</Link>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Experience &amp; Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-5xl mx-auto px-4">
          {techStack.map(({ name, icon, tintClass }, i) => (
            <motion.div
              key={name}
              className={`section-card ${tintClass} flex flex-col items-center`}
              initial={{ opacity: 0, y: 20, filter: 'hue-rotate(0deg)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'hue-rotate(15deg)' }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={icon} alt={name} className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <motion.div
        id="contact"
        className="section-card text-center max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <div className="flex justify-center space-x-6">
          <a href="mailto:you@sachiny.me" className="px-6 py-2 bg-gray-300 text-gray-900 rounded">
            Email Me
          </a>
          <Link href="https://linkedin.com/in/ing-sachin-yoganandham" className="px-6 py-2 border border-gray-900 rounded">
            LinkedIn
          </Link>
          <Link href="https://github.com/Sachin-YN" className="px-6 py-2 border border-gray-900 rounded">
            GitHub
          </Link>
        </div>
      </motion.div>
    </Layout>
  )
}
