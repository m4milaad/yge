export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: {
    main: string;
    branch: string;
  };
  addresses: {
    main: {
      label: string;
      address: string;
      phone: string;
      mapLink: string;
    };
    branch: {
      label: string;
      address: string;
      phone: string;
      email: string;
      mapLink: string;
    };
  };
  social: {
    whatsapp: string;
  };
  certifications: string[];
  businessHours: {
    weekdays: string;
    sunday: string;
    emergency: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: 'Yuva Global Enterprises',
  tagline: 'You Demand, We Deliver!',
  description: 'Your trusted partner for quality stationery and efficient business solutions. ISO 9001:2015 Certified company delivering excellence since inception.',
  email: 'YuvaGEntp@gmail.com',
  phone: {
    main: '0194-3559824',
    branch: '+91 9796 3333 22'
  },
  addresses: {
    main: {
      label: 'Main Office',
      address: 'Ocean Greens 20/A, Surateng, Rainawari, Near JLNM Hospital Srinagar, Jammu and Kashmir – 190013',
      phone: '0194-3559824',
      mapLink: 'https://maps.google.com/?q=Ocean+Greens+20/A,+Surateng,+Rainawari,+Near+JLNM+Hospital+Srinagar,+Jammu+and+Kashmir+190013'
    },
    branch: {
      label: 'Branch Office',
      address: 'Shop No 3, Shah Jeelan Complex, Nowgam, Srinagar, Jammu and Kashmir 190015',
      phone: '+91 9796 3333 22',
      email: 'YuvaGEntp@gmail.com',
      mapLink: 'https://maps.google.com/?q=Yuva+Global+Enterprises+Shop+No+3,+Shah+Jeelan+Complex,+Nowgam,+Srinagar,+Jammu+and+Kashmir+190015'
    }
  },
  social: {
    whatsapp: 'https://wa.me/919796333322'
  },
  certifications: [
    'ISO 9001:2015',
    'MSME Registered',
    'MII Certified'
  ],
  businessHours: {
    weekdays: 'Monday - Saturday: 9:00 AM - 6:00 PM',
    sunday: 'Sunday: Closed',
    emergency: '24/7 Emergency Support Available'
  }
};

export interface NavigationLink {
  label: string;
  href: string;
  icon?: string;
}

export const navigationLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/#about' },
    { label: 'Contact', href: '/#contact' }
  ],
  business: [
    { label: 'Facility Management Services', href: '/services/facility-management' },
    { label: 'Mechanized Cleaning & Housekeeping', href: '/services/mechanized-cleaning' },
    { label: 'Security Services', href: '/services/security-services' },
    { label: 'Skilled/Unskilled Manpower', href: '/services/manpower-outsourcing' },
    { label: 'Event Management', href: '/services/event-management' },
    { label: 'Hospitality Services', href: '/services/hospitality-services' },
    { label: 'Infrastructural Facility Management', href: '/services/infrastructural-facility' },
    { label: 'Canteen & Catering Services', href: '/services/canteen-catering' },
    { label: 'Beat Patrol & Pest Control', href: '/services/pest-control' },
    { label: 'Administrative Services', href: '/services/admin-services' },
    { label: 'General Order Supplies', href: '/services/general-order-supplies' },
    { label: 'Corporate Gifting', href: '/services/corporate-gifting' }
  ],
  shop: [
    { label: 'Stationery', href: '/shop/stationery' },
    { label: 'Office Essentials', href: '/shop/office-essentials' },
    { label: 'School Supplies', href: '/shop/school-supplies' },
    { label: 'Browse All Products', href: '/shop/all' }
  ],
  footer: [
    { label: 'About Us', href: '/#about' },
    { label: 'Contact Us', href: '/#contact' },
    { label: 'Login / Sign Up', href: '/login' },
    { label: 'Checkout', href: '/checkout' }
  ]
};
