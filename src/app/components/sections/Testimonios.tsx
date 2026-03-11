import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Ramírez",
    role: "Dueño de Negocio",
    comment:
      "Excelente servicio técnico. Repararon mi impresora el mismo día y la atención fue muy profesional."
  },
  {
    name: "Laura Gómez",
    role: "Trabajadora Independiente",
    comment:
      "Mi portátil estaba muy lento y lo dejaron funcionando perfectamente. Equipo técnico muy recomendado."
  },
  {
    name: "Andrés Torres",
    role: "Administrador de Oficina",
    comment:
      "Reparamos varios computadores de nuestra oficina y ahora todo funciona perfectamente."
  }
]

export default function Testimonios() {
  return (
    <section className="py-24 bg-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#0F2A3A]">
            Lo que Dicen Nuestros Clientes
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Servicio técnico confiable con clientes satisfechos.
          </p>

        </div>

        {/* TESTIMONIOS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition"
            >

              {/* ESTRELLAS */}

              <div className="flex mb-4 text-[#8BC34A]">

                <Star size={20} fill="#8BC34A" />
                <Star size={20} fill="#8BC34A" />
                <Star size={20} fill="#8BC34A" />
                <Star size={20} fill="#8BC34A" />
                <Star size={20} fill="#8BC34A" />

              </div>

              {/* COMENTARIO */}

              <p className="text-gray-600 mb-6">
                "{testimonial.comment}"
              </p>

              {/* CLIENTE */}

              <div>

                <p className="font-semibold text-[#0F2A3A]">
                  {testimonial.name}
                </p>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}