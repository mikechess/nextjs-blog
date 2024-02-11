import type { Metadata } from 'next'
import { Cormorant_Garamond, Poppins } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['400'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'A Nextjs Blog App',
  description: 'Learning Nextjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} bg-neutral-100`}
      >
        {children}
      </body>
    </html>
  )
}
