import { useEffect, useRef } from 'react'

// Animated dots-and-lines network drawn on a fixed canvas behind the page.
export default function NetworkBackground() {
  const ref = useRef(null)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const c = ref.current
    const ctx = c.getContext('2d')
    let w, h, pts, raf

    const init = () => {
      w = c.width = innerWidth
      h = c.height = innerHeight
      const n = Math.min(90, Math.floor((w * h) / 16000))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const dark = document.documentElement.classList.contains('dark')
      const col = dark ? '120,150,255' : '91,124,250'
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.fillStyle = `rgba(${col},.6)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]
          const b = pts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(${col},${(1 - d / 130) * (dark ? 0.3 : 0.25)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    init()
    draw()
    addEventListener('resize', init)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', init)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
}
