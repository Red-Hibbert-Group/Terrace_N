'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="hover:scale-105 transition-transform duration-200">
              <Link href="/" className="text-2xl font-bold gradient-text">
                Terraces
              </Link>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:gap-8">
            <div className="hover:-translate-y-0.5 transition-transform duration-200">
              <Link 
                href="/villa4"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gold transition-colors"
              >
                Villa4
              </Link>
            </div>
            <div className="hover:-translate-y-0.5 transition-transform duration-200">
              <Link
                href="/penthouse"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gold transition-colors"
              >
                Penthouse
              </Link>
            </div>
            <div className="hover:scale-105 transition-transform duration-200 ml-2">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gold hover:bg-gold-light transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gold focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-200 py-2">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/villa4"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gold rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Villa4
              </Link>
              <Link
                href="/penthouse"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gold rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Penthouse
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 hover:text-gold rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 