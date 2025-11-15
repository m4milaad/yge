import ServicePageLayout from '@/components/ServicePageLayout';

export default function PestControl() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const features = [
    'Integrated Pest Management (IPM)',
    'Regular Beat Patrols & Monitoring',
    'Rodent Control & Prevention',
    'Termite Treatment & Protection',
    'Fumigation Services',
    'Preventive Pest Control Programs',
    'Eco-Friendly Solutions',
    'Compliance Certification'
  ];

  const benefits = [
    'Certified Professionals',
    'Safe & Eco-Friendly',
    'Regular Monitoring',
    'Guaranteed Results',
    'Preventive Approach',
    'Affordable Pricing'
  ];

  return (
    <ServicePageLayout
      title="Beat Patrol & Pest Control"
      description="Comprehensive pest control and beat patrol services using eco-friendly methods to maintain a safe, healthy, and pest-free environment."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
