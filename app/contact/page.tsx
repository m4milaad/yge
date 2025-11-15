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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-linear-to-br from-purple-600 via-blue-600 to-purple-700 overflow-hidden">
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
              <span className="text-sm font-bold text-white">24/7 SUPPORT AVAILABLE</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Have questions? We're here to help. Fill out the form below and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Reach out to us through any of these channels
                </p>
              </div>

              {/* Main Office */}
              <div className="modern-card bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Main Office</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Ocean Greens 20/A, Surateng, Rainawari, Near JLNM Hospital Srinagar, Jammu and Kashmir – 190013
                    </p>
                    <a href="tel:01943559824" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                      📞 0194-3559824
                    </a>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="modern-card bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Branch Office</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Shop No 3, Shah Jeelan Complex, Nowgam, Srinagar, Jammu and Kashmir 190015
                    </p>
                    <a href="tel:+919796333322" className="text-sm text-blue-600 dark:text-blue-400 hover:underline block mb-1">
                      📞 +91 9796 3333 22
                    </a>
                    <a href="mailto:YuvaGEntp@gmail.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      ✉️ YuvaGEntp@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="modern-card bg-linear-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 border border-purple-200 dark:border-purple-700">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">24/7 Emergency Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="modern-card bg-white dark:bg-gray-800 p-8 md:p-10 border border-gray-200 dark:border-gray-700 relative z-10">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6 relative z-10">
                    <div className="relative z-10">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field relative z-10"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="relative z-10">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field relative z-10"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 relative z-10">
                    <div className="relative z-10">
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field relative z-10"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div className="relative z-10">
                      <label htmlFor="company" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field relative z-10"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="input-field relative z-10"
                    >
                      <option value="">Select a service</option>
                      <option value="facility-management">Facility Management</option>
                      <option value="mechanized-cleaning">Mechanized Cleaning & Housekeeping</option>
                      <option value="security-services">Security Services</option>
                      <option value="manpower-outsourcing">Skilled/Unskilled Manpower Outsourcing</option>
                      <option value="hospitality-services">Hospitality Services</option>
                      <option value="canteen-catering">Canteen & Catering Services</option>
                      <option value="infrastructural-facility">Infrastructural Facility Management</option>
                      <option value="pest-control">Beat Patrol & Pest Control</option>
                      <option value="admin-services">Administrative Services</option>
                      <option value="general-order-supplies">General Order Supplies</option>
                      <option value="corporate-gifting">Corporate Gifting</option>
                      <option value="event-management">Event Management</option>
                      <option value="retail-products">Retail Products</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="relative z-10">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field resize-none relative z-10"
                      placeholder="Tell us about your requirements, project scope, timeline, and any specific needs..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 btn-primary text-lg py-4"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <Link
                      href="/"
                      className="btn-secondary text-lg py-4"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back to Home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 md:py-16 bg-linear-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3">
              Prefer to Contact Us Directly?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Choose your preferred method of communication
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="tel:01943559824"
              className="modern-card bg-white dark:bg-gray-800 p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all group"
            >
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">0194-3559824</p>
            </a>

            <a
              href="mailto:YuvaGEntp@gmail.com"
              className="modern-card bg-white dark:bg-gray-800 p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">YuvaGEntp@gmail.com</p>
            </a>

            <a
              href="https://wa.me/919796333322"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-card bg-white dark:bg-gray-800 p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all group"
            >
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.33 3.43 16.79L2.05 22L7.31 20.62C8.72 21.33 10.33 21.7 12.04 21.7C17.5 21.7 21.95 17.25 21.95 11.79C21.95 6.33 17.5 2 12.04 2Z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">+91 9796 3333 22</p>
            </a>

            <Link
              href="/business-solutions"
              className="modern-card bg-linear-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 text-center border-2 border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all group"
            >
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Services</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">View All Solutions</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
