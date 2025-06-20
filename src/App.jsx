// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Your profile links
const linkedInUrl = 'https://linkedin.com/in/ing-sachin-yoganandham-a06b88117';
const githubUrl   = 'https://github.com/Sachin-YN';

// Your projects—replace with real data
const projects = [
  {
    title: 'Awesome Project',
    description: 'A React app showcasing dynamic data visualizations.',
    link: 'https://github.com/Sachin-YN/awesome-project',
  },
  {
    title: 'Data Visualizer',
    description: 'Interactive charts & dashboards built with D3.js and React.',
    link: 'https://github.com/Sachin-YN/data-visualizer',
  },
];

// Sidebar nav items
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
  const particlesInit = async engine => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative ml-20 h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black snap-start"
    >
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#000" },
          fpsLimit: 60,
          particles: {
            number: { value: 120, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#80d8ff", "#ff80ab"] },
            shape: { type: "star" },
            opacity: { value: 0.7, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1 } },
            size: { value: { min: 1, max: 3 }, random: true },
            move: { enable: true, speed: 0.6, direction: "none", outModes: "bounce" },
            links: { enable: false },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Glass-morphic hero card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mt-16 max-w-2xl p-8 bg-black bg-opacity-40 backdrop-blur-md border border-cyan-600 rounded-2xl shadow-2xl text-center"
      >
        <h1 className="flex items-center justify-center text-5xl font-extrabold text-white mb-4">
          <AiOutlineHome className="mr-3 text-cyan-400" />
          Hey, I’m Sachin.
        </h1>
        <div className="text-lg text-gray-300 mb-6">
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
        <div className="flex justify-center space-x-4">
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
        <h2 className="flex items-center text-4xl font-bold mb-4">
          <AiOutlineUser className="mr-3 text-cyan-400" />
          About Me
        </h2>
        <p className="mb-4 leading-relaxed">
          I’m Sachin Yoganandham—Data Analyst & Front-End Engineer—building sleek, high-performance web apps that turn raw data into interactive experiences.
        </p>
        <p className="leading-relaxed">
          Passionate about pixel-perfect UIs and real-time insights, I bridge the gap between data and design.
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
      <h2 className="flex items-center text-4xl font-bold text-cyan-400 mb-8">
        <AiOutlineProject className="mr-3" />
        Projects
      </h2>
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
            <h3 className="text-2xl font-semibold mb-2 text-white">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
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
      className="ml-20 h-screen flex items-center justify-center bg-gray-900 text-gray-200 snap-start"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl px-8"
      >
        <h2 className="flex items-center justify-center text-4xl font-bold text-white mb-4">
          <AiOutlineMail className="mr-3 text-cyan-400" />
          Let’s Connect
        </h2>
        <p className="mb-8 leading-relaxed">
          Got an idea, a project, or just want to geek out over code? Drop me a line!
        </p>
        <a
          href="mailto:your.email@domain.com"
          className="inline-flex items-center px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-shadow shadow-md"
        >
          <AiOutlineMail className="mr-2" />
          Send an Email
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
