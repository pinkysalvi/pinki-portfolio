// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Pinki R. Patel',
  first: 'Pinki',
  last: 'Patel',
  initials: 'PP',
  roles: ['Frontend Developer', 'React.js Developer', 'TypeScript Developer', 'UI Engineer'],
  tagline:
    'I build fast, accessible and responsive web apps with React.js and TypeScript, crafting reusable components, managing state and integrating APIs for smooth, high-performance user experiences.',
  location: 'Dublin, Ireland',
  email: 'pinkysalvi6@gmail.com',
  phone: '+353 870 927 160',
  phoneRaw: '+353870927160',
  whatsapp: '919662480514', // +91 96624 80514: country code + number, no "+" or spaces
  linkedin: 'https://www.linkedin.com/in/pinki-patel-97739988/',
  github: 'https://github.com/pinkysalvi',
  // Put your CV in /public as Pinki-Patel-CV.pdf, or change this path.
  resume: '/Pinki-Patel-CV.pdf',
  // Photo lives in /public/photo.jpg. Set to null to show initials instead.
  photo: '/photo.jpg',
}

export const stats = [
  { value: 7, suffix: '+', label: 'Years experience' },
  { value: 6, suffix: '', label: 'Projects showcased' },
  { value: 30, suffix: '+', label: 'Technologies' },
  { value: 4, suffix: '', label: 'Companies worked with' },
]

export const about = {
  paragraphs: [
    "I'm a Frontend Developer with 7+ years of experience building and scaling production web applications for AdTech, fintech and SaaS products, from data-heavy dashboards used daily by campaign managers to customer-facing apps.",
    'I build with React.js and TypeScript: modular, type-safe component libraries and design systems, predictable state with Redux Toolkit, Context API and custom hooks, and REST API integration with JWT authentication. I focus on performance (code-splitting, lazy loading, image optimisation) and on accessible (WCAG), responsive, cross-browser experiences styled with Tailwind CSS and Sass.',
    'I own features end to end, from architecture and code reviews to testing with Jest, React Testing Library and Cypress, and releasing through Git and Jenkins CI/CD in Agile teams. I work closely with backend developers to ship stable releases, and use AI-assisted development with Claude and GitHub Copilot to speed up refactoring, test generation and documentation.',
  ],
  facts: [
    { k: 'Location', v: 'Dublin, Ireland' },
    { k: 'Work authorisation', v: 'Stamp 1G Spouse, no sponsorship needed' },
    { k: 'Education', v: 'B.E. Computer Science, Gujarat Technological University' },
    { k: 'Availability', v: 'Available immediately' },
  ],
}

export const skillFilters = ['All', 'Frontend', 'State', 'Testing', 'Tools', 'AI']

export const skills = [
  { name: 'React.js', cat: 'Frontend', pct: 92, icon: 'devicon-react-original colored' },
  { name: 'JavaScript', cat: 'Frontend', pct: 92, icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', cat: 'Frontend', pct: 82, icon: 'devicon-typescript-plain colored' },
  { name: 'HTML5', cat: 'Frontend', pct: 95, icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', cat: 'Frontend', pct: 94, icon: 'devicon-css3-plain colored' },
  { name: 'Tailwind CSS', cat: 'Frontend', pct: 90, icon: 'devicon-tailwindcss-original colored' },
  { name: 'Sass / SCSS', cat: 'Frontend', pct: 88, icon: 'devicon-sass-original colored' },
  { name: 'Bootstrap 5', cat: 'Frontend', pct: 90, icon: 'devicon-bootstrap-plain colored' },
  { name: 'Redux Toolkit', cat: 'State', pct: 85, icon: 'devicon-redux-original colored' },
  { name: 'Context API', cat: 'State', pct: 88, badge: 'CX' },
  { name: 'REST APIs', cat: 'State', pct: 88, badge: 'API' },
  { name: 'Jest', cat: 'Testing', pct: 78, icon: 'devicon-jest-plain colored' },
  { name: 'Testing Library', cat: 'Testing', pct: 76, badge: 'RTL' },
  { name: 'Cypress', cat: 'Testing', pct: 70, icon: 'devicon-cypressio-plain' },
  { name: 'Git & GitHub', cat: 'Tools', pct: 90, icon: 'devicon-git-plain colored' },
  { name: 'Figma', cat: 'Tools', pct: 88, icon: 'devicon-figma-plain colored' },
  { name: 'Jenkins CI/CD', cat: 'Tools', pct: 72, icon: 'devicon-jenkins-line colored' },
  { name: 'Webpack', cat: 'Tools', pct: 72, icon: 'devicon-webpack-plain colored' },
  { name: 'Claude', cat: 'AI', pct: 88, badge: 'AI' },
  { name: 'GitHub Copilot', cat: 'AI', pct: 85, icon: 'devicon-github-original' },
]

export const moreSkills = [
  'jQuery', 'GSAP', 'Flexbox', 'CSS Grid', 'Custom Hooks', 'shadcn/ui', 'JWT Auth', 'Chart.js',
  'Node.js', 'Express.js', 'MySQL', 'Python', 'PHP / Laravel (basic)', 'WCAG Accessibility',
  'Responsive Design', 'Design Systems', 'Light/Dark Theming', 'Code-splitting', 'Lazy Loading',
  'SEO', 'Jira', 'Agile', 'GitLab', 'npm / yarn', 'WordPress', 'HubSpot CMS', 'Webflow',
  'HTML Email', 'Mailchimp', 'ChatGPT', 'Gemini',
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Affinity Global Inc.',
    date: 'Jul 2022 – Jul 2026',
    about: 'AI-powered, privacy-first AdTech company helping publishers and advertisers grow revenue.',
    points: [
      // The first 4 points show by default; the rest appear under "Show more".
      "Architected and built a modular, reusable React.js component library adopted across the company's AdTech dashboards, accelerating feature delivery and enforcing consistent UI patterns across teams.",
      'Engineered shared dashboard state with Redux Toolkit and Context API, integrating REST APIs to render live campaign performance and reporting data.',
      'Built multi-step campaign setup workflows with controlled form state, reusable validation logic and submit-readiness checks.',
      'Optimised high-traffic advertiser tools with code-splitting, lazy loading and image optimisation for faster loads and smoother interactions.',
      'Delivered responsive, WCAG-compliant, cross-browser interfaces with zero accessibility audit failures across shipped features.',
      'Laid the foundation of a TypeScript and shadcn/ui design system with 10+ type-safe components to replace the legacy UI kit.',
      'Shipped frontend releases through Jenkins CI/CD pipelines, with Git/GitHub code reviews and Jira-tracked Agile sprints.',
      'Partnered with backend engineers to debug and resolve frontend and API integration issues, keeping releases stable.',
      'Applied AI-assisted development (Claude, GitHub Copilot) to code review, refactoring, unit test generation and documentation.',
      'Built and maintained product-launch landing pages in WordPress and HubSpot CMS that supported lead-generation growth.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: '10kInfo Data Solutions Pvt. Ltd.',
    date: 'Jul 2021 – Jul 2022',
    about: 'Business intelligence platform giving investors real-time financial data and insights.',
    points: [
      'Developed responsive, mobile-first dashboards and data pages with JavaScript (ES6+), HTML5, CSS3 and Bootstrap 5, delivered on schedule in Agile sprints.',
      'Integrated REST APIs to render real-time financial data in dynamic, data-driven interfaces.',
      'Resolved cross-browser compatibility issues across Chrome, Firefox, Safari and Edge, reducing frontend support tickets.',
      'Collaborated with backend developers to debug and fix UI and API integration issues.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Paytm Creditmate',
    date: 'Mar 2019 – Aug 2020',
    about: 'SaaS platform helping banks, NBFCs and fintech lenders automate overdue loan collections.',
    points: [
      'Developed data-driven interfaces and new pages in JavaScript, HTML5 and CSS3 for the loan-collections SaaS platform.',
      'Streamlined key user journeys by turning product prototypes into simpler, more usable interfaces.',
      'Managed releases through GitHub version control, staging reviews and production deployment, with zero critical post-deploy incidents.',
      'Built and maintained the company website, including basic PHP/Laravel integration.',
      'Collaborated with backend developers to debug and fix frontend issues.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'DG Flick Solutions Pvt. Ltd.',
    date: 'Nov 2017 – Feb 2019',
    about: "India's largest photographic software company, serving photographers, studios and printing labs.",
    points: [
      'Built product websites and software pages with clean, semantic, responsive HTML5 and CSS3, delivering every project on time.',
      'Improved page-load performance across product websites through frontend optimisation.',
      'Implemented form validation for product and enquiry forms.',
      'Developed responsive HTML email templates and campaign assets for product launches.',
      'Collaborated with backend developers to debug and fix frontend issues.',
    ],
  },
]

// Project images are free photos from Unsplash (unsplash.com/license), saved in /public/projects.
export const projects = [
  {
    title: 'Codebook Ecommerce App',
    badge: 'React App',
    gradient: 'from-[#5b7cfa] to-[#9b6bff]',
    desc: 'Responsive e-commerce app with JWT authentication, protected routes, cart and checkout, search and filtering via URL query params, and light/dark mode.',
    stack: ['React', 'Tailwind CSS', 'Context API', 'JWT'],
    link: 'https://codebook-ul.netlify.app/',
    image: '/projects/codebook-photo.jpg',
  },
  {
    title: 'Movie Discovery Web App',
    badge: 'React App',
    gradient: 'from-[#f5576c] to-[#f093fb]',
    desc: 'Movie browsing app fetching live data from the TMDB REST API, with custom hooks for reusable logic and localStorage for saved preferences.',
    stack: ['React', 'Tailwind CSS', 'TMDB API', 'Hooks'],
    link: 'https://cinematecards.netlify.app/',
    image: '/projects/movies-photo.jpg',
  },
  {
    title: 'AdTech Optomator Dashboard',
    badge: 'Dashboard',
    gradient: 'from-[#0ba360] to-[#3cba92]',
    desc: 'Interactive performance tracker with Chart.js charts, custom filter panels, collapsible hierarchical tables and data export. Used daily by campaign managers.',
    stack: ['JavaScript', 'Chart.js'],
    link: 'https://uidemo.hwpub.com/veve_admin/Optomator/index.html',
    image: '/projects/optomator-photo.jpg',
  },
  {
    title: 'Campaign Console: KPI Mapping & ROAS Targets',
    badge: 'Internal Tool',
    gradient: 'from-[#f7971e] to-[#ffd200]',
    desc: 'Step-by-step wizard for campaign setup tracking budget, ROAS and conversions, plus a side-drawer form to set ROAS targets by Business Unit, Brand, Geo, Goal and Device.',
    stack: ['React', 'Redux Toolkit', 'Forms'],
    link: null,
    image: '/projects/campaign-photo.jpg',
  },
  {
    title: 'TypeScript & shadcn/ui Design System',
    badge: 'Design System',
    gradient: 'from-[#2b5876] to-[#38d5f5]',
    desc: '10+ reusable, type-safe components built with TypeScript and shadcn/ui as the foundation for a scalable design system replacing the legacy UI kit.',
    stack: ['TypeScript', 'React', 'shadcn/ui'],
    link: 'https://uidemo.hwpub.com/shadcn-ui/dist/components',
    image: '/projects/designsystem-photo.jpg',
  },
  {
    title: 'UI Component Library (Legacy Kit)',
    badge: 'UI Kit',
    gradient: 'from-[#654ea3] to-[#eaafc8]',
    desc: 'Reusable component library with live code preview (Prism.js), adopted across all Veve dashboard products and cutting UI build time per project.',
    stack: ['JavaScript', 'Prism.js', 'CSS'],
    link: 'https://uidemo.hwpub.com/veve_admin/ui-kit/v2/alerts/index.html',
    image: '/projects/uikit-photo.jpg',
  },
]

export const navLinks = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
