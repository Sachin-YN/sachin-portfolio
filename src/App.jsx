import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 pt-24">
    <h1 className="text-5xl font-extrabold mb-4 text-blue-800">Sachin Yoganandham</h1>
    <p className="text-2xl text-gray-700 font-medium">Aspiring Data Analyst</p>
    <p className="mt-4 text-gray-500 max-w-xl">
      Transforming raw data into actionable insights, intelligent dashboards, and business value.
    </p>
  </div>
);

const About = () => (
  <div className="p-6 max-w-3xl mx-auto pt-28">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">About Me</h2>
    <p className="text-lg">
      Hi, I’m Sachin Yoganandham — a data analyst turning complex data into meaningful insights.
      I specialize in SQL, Python, Power BI and automation using cloud-based tools.
    </p>
  </div>
);

const Projects = () => (
  <div className="p-6 max-w-4xl mx-auto pt-28">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="p-4 border rounded shadow">
        <h3 className="font-semibold text-lg">📊 Power BI – Sales Dashboard</h3>
        <p className="text-sm text-gray-600">Interactive visuals, revenue tracking, and KPIs (Coming soon)</p>
      </div>
      <div className="p-4 border rounded shadow">
        <h3 className="font-semibold text-lg">🤖 Python – Churn Prediction</h3>
        <p className="text-sm text-gray-600">Logistic Regression + SHAP values (Coming soon)</p>
      </div>
      <div className="p-4 border rounded shadow">
        <h3 className="font-semibold text-lg">🧮 SQL – Query Optimization</h3>
        <p className="text-sm text-gray-600">Window functions, CTEs, and indexes (Coming soon)</p>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <div className="p-6 max-w-3xl mx-auto pt-28">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">Blog</h2>
    <p>🚧 Posts coming soon! I'll share thoughts on data strategy, tools, and career growth.</p>
  </div>
);

const Contact = () => (
  <div className="p-6 max-w-3xl mx-auto pt-28">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">Contact</h2>
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
      <Navbar />
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
