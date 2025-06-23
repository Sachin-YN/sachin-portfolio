import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-primary-bg"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-card-bg bg-opacity-60 backdrop-blur-lg border border-accent rounded-2xl p-12 shadow-card text-center">
          <h1 className="text-6xl font-extrabold text-white mb-6">Hey, I’m Sachin</h1>
          <p className="text-2xl italic text-gray-300 mb-8">
            Turning <span className="font-semibold text-accent">raw data</span> into actionable insights.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/ing-sachin-yoganandham-a06b88117" target="_blank" rel="noopener" className="px-6 py-3 bg-accent text-black rounded-full">LinkedIn</a>
            <a href="https://github.com/Sachin-YN" target="_blank" rel="noopener" className="px-6 py-3 border-2 border-accent rounded-full">GitHub</a>
          </div>
        </div>
      </div>
    </section>
);
}
