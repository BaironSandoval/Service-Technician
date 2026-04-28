"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const brands = [
  { name: "HP", logo: "/brands/HP.svg" },
  { name: "LG", logo: "/brands/lg-l.png" },
  { name: "Lenovo", logo: "/brands/lenovo.png" },
  { name: "Epson", logo: "/brands/Epson-l.png" },
  { name: "Samsung", logo: "/brands/samsung-lo.png" },
  { name: "Dell", logo: "/brands/dell-l.png" },
  { name: "Asus", logo: "/brands/asus-l.png" },
  { name: "Acer", logo: "/brands/acer-l.png" },
  { name: "Sony", logo: "/brands/sony-l.png" },
  { name: "Toshiba", logo: "/brands/toshiba-l.png" },
  { name: "Canon", logo: "/brands/canon-l.png" },
  { name: "Apple", logo: "/brands/apple-l.png" },
]

export default function Marcas() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  // activar animación al hacer scroll
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

  // loop automático por todos los logos
  useEffect(() => {
    if (!visible) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length)
    }, 1400)

    return () => clearInterval(interval)
  }, [visible])

  return (
    <section className="py-20 bg-[#F5F7FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <div
          className={`text-center mb-14 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-[#031C3A]">
            Marcas con las que Trabajamos
          </h2>

          <p className="text-gray-600 mt-3">
            Trabajamos con las marcas tecnológicas más confiables del mercado.
          </p>
        </div>

        {/* LOGOS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {brands.map((brand, index) => {
            const isActive = index === activeIndex

            return (
              <div
                key={index}
                className={`flex justify-center items-center p-4 rounded-lg
                transition-all duration-500
                ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }
                ${isActive ? "scale-125" : "scale-100"}
                `}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="object-contain transition duration-500"
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}