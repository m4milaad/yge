'use client';

import Link from 'next/link';
import { services } from '@/data';

export default function BusinessSolutions() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-white border-b-4 border-black overflow-hidden grid-bg grain-overlay">
        <div className="grid lg:grid-cols-[1fr_400px] divide-x-4 divide-black items-stretch min-h-[60vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-8 md:p-16 relative z-10">
            <div className="flex flex-wrap gap-4 mb-8 reveal-up delay-1">
              <div className="px-4 py-1 bg-black text-neon font-mono font-bold uppercase text-xs tracking-widest brutal-shadow">
                B2B Services Division
              </div>
            </div>
            
            <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase mb-6 reveal-up delay-2">
              <span className="block text-black">Complete Business</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px black' }}>Solutions</span>
            </h1>
            
            <div className="w-full h-4 bg-accent mb-6 reveal-strike delay-3"></div>
            
            <p className="font-mono text-lg font-bold mb-6 text-black max-w-2xl bg-neon inline-block p-2 uppercase reveal-up delay-4">
              [ Streamlining Operations & Enhancing Productivity ]
            </p>
            
            <p className="text-lg md:text-xl font-mono text-black leading-relaxed max-w-2xl mb-12 border-l-8 border-black pl-6 reveal-up delay-5">
              Comprehensive B2B services engineered to optimize your facility management and infrastructural operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 reveal-up delay-6">
              <Link href="/contact" className="brutal-btn text-xl group bg-black text-white hover:bg-neon hover:text-black">
                Request a Quote
                <svg className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Panel */}
          <div className="hidden lg:flex flex-col bg-black text-white p-8 relative grain-overlay justify-end border-l-4 border-black">
            <div className="absolute top-0 right-0 p-4 font-mono font-bold text-accent text-sm flex items-center gap-2 z-10">
              <span className="w-2 h-2 bg-accent inline-block pulse-dot" />
              SYSTEM ACTIVE
            </div>
            
            <div className="border-4 border-white p-6 reveal-scale delay-4 diagonal-accent">
              <h3 className="font-display font-black text-3xl uppercase mb-4 text-neon">
                ISO 9001:2015
              </h3>
              <p className="font-mono text-sm leading-relaxed border-l-2 border-white pl-4">
                Quality assured services meeting strict international standards for corporate efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-gray-100 border-b-4 border-black pb-16">
        <h2 className="font-display font-black text-4xl md:text-6xl uppercase p-6 md:p-8 bg-neon border-b-4 border-black">
          Our Capabilities
        </h2>
        
        <div className="p-8 md:p-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Link 
                key={service.id} 
                href={service.link}
                className={`bg-white border-4 border-black flex flex-col group hover-lift relative reveal-up delay-${Math.min((idx % 8) + 1, 8)}`}
              >
                <div className="p-6 border-b-4 border-black bg-black text-neon group-hover:bg-accent group-hover:text-white transition-colors flex items-center justify-between">
                  <div className="scale-150 transform origin-left">
                    {service.icon}
                  </div>
                  <span className="font-mono font-bold text-xs uppercase tracking-widest border border-current px-2 py-1">
                    0{idx + 1}
                  </span>
                </div>
                
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-display font-black text-2xl uppercase mb-4 leading-none group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="font-mono text-sm leading-relaxed grow mb-6 border-l-4 border-black pl-4 group-hover:border-accent transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8 font-mono text-xs font-bold uppercase">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto brutal-btn w-full text-sm py-3 bg-white text-black group-hover:bg-black group-hover:text-white group-hover:!shadow-[4px_4px_0_0_#000] !shadow-none border-t-4 border-black">
                    Execute Protocol &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white border-b-4 border-black relative grain-overlay">
        <div className="grid lg:grid-cols-2 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-black">
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase mb-8 leading-[0.9]">
              Operational <span className="text-neon block mt-2" style={{ WebkitTextStroke: '2px black' }}>Excellence</span>
            </h2>
            <p className="font-mono text-lg mb-8 leading-relaxed max-w-md border-l-8 border-accent pl-4">
              Your trusted partner for comprehensive business solutions. We engineer environments where your enterprise can thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-2 divide-x-4 divide-y-4 lg:divide-y-0 divide-black border-t-4 lg:border-t-0 border-black">
            <div className="p-8 flex flex-col justify-between hover:bg-neon transition-colors group">
              <div className="font-display font-black text-5xl mb-4 group-hover:text-white transition-colors" style={{ WebkitTextStroke: '2px black' }}>24/7</div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">Continuous Ops</h3>
                <p className="font-mono text-sm">Round-the-clock assistance and monitoring for critical facilities.</p>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors group">
              <div className="font-display font-black text-5xl mb-4 text-transparent group-hover:text-accent transition-colors" style={{ WebkitTextStroke: '2px currentColor' }}>EXP</div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">Expert Forces</h3>
                <p className="font-mono text-sm text-gray-600 group-hover:text-gray-400">Highly trained professionals dedicated to rigorous standards.</p>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-between hover:bg-accent hover:text-white transition-colors group border-t-4 border-black col-span-2 sm:col-span-1">
              <div className="font-display font-black text-5xl mb-4 text-transparent group-hover:text-black transition-colors" style={{ WebkitTextStroke: '2px currentColor' }}>RSP</div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">Rapid Deploy</h3>
                <p className="font-mono text-sm text-gray-600 group-hover:text-gray-200">Immediate turnaround protocols for emergent service requests.</p>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between hover:bg-gray-100 transition-colors group border-t-4 border-black col-span-2 sm:col-span-1">
              <div className="font-display font-black text-5xl mb-4" style={{ WebkitTextStroke: '1px black' }}>ISO</div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">Certified Quality</h3>
                <p className="font-mono text-sm">Strict adherence to ISO 9001:2015 frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white p-8 md:p-16 text-center relative grain-overlay border-b-4 border-black">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-6 relative z-10 text-neon">
          Initiate Contact
        </h2>
        <p className="font-mono text-xl mb-8 max-w-2xl mx-auto relative z-10">
          Transform your operational framework today. Request a tailored proposal.
        </p>
        <div className="relative z-10">
          <Link href="/contact" className="brutal-btn bg-accent text-white border-white hover:bg-white hover:text-black !shadow-[6px_6px_0px_0px_#fff] hover:!shadow-[8px_8px_0px_0px_#fff]">
            Access Terminal
          </Link>
        </div>
      </section>
    </>
  );
}
