import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt'
import Layout from '../components/Layout'
import Link from 'next/link'
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
}
const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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

export default function Home() {
  const cardsRef = useRef(null)

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
        '79r0FQ9nqNFXnqcw9'
      )
      .then(() => {
        toast.success('Message sent successfully! 🚀')
        form.reset()
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again later.')
      })
  }

  return (
    <Layout title="Home">
      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 space-y-6"
      >
     <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white flex flex-wrap justify-center gap-1"
>
  {/* Static part: “I’m” */}
  {"I’m ".split("").map((char, i) => (
    <span key={`intro-${i}`}>{char}</span>
  ))}

  {/* Animated part: “Sachin Yoganandham” */}
  {"Sachin Yoganandham".split("").map((char, i) => (
    <span
      key={`name-${i}`}
      className="inline-block text-cyan-300 font-semibold animate-drop-in"
      style={{ animationDelay: `${i * 80}ms` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="max-w-2xl text-gray-300 text-lg"
        >
          Turning complex metrics into clear stories
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
         <motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.1, duration: 0.5 }}
  className="text-white text-base sm:text-lg"
>
  Data-Driven Business Analyst
</motion.p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.4, ease: 'backOut' }}
          className="mt-8 inline-block bg-cyan-500/20 backdrop-blur-sm rounded-lg p-1"
        >
          <motion.button
            onClick={() =>
              document.getElementById('data-stack')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 bg-cyan-400 text-white rounded-md font-medium hover:bg-cyan-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Tech Stack
          </motion.button>
        </motion.div>
      </section>

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
          <Link
            href="https://www.coursera.org/account/accomplishments/professional-cert/VD5HGNFKPBA4"
            passHref
          >
            <a className="block px-6 py-3 bg-cyan-400 text-white text-sm sm:text-base rounded-md font-medium hover:bg-cyan-500 transition text-center whitespace-normal break-words">
              Google Data Analytics Professional Certificate
            </a>
          </Link>
        </motion.div>
      </motion.section>

      {/* CONTACT FORM */}
      <motion.section
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
