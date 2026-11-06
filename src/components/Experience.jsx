import { useState } from 'react'
import { experience } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const VISIBLE = 4

function Job({ job }) {
  const [open, setOpen] = useState(false)
  const points = open ? job.points : job.points.slice(0, VISIBLE)

  return (
    <Reveal as="article" className="card relative mb-5 p-5 sm:p-7">
      <span className="absolute top-8 -left-[25px] h-4 w-4 rounded-full border-[3px] border-accent bg-bg shadow-[0_0_0_5px_color-mix(in_srgb,var(--c-accent)_20%,transparent)] sm:-left-[31px]" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-head text-xl font-semibold">
          {job.role} <span className="text-accent">@ {job.company}</span>
        </h3>
        <span className="rounded-full border border-line px-2.5 py-0.5 text-xs whitespace-nowrap text-muted">
          {job.date}
        </span>
      </div>
      <p className="mt-1.5 mb-3 text-sm text-muted italic">{job.about}</p>
      <ul className="grid gap-2">
        {points.map(p => (
          <li key={p} className="relative pl-5 text-[.94rem] text-muted before:absolute before:left-0 before:text-cyan before:content-['▹']">
            {p}
          </li>
        ))}
      </ul>
      {job.points.length > VISIBLE && (
        <button onClick={() => setOpen(o => !o)} className="mt-3 text-sm font-semibold text-accent">
          {open ? 'Show less ↑' : `Show ${job.points.length - VISIBLE} more ↓`}
        </button>
      )}
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="wrap section-pad">
      <SectionHeading eyebrow="Experience" title="Where I've worked">
        7+ years across AdTech, fintech and software product companies.
      </SectionHeading>
      <div className="relative pl-[26px] before:absolute before:top-1.5 before:bottom-1.5 before:left-2 before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-accent2 before:to-transparent sm:pl-8">
        {experience.map(j => (
          <Job key={j.company} job={j} />
        ))}
      </div>
    </section>
  )
}
