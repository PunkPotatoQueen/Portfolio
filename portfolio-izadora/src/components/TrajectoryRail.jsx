import { useEffect, useState } from 'react'
import heroImg from '../assets/hero.png'

export default function TrajectoryRail() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="trajectory-rail" aria-hidden="true">
      <div className="trajectory-fill" style={{ height: `${progress * 100}%` }} />
      <img
        src={heroImg}
        alt=""
        className="trajectory-rocket"
        style={{ top: `${progress * 100}%` }}
      />
    </div>
  )
}
