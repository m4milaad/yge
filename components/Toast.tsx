'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
      <div className="bg-black text-neon border-4 border-neon p-4 brutal-shadow !shadow-neon flex items-center gap-4 min-w-[320px]">
        <div className="w-8 h-8 bg-neon text-black flex items-center justify-center shrink-0 border-2 border-black">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div className="grow font-mono font-bold text-sm tracking-wide uppercase">
          {message}
        </div>
        
        <button
          onClick={onClose}
          className="shrink-0 w-8 h-8 bg-transparent text-neon hover:bg-neon hover:text-black border-2 border-neon hover:border-black flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
