"use client"

import { MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function CallToAction() {
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
    <section
      ref={ref}
      className="py-24 bg-gradient-to-r from-[#031C3A] via-[#0B3A5B] to-[#0F4C6B] text-white relative overflow-hidden"
    >

      {/* EFECTO DE FONDO SUTIL */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(89,225,230,0.3),transparent_60%)]" />

      <div className={`relative max-w-7xl mx-auto px-6 text-center transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Necesitas Soporte Técnico?
        </h2>

        <p className="text-lg text-[#D9E1E8] max-w-2xl mx-auto mb-10">
          Contacta hoy mismo a nuestros técnicos profesionales y obtén un diagnóstico,
          mantenimiento o reparación rápida para tus equipos tecnológicos.
        </p>

        <a
          href="https://wa.me/573136951496"
          target="_blank"
          className="group inline-flex items-center gap-3 bg-[#59E1E6] text-[#031C3A] font-semibold px-8 py-4 rounded-lg text-lg
          transition-all duration-300 shadow-xl
          hover:bg-[#7FEAF0] hover:scale-105 hover:shadow-2xl active:scale-95"
        >
          <MessageCircle
            size={24}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          Contactar por WhatsApp
        </a>

      </div>

    </section>
  )
}