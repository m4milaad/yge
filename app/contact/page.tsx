'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append("access_key", "b91cea72-beeb-455b-a34b-9cc43dc4250e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Data transmitted. We will respond within T-24 hours.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setResult("Error: Transmission failed. Check connection or manual dial.");
      }
    } catch (error) {
      setResult("Error: Sub-system failure. Try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-black text-white border-b-4 border-black overflow-hidden grain-overlay">
        <div className="grid lg:grid-cols-[1fr_300px] divide-x-4 divide-white items-stretch min-h-[40vh]">
          <div className="flex flex-col justify-center p-8 md:p-16 relative z-10">
            <div className="flex flex-wrap gap-4 mb-6 reveal-up delay-1">
              <div className="px-4 py-1 bg-accent border-2 border-white font-mono font-bold uppercase text-xs tracking-widest text-white brutal-shadow !shadow-white">
                24/7 SUPPORT ACTIVE
              </div>
            </div>
            
            <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase mb-6 reveal-up delay-2">
              Secure <span className="text-neon block mt-2">Comm-Link</span>
            </h1>
            
            <p className="text-lg font-mono leading-relaxed max-w-xl border-l-4 border-white pl-4 reveal-up delay-3">
              Establish a direct connection. Transmit your operational requirements below for immediate processing.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center relative z-10 p-8">
            <svg className="w-full h-full text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="12" cy="12" r="6" strokeWidth="1" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 border-b-4 border-black">
        <div className="grid lg:grid-cols-5 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-black items-stretch">
          
          {/* INFO SIDEBAR */}
          <div className="lg:col-span-2 bg-white flex flex-col">
            <div className="p-6 md:p-8 border-b-4 border-black bg-neon">
              <h2 className="font-display font-black text-3xl uppercase">Data Centers</h2>
            </div>
            
            <div className="flex flex-col divide-y-4 divide-black grow">
              {/* Main Office */}
              <div className="p-8 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black text-neon flex items-center justify-center border-2 border-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase">HQ Node</h3>
                </div>
                <p className="font-mono text-sm mb-4 leading-relaxed bg-gray-100 p-4 border-l-4 border-black">
                  Ocean Greens 20/A, Surateng, Rainawari, Near JLNM Hospital Srinagar, J&K – 190013
                </p>
                <div className="font-mono font-bold text-sm uppercase">
                  COM: <a href="tel:01943559824" className="text-accent hover:underline">0194-3559824</a>
                </div>
              </div>

              {/* Branch */}
              <div className="p-8 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase">Branch Node</h3>
                </div>
                <p className="font-mono text-sm mb-4 leading-relaxed bg-gray-100 p-4 border-l-4 border-black">
                  Shop No 3, Shah Jeelan Complex, Nowgam, Srinagar, J&K 190015
                </p>
                <div className="font-mono font-bold text-sm uppercase flex flex-col gap-2">
                  <span>TEL: <a href="tel:+919796333322" className="text-accent hover:underline">+91 9796 3333 22</a></span>
                  <span>NET: <a href="mailto:YuvaGEntp@gmail.com" className="text-neon bg-black px-2 py-1 inline-block hover:bg-accent hover:text-white transition-colors">YuvaGEntp@gmail.com</a></span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-8 bg-black text-white grain-overlay relative">
                <h3 className="font-display font-black text-2xl uppercase mb-6 text-neon relative z-10">Direct Protocols</h3>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <a href="tel:01943559824" className="border-2 border-white p-4 text-center hover:bg-white hover:text-black transition-colors font-mono text-xs font-bold uppercase">
                    Voice Link
                  </a>
                  <a href="https://wa.me/919796333322" target="_blank" rel="noopener noreferrer" className="border-2 border-accent bg-accent text-white p-4 text-center hover:bg-white hover:text-black hover:border-white transition-colors font-mono text-xs font-bold uppercase">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM AREA */}
          <div className="lg:col-span-3 bg-white p-8 md:p-16 grid-bg relative">
            <div className="bg-white border-4 border-black brutal-shadow p-8 relative z-10 diagonal-accent">
              <h2 className="font-display font-black text-4xl uppercase mb-8 border-b-4 border-black pb-4">
                Transmission Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-2">Operator Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon focus:ring-0 transition-colors"
                      placeholder="[ ENTER NAME ]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2">Return Address (Email) *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon focus:ring-0 transition-colors"
                      placeholder="[ ENTER EMAIL ]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest mb-2">Comms Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon focus:ring-0 transition-colors"
                      placeholder="[ ENTER PHONE ]"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest mb-2">Enterprise / Unit</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon focus:ring-0 transition-colors"
                      placeholder="[ ENTER COMPANY ]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest mb-2">Target Protocol (Service) *</label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon focus:ring-0 transition-colors appearance-none font-bold"
                    >
                      <option value="">[ SELECT PARAMETER ]</option>
                      <option value="facility-management">Facility Management</option>
                      <option value="mechanized-cleaning">Mechanized Cleaning & Housekeeping</option>
                      <option value="security-services">Security Services</option>
                      <option value="manpower-outsourcing">Skilled/Unskilled Manpower</option>
                      <option value="hospitality-services">Hospitality Services</option>
                      <option value="general-order-supplies">General Order Supplies</option>
                      <option value="retail-products">Retail Products</option>
                      <option value="other">Other Directive</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest mb-2">Encrypted Payload (Message) *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-4 border-black p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon focus:ring-0 transition-colors resize-none"
                    placeholder="[ ENTER DIRECTIVES HERE ]"
                  ></textarea>
                </div>

                {result && (
                  <div className={`p-4 border-4 border-black font-bold uppercase text-sm ${result.startsWith('Success') ? 'bg-neon text-black' : 'bg-accent text-white'}`}>
                    {result}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full brutal-btn bg-black text-white hover:bg-neon hover:text-black py-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'UPLOADING...' : 'TRANSMIT DIRECTIVE'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
