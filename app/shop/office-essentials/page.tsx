'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { getProductsByCategory } from '@/data/products';

export default function OfficeEssentialsPage() {
  const { addToCart } = useCart();
  const products = getProductsByCategory('office');

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <main className="grow bg-gray-100 flex flex-col">
      <section className="bg-black text-white border-b-4 border-black py-12 px-8 md:px-16 relative grain-overlay">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-accent text-white font-mono font-bold text-xs uppercase tracking-widest border-2 border-white mb-6">
              CATEGORY: OFFICE CORE
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase mb-4 leading-none text-neon">
              Office <br/>Essentials
            </h1>
            <p className="font-mono text-lg border-l-4 border-white pl-4 text-gray-300">
              Professional office supplies engineered to keep your workplace organized and efficient.
            </p>
          </div>
          <div className="font-mono font-bold text-5xl tracking-tighter opacity-20">
            {products.length.toString().padStart(3, '0')}
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 grid-bg grow border-b-4 border-black">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => (
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

        <div className="mt-16 border-t-4 border-black pt-8">
          <Link href="/shop/all" className="brutal-btn bg-black text-white hover:bg-neon hover:text-black">
            &larr; ACCESS FULL DIRECTORY
          </Link>
        </div>
      </section>
    </main>
  );
}
