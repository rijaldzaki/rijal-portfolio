import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from 'next/font/google'
import { Marcellus_SC } from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','600', '700'],
  variable: '--font-montserrat',
});
const marcellus = Marcellus_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marcellus',
});

export const metadata: Metadata = {
  title: "Rijal Dzaki - Portofolio",
  description: "Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${montserrat.variable}
          ${marcellus.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
