'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedImage } from '@/components/ui/AnimatedImage'

export default function Villa4Page() {
  const villaImages = {
    villa1: '/assets/images/VILLA 4-1.jpeg',
    villa2: '/assets/images/VILLA 4-2.jpeg',
    villa3: '/assets/images/VILLA 4-3.jpeg',
    villa15: '/assets/images/VILLA 4-15.jpeg',
    villa16: '/assets/images/VILLA 4-16.jpeg',
    villa8: '/assets/images/VILLA 4-8.jpeg',
    villa9: '/assets/images/VILLA 4-9.jpeg',
    villa20: '/assets/images/VILLA 4-20.jpeg',
    villa21: '/assets/images/VILLA 4-21.jpeg',
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <AnimatedImage
              src={villaImages.villa1}
              alt="Villa4 Exterior"
              className="h-full"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Villa4
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experience modern luxury in our signature villa
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-16 md:space-y-20">
            {/* Living Area */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">Luxurious Living Space</h2>
                <p className="text-lg md:text-xl text-gray-600">
                  Immerse yourself in our meticulously designed living areas, where modern aesthetics meet unparalleled comfort.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={villaImages.villa2} 
                      alt="Villa4 Living Room" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={villaImages.villa3} 
                      alt="Villa4 Living Area" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">Elegant Bedrooms</h2>
                <p className="text-lg md:text-xl text-gray-600">
                  Rest in absolute comfort in our beautifully appointed bedrooms.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={villaImages.villa15} 
                      alt="Villa4 Master Bedroom" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={villaImages.villa16} 
                      alt="Villa4 Guest Bedroom" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Kitchen & Dining */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">Gourmet Kitchen & Dining</h2>
                <p className="text-lg md:text-xl text-gray-600">
                  A chef&apos;s paradise equipped with top-of-the-line appliances and elegant dining spaces.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={villaImages.villa8} 
                      alt="Villa4 Kitchen" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={villaImages.villa9} 
                      alt="Villa4 Dining Area" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Outdoor Space */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">Stunning Outdoor Areas</h2>
                <p className="text-lg md:text-xl text-gray-600">
                  Enjoy the perfect blend of indoor and outdoor living with our beautifully landscaped spaces.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={villaImages.villa20} 
                      alt="Villa4 Outdoor Space" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={villaImages.villa21} 
                      alt="Villa4 Pool Area" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 md:mb-6">Experience Villa4</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Ready to experience luxury living at its finest? Book your stay at Villa4 today.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold-light transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
} 