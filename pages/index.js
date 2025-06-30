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

// Tech stack for grid
const techStack = [
  { name: 'JavaScript',    Icon: SiJavascript },
  { name: 'TypeScript',    Icon: SiTypescript },
  { name: 'React',         Icon: SiReact },
  { name: 'Next.js',       Icon: SiNextdotjs },
  { name: 'HTML5',         Icon: SiHtml5 },
  { name: 'CSS3',          Icon: SiCss3 },
  { name: 'Tailwind CSS',  Icon: SiTailwindcss },
  { name: 'Node.js',       Icon: SiNodedotjs },
  { name: 'Express',       Icon: SiExpress },
  { name: 'MongoDB',       Icon: SiMongodb },
  { name: 'PostgreSQL',    Icon: SiPostgresql },
  { name: 'MySQL',         Icon: SiMysql },
  { name: 'Git',           Icon: SiGit },
  { name: 'GitHub',        Icon: SiGithub },
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
          A <strong>Data-Driven Business Analyst</strong> who leverages ERP/CRM systems, cloud-scale data platforms, and automated reporting to optimize workflows and inform C-suite strategy.  
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
          {techStack.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <Icon size={36} className="text-teal-600 mb-2" />
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
