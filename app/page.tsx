'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsTicker from '@/components/NewsTicker';
import { useCart } from '@/context/CartContext';
import { featuredServices, featuredProducts } from '@/data';

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

      {/* HERO SECTION */}
      <section className="relative bg-white border-b-4 border-black overflow-hidden grid-bg grain-overlay">
        <div className="grid lg:grid-cols-[1fr_400px] divide-x-4 divide-black items-stretch min-h-[80vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-8 md:p-16 relative z-10">
            <div className="flex flex-wrap gap-4 mb-12 reveal-up delay-1">
              <div className="px-4 py-1 bg-neon border-4 border-black text-black font-mono font-bold uppercase text-xs tracking-widest brutal-shadow">
                ISO 9001:2015 Certified
              </div>
              <div className="px-4 py-1 bg-accent border-4 border-black text-white font-mono font-bold uppercase text-xs tracking-widest brutal-shadow">
                MSME Registered
              </div>
              <div className="px-4 py-1 bg-white border-4 border-black text-black font-mono font-bold uppercase text-xs tracking-widest brutal-shadow">
                GST Registered
              </div>
              <div className="px-4 py-1 bg-black border-4 border-black text-neon font-mono font-bold uppercase text-xs tracking-widest brutal-shadow">
                GEM Registered
              </div>
              <div className="px-4 py-1 bg-neon border-4 border-black text-black font-mono font-bold uppercase text-xs tracking-widest brutal-shadow">
                Labour Registered
              </div>
              <div className="px-4 py-1 bg-accent border-4 border-black text-white font-mono font-bold uppercase text-xs tracking-widest brutal-shadow">
                Make in India
              </div>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter uppercase mb-6 reveal-up delay-2">
              <span className="block text-black hover:text-accent transition-colors duration-300">Yuva Global</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px black' }}>Enterprises</span>
            </h1>
            
            <div className="w-full h-4 bg-black mb-6 reveal-strike delay-3"></div>
            
            <p className="font-mono text-lg sm:text-xl font-bold mb-6 text-black max-w-2xl bg-neon inline-block p-2 uppercase reveal-up delay-4">
              [ You Demand, We Deliver! ]
            </p>
            
            <p className="text-lg md:text-xl font-mono text-black leading-relaxed max-w-2xl mb-12 border-l-8 border-black pl-6 reveal-up delay-5">
              Industrial-grade stationery, comprehensive facility management, and high-efficiency business solutions designed for operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 reveal-up delay-6">
              <Link href="/business-solutions" className="brutal-btn text-xl group">
                Explore Business Services
                <svg className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link href="/shop/all" className="brutal-btn text-xl bg-white hover:bg-black text-black hover:text-white !shadow-none hover:shadow-none">
                Start Shopping
              </Link>
            </div>
          </div>
          
          {/* Right Status / News */}
          <div className="hidden lg:flex flex-col bg-black text-white p-8 relative grain-overlay">
            <div className="absolute top-0 right-0 p-4 font-mono font-bold text-accent text-sm flex items-center gap-2 z-10">
              <span className="w-2 h-2 bg-accent inline-block pulse-dot" />
              SYS.OP: ONLINE
            </div>
            
            <h3 className="font-display font-black text-4xl uppercase mb-8 text-neon mt-12 border-b-4 border-white/30 pb-4 relative z-10 reveal-up delay-3">
              Latest Updates
            </h3>
            
            <div className="flex flex-col gap-6 overflow-y-auto pr-4 custom-scrollbar relative z-10">
              <div className="border-2 border-white/30 p-4 hover:border-neon transition-all duration-300 group cursor-pointer bg-white text-black hover:bg-neon hover:text-black reveal-scale delay-4 diagonal-accent">
                <div className="flex justify-between items-center mb-2 border-b-2 border-black pb-2">
                  <span className="font-mono font-bold text-xs uppercase tracking-widest">Directive: Offer</span>
                  <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1">T-2M</span>
                </div>
                <p className="font-display font-bold text-xl leading-tight uppercase">20% Off Protocol active on all stationery.</p>
              </div>

              <div className="border-2 border-white/30 p-4 hover:border-accent transition-all duration-300 group cursor-pointer hover:bg-accent hover:text-white reveal-scale delay-5">
                <div className="flex justify-between items-center mb-2 border-b-2 border-current pb-2">
                  <span className="font-mono font-bold text-xs uppercase tracking-widest">Update: Inventory</span>
                  <span className="font-mono text-xs font-bold bg-white text-black px-2 py-1">T-1H</span>
                </div>
                <p className="font-display font-bold text-xl leading-tight uppercase">Premium supplies docked &amp; available.</p>
              </div>

              <div className="border-2 border-white/30 p-4 hover:border-neon transition-all duration-300 group cursor-pointer hover:bg-white hover:text-black reveal-scale delay-6">
                <div className="flex justify-between items-center mb-2 border-b-2 border-current pb-2">
                  <span className="font-mono font-bold text-xs uppercase tracking-widest">Status: Verify</span>
                  <span className="font-mono text-xs font-bold bg-white text-black px-2 py-1">T-3H</span>
                </div>
                <p className="font-display font-bold text-xl leading-tight uppercase">ISO 9001:2015 Standards Maintained.</p>
              </div>
            </div>
            
            <div className="mt-auto pt-8 border-t-4 border-white/20 font-mono text-sm font-bold flex justify-between relative z-10">
              <span className="tracking-widest">DATA FLOW</span>
              <span className="text-neon flex items-center gap-2"><span className="w-2 h-2 bg-neon inline-block pulse-dot" /> RECORDING</span>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONS DIRECTORY */}
      <section className="bg-white border-b-4 border-black">
        
        <div className="grid md:grid-cols-2 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
          {/* B2B Card */}
          <div className="p-8 md:p-16 hover:bg-gray-50 transition-colors duration-300 flex flex-col justify-between relative">
            <div>
              <div className="w-20 h-20 bg-black text-neon flex items-center justify-center mb-8 brutal-shadow">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 leading-none">
                For Your Business &amp; Facility Needs
              </h2>
              <p className="font-mono text-lg mb-8 leading-relaxed max-w-md border-l-4 border-black pl-4">
                Streamline your operations with our bulk supply solutions, general order provisions, and comprehensive facility management services.
              </p>
              <ul className="space-y-4 font-mono font-bold text-sm uppercase mb-12">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-neon border-2 border-black"></div>
                  Facility Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-neon border-2 border-black"></div>
                  Bulk Supply Solutions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-neon border-2 border-black"></div>
                  Corporate Services
                </li>
              </ul>
            </div>
            <Link href="/business-solutions" className="brutal-btn self-start bg-black text-white hover:bg-neon hover:text-black">
              Explore Business Solutions
            </Link>
          </div>

          {/* Retail Card */}
          <div className="p-8 md:p-16 bg-black text-white flex flex-col justify-between relative grain-overlay">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-neon text-black flex items-center justify-center mb-8 brutal-shadow">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 leading-none text-neon">
                For Your Personal &amp; Creative Needs
              </h2>
              <p className="font-mono text-lg mb-8 leading-relaxed max-w-md border-l-4 border-accent pl-4">
                Discover a wide array of quality stationery, school supplies, art materials, and everyday office items for your individual requirements.
              </p>
              <ul className="space-y-4 font-mono font-bold text-sm uppercase mb-12">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent border-2 border-white"></div>
                  Premium Stationery
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent border-2 border-white"></div>
                  Art &amp; Craft Supplies
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent border-2 border-white"></div>
                  School Essentials
                </li>
              </ul>
            </div>
            <Link href="/shop/all" className="brutal-btn self-start border-white bg-white text-black hover:bg-accent hover:text-white hover:border-accent !shadow-[6px_6px_0px_0px_#fff] hover:!shadow-[8px_8px_0px_0px_#fff] relative z-10">
              Start Shopping
            </Link>
          </div>
        </div>
      </section>

      {/* DYNAMIC INVENTORY VIEWER */}
      <section className="bg-gray-100 border-b-4 border-black pb-16">
        <div className="border-b-4 border-black bg-white flex flex-col sm:flex-row justify-between items-stretch">
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase p-6 md:p-8 flex items-center bg-neon border-b-4 sm:border-b-0 sm:border-r-4 border-black">
            Discover Our Offerings
          </h2>
          <div className="flex divide-x-4 divide-black">
            <button
              onClick={() => setActiveTab('business')}
              className={`px-8 py-6 font-display font-bold text-2xl uppercase transition-colors outline-none relative ${
                activeTab === 'business' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              B2B Services
              {activeTab === 'business' && <span className="absolute bottom-0 left-0 w-full h-1 bg-neon" />}
            </button>
            <button
              onClick={() => setActiveTab('retail')}
              className={`px-8 py-6 font-display font-bold text-2xl uppercase transition-colors outline-none relative ${
                activeTab === 'retail' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              Featured Retail
              {activeTab === 'retail' && <span className="absolute bottom-0 left-0 w-full h-1 bg-accent" />}
            </button>
          </div>
        </div>

        <div className="p-8 md:p-16">
          {activeTab === 'retail' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, idx) => (
                <div key={product.id} className={`bg-white border-4 border-black flex flex-col group hover-lift relative reveal-up delay-${Math.min(idx + 1, 8)}`}>
                  {product.badge && (
                    <div className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-white font-mono font-bold uppercase text-xs border-2 border-black z-10 shadow-[4px_4px_0_0_#000] rotate-3">
                      {product.badge}
                    </div>
                  )}
                  <div className="border-b-4 border-black overflow-hidden bg-gray-100 relative aspect-square p-4">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-contain p-4 mix-blend-multiply group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h4 className="font-display font-black text-2xl uppercase mb-2 leading-none">
                      {product.name}
                    </h4>
                    <p className="font-mono text-sm mb-6 grow line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-end justify-between mb-6">
                      <span className="font-display font-black text-4xl leading-none">₹{product.price}</span>
                      {product.rating && (
                        <div className="font-mono font-bold text-xs bg-black text-neon px-2 py-1">
                          RTG: {product.rating}
                        </div>
                      )}
                    </div>
                    <button 
                      onClick={() => handleAddToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                      className="brutal-btn w-full text-base py-3 bg-neon"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'business' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, idx) => (
                <Link key={service.id} href={service.link} className={`bg-white border-4 border-black p-8 flex flex-col relative group hover:bg-black hover:text-white transition-colors duration-300 hover-lift reveal-up delay-${Math.min(idx + 1, 8)}`}>
                  <div className="w-16 h-16 border-4 border-black bg-neon text-black flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-white group-hover:text-white transition-colors brutal-shadow">
                    <div className="scale-150">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="font-display font-black text-3xl uppercase mb-4 leading-none group-hover:text-neon transition-colors">
                    {service.title}
                  </h4>
                  <p className="font-mono text-sm leading-relaxed grow mb-8 opacity-80 border-l-2 border-black pl-4 group-hover:border-white">
                    {service.description}
                  </p>
                  <div className="font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-accent">
                    Learn More <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ABOUT & TRUST SECTION */}
      <section id="about" className="grid lg:grid-cols-2 border-b-4 border-black divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-black bg-white">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-8 leading-[0.9]">
            About <span className="text-accent">Yuva Global Enterprises</span>
          </h2>
          <div className="bg-gray-100 border-4 border-black p-8 mb-8 brutal-shadow diagonal-accent">
            <p className="font-mono text-lg mb-4 font-bold italic">
              &ldquo;We believe in trust, transparency, and teamwork.&rdquo;
            </p>
            <p className="font-mono text-sm leading-relaxed mb-4">
              Yuva Global Enterprises, an ISO 9001:2015 Certified company, is a leading provider of comprehensive facility management and support services.
            </p>
            <p className="font-mono text-sm leading-relaxed">
              Our expertise spans a wide range of industries, ensuring that our clients receive tailored solutions to meet their unique needs. We are dedicated to offering top-tier services that help businesses operate smoothly and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-4 border-black p-4 text-center hover:bg-neon transition-colors group">
              <div className="font-display font-black text-5xl mb-2 text-neon group-hover:text-black transition-colors" style={{ WebkitTextStroke: '2px black' }}>1000+</div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="border-4 border-black p-4 text-center hover:bg-accent hover:text-white transition-colors group">
              <div className="font-display font-black text-5xl mb-2 text-accent group-hover:text-white transition-colors" style={{ WebkitTextStroke: '2px black', WebkitTextStrokeColor: 'currentColor' }}>15+</div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 md:p-16 flex flex-col justify-center relative overflow-hidden grain-overlay">
          <h3 className="font-display font-black text-4xl uppercase mb-12 border-b-4 border-white/30 pb-4 relative z-10">
            Core Operating Principles
          </h3>
          
          <div className="space-y-8 relative z-10">
            <div className="flex gap-6 items-start group cursor-default">
              <div className="font-display font-black text-6xl text-transparent group-hover:text-neon transition-colors duration-300" style={{ WebkitTextStroke: '2px white' }}>
                01
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl uppercase mb-2 tracking-wide text-neon">Trust Metrics</h4>
                <p className="font-mono text-sm text-gray-400 leading-relaxed">Engineering relationships through verifiable reliability and consistent output delivery.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group cursor-default">
              <div className="font-display font-black text-6xl text-transparent group-hover:text-accent transition-colors duration-300" style={{ WebkitTextStroke: '2px white' }}>
                02
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl uppercase mb-2 tracking-wide text-accent">Transparent Comms</h4>
                <p className="font-mono text-sm text-gray-400 leading-relaxed">Unfiltered clarity in all transactions, proposals, and logistical operations.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group cursor-default">
              <div className="font-display font-black text-6xl text-transparent group-hover:text-white transition-colors duration-300" style={{ WebkitTextStroke: '2px white' }}>
                03
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl uppercase mb-2 tracking-wide">Sync / Teamwork</h4>
                <p className="font-mono text-sm text-gray-400 leading-relaxed">Synchronized execution protocols guaranteeing exceptional facility management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
