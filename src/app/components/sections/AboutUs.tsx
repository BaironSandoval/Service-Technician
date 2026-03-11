import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="py-20 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGEN */}

          <div className="flex justify-center lg:justify-start">

            <Image
              src="/about-tech.png"
              alt="servicio técnico"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-full max-w-md lg:max-w-lg"
            />

          </div>

          {/* CONTENIDO */}

          <div className="text-center lg:text-left">

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A3A] mb-6">
              Sobre Nuestra Empresa
            </h2>

            <p className="text-gray-600 mb-6">
              En <strong>Intelcenter Tecnología</strong> brindamos servicio
              técnico profesional para computadores, impresoras, televisores
              y dispositivos electrónicos.
            </p>

            <p className="text-gray-600 mb-10">
              Nuestros técnicos ofrecen diagnóstico, mantenimiento y reparación
              utilizando herramientas profesionales y componentes de alta
              calidad para garantizar los mejores resultados para nuestros
              clientes.
            </p>

            {/* ESTADÍSTICAS */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

              <div className="bg-[#F5F7FA] p-5 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#2F8DBA]">
                  10+
                </h3>
                <p className="text-sm text-gray-600">
                  Años de Experiencia
                </p>
              </div>

              <div className="bg-[#F5F7FA] p-5 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#2F8DBA]">
                  1000+
                </h3>
                <p className="text-sm text-gray-600">
                  Equipos Reparados
                </p>
              </div>

              <div className="bg-[#F5F7FA] p-5 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#2F8DBA]">
                  24h
                </h3>
                <p className="text-sm text-gray-600">
                  Diagnóstico Rápido
                </p>
              </div>

              <div className="bg-[#F5F7FA] p-5 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#2F8DBA]">
                  100%
                </h3>
                <p className="text-sm text-gray-600">
                  Satisfacción
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}