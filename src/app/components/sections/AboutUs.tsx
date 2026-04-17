"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

function Counter({
  end,
  suffix = "",
  duration = 1500,
  startAnimation,
}: {
  end: number
  suffix?: string
  duration?: number
  startAnimation: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let start = 0
    const increment = end / (duration / 16)

    const update = () => {
      start += increment
      if (start < end) {
        setCount(Math.floor(start))
        requestAnimationFrame(update)
      } else {
        setCount(end)
      }
    }

    update()
  }, [startAnimation, end, duration])

  return <span>{count}{suffix}</span>
}

export default function AboutUs() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section className="py-20 md:py-24 bg-white" ref={ref}>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGEN */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-700
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <Image
              src="/about_tech.png"
              alt="servicio técnico"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-full max-w-md lg:max-w-lg"
            />
          </div>

          {/* CONTENIDO */}
          <div
            className={`text-center lg:text-left transition-all duration-700 delay-200
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >

            <h2 className="text-3xl md:text-4xl font-bold text-[#031C3A] mb-6">
              Sobre Nuestra Empresa
            </h2>

            <p className="text-gray-600 mb-6">
              En <strong className="text-[#031C3A]">Intelcenter Tecnología</strong> brindamos servicio
              técnico especializado para computadores, impresoras y televisores.
            </p>

            <p className="text-gray-600 mb-10">
              Nuestros técnicos ofrecen diagnóstico, mantenimiento y reparación
              utilizando herramientas profesionales y componentes de alta
              calidad para garantizar los mejores resultados.
            </p>

            {/* ESTADÍSTICAS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

              {[ 
                { end: 15, suffix: "+", label: "Años de Experiencia" },
                { end: 5000, suffix: "+", label: "Equipos Reparados" },
                { end: 24, suffix: "h", label: "Diagnóstico Rápido" },
                { end: 100, suffix: "%", label: "Satisfacción" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#F5F7FA] p-5 rounded-lg text-center
                  hover:shadow-md transition-all duration-700
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >

                  <h3 className="text-xl md:text-2xl font-bold text-[#0F4C6B]">
                    <Counter
                      end={item.end}
                      suffix={item.suffix}
                      startAnimation={visible}
                    />
                  </h3>

                  <p className="text-sm text-gray-600">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}