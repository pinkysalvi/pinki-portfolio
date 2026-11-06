// import { FaWhatsapp } from 'react-icons/fa'
// import { FiTerminal } from 'react-icons/fi'
// import { profile } from '../data/portfolio'

// Fixed corner buttons: terminal/dev-mode (left) and WhatsApp (right).
export default function FloatingButtons({ onTerminal }) {
  return (
    <>
      <button
        onClick={onTerminal}
        aria-label="Open quick command search"
        className="fixed bottom-6 left-5 z-30 grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-ink shadow-lg transition hover:-translate-y-0.5"
      >
        <FiTerminal size={18} />
      </button>

      <a
        href={`https://wa.me/${profile.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
      >
        <FaWhatsapp size={26} />
      </a>
    </>
  )
}
