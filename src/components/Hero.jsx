import { profile } from '../data'
import { useTyped } from '../hooks'
import PhotoOrbit from './PhotoOrbit'

export default function Hero() {
  const typed = useTyped(profile.roles)

  return (
    <section
      id="home"
      className="wrap grid items-center gap-10 py-12 text-center lg:min-h-[calc(100vh-160px)] lg:grid-cols-[1.15fr_.85fr] lg:py-16 lg:text-left"
    >
      {/* soft backdrop keeps the text readable over the moving code */}
      <div className="relative isolate before:absolute before:-inset-x-8 before:-inset-y-10 before:-z-10 before:rounded-[48px] before:bg-bg/75 before:blur-2xl">
        <p className="text-lg text-muted">Hi, I'm</p>
        <h1 className="mt-1.5 mb-2.5 font-head text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {profile.first} <span className="text-grad">{profile.last}</span>
        </h1>
        <p className="min-h-[1.5em] font-head text-2xl font-semibold sm:text-3xl">
          {typed}
          <span className="ml-0.5 animate-blink text-accent">|</span>
        </p>
        <p className="mx-auto mt-4 mb-7 max-w-xl text-lg text-muted lg:mx-0">{profile.tagline}</p>

        <div className="flex flex-wrap justify-center gap-3.5 lg:justify-start">
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-br from-accent to-accent2 px-6 py-3 font-semibold text-on-accent shadow-[0_8px_24px_color-mix(in_srgb,var(--c-accent)_35%,transparent)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_color-mix(in_srgb,var(--c-accent)_50%,transparent)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-line bg-card px-6 py-3 font-semibold transition hover:border-accent"
          >
            Contact Me
          </a>
        </div>

        {/* Solid colours (not see-through) so the badge reads clearly in both themes */}
        <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-800 shadow-sm sm:text-sm dark:border-emerald-500/50 dark:bg-emerald-950 dark:text-emerald-300">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          Based in Dublin · Full right to work in Ireland · Available immediately
        </p>
      </div>

      <div className="order-first grid place-items-center lg:order-none">
        <PhotoOrbit />
      </div>
    </section>
  )
}
