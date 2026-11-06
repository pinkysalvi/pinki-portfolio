import { useEffect, useRef } from 'react'
import { readThemeRgb } from '../colors'

// Floating, glowing code words drifting up behind the page (plain text, no pills).
// Words near the mouse light up. Edit SNIPPETS to change what appears.
const SNIPPETS = [
  // code
  '<div>', '</>', '{ }', '=>', 'const', 'let', 'return', 'import', 'export',
  'useState()', 'useEffect()', 'useMemo()', 'props', '<App />', 'npm run dev', 'async', 'await',
  'fetch()', '.map()', '.filter()', 'git push', 'flex', 'grid', 'className', '@media',
  '[ ]', '( )', '&&', '===', '...', 'onClick', 'console.log()', 'function', '</div>', '<section>',
  'React.lazy()', 'createSlice()', 'aria-label', 'loading="lazy"',
  // skills from the CV
  'React', 'TypeScript', 'JavaScript', 'JSX', 'Redux Toolkit', 'Context API', 'Tailwind',
  'Sass', 'HTML5', 'CSS3', 'Jest', 'Cypress', 'REST API', 'JWT', 'Figma', 'WCAG',
  'shadcn/ui', 'Chart.js', 'GSAP', 'Webpack', 'Jenkins', 'Node.js',
]

// Palettes come from the current colour theme (see src/colors.js).
// Dark mode: theme colours + a lighter tint. Light mode: slightly darker versions.
const mix = (rgb, to, t) => rgb.map((v, i) => v + (to[i] - v) * t)
const buildPalettes = () => {
  const [a1, a2, a3] = readThemeRgb()
  return {
    dark: [a1, a3, a2, mix(a1, [255, 255, 255], 0.3)],
    light: [mix(a1, [0, 0, 0], 0.2), mix(a3, [0, 0, 0], 0.35), mix(a2, [0, 0, 0], 0.2)],
  }
}

export default function CodeBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: -9999, y: -9999 }
    let w, h, tokens, raf
    let palettes = buildPalettes()
    const onColors = () => {
      palettes = buildPalettes()
    }
    window.addEventListener('colorthemechange', onColors)

    const make = (anyY = true) => {
      const size = 11 + Math.random() * 9
      return {
        text: SNIPPETS[(Math.random() * SNIPPETS.length) | 0],
        x: Math.random() * w,
        y: anyY ? Math.random() * h : h + 20,
        size,
        // bigger words move a bit faster: gives a sense of depth
        speed: 0.12 + (size - 11) * 0.03 + Math.random() * 0.1,
        drift: (Math.random() - 0.5) * 0.15,
        alpha: 0.18 + Math.random() * 0.32,
        color: (Math.random() * 4) | 0,
        phase: Math.random() * Math.PI * 2,
      }
    }

    const init = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      w = innerWidth
      h = innerHeight
      c.width = w * dpr
      c.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(70, Math.max(24, Math.floor((w * h) / 22000)))
      tokens = Array.from({ length: n }, () => make(true))
    }

    const draw = t => {
      ctx.clearRect(0, 0, w, h)
      const dark = document.documentElement.classList.contains('dark')
      const pal = dark ? palettes.dark : palettes.light
      const boost = dark ? 1 : 0.75

      for (const k of tokens) {
        if (!reduce) {
          k.y -= k.speed
          k.x += k.drift
          if (k.y < -30 || k.x < -150 || k.x > w + 150) Object.assign(k, make(false))
        }
        // gentle twinkle
        const tw = 0.75 + 0.25 * Math.sin(t / 900 + k.phase)
        // brighten near the mouse
        const d = Math.hypot(k.x - mouse.x, k.y - mouse.y)
        const near = d < 160 ? 1 - d / 160 : 0
        const a = Math.min(0.95, (k.alpha * tw + near * 0.6) * boost)
        const [r, g, b] = pal[k.color % pal.length]

        ctx.font = `500 ${k.size}px "JetBrains Mono", "Fira Code", Consolas, monospace`
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`
        ctx.shadowColor = `rgba(${r},${g},${b},${dark ? 0.9 : 0.4})`
        ctx.shadowBlur = dark ? 8 + near * 14 : 2 + near * 6
        ctx.fillText(k.text, k.x, k.y)
      }
      ctx.shadowBlur = 0
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const onMove = e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = mouse.y = -9999
    }
    const onResize = () => {
      init()
      if (reduce) requestAnimationFrame(draw)
    }

    init()
    raf = requestAnimationFrame(draw)
    addEventListener('resize', onResize)
    addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', onResize)
      window.removeEventListener('colorthemechange', onColors)
      removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft coloured glows behind the code */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px] dark:bg-accent/25" />
      <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-accent2/15 blur-[120px] dark:bg-accent2/20" />
      <div className="absolute -bottom-40 left-1/4 h-[440px] w-[440px] rounded-full bg-cyan/10 blur-[120px] dark:bg-cyan/15" />
      {/* faint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--c-accent)_7%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--c-accent)_7%,transparent)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
