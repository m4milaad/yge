import ServicePageLayout from '@/components/ServicePageLayout';

export default function FacilityManagement() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const features = [
    'Building Maintenance (HVAC, Electrical, Plumbing)',
    'Operations Management & Optimization',
    'Space Management and Planning',
    'Health and Safety Compliance',
    'Energy Management & Sustainability',
    'Waste Management Solutions',
    'Vendor Management & Coordination',
    '24/7 Emergency Response Services'
  ];

  const benefits = [
    'ISO 9001:2015 Certified',
    'Experienced Team',
    'Cost-Effective Solutions',
    'Customized Services',
    'Latest Technology',
    'Proven Track Record'
  ];

  return (
    <ServicePageLayout
      title="Facility Management Services"
      description="End-to-end solutions for maintenance, operations, and management of buildings and infrastructure tailored to your industry needs."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
