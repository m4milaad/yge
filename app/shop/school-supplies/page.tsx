'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SchoolSuppliesPage() {
  const products = [
    { id: 1, name: 'School Backpack', price: 799, image: '/images/bags.png', description: 'Durable and stylish for students' },
    { id: 2, name: 'Student Notebook Set', price: 299, image: '/images/notebooks.png', description: 'Pack of 5 quality notebooks' },
    { id: 3, name: 'Geometry Box', price: 199, image: '/images/deskOrganisers.png', description: 'Complete geometry tools set' },
    { id: 4, name: 'Colored Pencils (36)', price: 599, image: '/images/colorPencils.png', description: 'Perfect for school projects' },
    { id: 5, name: 'School Supplies Kit', price: 1499, image: '/images/bags.png', description: 'Everything for the school year' },
    { id: 6, name: 'Art & Craft Set', price: 899, image: '/images/colorPencils.png', description: 'Creative supplies for kids' },
  ];

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">School Supplies</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Quality school supplies for students of all ages. Get ready for the school year!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="modern-card bg-white dark:bg-gray-800 flex flex-col shadow-lg dark:shadow-xl dark:shadow-gray-900/50">
            <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-52 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">₹{product.price}</p>
              <button className="mt-auto inline-block text-base font-medium py-2.5 px-6 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-75 bg-green-600 hover:bg-green-700 text-white focus:ring-green-400 hover:shadow-lg hover:transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:shadow-md">
                Add to Cart
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
