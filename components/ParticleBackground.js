import { useEffect, useRef } from 'react'

// Interactive network of nodes that gently flee the mouse
export default function ParticleBackground() {
  const ref = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cv = ref.current
    const ctx = cv.getContext('2d')
    let W, H, raf, P = [], mx = -999, my = -999
    const init = () => {
      W = cv.width = window.innerWidth
      H = cv.height = window.innerHeight
      P = Array.from({ length: Math.min(80, Math.floor(W / 16)) }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      }))
    }
    const move = e => { mx = e.clientX; my = e.clientY }
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#22d3ee'
      ctx.strokeStyle = '#22d3ee'
      P.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        const dx = p.x - mx, dy = p.y - my, dm = Math.hypot(dx, dy)
        if (dm < 120 && dm > 0) { p.x += (dx / dm) * 1.5; p.y += (dy / dm) * 1.5 }
        ctx.globalAlpha = 0.6
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 7); ctx.fill()
        for (let j = i + 1; j < P.length; j++) {
          const q = P[j], d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 130) {
            ctx.globalAlpha = (1 - d / 130) * 0.3
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          }
        }
      })
      raf = requestAnimationFrame(draw)
    }
    init(); draw()
    window.addEventListener('resize', init)
    window.addEventListener('mousemove', move)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', init)
      window.removeEventListener('mousemove', move)
    }
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 w-full h-full z-[5] pointer-events-none" />
}
