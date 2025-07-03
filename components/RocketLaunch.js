// components/RocketLaunch.js

import { FaSpaceShuttle } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function RocketLaunch() {
  const [launched, setLaunched] = useState(false)
  const [smokeTrail, setSmokeTrail] = useState([])

  const handleLaunch = () => {
    setLaunched(true)

    // Generate smoke puffs every 100ms
    const smokeInterval = setInterval(() => {
      setSmokeTrail(prev => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 40 + 10,
          bottom: Math.random() * 20,
        },
      ])
    }, 100)

    // Stop everything after 5 seconds
    setTimeout(() => {
      setLaunched(false)
      clearInterval(smokeInterval)
      setSmokeTrail([])
    }, 5000)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-16 h-16">
      <div
        className={`relative transition-transform duration-[3s] ease-in-out ${
          launched ? 'translate-x-[100vw]' : ''
        }`}
      >
        <button onClick={handleLaunch} className="relative flex flex-col items-center">
          <FaSpaceShuttle className="text-white text-4xl z-20 rotate-90" />

          {launched && (
            <>
              {/* Flame effect */}
              <div className="flame absolute left-5 top-10 z-10 w-3 h-3" />
              {/* Smoke puffs */}
              {smokeTrail.map(puff => (
                <div
                  key={puff.id}
                  className="absolute w-2 h-2 bg-gray-200 opacity-50 rounded-full animate-smoke"
                  style={{
                    left: `${puff.left}px`,
                    bottom: `${puff.bottom}px`,
                  }}
                />
              ))}
            </>
          )}
        </button>
      </div>

      {/* Stars during launch */}
      {launched && (
        <div className="absolute inset-0 w-screen h-screen pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
