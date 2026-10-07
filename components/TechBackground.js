import { useEffect, useRef } from 'react'

// Aurora blobs + fine tech grid + a soft spotlight that follows the cursor
export default function TechBackground() {
  const glow = useRef(null)
  useEffect(() => {
    const el = glow.current
    const move = e => {
      el.style.background = `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgba(34,211,238,0.13), transparent 60%)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]" aria-hidden="true">
      <div className="tb-blob tb-a" />
      <div className="tb-blob tb-b" />
      <div className="tb-blob tb-c" />
      <div className="tb-grid" />
      <div ref={glow} className="absolute inset-0" />
      <div className="tb-vignette" />
    </div>
  )
}
