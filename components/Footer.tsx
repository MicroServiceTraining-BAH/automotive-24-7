import Link from 'next/link';

const SERVICES_LINKS = [
  'Engine Repair & Diagnostics',
  'Brakes & Suspension',
  'Oil Change & Maintenance',
  'Bodywork & Collision',
  'Paint & Finishing',
  'Transmission Service',
];

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5 relative overflow-hidden">
      {/* Top CTA band */}
      <div className="bg-accent py-10">
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="font-display text-white text-[clamp(1.5rem,4vw,2.5rem)] leading-none"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              NEED SERVICE RIGHT NOW?
            </p>
            <p className="text-white/70 text-sm font-body mt-1">
              We&apos;re open 24 hours — call anytime, no appointment needed.
            </p>
          </div>
          <a
            href="tel:+15714287684"
            className="inline-flex items-center gap-2 bg-white text-accent font-heading font-700 tracking-wider uppercase text-sm px-8 py-4 rounded-sm transition-all duration-200 hover:bg-neutral hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            <PhoneIcon />
            (571) 428-7684
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group" aria-label="Automotive 24/7 Home">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center font-display text-white text-xl leading-none">
                A
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-display text-white text-xl tracking-wider"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  AUTOMOTIVE
                </span>
                <span
                  className="font-display text-accent text-base tracking-[0.3em]"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  24/7
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm font-body leading-relaxed mb-6">
              Manassas, VA&apos;s most trusted auto repair shop. Open 24 hours, 7 days a week.
              Expert service, honest pricing, fast turnaround.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="stars text-sm" aria-label="4.9 star rating">★★★★★</div>
              <span className="text-white/40 text-xs font-body">4.9 · 284 Reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-heading font-700 text-white tracking-wider uppercase text-xs mb-5"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/40 hover:text-white text-sm font-body transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="font-heading font-700 text-white tracking-wider uppercase text-xs mb-5"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-heading font-700 text-white tracking-wider uppercase text-xs mb-5"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="tel:+15714287684"
                  className="text-white/40 hover:text-accent text-sm font-body transition-colors block"
                >
                  (571) 428-7684
                </a>
              </li>
              <li>
                <a
                  href="mailto:service@automotive247va.com"
                  className="text-white/40 hover:text-accent text-sm font-body transition-colors break-all block"
                >
                  service@automotive247va.com
                </a>
              </li>
              <li>
                <span className="text-white/40 text-sm font-body">Manassas, VA 20110</span>
              </li>
              <li className="flex items-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" aria-hidden="true" />
                <span className="text-green-400 text-xs font-heading font-600 tracking-wider uppercase">
                  Open Now · 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs font-body text-center sm:text-left">
            © {new Date().getFullYear()} Automotive 24/7 · Manassas, VA · All rights reserved.
          </p>
          <a
            href="https://lvluplocal.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-white/50 text-xs font-body transition-colors"
          >
            Made by Level Up Local
          </a>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
