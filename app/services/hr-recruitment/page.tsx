import ServicePageLayout from '@/components/ServicePageLayout';

export default function HRRecruitment() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const features = [
    'End-to-End Recruitment Solutions',
    'Talent Acquisition & Sourcing',
    'Candidate Screening & Assessment',
    'Interview Coordination & Management',
    'Employee Onboarding & Orientation',
    'Payroll Processing & Management',
    'HR Policy Development & Implementation',
    'Performance Management Systems',
    'Employee Training & Development',
    'Compliance & Labor Law Advisory',
    'HR Consulting & Strategy',
    'Background Verification Services'
  ];

  const benefits = [
    'Experienced HR Professionals',
    'Wide Talent Network',
    'Quick Turnaround Time',
    'Cost-Effective Hiring',
    'Customized Solutions',
    'Complete Confidentiality'
  ];

  return (
    <ServicePageLayout
      title="HR & Recruitment Services"
      description="Comprehensive HR and recruitment solutions to help you find, hire, and manage the right talent for your organization's success."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
