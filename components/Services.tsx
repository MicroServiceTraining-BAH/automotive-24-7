import Link from 'next/link';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
};

const SERVICES: Service[] = [
  {
    icon: <WrenchIcon />,
    title: 'Engine Repair & Diagnostics',
    description:
      'Check engine light on? Our technicians use advanced OBD-II scanning and hands-on expertise to diagnose and fix any engine issue fast.',
    tags: ['Check Engine Light', 'Engine Rebuild', 'Timing Belts'],
  },
  {
    icon: <BrakeIcon />,
    title: 'Brakes & Suspension',
    description:
      'Don\'t compromise on safety. We service all brake systems and suspension components — pads, rotors, calipers, shocks, struts, and alignments.',
    tags: ['Brake Pads', 'Rotors', 'Alignments', 'Struts'],
  },
  {
    icon: <OilIcon />,
    title: 'Oil Change & Maintenance',
    description:
      'Quick, no-appointment oil changes, fluid flushes, filter replacements, and full preventive maintenance packages. In and out fast.',
    tags: ['Synthetic Oil', 'Fluid Flush', 'Filters', 'Tune-Up'],
  },
  {
    icon: <BodyIcon />,
    title: 'Bodywork & Collision',
    description:
      'Dents, dings, frame damage — we restore your vehicle to factory condition. Certified collision repair with precision panel work.',
    tags: ['Dent Repair', 'Frame Work', 'Collision', 'Restoration'],
  },
  {
    icon: <PaintIcon />,
    title: 'Paint & Finishing',
    description:
      'From touch-ups to full paint jobs, our paint booth delivers showroom-quality results. Color-matched to perfection every time.',
    tags: ['Full Paint', 'Touch-Up', 'Color Match', 'Clear Coat'],
  },
  {
    icon: <TransmissionIcon />,
    title: 'Transmission Service',
    description:
      'Slipping gears, rough shifts, or transmission warning lights — we diagnose and repair automatic and manual transmissions.',
    tags: ['Fluid Flush', 'Rebuild', 'Clutch', 'Automatic'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-3">What We Do</p>
            <h2
              className="font-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              FULL-SERVICE AUTO
              <br />
              <span className="text-accent">REPAIR & RESTORATION</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm font-body leading-relaxed md:text-right">
            From routine maintenance to major repairs — one shop handles everything.
            No referrals, no runaround.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-secondary/30 border border-white/5 rounded-lg">
          <div>
            <p
              className="font-display text-white text-2xl leading-none mb-1"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              DON&apos;T SEE YOUR SERVICE?
            </p>
            <p className="text-white/50 text-sm">
              We handle virtually any automotive need. Call us and we&apos;ll take care of it.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+15714287684"
              className="btn-primary text-sm"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Call Now
            </a>
            <Link
              href="/services"
              className="btn-outline text-sm"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = { service: Service; index: number };

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card-dark p-6 rounded-lg group cursor-default">
      {/* Icon */}
      <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-md flex items-center justify-center text-accent mb-5 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="font-heading font-700 text-white text-lg mb-3 tracking-wide"
        style={{ fontFamily: 'var(--font-barlow)' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-5 font-body">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-heading font-600 tracking-wider uppercase text-white/30 bg-white/5 px-2.5 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// Icons
function WrenchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
  );
}

function BrakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

function OilIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2zm-4-8c.61 0 1.09.55 1 1.16C8.83 15.31 10.02 17 12 17s3.17-1.69 3-3.84c-.09-.61.39-1.16 1-1.16.56 0 1.03.46.97 1.02C16.66 15.98 14.5 19 12 19s-4.66-3.02-4.97-5.98C6.97 12.46 7.44 12 8 12z" />
    </svg>
  );
}

function BodyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
      <circle cx="7.5" cy="14.5" r="1.5" />
      <circle cx="16.5" cy="14.5" r="1.5" />
    </svg>
  );
}

function PaintIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
    </svg>
  );
}

function TransmissionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
    </svg>
  );
}
