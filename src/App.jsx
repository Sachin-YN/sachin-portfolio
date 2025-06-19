import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const ToggleDarkMode = () => {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  const toggle = () => document.documentElement.classList.toggle("dark");
  return (
    <button onClick={toggle} className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow">
      🌓
    </button>
  );
};

const Home = () => (
  <motion.div className="min-h-screen flex flex-col items-center justify-center text-center p-6 pt-24"
    initial="hidden" animate="visible" variants={fadeIn}>
    <video className="background-video" autoPlay muted loop>
      <source src="https://cdn.coverr.co/videos/coverr-earth-from-space-4902/1080p.mp4" type="video/mp4" />
    </video>
    <h1 className="text-5xl font-extrabold mb-4 text-blue-800 dark:text-blue-400">
      <Typewriter
        words={["Hi, I'm Sachin Yoganandham", "Data Analyst", "Dashboard Enthusiast"]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
    <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl">
      Transforming raw data into actionable insights, intelligent dashboards, and business value.
    </p>
    <a href="#projects" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full animate-bounce hover:bg-blue-700 transition">View Projects</a>
  </motion.div>
);

const About = () => (
  <motion.div className="p-6 max-w-3xl mx-auto pt-28" initial="hidden" whileInView="visible" variants={fadeIn}>
    <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">About Me</h2>
    <p className="text-lg text-gray-700 dark:text-gray-300">
      Hi, I’m Sachin Yoganandham — a data analyst turning complex data into meaningful insights.
      I specialize in SQL, Python, Power BI and automation using cloud-based tools.
    </p>
  </motion.div>
);

const Projects = () => (
  <motion.div id="projects" className="p-6 max-w-4xl mx-auto pt-28"
    initial="hidden" whileInView="visible" variants={fadeIn}>
    <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {["Power BI – Sales Dashboard", "Python – Churn Prediction", "SQL – Query Optimization"].map((title, i) => (
        <motion.div key={i} className="p-4 border rounded shadow dark:border-gray-700"
          whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">(Coming soon)</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Blog = () => (
  <motion.div className="p-6 max-w-3xl mx-auto pt-28"
    initial="hidden" whileInView="visible" variants={fadeIn}>
    <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Blog</h2>
    <p>🚧 Posts coming soon! I'll share thoughts on data strategy, tools, and career growth.</p>
  </motion.div>
);

const Contact = () => (
  <motion.div className="p-6 max-w-3xl mx-auto pt-28"
    initial="hidden" whileInView="visible" variants={fadeIn}>
    <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Contact</h2>
    <ul className="list-disc list-inside text-blue-600 dark:text-blue-400">
      <li><a href="https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117" target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li><a href="https://github.com/Sachin-YN" target="_blank" rel="noreferrer">GitHub</a></li>
      <li><a href="mailto:sachin@sachiny.me">Email Me</a></li>
    </ul>
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <ToggleDarkMode />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
