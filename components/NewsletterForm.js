'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { event } from '@/app/lib/gtag';

export default function NewsletterForm({ minimal = false }) {
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
        event('newsletter_subscribe', { location: minimal ? 'minimal' : 'standard' });
        setStatus('success');
        setEmail('');
        setMessage('Thank you for subscribing to our newsletter!');
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
    <div className={`w-full max-w-md ${minimal ? '' : 'space-y-4 mt-6'}`}>
      {!minimal && (
        <div className="space-y-2">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Newsletter
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Stay updated with health tips, wellness advice, and exclusive updates.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative group">
        {/* Glow behind the input form on focus */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-15 group-focus-within:opacity-40 transition duration-500"></div>
        
        <div className="relative flex items-center bg-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800/80 focus-within:border-emerald-500/40 transition-all duration-300 shadow-xl">
          <div className="pl-4 text-slate-500 group-focus-within:text-emerald-500 transition-colors duration-300">
            <Mail className="h-4.5 w-4.5" />
          </div>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full bg-transparent py-3.5 pl-3 pr-14 text-sm text-slate-100 placeholder-slate-500 focus:outline-none rounded-xl font-sans"
            disabled={status === 'loading'}
          />
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-1.5 p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:from-emerald-600/40 disabled:to-teal-600/40 disabled:cursor-not-allowed text-white transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-95 flex items-center justify-center cursor-pointer"
            aria-label="Subscribe"
          >
            {status === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : (
              <Send className="h-4 w-4 text-white" />
            )}
          </button>
        </div>
      </form>

      {status === 'success' && (
        <div className="flex items-center gap-2.5 text-xs text-emerald-400 bg-emerald-500/5 backdrop-blur-sm border border-emerald-500/10 px-4 py-3 rounded-xl transition-all duration-300 mt-3 animate-fade-in">
          <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-400" />
          <span className="font-medium">{message}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2.5 text-xs text-rose-400 bg-rose-500/5 backdrop-blur-sm border border-rose-500/10 px-4 py-3 rounded-xl transition-all duration-300 mt-3 animate-fade-in">
          <AlertCircle className="h-4.5 w-4.5 shrink-0 text-rose-400" />
          <span className="font-medium">{message}</span>
        </div>
      )}
    </div>
  );
}
