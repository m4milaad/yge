export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'stationery' | 'office' | 'school';
  rating?: number;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Notebooks',
    price: 199,
    image: '/images/notebooks.png',
    description: 'High-quality paper, durable covers. Perfect for notes and journaling.',
    category: 'stationery',
    rating: 4.8,
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Artist Color Pencils',
    price: 499,
    image: '/images/colorPencils.png',
    description: 'Vibrant colors, smooth application. Professional-grade art supplies.',
    category: 'stationery',
    rating: 4.9,
    badge: 'New'
  },
  {
    id: 3,
    name: 'Desk Organizers',
    price: 249,
    image: '/images/deskOrganisers.png',
    description: 'Keep your workspace tidy and organized with style.',
    category: 'office',
    rating: 4.7,
    badge: 'Trending'
  },
  {
    id: 4,
    name: 'School Backpacks',
    price: 799,
    image: '/images/bags.png',
    description: 'Durable and stylish backpacks for students of all ages.',
    category: 'school',
    rating: 5.0,
    badge: 'Best Seller'
  },
  {
    id: 5,
    name: 'Premium Pens Set',
    price: 299,
    image: '/images/notebooks.png',
    description: 'Smooth writing experience with premium quality pens.',
    category: 'stationery'
  },
  {
    id: 6,
    name: 'Art Supplies Kit',
    price: 899,
    image: '/images/colorPencils.png',
    description: 'Complete art supplies for beginners and professionals.',
    category: 'stationery'
  },
  {
    id: 7,
    name: 'Sticky Notes Pack',
    price: 149,
    image: '/images/deskOrganisers.png',
    description: 'Colorful sticky notes for reminders and organization.',
    category: 'office'
  },
  {
    id: 8,
    name: 'Office Supplies Bundle',
    price: 1299,
    image: '/images/deskOrganisers.png',
    description: 'Complete office essentials in one convenient package.',
    category: 'office'
  },
  {
    id: 9,
    name: 'Student Notebook Set',
    price: 299,
    image: '/images/notebooks.png',
    description: 'Perfect for students with multiple subjects.',
    category: 'school'
  },
  {
    id: 10,
    name: 'Geometry Box',
    price: 199,
    image: '/images/deskOrganisers.png',
    description: 'Complete geometry tools for students.',
    category: 'school'
  },
  {
    id: 11,
    name: 'Whiteboard Markers',
    price: 199,
    image: '/images/colorPencils.png',
    description: 'Vibrant and long-lasting markers for whiteboards.',
    category: 'office'
  },
  {
    id: 12,
    name: 'Art & Craft Set',
    price: 899,
    image: '/images/colorPencils.png',
    description: 'Complete art supplies for creative projects.',
    category: 'school'
  },
  {
    id: 13,
    name: 'File Folders Pack',
    price: 349,
    image: '/images/notebooks.png',
    description: 'Organize your documents efficiently.',
    category: 'office'
  },
  {
    id: 14,
    name: 'Colored Pencils (36)',
    price: 599,
    image: '/images/colorPencils.png',
    description: 'Wide color range for all your artistic needs.',
    category: 'stationery'
  }
];

// Featured products for home page
export const featuredProducts: Product[] = products.filter(p => p.badge).slice(0, 4);

// Products by category
export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category);
};

// Stationery products
export const stationeryProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Notebooks',
    price: 199,
    image: '/images/notebooks.png',
    description: 'High-quality paper, durable covers',
    category: 'stationery'
  },
  {
    id: 2,
    name: 'Artist Color Pencils (24)',
    price: 499,
    image: '/images/colorPencils.png',
    description: 'Vibrant colors, smooth application',
    category: 'stationery'
  },
  {
    id: 3,
    name: 'Desk Organizer',
    price: 249,
    image: '/images/deskOrganisers.png',
    description: 'Keep your workspace tidy',
    category: 'office'
  },
  {
    id: 4,
    name: 'Premium Pens Set',
    price: 299,
    image: '/images/notebooks.png',
    description: 'Smooth writing experience',
    category: 'stationery'
  },
  {
    id: 5,
    name: 'Art Supplies Kit',
    price: 899,
    image: '/images/colorPencils.png',
    description: 'Complete art supplies for beginners',
    category: 'stationery'
  },
  {
    id: 6,
    name: 'Sticky Notes Pack',
    price: 149,
    image: '/images/deskOrganisers.png',
    description: 'Colorful sticky notes for reminders',
    category: 'office'
  }
];
