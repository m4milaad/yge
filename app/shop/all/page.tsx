'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function AllProductsPage() {
  const [filter, setFilter] = useState('all');
  const { addToCart } = useCart();
  const allProducts = products;

  const filteredProducts = filter === 'all' ? allProducts : allProducts.filter(p => p.category === filter);

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <main className="grow bg-gray-100 flex flex-col">
      {/* HEADER BAR */}
      <section className="bg-black text-white border-b-4 border-black py-12 px-8 md:px-16 relative grain-overlay">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-accent text-white font-mono font-bold text-xs uppercase tracking-widest border-2 border-white mb-6">
              RETAIL MODULE ACTIVE
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase mb-4 leading-none text-neon">
              Supply <br/>Directory
            </h1>
            <p className="font-mono text-lg border-l-4 border-white pl-4 text-gray-300">
              Access premium stationery, office loadouts, and scholastic hardware.
            </p>
          </div>
          <div className="font-mono font-bold text-5xl tracking-tighter opacity-20">
            {filteredProducts.length.toString().padStart(3, '0')}
          </div>
        </div>
      </section>

      {/* FILTER PANEL */}
      <section className="bg-white border-b-4 border-black sticky top-20 z-40">
        <div className="flex flex-col sm:flex-row divide-y-4 sm:divide-y-0 sm:divide-x-4 divide-black border-black">
          <div className="p-4 bg-neon font-display font-black text-xl uppercase flex items-center justify-center sm:w-48 shrink-0">
            FILTERS
          </div>
          <div className="flex flex-wrap grow overflow-x-auto custom-scrollbar bg-gray-50">
            {[
              { value: 'all', label: 'All Items' },
              { value: 'stationery', label: 'Stationery' },
              { value: 'office', label: 'Office Core' },
              { value: 'school', label: 'Scholastic' }
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`flex-1 min-w-[140px] p-4 font-mono font-bold text-sm uppercase transition-colors outline-none border-r-4 border-transparent focus:border-black ${
                  filter === item.value
                    ? 'bg-black text-white brutal-border-b'
                    : 'text-black hover:bg-gray-200 border-b-4 border-transparent'
                }`}
              >
                [{item.label}]
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="p-8 md:p-16 grid-bg grow border-b-4 border-black">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className={`bg-white border-4 border-black flex flex-col group hover-lift relative reveal-up delay-${Math.min((idx % 8) + 1, 8)}`}>
              <div className="border-b-4 border-black overflow-hidden bg-gray-100 relative aspect-square p-4">
                <div className="absolute top-0 left-0 bg-black text-neon font-mono font-bold text-[10px] px-2 py-1 uppercase border-r-4 border-b-4 border-black z-10">
                  {product.category}
                </div>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-contain p-8 mix-blend-multiply group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" 
                />
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="font-display font-black text-2xl uppercase mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="font-mono text-xs text-gray-600 mb-6 grow line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-end justify-between mb-6 border-t-2 border-black pt-4">
                  <span className="font-display font-black text-4xl leading-none">₹{product.price}</span>
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-neon">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="brutal-btn w-full text-sm py-3 bg-white text-black hover:bg-black hover:text-white !shadow-none hover:shadow-none border-4 border-black"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center font-mono font-bold text-xl uppercase bg-white border-4 border-black p-8 brutal-shadow diagonal-accent">
            <span className="text-accent mb-4 block text-4xl">!</span>
            No inventory found for parameter: {filter}
          </div>
        )}
      </section>
    </main>
  );
}
