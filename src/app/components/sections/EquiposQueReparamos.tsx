import {
  Monitor,
  Printer,
  Laptop,
  Tv,
  Smartphone,
  Cpu
} from "lucide-react"

const devices = [
  { icon: Monitor, name: "Todo en uno" },
  { icon: Laptop, name: "Portátiles" },
  { icon: Printer, name: "Impresoras y Suministros" },
  { icon: Tv, name: "Televisores" },
  { icon: Smartphone, name: "Dispositivos Móviles" },
  { icon: Cpu, name: "Computadores de Escritorio" }
]

export default function EquiposQueReparamos() {
  return (
    <section className="py-24 bg-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#031C3A]">
            Equipos que Reparamos
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Reparación y mantenimiento profesional de computadores,
            impresoras, televisores y equipos electrónicos.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {devices.map((device, index) => {
            const Icon = device.icon

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >

                <div className="bg-[#031C3A] text-[#59E1E6] p-4 rounded-full mb-4 shadow-sm">

                  <Icon size={30} />

                </div>

                <p className="font-semibold text-[#031C3A]">
                  {device.name}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}