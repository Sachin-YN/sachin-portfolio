import { motion, useReducedMotion } from 'framer-motion'

const LINE = 'A metric is only useful if someone can act on it.'
const KEY = ['act'] // words shown in the accent colour

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
}
const word = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Rule({ glyph }) {
  return (
    <div className="flex items-center gap-4 max-w-xl mx-auto" aria-hidden="true">
      <span className="flex-1 h-px bg-white/20" />
      <span className="text-cyan-300 text-xl leading-none">{glyph}</span>
      <span className="flex-1 h-px bg-white/20" />
    </div>
  )
}

export default function PrincipleStrip() {
  const reduce = useReducedMotion()
  const words = LINE.split(' ')

  return (
    <section className="px-4 md:px-8 py-14 text-center" aria-label="How I approach data">
      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs tracking-[0.2em] text-cyan-300 mb-5"
      >
        HOW I APPROACH DATA
      </motion.p>

      <Rule glyph={'“'} />

      <motion.blockquote
        variants={list}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-2xl mx-auto my-5 text-2xl sm:text-3xl font-medium leading-snug text-slate-100"
      >
        {words.map((w, i) => (
          <span key={i}>
            <motion.span
              variants={word}
              className={`inline-block ${KEY.includes(w.replace(/[.,]/g, '')) ? 'text-cyan-300' : ''}`}
            >
              {w}
            </motion.span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </motion.blockquote>

      <Rule glyph={'”'} />
    </section>
  )
}
