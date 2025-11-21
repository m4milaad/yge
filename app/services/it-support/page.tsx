import ServicePageLayout from '@/components/ServicePageLayout';

export default function ITSupport() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const features = [
    'Help Desk & Technical Support (24/7)',
    'Network Setup & Management',
    'System Installation & Configuration',
    'Hardware & Software Troubleshooting',
    'Data Backup & Recovery Solutions',
    'Cybersecurity & Antivirus Management',
    'IT Infrastructure Maintenance',
    'Remote & On-Site Support',
    'Annual Maintenance Contracts (AMC)',
    'Server Management & Monitoring',
    'Cloud Services & Migration',
    'IT Consulting & Strategy'
  ];

  const benefits = [
    'Certified IT Professionals',
    'Quick Response Time',
    'Cost-Effective Solutions',
    'Proactive Monitoring',
    'Scalable Services',
    'Latest Technology Stack'
  ];

  return (
    <ServicePageLayout
      title="IT Support & Technical Services"
      description="Professional IT support and technical assistance to ensure seamless business operations with minimal downtime and maximum efficiency."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
