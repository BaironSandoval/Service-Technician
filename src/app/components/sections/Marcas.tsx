import Image from "next/image"

const brands = [
  { name: "HP", logo: "/brands/HP.svg" },
  { name: "Epson", logo: "/brands/Epson-l.png" },
  { name: "Lenovo", logo: "/brands/lenovo.png" },
  { name: "Dell", logo: "/brands/dell.png" },
  { name: "Samsung", logo: "/brands/samsung-lo.png" },
  { name: "LG", logo: "/brands/lg-l.png" }
]

export default function Marcas() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}

        <div className="text-center mb-14">

          <h2 className="text-3xl font-bold text-[#0F2A3A]">
            Marcas con las que Trabajamos
          </h2>

          <p className="text-gray-600 mt-3">
            Reparamos y damos mantenimiento a equipos de las marcas tecnológicas más confiables.
          </p>

        </div>

        {/* LOGOS */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-[#F5F7FA] rounded-lg shadow-sm"
            >

              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}