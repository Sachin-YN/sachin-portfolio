// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt'
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

// Tech stack cards
const techStack = [
  { name: 'JavaScript',   Icon: SiJavascript,   color: '#F7DF1E' },
  { name: 'TypeScript',   Icon: SiTypescript,   color: '#3178C6' },
  { name: 'React',        Icon: SiReact,        color: '#61DAFB' },
  { name: 'Next.js',      Icon: SiNextdotjs,    color: '#000000' },
  { name: 'HTML5',        Icon: SiHtml5,        color: '#E34F26' },
  { name: 'CSS3',         Icon: SiCss3,         color: '#1572B6' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'Node.js',      Icon: SiNodedotjs,    color: '#339933' },
  { name: 'Express',      Icon: SiExpress,      color: '#000000' },
  { name: 'MongoDB',      Icon: SiMongodb,      color: '#47A248' },
  { name: 'PostgreSQL',   Icon: SiPostgresql,   color: '#336791' },
  { name: 'MySQL',        Icon: SiMysql,        color: '#4479A1' },
  { name: 'Git',          Icon: SiGit,          color: '#F05032' },
  { name: 'GitHub',       Icon: SiGithub,       color: '#181717' },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* HERO WITH TYPEWRITER */}
      <div className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          <Typewriter
            options={{
              strings: [
                "I’m Sachin Yoganandham",
                "Data-Driven Business Analyst"
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Leveraging ERP/CRM systems, cloud-data platforms & automated reporting to optimize workflows, inform C-suite strategy, and power better sourcing outcomes.
        </p>
        <motion.button
          onClick={() => {
            document.getElementById('tech').scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Tech Stack
        </motion.button>
      </div>

      {/* TECH STACK GRID */}
      <section
        id="tech"
        className="py-16 bg-white/10 backdrop-blur-md"
      >
        <h2 className="text-3xl text-center text-white font-semibold mb-8">My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-6xl mx-auto px-4">
          {techStack.map(({ name, Icon, color }) => (
            <Tilt key={name} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="flex flex-col items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition">
                <Icon size={48} color={color} />
                <span className="mt-2 text-white font-medium">{name}</span>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <motion.section
        id="achievements"
        className="py-16 max-w-4xl mx-auto px-6 md:px-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-6">Achievements</h2>
        <a
          href="https://www.coursera.org/account/accomplishments/professional-cert/VD5HGNFKPBA4"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 transition"
        >
          Google Data Analytics Professional Certificate
        </a>
      </motion.section>

      {/* CONTACT CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl text-white font-semibold mb-4">Let’s Talk Data</h2>
        <Link href="mailto:you@sachiny.me">
          <a className="inline-block px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Email Me
          </a>
        </Link>
      </section>
    </Layout>
  )
}
