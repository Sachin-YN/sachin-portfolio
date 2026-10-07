import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ref = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const el = ref.current
    el.style.display = 'block'
    let x = -100, y = -100, tx = -100, ty = -100, raf
    const move = e => {
      tx = e.clientX; ty = e.clientY
      const hit = e.target.closest && e.target.closest('a,button,input,textarea,.tech-card')
      el.classList.toggle('cursor-hover', !!hit)
    }
    const loop = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18
      el.style.transform = `translate(${x - 16}px, ${y - 16}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    loop()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move) }
  }, [])
  return <div ref={ref} className="cursor-ring" style={{ display: 'none' }} aria-hidden="true" />
}
