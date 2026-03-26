import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export const metadata: Metadata = {
  metadataBase: new URL('https://automotive247va.com'),
  title: {
    default: 'Automotive 24/7 | Auto Repair in Manassas, VA — Open 24 Hours',
    template: '%s | Automotive 24/7 Manassas VA',
  },
  description:
    'Automotive 24/7 is your trusted 24-hour auto repair shop in Manassas, VA. Expert diagnostics, brakes, oil changes, bodywork, and paint. Serving the entire DMV area. Call (571) 428-7684.',
  keywords: [
    'auto repair Manassas VA',
    'mechanic near me',
    '24/7 mechanic Manassas',
    'car repair DMV',
    'auto body shop Manassas',
    'brake repair Manassas',
    'oil change Manassas VA',
    'engine diagnostics Manassas',
    'emergency auto repair Virginia',
    'car mechanic Manassas VA',
    'auto paint shop Manassas',
    'transmission repair Manassas',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://automotive247va.com',
    siteName: 'Automotive 24/7',
    title: 'Automotive 24/7 — 24-Hour Auto Repair in Manassas, VA',
    description:
      'Expert auto repair, diagnostics, bodywork, and paint. Open 24 hours. Fast turnaround, honest pricing. Serving Manassas VA and the DMV area.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Automotive 24/7 — Auto Repair in Manassas VA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automotive 24/7 — 24-Hour Auto Repair in Manassas, VA',
    description:
      'Expert auto repair, diagnostics, bodywork, and paint. Open 24 hours. Serving Manassas VA and the DMV.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://automotive247va.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'Automotive 24/7',
              description:
                '24-hour auto repair shop in Manassas, VA. Expert diagnostics, brakes, oil changes, bodywork, and paint.',
              url: 'https://automotive247va.com',
              telephone: '+15714287684',
              email: 'service@automotive247va.com',
              openingHours: 'Mo-Su 00:00-24:00',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Manassas',
                addressLocality: 'Manassas',
                addressRegion: 'VA',
                postalCode: '20110',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 38.7509,
                longitude: -77.4753,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '284',
                bestRating: '5',
              },
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
