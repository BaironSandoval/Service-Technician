"use client"

import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section className="py-24 bg-[#F5F7FA]" ref={ref}>

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <div className={`text-center mb-16 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

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
              className={`group bg-white rounded-xl p-8 shadow-sm border border-gray-100
              transition-all duration-500
              hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
              ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              {/* ESTRELLAS */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-[#59E1E6] fill-[#59E1E6] transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* COMENTARIO */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
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