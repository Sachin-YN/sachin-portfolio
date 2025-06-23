import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function RevealSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      {children}
    </motion.div>
  );
}
