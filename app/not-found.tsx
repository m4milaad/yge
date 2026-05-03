import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 p-4 md:p-8 grid-bg relative border-b-4 border-black">
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-50"></div>

      <div className="w-full max-w-3xl bg-white border-4 border-black brutal-shadow relative z-10 reveal-scale diagonal-accent p-8 md:p-16 text-center">
        
        {/* HUGE 404 TEXT */}
        <h1 className="font-display font-black text-[120px] sm:text-[180px] leading-[0.8] tracking-tighter uppercase text-black mb-6" style={{ WebkitTextStroke: '4px black', color: 'transparent' }}>
          404
        </h1>
        
        <div className="inline-block bg-accent text-white font-mono font-bold text-sm uppercase tracking-widest px-4 py-2 border-2 border-black mb-8 rotate-2">
          CRITICAL ERROR: PAGE NOT FOUND
        </div>

        <p className="font-mono text-lg mb-8 max-w-xl mx-auto border-l-4 border-black pl-4 text-left font-bold bg-gray-50 p-4">
          The requested coordinate does not exist within the YGE database. It may have been relocated, deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/" className="brutal-btn bg-black text-white hover:bg-neon hover:text-black">
            RETURN TO HQ
          </Link>
          
          <Link href="/shop/all" className="brutal-btn bg-white text-black hover:bg-accent hover:text-white">
            ACCESS DIRECTORY
          </Link>
        </div>

        {/* SYSTEM STATUS DECORATION */}
        <div className="mt-16 pt-8 border-t-4 border-black flex justify-between items-center font-mono text-xs font-bold uppercase tracking-widest text-gray-500">
          <span>SYS_OP: ERROR</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 pulse-dot inline-block"></span>
            CONNECTION LOST
          </span>
        </div>
      </div>
    </div>
  );
}
