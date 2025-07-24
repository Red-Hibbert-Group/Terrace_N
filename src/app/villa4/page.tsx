'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedImage } from '@/components/ui/AnimatedImage'

export default function Villa4Page() {
  const [currentFloorPlan, setCurrentFloorPlan] = useState(0)
  
  const villaImages = {
    villa1: '/assets/images/VILLA 4-1.jpeg',
    villa2: '/assets/images/VILLA 4-2.jpeg',
    villa3: '/assets/images/VILLA 4-3.jpeg',
    villa15: '/assets/images/VILLA 4-15.jpeg',
    villa16: '/assets/images/VILLA 4-16.jpeg',
    villa8: '/assets/images/VILLA 4-8.jpeg',
    villa9: '/assets/images/VILLA 4-9.jpeg',
    villa13: '/assets/images/VILLA 4-13.jpeg',
    villa20: '/assets/images/VILLA 4-20.jpeg',
    villa21: '/assets/images/VILLA 4-21.jpeg',
  }

  const floorPlans = [
    {
      image: '/images/image.jpeg',
      title: 'Ground Floor',
      features: ['Living Room', 'Kitchen & Dining', 'Guest Bathroom', 'Garden Access']
    },
    {
      image: '/images/image (1).jpeg',
      title: 'First Floor',
      features: ['Master Suite', 'Private Terrace', 'Family Lounge', 'Study Room']
    },
    {
      image: '/images/image (2).jpeg',
      title: 'Second Floor',
      features: ['Guest Suites', 'Entertainment Area', 'Balcony', 'Storage Space']
    }
  ]

  const handlePrevious = () => {
    setCurrentFloorPlan((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentFloorPlan((prev) => (prev === floorPlans.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
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
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
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

      {/* Villa Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Villa Overview
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience luxury living in our meticulously designed villa offering spacious accommodations and premium amenities.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Square Feet */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-gold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">2,762</div>
              <div className="text-gray-600">Square Feet</div>
            </div>

            {/* Bedrooms */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-gold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6v12m16 0V6M4 12h16M7 6h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16v2m4-2v2m4-2v2" />
                </svg>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600">Bathrooms</div>
            </div>

            {/* Car Garage */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
                      src={villaImages.villa13} 
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

      {/* View All Photos Button */}
      <div className="py-8 md:py-12 text-center">
        <motion.a
          href="https://drive.google.com/drive/u/0/folders/1epw-0WRWHSxvnIzUkwfFH5sQLZEjsrL7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 border-2 border-gold text-lg font-semibold rounded-lg text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-xl group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <span>View All Photos</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>

      {/* Interactive Blueprint Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Interactive Blueprint
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore detailed floor plans of our exquisite villa to discover the thoughtful layout and premium features.
            </motion.p>
          </div>

          <div className="relative">
            {/* Blueprint Carousel */}
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  key={currentFloorPlan}
                  className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={floorPlans[currentFloorPlan].image}
                    alt={`${floorPlans[currentFloorPlan].title} Plan`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <motion.div
                  key={`content-${currentFloorPlan}`}
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text">{floorPlans[currentFloorPlan].title}</h3>
                  <ul className="space-y-4">
                    {floorPlans[currentFloorPlan].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-600">
                        <span className="text-gold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {floorPlans.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentFloorPlan === index ? 'bg-gold' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentFloorPlan(index)}
                  ></button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-gold hover:bg-gray-50 transition-colors"
                aria-label="Previous floor plan"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-gold hover:bg-gray-50 transition-colors"
                aria-label="Next floor plan"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Location Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Prime Location
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Situated in a prestigious neighborhood with convenient access to premium amenities and natural surroundings.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Map */}
            <motion.div
              className="w-full h-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-[300px] sm:h-[350px] md:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.3095377073456!2d73.82338591538367!3d15.556499889182439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfea14cad1f1d5%3A0x3d7f71bc0f247599!2sBetim-Verem-Saligao%20Rd%2C%20Marra%2C%20Pilern%2C%20Goa%20403114!5e0!3m2!1sen!2sin!4v1710431567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-xl"
                ></iframe>
              </div>
              <div className="py-3 px-4 bg-white">
                <a 
                  href="https://maps.app.goo.gl/mucKphyySU1Q7yyG9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center"
                >
                  <span>View larger map</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Neighborhood Highlights */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 md:p-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-8">Neighborhood Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Airport Access</h4>
                    <p className="text-gray-600">30 minutes to International Airport</p>
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
                    <p className="text-gray-600">10 minutes to Calangute Beach</p>
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
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
} 