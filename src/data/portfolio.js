
export const profile = {
  name: 'Your Name',
  firstName: 'Your',
  lastName: 'Name',
  initials: 'YN',
  greeting: "Hi, I'm",
  // the typing animation cycles through these
  roles: ['Frontend Developer', 'React Developer', 'UI Engineer'],
  tagline:
    'I build clean, fast web apps and admin dashboards with React and Tailwind that people understand at first glance.',
  // put your photo in /public and set e.g. '/me.jpg'. null = initials placeholder
  photo: null,
  whatsapp: '910000000000', // country code + number, no "+"
  email: 'you@example.com',
  summaryHref: '#resume',
  availability: 'You are exploring this portfolio right now',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '4', label: 'Projects Built' },
  { value: '16', label: 'Technologies' },
  { value: '3', label: 'Companies Worked With' },
]

// accent colour options for the palette button
export const accents = [
  { name: 'Coral', a: '#d9534f', b: '#e8884a' },
  { name: 'Indigo', a: '#5b5bd6', b: '#8b7cf6' },
  { name: 'Emerald', a: '#10a37f', b: '#4cc9a0' },
  { name: 'Sky', a: '#0ea5e9', b: '#38bdf8' },
  { name: 'Rose', a: '#e11d74', b: '#f472b6' },
]
