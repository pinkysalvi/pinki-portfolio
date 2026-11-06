import { useEffect, useRef, useState } from 'react'
import { PRESETS, SWATCHES, useColorTheme } from '../colors'

const PaletteIcon = p => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M12 22a10 10 0 1 1 10-10c0 2.8-2.2 4-4 4h-1.8a1.7 1.7 0 0 0-1.2 2.9 1.7 1.7 0 0 1-1.2 2.9z" />
    <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
    <circle cx="10.5" cy="6.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="7.5" r="1" fill="currentColor" />
  </svg>
)
const Check = p => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M5 12l5 5 9-10" />
  </svg>
)

// Three overlapping dots showing a theme's colours
const Dots = ({ colors }) => (
  <span className="flex">
    {colors.map((c, i) => (
      <span key={i} className="-ml-1.5 h-4 w-4 rounded-full border-2 border-card first:ml-0" style={{ background: c }} />
    ))}
  </span>
)

export default function ColorPicker({ className = '' }) {
  const { theme, choosePreset, chooseCustom } = useColorTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // close on outside click or Escape
  useEffect(() => {
    if (!open) return
    const onDown = e => ref.current && !ref.current.contains(e.target) && setOpen(false)
    const onKey = e => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const label = 'text-[11px] font-semibold uppercase tracking-[1.5px] text-muted'

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Change colour theme"
        aria-expanded={open}
        className={`${className} text-accent`}
      >
        <PaletteIcon className="h-5 w-5" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Colour theme"
          className="absolute top-12 right-0 z-50 w-64 rounded-2xl border border-line bg-card p-3 shadow-[0_20px_50px_rgba(5,8,22,.35)]"
        >
          <p className={`${label} px-2 pt-1 pb-2`}>Colour theme</p>
          <ul>
            {PRESETS.map(p => (
              <li key={p.id}>
                <button
                  onClick={() => choosePreset(p)}
                  className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm font-semibold transition hover:bg-bg2 ${
                    theme.id === p.id ? 'bg-bg2' : ''
                  }`}
                >
                  <Dots colors={p.colors} />
                  <span className="flex-1 text-left">{p.name}</span>
                  {theme.id === p.id && <Check className="h-4 w-4 text-accent" />}
                </button>
              </li>
            ))}
          </ul>

          <div className="my-2 border-t border-line" />

          <div className="flex items-center justify-between px-2 pt-1 pb-2">
            <p className={label}>Custom colour</p>
            {theme.id === 'custom' && <Check className="h-4 w-4 text-accent" />}
          </div>
          <div className="grid grid-cols-6 gap-2 px-2">
            {SWATCHES.map(c => {
              const active = theme.id === 'custom' && theme.custom === c
              return (
                <button
                  key={c}
                  onClick={() => chooseCustom(c)}
                  aria-label={`Use colour ${c}`}
                  aria-pressed={active}
                  className={`aspect-square rounded-lg transition hover:scale-110 ${active ? 'ring-2 ring-ink ring-offset-2 ring-offset-card' : ''}`}
                  style={{ background: c }}
                />
              )
            })}
          </div>

          <label className="mx-2 mt-3 mb-1 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line px-3 py-2.5 text-sm font-semibold transition hover:border-accent">
            <span className="h-6 w-6 rounded-md bg-[conic-gradient(#ef4444,#f59e0b,#84cc16,#06b6d4,#6366f1,#d946ef,#ef4444)]" />
            <span className="flex-1">Pick any colour…</span>
            <input
              type="color"
              value={theme.custom || theme.colors[0]}
              onChange={e => chooseCustom(e.target.value)}
              className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
              aria-label="Pick any colour"
            />
          </label>
        </div>
      )}
    </div>
  )
}
