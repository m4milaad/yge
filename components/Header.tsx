'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import CartPanel from './CartPanel';
import SearchModal from './SearchModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [retailDropdownOpen, setRetailDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_8px_0_0_#000]' : ''}`}>
      <div className="flex h-20 items-stretch divide-x-4 divide-black border-b-4 border-black">
        {/* LOGO */}
        <div className="flex items-center px-4 shrink-0 bg-neon hover:bg-accent transition-colors duration-200">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative border-2 border-black bg-white p-0.5">
              <Image 
                src="/images/ygeLogo.png" 
                alt="YGE Logo" 
                width={36} 
                height={36} 
                className="w-9 h-9 object-contain" 
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-display text-xl font-black uppercase leading-none tracking-tighter text-black group-hover:text-white transition-colors">
                Yuva Global
              </span>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black/70 group-hover:text-white/80 transition-colors">
                Enterprises
              </span>
            </div>
          </Link>
        </div>

        {/* NAVIGATION - DESKTOP */}
        <nav className="hidden lg:flex items-stretch justify-center divide-x-4 divide-black flex-grow">
          <Link href="/" className="flex items-center justify-center px-4 xl:px-6 font-display font-bold uppercase text-base hover:bg-neon hover:text-black transition-colors flex-1 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-1 bg-neon scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          
          {/* Business Dropdown */}
          <div className="relative flex items-stretch dropdown group flex-1">
            <button className="flex items-center justify-center w-full px-4 xl:px-6 font-display font-bold uppercase text-base hover:bg-black hover:text-white transition-colors cursor-pointer outline-none relative">
              For Your Business
              <svg className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="3" strokeLinecap="square" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div className="dropdown-menu absolute top-full left-0 w-80 bg-white brutal-border ml-[-4px]" style={{boxShadow: '8px 8px 0px 0px #000'}}>
              <div className="p-4 font-mono text-xs font-bold bg-black text-neon uppercase tracking-widest border-b-4 border-black flex items-center gap-2">
                <span className="w-2 h-2 bg-neon inline-block pulse-dot" />
                Facility Services Directory
              </div>
              <div className="flex flex-col divide-y-2 divide-black">
                <Link href="/services/facility-management" className="px-4 py-3 font-mono text-sm font-bold hover:bg-neon hover:pl-6 transition-all uppercase">
                  Facility Management
                </Link>
                <Link href="/services/mechanized-cleaning" className="px-4 py-3 font-mono text-sm font-bold hover:bg-neon hover:pl-6 transition-all uppercase">
                  Mechanized Cleaning
                </Link>
                <Link href="/services/security-services" className="px-4 py-3 font-mono text-sm font-bold hover:bg-neon hover:pl-6 transition-all uppercase">
                  Security Services
                </Link>
                <Link href="/services/event-management" className="px-4 py-3 font-mono text-sm font-bold hover:bg-neon hover:pl-6 transition-all uppercase">
                  Event Management
                </Link>
                <Link href="/services/general-order-supplies" className="px-4 py-3 font-mono text-sm font-bold hover:bg-neon hover:pl-6 transition-all uppercase text-accent">
                  General Order Supplies &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Shop Dropdown */}
          <div className="relative flex items-stretch dropdown group flex-1">
            <button className="flex items-center justify-center w-full px-4 xl:px-6 font-display font-bold uppercase text-base hover:bg-accent hover:text-white transition-colors cursor-pointer outline-none">
              Shop Online
              <svg className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="3" strokeLinecap="square" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div className="dropdown-menu absolute top-full left-0 w-64 bg-white brutal-border ml-[-4px]" style={{boxShadow: '8px 8px 0px 0px #000'}}>
              <div className="flex flex-col divide-y-2 divide-black">
                <Link href="/shop/stationery" className="px-4 py-3 font-mono text-sm font-bold hover:bg-accent hover:text-white transition-all uppercase">
                  Stationery
                </Link>
                <Link href="/shop/office-essentials" className="px-4 py-3 font-mono text-sm font-bold hover:bg-accent hover:text-white transition-all uppercase">
                  Office Essentials
                </Link>
                <Link href="/shop/school-supplies" className="px-4 py-3 font-mono text-sm font-bold hover:bg-accent hover:text-white transition-all uppercase">
                  School Supplies
                </Link>
                <Link href="/shop/all" className="px-4 py-3 font-mono text-sm font-bold bg-black text-white hover:bg-neon hover:text-black transition-all uppercase">
                  Browse All Products [+]
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#about" className="flex items-center justify-center px-4 xl:px-6 font-display font-bold uppercase text-base hover:bg-neon transition-colors flex-1">
            About Us
          </Link>
          <Link href="/contact" className="flex items-center justify-center px-4 xl:px-6 font-display font-bold uppercase text-base hover:bg-black hover:text-white transition-colors flex-1">
            Contact Us
          </Link>
        </nav>

        {/* UTILITIES */}
        <div className="flex items-stretch shrink-0 divide-x-4 divide-black ml-auto">
          <button onClick={() => setSearchOpen(true)} className="flex items-center justify-center w-12 hover:bg-neon transition-colors group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <Link href="/login" className="hidden lg:flex items-center justify-center px-4 font-mono font-bold text-xs hover:bg-black hover:text-white transition-colors uppercase tracking-wider">
            Auth
          </Link>
          
          <button onClick={() => setCartOpen(true)} className="relative flex items-center justify-center w-14 hover:bg-accent hover:text-white transition-colors bg-white group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-3 right-2 bg-accent text-white text-[10px] font-mono font-bold h-5 w-5 flex items-center justify-center border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden flex items-center justify-center w-14 hover:bg-black hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[84px] bg-white z-40 brutal-border-t overflow-y-auto pb-24">
          <div className="flex flex-col divide-y-4 divide-black">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-6 py-6 font-display font-black text-3xl uppercase hover:bg-neon hover:pl-10 transition-all reveal-up delay-1">
              Home
            </Link>
            
            <div className="flex flex-col">
              <button 
                onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                className="flex items-center justify-between px-6 py-6 font-display font-black text-3xl uppercase hover:bg-black hover:text-white transition-colors reveal-up delay-2"
              >
                <span>For Your Business</span>
                <span className={`font-mono text-xl transition-transform duration-200 ${businessDropdownOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
              {businessDropdownOpen && (
                <div className="flex flex-col divide-y-2 divide-black bg-gray-100 border-t-4 border-black">
                  <Link href="/services/facility-management" onClick={() => setMobileMenuOpen(false)} className="px-8 py-4 font-mono font-bold text-lg uppercase hover:bg-neon">Facility Mgmt</Link>
                  <Link href="/services/mechanized-cleaning" onClick={() => setMobileMenuOpen(false)} className="px-8 py-4 font-mono font-bold text-lg uppercase hover:bg-neon">Cleaning</Link>
                  <Link href="/services/security-services" onClick={() => setMobileMenuOpen(false)} className="px-8 py-4 font-mono font-bold text-lg uppercase hover:bg-neon">Security</Link>
                  <Link href="/services/event-management" onClick={() => setMobileMenuOpen(false)} className="px-8 py-4 font-mono font-bold text-lg uppercase hover:bg-neon">Events</Link>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <button 
                onClick={() => setRetailDropdownOpen(!retailDropdownOpen)}
                className="flex items-center justify-between px-6 py-6 font-display font-black text-3xl uppercase hover:bg-accent hover:text-white transition-colors reveal-up delay-3"
              >
                <span>Shop Online</span>
                <span className={`font-mono text-xl transition-transform duration-200 ${retailDropdownOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
              {retailDropdownOpen && (
                <div className="flex flex-col divide-y-2 divide-black bg-gray-100 border-t-4 border-black">
                  <Link href="/shop/all" onClick={() => setMobileMenuOpen(false)} className="px-8 py-4 font-mono font-bold text-lg uppercase bg-black text-white hover:bg-neon hover:text-black">Catalog [ALL]</Link>
                  <Link href="/shop/stationery" onClick={() => setMobileMenuOpen(false)} className="px-8 py-4 font-mono font-bold text-lg uppercase hover:bg-accent hover:text-white">Stationery</Link>
                  <Link href="/shop/office-essentials" onClick={() => setMobileMenuOpen(false)} className="px-8 py-4 font-mono font-bold text-lg uppercase hover:bg-accent hover:text-white">Office Essentials</Link>
                </div>
              )}
            </div>

            <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="px-6 py-6 font-display font-black text-3xl uppercase hover:bg-neon hover:pl-10 transition-all reveal-up delay-4">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-6 font-display font-black text-3xl uppercase hover:bg-black hover:text-white hover:pl-10 transition-all reveal-up delay-5">
              Contact Us
            </Link>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="px-6 py-6 font-display font-black text-3xl uppercase bg-neon text-black hover:bg-accent hover:text-white hover:pl-10 transition-all reveal-up delay-6">
              Login
            </Link>
          </div>
        </div>
      )}

      <CartPanel isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
