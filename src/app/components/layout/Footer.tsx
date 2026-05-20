import { Facebook, Instagram, Phone, Mail, Music2 } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#031C3A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LOGO Y DESCRIPCIÓN */}
          <div>

            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/robot-logo.png"
                alt="Intelcenter Tecnología"
                width={50}
                height={50}
                className="drop-shadow-[0_0_4px_white]"
              />

              <Image
                src="/intelcenter-log.png" // guarda la imagen con ese nombre en /public
                alt="Intelcenter Tecnología"
                width={160}
                height={40}
                className="object-contain"
              />
            </div>

            <p className="text-[#D9E1E8]">
              Servicio técnico especializado para computadores, impresoras,
              televisores con calidad garantizada.
            </p>

          </div>

          {/* ENLACES */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h3>

            <ul className="space-y-2 text-[#D9E1E8]">

              <li>
                <a href="#" className="hover:text-[#59E1E6] transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#59E1E6] transition">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#59E1E6] transition">
                  Contacto
                </a>
              </li>

            </ul>

          </div>

          {/* CONTACTO */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Contacto
            </h3>

            <div className="space-y-3 text-[#D9E1E8]">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#59E1E6]" />
                <span>+57 313 695 1496</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#59E1E6]" />
                <span>intelcentertecnologia@gmail.com</span>
              </div>

            </div>

            {/* REDES */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://www.facebook.com/intelcentertecnologia/"
                target="_blank"
                className="bg-[#0B3A5B] p-3 rounded-lg hover:bg-[#59E1E6] hover:text-[#031C3A] transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/intelcentertecnologia/"
                target="_blank"
                className="bg-[#0B3A5B] p-3 rounded-lg hover:bg-[#59E1E6] hover:text-[#031C3A] transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@intelcentertecnologia"
                target="_blank"
                className="bg-[#0B3A5B] p-3 rounded-lg hover:bg-[#59E1E6] hover:text-[#031C3A] transition"
              >
                <Music2 size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-[#0F4C6B] text-center py-6 text-[#D9E1E8] text-sm">
        © {new Date().getFullYear()} Intelcenter Tecnología. Todos los derechos reservados.
      </div>

    </footer>
  )
}
