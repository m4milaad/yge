'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function AllProductsPage() {
  const [filter, setFilter] = useState('all');
  const { addToCart } = useCart();

  const allProducts = [
    { id: 1, name: 'Premium Notebooks', price: 199, image: '/images/notebooks.png', category: 'stationery', description: 'High-quality paper, durable covers' },
    { id: 2, name: 'Artist Color Pencils (24)', price: 499, image: '/images/colorPencils.png', category: 'stationery', description: 'Vibrant colors, smooth application' },
    { id: 3, name: 'Desk Organizer', price: 249, image: '/images/deskOrganisers.png', category: 'office', description: 'Keep your workspace tidy' },
    { id: 4, name: 'School Backpack', price: 799, image: '/images/bags.png', category: 'school', description: 'Durable and stylish' },
    { id: 5, name: 'Office Supplies Bundle', price: 1299, image: '/images/deskOrganisers.png', category: 'office', description: 'Complete office essentials' },
    { id: 6, name: 'Student Notebook Set', price: 299, image: '/images/notebooks.png', category: 'school', description: 'Perfect for students' },
    { id: 7, name: 'Premium Pens Set', price: 299, image: '/images/notebooks.png', category: 'stationery', description: 'Smooth writing experience' },
    { id: 8, name: 'Geometry Box', price: 199, image: '/images/deskOrganisers.png', category: 'school', description: 'Complete geometry tools' },
    { id: 9, name: 'Whiteboard Markers', price: 199, image: '/images/colorPencils.png', category: 'office', description: 'Vibrant and long-lasting' },
    { id: 10, name: 'Art & Craft Set', price: 899, image: '/images/colorPencils.png', category: 'school', description: 'Complete art supplies' },
    { id: 11, name: 'File Folders Pack', price: 349, image: '/images/notebooks.png', category: 'office', description: 'Organize your documents' },
    { id: 12, name: 'Colored Pencils (36)', price: 599, image: '/images/colorPencils.png', category: 'stationery', description: 'Wide color range' },
  ];

  const filteredProducts = filter === 'all' ? allProducts : allProducts.filter(p => p.category === filter);

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <main className="grow bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Shop All Products</h1>
            <p className="text-xl text-blue-100">
              Explore our complete collection of quality stationery, office essentials, and school supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {[
              { value: 'all', label: 'All Products', icon: '🛍️' },
              { value: 'stationery', label: 'Stationery', icon: '✏️' },
              { value: 'office', label: 'Office', icon: '💼' },
              { value: 'school', label: 'School', icon: '🎒' }
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === item.value
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-gray-900 dark:text-white">{filteredProducts.length}</span> products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="modern-card bg-white dark:bg-gray-800 flex flex-col group border border-gray-200 dark:border-gray-700">
                <div className="relative overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={400} 
                    height={300} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-bold text-blue-600 dark:text-blue-400 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                        ₹{product.price}
                      </span>
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full btn-primary"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <Link href="/" className="btn-secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
