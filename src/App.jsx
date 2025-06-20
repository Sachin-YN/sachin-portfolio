import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';

// Your real profile URLs
const linkedInUrl = 'https://linkedin.com/in/ing-sachin-yoganandham-a06b88117';
const githubUrl   = 'https://github.com/Sachin-YN';

// Replace these with your actual repos
const projects = [
  {
    title: 'Awesome Project',
    description: 'A modern React app showcasing dynamic data visualizations.',
    link: 'https://github.com/Sachin-YN/awesome-project'
  },
  {
    title: 'Data Visualizer',
    description: 'Interactive charts and dashboards built with D3.js and React.',
    link: 'https://github.com/Sachin-YN/data-visualizer'
  },
];

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Neon blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mix-blend-screen filter blur-2xl opacity-50"></div>

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-10 max-w-xl w-full bg-black bg-opacity-40 backdrop-blur-lg border border-cyan-500 rounded-3xl shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
          Hey, I’m Sachin.
        </h1>
        <div className="text-lg text-gray-200 mb-8 text-center">
          <Typewriter
            textStyle={{ fontFamily: 'monospace', color: '#fff' }}
            startDelay={400}
            cursorColor="#00E5FF"
            multiText={[
              'Data Analyst & Web Dev',
              'Building Future-Ready Apps',
              'Visualizing Insights in Real-Time'
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
            className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
        <p className="mb-4 leading-relaxed">
          I’m Sachin Yoganandham (Sachin-YN), a Data Analyst and front-end engineer. I love transforming raw data into interactive experiences and building sleek web apps that scale.
        </p>
        <p className="leading-relaxed">
          With a background in analytics and a passion for pixel-perfect UI, I bridge the gap between insights and interfaces.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-gray-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-2xl hover:scale-105 transition-transform shadow-lg"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-4">{proj.description}</p>
              <span className="text-cyan-400 font-medium hover:underline">
                View on GitHub →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-white">Let’s Connect</h2>
        <p className="mb-8 leading-relaxed">
          Whether you have a project in mind or just want to chat tech, drop me a line!
        </p>
        <a
          href="mailto:your.email@domain.com"
          className="inline-block px-8 py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-shadow shadow-xl"
        >
          Shoot Me an Email
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="antialiased">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
