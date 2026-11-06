import { profile } from '../data'
import { Mail, Phone, Pin, Send } from './Icons'
import Reveal from './Reveal'

const field =
  'w-full rounded-xl border border-line bg-bg px-3.5 py-2.5 text-ink outline-none transition focus:border-transparent focus:ring-2 focus:ring-accent'

export default function Contact() {
  // No backend needed: the form opens the visitor's email app with the message filled in.
  const onSubmit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `Portfolio enquiry from ${f.get('name')}`
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const items = [
    { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, text: profile.phone, href: `tel:${profile.phoneRaw}` },
    { icon: Pin, text: profile.location },
  ]

  return (
    <section id="contact" className="wrap section-pad">
      <Reveal className="grid gap-10 rounded-3xl border border-line bg-gradient-to-br from-accent/12 to-card p-6 sm:p-11 lg:grid-cols-2">
        <div>
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-[2px] text-cyan">&lt;/&gt; Contact</p>
          <h2 className="mb-3 font-head text-3xl font-bold leading-tight sm:text-4xl">Have a role or project in mind?</h2>
          <p className="text-muted">
            I'm open to frontend and React roles in Ireland. Send a message and I'll get back to you.
          </p>
          <ul className="mt-6 grid gap-3">
            {items.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                {href ? (
                  <a href={href} className="font-medium hover:text-accent">{text}</a>
                ) : (
                  <span className="font-medium">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="grid gap-3.5">
          <label className="grid gap-1.5 text-sm text-muted">
            Your name
            <input name="name" required className={field} />
          </label>
          <label className="grid gap-1.5 text-sm text-muted">
            Your email
            <input name="email" type="email" required className={field} />
          </label>
          <label className="grid gap-1.5 text-sm text-muted">
            Message
            <textarea name="message" rows={4} required className={`${field} resize-y`} />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent2 px-6 py-3 font-semibold text-on-accent shadow-[0_8px_24px_color-mix(in_srgb,var(--c-accent)_35%,transparent)] transition hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </Reveal>
    </section>
  )
}
