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
      "A responsive chat app featuring real-time messaging and user authentication.",
    link: "https://github.com/Sachin-YN/chat-app",
  },
];

const stackItems = [
  { name: "Python",     icon: <SiPython />     },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Pandas",     icon: <SiPandas />     },
  { name: "NumPy",      icon: <SiNumpy />      },
  { name: "Tableau",    icon: <SiTableau />    },
  { name: "Power BI",   icon: <SiPowerbi />    },
];

function Sidebar() {
  const nav = [
    { id: "home",     icon: <AiOutlineHome />      },
    { id: "about",    icon: <AiOutlineUser />      },
    { id: "tech",     icon: <SiPython />           },
    { id: "projects", icon: <AiOutlineFolderOpen />},
    { id: "contact",  icon: <AiOutlineMail />      },
  ];

  return (
    <aside className="fixed top-0 right-0 h-full w-20 bg-secondary-bg bg-opacity-40 backdrop-blur-md flex flex-col items-center py-8 space-y-8 z-50">
      {nav.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-accent text-2xl opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(0,209,178,0.8)] transition"
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
      <h2 className="text-4xl font-bold relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-accent after:rounded-full">
        {children}
      </h2>
    </div>
  );
}

function Hero() {
  // load particles engine
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section id="home" className="relative flex items-center justify-center h-screen snap-start">
      {/* Starfield background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
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

      {/* Two-column hero card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl
                   bg-card-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-12 shadow-card"
      >
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <AiOutlineHome className="text-accent text-4xl" />
            <h1 className="text-5xl font-extrabold text-white">Hey, I’m Sachin</h1>
          </div>
          <p className="text-lg italic text-gray-300">
            Turning raw data into{" "}
            <span className="text-accent font-semibold">actionable insights</span>{" "}
            that drive smarter decisions.
          </p>
          <div className="flex space-x-4">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-accent hover:bg-accent-dark text-black px-6 py-3 rounded-full font-medium transition"
            >
              <FaLinkedin /><span>LinkedIn</span>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-accent hover:border-accent-dark hover:bg-accent-dark text-white px-6 py-3 rounded-full font-medium transition"
            >
              <FaGithub /><span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-2xl font-bold text-white mb-2">At a Glance</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Data Analyst</li>
            <li>Front-End Engineer</li>
            <li>Real-time Dashboards</li>
            <li>D3.js & React</li>
            <li>SQL & Python</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="flex items-center justify-center min-h-screen bg-primary-bg snap-start px-6">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl bg-secondary-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-10 shadow-card text-center md:text-left"
      >
        <SectionHeading icon={AiOutlineUser}>About Me</SectionHeading>
        <p className="text-gray-300 leading-relaxed mb-4">
          I’m Sachin Yoganandham—Data Analyst & Front-End Engineer. I craft sleek,
          high-performance web apps that turn raw data into interactive experiences.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Passionate about pixel-perfect UIs and real-time visualizations, I bridge the gap
          between data insights and beautiful interfaces.
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
              className="relative flex flex-col items-center justify-center p-6 bg-card-bg bg-opacity-50 backdrop-blur-sm border border-accent rounded-xl shadow-card hover:shadow-lg hover:scale-105 transition transform overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-16 bg-accent rounded-br-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-2 bg-accent rounded-tl-lg"></div>
              <div className="text-accent text-5xl mb-4 drop-shadow-[0_0_6px_rgba(0,209,178,0.8)]">
                {item.icon}
              </div>
              <span className="mt-2 text-lg font-medium text-gray-200">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-primary-bg snap-start px-6 py-16">
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
              className="relative bg-card-bg bg-opacity-60 backdrop-blur-sm border border-accent rounded-xl p-6 shadow-card hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-16 bg-accent rounded-br-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-2 bg-accent rounded-tl-lg"></div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <span className="inline-block text-accent font-medium hover:underline">View on GitHub →</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center min-h-screen bg-primary-bg snap-start px-6">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-secondary-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-10 shadow-card text-center max-w-2xl"
      >
        <SectionHeading icon={AiOutlineMail}>Let’s Connect</SectionHeading>
        <p className="text-gray-300 mb-8">Got an idea or just want to chat tech? Drop me a line!</p>
        <a
          href="mailto:sachin.yoganandham@example.com"
          className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-black px-8 py-3 rounded-full font-medium transition"
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
      <main className="ml-0 pr-20 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
