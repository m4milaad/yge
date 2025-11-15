import ServicePageLayout from '@/components/ServicePageLayout';

export default function EventManagement() {
  const icon = (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
    </svg>
  );

  const features = [
    'Corporate Event Planning & Execution',
    'Conference & Seminar Management',
    'Product Launch Events',
    'Team Building Activities',
    'Social & Cultural Events',
    'Venue Selection & Booking',
    'Catering & Hospitality Services',
    'Audio-Visual & Technical Support'
  ];

  const benefits = [
    'End-to-End Management',
    'Creative Planning',
    'Budget Optimization',
    'Vendor Coordination',
    'On-Site Management',
    'Post-Event Analysis'
  ];

  return (
    <ServicePageLayout
      title="Event Management"
      description="Professional event management services for corporate and social events. From planning to execution, we make your events memorable and successful."
      icon={icon}
      features={features}
      benefits={benefits}
    />
  );
}
