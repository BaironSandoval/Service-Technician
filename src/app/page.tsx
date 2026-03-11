import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Servicios from "./components/sections/Servicios"
import AboutUs from "./components/sections/AboutUs"
import Marcas from "./components/sections/Marcas"
import EquiposQueReparamos from "./components/sections/EquiposQueReparamos"
import ProcesoDeReparacion from "./components/sections/ProcesoDeReparacion"
import Testimonios from "./components/sections/Testimonios"
import CallToAction from "./components/sections/CallToAction"
import Contacto from "./components/sections/Contacto"
import Footer from "./components/layout/Footer"
import WhatsAppFloat from "./components/ui/WhatsAppFloat"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <AboutUs />
      <Marcas />
      <EquiposQueReparamos />
      <ProcesoDeReparacion /> 
      <Testimonios />
      <CallToAction />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}