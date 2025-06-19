import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import Typewriter from 'react-typewriter-effect';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  // 1) Fake loading screen
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  // 2) VANTA dynamic import
  useEffect(() => {
    if (!vantaEffect) {
      import('vanta/dist/vanta.stars.min')
        .then((VANTA) => {
          const effect = VANTA.default({
            el: vantaRef.current,
            THREE:     require('three'),
            backgroundColor: 0x000000,
            color:      0xffffff,
            scale:      1.0,
            scaleMobile:1.0,
            speed:      0.5,
            orbitSpeed: 0.2,
            showDots:   false,
          });
          setVantaEffect(effect);
        })
        .catch(console.error);
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  // scroll helper
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  // 3) Loader
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl animate-pulse">
        Loading…
      </div>
    );
  }

  return (
    <div ref={vantaRef} className="relative min-h-screen overflow-hidden">
      {/* semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-20 bg-black/50 backdrop-blur-sm text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <span className="font-bold text-xl">Sachin</span>
          <div className="hidden md:flex space-x-6">
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact"  className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-4 right-4 z-30 p-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-600 transition"
        title="Toggle Dark Mode"
      >🌙</button>

      {/* Scroll-to-top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 z-30 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow transition"
        title="Back to Top"
      >⬆️</button>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 fade-in">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-400 drop-shadow-lg"
        >
          <Typewriter
            textStyle={{ fontFamily: 'Roboto', fontWeight: 700 }}
            startDelay={100}
            cursorColor="#3B82F6"
            multiText={[
              "Hi, I'm Sachin Yoganandham",
              'Data Analyst',
              'Dashboard Enthusiast',
            ]}
            multiTextDelay={1500}
            typeSpeed={70}
            deleteSpeed={50}
            loop
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4 text-lg text-gray-300 max-w-2xl"
        >
          Transforming raw data into actionable insights, intelligent dashboards, and business value.
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          View Projects
        </motion.a>
      </div>

      {/* Projects */}
      <section id="projects" className="relative z-10 bg-gray-900 text-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Power BI – Sales Dashboard', desc: 'Interactive revenue insights' },
            { title: 'Python – Churn Prediction',  desc: 'Predictive model (Coming Soon)' },
            { title: 'SQL – Query Optimization',  desc: 'Speed tuning queries' },
          ].map((p,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-300">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 bg-black text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact</h2>
        <ul className="space-y-4">
          <li><a href="https://linkedin.com/in/ing-sachin-yoganandham" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/Sachin-YN" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="mailto:sachin@sachiny.me" className="text-blue-500 hover:underline">Email Me</a></li>
        </ul>
      </section>
    </div>
  );
}
