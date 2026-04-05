import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'MOA Accesorios | Bijouterie Online — Uruguay',
    template: '%s | MOA Accesorios',
  },
  description:
    'Cadenas, collares de mostacillas, chokers de cuero, pulseras y más. Envíos a todo Uruguay desde San José de Mayo.',
  keywords: [
    'accesorios',
    'bijouterie',
    'cadenas',
    'collares',
    'mostacillas',
    'chokers',
    'cuero',
    'pulseras',
    'caravanas',
    'uruguay',
    'san josé de mayo',
  ],
  openGraph: {
    title: 'MOA Accesorios',
    description: 'Accesorios hechos para vos. Envíos a todo Uruguay',
    url: 'https://moaaccesorios.uy',
    siteName: 'MOA Accesorios',
    locale: 'es_UY',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
