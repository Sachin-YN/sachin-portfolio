import React from 'react';
import './index.css';
import Typewriter from 'react-typewriter-effect';

export default function App() {
  return (
    <div className="relative bg-black text-white">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-earth-from-space-4902/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
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
          />
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Transforming raw data into actionable insights, intelligent dashboards,
          and business value.
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-full animate-bounce hover:bg-blue-700 transition"
        >
          View Projects
        </a>
      </div>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 bg-gray-900 text-white py-20 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Power BI – Sales Dashboard',
              desc: 'Interactive revenue insights (Coming Soon)',
            },
            {
              title: 'Python – Churn Prediction',
              desc: 'Predictive model using Logistic Regression (Coming Soon)',
            },
            {
              title: 'SQL – Query Optimization',
              desc: 'Speed tuning large-scale queries (Coming Soon)',
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-black text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Sachin-YN"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:sachin@sachiny.me" className="text-blue-500 hover:underline">
              sachin@sachiny.me
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
