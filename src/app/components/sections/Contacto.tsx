"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Contacto() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Nuevo mensaje desde la web Intelcenter Tecnología"
    );

    const body = encodeURIComponent(
      `Nombre: ${formData.name}
Email: ${formData.email}
Mensaje: ${formData.message}`
    );

    window.location.href = `mailto:intelcentertecnologia@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-24 bg-[#F5F7FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* TITULO */}
        <div
          className={`text-center mb-16 transition-all duration-700
          ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-[#031C3A]">Contáctanos</h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ponte en contacto con nuestros técnicos para diagnóstico,
            mantenimiento o reparación de tus equipos electrónicos.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit}
            className={`bg-white p-10 rounded-xl shadow-sm border border-gray-100 space-y-6 transition-all duration-700
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <label className="block text-sm font-medium text-[#031C3A] mb-2">
                Nombre
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#031C3A]
                focus:outline-none focus:ring-2 focus:ring-[#59E1E6] focus:border-transparent
                transition-all duration-200"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#031C3A]
                focus:outline-none focus:ring-2 focus:ring-[#59E1E6] focus:border-transparent
                transition-all duration-200"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#031C3A]
                focus:outline-none focus:ring-2 focus:ring-[#59E1E6] focus:border-transparent
                transition-all duration-200"
                placeholder="¿Cómo podemos ayudarte?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#031C3A] text-white font-semibold py-3 rounded-lg
              transition-all duration-300 shadow-md
              hover:bg-[#0B3A5B] hover:scale-[1.02] hover:shadow-lg active:scale-95"
            >
              Enviar Mensaje
            </button>
          </form>

          {/* INFORMACION */}
          <div
            className={`space-y-8 transition-all duration-700
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                icon: Phone,
                title: "Teléfono",
                content: "+57 313 695 1496 \n +57 314 448 6688",
              },
              {
                icon: Mail,
                title: "Correo electrónico",
                content: "intelcentertecnologia@gmail.com",
              },
              {
                icon: MapPin,
                title: "Ubicación",
                content: "Cra. 100 #16h-56 Local 3-4 \n Bogotá, Colombia",
                link: "https://www.google.com/maps/place/Intelcenter+Tecnologia+SAS/@4.6722502,-74.1474309,18.25z/data=!4m6!3m5!1s0x8e3f9c8b36305163:0x13967bfe2c8e9e5d!8m2!3d4.6719459!4d-74.1469263!16s%2Fg%2F1ptz4pd84?entry=ttu",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              const isLocation = item.title === "Ubicación";

              const content = (
                <div className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1 cursor-pointer">
                  <div
                    className="bg-[#031C3A] text-[#59E1E6] p-3 rounded-lg
        transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0F4C6B]"
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#031C3A]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              );

              return isLocation ? (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
