import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liberty Ridge Training Grounds LLC - Tactical Firearm Training',
  description: 'Professional tactical training courses led by Army veteran Zach Gaudette. Firearm safety, self-defense, and tactical training in Pasco, WA.',
  keywords: ['tactical training', 'firearm safety', 'self-defense', 'veteran owned', 'Pasco WA'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}