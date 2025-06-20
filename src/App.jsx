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

// inside src/App.jsx (just replace your Hero function)

function Hero() {
  const particlesInit = async engine => await loadFull(engine);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-20 snap-start"
    >
      {/* background neon grid + stars */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{ /* your existing particles config */ }}
      />

      {/* LEFT COLUMN: Text & CTAs */}
      <div className="relative z-10 w-full md:w-1/2 space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white">
          <AiOutlineHome className="inline-block text-accent mr-2" />
          Hey, I’m Sachin
        </h1>
        <p className="text-xl md:text-2xl italic text-gray-300 max-w-lg">
          Turning <span className="text-accent font-semibold">raw data</span> into
          <br /> actionable insights that drive smarter decisions.
        </p>
        <div className="flex space-x-4">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-dark text-black px-6 py-3 rounded-full font-medium transition"
          >
            <FaLinkedin className="inline-block mr-2" /> LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-accent hover:bg-accent-dark hover:border-accent-dark text-white px-6 py-3 rounded-full font-medium transition"
          >
            <FaGithub className="inline-block mr-2" /> GitHub
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: “At a Glance” Stats */}
      <div className="relative z-10 mt-12 md:mt-0 w-full md:w-1/2 flex flex-col space-y-4 text-gray-200">
        <h3 className="text-2xl font-bold text-white">At a Glance</h3>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
          {[
            "Data Analyst",
            "Front-End Engineer",
            "Real-time Dashboards",
            "D3.js & React",
            "SQL & Python",
            "ETL & Visualization",
          ].map((item) => (
            <li key={item} className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
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
