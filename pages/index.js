import { useRef, useEffect, useState } from 'react'
import anime from 'animejs'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Layout from '../components/Layout'
import Marquee from '../components/Marquee'
import ForecastCard from '../components/ForecastCard'
import PipelineSection from '../components/PipelineSection'
import NextLink from 'next/link'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'
import {
  SiMicrosoftexcel,
  SiPowerbi,
  SiQlik,
  SiTableau,
  SiSap,
  SiSnowflake,
  SiOracle,
  SiPandas,
  SiNumpy,
  SiPlotly,
} from 'react-icons/si'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      staggerChildren: 0.2,
      ease: 'easeOut',
      duration: 0.6,
    }
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: 'easeOut',
    }
  },
}

const dataStack = [
  { name: 'MySQL', useImg: true, imgSrc: '/icons/mysql.png' },
  { name: 'Snowflake', Icon: SiSnowflake, color: '#56B9EB' },
  { name: 'Oracle', Icon: SiOracle, color: '#F80000' },
  { name: 'Python', useImg: true, imgSrc: '/icons/python.jpg' },
  { name: 'Pandas', Icon: SiPandas, color: '#150458' },
  { name: 'NumPy', Icon: SiNumpy, color: '#013243' },
  { name: 'SAP HANA', Icon: SiSap, color: '#0C66E4' },
  { name: 'SAP CRM', Icon: SiSap, color: '#0C66E4' },
  { name: 'Dynamics 365', useImg: true, imgSrc: '/icons/dynamics365.jpg' },
  { name: 'Power Automate', useImg: true, imgSrc: '/icons/power automate.png' },
  { name: 'Power BI', Icon: SiPowerbi, color: '#F2C811' },
  { name: 'Tableau', Icon: SiTableau, color: '#E97627' },
  { name: 'Qlik', Icon: SiQlik, color: '#009645' },
  { name: 'Excel', Icon: SiMicrosoftexcel, color: '#217346' },
  { name: 'Forecasting', Icon: SiPlotly, color: '#3F4F75' },
]

const roles = [
  'Dashboards that drive decisions',
  'Forecasting & automation',
  'SQL · Python · Power BI',
  'From raw data to clear next steps',
]

function useTyping(words) {
  const [text, setText] = useState('')
  useEffect(() => {
    let w = 0, c = 0, del = false, id
    const tick = () => {
      const s = words[w]
      c += del ? -1 : 1
      setText(s.slice(0, c))
      let d = del ? 30 : 70
      if (!del && c === s.length) { del = true; d = 1500 }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 300 }
      id = setTimeout(tick, d)
    }
    id = setTimeout(tick, 1400)
    return () => clearTimeout(id)
  }, [words])
  return text
}

function CountUp({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const step = t => {
        const p = Math.min((t - start) / 1200, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{n}</span>
}

export default function Home() {
  const cardsRef = useRef(null)
  const nameRef = useRef(null)
  const role = useTyping(roles)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.tech-card')
    if (!cards) return
    cards.forEach(card => {
      const enter = () =>
        gsap.to(card, {
          scale: 1.05,
          boxShadow: '0 0 12px rgba(16,185,129,0.6)',
          duration: 0.3,
        })
      const leave = () =>
        gsap.to(card, {
          scale: 1,
          boxShadow: '0 0 4px rgba(0,0,0,0.2)',
          duration: 0.3,
        })
      card.addEventListener('mouseenter', enter)
      card.addEventListener('mouseleave', leave)
      card.__cleanup = () => {
        card.removeEventListener('mouseenter', enter)
        card.removeEventListener('mouseleave', leave)
      }
    })
    return () => cards.forEach(c => c.__cleanup?.())
  }, [])

  useEffect(() => {
    if (nameRef.current) {
      anime.timeline({ loop: false })
        .add({
          targets: '.letter',
          translateY: [50, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 750,
          delay: (el, i) => 30 * i,
        })
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    const form = e.target

    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      title: 'Website Contact Form',
      time: new Date().toLocaleString(),
    }

    emailjs
      .send(
        'service_rec6ze3',
        'template_0hk0x7m',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // <--- UPDATED HERE
      )
      .then(() => {
        toast.success('Message sent successfully! 🚀')
        form.reset()
      })
      .catch((err) => {
        console.error('EmailJS Error:', err); // Added logging to help debug
        toast.error('Something went wrong. Please try again later.')
      })
  }

  return (
    <Layout title="Home">
      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center px-4 md:px-10 py-24"
      >
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-200 text-xs font-mono"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
              </span>
              Data-Driven Business Analyst
            </motion.div>

            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {"I'm ".split('').map((char, i) => (
                <span key={`intro-${i}`}>{char}</span>
              ))}
              <span className="whitespace-nowrap inline-block">
                {"Sachin Yoganandham".split('').map((char, i) => (
                  <span key={`char-${i}`} className="letter inline-block gradient-text">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="max-w-xl mx-auto lg:mx-0 text-gray-200 text-lg sm:text-xl"
            >
              Turning complex metrics into clear stories
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="text-cyan-200 text-base sm:text-lg font-mono h-7 caret"
              aria-label="Dashboards that drive decisions, forecasting and automation"
            >
              {role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <NextLink
                href="/projects"
                className="px-6 py-3 bg-cyan-400 text-slate-900 rounded-md font-semibold hover:bg-cyan-300 transition hover:-translate-y-0.5"
              >
                View projects
              </NextLink>
              <button
                onClick={() =>
                  document.getElementById('data-stack')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-6 py-3 border border-white/30 text-white rounded-md font-medium hover:border-cyan-400 hover:text-cyan-300 transition hover:-translate-y-0.5"
              >
                Explore my tech stack
              </button>
              <a
                href="#contact"
                className="text-gray-300 hover:text-cyan-400 transition text-sm underline underline-offset-4 px-2"
              >
                or get in touch
              </a>
            </motion.div>
          </div>

          <ForecastCard />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-300 text-2xl animate-bounce-y" aria-hidden="true">↓</div>
      </section>

      <Marquee items={dataStack.map(d => d.name)} />

      {/* AT A GLANCE (counts come from the stack list on this page) */}
      <motion.section
        className="py-16 px-4 md:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={childVariants} className="text-3xl text-white font-semibold mb-8">
          My toolkit <span className="gradient-text">at a glance</span>
        </motion.h2>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { n: dataStack.length, label: 'Tools & platforms' },
            { n: 3, label: 'BI platforms' },
            { n: 3, label: 'Databases' },
          ].map(x => (
            <motion.div key={x.label} variants={childVariants} className="section-card p-4">
              <div className="text-4xl font-bold text-cyan-400"><CountUp to={x.n} /></div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1">{x.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <PipelineSection />

      {/* TECH STACK */}
      <motion.section
        id="data-stack"
        className="py-16 px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2
          variants={childVariants}
          className="text-3xl text-center text-white font-semibold mb-8"
        >
          Tech Stack
        </motion.h2>

        <div
          ref={cardsRef}
          className="mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 max-w-5xl"
        >
          {dataStack.map(item => (
            <Tilt
              key={item.name}
              glareEnable
              glareMaxOpacity={0.05}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              className="tech-card"
            >
              <motion.div
                variants={childVariants}
                className="flex flex-col items-center p-3 bg-slate-800/50 rounded-lg transition"
              >
                {item.useImg ? (
                  <img
                    src={item.imgSrc}
                    alt={`${item.name} logo`}
                    width={40}
                    height={40}
                    className="mb-1 object-contain"
                  />
                ) : (
                  <item.Icon size={40} color={item.color} className="mb-1" />
                )}
                <span className="text-white font-medium text-xs">{item.name}</span>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section
        className="py-16 px-4 md:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={childVariants} className="text-3xl text-white font-semibold mb-6">
          Certifications
        </motion.h2>

        <motion.div
          variants={childVariants}
          className="inline-block bg-cyan-500/20 backdrop-blur-sm rounded-lg p-1 w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          <a
            href="https://www.coursera.org/account/accomplishments/professional-cert/VD5HGNFKPBA4"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 bg-cyan-400 text-white text-sm sm:text-base rounded-md font-medium hover:bg-cyan-500 transition text-center whitespace-normal break-words"
          >
            Google Data Analytics Professional Certificate
          </a>
        </motion.div>
      </motion.section>

      {/* CONTACT FORM */}
      <motion.section
        id="contact"
        className="py-16 px-4 md:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={childVariants} className="text-3xl text-white font-semibold mb-6">
          Got an idea or just want to chat tech?
        </motion.h2>

        <motion.form
          onSubmit={sendEmail}
          variants={childVariants}
          className="max-w-xl mx-auto p-6 bg-white/5 backdrop-blur-md rounded-xl shadow-md space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-400 text-white font-medium rounded-md hover:bg-cyan-500 transition"
          >
            Send Message
          </button>
        </motion.form>
      </motion.section>
    </Layout>
  )
}
