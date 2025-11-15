import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-linear-to-b from-gray-900 to-black dark:from-black dark:to-gray-950 text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo and CTA */}
        <div className="mb-16 pb-16 border-b border-gray-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logo and Description */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                  <Image 
                    src="/images/ygeLogo.png" 
                    alt="YGE Logo" 
                    width={48} 
                    height={48} 
                    className="w-12 h-12" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Yuva Global Enterprises</h3>
                  <p className="text-sm text-blue-400 font-semibold">You Demand, We Deliver!</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Your trusted partner for quality stationery and efficient business solutions. ISO 9001:2015 Certified company delivering excellence since inception.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-800 rounded-lg">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-blue-400">ISO Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-800 rounded-lg">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-green-400">MSME Registered</span>
                </div>
              </div>
            </div>

            {/* Right: Contact CTA */}
            <div className="bg-linear-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8">
              <h4 className="text-2xl font-black text-white mb-4">Ready to Get Started?</h4>
              <p className="text-gray-300 mb-6">Contact us today for all your stationery and business service needs.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Request Quote
                </Link>
                <a href="tel:+919796333322" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
                <a href="https://wa.me/919796333322" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Our Locations */}
          <div>
            <h5 className="text-lg font-black text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Our Locations
            </h5>
            
            <div className="mb-6 space-y-2">
              <h6 className="text-sm font-bold text-blue-400 mb-2">Main Office</h6>
              <a href="https://maps.google.com/?q=Ocean+Greens+20/A,+Surateng,+Rainawari,+Near+JLNM+Hospital+Srinagar,+Jammu+and+Kashmir+190013" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 block leading-relaxed">
                Ocean Greens 20/A, Surateng, Rainawari, Near JLNM Hospital Srinagar, J&K – 190013
              </a>
              <p className="text-sm text-gray-400">
                <a href="tel:01943559824" className="hover:text-blue-400 transition">📞 0194-3559824</a>
              </p>
            </div>
            
            <div className="space-y-2">
              <h6 className="text-sm font-bold text-blue-400 mb-2">Branch Office</h6>
              <a href="https://maps.google.com/?q=Yuva+Global+Enterprises+Shop+No+3,+Shah+Jeelan+Complex,+Nowgam,+Srinagar,+Jammu+and+Kashmir+190015" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 block leading-relaxed">
                Shop No 3, Shah Jeelan Complex, Nowgam, Srinagar, J&K 190015
              </a>
              <p className="text-sm text-gray-400">
                <a href="tel:+919796333322" className="hover:text-blue-400 transition">📞 +91 9796 3333 22</a>
              </p>
              <p className="text-sm text-gray-400">
                <a href="mailto:YuvaGEntp@gmail.com" className="hover:text-blue-400 transition">✉️ YuvaGEntp@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Shop Retail */}
          <div>
            <h5 className="text-lg font-black text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop Retail
            </h5>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/stationery" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Stationery & Art Supplies
                </Link>
              </li>
              <li>
                <Link href="/shop/office-essentials" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Office Essentials
                </Link>
              </li>
              <li>
                <Link href="/shop/school-supplies" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  School Supplies
                </Link>
              </li>
              <li>
                <Link href="/shop/all" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Browse All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Solutions */}
          <div>
            <h5 className="text-lg font-black text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Business Solutions
            </h5>
            <ul className="space-y-3">
              <li>
                <Link href="/services/facility-management" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Facility Management
                </Link>
              </li>
              <li>
                <Link href="/services/mechanized-cleaning" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Mechanized Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/security-services" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Security Services
                </Link>
              </li>
              <li>
                <Link href="/services/event-management" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Event Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-black text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Login / Sign Up
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Yuva Global Enterprises. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500 text-center">
              Developed by{' '}
              <a 
                href="https://m4milaad.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="developer-name text-blue-400 hover:text-blue-300 font-bold transition"
              >
                Milad Ajaz Bhat
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/919796333322" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Chat on WhatsApp" 
                className="p-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
