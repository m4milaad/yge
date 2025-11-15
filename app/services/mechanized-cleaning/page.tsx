import ServicePageLayout from '@/components/ServicePageLayout';

export default function MechanizedCleaning() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0122 12c0 3-1 7-6.343 6.657z" />
    </svg>
  );

  const features = [
    'Floor Scrubbing and Polishing with Advanced Machines',
    'Carpet and Upholstery Deep Cleaning',
    'High-Rise Window Cleaning Services',
    'Restroom Sanitization & Hygiene Management',
    'Waste Management & Disposal',
    'Deep Cleaning & Disinfection Services',
    'Facade Cleaning & Maintenance',
    'Post-Construction Cleaning'
  ];

  const benefits = [
    'State-of-the-Art Equipment',
    'Trained Professionals',
    'Eco-Friendly Products',
    'Flexible Scheduling',
    'Quality Assurance',
    'Competitive Pricing'
  ];

  return (
    <ServicePageLayout
      title="Mechanized Cleaning & Housekeeping"
      description="Professional cleaning services using state-of-the-art equipment and trained personnel to keep your facilities spotless and hygienic."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
