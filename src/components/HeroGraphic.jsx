// import { motion } from 'motion/react'
// import { SiJavascript, SiReact, SiMongodb } from 'react-icons/si'
// import { FiLayers } from 'react-icons/fi'
// import { profile } from '../data/portfolio'

// Floating tech badges around the avatar. Change icons/colours here.
const badges = [
  { Icon: SiJavascript, color: '#f7df1e', pos: 'left-[8%] top-[14%]', delay: 0 },
  { Icon: SiReact, color: '#61dafb', pos: 'right-[10%] top-[12%]', delay: 0.6 },
  { Icon: FiLayers, color: '#43a047', pos: 'left-[2%] bottom-[24%]', delay: 1.2, plain: true },
  { Icon: SiMongodb, color: '#47a248', pos: 'right-[12%] bottom-[18%]', delay: 1.8 },
]

// Decorative polygon "network" nodes (viewBox 0 0 400 400)
const nodes = [
  [200, 12], [330, 70], [392, 190], [372, 300], [300, 378], [160, 388],
  [58, 330], [12, 210], [40, 110], [120, 40],
]

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden={!profile.photo}>
      {/* soft glow */}
      <div className="absolute inset-[12%] rounded-full bg-accent/25 blur-3xl" />

      {/* rotating network + rings */}
      <svg viewBox="0 0 400 400" className="spin-slow absolute inset-0 h-full w-full">
        {[170, 140, 112].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="var(--accent)" strokeOpacity="0.18" />
        ))}
        <polygon
          points={nodes.map((n) => n.join(',')).join(' ')}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.35"
        />
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2="200" y2="200" stroke="var(--accent)" strokeOpacity="0.14" />
            <circle cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill="var(--accent)" fillOpacity="0.75" />
          </g>
        ))}
      </svg>

      {/* avatar */}
      <div className="absolute inset-[26%] rounded-full bg-gradient-to-br from-accent to-accent-2 p-[5px] shadow-2xl shadow-accent/30">
        <div className="grid h-full w-full place-items-center overflow-hidden rounded-full border-4 border-surface bg-surface">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
          ) : (
            <span className="font-display text-6xl font-bold gradient-text">{profile.initials}</span>
          )}
        </div>
      </div>

      {/* floating tech badges */}
      {badges.map(({ Icon, color, pos, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} grid h-11 w-11 place-items-center rounded-full bg-surface shadow-lg ring-1 ring-line`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
        >
          <Icon size={20} color={color} />
        </motion.div>
      ))}
    </div>
  )
}
