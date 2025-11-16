// Central export file for all data
export * from './services';
export * from './products';
export * from './company';
export * from './testimonials';

// Color utility for service cards
export const getColorClasses = (color: string) => {
  const colors: { [key: string]: { bg: string; text: string; hover: string; border: string } } = {
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', hover: 'hover:border-purple-500', border: 'border-purple-200 dark:border-purple-800' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', hover: 'hover:border-blue-500', border: 'border-blue-200 dark:border-blue-800' },
    red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', hover: 'hover:border-red-500', border: 'border-red-200 dark:border-red-800' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', hover: 'hover:border-green-500', border: 'border-green-200 dark:border-green-800' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', hover: 'hover:border-orange-500', border: 'border-orange-200 dark:border-orange-800' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400', hover: 'hover:border-yellow-500', border: 'border-yellow-200 dark:border-yellow-800' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', hover: 'hover:border-indigo-500', border: 'border-indigo-200 dark:border-indigo-800' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', hover: 'hover:border-teal-500', border: 'border-teal-200 dark:border-teal-800' },
    pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', hover: 'hover:border-pink-500', border: 'border-pink-200 dark:border-pink-800' },
    cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400', hover: 'hover:border-cyan-500', border: 'border-cyan-200 dark:border-cyan-800' },
    amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', hover: 'hover:border-amber-500', border: 'border-amber-200 dark:border-amber-800' },
    rose: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', hover: 'hover:border-rose-500', border: 'border-rose-200 dark:border-rose-800' }
  };
  return colors[color] || colors.purple;
};
