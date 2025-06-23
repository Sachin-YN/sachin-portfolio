import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.add(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.replace(theme, next);
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <div className="flex font-sans">
      <Sidebar />
      <div className="fixed top-4 left-4 z-50">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
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
