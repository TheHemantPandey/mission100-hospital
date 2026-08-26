'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setEmail('');
        setMessage('Thank you for subscribing!');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <div className="space-y-4 w-full max-w-sm mt-6">
      <div className="space-y-2">
        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">
          Newsletter
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed">
          Stay updated with health tips, wellness advice, and exclusive updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative flex items-center bg-slate-900/60 rounded-xl border border-slate-800 focus-within:border-emerald-500/50 transition-all duration-300 shadow-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full bg-transparent py-3 pl-4 pr-12 text-sm text-slate-200 placeholder-slate-500 focus:outline-none rounded-xl"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-1.5 p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 flex items-center justify-center"
            aria-label="Subscribe"
          >
            {status === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
      </form>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2.5 rounded-xl transition-all duration-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3.5 py-2.5 rounded-xl transition-all duration-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
