import ServicePageLayout from '@/components/ServicePageLayout';

export default function GeneralOrderSupplies() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );

  const features = [
    'Office Supplies in Bulk Quantities',
    'Cleaning & Maintenance Supplies',
    'Safety Equipment & PPE',
    'Pantry & Kitchen Supplies',
    'Stationery Products',
    'Custom Order Fulfillment',
    'Inventory Management Support',
    'Timely Delivery Services'
  ];

  const benefits = [
    'Competitive Pricing',
    'Quality Products',
    'Bulk Discounts',
    'Reliable Supply Chain',
    'One-Stop Solution',
    'Flexible Payment Terms'
  ];

  return (
    <ServicePageLayout
      title="General Order Supplies"
      description="Bulk supply solutions for all your business needs with a wide range of products, timely delivery, and competitive pricing."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
