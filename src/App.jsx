import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-4xl font-bold mb-4">Sachin Yoganandham</h1>
    <p className="text-xl">Aspiring Data Analyst</p>
    <p className="mt-2 text-gray-600">Transforming data into insights, stories, and strategy.</p>
    <nav className="mt-6 space-x-4">
      <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>
      <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
      <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
    </nav>
  </div>
);

const About = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <p>
      Hi, I’m Sachin Yoganandham — a data analyst turning complex data into meaningful insights.
      I specialize in SQL, Python, and visualization tools like Power BI. Currently focused on
      advanced analytics and automation to scale business impact.
    </p>
  </div>
);

const Projects = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <ul className="list-disc list-inside text-left">
      <li>📊 Power BI – Sales Dashboard (Coming soon)</li>
      <li>🤖 Python – Churn Prediction Model (Coming soon)</li>
      <li>🧮 SQL – Advanced Query Optimization (Coming soon)</li>
    </ul>
  </div>
);

const Blog = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Blog</h2>
    <p>Posts coming soon! I'll share thoughts on data strategy, tools, and career growth.</p>
  </div>
);

const Contact = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <ul className="list-disc list-inside text-blue-600">
      <li><a href="https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117" target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li><a href="https://github.com/Sachin-YN" target="_blank" rel="noreferrer">GitHub</a></li>
      <li><a href="mailto:sachin@sachiny.me">Email Me</a></li>
    </ul>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
