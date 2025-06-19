import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Sachin Yoganandham</h1>
      <p className="text-xl">Aspiring Advanced Data Analyst</p>
      <p className="mt-2 text-gray-600">Building insights, dashboards, and data-driven stories.</p>
      <div className="mt-6 space-x-4">
        <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700">
        Hi, I’m Sachin. I currently work as a Data Analyst and am on a journey to become an advanced analyst.
        I love solving problems with SQL, Python, and dashboards that actually tell stories.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p className="text-gray-700">Project demos and write-ups will appear here soon. Stay tuned!</p>
    </div>
  );
}

function Blog() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <p className="text-gray-700">Coming soon: I’ll share posts on data analytics, career growth, and personal projects.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <ul className="list-disc list-inside mt-2 text-blue-600">
        <li><a href="https://www.linkedin.com/in/YOUR-LINK" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="mailto:your.email@example.com">Email Me</a></li>
      </ul>
    </div>
  );
}

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
