import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';

// Your actual profile URLs
const linkedInUrl = 'https://linkedin.com/in/ing-sachin-yoganandham-a06b88117';
const githubUrl   = 'https://github.com/Sachin-YN';

// Sample projects array — customize with your real repos
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
  // Add more projects here...
];

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-teal-500 to-green-400">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-6 max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to My Tech Frontier
        </h1>
        <div className="text-2xl font-medium text-white mb-8">
          <Typewriter
            textStyle={{ fontFamily: 'inherit', color: '#fff' }}
            startDelay={500}
            cursorColor="#ffffff"
            multiText={[
              'Innovative Solutions',
              'Cutting-Edge Design',
              'Unmatched Performance'
            ]}
            multiTextDelay={1000}
            typeSpeed={50}
          />
        </div>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-opacity-90"
        >
          Learn More
        </motion.a>
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Hi, I'm Sachin Yoganandham (Sachin-YN), a Data Analyst and web developer passionate about building modern applications and visualizing insights.
        </p>
        <div className="flex space-x-6">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 border rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <a
          href="mailto:your.email@domain.com"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
