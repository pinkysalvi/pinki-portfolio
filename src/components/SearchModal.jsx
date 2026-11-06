import { useEffect, useRef, useState } from 'react'
// import { FiSearch } from 'react-icons/fi'
import { navLinks } from '../data/portfolio'

// Small "jump to section" palette opened by the navbar search button (or Ctrl/Cmd + K).
export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return
    setQuery('')
    inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  const results = navLinks.filter((l) => l.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-[15vh] backdrop-blur-sm"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search sections"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <label className="flex items-center gap-3 border-b border-line px-4 py-3.5">
          <FiSearch className="text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && results[0]) {
                window.location.hash = results[0].href
                onClose()
              }
            }}
            placeholder="Jump to a section…"
            className="w-full bg-transparent text-ink outline-none placeholder:text-muted"
          />
        </label>
        <ul className="max-h-72 overflow-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No match</li>}
          {results.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2.5 text-ink/90 hover:bg-accent/10 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
