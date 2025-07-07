// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './clientLayout'

export const metadata: Metadata = {
  title: 'Kasun Tours',
  description: 'Travel with Kasun Tours-web-app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}
