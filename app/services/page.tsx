import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auto Repair Services — Automotive 24/7 | Manassas VA',
  description:
    'Complete auto repair services in Manassas, VA: engine diagnostics, brakes, oil changes, bodywork, paint, transmission, electrical, and more. Open 24/7. Call (571) 428-7684.',
};

type ServiceDetail = {
  category: string;
  icon: string;
  description: string;
  services: string[];
  image: string;
  imageAlt: string;
};

const SERVICE_DETAILS: ServiceDetail[] = [
  {
    category: 'Engine Repair & Diagnostics',
    icon: '🔧',
    description:
      'Your engine is the heart of your vehicle. We perform comprehensive diagnostic scans and hands-on analysis to identify and fix any engine issue — from the check engine light to full rebuilds.',
    services: [
      'Check Engine Light Diagnosis',
      'Engine Tune-Up',
      'Timing Belt / Chain Replacement',
      'Head Gasket Repair',
      'Engine Rebuild & Replacement',
      'Spark Plug Service',
      'Fuel System Cleaning',
      'Cooling System Repair',
    ],
    image: '/gallery/engine-rebuild.jpg',
    imageAlt: 'Engine repair and diagnostics at Automotive 24/7 Manassas VA',
  },
  {
    category: 'Brakes & Suspension',
    icon: '⚙️',
    description:
      'Don\'t compromise your safety. Our brake and suspension services keep you stable, in control, and stopping when you need to. We service all vehicle makes and models.',
    services: [
      'Brake Pad & Rotor Replacement',
      'Brake Fluid Flush',
      'Caliper Service & Replacement',
      'ABS System Repair',
      'Wheel Alignment',
      'Shock & Strut Replacement',
      'Ball Joint & Tie Rod Service',
      'Power Steering Repair',
    ],
    image: '/gallery/brakes-and-suspension.jpg',
    imageAlt: 'Brake and suspension service at Automotive 24/7',
  },
  {
    category: 'Oil Change & Maintenance',
    icon: '💧',
    description:
      'Regular maintenance is the best investment you can make in your vehicle. Our quick, thorough maintenance services keep your car running reliably for years to come.',
    services: [
      'Conventional & Synthetic Oil Change',
      'Multi-Point Inspection',
      'Air Filter Replacement',
      'Coolant Flush',
      'Transmission Fluid Service',
      'Differential Service',
      'Tire Rotation & Balance',
      'Battery Test & Replacement',
    ],
    image: '/gallery/Oil%20change%20%26%20service.jpg',
    imageAlt: 'Oil change and maintenance services',
  },
  {
    category: 'Bodywork & Collision',
    icon: '🚗',
    description:
      'From minor dents to major collision damage, our body shop restores your vehicle to factory condition. We work with all insurance companies and use precision frame and panel repair techniques.',
    services: [
      'Collision Repair',
      'Dent & Ding Removal',
      'Paintless Dent Repair (PDR)',
      'Frame Straightening',
      'Bumper Repair & Replacement',
      'Door Panel Work',
      'Glass Replacement',
      'Insurance Claims Assistance',
    ],
    image: '/gallery/body-work.jpg',
    imageAlt: 'Auto body and collision repair',
  },
  {
    category: 'Paint & Finishing',
    icon: '🎨',
    description:
      'Our climate-controlled paint booth delivers showroom-quality finishes. From single panel touch-ups to full vehicle repaints, we deliver color-matched perfection every time.',
    services: [
      'Full Vehicle Repaint',
      'Single Panel Paint',
      'Color Matching',
      'Clear Coat Application',
      'Rust Treatment & Primer',
      'Paint Touch-Up',
      'Custom Paint Jobs',
      'Paint Protection Advice',
    ],
    image: '/gallery/paint-work.jpg',
    imageAlt: 'Auto paint and finishing work',
  },
  {
    category: 'Transmission Service',
    icon: '⚡',
    description:
      'Transmission problems can escalate quickly. We diagnose and repair automatic and manual transmissions, from fluid services to complete rebuilds — before small issues become expensive ones.',
    services: [
      'Transmission Fluid Flush',
      'Automatic Transmission Repair',
      'Manual Transmission Service',
      'Clutch Replacement',
      'Transfer Case Service',
      'Transmission Rebuild',
      'Solenoid Replacement',
      'Differential Repair',
    ],
    image: '/gallery/transmission%20service.jpg',
    imageAlt: 'Transmission service and repair',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1614026480418-bd11fdb9fa78?w=1800&q=75"
            alt=""
            role="presentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <p className="section-label mb-3">What We Offer</p>
          <h1
            className="font-display text-white text-[clamp(3rem,8vw,6rem)] leading-none tracking-wide mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            ALL YOUR AUTO NEEDS
            <br />
            <span className="text-accent">UNDER ONE ROOF</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg font-body leading-relaxed mb-8">
            No referrals, no runaround. We handle everything from routine maintenance to
            major repairs and bodywork — all in-house, all done right.
          </p>
          <a
            href="tel:+15714287684"
            className="btn-primary"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Call for Same-Day Service
          </a>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-5 space-y-6">
          {SERVICE_DETAILS.map((service, i) => (
            <div
              key={service.category}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-white/5 ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-64 lg:h-auto min-h-[300px] overflow-hidden ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent" />
              </div>

              {/* Content */}
              <div
                className={`bg-secondary/30 p-8 lg:p-10 flex flex-col justify-center ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <span className="text-2xl mb-3" role="img" aria-hidden="true">
                  {service.icon}
                </span>
                <h2
                  className="font-display text-white text-[clamp(1.5rem,3vw,2.2rem)] leading-none tracking-wide mb-4"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  {service.category}
                </h2>
                <p className="text-white/50 text-sm font-body leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {service.services.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0" aria-hidden="true" />
                      <span className="text-white/50 text-sm font-body">{s}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+15714287684"
                  className="btn-primary self-start text-sm"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  Get This Service
                </a>
              </div>
            </div>
          ))}
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
            DON&apos;T SEE YOUR SERVICE?
          </h2>
          <p className="text-white/70 mb-8 font-body max-w-md mx-auto">
            We service virtually every make and model. Call us and we&apos;ll let you know if we
            can help — which we almost always can.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+15714287684"
              className="inline-flex items-center gap-2 bg-white text-accent font-heading font-700 tracking-wider uppercase text-sm px-8 py-4 rounded-sm transition-all hover:bg-neutral hover:scale-[1.02]"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Call Us Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-heading font-600 tracking-wider uppercase text-sm px-8 py-4 rounded-sm transition-all hover:border-white hover:bg-white/10"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
