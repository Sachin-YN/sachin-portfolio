import { motion } from 'framer-motion';
import { SiPython, SiPostgresql, SiPandas, SiNumpy, SiTableau, SiPowerbi } from 'react-icons/si';

const items = [
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiPandas />, name: 'Pandas' },
  { icon: <SiNumpy />, name: 'NumPy' },
  { icon: <SiTableau />, name: 'Tableau' },
  { icon: <SiPowerbi />, name: 'Power BI' },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-primary-bg text-center">
      <h2 className="text-4xl font-bold text-white mb-12">My Data Stack</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {items.map((item) => (
          <motion.div
            key={item.name}
            className="flex flex-col items-center p-4 bg-card-bg bg-opacity-60 rounded-lg"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-5xl text-accent mb-2">{item.icon}</div>
            <span className="text-gray-200">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
