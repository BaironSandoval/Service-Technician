"use client"

import { Search, FileText, Wrench, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
    <section className="py-24 bg-white" ref={ref}>

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <div className={`text-center mb-20 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <h2 className="text-4xl font-bold text-[#031C3A]">
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
                className={`relative text-center group transition-all duration-500
                ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >

                {/* NUMERO */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#031C3A] text-[#59E1E6] w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md
                  transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </div>

                {/* TARJETA */}
                <div className="bg-[#F5F7FA] p-10 rounded-xl shadow-sm
                  hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
                  transition-all duration-300">

                  <div className="flex justify-center mb-6">

                    <div className="bg-[#031C3A] text-[#59E1E6] p-4 rounded-full
                      transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0F4C6B]">

                      <Icon size={28} />

                    </div>

                  </div>

                  <h3 className="text-xl font-semibold text-[#031C3A] mb-3">
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