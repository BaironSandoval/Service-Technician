import { MessageCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#031C3A] via-[#0B3A5B] to-[#0F4C6B] text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Necesitas Soporte Técnico?
        </h2>

        <p className="text-lg text-[#D9E1E8] max-w-2xl mx-auto mb-10">
          Contacta hoy mismo a nuestros técnicos profesionales y obtén un diagnóstico,
          mantenimiento o reparación rápida para tus equipos tecnológicos.
        </p>

        <a
          href="https://wa.me/573136951496"
          target="_blank"
          className="inline-flex items-center gap-3 bg-[#59E1E6] hover:bg-[#7FEAF0] text-[#031C3A] font-semibold px-8 py-4 rounded-lg text-lg transition shadow-xl"
        >
          <MessageCircle size={24} />
          Contactar por WhatsApp
        </a>

      </div>

    </section>
  )
}