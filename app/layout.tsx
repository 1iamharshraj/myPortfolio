import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harsh Raj\'s portfolio App',
  description: 'Created by Harsh Raj A',
  generator: 'harsh.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"
          style={{filter:"invert(0)"}}
    >
      <body>{children}</body>
    </html>
  )
}
