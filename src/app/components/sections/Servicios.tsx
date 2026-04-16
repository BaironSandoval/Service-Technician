import {
  Wrench,
  Settings,
  Monitor,
  ShoppingCart
} from "lucide-react"

const services = [
  {
    icon: ShoppingCart,
    title: "Venta de Equipos",
    description:
      "Nuevos y usados, Portátiles, Todo en uno, Equipos de escritorio, impresoras inkjet y toner, pantallas y periféricos, alquiler."
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Reparación",
    description:
      "Fallas de software y hardware, diagnóstico, cambio de componentes, limpieza interna, optimización de rendimiento."
  },
  {
    icon: Settings,
    title: "Instalación de Sistemas y Programas",
    description:
      "Formateo, instalación de sistemas operativos, Office, antivirus y software de diseño e ingeniería."
  },
  {
    icon: Monitor,
    title: "Partes y Accesorios",
    description:
      "Pantallas, teclados, mouse, periféricos, discos duros, memorias, boards, baterías, redes y cableado."
  },
]

export default function Servicios() {
  return (
    <section
      id="services"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#031C3A]">
            Nuestros Servicios
          </h2>

          <p className="text-[#0F4C6B] mt-4 max-w-2xl mx-auto">
            Soluciones técnicas profesionales para computadores, impresoras y equipos electrónicos.
          </p>

        </div>

        {/* GRID SERVICIOS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="bg-[#F5F7FA] rounded-xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition"
              >

                <div className="flex justify-center mb-6">

                  <div className="bg-[#031C3A] text-[#59E1E6] p-4 rounded-full shadow-md">

                    <Icon size={28} />

                  </div>

                </div>

                <h3 className="text-xl font-semibold text-[#031C3A] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}