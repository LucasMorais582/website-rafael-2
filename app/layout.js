import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import { LanguageProvider } from '@/components/LanguageProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallButton from '@/components/StickyCallButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Figueroa Law Group | Immigration Attorney NJ & NY',
    template: '%s | Figueroa Law Group',
  },
  description: 'Figueroa Law Group (FLG) is a trusted immigration law firm serving New Jersey and New York. Over 25 years of experience in immigration, estate planning, real estate, family law, and bankruptcy.',
  keywords: ['Immigration Attorney New Jersey', 'Immigration Lawyer NJ', 'Bankruptcy Attorney NJ', 'Estate Planning Lawyer NJ', 'Immigration Law Firm NY', 'Hoboken Immigration Lawyer', 'Figueroa Law Group'],
  authors: [{ name: 'Figueroa Law Group' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'Figueroa Law Group',
    title: 'Figueroa Law Group | Immigration Attorney NJ & NY',
    description: 'Turning uncertainty into a clear way forward. Trusted immigration and legal services in New Jersey and New York.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Figueroa Law Group | Immigration Attorney NJ & NY',
    description: 'Turning uncertainty into a clear way forward. Trusted immigration and legal services in New Jersey and New York.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Figueroa Law Group',
    alternateName: 'FLG',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    telephone: '(201) 555-1234',
    email: 'info@figueroalawgroup.com',
    foundingDate: '1999',
    description: 'Immigration law firm serving New Jersey and New York with over 25 years of experience.',
    areaServed: ['New Jersey', 'New York'],
    knowsLanguage: ['English', 'Spanish', 'Portuguese', 'French'],
    priceRange: '$$',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '221 River Street, 9th Floor',
        addressLocality: 'Hoboken',
        addressRegion: 'NJ',
        postalCode: '07030',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '400 Rella Blvd., Suite 165',
        addressLocality: 'Suffern',
        addressRegion: 'NY',
        postalCode: '10901',
        addressCountry: 'US',
      },
    ],
    founder: {
      '@type': 'Attorney',
      name: 'Rafael Figueroa, Esq.',
      jobTitle: 'Founder and President',
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'University of Pennsylvania' },
        { '@type': 'CollegeOrUniversity', name: 'Tulane University School of Law' },
      ],
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <StickyCallButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
