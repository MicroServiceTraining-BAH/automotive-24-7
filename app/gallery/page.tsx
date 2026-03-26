import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery — Automotive 24/7 | Auto Repair & Bodywork Photos Manassas VA',
  description:
    'Browse photos of auto repair, bodywork, and paint work by Automotive 24/7 in Manassas, VA. See real results from engine repairs, collision repair, and paint jobs.',
};

const GALLERY_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=900&q=75',
    alt: 'Complete engine rebuild — V6 engine work at Automotive 24/7 Manassas VA',
    category: 'Engine Rebuild',
    size: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=75',
    alt: 'Custom black paint finish on sports car',
    category: 'Paint Work',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=75',
    alt: 'Sports car restoration project',
    category: 'Restoration',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=900&q=75',
    alt: 'Auto body panel work and dent removal',
    category: 'Body Work',
    size: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=600&q=75',
    alt: 'Wheel and tire service — alloy wheel refinishing',
    category: 'Wheels & Tires',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=75',
    alt: 'Professional mechanic performing engine diagnostics',
    category: 'Diagnostics',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?w=900&q=75',
    alt: 'Technician working on suspension components',
    category: 'Suspension',
    size: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1614026480418-bd11fdb9fa78?w=600&q=75',
    alt: 'Brake service and rotor replacement',
    category: 'Brakes',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=75',
    alt: 'Oil change and preventive maintenance service',
    category: 'Maintenance',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=75',
    alt: 'Luxury vehicle detailing and paint correction',
    category: 'Detailing',
    size: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=75',
    alt: 'Collision repair before and after — front bumper damage',
    category: 'Collision Repair',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=600&q=75',
    alt: 'Interior repair and upholstery work',
    category: 'Interior',
    size: 'normal',
  },
];

const CATEGORIES = ['All', 'Engine Rebuild', 'Paint Work', 'Body Work', 'Diagnostics', 'Brakes', 'Restoration'];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=75"
            alt=""
            role="presentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <p className="section-label mb-3">Our Work</p>
          <h1
            className="font-display text-white text-[clamp(3rem,8vw,6rem)] leading-none tracking-wide mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            QUALITY YOU CAN
            <br />
            <span className="text-accent">SEE FOR YOURSELF</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg font-body leading-relaxed">
            Real work. Real results. Browse a selection of repairs, bodywork, and paint jobs
            from our Manassas shop.
          </p>
        </div>
      </section>

      {/* Category Filter - Static display */}
      <section className="py-8 bg-primary border-b border-white/5 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none" role="list" aria-label="Filter gallery by category">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className={`shrink-0 px-4 py-2 text-xs font-heading font-700 tracking-wider uppercase rounded-sm cursor-default transition-colors ${
                  cat === 'All'
                    ? 'bg-accent text-white'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-5">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid relative group overflow-hidden rounded-lg mb-3"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    item.size === 'tall' ? 'h-80' : item.size === 'wide' ? 'h-56' : 'h-56'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-heading font-700 tracking-wider uppercase text-white bg-accent px-3 py-1.5 rounded-sm">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2
            className="font-display text-white text-[clamp(2rem,6vw,4rem)] leading-none tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            READY TO GET YOUR VEHICLE
            <br />
            <span className="text-accent">LOOKING ITS BEST?</span>
          </h2>
          <p className="text-white/60 mb-8 font-body">
            Call us or request service online — we&apos;re available 24 hours a day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+15714287684"
              className="btn-primary"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Call (571) 428-7684
            </a>
            <Link
              href="/contact"
              className="btn-outline"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
