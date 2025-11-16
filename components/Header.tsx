'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import CartPanel from './CartPanel';
import SearchModal from './SearchModal';
import { companyInfo, navigationLinks } from '@/data/company';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [retailDropdownOpen, setRetailDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50' 
        : 'bg-white dark:bg-gray-900 shadow-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="shrink-0">
            <Link href="/" className="group flex items-center space-x-3 transition-all duration-300">
              <div className="relative">
                <Image 
                  src="/images/ygeLogo.png" 
                  alt="YGE Logo" 
                  width={64} 
                  height={64} 
                  className="h-16 w-16 group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-black tracking-tight bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  Yuva Global
                </span>
                <span className="block text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-400">
                  ENTERPRISES
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1 items-center">
            <Link href="/" className="group relative px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300">
              Home
            </Link>
            
            <div className="dropdown relative">
              <button className="group relative px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none flex items-center gap-1">
                For Your Business
                <svg className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="dropdown-menu py-2 w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <Link href="/services/facility-management" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Facility Management Services
                </Link>
                <Link href="/services/mechanized-cleaning" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Mechanized Cleaning & Housekeeping
                </Link>
                <Link href="/services/security-services" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Security Services
                </Link>
                <Link href="/services/manpower-outsourcing" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Skilled/Unskilled Manpower
                </Link>
                <Link href="/services/event-management" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Event Management
                </Link>
                <Link href="/services/hospitality-services" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Hospitality Services
                </Link>
                <Link href="/services/infrastructural-facility" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Infrastructural Facility Management
                </Link>
                <Link href="/services/canteen-catering" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Canteen & Catering Services
                </Link>
                <Link href="/services/pest-control" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Beat Patrol & Pest Control
                </Link>
                <Link href="/services/admin-services" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Administrative Services
                </Link>
                <Link href="/services/general-order-supplies" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  General Order Supplies
                </Link>
                <Link href="/services/corporate-gifting" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Corporate Gifting
                </Link>
              </div>
            </div>

            <div className="dropdown relative">
              <button className="group relative px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none flex items-center gap-1">
                Shop Online
                <svg className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="dropdown-menu py-2 w-60 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <Link href="/shop/stationery" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Stationery
                </Link>
                <Link href="/shop/office-essentials" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Office Essentials
                </Link>
                <Link href="/shop/school-supplies" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  School Supplies
                </Link>
                <Link href="/shop/all" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Browse All Products
                </Link>
              </div>
            </div>

            <Link href="/#about" className="group relative px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300">
              About Us
            </Link>
            <Link href="/#contact" className="group relative px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="group relative p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              title="Search">
              <svg className="h-5 w-5 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <Link 
              href="/login" 
              title="Login/My Account"
              className="group relative p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
              <svg className="h-5 w-5 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            <button
              onClick={() => setCartOpen(true)}
              className="group relative p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              title="Shopping Cart">
              <svg className="h-6 w-6 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-40 animate-fade-in">
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-linear-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl overflow-y-auto animate-slide-in">
            {/* Header */}
            <div className="sticky top-0 bg-linear-to-r from-blue-600 to-purple-600 p-6 shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black text-white">Menu</h2>
                  <p className="text-sm text-blue-100">Explore our offerings</p>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all duration-300"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 grid grid-cols-3 gap-3">
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex flex-col items-center gap-2 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl hover:scale-105 transition-transform"
              >
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Search</span>
              </button>
              <button
                onClick={() => {
                  setCartOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="relative flex flex-col items-center gap-2 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl hover:scale-105 transition-transform"
              >
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Cart</span>
              </button>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col items-center gap-2 p-3 bg-green-100 dark:bg-green-900/30 rounded-xl hover:scale-105 transition-transform"
              >
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">Account</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-all group"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-semibold text-gray-900 dark:text-white">Home</span>
              </Link>

              {/* Shop Online Dropdown */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all group"
                  onClick={() => setRetailDropdownOpen(!retailDropdownOpen)}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="font-semibold text-gray-900 dark:text-white">Shop Online</span>
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${retailDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {retailDropdownOpen && (
                  <div className="bg-gray-50 dark:bg-gray-900 p-2 space-y-1">
                    <Link href="/shop/stationery" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">📝 Stationery</span>
                    </Link>
                    <Link href="/shop/office-essentials" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">💼 Office Essentials</span>
                    </Link>
                    <Link href="/shop/school-supplies" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🎒 School Supplies</span>
                    </Link>
                    <Link href="/shop/all" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🛍️ Browse All</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Business Services Dropdown */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all group"
                  onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold text-gray-900 dark:text-white">Business Services</span>
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${businessDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {businessDropdownOpen && (
                  <div className="bg-gray-50 dark:bg-gray-900 p-2 space-y-1 max-h-64 overflow-y-auto">
                    <Link href="/services/facility-management" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🏢 Facility Management</span>
                    </Link>
                    <Link href="/services/mechanized-cleaning" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">✨ Cleaning Services</span>
                    </Link>
                    <Link href="/services/security-services" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🔒 Security Services</span>
                    </Link>
                    <Link href="/services/event-management" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🎉 Event Management</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/#about" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-all group"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-gray-900 dark:text-white">About Us</span>
              </Link>

              <Link 
                href="/#contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-all group"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-gray-900 dark:text-white">Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      <CartPanel isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
