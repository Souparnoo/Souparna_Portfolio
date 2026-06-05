import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Souparna Kundu — ETCE Student & Developer',
  description: 'Portfolio of Souparna Kundu — Electronics & Telecommunication Engineering student at Jadavpur University. VLSI, Embedded Systems, Software Development, AI.',
  keywords: ['Souparna Kundu', 'ETCE', 'Jadavpur University', 'VLSI', 'Portfolio', 'Electronics', 'Developer'],
  authors: [{ name: 'Souparna Kundu' }],
  openGraph: {
    title: 'Souparna Kundu — ETCE Student & Developer',
    description: 'Electronics & Tele-communication Engineering Student at Jadavpur University',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  )
}
