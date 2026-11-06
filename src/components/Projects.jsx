import { projects } from '../data'
import { Arrow, Lock } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Project photo with a blue-purple overlay so every image matches the site theme
function Photo({ p }) {
  const img = (
    <>
      <img
        src={p.image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      {/* theme tint + soft fade into the card */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/35 via-transparent to-accent2/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a]/70 via-transparent to-transparent" />
    </>
  )
  return (
    <div className="relative h-48 overflow-hidden">
      {p.link ? (
        <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title}`} className="block h-full">
          {img}
        </a>
      ) : (
        img
      )}
    </div>
  )
}

// Illustrated placeholder, used when a project has no screenshot (e.g. internal tools)
function Placeholder({ p }) {
  return (
    <div className={`grid h-48 place-items-center overflow-hidden bg-gradient-to-br ${p.gradient}`}>
      <div className="grid h-[72%] w-[78%] translate-y-4 grid-rows-[10px_1fr] gap-2 rounded-xl border border-white/25 bg-white/10 p-2.5 backdrop-blur-sm transition duration-300 group-hover:translate-y-1.5">
        <div className="flex gap-1">
          {[0, 1, 2].map(i => (
            <i key={i} className="h-[7px] w-[7px] rounded-full bg-white/60" />
          ))}
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-1.5">
          <b className="rounded-md bg-white/20" />
          <b className="rounded-md bg-white/30" />
        </div>
      </div>
    </div>
  )
}

function Project({ p }) {
  return (
    <Reveal as="article" className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-accent">
      {p.image ? <Photo p={p} /> : <Placeholder p={p} />}

      <div className="flex flex-1 flex-col p-5.5">
        <div className="mb-2 flex items-start justify-between gap-2.5">
          <h3 className="font-head text-lg leading-snug font-semibold">{p.title}</h3>
          <span className="rounded-full border border-accent/35 bg-accent/15 px-2.5 py-1 text-[.72rem] font-semibold whitespace-nowrap text-accent">
            {p.badge}
          </span>
        </div>
        <p className="flex-1 text-sm text-muted">{p.desc}</p>
        <div className="my-3.5 flex flex-wrap gap-1.5">
          {p.stack.map(s => (
            <span key={s} className="rounded-md border border-line bg-bg2 px-2 py-0.5 text-xs text-muted">
              {s}
            </span>
          ))}
        </div>
        {p.link ? (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            Live demo <Arrow className="h-4 w-4" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <Lock className="h-4 w-4" /> Internal tool, requires company login
          </span>
        )}
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="wrap section-pad">
      <SectionHeading eyebrow="Selected work" title="Featured projects">
        Products and interfaces I've built, from personal React apps to AdTech tools used daily.
      </SectionHeading>
      <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <Project key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
