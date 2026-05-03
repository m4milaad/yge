import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white brutal-border-t">
      <div className="grid lg:grid-cols-2 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-white border-b-4 border-white">
        {/* Left Section: Identify & Communicate */}
        <div className="p-8 md:p-16 flex flex-col justify-between relative grain-overlay">
          <div className="relative z-10">
            <div className="inline-block bg-neon text-black font-display font-black text-4xl md:text-6xl uppercase tracking-tighter px-4 py-2 mb-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              Yuva Global.
            </div>
            <p className="font-mono text-xl uppercase tracking-widest text-accent mb-8 font-bold">
              [ You Demand, We Deliver! ]
            </p>
            <p className="font-mono text-sm leading-relaxed mb-8 max-w-md border-l-4 border-accent pl-4 text-gray-300">
              Your trusted partner for quality stationery and efficient business solutions. ISO 9001:2015 Certified company delivering uncompromising excellence.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-xs font-bold uppercase tracking-wider">
              <span className="px-3 py-1 border-2 border-white hover:bg-white hover:text-black transition-colors cursor-default">ISO 9001:2015</span>
              <span className="px-3 py-1 border-2 border-neon text-neon hover:bg-neon hover:text-black transition-colors cursor-default">MSME Registered</span>
              <span className="px-3 py-1 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors cursor-default">MII Certified</span>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Actions */}
        <div className="p-8 md:p-16 flex flex-col justify-center relative">
          <h4 className="font-display font-black text-3xl uppercase mb-8 border-b-4 border-white/30 pb-4 inline-block">Ready to Get Started?</h4>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/contact" className="flex items-center justify-center p-6 bg-white text-black font-display font-black text-xl uppercase hover:bg-neon hover:translate-x-2 hover:-translate-y-2 transition-all duration-200 border-4 border-transparent hover:border-black hover:shadow-[8px_8px_0_0_#fff]">
              Request Quote &rarr;
            </Link>
            
            <a href="tel:+919796333322" className="flex items-center justify-center p-6 bg-transparent text-white border-4 border-white font-display font-black text-xl uppercase hover:bg-white hover:text-black hover:translate-x-2 hover:-translate-y-2 transition-all duration-200">
              Initiate Call
            </a>
            
            <a href="https://wa.me/919796333322" target="_blank" rel="noopener noreferrer" className="sm:col-span-2 flex items-center justify-center p-6 bg-[#25D366] text-black font-display font-black text-2xl uppercase border-4 border-black hover:-translate-y-2 transition-transform duration-200 shadow-[8px_8px_0_0_#fff] hover:shadow-[10px_10px_0_0_#fff]">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Grid Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-white/20 border-b-4 border-white/20 bg-black">
        <div className="p-8">
          <h5 className="font-display font-black text-2xl uppercase mb-6 text-neon bg-black inline-block">Our Locations</h5>
          <div className="space-y-6 font-mono text-sm">
            <div className="border-l-2 border-white/40 pl-4 hover:border-neon transition-colors">
              <strong className="block text-accent uppercase mb-1 text-xs tracking-widest">HQ / Main Office</strong>
              <span className="text-gray-400">Ocean Greens 20/A, Surateng, Rainawari, Near JLNM Hospital Srinagar, J&amp;K – 190013</span><br/>
              <span className="text-white">TEL: 0194-3559824</span>
            </div>
            <div className="border-l-2 border-white/40 pl-4 hover:border-accent transition-colors">
              <strong className="block text-accent uppercase mb-1 text-xs tracking-widest">Branch Office</strong>
              <span className="text-gray-400">Shop No 3, Shah Jeelan Complex, Nowgam, Srinagar, J&amp;K 190015</span><br/>
              <span className="text-white">TEL: +91 9796 3333 22</span><br/>
              <span className="text-gray-400">COMM: YuvaGEntp@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <h5 className="font-display font-black text-2xl uppercase mb-6 text-neon bg-black inline-block">Shop Retail</h5>
          <ul className="space-y-4 font-mono font-bold text-sm uppercase">
            <li><Link href="/shop/stationery" className="hover:text-neon hover:pl-2 transition-all block text-gray-300 hover:text-neon">&gt; Stationery &amp; Art</Link></li>
            <li><Link href="/shop/office-essentials" className="hover:text-neon hover:pl-2 transition-all block text-gray-300 hover:text-neon">&gt; Office Essentials</Link></li>
            <li><Link href="/shop/school-supplies" className="hover:text-neon hover:pl-2 transition-all block text-gray-300 hover:text-neon">&gt; School Supplies</Link></li>
            <li><Link href="/shop/all" className="hover:bg-neon hover:text-black p-1 inline-block transition-all mt-2 text-white">[ BROWSE DIRECTORY ]</Link></li>
          </ul>
        </div>
        
        <div className="p-8 bg-white/5">
          <h5 className="font-display font-black text-2xl uppercase mb-6 text-accent">Business Solutions</h5>
          <ul className="space-y-4 font-mono font-bold text-sm uppercase">
            <li><Link href="/services/facility-management" className="hover:text-accent hover:pl-2 transition-all block border-b border-white/10 pb-2 text-gray-300">+ Facility Management</Link></li>
            <li><Link href="/services/mechanized-cleaning" className="hover:text-accent hover:pl-2 transition-all block border-b border-white/10 pb-2 text-gray-300">+ Mechanized Cleaning</Link></li>
            <li><Link href="/services/security-services" className="hover:text-accent hover:pl-2 transition-all block border-b border-white/10 pb-2 text-gray-300">+ Security Services</Link></li>
            <li><Link href="/services/event-management" className="hover:text-accent hover:pl-2 transition-all block border-b border-white/10 pb-2 text-gray-300">+ Event Management</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs font-bold uppercase tracking-widest bg-black text-white/60">
        <p>&copy; {currentYear} YUVA GLOBAL ENTERPRISES. STATUS: OPERATIONAL.</p>
        <p className="flex items-center gap-2">
          SYS.DEV: <a href="https://m4milaad.github.io/" target="_blank" rel="noopener noreferrer" className="text-neon hover:bg-neon hover:text-black px-1 transition-colors">MILAD AJAZ BHAT</a>
        </p>
      </div>
    </footer>
  );
}
