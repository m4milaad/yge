import ServicePageLayout from '@/components/ServicePageLayout';

export default function CanteenCatering() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );

  const features = [
    'Daily Canteen Operations & Management',
    'Menu Planning & Nutritional Guidance',
    'Corporate Event Catering',
    'Food Safety & Hygiene Standards',
    'Customized Meal Plans',
    'Vending Machine Services',
    'Pantry Management',
    'Quality Control & Monitoring'
  ];

  const benefits = [
    'Nutritious Meals',
    'FSSAI Certified',
    'Flexible Menu Options',
    'Competitive Pricing',
    'Hygiene Standards',
    'Timely Service'
  ];

  return (
    <ServicePageLayout
      title="Canteen & Catering Services"
      description="Professional canteen management and catering services providing nutritious meals, efficient operations, and exceptional service for your organization."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
