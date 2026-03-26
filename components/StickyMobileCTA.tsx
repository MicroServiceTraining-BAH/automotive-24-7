'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      aria-hidden={!visible}
    >
      {/* Safe area padding for iPhone notch */}
      <div className="bg-primary/95 backdrop-blur-md border-t border-white/10 px-4 pt-3 pb-safe-bottom pb-4">
        <div className="flex gap-3">
          <a
            href="tel:+15714287684"
            className="flex-1 btn-primary justify-center py-4 text-sm min-h-[44px]"
            style={{ fontFamily: 'var(--font-barlow)' }}
            aria-label="Call Automotive 24/7 at (571) 428-7684"
          >
            <PhoneIcon />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex-1 btn-outline justify-center py-4 text-sm min-h-[44px]"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Get Service
          </Link>
        </div>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
