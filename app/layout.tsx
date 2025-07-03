import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ProjectProvider } from '@/context/ProjectProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Pattern3 | AI Solutions for Small Businesses',
    template: '%s | Pattern3'
  },
  description: 'Pattern3 helps small businesses turn AI into real-world results—no dev team required.',
  keywords: ['AI solutions', 'small business automation', 'AI consulting', 'Oklahoma City'],
  authors: [{ name: 'Will Patterson' }],
  creator: 'Pattern3 LLC',
  publisher: 'Pattern3 LLC',
  metadataBase: new URL('https://pattern3.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pattern3.com',
    siteName: 'Pattern3',
    title: 'Pattern3 | AI Solutions for Small Businesses',
    description: 'Pattern3 helps small businesses turn AI into real-world results—no dev team required.',
    images: [
      {
        url: '/images/profile/headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Will Patterson - Founder of Pattern3 LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pattern3 | AI Solutions for Small Businesses',
    description: 'Pattern3 helps small businesses turn AI into real-world results—no dev team required.',
    images: ['/images/profile/headshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical Resource Preloading for LCP */}
        <link rel="preload" href="/images/profile/headshot.avif" as="image" type="image/avif" fetchPriority="high" />
        <link rel="preload" href="/images/logos/pattern3black.png" as="image" fetchPriority="high" />
        
        {/* Font Preloading */}
        <link rel="preload" href="/fonts/Pattern3-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Pattern3-Stamp.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preconnect for Critical Third-party Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://pattern3.com/#organization',
              name: 'Pattern3 LLC',
              alternateName: ['Pattern3', 'Pattern 3'],
              url: 'https://pattern3.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://pattern3.com/images/logos/pattern3black.png',
                width: 240,
                height: 80
              },
              image: 'https://pattern3.com/images/profile/headshot.jpg',
              description: 'Pattern3 LLC provides AI solutions and automation services for small businesses, healthcare practices, and startups. Based in Oklahoma City, serving clients nationwide.',
              foundingDate: '2024',
              founder: {
                '@type': 'Person',
                '@id': 'https://pattern3.com/about#will-patterson',
                name: 'Will Patterson',
                jobTitle: 'Founder & AI Consultant',
                description: 'AI consultant specializing in human-centered solutions for small businesses',
                image: 'https://pattern3.com/images/profile/headshot.jpg',
                alumniOf: {
                  '@type': 'EducationalOrganization',
                  name: 'Baylor University'
                }
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Oklahoma City',
                addressRegion: 'Oklahoma',
                addressCountry: 'United States'
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  email: 'will@pattern3.com',
                  availableLanguage: ['English'],
                  areaServed: 'US'
                }
              ],
              sameAs: [
                'https://www.instagram.com/pattern3solutions/',
                'https://www.tiktok.com/@w_patt3'
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ProjectProvider>
          {children}
        </ProjectProvider>
      </body>
    </html>
  )
}