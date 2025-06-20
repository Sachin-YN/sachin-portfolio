import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Your real profile URLs
const linkedInUrl = 'https://linkedin.com/in/ing-sachin-yoganandham-a06b88117';
const githubUrl   = 'https://github.com/Sachin-YN';

// Replace these with your actual repos
const projects = [
  {
    title: 'Awesome Project',
    description: 'A modern React app showcasing dynamic data visualizations.',
    link: 'https://github.com/Sachin-YN/awesome-project',
  },
  {
    title: 'Data Visualizer',
    description: 'Interactive charts and dashboards built with D3.js and React.',
    link: 'https://github.com/Sachin-YN/data-visualizer',
  },
];

const sections = [
  { id: 'home',    icon: AiOutlineHome },
  { id: 'about',   icon: AiOutlineUser },
  { id: 'projects',icon: AiOutlineProject },
  { id: 'contact', icon: AiOutlineMail },
];

function Navbar() {
  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
      <ul className="space-y-6">
        {sections.map(sec => {
          const Icon = sec.icon;
          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label={sec.id}
              >
                <Icon size={28} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden snap-start">
      {/* Neon blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mix-blend-screen filter blur-2xl opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-10 max-w-lg w-full bg-black bg-opacity-40 backdrop-blur-lg border border-cyan-500 rounded-3xl shadow-2xl text-center"
      >
        <h1 className="flex items-center justify-center text-5xl font-extrabold text-white mb-4">
          <AiOutlineHome className="mr-3 text-cyan-400" /> Hey, I’m Sachin.
        </h1>
        <div className="text-lg text-gray-200 mb-8">
          <Typewriter
            textStyle={{ fontFamily: 'monospace', color: '#fff' }}
            startDelay={500}
            cursorColor="#00E5FF"
            multiText={[
              'Data Analyst & Web Dev',
              'Building Future-Ready Apps',
              'Visualizing Insights in Real-Time',
            ]}
            multiTextDelay={1200}
            typeSpeed={60}
          />
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-black transition"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-black transition"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-gray-900 text-gray-300 snap-start"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl px-6"
      >
        <h2 className="flex items-center text-4xl font-bold text-white mb-4">
          <AiOutlineUser className="mr-3 text-cyan-400" /> About Me
        </h2>
        <p className="mb-4 leading-relaxed">
          I’m Sachin Yoganandham (Sachin-YN), a Data Analyst & front-end engineer. I turn raw data into interactive, sleek web experiences.
        </p>
        <p className="leading-relaxed">
          With a passion for pixel-perfection and performance, I bridge insights and interfaces to build future-ready applications.
        </p>
      </motion.div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex items-center justify-center bg-black text-gray-200 snap-start"
    >
      <div className="max-w-4xl px-6 grid gap-8 md:grid-cols-2">
        <h2 className="col-span-full flex items-center text-4xl font-bold text-cyan-400 mb-8">
          <AiOutlineProject className="mr-3" /> Projects
        </h2>

        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-2xl hover:scale-105 transition-transform shadow-lg"
            whileHover={{ y: -4 }}
          >
            <h3 className="flex items-center text-2xl font-semibold mb-2 text-white">
              <AiOutlineProject className="mr-2 text-cyan-400" />
              {proj.title}
            </h3>
            <p className="text-gray-400 mb-4">{proj.description}</p>
            <span className="flex items-center text-cyan-400 font-medium hover:underline">
              <FaGithub className="mr-2" />
              View on GitHub →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-gray-900 text-gray-300 snap-start"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 max-w-xl"
      >
        <h2 className="flex items-center justify-center text-4xl font-bold text-white mb-4">
          <AiOutlineMail className="mr-3 text-cyan-400" /> Let’s Connect
        </h2>
        <p className="mb-8 leading-relaxed">
          Have an idea, a project, or just want to chat tech? Drop me a line!
        </p>
        <a
          href="mailto:your.email@domain.com"
          className="inline-flex items-center px-8 py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-shadow shadow-xl"
        >
          <AiOutlineMail className="mr-2" /> Shoot Me an Email
        </a>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
