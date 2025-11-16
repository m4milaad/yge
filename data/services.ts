export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
  features: string[];
  link: string;
  color: string;
}

export const services: Service[] = [
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
    title: 'General Order Supplies',
    icon: '📦',
    description: 'Bulk supply solutions for all your business and operational needs with competitive pricing.',
    features: ['Office Supplies', 'Cleaning Materials', 'Safety Equipment', 'Custom Orders'],
    link: '/services/general-order-supplies',
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
    title: 'IT Support & Technical Services',
    icon: '💻',
    description: 'Professional IT support and technical assistance for seamless business operations.',
    features: ['Help Desk Support', 'Network Management', 'System Maintenance', 'Tech Troubleshooting'],
    link: '/services/it-support',
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
    title: 'Mechanized Cleaning & Housekeeping',
    icon: '✨',
    description: 'Professional cleaning services with modern equipment and trained staff for spotless facilities.',
    features: ['Deep Cleaning', 'Daily Housekeeping', 'Sanitization', 'Waste Management'],
    link: '/services/mechanized-cleaning',
    color: 'cyan'
  },
  {
    id: 11,
    title: 'HR & Recruitment Services',
    icon: '👔',
    description: 'End-to-end recruitment and HR management solutions for your organization.',
    features: ['Talent Acquisition', 'Employee Onboarding', 'Payroll Processing', 'HR Consulting'],
    link: '/services/hr-recruitment',
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

// Featured services for home page
export const featuredServices: Service[] = [
  services.find(s => s.id === 8)!, // IT Support
  services.find(s => s.id === 2)!, // General Order Supplies
  services.find(s => s.id === 11)!, // HR & Recruitment
];
