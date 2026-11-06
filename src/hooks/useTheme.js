import { useEffect, useState } from 'react'
import { accents } from '../data/portfolio'

const read = (key, fallback) => {
  try {
    return localStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}
const write = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage may be blocked – ignore */
  }
}

export default function useTheme() {
  const [dark, setDark] = useState(() => read('theme', 'light') === 'dark')
  const [accentIndex, setAccentIndex] = useState(() => Number(read('accent', 0)) || 0)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    write('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const { a, b } = accents[accentIndex] ?? accents[0]
    document.documentElement.style.setProperty('--accent', a)
    document.documentElement.style.setProperty('--accent-2', b)
    write('accent', String(accentIndex))
  }, [accentIndex])

  return {
    dark,
    toggleDark: () => setDark((d) => !d),
    accentIndex,
    setAccentIndex,
  }
}
