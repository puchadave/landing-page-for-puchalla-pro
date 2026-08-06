import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://puchalla.pro'),
  title: {
    default: 'puchalla.pro | B2B Catalog & webOwie Research',
    template: '%s | puchalla.pro',
  },
  description:
    'B2B product catalog, systems architecture, open-source intelligence research and technical publications by puchalla.pro and webOwie Research Lab.',
  keywords: [
    'B2B product catalog',
    'systems architecture',
    'webOwie',
    'Open Source Intelligence',
    'Artificial Intelligence',
    'Cybersecurity',
    'Information Integrity',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'puchalla.pro | B2B Catalog & webOwie Research',
    description:
      'Structured B2B product information and a reproducible research portfolio for AI, OSINT, cybersecurity and digital risk.',
    type: 'website',
    url: 'https://puchalla.pro',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="dark bg-background">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
