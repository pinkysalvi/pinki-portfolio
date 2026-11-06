import { useEffect, useRef, useState } from 'react'

// Cycles through words with a typing / deleting effect.
export function useTyped(words, { type = 80, erase = 40, hold = 1600 } = {}) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let delay = deleting ? erase : type
    if (!deleting && text === word) delay = hold
    if (deleting && text === '') delay = 300

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setI(n => n + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words, type, erase, hold])

  return text
}

// Light / dark theme. No fixed default: follows the visitor's device setting
// until they press the toggle; that choice is then saved as 'pp-theme-choice'.
const THEME_KEY = 'pp-theme-choice'

export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // follow device changes (e.g. OS switches to dark at night) unless the visitor picked one
  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)')
    const onChange = e => {
      let saved = null
      try {
        saved = localStorage.getItem(THEME_KEY)
      } catch {
        /* storage blocked */
      }
      if (!saved) setDark(e.matches)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () =>
    setDark(d => {
      try {
        localStorage.setItem(THEME_KEY, d ? 'light' : 'dark')
      } catch {
        /* storage blocked */
      }
      return !d
    })

  return [dark, toggle]
}

// Returns true once the element has scrolled into view.
export function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, inView]
}

// Counts from 0 up to `end` once `start` is true.
export function useCountUp(end, start) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    let v = 0
    let raf
    const step = () => {
      v = Math.min(end, v + Math.ceil(end / 30))
      setN(v)
      if (v < end) raf = requestAnimationFrame(step)
    }
    step()
    return () => cancelAnimationFrame(raf)
  }, [end, start])
  return n
}

// Which section id is currently in the middle of the screen.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}
