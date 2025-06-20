import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-6 max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to Our Tech Frontier
        </h1>

        <div className="text-2xl font-medium text-white mb-8">
          <Typewriter
            textStyle={{
              fontFamily: 'inherit',
              color: '#fff',
            }}
            startDelay={2000}
            cursorColor="#ffffff"
            multiText={[
              'Innovative Solutions',
              'Cutting-Edge Design',
              'Unmatched Performance'
            ]}
            multiTextDelay={3000}
            typeSpeed={100}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-opacity-90"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}