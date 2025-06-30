// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero Section */}
      <motion.section
        className="text-center py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-neon-pink">
          Welcome to Sachiny.me!
        </h1>
        <p className="mb-6 text-white">
          I’m Sachin Yadav, a Data Analyst who turns raw numbers into interactive stories.
        </p>
      </motion.section>

      {/* Skills & Data Stack */}
      <motion.section
        className="py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-neon-green">
          Skills & Data Stack
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.li
            className="bg-black/50 p-4 rounded-lg"
            variants={cardVariants}
          >
            <h3 className="font-bold text-neon-pink mb-2">
              Programming &amp; Analysis
            </h3>
            <p className="text-white">
              SQL (MySQL, PostgreSQL), Python (BeautifulSoup, Pandas, NumPy), R
              (Basic), Excel (PivotTables, VLOOKUP, Conditional Formatting)
            </p>
          </motion.li>

          <motion.li
            className="bg-black/50 p-4 rounded-lg"
            variants={cardVariants}
          >
            <h3 className="font-bold text-neon-pink mb-2">Data Visualization</h3>
            <p className="text-white">Tableau, Power BI, Matplotlib, Seaborn</p>
          </motion.li>

          <motion.li
            className="bg-black/50 p-4 rounded-lg"
            variants={cardVariants}
          >
            <h3 className="font-bold text-neon-pink mb-2">
              Design &amp; Productivity
            </h3>
            <p className="text-white">
              Figma, Adobe Illustrator, Photoshop, Notion, Asana
            </p>
          </motion.li>
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-neon-orange">
          Get in Touch
        </h2>
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="https://linkedin.com/in/ing-sachin-yoganandham"
              className="text-neon-blue hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Sachin-YN"
              className="text-neon-blue hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </motion.section>
    </Layout>
  )
}
