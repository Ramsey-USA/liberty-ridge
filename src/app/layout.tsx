import type { Metadata } from 'next'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore CSS module import
import './globals.css'

import { ThemeProvider } from '@/contexts/ThemeContext'

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
    <html lang="en" className="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('liberty-ridge-theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {
                  // Default to light theme if localStorage is not available
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}