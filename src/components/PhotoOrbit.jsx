import { profile } from '../data'

// Hero graphic: photo with a soft glow, thin rings, a slowly turning network of
// lines and glowing dots behind it, and floating tech icons around it.

// Outer network points (500x500 box, centre 250,250)
const NODES = [
  [240, 28], [355, 95], [462, 225], [435, 352], [365, 478],
  [235, 492], [80, 465], [15, 258], [122, 88], [60, 330], [430, 140],
]
// Lines between points (indexes into NODES)
const EDGES = [
  [0, 1], [1, 10], [10, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 9], [9, 7], [7, 8], [8, 0],
  [0, 6], [8, 3], [1, 7], [2, 5], [10, 9], [8, 4],
]

const ICONS = [
  { icon: 'devicon-javascript-plain colored', pos: 'top-[18%] left-[12%]', delay: '0s' },
  { icon: 'devicon-react-original colored', pos: 'top-[16%] right-[12%]', delay: '1.5s' },
  { icon: 'devicon-tailwindcss-original colored', pos: 'bottom-[18%] left-[12%]', delay: '3s' },
  { icon: 'devicon-typescript-plain colored', pos: 'bottom-[16%] right-[13%]', delay: '4.5s' },
]

export default function PhotoOrbit() {
  return (
    <div className="relative aspect-square w-[min(330px,86vw)] lg:w-[470px]">
      {/* network of lines and dots, turning very slowly */}
      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full animate-spin-slower">
        <defs>
          <filter id="nodeGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <g className="stroke-accent/45 dark:stroke-accent/55" strokeWidth="1.2">
          {EDGES.map(([a, b]) => (
            <line key={`${a}-${b}`} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
          ))}
        </g>
        {NODES.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="9"
              className="animate-pulse fill-accent2/60"
              filter="url(#nodeGlow)"
              style={{ animationDelay: `${(i % 5) * 0.4}s` }}
            />
            <circle cx={x} cy={y} r="4" className="fill-accent" />
          </g>
        ))}
      </svg>

      {/* soft glow behind the photo */}
      <div className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--c-accent)_55%,transparent),color-mix(in_srgb,var(--c-accent2)_25%,transparent)_45%,transparent_70%)] blur-xl" />

      {/* thin rings */}
      {['inset-[16%]', 'inset-[19%]', 'inset-[22%]'].map(c => (
        <div key={c} className={`absolute ${c} rounded-full border border-accent/30 dark:border-accent/35`} />
      ))}
      <div className="absolute inset-[24%] animate-ring rounded-full border-2 border-accent2/50" />

      {/* photo (unchanged image) */}
      <div className="absolute inset-[25%] overflow-hidden rounded-full border-4 border-white shadow-[0_0_50px_color-mix(in_srgb,var(--c-accent)_60%,transparent)] dark:border-[#e8ecf7]">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
        ) : (
          <span className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_25%,#1d2b5a,#0b1124_70%)] font-head text-6xl font-bold text-white">
            {profile.initials}
          </span>
        )}
      </div>

      {/* floating tech icons */}
      {ICONS.map(o => (
        <span
          key={o.icon}
          className={`absolute ${o.pos} grid h-11 w-11 animate-float place-items-center rounded-full border border-line bg-white shadow-[0_8px_24px_rgba(15,25,60,.25)] lg:h-14 lg:w-14 dark:bg-card`}
          style={{ animationDelay: o.delay }}
        >
          <i className={`${o.icon} text-2xl lg:text-[28px]`} />
        </span>
      ))}
    </div>
  )
}
