import React from 'react';
import './index.css';
import Typewriter from 'react-typewriter-effect';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-earth-from-space-4902/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="z-10 relative flex flex-col items-center justify-center text-center px-4 h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-400 drop-shadow-lg"
        >
          <Typewriter
            textStyle={{
              fontFamily: 'Roboto',
              fontWeight: 700,
            }}
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl drop-shadow-sm"
        >
          Transforming raw data into actionable insights, intelligent dashboards, and business value.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out"
        >
          View Projects
        </motion.a>
      </div>
    </div>
  );
}
