import React from 'react';
import './index.css';
import Typewriter from 'react-typewriter-effect';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center text-center px-4">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="https://cdn.coverr.co/videos/coverr-earth-from-space-4902/1080p.mp4" type="video/mp4" />
      </video>
      <div className="z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
          <Typewriter
            textStyle={{
              fontFamily: 'Roboto',
              fontWeight: 700,
            }}
            startDelay={100}
            cursorColor="#3B82F6"
            multiText={[
              "Hi, I'm Sachin Yoganandham",
              "Data Analyst",
              "Dashboard Enthusiast"
            ]}
            multiTextDelay={1500}
            typeSpeed={70}
            deleteSpeed={50}
          />
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Transforming raw data into actionable insights, intelligent dashboards, and business value.
        </p>
        <a href="#projects" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-full animate-bounce hover:bg-blue-700 transition">
          View Projects
        </a>
      </div>
    </div>
  );
}