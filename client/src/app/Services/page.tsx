'use client'
import {Plane, Bus, CalendarRange, TentTree ,Cog, UserRound} from 'lucide-react';
const services = [
  {
    title: 'Airport Transfers',
    description: 'Convenient and comfortable airport transfers to and from Colombo International Airport.',
    animation: 'animate-fadeRight',
    image: '/images/airport-transfer.jpg',
    icon: Plane
  },
  {
    title: 'Corporate Transport',
    description: 'Tailored transport solutions for corporate events, meetings, and employee commutes.',
    animation: 'animate-fadeLeft',
    icon: Bus
  },
  {
    title: 'Event Transport',
    description: 'Specialized transport services for weddings, parties, and other events.',
    animation: 'animate-fadeRight',
    icon: CalendarRange
  },
  {
    title: 'One-Day   Trip',
    description: 'Explore Sri Lanka with our curated one-day tours, including cultural and scenic destinations.',
    animation: 'animate-fadeLeft',
    icon: TentTree
  },
  {
    title: 'Customized Tours',
    description: 'Personalized tour packages designed to meet your specific interests and needs.',
    animation: 'animate-fadeRight',
    icon: Cog

  },
  {
    title: 'Long Distance Travel',
    description: 'Comfortable and reliable long-distance travel options across Sri Lanka.',
    animation: 'animate-fadeLeft',
    icon: Bus
  }

  
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-10 px-6">
      <h1 className="text-4xl font-bold text-white mb-20">Our Services</h1>

      <div className="grid gap-10 grid-cols-2 md:grid-cols-3  s max-w-5xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative group flex flex-col items-center justify-center text-center bg-gradient-to-b from-yellow-50 to-white text-gray-800 rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105 ${service.animation} animate-float`}
          >
            {service.icon && <service.icon className="w-12 h-12 mb-4" />}

            <h2 className="text-xl font-bold mb-2 text-yellow-600">{service.title}</h2>
            {/* Tooltip Content */}
            <div className="absolute bottom-full mb-3 z-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs font-medium rounded-md px-4 py-2 shadow-lg w-56">
              {service.description}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}
