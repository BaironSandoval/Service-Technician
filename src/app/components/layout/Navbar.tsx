"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#031C3A]/95 backdrop-blur shadow-md">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <a href="/">
              <Image
                src="/logo.png"
                alt="Intelcenter Tecnología"
                width={45}
                height={45}
              />
            </a>

            <span className="font-semibold text-white text-lg">
              Intelcenter Tecnología
            </span>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-[#D9E1E8] font-medium">

            <a href="#" className="hover:text-[#59E1E6] transition">
              Inicio
            </a>

            <a href="#services" className="hover:text-[#59E1E6] transition">
              Servicios
            </a>

            <a href="#contact" className="hover:text-[#59E1E6] transition">
              Contacto
            </a>

            {/* BOTON WHATSAPP */}
            <a
              href="https://wa.me/573136951496"
              target="_blank"
              className="flex items-center gap-2 bg-[#59E1E6] hover:bg-[#7FEAF0] text-[#031C3A] px-4 py-2 rounded-lg transition font-semibold shadow-md"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </nav>

          {/* BOTON MOVIL */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* MENU MOVIL */}
      {open && (
        <div className="md:hidden bg-[#031C3A] border-t border-[#0F4C6B]">

          <div className="flex flex-col px-6 py-6 gap-4 text-[#D9E1E8] font-medium">

            <a href="#" className="hover:text-[#59E1E6]">Inicio</a>

            <a href="#services" className="hover:text-[#59E1E6]">Servicios</a>

            <a href="#contact" className="hover:text-[#59E1E6]">Contacto</a>

            <a
              href="https://wa.me/573136951496"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-[#59E1E6] text-[#031C3A] px-4 py-3 rounded-lg font-semibold"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

        </div>
      )}

    </header>
  )
}