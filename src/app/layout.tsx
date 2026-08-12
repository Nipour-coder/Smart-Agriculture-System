import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vuna4IR Smart Agriculture | TUT 4IR Lab Incubated Agritech',
  description: 'Next-generation South African Smart Agriculture ecosystem combining autonomous drones, 24/7 solar IoT soil probes, AI computer vision, GPS field geofencing, and farm analytics. Built for load-shedding resilience and African soil.',
  keywords: [
    'Smart Agriculture South Africa',
    'TUT 4IR Lab',
    'Agritech SA',
    'Agricultural Drones',
    'IoT Soil Sensors',
    'Precision Farming South Africa',
    'Load-Shedding Resilient Agritech',
    'Maize Crop AI Analytics',
    'Tshwane University of Technology',
  ],
  authors: [{ name: 'Vuna4IR Team - TUT 4IR Lab' }],
  openGraph: {
    title: 'Vuna4IR Smart Agriculture Platform',
    description: 'Beyond Drones: Integrated Solar IoT, AI Computer Vision & GPS Geofencing for South African Farmers.',
    url: 'https://vuna4ir-agri.ac.za',
    siteName: 'Vuna4IR Smart Agri System',
    images: [
      {
        url: '/images/smart_agri_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Vuna4IR Smart Agriculture System Overview',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-emerald-500 selection:text-black bg-[#060B08] text-emerald-50">
        {children}
      </body>
    </html>
  );
}
