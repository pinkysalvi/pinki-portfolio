export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2.5 text-xs font-semibold uppercase tracking-[2px] text-cyan">&lt;/&gt; {eyebrow}</p>
      <h2 className="mb-3 font-head text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {children && <p className="text-muted">{children}</p>}
    </div>
  )
}
