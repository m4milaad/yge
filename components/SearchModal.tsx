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
    { name: 'Premium Notebooks', category: 'Stationery', link: '/shop/stationery', icon: '📓' },
    { name: 'Color Pencils', category: 'Stationery', link: '/shop/stationery', icon: '✏️' },
    { name: 'Desk Organizer', category: 'Office Essentials', link: '/shop/office-essentials', icon: '🗂️' },
    { name: 'School Backpack', category: 'School Supplies', link: '/shop/school-supplies', icon: '🎒' },
    { name: 'Facility Management', category: 'Services', link: '/services/facility-management', icon: '🏢' },
    { name: 'Security Services', category: 'Services', link: '/services/security-services', icon: '🔒' },
    { name: 'Cleaning Services', category: 'Services', link: '/services/mechanized-cleaning', icon: '✨' },
    { name: 'Event Management', category: 'Services', link: '/services/event-management', icon: '🎉' },
  ];

  const searchResults = allItems.filter(
    (item) =>
      searchQuery.length > 0 &&
      (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const popularSearches = [
    { label: 'Notebooks', query: 'notebooks' },
    { label: 'Office Supplies', query: 'office' },
    { label: 'Services', query: 'services' },
    { label: 'School Items', query: 'school' },
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-900/80 dark:bg-black/90 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4 animate-fade-in" 
      onClick={onClose}
    >
      <div
        className="modern-card bg-white dark:bg-gray-800 w-full max-w-3xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products, services, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              className="grow text-lg bg-transparent border-none focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
            <button 
              onClick={onClose} 
              className="shrink-0 p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Close search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {searchQuery.length > 0 ? (
            <div className="p-4">
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 mb-3">
                    {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'}
                  </p>
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      href={result.link}
                      onClick={onClose}
                      className="group flex items-center gap-4 p-4 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                    >
                      <div className="shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {result.icon}
                      </div>
                      <div className="grow">
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {result.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {result.category}
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    No results found for &quot;{searchQuery}&quot;
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Try searching for something else
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6">
              {/* Popular Searches */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(item.query)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Quick Links
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/shop/all"
                    onClick={onClose}
                    className="group flex items-center gap-3 p-4 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-xl">
                      🛍️
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">Shop All</span>
                  </Link>
                  <Link
                    href="/services/facility-management"
                    onClick={onClose}
                    className="group flex items-center gap-3 p-4 bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-900/30 dark:hover:to-purple-800/30 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-xl">
                      🏢
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">Services</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <span className="hidden sm:flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded font-mono">ESC</kbd>
                to close
              </span>
              <span className="sm:hidden flex items-center gap-1">
                Tap X or outside to close
              </span>
            </div>
            <span className="hidden sm:inline">Press Enter to search</span>
            <span className="sm:hidden">Type to search</span>
          </div>
        </div>
      </div>
    </div>
  );
}
