import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intelcenter Tecnología",
  description:
    "Servicio técnico de computadores, impresoras y televisores. Reparación, mantenimiento y venta de equipos tecnológicos.",
  keywords: [
    "servicio técnico computadores",
    "reparación laptops",
    "reparación impresoras",
    "mantenimiento computadores",
    "servicio técnico tecnología",
  ],
  icons: {
    icon: "/logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
