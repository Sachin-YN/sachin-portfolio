// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "react-typewriter-effect";

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
const calendlyUrl = "https://calendly.com/your-calendly-link";

// Hero phrases to rotate
const phrases = [
  "Creative Data Analysis",
  "Interactive Dashboards",
  "3D Animations & UX",
  "Story-Driven Visuals",
];

export default function App() {
  return (
    <div className="relative font-sans text-white overflow-x-hidden">
      <Sidebar />
      <BookACall />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

// Floating "Book a Call" button in bottom-right
function BookACall() {
  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-8 right-8 z-50
        bg-accent hover:bg-accent-dark text-black
        px-5 py-3 rounded-full font-semibold
        drop-shadow-lg transition
      "
    >
      Book a Call
    </a>
  );
}

function Sidebar() {
  const nav = [
    { id: "home",     icon: <AiOutlineHome size={24} />      },
    { id: "about",    icon: <AiOutlineUser size={24} />      },
    { id: "tech",     icon: <SiPython size={24} className="text-accent" /> },
    { id: "projects", icon: <AiOutlineFolderOpen size={24} /> },
    { id: "contact",  icon: <AiOutlineMail size={24} />       },
  ];
  return (
    <aside className="fixed top-1/3 right-4 flex flex-col items-center space-y-6 z-40">
      {nav.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-accent opacity-80 hover:opacity-100 transition"
        >
          {item.icon}
        </a>
      ))}
    </aside>
  );
}

function Hero() {
  const particlesInit = async (engine) => await loadFull(engine);
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* full-screen neon grid + particles */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          background: { color: "#000" },
          particles: {
            number: { value: 80, density: { enable: true, area: 1200 } },
            color: { value: ["#00e676", "#64ffda", "#8854c2"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: { min: 1, max: 4 }, random: true },
            links: { enable: true, distance: 150, color: "#0891B2", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.4 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
          },
          detectRetina: true,
        }}
      />

      <div className="relative z-10 mx-auto text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          Hey, I’m Sachin
        </h1>
        <div className="text-2xl md:text-3xl italic text-gray-300 mb-8">
          <Typewriter
            textStyle={{ fontFamily: "Inter, sans-serif" }}
            startDelay={500}
            cursorColor="#00e676"
            multiText={phrases}
            multiTextDelay={2000}
            typeSpeed={80}
            deleteSpeed={50}
          />
        </div>
        <div className="flex justify-center space-x-6">
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
            className="border-2 border-accent hover:border-accent-dark hover:bg-accent-dark text-white px-6 py-3 rounded-full font-medium transition"
          >
            <FaGithub className="inline-block mr-2" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <SkewSection id="about" color="bg-primary-bg" skew="-6">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl space-y-6 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold text-accent">About Me</h2>
        <p className="text-gray-300">
          I’m a Data Analyst & Front-End Engineer who blends creativity with code to bring data stories to life…
        </p>
      </motion.div>
    </SkewSection>
  );
}

function TechStack() {
  return (
    <SkewSection id="tech" color="bg-secondary-bg" skew="6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-accent mb-8">My Data Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {stackItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-5xl text-accent mb-2">{item.icon}</div>
              <span className="text-gray-200">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SkewSection>
  );
}

function Projects() {
  return (
    <SkewSection id="projects" color="bg-primary-bg" skew="-6">
      <div className="container mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-accent">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-card-bg bg-opacity-60 backdrop-blur-sm border border-accent rounded-xl p-6 shadow-card transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-300">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </SkewSection>
  );
}

function Contact() {
  return (
    <SkewSection id="contact" color="bg-secondary-bg" skew="6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-accent mb-6">Let’s Connect</h2>
        <a
          href="mailto:sachin.yoganandham@example.com"
          className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-black px-8 py-3 rounded-full font-medium transition"
        >
          <AiOutlineMail className="inline-block mr-2" />
          <span>Send an Email</span>
        </a>
      </motion.div>
    </SkewSection>
  );
}

// Wrapper to add a diagonal skew background to each section
function SkewSection({ id, color, skew, children }) {
  return (
    <section id={id} className={`relative ${color} py-20`}>
      <div
        className={`absolute inset-0 transform ${
          skew === "-6" ? "-skew-y-6" : "skew-y-6"
        }`}
        style={{ transformOrigin: "top left" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
