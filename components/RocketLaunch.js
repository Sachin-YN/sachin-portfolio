// components/RocketLaunch.js
import { useEffect, useRef, useState } from 'react'
import { FaRocket } from 'react-icons/fa'

export default function RocketLaunch() {
  const [launched, setLaunched] = useState(false)
  const [countdown, setCountdown] = useState(null)
  const rocketRef = useRef(null)

  const handleLaunch = () => {
    if (launched) return

    setCountdown(3)
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          clearInterval(interval)
          setCountdown(null)
          setLaunched(true)
          return null
        }
        return prev - 1
      })
    }, 1000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!launched) return

      const star = document.createElement('div')
      star.className = 'star'
      star.style.top = Math.random() * 100 + 'vh'
      star.style.left = '0px'
      document.body.appendChild(star)

      setTimeout(() => star.remove(), 4000)
    }, 100)

    return () => clearInterval(interval)
  }, [launched])

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden sm:block">
      {countdown !== null && (
        <div className="mb-2 text-white text-lg font-semibold animate-pulse">
          Launching in {countdown}...
        </div>
      )}
      <div
        ref={rocketRef}
        onClick={handleLaunch}
        className={`cursor-pointer relative transition-transform duration-1000 ease-in-out ${
          launched ? 'animate-rocket-fly' : ''
        }`}
      >
        <FaRocket size={40} className="text-white drop-shadow-lg" />
        {!launched && <div className="flame absolute left-3 top-10 z-10" />}
      </div>
    </div>
  )
}
