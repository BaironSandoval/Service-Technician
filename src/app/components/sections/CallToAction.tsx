import { MessageCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0F2A3A] to-[#2F8DBA] text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Necesitas Soporte Técnico?
        </h2>

        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
          Contacta hoy mismo a nuestros técnicos profesionales y obtén un diagnóstico,
          mantenimiento o reparación rápida para tus equipos tecnológicos.
        </p>

        <a
          href="https://wa.me/573144486688"
          target="_blanck"
          className="inline-flex items-center gap-3 bg-[#8BC34A] hover:bg-[#7ab63f] text-black font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg"
        >
          <MessageCircle size={24} />
          Contactar por WhatsApp
        </a>

      </div>

    </section>
  )
}