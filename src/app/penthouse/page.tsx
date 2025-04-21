'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
      <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0">
              <img
                src={penthouseImages.penthouse1}
                alt="Penthouse Exterior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Luxury Penthouse
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Elevate your lifestyle in our exclusive penthouse suite
          </motion.p>
        </div>
      </section>

      {/* Penthouse Overview */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Penthouse Overview
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience luxury living in our meticulously designed penthouse offering spacious accommodations and premium amenities.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Square Feet */}
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-gold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">2,000</div>
              <div className="text-gray-600">Square Feet</div>
            </div>

            {/* Bedrooms */}
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-gold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8v8a2 2 0 002 2h12a2 2 0 002-2V8m-4-4H8a2 2 0 00-2 2v2h12V6a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h16M4 14h16" />
                </svg>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600">Bedrooms</div>
            </div>

            {/* Bathrooms */}
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-gold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6v12m16 0V6M4 12h16M7 6h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16v2m4-2v2m4-2v2" />
                </svg>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600">Bathrooms</div>
            </div>

            {/* Car Garage */}
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-gold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8l2-2h8l2 2m2 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8m16 0H4" />
                  <circle cx="7" cy="14" r="1" stroke="currentColor" />
                  <circle cx="17" cy="14" r="1" stroke="currentColor" />
                </svg>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">2</div>
              <div className="text-gray-600">Car Garage</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-20">
            {/* Living Space */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">Sophisticated Living</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  Experience the epitome of luxury in our expansive living spaces with breathtaking views.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={penthouseImages.penthouse2} 
                      alt="Penthouse Living Room" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={penthouseImages.penthouse3} 
                      alt="Penthouse Living Area" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Master Suite */}
            <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">Opulent Master Suite</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  Unwind in our lavishly appointed master suite, where comfort meets sophistication.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src="/assets/images/penthouse12.jpeg"
                      alt="Penthouse Master Bedroom" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src="/assets/images/penthouse4.jpeg"
                      alt="Penthouse Master Suite" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Entertainment */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">Entertainment & Leisure</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  Indulge in our premium entertainment spaces designed for the perfect blend of relaxation and social gathering.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src="/assets/images/penthouse10.jpeg"
                      alt="Penthouse Entertainment Area" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src="/assets/images/penthouse16.jpeg"
                      alt="Penthouse Lounge" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terrace */}
            <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-6 sm:gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">Private Terrace</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  Experience panoramic views from your private terrace, perfect for both relaxation and entertaining.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={penthouseImages.penthouse14} 
                      alt="Penthouse Terrace" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square relative w-full h-64 sm:h-auto">
                    <img 
                      src={penthouseImages.penthouse15} 
                      alt="Penthouse Outdoor Space" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View All Photos Button */}
      <div className="py-6 sm:py-8 md:py-12 text-center px-4 sm:px-6">
        <motion.a
          href="https://drive.google.com/drive/folders/1Azb3MH6c_B19HZoPHIkv7WYhQa0vJghh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gold text-base sm:text-lg font-semibold rounded-lg text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-xl group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <span>View All Photos</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>

      {/* Prime Location Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Prime Location
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Situated in a prestigious neighborhood with convenient access to premium amenities and natural surroundings.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Map */}
            <motion.div
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.8731685527036!2d73.81338937589661!3d15.544974184617662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfea14cad9f215%3A0x8e6e96ee6ae1c257!2sBetim-Verem-Saligao%20Rd%2C%20Marra%2C%20Pilern%2C%20Goa%20403114!5e0!3m2!1sen!2sin!4v1710835058838!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </motion.div>

            {/* Neighborhood Highlights */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-6 sm:mb-8">Neighborhood Highlights</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Airport Access</h4>
                    <p className="text-gray-600">10 minutes to International Airport</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Shopping District</h4>
                    <p className="text-gray-600">5 minutes to Premium Shopping District</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Beaches</h4>
                    <p className="text-gray-600">5 min to Calangute Beach</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Groceries</h4>
                    <p className="text-gray-600">Shops Nearby</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4 md:mb-6">Experience Penthouse Living</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8">
              Ready to elevate your stay to new heights? Book our exclusive penthouse today.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-gold hover:bg-gold-light transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
} 