import { useEffect, useState } from 'react'

// Returns the id of the section currently in view (for highlighting the nav link).
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return active
}
