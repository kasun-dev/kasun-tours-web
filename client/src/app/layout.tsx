// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'
import ClientLayout from './clientLayout';

export const metadata: Metadata = {
  title: 'Kasun Tours',
  description: 'Travel with Kasun Tours-web-app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
            <NavBar/>
            {children}
            <Footer/>
        </ClientLayout>
      </body>
    </html>
  )
}
