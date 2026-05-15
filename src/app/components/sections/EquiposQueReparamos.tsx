"use client";

import { Monitor, Printer, Laptop, Tv, Smartphone, Cpu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const devices = [
  {
    icon: Laptop,
    name: "Portátiles",
    description:
      "Cambio de pantalla, teclado, carcasa, board, batería, reparación electrónica, ampliación de RAM y SSD.",
    images: [
      "/equipos/l1.jpg",
      "/equipos/l5.jpg",
      "/equipos/l3.jpg",
      "/equipos/laptop-4.jpg",
      "/equipos/l2.jpg",
      "/equipos/l6.jpg",
      "/equipos/l7.jpg",
    ],
  },
  {
    icon: Printer,
    name: "Impresoras",
    description:
      "Mantenimiento, cambio de cabezal, limpieza interna, reparación de bandejas, rodillos y sistema de tinta.",
    images: [
      "/equipos/printer1.jpg",
      "/equipos/printer4.jpg",
      "/equipos/printer2.jpg",
      "/equipos/printer3.jpg",
      "/equipos/printer5.jpg",
      "/equipos/printer6.jpg",
    ],
  },
  {
    icon: Cpu,
    name: "Computadores de Escritorio",
    description:
      "Cambio de fuente, board, discos, limpieza, upgrade de RAM/SSD, reparación electrónica.",
    images: [
      "/equipos/pc-1.jpg",
      "/equipos/pc2.jpg",
      "/equipos/pc3.jpg",
      "/equipos/pc4.jpg",
      "/equipos/pc5.jpg",
      "/equipos/pc6.jpg",
      "/equipos/pc7.jpg",
      "/equipos/pc8.jpg",
      "/equipos/pc9.jpg",
      "/equipos/pc10.jpg",
      "/equipos/pc11.jpg",
      "/equipos/pc12.jpg",
    ],
  },
  {
    icon: Monitor,
    name: "Todo en uno",
    description:
      "Reparación de pantalla, board, fuente, mantenimiento interno y upgrades.",
    images: [
      "/equipos/allinone1.jpg",
      "/equipos/allinone6.jpg",
      "/equipos/allinone2.jpg",
      "/equipos/allinone3.jpg",
      "/equipos/allinone4.jpg",
      "/equipos/allinone5.jpg",
      "/equipos/allinone7.jpg",
      "/equipos/allinone8.jpg",
    ],
  },
  {
    icon: Tv,
    name: "Televisores",
    description:
      "Cambio de pantallas, LEDs, fuentes, tarjetas mainboard y reparación electrónica.",
    images: [
      "/equipos/tv6.jpg",
      "/equipos/tv2.jpg",
      "/equipos/tv3.jpg",
      "/equipos/tv4.jpg",
      "/equipos/tv5.jpg",
      "/equipos/tv1.jpg",
    ],
  },
  {
    icon: Smartphone,
    name: "Dispositivos Móviles",
    description:
      "Cambio de pantalla, batería, puertos de carga, software y reparación electrónica.",
    images: [
      "/equipos/phone1.jpg",
      "/equipos/phone2.jpg",
      "/equipos/phone3.jpg",
      "/equipos/phone4.jpg",
      "/equipos/phone5.jpg",
      "/equipos/phone6.jpg",
    ],
  },
];

export default function EquiposQueReparamos() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<(typeof devices)[number] | null>(
    null
  );
  const [activeImg, setActiveImg] = useState(0);

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

  return (
    <section className="py-24 bg-[#F5F7FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* TITULO */}
        <div
          className={`text-center mb-16 transition-all duration-700
          ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-[#031C3A]">
            Equipos que Reparamos
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Reparación y mantenimiento profesional.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {devices.map((device, index) => {
            const Icon = device.icon;

            return (
              <div
                key={index}
                onClick={() => {
                  setSelected(device);
                  setActiveImg(0);
                }}
                className={`cursor-pointer bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center
                shadow-sm transition-all duration-500
                hover:shadow-lg hover:-translate-y-1 hover:scale-105
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#031C3A] text-[#59E1E6] p-4 rounded-full mb-4">
                  <Icon size={30} />
                </div>

                <p className="font-semibold text-[#031C3A]">{device.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-white max-w-5xl w-full rounded-xl p-6 relative overflow-y-auto max-h-[90vh]">
            {/* cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={28} />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-[#031C3A]">
              {selected.name}
            </h3>

            <p className="text-gray-600 mb-6">{selected.description}</p>

            {/* GALERIA */}
            <div className="flex flex-col gap-4">
              {/* IMAGEN PRINCIPAL */}
              <div className="relative w-full h-[250px] md:h-[400px] border rounded-lg overflow-hidden">
                <Image
                  src={selected.images[activeImg]}
                  alt="principal"
                  fill
                  className="object-contain bg-white"
                />
              </div>

              {/* MINIATURAS */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {selected.images.map((img: string, i: number) => (
                  <div
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative min-w-[70px] h-[70px] cursor-pointer border rounded-md overflow-hidden
      ${activeImg === i ? "border-[#59E1E6]" : "border-gray-200"}`}
                  >
                    <Image
                      src={img}
                      alt="thumb"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
