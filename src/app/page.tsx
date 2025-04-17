'use client'

import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [activeImage, setActiveImage] = useState(0)
  const backgroundImages = [
    '/assets/images/VILLA 4-1.jpeg',
    '/assets/images/penthouse1.jpeg',
    '/assets/images/VILLA 4-2.jpeg',
    '/assets/images/penthouse2.jpeg',
    '/assets/images/VILLA 4-3.jpeg'
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(current => (current + 1) % backgroundImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="hero-background w-full h-full absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="transition-opacity duration-1500 absolute inset-0"
              style={{ 
                opacity: activeImage === index ? 1 : 0 
              }}
            >
              <img
                src={image}
                alt={`Terraces luxury property ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white animate-fade-in-down"
          >
            Experience Luxury Living
          </div>
          <div 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 animate-fade-in-down animation-delay-200"
          >
            Discover our exclusive collection at Terraces
          </div>
          <div
            className="animate-fade-in-down animation-delay-400"
          >
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold-light transition-colors"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>

      {/* Villas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Exclusive Villas</h2>
            <p className="text-lg md:text-xl text-gray-600">Choose your perfect getaway</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Villa4 Card */}
            <div 
              className="relative group card-hover hover:scale-102 transition-transform duration-200"
            >
              <Link href="/villa4">
                <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden bg-gray-900">
                  <img 
                    src="/assets/images/VILLA 4-1.jpeg"
                    alt="Villa4"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Villa4</h3>
                      <p className="text-sm sm:text-base text-gray-200">Experience modern luxury in our signature villa</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                </div>
              </Link>
            </div>

            {/* Penthouse Card */}
            <div 
              className="relative group card-hover hover:scale-102 transition-transform duration-200"
            >
              <Link href="/penthouse">
                <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden bg-gray-900">
                  <img 
                    src="/assets/images/penthouse1.jpeg"
                    alt="Penthouse"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Penthouse</h3>
                      <p className="text-sm sm:text-base text-gray-200">Elevate your stay in our luxurious penthouse</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
