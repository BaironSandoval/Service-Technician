import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0F2A3A] to-[#2F8DBA] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">

        {/* TEXTO */}
        <div className="space-y-6">

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

          <div className="flex gap-4 pt-4">

            <a
              href="https://wa.me/573144486688"
              target="_blanck"
              className="bg-[#8BC34A] hover:bg-[#7ab63f] text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="#services"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0F2A3A] transition"
            >
              Nuestros Servicios
            </a>

          </div>

        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">

          <Image
            src="/hero-e.png"
            alt="servicio técnico"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full max-w-md lg:max-w-lg"
          />

        </div>

      </div>

      {/* DECORACIÓN */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-[#f5f7fa] rounded-t-[60px]" /> */}

    </section>
  )
}