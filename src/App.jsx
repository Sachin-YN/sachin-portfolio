// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  SiPython,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiPowerbi,
} from "react-icons/si";

const linkedInUrl = "https://linkedin.com/in/ing-sachin-yoganandham-a06b88117";
const githubUrl   = "https://github.com/Sachin-YN";

const stackItems = [
  { name: "Python",     icon: <SiPython />     },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Pandas",     icon: <SiPandas />     },
  { name: "NumPy",      icon: <SiNumpy />      },
  { name: "Tableau",    icon: <SiTableau />    },
  { name: "Power BI",   icon: <SiPowerbi />    },
];

const projects = [
  {
    title: "Awesome Project",
    description:
      "A React app showcasing dynamic data visualizations and interactive dashboards.",
    link: "https://github.com/Sachin-YN/awesome-project",
  },
  {
    title: "Data Visualizer",
    description:
      "Interactive dashboards built with D3.js & React, transforming complex data into insights.",
    link: "https://github.com/Sachin-YN/data-visualizer",
  },
  {
    title: "Real-time Chat App",
    description:
      "A responsive chat application featuring real-time messaging and user authentication.",
    link: "https://github.com/Sachin-YN/chat-app",
  },
];

function Sidebar() {
  const nav = [
    { id: "home",     icon: <AiOutlineHome size={24} />      },
    { id: "about",    icon: <AiOutlineUser size={24} />      },
    { id: "tech",     icon: <SiPython size={24} className="text-accent" /> },
    { id: "projects", icon: <AiOutlineFolderOpen size={24} />},
    { id: "contact",  icon: <AiOutlineMail size={24} />      },
  ];

  return (
    <aside className="fixed top-0 right-0 h-full w-20 bg-secondary-bg bg-opacity-40 backdrop-blur-md
                      flex flex-col items-center py-8 space-y-8 z-50">
      {nav.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-accent opacity-80 hover:opacity-100 transition"
          aria-label={item.id}
        >
          {item.icon}
        </a>
      ))}
    </aside>
  );
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="mb-8 flex items-center justify-center md:justify-start">
      <Icon className="text-accent text-3xl mr-3" />
      <h2 className="text-4xl font-bold relative
                     after:absolute after:bottom-0 after:left-0
                     after:w-16 after:h-1 after:bg-accent after:rounded-full">
        {children}
      </h2>
    </div>
  );
}

function Hero() {
  const particlesInit = async (engine) => await loadFull(engine);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen snap-start px-6 md:px-20"
    >
      {/* background particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{ /* your existing tsParticles config */ }}
      />

      {/* centered single-card hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-3xl text-center
                   bg-card-bg bg-opacity-60 backdrop-blur-lg border border-accent
                   rounded-2xl p-12 shadow-card"
      >
        <h1 className="text-6xl font-extrabold text-white mb-6">
          Hey, I’m Sachin
        </h1>
        <p className="text-2xl italic text-gray-300 mb-8 leading-relaxed tracking-wide">
          Turning{" "}
          <span className="font-semibold text-accent">raw data</span>{" "}
          into actionable insights that drive smarter decisions.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-accent hover:bg-accent-dark
                       text-black px-6 py-3 rounded-full font-medium transition"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-accent
                       hover:border-accent-dark hover:bg-accent-dark text-white
                       px-6 py-3 rounded-full font-medium transition"
          >
            <FaGithub /> <span>GitHub</span>
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
      className="flex items-center justify-center min-h-screen
                 bg-primary-bg snap-start px-6"
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl bg-secondary-bg bg-opacity-60 backdrop-blur-lg
                   border border-accent rounded-2xl p-10 shadow-card
                   text-center md:text-left"
      >
        <SectionHeading icon={AiOutlineUser}>About Me</SectionHeading>
        <p className="text-gray-300 mb-4">
          I’m Sachin Yoganandham—Data Analyst & Front-End Engineer. I craft sleek,
          high-performance web apps that turn raw data into interactive experiences.
        </p>
        <p className="text-gray-300">
          Passionate about pixel-perfect UIs and real-time visualizations, I bridge
          the gap between data insights and beautiful interfaces.
        </p>
      </motion.div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="tech" className="py-20 bg-primary-bg snap-start px-6">
      <div className="container mx-auto text-center">
        <SectionHeading icon={SiPython}>My Data Stack</SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-6
                         bg-card-bg bg-opacity-50 backdrop-blur-sm
                         border border-accent rounded-xl shadow-card
                         hover:shadow-lg hover:scale-105 transition transform"
            >
              <div className="text-accent text-5xl mb-2">{item.icon}</div>
              <span className="text-gray-200">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-primary-bg px-6 py-16 snap-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <SectionHeading icon={AiOutlineFolderOpen}>My Projects</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card-bg bg-opacity-60 backdrop-blur-sm
                         border border-accent rounded-xl p-6 shadow-card
                         hover:shadow-lg transform hover:-translate-y-1
                         transition overflow-hidden"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <span className="inline-block text-accent font-medium hover:underline">
                View on GitHub →
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen
                 bg-primary-bg snap-start px-6"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-secondary-bg bg-opacity-60 backdrop-blur-lg
                   border border-accent rounded-2xl p-10 shadow-card
                   text-center max-w-2xl"
      >
        <SectionHeading icon={AiOutlineMail}>Let’s Connect</SectionHeading>
        <p className="text-gray-300 mb-8">
          Got an idea or just want to chat tech? Drop me a line!
        </p>
        <a
          href="mailto:sachin.yoganandham@example.com"
          className="inline-flex items-center space-x-2
                     bg-accent hover:bg-accent-dark text-black
                     px-8 py-3 rounded-full font-medium transition"
        >
          <AiOutlineMail /><span>Send an Email</span>
        </a>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <div className="flex font-sans">
      <Sidebar />
      <main className="ml-0 pr-20 h-screen w-full overflow-y-scroll
                       snap-y snap-mandatory scroll-smooth">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
