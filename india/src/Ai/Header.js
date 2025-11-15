import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { streamText, generateText } from '../services/geminiService';

// Responsive, sticky header with blurred translucent background and scroll shadow
// Includes a Gemini streaming area below with a typing effect

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Features', to: '/features' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hasKey = Boolean(process.env.REACT_APP_GEMINI_API_KEY);
  const [errorMsg, setErrorMsg] = useState('');

  // no-op usage to satisfy lint without altering behavior
  void isStreaming;
  void errorMsg;

  // Debug: log env detection once
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('[Header] VITE_GEMINI_API_KEY present:', hasKey);
  }, [hasKey]);

  // Typing effect states
  const [displayText, setDisplayText] = useState('');
  const bufferRef = useRef('');
  const typingTimerRef = useRef(null);
  const mountedRef = useRef(false);

  // Sticky header shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasKey]);

  // Gemini streaming with typing effect
  useEffect(() => {
    mountedRef.current = true;

    // Kick off streaming on mount
    const prompt = 'Welcome to Now What AI, your intelligent assistant. Ask me anything below to get started.';

    let cancel = false;
    (async () => {
      setIsStreaming(true);
      try {
        if (hasKey) {
          setErrorMsg('');
          await streamText(prompt, (chunk) => {
            if (!mountedRef.current || cancel) return;
            bufferRef.current += chunk;
          });
        } else {
          // Local mock typing fallback without API key
          const mock = 'Welcome to Now What AI — add VITE_GEMINI_API_KEY in your .env to enable live AI answers. You can still type below to see the typing effect.';
          bufferRef.current += mock;
        }
      } catch (err) {
        console.warn('Gemini stream error:', err?.message || err);
        setErrorMsg(err?.message || 'Streaming failed');
        // Fallback to non-streaming generation
        try {
          const full = await generateText(prompt);
          if (mountedRef.current) bufferRef.current += full || '';
        } catch (e2) {
          bufferRef.current += '\n(Note: AI streaming is unavailable. Add VITE_GEMINI_API_KEY in .env to enable.)';
        }
      } finally {
        setIsStreaming(false);
      }
    })();

    // Typing effect timer
    typingTimerRef.current = setInterval(() => {
      if (!mountedRef.current) return;
      if (bufferRef.current.length > 0) {
        // Reveal a few characters at a time for smoothness
        const step = Math.max(1, Math.min(3, bufferRef.current.length));
        const next = bufferRef.current.slice(0, step);
        bufferRef.current = bufferRef.current.slice(step);
        setDisplayText((prev) => prev + next);
      }
    }, 30);

    return () => {
      mountedRef.current = false;
      cancel = true;
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, [hasKey]);

  return (
    <div className="relative">
      {/* Header Bar */}
      <header
        className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 transition-shadow ${
          isScrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 shadow-soft flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                Now What AI
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ y: -1 }}>
                  <Link
                    to={item.to}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
              >
                Get Started
              </motion.button>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <motion.button
                aria-label="Toggle Menu"
                onClick={() => setMobileOpen((v) => !v)}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 shadow-sm ring-1 ring-black/5"
              >
                <div className="space-y-1.5">
                  <span className={`block h-0.5 w-5 bg-gray-800 transition-all ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                  <span className={`block h-0.5 w-5 bg-gray-800 transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 w-5 bg-gray-800 transition-all ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              className="md:hidden overflow-hidden border-t border-black/5 bg-white/70 backdrop-blur"
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-black/5"
                  >
                    {item.name}
                  </Link>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-sm font-semibold text-white shadow-soft"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Streaming Output */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-black/5 bg-white/60 backdrop-blur p-4 shadow-sm">
          <p className="text-sm text-gray-700 leading-7 whitespace-pre-wrap">
            {displayText}
            <span className="inline-block w-2 animate-pulse bg-gray-600 ml-1" style={{ height: '1em', transform: 'translateY(2px)' }} />
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
