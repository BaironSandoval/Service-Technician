import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">

      {/* IMAGEN DESKTOP */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/hero_desktop.png"
          alt="Servicio técnico"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* IMAGEN MOBILE */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/hero_mobile.png"
          alt="Servicio técnico"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY OSCURO */}
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-xl space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Servicio Técnico Profesional
            <span className="text-[#8BC34A] block">
              Computadores, Impresoras y Electrónica
            </span>
          </h1>

          <p className="text-lg text-gray-200">
            Diagnóstico, mantenimiento, reparación y venta de equipos
            tecnológicos con garantía profesional y atención rápida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <a
              href="https://wa.me/573144486688"
              target="_blank"
              className="bg-[#8BC34A] hover:bg-[#7ab63f] text-black font-semibold px-6 py-3 rounded-lg transition text-center"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="#services"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0F2A3A] transition text-center"
            >
              Nuestros Servicios
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}