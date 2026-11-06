import { about } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="wrap section-pad">
      <SectionHeading eyebrow="About me" title="Frontend developer who owns the work end to end" />
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="card space-y-3.5 p-7 text-muted">
          {about.paragraphs.map(p => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <div className="grid gap-3.5">
          {about.facts.map(f => (
            <Reveal key={f.k} className="card flex flex-col px-5 py-4">
              <span className="text-xs uppercase tracking-[1.5px] text-muted">{f.k}</span>
              <span className="mt-0.5 font-semibold">{f.v}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
