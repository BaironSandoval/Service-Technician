"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react";

export default function Contacto() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Nuevo mensaje desde la web Intelcenter Tecnología",
    );

    const body = encodeURIComponent(
      `Nombre: ${formData.name}
Email: ${formData.email}
Mensaje: ${formData.message}`
    );

    window.location.href = `mailto:intelcentertecnologia@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-24 bg-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#031C3A]">
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
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 space-y-6">

            <div>
              <label className="block text-sm font-medium text-[#031C3A] mb-2">
                Nombre
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#031C3A] focus:outline-none focus:ring-2 focus:ring-[#59E1E6]"
                placeholder="Tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#031C3A] mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#031C3A] focus:outline-none focus:ring-2 focus:ring-[#59E1E6]"
                placeholder="tu@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#031C3A] mb-2">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#031C3A] focus:outline-none focus:ring-2 focus:ring-[#59E1E6]"
                placeholder="¿Cómo podemos ayudarte?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#031C3A] hover:bg-[#0B3A5B] text-white font-semibold py-3 rounded-lg transition shadow-md"
            >
              Enviar Mensaje
            </button>

          </form>

          {/* INFORMACION */}
          <div className="space-y-8">

            <div className="flex items-start gap-4">

              <div className="bg-[#031C3A] text-[#59E1E6] p-3 rounded-lg">
                <Phone size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#031C3A]">
                  Teléfono
                </h3>
                <p className="text-gray-600">
                  +57 313 695 1496 <br />
                  +57 314 448 6688
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-[#031C3A] text-[#59E1E6] p-3 rounded-lg">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#031C3A]">
                  Correo electrónico
                </h3>
                <p className="text-gray-600">
                  intelcentertecnologia@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-[#031C3A] text-[#59E1E6] p-3 rounded-lg">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#031C3A]">
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