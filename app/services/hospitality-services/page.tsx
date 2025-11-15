import ServicePageLayout from '@/components/ServicePageLayout';

export default function HospitalityServices() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const features = [
    'Front Desk & Reception Services',
    'Guest Relations Management',
    'Concierge Services',
    'Room Service & Housekeeping',
    'Food & Beverage Services',
    'Event Hosting Support',
    'Customer Service Training',
    'Quality Assurance Programs'
  ];

  const benefits = [
    'Professional Staff',
    'Customer-Centric Approach',
    'Flexible Services',
    'Quality Standards',
    'Cost Optimization',
    'Enhanced Guest Experience'
  ];

  return (
    <ServicePageLayout
      title="Hospitality Services"
      description="Comprehensive hospitality services delivering exceptional guest experiences with professional staff and customer-centric solutions."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
