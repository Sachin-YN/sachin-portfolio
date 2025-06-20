import React, { useState, useEffect } from 'react';
import Typewriter from 'react-typewriter-effect';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl animate-pulse">
        Loading…
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-hero-from via-hero-via to-hero-to"
        aria-hidden="true"
      />

      {/* Semi-transparent overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <nav className="fixed w-full z-20 bg-black/30 backdrop-blur-sm text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <span className="font-bold text-xl">Sachin</span>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollTo('projects')} className="hover:text-gray-300">Projects</button>
            <button onClick={() => scrollTo('contact')}  className="hover:text-gray-300">Contact</button>
          </div>
        </div>
      </nav>

      {/* Dark mode & scroll-to-top */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-4 right-4 z-30 p-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-600 transition"
      >🌙</button>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 z-30 p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >⬆️</button>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            <Typewriter
              textStyle={{ fontFamily: 'Roboto', fontWeight: 700, color: '#ffffff' }}
              startDelay={200}
              cursorColor="#ffffff"
              multiText={[
                "Hi, I'm Sachin Yoganandham",
                'Advanced Data Analyst',
                'Dashboard Architect'
              ]}
              multiTextDelay={2000}
              typeSpeed={70}
              deleteSpeed={50}
              loop
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-4 text-lg text-gray-200 max-w-2xl"
          >
            We turn raw data into visually stunning dashboards, actionable insights, and real business impact.
          </motion.p>
          <motion.button
            onClick={() => scrollTo('projects')}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6, type: 'spring', stiffness: 120 }}
            className="mt-8 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
          >
            View Projects
          </motion.button>
        </AnimatePresence>
      </div>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 bg-black text-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Power BI: Interactive Dashboard', desc: 'Real-time analytics & visuals' },
            { title: 'Python: Churn Prediction',    desc: 'Machine-learning model (coming soon)' },
            { title: 'SQL: Query Optimization',     desc: 'High-volume performance tuning' }
          ].map((p,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-gray-900 text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <ul className="space-y-4">
          <li><a href="https://linkedin.com/in/ing-sachin-yoganandham-a06b88117" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/Sachin-YN" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="mailto:sachin@sachiny.me" className="text-blue-400 hover:underline">Email: sachin@sachiny.me</a></li>
        </ul>
      </section>
    </div>
  );
}
