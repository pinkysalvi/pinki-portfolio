import { useEffect, useState } from 'react'

// Colour themes. Each theme is 3 colours: [main accent, second accent, highlight].
export const PRESETS = [
  { id: 'azure', name: 'Azure', colors: ['#5b7cfa', '#9b6bff', '#38d5f5'] },
  { id: 'violet', name: 'Violet', colors: ['#8b5cf6', '#d946ef', '#ec4899'] },
  { id: 'emerald', name: 'Emerald', colors: ['#10b981', '#14b8a6', '#84cc16'] },
  { id: 'sunset', name: 'Sunset', colors: ['#f97316', '#ef4444', '#f59e0b'] },
  { id: 'rose', name: 'Rose', colors: ['#f43f5e', '#ec4899', '#a855f7'] },
]

export const SWATCHES = [
  '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
  '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
  '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#78716c',
]

const STORAGE_KEY = 'pp-colors'

// --- small colour helpers ---
const hexToRgb = hex => {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.replace(/./g, c => c + c) : h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
const rgbToHex = rgb => '#' + rgb.map(v => Math.round(v).toString(16).padStart(2, '0')).join('')

const rgbToHsl = ([r, g, b]) => {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4
    h *= 60
  }
  return [h, s, l]
}
const hslToRgb = ([h, s, l]) => {
  const k = n => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [f(0) * 255, f(8) * 255, f(4) * 255]
}

const luminance = hex => {
  const c = hexToRgb(hex).map(v => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
}

// Build a 3-colour theme from any single colour (neighbouring hues)
export const deriveTheme = hex => {
  const [h, s, l] = rgbToHsl(hexToRgb(hex))
  const shift = d => rgbToHex(hslToRgb([(h + d + 360) % 360, Math.max(s, 0.45), Math.min(Math.max(l, 0.45), 0.65)]))
  return [hex, shift(35), shift(-35)]
}

// Write the colours to CSS variables used across the site
export const applyColors = ([a1, a2, a3]) => {
  const root = document.documentElement.style
  root.setProperty('--c-accent', a1)
  root.setProperty('--c-accent2', a2)
  root.setProperty('--c-accent3', a3)
  // dark text on light accents (yellow, lime...) so buttons stay readable
  root.setProperty('--c-on-accent', luminance(a1) > 0.45 ? '#0b1124' : '#ffffff')
  window.dispatchEvent(new Event('colorthemechange'))
}

const load = () => {
  try {
    const v = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (v && Array.isArray(v.colors)) return v
  } catch {
    /* ignore */
  }
  return { id: 'azure', colors: PRESETS[0].colors }
}

export function useColorTheme() {
  const [theme, setTheme] = useState(load)

  useEffect(() => {
    applyColors(theme.colors)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme))
    } catch {
      /* storage blocked */
    }
  }, [theme])

  const choosePreset = p => setTheme({ id: p.id, colors: p.colors })
  const chooseCustom = hex => setTheme({ id: 'custom', custom: hex, colors: deriveTheme(hex) })
  return { theme, choosePreset, chooseCustom }
}

// Read the current theme colours as [r,g,b] arrays (for the canvas background)
export const readThemeRgb = () => {
  const cs = getComputedStyle(document.documentElement)
  return ['--c-accent', '--c-accent2', '--c-accent3'].map(v => hexToRgb(cs.getPropertyValue(v).trim() || '#5b7cfa'))
}
