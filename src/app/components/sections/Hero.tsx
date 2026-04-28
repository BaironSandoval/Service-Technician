import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#031C3A] via-[#0B3A5B] to-[#0F4C6B] text-white overflow-hidden">

      {/* IMAGEN DESKTOP */}
      <div className="absolute inset-0 hidden md:block animate-fadeUp">
        <Image
          src="/Hero.png"
          alt="Servicio técnico"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* IMAGEN MOBILE */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-[#031C3A]/80"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-xl space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeUp">
            Servicio Técnico Especializado
            <span className="text-[#59E1E6] block">
              Computadores, Impresoras y Televisores
            </span>
          </h1>

          <p className="text-lg text-[#D9E1E8] animate-fadeUp animate-delay-1">
            Venta, diagnóstico, mantenimiento y reparación de equipos
            tecnológicos con garantía profesional y atención rápida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeUp animate-delay-2">

            <a
              href="https://wa.me/573136951496"
              target="_blank"
              className="bg-[#59E1E6] hover:bg-[#7FEAF0] text-[#031C3A] font-semibold px-6 py-3 rounded-lg transition text-center shadow-lg"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="#services"
              className="border border-[#59E1E6] text-[#59E1E6] px-6 py-3 rounded-lg hover:bg-[#59E1E6] hover:text-[#031C3A] transition text-center"
            >
              Nuestros Servicios
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}