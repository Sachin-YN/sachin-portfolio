// components/RocketLaunch.js

import { FaRocket } from 'react-icons/fa'
import { useState } from 'react'

export default function RocketLaunch() {
  const [launched, setLaunched] = useState(false)

  const handleLaunch = () => {
    setLaunched(true)
    setTimeout(() => setLaunched(false), 5000) // Reset after 5s
  }

  return (
    <div className="fixed top-4 left-4 z-50 w-12 h-12">
      <div
        className={`relative transition-transform duration-[2s] ease-in-out ${
          launched ? 'translate-x-[120vw] -translate-y-[100vh]' : ''
        }`}
      >
        <button onClick={handleLaunch} className="relative flex flex-col items-center">
          <FaRocket className="text-white text-3xl z-20" />
          {launched && <div className="flame absolute top-8 z-10"></div>}
        </button>
      </div>

      {/* Stars appear on launch */}
      {launched && (
        <div className="absolute inset-0 w-screen h-screen pointer-events-none overflow-hidden">
          {[...Array(40)].map((_, i) => (
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
