import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const linkedInUrl = "https://linkedin.com/in/ing-sachin-yoganandham-a06b88117";
const githubUrl = "https://github.com/Sachin-YN";

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

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-secondary-bg bg-opacity-60 backdrop-blur-md py-4 z-50">
      <ul className="container mx-auto flex justify-end space-x-6 px-6">
        {[
          { id: "home", label: "Home", icon: <AiOutlineHome /> },
          { id: "about", label: "About", icon: <AiOutlineUser /> },
          { id: "projects", label: "Projects", icon: <AiOutlineFolderOpen /> },
          { id: "contact", label: "Contact", icon: <AiOutlineMail /> },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition"
            >
              {item.icon}
              <span className="hidden md:inline">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen pt-16 snap-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-card-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-12 text-center shadow-card"
      >
        <AiOutlineHome className="text-accent mx-auto mb-4 text-5xl" />
        <h1 className="text-5xl font-bold mb-4">Hey, I’m Sachin</h1>
        <p className="text-lg text-gray-300 mb-8">
          Building future-ready applications & transforming data into experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-accent hover:bg-accent-dark text-black px-6 py-3 rounded-full font-medium transition"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-accent hover:border-accent-dark hover:bg-accent-dark text-white px-6 py-3 rounded-full font-medium transition"
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
      className="min-h-screen flex items-center justify-center bg-primary-bg snap-start px-6 md:px-0"
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl bg-secondary-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-10 shadow-card text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center md:justify-start">
          <AiOutlineUser className="text-accent mr-2 text-3xl" /> About Me
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I’m Sachin Yoganandham—Data Analyst & Front-End Engineer. I craft sleek,
          high-performance web apps that turn raw data into interactive
          experiences.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Passionate about pixel-perfect UIs and real-time visualizations, I bridge
          the gap between data insights and beautiful interfaces.
        </p>
      </motion.div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-primary-bg snap-start px-6 md:px-0 py-16"
    >
      <h2 className="text-4xl text-center font-bold text-accent mb-12">
        My Projects
      </h2>
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card-bg bg-opacity-60 backdrop-blur-sm border border-accent rounded-xl p-6 shadow-card hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {p.title}
            </h3>
            <p className="text-gray-300 mb-4">{p.description}</p>
            <span className="inline-block text-accent font-medium hover:underline">
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
      className="min-h-screen flex items-center justify-center bg-primary-bg snap-start px-6 md:px-0"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-secondary-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-10 shadow-card text-center max-w-2xl"
      >
        <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <AiOutlineMail className="text-accent mr-2 text-3xl" /> Let’s Connect
        </h2>
        <p className="text-gray-300 mb-8">
          Got an idea or just want to chat tech? Drop me a line!
        </p>
        <a
          href="mailto:sachin.yoganandham@example.com"
          className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-black px-8 py-3 rounded-full font-medium transition"
        >
          <AiOutlineMail /> <span>Send an Email</span>
        </a>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
