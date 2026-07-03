import React from 'react';

export interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  link: string;
  color: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Facility Management',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="4" y="2" width="16" height="20" />
        <path d="M12 22V12" />
        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M8 18h.01M16 18h.01" />
      </svg>
    ),
    description: 'Comprehensive facility management solutions including maintenance, security, and operational support.',
    features: ['24/7 Monitoring', 'Preventive Maintenance', 'Energy Management', 'Vendor Coordination'],
    link: '/services/facility-management',
    color: 'purple'
  },
  {
    id: 2,
    title: 'General Order Supplies',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    description: 'Bulk supply solutions for all your business and operational needs with competitive pricing.',
    features: ['Office Supplies', 'Cleaning Materials', 'Safety Equipment', 'Custom Orders'],
    link: '/services/general-order-supplies',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Security Services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    description: 'Reliable security personnel and surveillance solutions to protect your business assets.',
    features: ['Trained Guards', 'CCTV Monitoring', 'Access Control', 'Emergency Response'],
    link: '/services/security-services',
    color: 'red'
  },
  {
    id: 4,
    title: 'Manpower Outsourcing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    description: 'Skilled and unskilled manpower solutions to meet your staffing needs.',
    features: ['Skilled Workers', 'Temporary Staff', 'Contract Hiring', 'Payroll Management'],
    link: '/services/manpower-outsourcing',
    color: 'green'
  },
  {
    id: 5,
    title: 'Hospitality Services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M2 22h20M12 2v2M6 8V6a6 6 0 0 1 12 0v2M18 10v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6z" />
        <path d="M6 14h12" />
      </svg>
    ),
    description: 'Professional hospitality staff for hotels, restaurants, and corporate events.',
    features: ['Front Desk Staff', 'Waiters & Servers', 'Housekeeping', 'Event Staff'],
    link: '/services/hospitality-services',
    color: 'orange'
  },
  {
    id: 6,
    title: 'Canteen & Catering',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    ),
    description: 'Complete canteen management and catering services for your organization.',
    features: ['Menu Planning', 'Food Preparation', 'Hygiene Standards', 'Custom Catering'],
    link: '/services/canteen-catering',
    color: 'yellow'
  },
  {
    id: 7,
    title: 'Infrastructural Facility Management',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <path d="m22 2-7 20-4-9-9-4 20-7z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
    description: 'Infrastructure maintenance and management for commercial and industrial facilities.',
    features: ['HVAC Systems', 'Electrical Maintenance', 'Plumbing', 'Civil Works'],
    link: '/services/infrastructural-facility',
    color: 'indigo'
  },
  {
    id: 8,
    title: 'IT Support & Technical Services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <polyline points="9 9 6 12 9 15" />
        <polyline points="15 9 18 12 15 15" />
      </svg>
    ),
    description: 'Professional IT support and technical assistance for seamless business operations.',
    features: ['Help Desk Support', 'Network Management', 'System Maintenance', 'Tech Troubleshooting'],
    link: '/services/it-support',
    color: 'teal'
  },
  {
    id: 9,
    title: 'Administrative Services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    description: 'Professional administrative support to streamline your business operations.',
    features: ['Document Management', 'Data Entry', 'Reception Services', 'Office Support'],
    link: '/services/admin-services',
    color: 'pink'
  },
  {
    id: 10,
    title: 'Mechanized Cleaning & Housekeeping',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <path d="m21 21-4.3-4.3" />
        <path d="M9 3v4" />
        <path d="M3 9h4" />
        <path d="m11.4 11.4-1.4 1.4" />
        <path d="M16 11V7a4 4 0 0 0-8 0v4H4v8h16v-8h-4Z" />
      </svg>
    ),
    description: 'Professional cleaning services with modern equipment and trained staff for spotless facilities.',
    features: ['Deep Cleaning', 'Daily Housekeeping', 'Sanitization', 'Waste Management'],
    link: '/services/mechanized-cleaning',
    color: 'cyan'
  },
  {
    id: 11,
    title: 'HR & Recruitment Services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    description: 'End-to-end recruitment and HR management solutions for your organization.',
    features: ['Talent Acquisition', 'Employee Onboarding', 'Payroll Processing', 'HR Consulting'],
    link: '/services/hr-recruitment',
    color: 'amber'
  },
  {
    id: 12,
    title: 'Event Management',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
    description: 'Complete event planning and execution for corporate events and conferences.',
    features: ['Venue Setup', 'Catering', 'Audio/Visual', 'Event Coordination'],
    link: '/services/event-management',
    color: 'rose'
  },
  {
    id: 13,
    title: 'Website Design & Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8l-2 3 2 3" />
        <path d="M17 8l2 3-2 3" />
        <line x1="10" y1="14" x2="14" y2="7" />
      </svg>
    ),
    description: 'Professional website design and development services to establish your digital presence and grow your business online.',
    features: ['Custom Website Design', 'Responsive Development', 'SEO Optimization', 'Maintenance & Support'],
    link: '/services/website-development',
    color: 'violet'
  }
];

// Featured services for home page
export const featuredServices: Service[] = [
  services.find(s => s.id === 8)!, // IT Support
  services.find(s => s.id === 2)!, // General Order Supplies
  services.find(s => s.id === 11)!, // HR & Recruitment
];
