import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angelhernandezco.vercel.app/"), 

  title: {
    default: "Angel Hernandez | Software Engineer",
    template: "%s | Angel Hernandez",
  },

  description:
    "Software Engineer especializado en desarrollo web moderno full-stack con React, Angular, FastApi y Express. Construyo aplicaciones escalables, rápidas y bien diseñadas.",

  keywords: [
    "Angel Hernandez",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Portfolio",
    "Web Developer México",
  ],

  authors: [{ name: "Angel Hernandez" }],
  creator: "Angel Hernandez",

  openGraph: {
    title: "Angel Hernandez | Software Engineer",
    description:
      "Ingenierio de Software especializado en Angular, React, FastApi y Express. Explora mis proyectos y experiencia profesional.",
    url: "https://angelhernandezco.vercel.app/",
    siteName: "Angel Hernandez Portfolio",
    images: [
      {
        url: "/og-image.png", // crea esta imagen 1200x630
        width: 1200,
        height: 630,
        alt: "Angel Hernandez - Software Engineer",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Angel Hernandez | Software Engineer",
    description:
      "Software Engineer especializado en desarrollo web.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Providers />
      </body>
    </html>
  );
}
