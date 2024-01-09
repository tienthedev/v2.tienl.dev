import type { Metadata } from 'next'
import { Chivo_Mono } from 'next/font/google'
import './globals.css'


const chivo_mono = Chivo_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-chivo_mono',
});
export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={chivo_mono.className}>
        {children}
      </body>
    </html>
  )
}
