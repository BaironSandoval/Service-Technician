"use client"

import {
  Monitor,
  Printer,
  Laptop,
  Tv,
  Smartphone,
  Cpu
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const devices = [
  { icon: Printer, name: "Impresoras y Suministros" },
  { icon: Laptop, name: "Portátiles" },
  { icon: Cpu, name: "Computadores de Escritorio" },
  { icon: Monitor, name: "Todo en uno" },
  { icon: Tv, name: "Televisores" },
  { icon: Smartphone, name: "Dispositivos Móviles" },
]

export default function EquiposQueReparamos() {
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
                className={`bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center
                shadow-sm transition-all duration-500
                hover:shadow-lg hover:-translate-y-1 hover:scale-105
                ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >

                <div className="bg-[#031C3A] text-[#59E1E6] p-4 rounded-full mb-4 shadow-sm
                  transition-all duration-300 group-hover:scale-110">

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