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

// Include a color field for each tech
const techStack = [
  { name: 'JavaScript',    Icon: SiJavascript,   color: '#F7DF1E' },
  { name: 'TypeScript',    Icon: SiTypescript,   color: '#3178C6' },
  { name: 'React',         Icon: SiReact,        color: '#61DAFB' },
  { name: 'Next.js',       Icon: SiNextdotjs,    color: '#000000' },
  { name: 'HTML5',         Icon: SiHtml5,        color: '#E34F26' },
  { name: 'CSS3',          Icon: SiCss3,         color: '#1572B6' },
  { name: 'Tailwind CSS',  Icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'Node.js',       Icon: SiNodedotjs,    color: '#339933' },
  { name: 'Express',       Icon: SiExpress,      color: '#000000' },
  { name: 'MongoDB',       Icon: SiMongodb,      color: '#47A248' },
  { name: 'PostgreSQL',    Icon: SiPostgresql,   color: '#336791' },
  { name: 'MySQL',         Icon: SiMysql,        color: '#4479A1' },
  { name: 'Git',           Icon: SiGit,          color: '#F05032' },
  { name: 'GitHub',        Icon: SiGithub,       color: '#181717' },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* HERO */}
      <motion.section
        className="bg-gradient-to-br from-teal-400 to-blue-600 text-white py-20 px-6 md:px-12 rounded-xl section-card max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          I’m Sachin Yoganandham
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          A <strong>Data-Driven Business Analyst</strong> who leverages ERP/CRM systems, cloud-scale data platforms, and automated reporting to optimize workflows and inform C-suite strategy.&nbsp;
          Explore my work on enterprise dashboards, master-data audits, and predictive analytics that power better sourcing outcomes across regions.
        </p>
      </motion.section>

      {/* TECH STACK */}
      <motion.section
        className="mt-16 max-w-5xl mx-auto px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {techStack.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              {/* Pass the brand color directly */}
              <Icon size={36} color={color} className="mb-2" />
              <span className="text-gray-800 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="mt-16 mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Let’s Talk Data
        </h2>
        <Link
          href="mailto:you@sachiny.me"
          className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 transition"
        >
          Email Me
        </Link>
      </motion.section>
    </Layout>
  )
}
