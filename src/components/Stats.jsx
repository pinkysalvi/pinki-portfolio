import { stats } from '../data'
import { useCountUp, useInView } from '../hooks'

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start)
  return (
    <div className="border-line px-4 py-7 text-center odd:border-r max-lg:[&:nth-child(-n+2)]:border-b lg:border-r lg:last:border-r-0">
      <span className="font-head text-4xl font-bold">{n}</span>
      <span className="font-head text-3xl font-bold text-accent">{suffix}</span>
      <span className="mt-1 block text-xs uppercase tracking-[1.5px] text-muted">{label}</span>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView(0.3)
  return (
    <section ref={ref} className="wrap card grid grid-cols-2 lg:grid-cols-4">
      {stats.map(s => (
        <Stat key={s.label} {...s} start={inView} />
      ))}
    </section>
  )
}
