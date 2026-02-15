'use client'

import { Phone } from 'lucide-react'

export default function StickyCallButton() {
  return (
    <a
      href="tel:+12015551234"
      className="fixed bottom-6 right-6 z-50 xl:hidden flex items-center justify-center w-14 h-14 bg-flg-accent hover:bg-flg-blue text-white rounded-full shadow-lg shadow-flg-accent/30 transition-all hover:scale-105"
      aria-label="Call Figueroa Law Group"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}
