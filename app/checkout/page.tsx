'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert('ERROR: Missing required logistical data.');
      return;
    }
    
    alert(`TRANSACTION APPROVED! Total: ₹${cartTotal.toFixed(2)}\nMethod: ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}`);
    clearCart();
    router.push('/');
  };

  if (cartItems.length === 0) {
    return (
      <main className="grow bg-gray-100 flex items-center justify-center p-8 grid-bg">
        <div className="bg-white border-4 border-black brutal-shadow max-w-lg w-full p-12 text-center diagonal-accent reveal-scale">
          <div className="w-24 h-24 bg-black text-white flex items-center justify-center mx-auto mb-8 border-4 border-black rotate-12">
            <span className="font-display font-black text-6xl text-accent">!</span>
          </div>
          <h1 className="font-display font-black text-4xl uppercase mb-4">Cart Empty</h1>
          <p className="font-mono text-sm mb-8 font-bold border-l-4 border-black pl-4 text-left">
            No payload detected. Return to supply directory to load items.
          </p>
          <Link href="/shop/all" className="brutal-btn w-full bg-neon text-black">
            Access Directory
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grow bg-gray-100 flex flex-col">
      {/* HEADER BAR */}
      <section className="bg-black text-white border-b-4 border-black py-8 px-8 md:px-16 relative grain-overlay">
        <div className="flex justify-between items-center relative z-10">
          <div>
            <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter text-accent">
              Checkout Protocol
            </h1>
            <p className="font-mono text-xs uppercase tracking-widest mt-2">Logistics & Transaction Verification</p>
          </div>
          <div className="font-display font-black text-5xl opacity-30 text-neon">
            L-4X
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          
          {/* Form Section */}
          <div className="space-y-8">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
              
              {/* Shipping Information */}
              <div className="bg-white border-4 border-black brutal-shadow p-8 diagonal-accent reveal-up delay-1">
                <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
                    <span className="font-mono font-bold">01</span>
                  </div>
                  <h2 className="font-display font-black text-3xl uppercase">Routing Data</h2>
                </div>

                <div className="space-y-6 font-mono">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2">Designation *</label>
                      <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon" placeholder="[ NAME ]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2">Comm-Link *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon" placeholder="[ EMAIL ]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">Comms Number *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon" placeholder="[ PHONE ]" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">Drop Coordinates *</label>
                    <textarea required rows={3} value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon resize-none" placeholder="[ STREET / APARTMENT / ETC ]" />
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2">City</label>
                      <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon" placeholder="[ CITY ]" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2">State</label>
                      <input type="text" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon" placeholder="[ STATE ]" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2">PIN</label>
                      <input type="text" value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon" placeholder="[ CODE ]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white border-4 border-black brutal-shadow p-8 diagonal-accent reveal-up delay-2">
                <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-4">
                  <div className="w-12 h-12 bg-black text-neon flex items-center justify-center border-2 border-black">
                    <span className="font-mono font-bold">02</span>
                  </div>
                  <h2 className="font-display font-black text-3xl uppercase">Transfer Method</h2>
                </div>

                <div className="space-y-4 font-mono">
                  <label className={`block border-4 p-4 cursor-pointer transition-colors ${formData.paymentMethod === 'cod' ? 'border-accent bg-gray-100' : 'border-black hover:bg-gray-50'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} className="w-5 h-5 accent-accent" />
                      <div className="ml-4 grow">
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-lg uppercase">Physical Tender (COD)</span>
                          <span className="bg-black text-neon text-[10px] px-2 py-1 font-bold tracking-widest uppercase">Default</span>
                        </div>
                        <p className="text-xs mt-2 text-gray-600 border-l-2 border-black pl-2">Exchange funds upon delivery at drop coordinates.</p>
                      </div>
                    </div>
                  </label>

                  <label className={`block border-4 p-4 cursor-pointer transition-colors ${formData.paymentMethod === 'online' ? 'border-accent bg-gray-100' : 'border-black hover:bg-gray-50'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === 'online'} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} className="w-5 h-5 accent-accent" />
                      <div className="ml-4 grow">
                        <span className="font-bold text-lg uppercase">Digital Transfer</span>
                        <p className="text-xs mt-2 text-gray-600 border-l-2 border-black pl-2">Execute encrypted payment via standard networks (UPI/Cards).</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="bg-white border-4 border-black brutal-shadow sticky top-28 reveal-scale delay-3">
            <div className="bg-black text-white p-6 border-b-4 border-black">
              <h2 className="font-display font-black text-2xl uppercase">Payload Manifest</h2>
            </div>

            <div className="p-6 max-h-[400px] overflow-y-auto custom-scrollbar divide-y-2 divide-gray-100 font-mono">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                  <div className="w-16 h-16 border-2 border-black p-1 shrink-0 bg-gray-50">
                    <Image src={item.image} alt={item.name} width={64} height={64} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="grow min-w-0">
                    <h3 className="font-bold text-sm truncate uppercase mb-1">{item.name}</h3>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-gray-500">QTY: {item.quantity}</span>
                      <span className="font-bold">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t-4 border-black bg-gray-50 font-mono text-sm space-y-2">
              <div className="flex justify-between">
                <span className="font-bold text-gray-500">SUBTOTAL</span>
                <span className="font-bold">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-500">SHIPPING</span>
                <span className="font-bold bg-black text-neon px-1">INCLUDED</span>
              </div>
              <div className="border-t-2 border-black pt-4 mt-4 flex justify-between items-end">
                <span className="font-bold text-gray-500">TOTAL DUE</span>
                <span className="font-display font-black text-3xl">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button type="submit" form="checkout-form" className="w-full brutal-btn text-lg bg-neon border-t-4 border-x-0 border-b-0 border-black !shadow-none py-6">
              EXECUTE TRANSACTION &rarr;
            </button>
          </div>
          
        </div>
      </div>
    </main>
  );
}
