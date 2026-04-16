import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jesica S. Rodriguez Lopez",
    role: "Cliente Satisfecha",
    comment:
      "Excelente servicio. Muy rápido y bajo un diagnóstico muy acertado. La atención de los técnicos amable y me explicaron a detalle y con un lenguaje fácil de entender el problema de mi computador portátil, la solución aplicada y acciones para prevenir el mismo daño a futuro. Súper recomendados."
  },
  {
    name: "Felipe Roncancio",
    role: "Cliente Satisfecho",
    comment:
      "Excelente servicio y muy buenas recomendaciones para mi equipo. Muy recomendado"
  },
  {
    name: "Alejandra Rojas",
    role: "Cliente Satisfecha",
    comment:
      "Excelente servicio, atención y cumplimiento! Super recomendado."
  }
]

export default function Testimonios() {
  return (
    <section className="py-24 bg-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#031C3A]">
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
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
            >

              {/* ESTRELLAS */}
              <div className="flex mb-4 text-[#59E1E6]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#59E1E6" />
                ))}
              </div>

              {/* COMENTARIO */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* CLIENTE */}
              <div>
                <p className="font-semibold text-[#031C3A]">
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