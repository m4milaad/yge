import Link from 'next/link';
import { ReactNode } from 'react';
import { services } from '@/data';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  benefits?: string[];
  children?: ReactNode;
}

export default function ServicePageLayout({
  title,
  description,
  icon,
  features,
  benefits,
  children
}: ServicePageLayoutProps) {
  return (
    <main className="grow bg-gray-100 flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-black text-white border-b-4 border-black relative grain-overlay">
        <div className="grid lg:grid-cols-[1fr_300px] divide-x-4 divide-white items-stretch min-h-[40vh]">
          
          <div className="p-8 md:p-16 flex flex-col justify-center relative z-10">
            <div className="flex flex-wrap gap-4 mb-8 reveal-up delay-1">
              <div className="px-4 py-1 bg-neon text-black font-mono font-bold uppercase text-xs tracking-widest brutal-shadow !shadow-white">
                B2B SERVICE PROTOCOL
              </div>
            </div>
            
            <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase mb-6 reveal-up delay-2 text-accent">
              {title}
            </h1>
            
            <p className="font-mono text-lg leading-relaxed max-w-2xl border-l-4 border-white pl-4 reveal-up delay-3 text-gray-300">
              {description}
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center p-8 border-t-4 lg:border-t-0 border-white relative z-10 bg-white/5">
            <div className="scale-150 transform">
              {icon}
            </div>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="p-8 md:p-16 border-b-4 border-black grid-bg">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Features */}
          <div className="reveal-up delay-2">
            <h2 className="font-display font-black text-4xl uppercase mb-8 border-b-4 border-black pb-4 inline-block">
              Operational Scope
            </h2>
            <div className="flex flex-col gap-4 font-mono font-bold text-sm uppercase">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border-4 border-black bg-white hover:bg-neon transition-colors brutal-shadow">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          {benefits && benefits.length > 0 && (
            <div className="reveal-up delay-3">
              <h2 className="font-display font-black text-4xl uppercase mb-8 border-b-4 border-black pb-4 inline-block">
                Strategic Advantages
              </h2>
              <div className="grid grid-cols-2 gap-4 font-mono font-bold text-xs text-center uppercase tracking-widest">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 border-4 border-black bg-white flex items-center justify-center min-h-[120px] hover:bg-black hover:text-white transition-colors diagonal-accent">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Optional custom children */}
        {children && (
          <div className="max-w-7xl mx-auto mt-12 bg-white border-4 border-black p-8 brutal-shadow">
            {children}
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <section className="bg-accent text-white p-8 md:p-16 text-center border-b-4 border-black grain-overlay relative">
        <h2 className="font-display font-black text-5xl uppercase mb-6 relative z-10 text-black" style={{ WebkitTextStroke: '2px white' }}>
          Engage Protocol
        </h2>
        <p className="font-mono text-xl mb-8 max-w-2xl mx-auto relative z-10 font-bold">
          Contact our operations center to deploy {title.toLowerCase()} for your facility.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
          <Link href="/contact" className="brutal-btn bg-white text-black hover:bg-black hover:text-white !shadow-[6px_6px_0px_0px_#000]">
            INITIALIZE CONTACT &rarr;
          </Link>
          <Link href="/business-solutions" className="brutal-btn bg-transparent border-white text-white hover:bg-white hover:text-black !shadow-[6px_6px_0px_0px_#fff]">
            BACK TO DIRECTORY
          </Link>
        </div>
      </section>

      {/* OTHER SERVICES TICKER/GRID */}
      <section className="p-8 md:p-16 bg-white">
        <h2 className="font-display font-black text-3xl uppercase mb-8 border-l-8 border-neon pl-4">
          Adjacent Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.filter(s => s.title !== title).slice(0, 4).map((service) => (
            <Link key={service.id} href={service.link} className="border-4 border-black p-6 group hover:bg-black hover:text-white transition-colors hover-lift flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-neon text-black flex items-center justify-center mb-6 border-2 border-black group-hover:bg-accent group-hover:text-white group-hover:border-white transition-colors">
                  <div className="scale-75">{service.icon}</div>
                </div>
                <h3 className="font-display font-black text-xl uppercase mb-2 leading-tight">
                  {service.title}
                </h3>
              </div>
              <div className="font-mono font-bold text-xs uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-neon">
                VIEW &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
