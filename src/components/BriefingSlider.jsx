import { useState, useEffect } from 'react'

export default function BriefingSlider({ briefings }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % briefings.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [briefings.length])

  return (
    <div className="briefing-card">
      <div className="briefing-slides">
        {briefings.map((b, i) => (
          <div key={i} className={`briefing-slide ${i === current ? 'active' : ''}`}>
            <p className="briefing-time">{b.time}</p>
            <p className="briefing-msg">{b.msg}</p>
          </div>
        ))}
      </div>
      <div className="briefing-dots">
        {briefings.map((_, i) => (
          <span
            key={i}
            className={`bdot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}
