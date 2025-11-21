'use client';

export default function NewsTicker() {
  const newsItems = [
    "🏆 ISO 9001:2015 Certified: Delivering Global Standards of Quality & Excellence.",
    "🇮🇳 Proudly 'Make in India' Certified: Championing Local Innovation & Manufacturing.",
    "✅ 100% GST Compliant: Ensuring Transparent & Verified Business Transactions.",
    "⚖️ Officially Registered with Dept. of Labor: Committed to Ethical Business Practices.",
    "🏢 Government Recognized: Registered under Shops & Establishments Act.",
    "✨ Your Trusted Partner for Corporate & Industrial Solutions.",
  ];

  return (
    <div className="relative bg-orange-600 dark:bg-orange-500 text-black overflow-hidden z-40 border-b border-orange-700 dark:border-orange-900">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          display: flex;
          min-width: 200%;
        }
        .ticker-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex items-center h-10 ticker-container">
        
        {/* Static Badge on the Left - Darker Orange background */}
        <div className="hidden sm:flex items-center justify-center h-full px-6 bg-orange-600 dark:bg-orange-600 font-bold text-xs tracking-wider shadow-lg relative z-10 shrink-0">
          YGE Glimpse
          {/* Arrow color updated to match badge */}
          <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-orange-600 dark:border-l-orange-600"></div>
        </div>

        {/* Scrolling Content Wrapper */}
        <div className="flex overflow-hidden w-full relative">
          {/* Gradient masks updated to orange to blend properly */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-orange-600 dark:from-orange-500 to-transparent z-10 sm:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-orange-600 dark:from-orange-500 to-transparent z-10"></div>

          {/* The Animated Track */}
          <div className="animate-marquee items-center whitespace-nowrap">
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={index} className="flex items-center mx-8">
                {/* Separator updated to match orange theme */}
                <span className="text-orange-800 dark:text-orange-950 mx-3 text-xs">|</span>
                <span className="text-sm font-medium tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
} 