'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim() || !formData.confirmPassword.trim()) {
      alert('INCOMPLETE DATA: All fields required.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('MISMATCH: Security keys do not align.');
      return;
    }
    alert('REGISTRATION BLOCKED: System restricted by admin directives.');
  };

  return (
    <main className="grow min-h-screen flex items-center justify-center bg-gray-100 p-4 md:p-8 grid-bg relative">
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-50"></div>

      <div className="w-full max-w-lg bg-white border-4 border-black brutal-shadow relative z-10 reveal-up diagonal-accent">
        {/* Header */}
        <div className="bg-black text-white p-8 border-b-4 border-black flex justify-between items-center">
          <div>
            <h1 className="font-display font-black text-4xl uppercase text-accent tracking-tighter">Register</h1>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mt-2">Create New Entity</p>
          </div>
          <div className="w-4 h-4 bg-neon pulse-dot border-2 border-white"></div>
        </div>

        {/* Form */}
        <div className="p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6 font-mono">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                Designation (Full Name)
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="[ ENTER DESIGNATION ]"
                className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon transition-colors font-bold"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                Comm-Link (Email)
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="[ ENTER EMAIL ]"
                className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon transition-colors font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                  Security Key
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="********"
                  className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon transition-colors font-bold tracking-widest"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                  Verify Key
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="********"
                  className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-neon transition-colors font-bold tracking-widest"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full brutal-btn bg-black text-white hover:bg-accent hover:text-white py-4 mt-8 !shadow-[6px_6px_0px_0px_var(--color-accent)]"
            >
              REQUEST AUTHORIZATION
            </button>
          </form>

          <div className="mt-8 border-t-4 border-black pt-8 flex flex-col items-center gap-4">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-center">
              Already possess clearance?
            </p>
            <Link href="/login" className="brutal-btn w-full bg-white text-black border-4 border-black hover:bg-black hover:text-white !shadow-none text-sm py-3">
              Initialize Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
