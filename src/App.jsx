import React from 'react';
import { motion } from 'framer-motion';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const linkedInUrl = 'https://linkedin.com/in/ing-sachin-yoganandham-a06b88117';
const githubUrl   = 'https://github.com/Sachin-YN';

const projects = [
  {
    title: 'Awesome Project',
    description: 'A React app showcasing dynamic data visualizations.',
    link: 'https://github.com/Sachin-YN/awesome-project',
  },
  {
    title: 'Data Visualizer',
    description: 'Interactive charts and dashboards with D3.js & React.',
    link: 'https://github.com/Sachin-YN/data-visualizer',
  },
];

// Sidebar navigation items
const navItems = [
  { id: 'home',    label: 'Home',    icon: <AiOutlineHome size={24} /> },
  { id: 'about',   label: 'About',   icon: <AiOutlineUser size={24} /> },
  { id: 'projects',label: 'Projects',icon: <AiOutlineProject size={24} /> },
  { id: 'contact', label: 'Contact', icon: <AiOutlineMail size={24} /> },
];

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-gray-900 flex flex-col items-center py-8 space-y-8">
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-gray-500 hover:text-cyan-400 transition-colors"
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </aside>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="ml-20 h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black snap-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full grid md:grid-cols-2 gap-10 p-8 bg-black bg-opacity-30 backdrop-blur-md border border-cyan-600 rounded-2xl shadow-2xl"
      >
        {/* Left column: intro & social */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-extrabold text-white">
            Hey, I’m Sachin.
          </h1>
          <div className="flex space-x-4">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>

        {/* Right column: static tagline */}
        <div className="flex items-center">
          <p className="text-xl text-gray-300 italic">
            “Building future-ready applications<br/>
            & transforming data into experiences.”
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="ml-20 h-screen flex items-center justify-center bg-gray-900 text-gray-200 snap-start"
    >
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl p-8"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="mb-4 leading-relaxed">
          I’m Sachin Yoganandham—Data Analyst & Front-End Engineer. I build sleek, high-performance web apps that turn raw data into rich, interactive experiences.
        </p>
        <p className="leading-relaxed">
          With a passion for pixel-perfect UIs and real-time insights, I help bridge the gap between data and design.
        </p>
      </motion.div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="ml-20 min-h-screen flex flex-col items-center bg-black text-gray-200 py-16 snap-start"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Projects</h2>
      <div className="w-full max-w-4xl grid gap-10 md:grid-cols-2 px-8">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-800 bg-opacity-40 backdrop-blur-md border border-gray-700 rounded-lg hover:scale-105 transition-transform shadow-lg"
            whileHover={{ y: -3 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <span className="text-cyan-400 font-medium hover:underline">
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
      className="ml-20 h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 snap-start"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl px-8"
      >
        <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="mb-8 leading-relaxed">
          Got an idea, a project, or just want to geek out over code? 
        </p>
        <a
          href="mailto:your.email@domain.com"
          className="inline-flex items-center px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-shadow shadow-md"
        >
          <AiOutlineMail className="mr-2" /> Send an Email
        </a>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth antialiased">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
