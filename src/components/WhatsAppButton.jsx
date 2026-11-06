import { profile } from '../data'
import { WhatsApp } from './Icons'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${profile.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(37,211,102,.45)] transition hover:scale-110"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  )
}
