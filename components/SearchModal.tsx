'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus input when modal opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const allItems = [
    { name: 'Premium Notebooks', category: 'Stationery', link: '/shop/stationery', icon: 'N-BK' },
    { name: 'Color Pencils', category: 'Stationery', link: '/shop/stationery', icon: 'P-CL' },
    { name: 'Desk Organizer', category: 'Office Essentials', link: '/shop/office-essentials', icon: 'D-ORG' },
    { name: 'School Backpack', category: 'School Supplies', link: '/shop/school-supplies', icon: 'B-PK' },
    { name: 'Facility Management', category: 'Services', link: '/services/facility-management', icon: 'F-MGT' },
    { name: 'Security Services', category: 'Services', link: '/services/security-services', icon: 'S-SEC' },
    { name: 'Cleaning Services', category: 'Services', link: '/services/mechanized-cleaning', icon: 'C-CLN' },
    { name: 'Event Management', category: 'Services', link: '/services/event-management', icon: 'E-MGT' },
  ];

  const searchResults = allItems.filter(
    (item) =>
      searchQuery.length > 0 &&
      (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const popularSearches = [
    { label: 'NOTEBOOKS', query: 'notebooks' },
    { label: 'OFFICE SUPPLIES', query: 'office' },
    { label: 'SERVICES', query: 'services' },
    { label: 'SCHOOL ITEMS', query: 'school' },
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-start justify-center pt-20 px-4" 
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-gray-100 border-4 border-black brutal-shadow flex flex-col grid-bg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="bg-black text-white p-6 border-b-4 border-black flex items-center gap-4">
          <div className="w-12 h-12 bg-neon text-black flex items-center justify-center border-2 border-black shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="ENTER QUERY DIRECTIVE..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="grow bg-transparent text-white font-mono font-bold text-xl md:text-2xl outline-none placeholder:text-gray-600 uppercase tracking-widest border-b-2 border-transparent focus:border-neon transition-colors pb-1"
          />
          <button 
            onClick={onClose} 
            className="w-12 h-12 bg-white text-black hover:bg-accent hover:text-white border-2 border-black flex items-center justify-center transition-colors shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search Content */}
        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar bg-white">
          {searchQuery.length > 0 ? (
            <div className="p-6">
              {searchResults.length > 0 ? (
                <div className="space-y-4 font-mono">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px bg-black grow"></div>
                    <span className="font-bold text-xs uppercase tracking-widest text-black bg-neon px-2 border-2 border-black">
                      {searchResults.length} MATCH{searchResults.length !== 1 && 'ES'} FOUND
                    </span>
                    <div className="h-px bg-black grow"></div>
                  </div>
                  
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      href={result.link}
                      onClick={onClose}
                      className="group flex flex-col md:flex-row md:items-center gap-4 p-4 border-4 border-black hover:bg-black hover:text-white transition-colors brutal-shadow hover:translate-y-1 hover:translate-x-1 hover:!shadow-none"
                    >
                      <div className="w-16 h-16 bg-gray-100 text-black border-2 border-black flex items-center justify-center font-display font-black text-xl shrink-0 group-hover:bg-neon">
                        {result.icon}
                      </div>
                      <div className="grow">
                        <div className="font-display font-black text-2xl uppercase leading-none mb-1">
                          {result.name}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400">
                          [{result.category}]
                        </div>
                      </div>
                      <div className="hidden md:flex font-bold text-xs tracking-widest">
                        ACCESS &rarr;
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-16 flex flex-col items-center justify-center text-center diagonal-accent border-4 border-black bg-gray-50">
                  <div className="w-20 h-20 bg-black text-white flex items-center justify-center border-4 border-black mb-6">
                    <span className="font-display font-black text-5xl">?</span>
                  </div>
                  <h3 className="font-display font-black text-3xl uppercase mb-2">Null Result</h3>
                  <p className="font-mono text-sm font-bold text-gray-500">
                    Directive &quot;{searchQuery}&quot; yielded no matches in the database.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8">
              {/* Popular Searches */}
              <div className="mb-12">
                <h3 className="font-display font-black text-2xl uppercase mb-6 border-b-4 border-black pb-2 inline-block">
                  Common Queries
                </h3>
                <div className="flex flex-wrap gap-4 font-mono text-sm font-bold">
                  {popularSearches.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(item.query)}
                      className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors uppercase tracking-widest"
                    >
                      &gt; {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-display font-black text-2xl uppercase mb-6 border-b-4 border-black pb-2 inline-block">
                  Quick Access
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/shop/all"
                    onClick={onClose}
                    className="border-4 border-black p-6 hover:bg-neon transition-colors group flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-display font-black text-2xl group-hover:bg-white group-hover:text-black transition-colors">
                      S
                    </div>
                    <div>
                      <h4 className="font-display font-black text-xl uppercase leading-none">Full Catalog</h4>
                      <p className="font-mono text-xs font-bold text-gray-600 uppercase tracking-widest mt-1">Browse All Supplies</p>
                    </div>
                  </Link>
                  <Link
                    href="/business-solutions"
                    onClick={onClose}
                    className="border-4 border-black p-6 hover:bg-accent hover:text-white transition-colors group flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-display font-black text-2xl group-hover:bg-white group-hover:text-black transition-colors">
                      B
                    </div>
                    <div>
                      <h4 className="font-display font-black text-xl uppercase leading-none">B2B Services</h4>
                      <p className="font-mono text-xs font-bold text-gray-500 group-hover:text-gray-300 uppercase tracking-widest mt-1">Enterprise Solutions</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 border-t-4 border-black p-4 font-mono text-xs font-bold text-gray-500 flex justify-between items-center uppercase tracking-widest">
          <div className="flex gap-4">
            <span>[ESC] TO ABORT</span>
          </div>
          <span>YGE_DB v2.0</span>
        </div>
      </div>
    </div>
  );
}
