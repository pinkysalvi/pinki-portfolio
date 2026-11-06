import { profile } from '../data'
import { Mail } from './Icons'

const cols = [
  { title: 'Explore', links: [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience']] },
  { title: 'More', links: [['Projects', '#projects'], ['Contact', '#contact'], ['Resume', profile.resume]] },
]

export default function Footer() {
  const social = 'grid h-10 w-10 place-items-center rounded-xl border border-line text-lg text-muted transition hover:border-accent hover:text-ink'
  return (
    // Sits directly under the Contact band: the band's bottom border is the only divider
    <footer className="bg-bg2 pt-12 pb-6">
      <div className="wrap grid grid-cols-2 gap-8 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="col-span-2 lg:col-span-1">
          <a href="#home" className="font-head text-2xl font-bold text-grad">{profile.initials}</a>
          <p className="mt-2.5 mb-4 max-w-xs text-sm text-muted">
            Frontend Developer building accessible, responsive React interfaces.
          </p>
          <div className="flex gap-2.5">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={social}>
              <i className="devicon-github-original" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={social}>
              <i className="devicon-linkedin-plain" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={social}>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[2px]">{c.title}</h4>
            {c.links.map(([label, href]) => (
              <a key={label} href={href} className="mb-2 block text-sm text-muted hover:text-ink">
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <p className="wrap mt-8 border-t border-line pt-5 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
