import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setStatus('error');
      setMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    setStatus('loading');
    
    // Simulate subscription process
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome to the SPORT KIT community! You will receive our latest kit drop alerts and club announcements.');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="relative bg-[#103D35] text-white py-16 sm:py-20 overflow-hidden border-t border-[#D2B779]/30">
      {/* Background visual motif */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 70,100 0,100" fill="#D2B779" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-[#D2B779]/20 text-[#D2B779] border border-[#D2B779]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE FOOTBALL COMMUNITY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">
          DISCOVER NEW FOOTBALL <span className="text-[#D2B779]">KIT RELEASES</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-xl mx-auto leading-relaxed">
          Be the first to hear about European club kit drops, player collection releases, and authentic jersey showcases. No spam, just pure football passion.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2.5 bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
            <div className="relative flex-1 flex items-center">
              <Mail className="absolute left-3.5 w-5 h-5 text-[#D2B779]" />
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D2B779]"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#702B3D] hover:bg-[#8C374D] disabled:opacity-60 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 shrink-0 hover:scale-105 active:scale-95"
            >
              {status === 'loading' ? (
                <span className="inline-block animate-spin">⚪</span>
              ) : (
                <>
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-4 h-4 text-[#D2B779]" />
                </>
              )}
            </button>
          </div>

          {/* Validation Feedback */}
          {status === 'error' && (
            <div className="mt-3 inline-flex items-center gap-2 text-rose-300 text-xs font-semibold bg-rose-950/40 px-3 py-1.5 rounded-lg border border-rose-500/30">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {status === 'success' && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-950/60 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-medium flex items-center gap-3 text-left">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <span>{message}</span>
            </div>
          )}
        </form>

        <p className="mt-4 text-[11px] text-gray-300">
          By subscribing you agree to receive showcase updates from SPORT KIT. You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
