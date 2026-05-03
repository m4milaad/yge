'use client';

const marqueeItems = [
  {
    text: "ISO 9001:2015 Certified: Delivering Global Standards of Quality & Excellence.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
  },
  {
    text: "'Make in India' Certified: Championing Local Innovation & Manufacturing.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><circle cx="12" cy="12" r="10"/><path d="m12 8-1.5 5H6l4 3-1.5 5L12 18l3.5 3-1.5-5 4-3h-4.5z"/></svg>
  },
  {
    text: "100% GST Compliant: Ensuring Transparent & Verified Business Transactions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
  },
  {
    text: "Officially Registered with Dept. of Labor: Committed to Ethical Business Practices.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
  },
  {
    text: "Government Recognized: Registered under Shops & Establishments Act.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><rect x="4" y="2" width="16" height="20" /><path d="M12 22V12" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M8 18h.01M16 18h.01" /></svg>
  },
  {
    text: "Your Trusted Partner for Corporate & Industrial Solutions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="m21 21-4.3-4.3" /><path d="M9 3v4" /><path d="M3 9h4" /><path d="m11.4 11.4-1.4 1.4" /><path d="M16 11V7a4 4 0 0 0-8 0v4H4v8h16v-8h-4Z" /></svg>
  }
];

export default function NewsTicker() {
  return (
    <div className="marquee-container text-2xl border-t-0 border-b-4 border-black py-2">
      <div className="marquee-content font-mono font-bold text-sm">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-3 whitespace-nowrap mx-6">
            <span className="text-neon">{item.icon}</span>
            <span className="uppercase">{item.text}</span>
            <span className="text-neon ml-4">{"//"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}