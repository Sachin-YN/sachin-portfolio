import React from "react";
import { Typewriter } from "react-simple-typewriter";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 pt-24">
      <video className="background-video" autoPlay muted loop>
        <source src="https://cdn.coverr.co/videos/coverr-earth-from-space-4902/1080p.mp4" type="video/mp4" />
      </video>
      <h1 className="text-5xl font-extrabold mb-4 text-blue-400">
        <Typewriter
          words={["Hi, I'm Sachin Yoganandham", "Data Analyst", "Dashboard Enthusiast"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="mt-4 text-gray-300 max-w-xl">
        Transforming raw data into actionable insights, intelligent dashboards, and business value.
      </p>
      <a href="#projects" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full animate-bounce hover:bg-blue-700 transition">
        View Projects
      </a>
    </div>
  );
};

export default App;
