import Link from 'next/link';

const TRUST_POINTS = [
  {
    icon: '🕐',
    title: '24/7 Availability',
    description: 'Breakdowns don\'t follow a 9-to-5 schedule. Neither do we. We\'re here around the clock, every day of the year.',
  },
  {
    icon: '💰',
    title: 'Honest Pricing',
    description: 'Upfront estimates with no hidden fees. We explain every charge before we do the work. No surprises.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Most repairs completed same day. We know you need your vehicle back — we work efficiently without cutting corners.',
  },
  {
    icon: '🏆',
    title: 'Certified Technicians',
    description: 'Our team holds ASE certifications and brings 15+ years of combined hands-on experience to every job.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative h-64 rounded-lg overflow-hidden img-overlay">
                <img
                  src="https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?w=900&q=75"
                  alt="Automotive 24/7 technician working on a car engine in our Manassas shop"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden img-overlay">
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=75"
                  alt="Professional auto repair tools and equipment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden img-overlay">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75"
                  alt="Auto body and paint work at Automotive 24/7"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-accent text-white p-5 rounded-lg shadow-xl shadow-accent/30 text-center">
              <p
                className="font-display text-4xl leading-none"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                15+
              </p>
              <p className="font-heading font-700 text-xs tracking-wider uppercase mt-1">
                Years Serving
                <br />
                the DMV
              </p>
            </div>

            {/* Accent corner decoration */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
          </div>

          {/* Right — Content */}
          <div>
            <p className="section-label mb-3">About Us</p>
            <h2
              className="font-display text-white text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-wide mb-6"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              MANASSAS&apos; MOST TRUSTED
              <br />
              <span className="text-accent">AUTO REPAIR SHOP</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-6 font-body">
              Automotive 24/7 was built on one simple idea: people deserve a reliable mechanic
              they can trust at any hour. We opened our doors in Manassas, VA over 15 years ago
              and have served thousands of drivers across the DMV ever since.
            </p>
            <p className="text-white/60 leading-relaxed mb-10 font-body">
              Our team of certified technicians handles everything from quick oil changes and
              brake jobs to complete engine rebuilds and showroom-quality paint work — all under
              one roof, available around the clock. No appointment, no hassle.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {TRUST_POINTS.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <span className="text-xl shrink-0 mt-0.5" role="img" aria-hidden="true">
                    {point.icon}
                  </span>
                  <div>
                    <h3 className="font-heading font-700 text-white text-sm tracking-wide mb-1">
                      {point.title}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed font-body">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link
                href="/about"
                className="btn-primary text-sm"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                Our Story
              </Link>
              <a
                href="tel:+15714287684"
                className="btn-outline text-sm"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
