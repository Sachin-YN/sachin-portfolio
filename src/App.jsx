// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Typewriter is cool, but for a modern minimalist look, we might remove it or use it very subtly.
// For now, let's keep it but comment out if you prefer a simpler headline animation.
import Typewriter from 'react-typewriter-effect';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen, // Changed to a more generic folder icon for projects
  AiOutlineMail,
} from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Profile & project data
const linkedInUrl = 'https://linkedin.com/in/ing-sachin-yoganandham-a06b88117';
const githubUrl = 'https://github.com/Sachin-YN';
const projects = [
  {
    title: 'Awesome Project',
    description: 'A React app showcasing dynamic data visualizations and interactive dashboards.',
    link: 'https://github.com/Sachin-YN/awesome-project',
  },
  {
    title: 'Data Visualizer',
    description: 'Interactive dashboards built with D3.js and React, transforming complex data into insights.',
    link: 'https://github.com/Sachin-YN/data-visualizer',
  },
  // Add more projects here
  {
    title: 'Real-time Chat App',
    description: 'A responsive chat application featuring real-time messaging and user authentication.',
    link: 'https://github.com/Sachin-YN/chat-app', // Replace with your actual project link
  },
];

const navItems = [
  { id: 'home', icon: <AiOutlineHome size={24} /> },
  { id: 'about', icon: <AiOutlineUser size={24} /> },
  { id: 'projects', icon: <AiOutlineFolderOpen size={24} /> },
  { id: 'contact', icon: <AiOutlineMail size={24} /> },
];

// Reusable animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-gradient-to-b from-gray-950 to-black flex flex-col items-center py-8 space-y-8 z-50 shadow-lg">
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-gray-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300 p-2 rounded-full"
          aria-label={`Maps to ${item.id} section`}
        >
          {item.icon}
        </a>
      ))}
    </aside>
  );
}

function Hero() {
  const particlesInit = async engine => {
    await loadFull(engine);
  };

  return (
    <motion.section
      id="home"
      className="relative pl-20 h-screen overflow-hidden bg-gradient-to-br from-zinc-950 to-black text-white flex items-center justify-center snap-start font-inter"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Starfield Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0 opacity-80" // Slightly reduced opacity
        options={{
          fullScreen: { enable: false },
          background: { color: { value: '#000000' } },
          fpsLimit: 60,
          particles: {
            number: { value: 150, density: { enable: true, area: 1000 } }, // More particles, larger area
            color: { value: ['#b3e5fc', '#e0f7fa', '#80deea'] }, // Cooler, subtle blues for stars
            shape: { type: 'circle' }, // Simpler, cleaner circle shapes
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 0.3, opacity_min: 0.1, sync: false },
            },
            size: { value: { min: 0.5, max: 2.5 }, random: true, anim: { enable: false } },
            links: { enable: false },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'bubble', parallax: { enable: false, force: 60, smooth: 10 } }, // 'bubble' for a nice effect
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              bubble: { distance: 150, size: 4, duration: 2, opacity: 0.8 }, // Bubble effect on hover
              push: { quantity: 2 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mx-auto max-w-3xl p-10 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg border border-teal-700/50 rounded-3xl shadow-xl text-center custom-gradient-border"
      >
        <h1 className="flex flex-col items-center justify-center text-6xl font-extrabold text-white mb-4 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="block mb-2 text-teal-400"
          >
            <AiOutlineHome className="inline-block mr-4" />
          </motion.span>
          <Typewriter
            textStyle={{
              fontFamily: 'Inter, sans-serif',
              color: '#E0E7FF',
              fontWeight: 700,
            }}
            startDelay={1000}
            cursorColor="#00E676"
            text="Hey, I’m Sachin Yoganandham."
            typeSpeed={60}
            eraseSpeed={30}
          />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-gray-300 italic text-xl mb-8 max-w-md mx-auto"
        >
          “Building future-ready applications & transforming data into experiences.”
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="flex justify-center space-x-6"
        >
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border-2 border-teal-600 text-teal-300 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-teal-500/50 group"
          >
            <FaLinkedin className="mr-3 text-2xl group-hover:scale-110 transition-transform" />{' '}
            <span className="font-semibold text-lg">LinkedIn</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border-2 border-purple-600 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/50 group"
          >
            <FaGithub className="mr-3 text-2xl group-hover:scale-110 transition-transform" />{' '}
            <span className="font-semibold text-lg">GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function About() {
  return (
    <motion.section
      id="about"
      className="pl-20 h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-gray-950 text-gray-200 snap-start font-inter py-16 px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl p-10 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-xl text-center md:text-left"
      >
        <h2 className="flex items-center justify-center md:justify-start text-5xl font-bold text-teal-400 mb-6">
          <AiOutlineUser className="mr-4 text-teal-500" /> About Me
        </h2>
        <p className="mb-6 leading-relaxed text-lg text-gray-300">
          Hello! I’m **Sachin Yoganandham**, a passionate **Data Analyst** and **Front-End Engineer**. My journey is all about building sleek, high-performance web applications that transform complex, raw data into intuitive, interactive experiences.
        </p>
        <p className="mb-6 leading-relaxed text-lg text-gray-300">
          I thrive on bridging the gap between data insights and beautiful user interfaces. From crafting **pixel-perfect UIs** to delivering **real-time data visualizations**, I aim to create solutions that are not just functional, but also delightful and impactful.
        </p>
        <p className="leading-relaxed text-lg text-gray-300">
          Whether it’s optimizing data pipelines or designing responsive layouts, I'm committed to creating robust and user-friendly digital products.
        </p>
      </motion.div>
    </motion.section>
  );
}

function Projects() {
  return (
    <motion.section
      id="projects"
      className="pl-20 min-h-screen flex flex-col items-center bg-gradient-to-br from-black to-zinc-950 text-gray-200 py-16 snap-start font-inter px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="flex items-center text-5xl font-bold text-purple-400 mb-12">
        <AiOutlineFolderOpen className="mr-4 text-purple-500" /> My Projects
      </h2>
      <div className="w-full max-w-6xl grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm border border-gray-800 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-xl hover:shadow-purple-700/30 group relative overflow-hidden"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-3xl font-bold mb-3 text-white relative z-10">{p.title}</h3>
            <p className="text-gray-400 mb-5 text-base relative z-10">{p.description}</p>
            <span className="flex items-center text-teal-400 font-medium text-lg hover:underline relative z-10">
              <FaGithub className="mr-3 text-2xl group-hover:scale-110 transition-transform" /> View on GitHub →
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section
      id="contact"
      className="pl-20 h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-zinc-900 text-gray-200 snap-start font-inter py-16 px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-2xl p-10 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-md border border-teal-700/50 rounded-2xl shadow-xl"
      >
        <h2 className="flex items-center justify-center text-5xl font-bold text-teal-400 mb-6">
          <AiOutlineMail className="mr-4 text-teal-500" /> Let’s Connect
        </h2>
        <p className="mb-8 leading-relaxed text-lg text-gray-300">
          Got an exciting idea, a challenging project, or just want to geek out over the latest tech? I'd love to hear from you! Feel free to drop me a line.
        </p>
        <a
          href="mailto:sachin.yoganandham@example.com" // IMPORTANT: Replace with your actual email address
          className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-teal-700/50 text-xl"
        >
          <AiOutlineMail className="mr-3 text-2xl" /> Send an Email
        </a>
      </motion.div>
    </motion.section>
  );
}

export default function App() {
  return (
    <div className="flex bg-gray-950 text-white min-h-screen">
      <Sidebar />
      <main className="flex-1 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth antialiased font-sans">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
