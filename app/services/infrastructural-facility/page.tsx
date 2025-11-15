import ServicePageLayout from '@/components/ServicePageLayout';

export default function InfrastructuralFacility() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const features = [
    'Building Systems Management & Automation',
    'Infrastructure Maintenance & Repairs',
    'Asset Management & Tracking',
    'Preventive Maintenance Programs',
    'Emergency Response Services 24/7',
    'Energy Efficiency Optimization',
    'Lifecycle Management',
    'Technical Documentation & Reporting'
  ];

  const benefits = [
    'Reduced Downtime',
    'Extended Asset Life',
    'Cost Savings',
    'Improved Efficiency',
    'Compliance Assurance',
    'Expert Team'
  ];

  return (
    <ServicePageLayout
      title="Infrastructural Facility Management"
      description="Managing and maintaining large-scale infrastructure projects ensuring your buildings and facilities operate at peak efficiency with minimal downtime."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
