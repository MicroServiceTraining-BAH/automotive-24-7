import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden noise-overlay"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=80"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        {/* Red accent glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">
        {/* Top badge */}
        <div className="flex items-center gap-2 mb-6 animate-fade-up">
          <span className="inline-flex items-center gap-1.5 bg-accent/15 border border-accent/30 text-accent font-heading font-700 tracking-[0.15em] uppercase text-xs px-3 py-1.5 rounded-sm">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow" />
            Open 24 Hours — 7 Days a Week
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-white leading-none mb-6 animate-fade-up animate-delay-100"
          style={{ fontFamily: 'var(--font-bebas)', animationFillMode: 'both' }}
        >
          <span className="block text-[clamp(3.5rem,10vw,8rem)] tracking-wide">AUTO REPAIR</span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)] tracking-wide text-accent">
            YOU CAN COUNT ON
          </span>
          <span className="block text-[clamp(1.5rem,3.5vw,2.5rem)] tracking-[0.1em] text-white/60 mt-2 font-heading font-300">
            Manassas, VA · Serving the Entire DMV
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          className="text-white/70 text-lg max-w-xl mb-10 font-body font-400 leading-relaxed animate-fade-up animate-delay-200"
          style={{ animationFillMode: 'both' }}
        >
          From engine diagnostics to full bodywork and paint — we handle it all.
          Fast turnaround, honest pricing, experienced technicians.
          <strong className="text-white font-600"> No appointment needed.</strong>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 animate-fade-up animate-delay-300"
          style={{ animationFillMode: 'both' }}
        >
          <a
            href="tel:+15714287684"
            className="btn-primary text-sm py-4 px-8 text-base"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            <PhoneIcon />
            Call (571) 428-7684
          </a>
          <Link
            href="/contact"
            className="btn-outline text-sm py-4 px-8"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Get Service Today
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10 animate-fade-up animate-delay-400"
          style={{ animationFillMode: 'both' }}
        >
          {[
            { value: '24/7', label: 'Always Open' },
            { value: '4.9★', label: '284 Reviews' },
            { value: '15+', label: 'Years Experience' },
            { value: '5,000+', label: 'Cars Serviced' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="font-display text-white text-3xl leading-none"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {stat.value}
              </span>
              <span className="text-white/40 text-xs font-heading tracking-wider uppercase font-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.2em] uppercase font-heading font-600 rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
