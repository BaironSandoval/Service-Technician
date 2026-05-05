"use client"

import {
  Wrench,
  Settings,
  Monitor,
  ShoppingCart,
  Package
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: ShoppingCart,
    title: "Venta y Alquiler de Equipos",
    description:
      "Nuevos y usados: portátiles, todo en uno, equipos de escritorio, impresoras de inyección y láser, monitores y televisores."
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Reparación",
    description:
      "Diagnóstico de fallas, cambio de componentes, limpieza interna y mejora del rendimiento de sus equipos."
  },
  {
    icon: Settings,
    title: "Software y Configuración",
    description:
      "Formateo, actualizaciones e instalación de Office, antivirus y programas de diseño."
  },
  {
    icon: Monitor,
    title: "Partes y Accesorios",
    description:
      "Pantallas, teclados, mouse, discos duros, memorias, tarjetas madre, baterías, redes y cableado."
  },
  {
    icon: Package,
    title: "Suministros",
    description:
      "Tintas, tóner, cartuchos, fusores, rodillos de arrastre (pick roller), almohadillas y papelería general: carpetas y todo lo necesario para su oficina."
  },
]

export default function Servicios() {
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
    <section id="services" className="bg-white py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <div className={`text-center mb-16 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <h2 className="text-4xl font-bold text-[#031C3A]">
            Nuestros Servicios
          </h2>

          <p className="text-[#0F4C6B] mt-4 max-w-2xl mx-auto">
            Soluciones técnicas profesionales para computadores, impresoras y equipos electrónicos.
          </p>

        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-2xl p-8 text-center
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500
                ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`
                }}
              >

                <div className="flex justify-center mb-6">

                  <div className="bg-[#031C3A] text-[#59E1E6] p-4 rounded-full shadow-lg
                  group-hover:scale-110 transition">

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