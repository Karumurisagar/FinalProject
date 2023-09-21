import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway} from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header/>
        {children}</body>
    </html>
  )
}
