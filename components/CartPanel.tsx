'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-end" onClick={onClose}>
      <div
        className="h-full w-full max-w-lg bg-gray-100 border-l-4 border-black brutal-shadow animate-slide-in-right flex flex-col grid-bg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-black text-white p-6 border-b-4 border-black flex justify-between items-start grain-overlay relative">
          <div className="relative z-10">
            <h2 className="font-display font-black text-3xl uppercase tracking-tighter text-accent mb-1">
              Active Payload
            </h2>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400">
              {cartCount} {cartCount === 1 ? 'UNIT' : 'UNITS'} SECURED
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white text-black border-2 border-transparent hover:border-white hover:bg-black hover:text-white flex items-center justify-center transition-colors relative z-10 brutal-shadow !shadow-accent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="grow overflow-y-auto p-6 font-mono custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center border-4 border-black p-8 bg-white diagonal-accent">
              <div className="w-16 h-16 bg-black text-neon flex items-center justify-center border-4 border-black mb-6 rotate-12">
                <span className="font-display font-black text-4xl">!</span>
              </div>
              <h3 className="font-display font-black text-2xl uppercase mb-2">Payload Empty</h3>
              <p className="text-sm font-bold text-gray-500 mb-6">No assets detected in current queue.</p>
              <Link
                href="/shop/all"
                onClick={onClose}
                className="brutal-btn w-full bg-black text-white hover:bg-neon hover:text-black text-sm"
              >
                INITIALIZE PROCUREMENT
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="bg-white border-4 border-black p-4 flex gap-4 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative shrink-0 w-24 h-24 border-2 border-black bg-gray-50 p-2">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      className="object-contain mix-blend-multiply" 
                    />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-neon text-black border-2 border-black font-bold flex items-center justify-center z-10">
                      {item.quantity}
                    </div>
                  </div>
                  
                  <div className="grow min-w-0 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold uppercase text-sm truncate leading-tight">{item.name}</h3>
                      <p className="font-display font-black text-xl text-accent mt-1">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border-2 border-black bg-gray-50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                          <span className="font-bold text-lg leading-none">-</span>
                        </button>
                        <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                          <span className="font-bold text-lg leading-none">+</span>
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 bg-black text-white hover:bg-red-500 flex items-center justify-center transition-colors"
                        title="Jettison Item"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="shrink-0 bg-white border-t-4 border-black p-6 relative z-10">
            <div className="border-4 border-black p-4 mb-4 font-mono font-bold bg-gray-50 text-sm space-y-2">
              <div className="flex justify-between">
                <span>SUBTOTAL:</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>LOGISTICS:</span>
                <span className="bg-black text-neon px-1">INCLUDED</span>
              </div>
              <div className="border-t-2 border-black pt-2 mt-2 flex justify-between items-end">
                <span>TOTAL DUE:</span>
                <span className="font-display font-black text-3xl leading-none text-accent">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <Link
              href="/checkout"
              onClick={onClose}
              className="brutal-btn block w-full text-center bg-neon border-black text-black py-4 mb-4"
            >
              EXECUTE CHECKOUT &rarr;
            </Link>
            
            <button
              onClick={onClose}
              className="brutal-btn block w-full text-center bg-white text-black border-4 border-black !shadow-none hover:bg-black hover:text-white py-3 text-sm"
            >
              RESUME BROWSING
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
