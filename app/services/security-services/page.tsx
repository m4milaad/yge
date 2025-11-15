import ServicePageLayout from '@/components/ServicePageLayout';

export default function SecurityServices() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );

  const features = [
    'Trained Security Personnel & Guards',
    '24/7 Surveillance & Monitoring',
    'Access Control Systems',
    'CCTV Installation & Monitoring',
    'Emergency Response Teams',
    'Patrol Services & Beat Monitoring',
    'Event Security Management',
    'Risk Assessment & Consultation'
  ];

  const benefits = [
    'Licensed & Trained Staff',
    'Advanced Technology',
    '24/7 Availability',
    'Quick Response Time',
    'Customized Solutions',
    'Reliable Service'
  ];

  return (
    <ServicePageLayout
      title="Security Services"
      description="Comprehensive security solutions with trained personnel to protect your business assets, facilities, and people around the clock."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
