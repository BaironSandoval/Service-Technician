import {
  Wrench,
  Settings,
  Monitor,
  ShoppingCart
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Reparación de Equipos",
    description:
      "Reparación profesional de computadores, impresoras, televisores y dispositivos electrónicos."
  },
  {
    icon: Settings,
    title: "Mantenimiento Preventivo",
    description:
      "Mejora el rendimiento y prolonga la vida útil de tus equipos tecnológicos."
  },
  {
    icon: Monitor,
    title: "Diagnóstico Técnico",
    description:
      "Diagnóstico rápido y preciso para identificar fallas de hardware o software."
  },
  {
    icon: ShoppingCart,
    title: "Venta de Equipos",
    description:
      "Venta de computadores, impresoras y accesorios tecnológicos con garantía."
  }
]

export default function Servicios() {
  return (
    <section
      id="services"
      className="bg-[#F5F7FA] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#0F2A3A]">
            Nuestros Servicios
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Soluciones técnicas profesionales para computadores, impresoras,
            televisores y equipos electrónicos.
          </p>

        </div>

        {/* GRID SERVICIOS */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
              >

                <div className="flex justify-center mb-6">

                  <div className="bg-[#2F8DBA] text-white p-4 rounded-full">

                    <Icon size={28} />

                  </div>

                </div>

                <h3 className="text-xl font-semibold text-[#0F2A3A] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
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