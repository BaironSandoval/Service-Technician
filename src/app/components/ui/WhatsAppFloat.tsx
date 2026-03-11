import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573144486688"
      target="_blank"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg z-50 transition"
    >
      <MessageCircle size={28} />
    </a>
  )
}