import { Phone, Mail, MapPin } from "lucide-react"

export default function Contacto() {
  return (
    <section id="contact" className="py-24 bg-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#0F2A3A]">
            Contáctanos
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ponte en contacto con nuestros técnicos para diagnóstico,
            mantenimiento o reparación de tus equipos electrónicos.
          </p>

        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-16">

          {/* FORMULARIO */}

          <form className="bg-white p-10 rounded-xl shadow-sm border border-gray-200 space-y-6">

            <div>
              <label className="block text-sm font-medium text-[#0F2A3A] mb-2">
                Nombre
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F8DBA]"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F2A3A] mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F8DBA]"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F2A3A] mb-2">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F8DBA]"
                placeholder="¿Cómo podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2F8DBA] hover:bg-[#25759b] text-white font-semibold py-3 rounded-lg transition"
            >
              Enviar Mensaje
            </button>

          </form>

          {/* INFORMACION */}

          <div className="space-y-8">

            <div className="flex items-start gap-4">

              <div className="bg-[#2F8DBA] text-white p-3 rounded-lg">
                <Phone size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#0F2A3A]">
                  Teléfono
                </h3>
                <p className="text-gray-600">
                  +57 314 448 6688
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-[#2F8DBA] text-white p-3 rounded-lg">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#0F2A3A]">
                  Correo electrónico
                </h3>
                <p className="text-gray-600">
                  intelcentertecnologia@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-[#2F8DBA] text-white p-3 rounded-lg">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#0F2A3A]">
                  Ubicación
                </h3>
                <p className="text-gray-600">
                  Bogotá, Colombia
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}