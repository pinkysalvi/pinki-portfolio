import { useState } from 'react'
import { navLinks, profile } from '../data'
import { useActiveSection, useTheme } from '../hooks'
import ColorPicker from './ColorPicker'
import { Close, Menu, Moon, Sun } from './Icons'

const label = id => id[0].toUpperCase() + id.slice(1)

export default function Navbar() {
  const active = useActiveSection(navLinks)
  const [dark, toggleTheme] = useTheme()
  const [open, setOpen] = useState(false)

  const linkCls = id =>
    `relative text-sm transition-colors hover:text-ink ${
      active === id
        ? 'text-ink lg:after:absolute lg:after:inset-x-0 lg:after:-bottom-1.5 lg:after:h-0.5 lg:after:rounded lg:after:bg-accent'
        : 'text-muted'
    }`

  const iconBtn =
    'grid h-10 w-10 place-items-center rounded-xl border border-line bg-card text-ink transition hover:border-accent'

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-xl">
      <div className="wrap flex h-[68px] items-center justify-between">
        <a href="#home" className="font-head text-2xl font-bold tracking-tight text-grad" aria-label="Home">
          {profile.initials}
        </a>

        <nav className="hidden gap-7 lg:flex">
          {navLinks.map(id => (
            <a key={id} href={`#${id}`} className={linkCls(id)}>
              {label(id)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={profile.resume}
            download
            className="hidden rounded-xl border border-line bg-card px-3.5 py-2 text-sm transition hover:border-accent sm:block"
          >
            Resume
          </a>
          <ColorPicker className={iconBtn.replace('text-ink', '')} />
          <button onClick={toggleTheme} className={iconBtn} aria-label="Toggle light or dark theme">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setOpen(o => !o)}
            className={`${iconBtn} lg:hidden`}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg px-4 pb-2 lg:hidden">
          {navLinks.map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`block border-b border-line py-3 last:border-0 ${linkCls(id)}`}
            >
              {label(id)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
