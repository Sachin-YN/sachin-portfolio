import React, { useState, useEffect } from 'react';
import './index.css';
import Typewriter from 'react-typewriter-effect';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function App() {
  const [loading, setLoading] = useState(true);

  // show loader for 2s
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  // smooth scroll helper
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  // initialize tsParticles engine
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl animate-pulse z-50">
        Loading your experience...
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Particles: full - screen, behind everything */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            number: { value: 100, density: { enable: true, area: 800 } },
            opacity: { value: 0.8 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.2,
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />

      {/* semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-sm text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <span className="font-bold text-xl">Sachin</span>
          <div className="hidden md:flex space-x-6">
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Dark mode toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-4 right-4 z-50 p-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-600 transition"
        title="Toggle Dark Mode"
      >
        🌙
      </button>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow transition"
        title="Back to Top"
      >
        ⬆️
      </button>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-400 drop-shadow-lg">
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
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Transforming raw data into actionable insights, intelligent dashboards, and business value.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:scale-105 hover:bg-blue-700 transition-transform duration-300"
        >
          View Projects
        </a>
      </div>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 bg-gray-900 text-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Power BI – Sales Dashboard', desc: 'Interactive revenue insights (Coming Soon)' },
            { title: 'Python – Churn Prediction',  desc: 'Predictive model using Logistic Regression (Coming Soon)' },
            { title: 'SQL – Query Optimization',  desc: 'Speed tuning large-scale queries (Coming Soon)' },
          ].map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-300">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-black text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact</h2>
        <ul className="space-y-4">
          <li>
            <a href="https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117"
               className="text-blue-500 hover:underline"
               target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Sachin-YN"
               className="text-blue-500 hover:underline"
               target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:sachin@sachiny.me"
               className="text-blue-500 hover:underline">
              sachin@sachiny.me
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
