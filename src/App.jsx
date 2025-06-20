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
const githubUrl    = "https://github.com/Sachin-YN";

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

function Sidebar() {
  const nav = [
    { id: "home", icon: <AiOutlineHome /> },
    { id: "about", icon: <AiOutlineUser /> },
    { id: "projects", icon: <AiOutlineFolderOpen /> },
    { id: "contact", icon: <AiOutlineMail /> },
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

export default function App() {
  return (
    <div className="flex font-sans">
      <Sidebar />
      <main className="ml-0 pr-20 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Hero */}
        <section
          id="home"
          className="relative flex items-center justify-center h-screen snap-start"
        >
          {/* neon blobs */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-accent to-accent-dark rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full filter blur-2xl opacity-30"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl bg-card-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-12 text-center shadow-card"
          >
            <AiOutlineHome className="text-accent mx-auto mb-4 text-5xl" />
            <h1 className="text-5xl font-bold mb-4">Hey, I’m Sachin</h1>
            <p className="text-2xl md:text-3xl italic text-gray-300 mb-8 leading-relaxed tracking-wide">
              Turning raw data into{" "}
              <span className="font-semibold text-accent">
                actionable insights
              </span>{" "}
              that drive smarter decisions.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-accent hover:bg-accent-dark text-black px-6 py-3 rounded-full font-medium transition"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border-2 border-accent hover:border-accent-dark hover:bg-accent-dark text-white px-6 py-3 rounded-full font-medium transition"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section
          id="about"
          className="flex items-center justify-center min-h-screen bg-primary-bg snap-start px-6"
        >
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl bg-secondary-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-10 shadow-card text-center md:text-left"
          >
            <SectionHeading icon={AiOutlineUser}>About Me</SectionHeading>
            <p className="text-gray-300 leading-relaxed mb-4">
              I’m Sachin Yoganandham—Data Analyst & Front-End Engineer. I craft
              sleek, high-performance web apps that turn raw data into interactive
              experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Passionate about pixel-perfect UIs and real-time visualizations, I
              bridge the gap between data insights and beautiful interfaces.
            </p>
          </motion.div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="bg-primary-bg snap-start px-6 py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto"
          >
            <SectionHeading icon={AiOutlineFolderOpen}>
              My Projects
            </SectionHeading>
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
          </motion.div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="flex items-center justify-center min-h-screen bg-primary-bg snap-start px-6"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-secondary-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-10 shadow-card text-center max-w-2xl"
          >
            <SectionHeading icon={AiOutlineMail}>Let’s Connect</SectionHeading>
            <p className="text-gray-300 mb-8">
              Got an idea or just want to chat tech? Drop me a line!
            </p>
            <a
              href="mailto:sachin.yoganandham@example.com"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-black px-8 py-3 rounded-full font-medium transition"
            >
              <AiOutlineMail />
              <span>Send an Email</span>
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
