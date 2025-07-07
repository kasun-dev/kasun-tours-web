// app/ClientLayout.tsx
'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/app/components/LoadingScreen'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NavBar />
      {loading ? <LoadingScreen /> : children}
      <Footer />
    </body>
  )
}
