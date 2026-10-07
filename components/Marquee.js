export default function Marquee({ items }) {
  const list = [...items, ...items]
  const mask = 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)'
  return (
    <div
      className="overflow-hidden border-y border-white/10 bg-black/30 backdrop-blur-sm py-4"
      style={{ WebkitMaskImage: mask, maskImage: mask }}
    >
      <div className="flex w-max gap-10 animate-marquee hover:[animation-play-state:paused]">
        {list.map((t, i) => (
          <span key={i} className="text-lg font-mono text-cyan-200/90 whitespace-nowrap">{t}</span>
        ))}
      </div>
    </div>
  )
}
