import { Facebook, Instagram, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0F2A3A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LOGO Y DESCRIPCIÓN */}

          <div>

            <div className="flex items-center gap-3 mb-4">

              <Image
                src="/logo.png"
                alt="Intelcenter Tecnología"
                width={50}
                height={50}
              />

              <h3 className="text-xl font-semibold">
                Intelcenter Tecnología
              </h3>

            </div>

            <p className="text-gray-300">
              Servicio técnico profesional para computadores, impresoras,
              televisores y equipos electrónicos con calidad garantizada.
            </p>

          </div>

          {/* ENLACES */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h3>

            <ul className="space-y-2 text-gray-300">

              <li>
                <a href="#" className="hover:text-[#8BC34A] transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#8BC34A] transition">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#8BC34A] transition">
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

            <div className="space-y-3 text-gray-300">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+57 314 448 6688</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>intelcentertecnologia@gmail.com</span>
              </div>

            </div>

            {/* REDES */}

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="bg-[#2F8DBA] p-3 rounded-lg hover:bg-[#25759b] transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="bg-[#2F8DBA] p-3 rounded-lg hover:bg-[#25759b] transition"
              >
                <Instagram size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="border-t border-gray-700 text-center py-6 text-gray-400">

        © {new Date().getFullYear()} Intelcenter Tecnología. Todos los derechos reservados.

      </div>

    </footer>
  )
}