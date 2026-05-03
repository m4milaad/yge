'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const showCustomAlert = (title: string, message: string) => {
    setModalTitle(title);
    setModalMessage(message);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      showCustomAlert('Access Denied', 'Authentication parameters incomplete.');
      return;
    }
    showCustomAlert('Unrecognized Entity', 'Credentials not found in YGE secure database. Request clearance.');
  };

  return (
    <main className="grow min-h-screen flex items-center justify-center bg-gray-100 p-4 md:p-8 grid-bg relative">
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-50"></div>

      <div className="w-full max-w-lg bg-white border-4 border-black brutal-shadow relative z-10 reveal-up diagonal-accent">
        {/* Header */}
        <div className="bg-black text-white p-8 border-b-4 border-black flex justify-between items-center">
          <div>
            <h1 className="font-display font-black text-4xl uppercase text-neon tracking-tighter">Login</h1>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mt-2">Auth Module V1.0</p>
          </div>
          <div className="w-4 h-4 bg-accent pulse-dot border-2 border-white"></div>
        </div>

        {/* Form */}
        <div className="p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6 font-mono">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                Ident Code (Email)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="[ ENTER EMAIL ]"
                className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon transition-colors font-bold"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                Security Key (Password)
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon transition-colors font-bold tracking-widest"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-bold uppercase">
              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-6 h-6 border-4 border-black bg-white group-hover:bg-neon transition-colors flex items-center justify-center">
                    <svg className="w-4 h-4 text-black hidden group-focus-within:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                </div>
                <span className="ml-3 tracking-wider">Persist Session</span>
              </label>

              <button
                type="button"
                onClick={() => showCustomAlert('Override Request', 'Contact YGE Admin -> YuvaGEntp@gmail.com / TEL: +91 8899108592')}
                className="text-accent hover:text-black hover:underline tracking-wider"
              >
                Reset Key
              </button>
            </div>

            <button
              type="submit"
              className="w-full brutal-btn bg-black text-white hover:bg-neon hover:text-black py-4 mt-8"
            >
              INITIALIZE CONNECTION
            </button>
          </form>

          <div className="mt-8 border-t-4 border-black pt-8 flex flex-col items-center gap-4">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-center">
              New to Yuva Global Enterprise?
            </p>
            <Link href="/signup" className="brutal-btn w-full bg-white text-black border-4 border-black hover:bg-black hover:text-white !shadow-none text-sm py-3">
              Request Access
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white border-4 border-black brutal-shadow max-w-sm w-full p-8 relative reveal-scale diagonal-accent">
            <div className="w-16 h-16 bg-accent border-4 border-black flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="font-display font-black text-2xl uppercase text-center mb-4">
              {modalTitle}
            </h3>
            <p className="font-mono text-sm font-bold text-center mb-8 border-l-4 border-accent pl-4 text-left">
              {modalMessage}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="brutal-btn w-full bg-black text-white hover:bg-neon hover:text-black text-sm"
            >
              ACKNOWLEDGE
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
