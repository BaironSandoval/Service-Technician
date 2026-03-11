import { Search, FileText, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Diagnóstico del Equipo",
    description:
      "Analizamos tu equipo para detectar el problema de forma rápida y precisa."
  },
  {
    icon: FileText,
    title: "Cotización del Servicio",
    description:
      "Te proporcionamos una cotización clara antes de iniciar el proceso de reparación."
  },
  {
    icon: Wrench,
    title: "Reparación Profesional",
    description:
      "Nuestros técnicos reparan el equipo utilizando herramientas profesionales y repuestos de calidad."
  },
  {
    icon: CheckCircle,
    title: "Pruebas y Entrega",
    description:
      "Probamos el equipo para asegurarnos de que todo funcione perfectamente antes de entregarlo."
  }
]

export default function ProcesoDeReparacion() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}

        <div className="text-center mb-20">

          <h2 className="text-4xl font-bold text-[#0F2A3A]">
            Nuestro Proceso de Reparación
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Un proceso simple y profesional para garantizar el mejor
            servicio para tus equipos tecnológicos.
          </p>

        </div>

        {/* PASOS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={index}
                className="relative text-center"
              >

                {/* NUMERO */}

                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#8BC34A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow">
                  {index + 1}
                </div>

                {/* TARJETA */}

                <div className="bg-[#F5F7FA] p-10 rounded-xl shadow-sm hover:shadow-lg transition">

                  <div className="flex justify-center mb-6">

                    <div className="bg-[#2F8DBA] text-white p-4 rounded-full">

                      <Icon size={28} />

                    </div>

                  </div>

                  <h3 className="text-xl font-semibold text-[#0F2A3A] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600">
                    {step.description}
                  </p>

                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}