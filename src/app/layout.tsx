import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intelcenter Technología",
  description: "Servicio técnico profesional de computadores, impresoras y equipos tecnológicos",
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
