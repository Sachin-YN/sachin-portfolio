// pages/index.js
import { useState } from 'react'
import { wrap } from 'popmotion'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
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
  { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'TypeScript',  Icon: SiTypescript,  color: '#3178C6' },
  { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
  { name: 'Next.js',     Icon: SiNextdotjs,   color: '#000000' },
  { name: 'HTML5',       Icon: SiHtml5,       color: '#E34F26' },
  { name: 'CSS3',        Icon: SiCss3,        color: '#1572B6' },
  { name: 'Tailwind CSS',Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js',     Icon: SiNodedotjs,   color: '#339933' },
  { name: 'Express',     Icon: SiExpress,     color: '#000000' },
  { name: 'MongoDB',     Icon: SiMongodb,     color: '#47A248' },
  { name: 'PostgreSQL',  Icon: SiPostgresql,  color: '#336791' },
  { name: 'MySQL',       Icon: SiMysql,       color: '#4479A1' },
  { name: 'Git',         Icon: SiGit,         color: '#F05032' },
  { name: 'GitHub',      Icon: SiGithub,      color: '#181717' },
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const cycleIndex = (dir) => setIndex(prev => wrap(0, techStack.length, prev + dir))

  return (
    <Layout title="Home">
      {/* 1. Auto-Cycling / Manual Tech Carousel */}
      <section className="h-64 flex items-center justify-center relative">
        <button
          onClick={() => cycleIndex(-1)}
          className="absolute left-4 text-2xl text-white"
        >
          ‹
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <techStack[index].Icon size={80} color={techStack[index].color} />
            <span className="mt-2 text-white text-lg">{techStack[index].name}</span>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => cycleIndex(1)}
          className="absolute right-4 text-2xl text-white"
        >
          ›
        </button>
      </section>

      {/* 2. Curtain-Reveal Hero */}
      <motion.section
        className="min-h-screen flex items-center justify-center bg-transparent"
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-white text-center">
          Sachin Yoganandham
        </h1>
      </motion.section>

      {/* 3. Curtain-Reveal Tech Grid */}
      <motion.section
        className="py-16 bg-transparent"
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto px-4">
          {techStack.map(({ name, Icon, color }, i) => (
            <motion.div
              key={name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Icon size={48} color={color} />
              <span className="mt-2 text-white">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Curtain-Reveal Contact */}
      <motion.section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-transparent"
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Let’s Connect
          </h2>
          <a
            href="mailto:you@sachiny.me"
            className="px-6 py-3 bg-white/30 text-white rounded-md hover:bg-white/50 transition"
          >
            Email Me
          </a>
        </div>
      </motion.section>
    </Layout>
  )
}
