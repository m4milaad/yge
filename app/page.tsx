'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsTicker from '@/components/NewsTicker';
import { useCart } from '@/context/CartContext';
import { featuredServices, featuredProducts, getColorClasses } from '@/data';

export default function Home() {
  const [activeTab, setActiveTab] = useState('business');
  const { addToCart } = useCart();

  const handleAddToCart = (product: { id: number; name: string; price: number; image: string }) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <>
      <NewsTicker />

      <section className="relative bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">ISO 9001:2015</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400">MSME Registered</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400">MII Certified</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                <span className="text-gray-900 dark:text-white">Yuva Global</span>
                <span className="block bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Enterprises
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                You Demand, We Deliver!
              </p>
              
              <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Your trusted partner for quality stationery and efficient business solutions. From everyday essentials to comprehensive corporate services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/business-solutions" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Explore Business Services
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/shop/all" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Shop Retail
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-black text-slate-700 dark:text-slate-400">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Happy Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-black text-purple-600 dark:text-purple-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Products</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-black text-green-600 dark:text-green-400">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Support</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="relative z-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transform -rotate-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-6 flex items-center justify-center hover:scale-110 transition-transform">
                        <svg className="w-16 h-16 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 rounded-xl p-6 flex items-center justify-center hover:scale-110 transition-transform">
                        <svg className="w-16 h-16 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6 flex items-center justify-center hover:scale-110 transition-transform">
                        <svg className="w-16 h-16 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-6 flex items-center justify-center hover:scale-110 transition-transform">
                        <svg className="w-16 h-16 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 font-black text-sm px-6 py-3 rounded-full shadow-xl transform rotate-12 z-20">
                  ⭐ Top Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who-we-serve" className="py-12 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">
              How Can We Help You Today?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We cater to diverse needs, offering specialized solutions for both individual customers and corporate clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Business & Facility Card - NOW FIRST */}
            <div className="group modern-card bg-linear-to-br from-stone-50 via-white to-stone-50 dark:from-gray-800 dark:via-gray-800 dark:to-stone-900/20 p-6 md:p-8 flex flex-col items-center text-center border-2 border-stone-200 dark:border-stone-700 shadow-xl hover:shadow-2xl relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-stone-300/15 to-slate-300/15 rounded-bl-full"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-stone-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-35 transition-opacity"></div>
                <div className="relative p-6 bg-linear-to-br from-stone-600 to-stone-700 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-14 w-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-black mb-3 text-gray-900 dark:text-white">
                For Your Business & Facility Needs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base">
                Streamline your operations with our bulk supply solutions, general order provisions, and comprehensive facility management services.
              </p>

              {/* Features List */}
              <div className="mb-8 space-y-2 text-left w-full max-w-sm">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-stone-700 dark:text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Facility Management</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-stone-700 dark:text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Bulk Supply Solutions</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-stone-700 dark:text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Corporate Services</span>
                </div>
              </div>

              {/* Button */}
              <Link href="/business-solutions" className="relative z-10 mt-auto btn-primary group/btn bg-linear-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Explore Business Solutions
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Personal & Creative Card - NOW SECOND */}
            <div className="group modern-card bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-gray-800 dark:via-gray-800 dark:to-slate-900/20 p-6 md:p-8 flex flex-col items-center text-center border-2 border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-slate-300/15 to-stone-300/15 rounded-bl-full"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-slate-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-35 transition-opacity"></div>
                <div className="relative p-6 bg-linear-to-br from-slate-600 to-slate-700 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-14 w-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white">
                For Your Personal & Creative Needs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                Discover a wide array of quality stationery, school supplies, art materials, and everyday office items for your individual requirements.
              </p>

              {/* Features List */}
              <div className="mb-8 space-y-2 text-left w-full max-w-sm">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-slate-700 dark:text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Premium Stationery</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-slate-700 dark:text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Art & Craft Supplies</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-slate-700 dark:text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">School Essentials</span>
                </div>
              </div>

              {/* Button */}
              <Link href="/shop/all" className="relative z-10 mt-auto btn-primary group/btn cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Our Retail Collection
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="py-12 md:py-16 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Discover Our Offerings
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our curated selection of products and services designed to meet your needs
            </p>
          </div>

          {/* Modern Tab Selector */}
          <div className="flex justify-center mb-12 px-4">
            <div className="inline-flex flex-col sm:flex-row bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 w-full sm:w-auto max-w-md sm:max-w-none">
              <button
                onClick={() => setActiveTab('business')}
                className={`relative px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  activeTab === 'business'
                    ? 'bg-white dark:bg-gray-700 text-stone-700 dark:text-stone-400 shadow-lg sm:scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="hidden sm:inline">Business Services</span>
                  <span className="sm:hidden">B2B Services</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab('retail')}
                className={`relative px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  activeTab === 'retail'
                    ? 'bg-white dark:bg-gray-700 text-slate-700 dark:text-slate-400 shadow-lg sm:scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="hidden sm:inline">Featured Retail</span>
                  <span className="sm:hidden">Retail Products</span>
                </span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in">
            {activeTab === 'retail' && (
              <div className="tab-content">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts.map((product) => (
                    <div key={product.id} className="group modern-card bg-white dark:bg-gray-800 flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <div className="relative overflow-hidden">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          width={400} 
                          height={300} 
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        {product.badge && (
                          <div className="absolute top-3 right-3">
                            <span className={`inline-block px-3 py-1 text-white text-xs font-bold rounded-full shadow-lg ${
                              product.badge === 'Popular' ? 'bg-blue-600' :
                              product.badge === 'New' ? 'bg-purple-600' :
                              product.badge === 'Trending' ? 'bg-orange-600' :
                              product.badge === 'Best Seller' ? 'bg-green-600' : 'bg-gray-600'
                            }`}>
                              {product.badge}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col grow">
                        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 grow leading-relaxed">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-black text-blue-600 dark:text-blue-400">₹{product.price}</span>
                          {product.rating && (
                            <div className="flex items-center gap-1 text-yellow-500">
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{product.rating}</span>
                            </div>
                          )}
                        </div>
                        <button 
                          onClick={() => handleAddToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                          className="w-full btn-primary"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'business' && (
              <div className="tab-content">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredServices.map((service) => {
                    const colors = getColorClasses(service.color);
                    return (
                      <Link key={service.id} href={service.link} className={`group modern-card bg-linear-to-br from-${service.color}-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 border-2 ${colors.border} ${colors.hover} flex flex-col relative overflow-hidden`}>
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-${service.color}-400/10 rounded-bl-full`}></div>
                        
                        <div className="relative mb-6">
                          <div className={`absolute inset-0 bg-${service.color}-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`}></div>
                          <div className={`relative p-4 bg-linear-to-br from-${service.color}-500 to-${service.color}-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-5xl flex items-center justify-center`}>
                            {service.icon}
                          </div>
                        </div>

                        <h4 className={`text-2xl font-black mb-3 text-gray-900 dark:text-white ${colors.text} transition-colors`}>
                          {service.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed grow">
                          {service.description}
                        </p>
                        
                        <div className={`flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-3 transition-all`}>
                          <span>Learn More</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-12 md:py-16 bg-linear-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">ISO 9001:2015</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-green-600 dark:text-green-400">MSME Registered</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400">MII Certified</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              About Yuva Global Enterprises
            </h2>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold italic">
              &quot;We believe in trust, transparency, and teamwork.&quot;
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative modern-card overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                <Image 
                  src="/images/ourCompanyVales.png" 
                  alt="Yuva Global Enterprises Team and Values" 
                  width={600} 
                  height={450} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 dark:text-white">1000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content Side */}
            <div className="space-y-8">
              {/* Main Description */}
              <div className="modern-card bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  Yuva Global Enterprises, an <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold rounded-lg">ISO 9001:2015 Certified</span> company, is a leading provider of comprehensive facility management and support services.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Our expertise spans a wide range of industries, ensuring that our clients receive tailored solutions to meet their unique needs. We are dedicated to offering top-tier services that help businesses operate smoothly and efficiently.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-3 gap-4">
                <div className="modern-card bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 text-center border border-blue-200 dark:border-blue-800">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1">Trust</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Reliable & Honest</p>
                </div>

                <div className="modern-card bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 text-center border border-purple-200 dark:border-purple-800">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1">Transparency</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Open & Clear</p>
                </div>

                <div className="modern-card bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 text-center border border-green-200 dark:border-green-800">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1">Teamwork</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Together Strong</p>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/#contact" className="btn-primary w-full sm:w-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-10 md:py-14 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognized and certified by leading authorities for quality and excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* ISO Certification */}
            <div className="group modern-card bg-linear-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 text-center border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/10 rounded-bl-full"></div>
              
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 h-48 flex items-center justify-center">
                  <Image 
                    src="/images/iso.png" 
                    alt="ISO 9001:2015 Certification" 
                    width={200} 
                    height={200} 
                    className="w-auto h-full max-h-40 object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Quality Management System Certified
              </p>
              
              <div className="mt-4 inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </div>
            </div>

            {/* MSME Certification */}
            <div className="group modern-card bg-linear-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 text-center border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-bl-full"></div>
              
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 h-48 flex items-center justify-center">
                  <Image 
                    src="/images/msme.png" 
                    alt="MSME Registered" 
                    width={200} 
                    height={200} 
                    className="w-auto h-full max-h-40 object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                MSME Registered
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Micro, Small & Medium Enterprises
              </p>
              
              <div className="mt-4 inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </div>
            </div>

            {/* MII Certification */}
            <div className="group modern-card bg-linear-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 text-center border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/10 rounded-bl-full"></div>
              
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 h-48 flex items-center justify-center">
                  <Image 
                    src="/images/mii.png" 
                    alt="MII Certification" 
                    width={200} 
                    height={200} 
                    className="w-auto h-full max-h-40 object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                MII Certified
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Ministry of Industry Initiative
              </p>
              
              <div className="mt-4 inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200 dark:border-blue-800">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                Trusted & Certified by Leading Authorities
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
