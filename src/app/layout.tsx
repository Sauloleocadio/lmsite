import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "100", "300", "900", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title:
    "LM Estética automotiva - Vitrificação, Polimento, Higienização interna, Lavagem detalhada, Micropintura",
  description: "Onde cada detalhe importa",
  verification: {
    google: "3bKQtRLfIQrcaB_pF1KWc1L_E-9BFiyHfxTbY8Mh3-A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
