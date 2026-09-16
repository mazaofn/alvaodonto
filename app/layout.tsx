import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionGate } from "@/components/motion/motion";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Alva — Odontologia contemporânea",
    template: "%s · Alva",
  },
  description:
    "Clínica odontológica particular em São Paulo. Avaliação, diagnóstico, tratamento e acompanhamento — um cuidado que começa antes do sorriso.",
  openGraph: {
    title: "Alva — Seu sorriso, cuidado por inteiro",
    description:
      "Odontologia contemporânea: atendimento próximo, planejamento preciso e acompanhamento contínuo.",
    type: "website",
    siteName: "Alva",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#faf7f1" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${instrument.variable}`}
    >
      <body>
        <MotionGate />
        <a href="#conteudo" className="sr-only">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
