import { useEffect, useState } from 'react'
import { moreSkills, skillFilters, skills } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const catLabel = c => (c === 'State' ? 'State & Data' : c)

function SkillCard({ skill }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = requestAnimationFrame(() => setWidth(skill.pct))
    return () => cancelAnimationFrame(t)
  }, [skill.pct])

  return (
    <div className="card p-4.5 transition duration-200 hover:-translate-y-1 hover:border-accent">
      <div className="mb-3.5 flex items-center justify-between">
        {skill.icon ? (
          <i className={`${skill.icon} h-8 text-3xl leading-8`} />
        ) : (
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent2 text-xs font-bold text-on-accent">
            {skill.badge}
          </span>
        )}
        <span className="text-sm font-bold text-cyan">{skill.pct}%</span>
      </div>
      <h3 className="font-head font-semibold">{skill.name}</h3>
      <small className="text-xs text-muted">{catLabel(skill.cat)}</small>
      <div className="mt-3 h-1.5 overflow-hidden rounded bg-line">
        <span
          className="block h-full rounded bg-gradient-to-r from-accent to-cyan transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [filter, setFilter] = useState('All')
  const shown = skills.filter(s => filter === 'All' || s.cat === filter)

  return (
    <section id="skills" className="wrap section-pad">
      {/* Title and filter tabs on top, cards in a full-width grid below */}
      <div className="mb-8">
        <SectionHeading eyebrow="Tech stack" title="Skills I use to build">
          From pixel-accurate UI to state, APIs, testing and release.
        </SectionHeading>
        <div className="-mt-4 flex flex-wrap gap-2">
            {skillFilters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  filter === f
                    ? 'border-accent bg-accent text-on-accent'
                    : 'border-line bg-card text-muted hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {shown.map(s => (
          <SkillCard key={s.name} skill={s} />
        ))}
      </div>

      <Reveal className="mt-10 flex flex-wrap gap-2">
        {moreSkills.map(t => (
          <span key={t} className="rounded-lg border border-line bg-bg2 px-3 py-1.5 text-sm text-muted">
            {t}
          </span>
        ))}
      </Reveal>
    </section>
  )
}
