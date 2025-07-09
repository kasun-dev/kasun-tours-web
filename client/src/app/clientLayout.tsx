'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import LoadingScreen from '@/app/components/LoadingScreen'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [firstLoad ,setFirstLoad] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)

      // Scroll to hash target after loading screen disappears
      const hash = window.location.hash
      if (hash) {
        // Timeout ensures children are rendered before trying to scroll
        setTimeout(() => {
          const target = document.querySelector(hash)
          if (target) {
            const y = target.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
        }, 300)
      }

    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  //first loading verification
  useEffect(() => {
    const hasVisited = Cookies.get('visited')

    if (!hasVisited) {
      Cookies.set('visited', 'true')
      setFirstLoad(true)
      console.log('This is your first visit!')
    }
  }, [])

  return (
  <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {(firstLoad && loading) ? <LoadingScreen /> : children}
  </div>

  )
}
