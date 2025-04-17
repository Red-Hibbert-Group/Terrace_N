'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedImage } from '@/components/ui/AnimatedImage'
import { VillaSection } from '@/components/ui/VillaSection'

export default function PenthousePage() {
  const penthouseImages = {
    penthouse1: '/assets/images/penthouse1.jpeg',
    penthouse2: '/assets/images/penthouse2.jpeg',
    penthouse3: '/assets/images/penthouse3.jpeg',
    penthouse4: '/assets/images/penthouse4.jpeg',
    penthouse5: '/assets/images/penthouse5.jpeg',
    penthouse8: '/assets/images/penthouse8.jpeg',
    penthouse9: '/assets/images/penthouse9.jpeg',
    penthouse14: '/assets/images/penthouse14.jpeg',
    penthouse15: '/assets/images/penthouse15.jpeg',
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
              src={penthouseImages.penthouse1}
              alt="Penthouse Exterior"
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
            Luxury Penthouse
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Elevate your lifestyle in our exclusive penthouse suite
          </motion.p>
        </div>
      </section>

      {/* Living Space */}
      <VillaSection
        title="Sophisticated Living"
        description="Experience the epitome of luxury in our expansive living spaces with breathtaking views."
      >
        <div className="grid grid-cols-2 gap-4">
          <AnimatedImage
            src={penthouseImages.penthouse2}
            alt="Penthouse Living Room"
            className="h-64"
          />
          <AnimatedImage
            src={penthouseImages.penthouse3}
            alt="Penthouse Living Area"
            className="h-64"
          />
        </div>
      </VillaSection>

      {/* Master Suite */}
      <VillaSection
        title="Opulent Master Suite"
        description="Unwind in our lavishly appointed master suite, where comfort meets sophistication."
        reversed
      >
        <div className="grid grid-cols-2 gap-4">
          <AnimatedImage
            src={penthouseImages.penthouse4}
            alt="Penthouse Master Bedroom"
            className="h-64"
          />
          <AnimatedImage
            src={penthouseImages.penthouse5}
            alt="Penthouse Master Bathroom"
            className="h-64"
          />
        </div>
      </VillaSection>

      {/* Entertainment */}
      <VillaSection
        title="Entertainment & Leisure"
        description="Indulge in our premium entertainment spaces designed for the perfect blend of relaxation and social gathering."
      >
        <div className="grid grid-cols-2 gap-4">
          <AnimatedImage
            src={penthouseImages.penthouse8}
            alt="Penthouse Entertainment Area"
            className="h-64"
          />
          <AnimatedImage
            src={penthouseImages.penthouse9}
            alt="Penthouse Lounge"
            className="h-64"
          />
        </div>
      </VillaSection>

      {/* Terrace */}
      <VillaSection
        title="Private Terrace"
        description="Experience panoramic views from your private terrace, perfect for both relaxation and entertaining."
        reversed
      >
        <div className="grid grid-cols-2 gap-4">
          <AnimatedImage
            src={penthouseImages.penthouse14}
            alt="Penthouse Terrace"
            className="h-64"
          />
          <AnimatedImage
            src={penthouseImages.penthouse15}
            alt="Penthouse Outdoor Space"
            className="h-64"
          />
        </div>
      </VillaSection>

      {/* Call to Action */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Experience Penthouse Living</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to elevate your stay to new heights? Book our exclusive penthouse today.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold-light transition-colors"
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