'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Automotive 24/7 — Home"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center font-display text-white text-lg leading-none transition-transform group-hover:scale-105">
                A
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full opacity-60" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-display text-white text-xl tracking-wider leading-none"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                AUTOMOTIVE
              </span>
              <span
                className="font-display text-accent text-base tracking-[0.3em] leading-none"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                24/7
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white font-heading font-600 tracking-wider uppercase text-xs transition-colors duration-200 relative group"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15714287684"
              className="flex items-center gap-2 text-white/70 hover:text-white font-heading font-600 tracking-wider text-xs uppercase transition-colors duration-200"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              <PhoneIcon />
              (571) 428-7684
            </a>
            <a
              href="tel:+15714287684"
              className="btn-primary text-xs py-3 px-5"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 focus-visible:outline-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-primary transition-all duration-400 flex flex-col ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="pt-24 px-6 flex flex-col gap-1 flex-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-4 border-b border-white/5 font-display text-4xl text-white hover:text-accent transition-all duration-200 ${
                menuOpen ? 'animate-fade-up' : ''
              }`}
              style={{
                fontFamily: 'var(--font-bebas)',
                animationDelay: `${i * 60}ms`,
                animationFillMode: 'both',
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="tel:+15714287684"
              className="btn-primary justify-center text-base py-4"
              style={{ fontFamily: 'var(--font-barlow)' }}
              onClick={() => setMenuOpen(false)}
            >
              <PhoneIcon />
              Call (571) 428-7684
            </a>
            <a
              href="mailto:service@automotive247va.com"
              className="btn-outline justify-center text-xs py-4"
              style={{ fontFamily: 'var(--font-barlow)' }}
              onClick={() => setMenuOpen(false)}
            >
              service@automotive247va.com
            </a>
          </div>
        </div>

        <div className="px-6 pb-10 text-white/20 text-xs font-heading tracking-wider uppercase">
          Open 24 Hours — Manassas, VA
        </div>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
