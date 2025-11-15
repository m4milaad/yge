import ServicePageLayout from '@/components/ServicePageLayout';

export default function AdminServices() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const features = [
    'Document Management & Archiving',
    'Data Entry & Processing Services',
    'Record Keeping & Maintenance',
    'Office Administration Support',
    'Reception & Front Desk Services',
    'Mail & Courier Management',
    'Appointment Scheduling',
    'Database Management'
  ];

  const benefits = [
    'Streamlined Operations',
    'Cost Reduction',
    'Improved Efficiency',
    'Professional Staff',
    'Confidentiality Assured',
    'Flexible Solutions'
  ];

  return (
    <ServicePageLayout
      title="Administrative Services"
      description="Comprehensive administrative support services including documentation and record-keeping to streamline your processes and boost productivity."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
