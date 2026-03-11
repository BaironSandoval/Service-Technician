"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

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

            <span className="font-semibold text-[#0F2A3A] text-lg">
              Intelcenter Tecnología
            </span>

          </div>

          {/* MENU DESKTOP */}

          <nav className="hidden md:flex items-center gap-8 text-[#0F2A3A] font-medium">

            <a href="#" className="hover:text-[#2F8DBA] transition">
              Inicio
            </a>

            <a href="#services" className="hover:text-[#2F8DBA] transition">
              Servicios
            </a>

            <a href="#contact" className="hover:text-[#2F8DBA] transition">
              Contacto
            </a>

            {/* BOTON WHATSAPP */}

            <a
              href="https://wa.me/573144486688"
              className="flex items-center gap-2 bg-[#8BC34A] hover:bg-[#7ab63f] text-black px-4 py-2 rounded-lg transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </nav>

          {/* BOTON MOVIL */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* MENU MOVIL */}

      {open && (

        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col px-6 py-6 gap-4 text-[#0F2A3A] font-medium">

            <a href="#">Inicio</a>

            <a href="#services">Servicios</a>

            <a href="#contact">Contacto</a>

            <a
              href="https://wa.me/573144486688"
              className="flex items-center justify-center gap-2 bg-[#8BC34A] text-black px-4 py-3 rounded-lg"
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