import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header';
import Footer from './Footer';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Proyecto que usa la PokeApi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
