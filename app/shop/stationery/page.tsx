'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function StationeryPage() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const products = [
    { id: 1, name: 'Premium Notebooks', price: 199, image: '/images/notebooks.png', description: 'High-quality paper, durable covers' },
    { id: 2, name: 'Artist Color Pencils (24)', price: 499, image: '/images/colorPencils.png', description: 'Vibrant colors, smooth application' },
    { id: 3, name: 'Desk Organizer', price: 249, image: '/images/deskOrganisers.png', description: 'Keep your workspace tidy' },
    { id: 4, name: 'Premium Pens Set', price: 299, image: '/images/notebooks.png', description: 'Smooth writing experience' },
    { id: 5, name: 'Art Supplies Kit', price: 899, image: '/images/colorPencils.png', description: 'Complete art supplies for beginners' },
    { id: 6, name: 'Sticky Notes Pack', price: 149, image: '/images/deskOrganisers.png', description: 'Colorful sticky notes for reminders' },
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    setAddedItems(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  return (
    <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Stationery Products</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover our wide range of quality stationery products for all your writing and creative needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="modern-card bg-white dark:bg-gray-800 flex flex-col shadow-lg dark:shadow-xl dark:shadow-gray-900/50">
            <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-52 object-cover" />
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 grow">{product.description}</p>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">₹{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-auto inline-block text-base font-medium py-2.5 px-6 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-75 bg-green-600 hover:bg-green-700 text-white focus:ring-green-400 hover:shadow-lg hover:transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:shadow-md"
              >
                {addedItems.includes(product.id) ? 'Added!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
