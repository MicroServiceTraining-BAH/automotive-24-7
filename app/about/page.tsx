import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Automotive 24/7 | Manassas VA Auto Repair',
  description:
    'Learn about Automotive 24/7 — Manassas, VA\'s trusted 24-hour auto repair shop. 15+ years experience, ASE-certified technicians, honest pricing, and fast turnaround.',
};

const TEAM = [
  {
    name: 'Carlos R.',
    role: 'Lead Technician & Owner',
    experience: '18 years',
    specialty: 'Engine & Drivetrain',
    certifications: 'ASE Master Certified',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Tony M.',
    role: 'Body & Paint Specialist',
    experience: '14 years',
    specialty: 'Bodywork & Paint',
    certifications: 'I-CAR Gold Class',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Darius P.',
    role: 'Diagnostics Technician',
    experience: '10 years',
    specialty: 'Electrical & Diagnostics',
    certifications: 'ASE A6, A8 Certified',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Miguel S.',
    role: 'Service Advisor',
    experience: '8 years',
    specialty: 'Customer Relations',
    certifications: 'ASE Service Consultant',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
];

const VALUES = [
  {
    num: '01',
    title: 'Radical Transparency',
    body: 'We show you the problem before we fix it. Written estimates, no hidden fees, and a full explanation of every charge — always.',
  },
  {
    num: '02',
    title: '24/7 Availability',
    body: 'Emergencies don\'t wait for business hours. Our shop is staffed and ready to help you at midnight, 3am, or whenever you need us.',
  },
  {
    num: '03',
    title: 'Quality Over Speed',
    body: 'We work fast because we\'re skilled — not because we cut corners. Every repair meets manufacturer specs.',
  },
  {
    num: '04',
    title: 'Community First',
    body: 'Manassas is our home. We\'ve built our reputation one honest repair at a time, and we plan to keep it that way.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden noise-overlay">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?w=1800&q=75"
            alt=""
            role="presentation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <p className="section-label mb-3">About Us</p>
          <h1
            className="font-display text-white text-[clamp(3rem,8vw,6rem)] leading-none tracking-wide mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            THE SHOP MANASSAS
            <br />
            <span className="text-accent">DEPENDS ON</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg font-body leading-relaxed">
            We opened Automotive 24/7 over 15 years ago because we believed drivers deserved a
            mechanic they could trust at any hour. That belief hasn&apos;t changed.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Our Story</p>
              <h2
                className="font-display text-white text-[clamp(2rem,4vw,3rem)] leading-none tracking-wide mb-8"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                BUILT FOR DRIVERS,
                <br />
                <span className="text-accent">NOT JUST BUSINESS HOURS</span>
              </h2>
              <div className="space-y-4 text-white/60 font-body leading-relaxed">
                <p>
                  Automotive 24/7 was founded in Manassas, VA with one simple mission: give every
                  driver — whether it&apos;s rush hour on I-66 or 2am on Route 28 — access to fast,
                  honest, expert auto repair.
                </p>
                <p>
                  Our founder Carlos spent years watching friends and family get taken advantage of
                  by shops that overcharged, underdelivered, and left people stranded when they
                  needed help most. He built Automotive 24/7 to be different.
                </p>
                <p>
                  Today, we&apos;ve serviced over 5,000 vehicles across the DMV. We have earned
                  4.9 stars across 284 Google reviews — not through marketing, but through
                  word-of-mouth from customers who trusted us and came back.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=75"
                alt="Automotive 24/7 shop interior in Manassas, VA"
                className="rounded-lg w-full h-80 lg:h-[480px] object-cover"
                loading="lazy"
              />
              {/* Stat overlay */}
              <div className="absolute -bottom-6 -left-6 bg-primary border border-white/10 p-5 rounded-lg">
                <div className="flex gap-6">
                  {[
                    { v: '5K+', l: 'Cars Serviced' },
                    { v: '4.9★', l: 'Google Rating' },
                    { v: '15+', l: 'Years Open' },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <p
                        className="font-display text-accent text-2xl leading-none"
                        style={{ fontFamily: 'var(--font-bebas)' }}
                      >
                        {s.v}
                      </p>
                      <p className="text-white/30 text-[11px] font-heading font-600 tracking-wider uppercase mt-1">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/20 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-16">
            <p className="section-label mb-3 justify-center flex">What We Stand For</p>
            <h2
              className="font-display text-white text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-wide"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              OUR VALUES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div key={v.num} className="card-dark p-8 rounded-lg flex gap-6">
                <span
                  className="font-display text-accent/20 text-5xl leading-none shrink-0"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                  aria-hidden="true"
                >
                  {v.num}
                </span>
                <div>
                  <h3
                    className="font-heading font-700 text-white text-lg mb-3"
                    style={{ fontFamily: 'var(--font-barlow)' }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-white/50 text-sm font-body leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <p className="section-label mb-3 justify-center flex">Who We Are</p>
            <h2
              className="font-display text-white text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-wide"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              MEET THE TEAM
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((member) => (
              <div key={member.name} className="card-dark rounded-lg overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.img}
                    alt={`${member.name}, ${member.role} at Automotive 24/7`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" />
                </div>
                <div className="p-5">
                  <h3
                    className="font-heading font-700 text-white text-base"
                    style={{ fontFamily: 'var(--font-barlow)' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-accent text-xs font-heading font-600 tracking-wide uppercase mt-0.5">
                    {member.role}
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-white/30 text-xs font-body">{member.experience} experience</p>
                    <p className="text-white/30 text-xs font-body">{member.certifications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2
            className="font-display text-white text-[clamp(2rem,6vw,4rem)] leading-none tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            READY TO MEET YOUR NEW
            <br />
            FAVORITE MECHANIC?
          </h2>
          <p className="text-white/70 mb-8 font-body">
            Experience the difference honest, expert auto repair makes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+15714287684"
              className="inline-flex items-center gap-2 bg-white text-accent font-heading font-700 tracking-wider uppercase text-sm px-8 py-4 rounded-sm transition-all hover:bg-neutral hover:scale-[1.02]"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Call (571) 428-7684
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-heading font-600 tracking-wider uppercase text-sm px-8 py-4 rounded-sm transition-all hover:border-white hover:bg-white/10"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
