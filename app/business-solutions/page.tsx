'use client';

import Link from 'next/link';

export default function BusinessSolutions() {
  const services = [
    {
      id: 1,
      title: 'Facility Management',
      icon: '🏢',
      description: 'Comprehensive facility management solutions including maintenance, security, and operational support.',
      features: ['24/7 Monitoring', 'Preventive Maintenance', 'Energy Management', 'Vendor Coordination'],
      link: '/services/facility-management',
      color: 'purple'
    },
    {
      id: 2,
      title: 'Mechanized Cleaning & Housekeeping',
      icon: '✨',
      description: 'Professional cleaning services with modern equipment and trained staff for spotless facilities.',
      features: ['Deep Cleaning', 'Daily Housekeeping', 'Sanitization', 'Waste Management'],
      link: '/services/mechanized-cleaning',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Security Services',
      icon: '🔒',
      description: 'Reliable security personnel and surveillance solutions to protect your business assets.',
      features: ['Trained Guards', 'CCTV Monitoring', 'Access Control', 'Emergency Response'],
      link: '/services/security-services',
      color: 'red'
    },
    {
      id: 4,
      title: 'Manpower Outsourcing',
      icon: '👥',
      description: 'Skilled and unskilled manpower solutions to meet your staffing needs.',
      features: ['Skilled Workers', 'Temporary Staff', 'Contract Hiring', 'Payroll Management'],
      link: '/services/manpower-outsourcing',
      color: 'green'
    },
    {
      id: 5,
      title: 'Hospitality Services',
      icon: '🍽️',
      description: 'Professional hospitality staff for hotels, restaurants, and corporate events.',
      features: ['Front Desk Staff', 'Waiters & Servers', 'Housekeeping', 'Event Staff'],
      link: '/services/hospitality-services',
      color: 'orange'
    },
    {
      id: 6,
      title: 'Canteen & Catering',
      icon: '🍴',
      description: 'Complete canteen management and catering services for your organization.',
      features: ['Menu Planning', 'Food Preparation', 'Hygiene Standards', 'Custom Catering'],
      link: '/services/canteen-catering',
      color: 'yellow'
    },
    {
      id: 7,
      title: 'Infrastructural Facility Management',
      icon: '🏗️',
      description: 'Infrastructure maintenance and management for commercial and industrial facilities.',
      features: ['HVAC Systems', 'Electrical Maintenance', 'Plumbing', 'Civil Works'],
      link: '/services/infrastructural-facility',
      color: 'indigo'
    },
    {
      id: 8,
      title: 'Beat Patrol & Pest Control',
      icon: '🛡️',
      description: 'Regular patrol services and comprehensive pest control solutions.',
      features: ['Security Patrols', 'Pest Inspection', 'Treatment Plans', 'Prevention'],
      link: '/services/pest-control',
      color: 'teal'
    },
    {
      id: 9,
      title: 'Administrative Services',
      icon: '📋',
      description: 'Professional administrative support to streamline your business operations.',
      features: ['Document Management', 'Data Entry', 'Reception Services', 'Office Support'],
      link: '/services/admin-services',
      color: 'pink'
    },
    {
      id: 10,
      title: 'General Order Supplies',
      icon: '📦',
      description: 'Bulk supply solutions for all your business and operational needs.',
      features: ['Office Supplies', 'Cleaning Materials', 'Safety Equipment', 'Custom Orders'],
      link: '/services/general-order-supplies',
      color: 'cyan'
    },
    {
      id: 11,
      title: 'Corporate Gifting',
      icon: '🎁',
      description: 'Curated corporate gift solutions to strengthen business relationships.',
      features: ['Custom Branding', 'Bulk Orders', 'Premium Gifts', 'Timely Delivery'],
      link: '/services/corporate-gifting',
      color: 'amber'
    },
    {
      id: 12,
      title: 'Event Management',
      icon: '🎉',
      description: 'Complete event planning and execution for corporate events and conferences.',
      features: ['Venue Setup', 'Catering', 'Audio/Visual', 'Event Coordination'],
      link: '/services/event-management',
      color: 'rose'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string; border: string } } = {
      purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', hover: 'hover:border-purple-500', border: 'border-purple-200 dark:border-purple-800' },
      blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', hover: 'hover:border-blue-500', border: 'border-blue-200 dark:border-blue-800' },
      red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', hover: 'hover:border-red-500', border: 'border-red-200 dark:border-red-800' },
      green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', hover: 'hover:border-green-500', border: 'border-green-200 dark:border-green-800' },
      orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', hover: 'hover:border-orange-500', border: 'border-orange-200 dark:border-orange-800' },
      yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400', hover: 'hover:border-yellow-500', border: 'border-yellow-200 dark:border-yellow-800' },
      indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', hover: 'hover:border-indigo-500', border: 'border-indigo-200 dark:border-indigo-800' },
      teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', hover: 'hover:border-teal-500', border: 'border-teal-200 dark:border-teal-800' },
      pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', hover: 'hover:border-pink-500', border: 'border-pink-200 dark:border-pink-800' },
      cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400', hover: 'hover:border-cyan-500', border: 'border-cyan-200 dark:border-cyan-800' },
      amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', hover: 'hover:border-amber-500', border: 'border-amber-200 dark:border-amber-800' },
      rose: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', hover: 'hover:border-rose-500', border: 'border-rose-200 dark:border-rose-800' }
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-linear-to-br from-purple-600 via-purple-700 to-blue-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-white">ISO 9001:2015 CERTIFIED</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Complete Business Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Comprehensive B2B services to streamline your operations and enhance productivity
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-purple-600 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">
              Our Business Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Tailored solutions for businesses of all sizes. From facility management to corporate gifting, we've got you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const colors = getColorClasses(service.color);
              return (
                <Link
                  key={service.id}
                  href={service.link}
                  className={`group modern-card bg-white dark:bg-gray-800 p-6 flex flex-col border-2 ${colors.border} ${colors.hover} transition-all`}
                >
                  <div className={`text-5xl mb-4 ${colors.bg} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${colors.text} group-hover:underline`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <svg className={`w-4 h-4 ${colors.text} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`flex items-center ${colors.text} font-semibold text-sm group-hover:gap-2 transition-all`}>
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-linear-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">
              Why Choose Yuva Global Enterprises?
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your trusted partner for comprehensive business solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-2xl mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">ISO Certified</h3>
              <p className="text-gray-600 dark:text-gray-400">Quality assured services meeting international standards</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Round-the-clock assistance for all your needs</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-2xl mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-400">Trained professionals dedicated to excellence</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-2xl mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fast Response</h3>
              <p className="text-gray-600 dark:text-gray-400">Quick turnaround time for all service requests</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-linear-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us today and discover how we can help streamline your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
