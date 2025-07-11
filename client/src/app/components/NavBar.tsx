'use client'

import { Menu, SquareX, LogOut, CircleUser } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Page() {
  const [onClick, setOnClick] = useState(true)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle menu toggle
  const MenuButtonClick = () => {
    setOnClick(!onClick)
  }

  // Auto close on scroll or outside click
  useEffect(() => {
    if (!onClick) {
      const handleOutsideClick = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setOnClick(true)
        }
      }

      const handleScroll = () => {
        setOnClick(true)
      }

      document.addEventListener('mousedown', handleOutsideClick)
      window.addEventListener('scroll', handleScroll)

      return () => {
        document.removeEventListener('mousedown', handleOutsideClick)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [onClick])

  return (
    <div className="text-white text-sm fixed top-0 left-0 right-0 z-10 w-full">
      <div className="flex flex-row items-center justify-between mx-auto">
        {/* Desktop Logo */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hidden md:flex ml-1 mt-1 animate-fadeLeft">
          <p className="text-l text-yellow-500 font-bold pl-4 pt-3 pb-3">Kasun</p>
          <p className="text-l text-grey-900 font-bold mr-3 mt-2 mb-2 ml-1 bg-yellow-500 border-l-2 border-yellow-500 p-1 rounded-md">
            Tours
          </p>
        </div>

        {/* Mobile Logo */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg md:hidden mt-1 ml-1 animate-fadeLeft">
          <p className="text-m text-yellow-500 font-bold pl-4 pt-3 pb-3">Kasun</p>
          <p className="text-m text-grey-900 font-bold mr-3 mt-2 mb-2 ml-1 bg-yellow-500 border-l-2 border-yellow-500 p-1 rounded-md">
            Tours
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex justify-center space-x-5 text-gray-300 text-sm">
            <li><a href="/#home" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/#services" className="hover:text-yellow-500">Services</a></li>
            <li><a href="/#contact" className="hover:text-yellow-500">Contact</a></li>
            <li><a href="/#gallery" className="hover:text-yellow-500">Gallery</a></li>
            <li><a href="/BookingPg" className="hover:text-yellow-500">Tours</a></li>
            
          </ul>
        </div>
        <div className="hidden md:flex justify-right gap-5">
          <button className='text-white hover:text-blue-500 rounded p-1 flex gap-1'>
            <p className='pt-1'>LogIn</p> <CircleUser/>
          </button>
          <button className='text-white hover:text-red-500 rounded p-1 flex gap-1'>
            <p className='pt-1'>LogOut</p> <LogOut/>
          </button>
          
        </div>

        {/* Mobile Menu Toggle Button */}
        <div>
          <button className="md:hidden p-4 text-gray-300 mr-2" onClick={MenuButtonClick}>
            {onClick ? (
              <Menu className="h-8 w-8 text-yellow-500" />
            ) : (
              <SquareX className="h-8 w-8 text-yellow-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {!onClick && (
        <div
          className="mobile-menu bg-gray-800 text-yellow-500 p-4 m-2 rounded-md shadow-lg md:hidden "
          ref={menuRef}
        >
          <ul className="flex flex-col space-y-2 text-m">
            <li><a href="/#home">Home</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/#gallery">Gallery</a></li>
            <li><a href="/BookingPg">Tours</a></li>
           
          </ul>
        </div>
      )}
    </div>
  )
}
