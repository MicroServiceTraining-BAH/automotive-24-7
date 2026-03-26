import Link from 'next/link';

const GALLERY_ITEMS = [
  {
    src: '/gallery/engine-rebuild.jpg',
    alt: 'Complete engine rebuild at Automotive 24/7 Manassas VA',
    tag: 'Engine Rebuild',
    span: 'md:col-span-2',
  },
  {
    src: '/gallery/paint-work.jpg',
    alt: 'Custom auto paint finish at Automotive 24/7',
    tag: 'Paint Work',
    span: '',
  },
  {
    src: '/gallery/restoration.jpg',
    alt: 'Full vehicle restoration project at our Manassas shop',
    tag: 'Restoration',
    span: '',
  },
  {
    src: '/gallery/body-work.jpg',
    alt: 'Auto body work before and after — dent removal and panel repair',
    tag: 'Body Work',
    span: '',
  },
  {
    src: '/gallery/wheels-and-tires.jpg',
    alt: 'Wheel and tire service — alloy wheel and off-road tire package',
    tag: 'Wheels & Tires',
    span: '',
  },
  {
    src: '/gallery/car-diagnostic.jpg',
    alt: 'Professional vehicle diagnostics and computer scan at Automotive 24/7',
    tag: 'Diagnostics',
    span: 'md:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">Our Work</p>
            <h2
              className="font-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              QUALITY YOU CAN
              <br />
              <span className="text-accent">SEE & FEEL</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="btn-outline text-sm shrink-0"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            View Full Gallery
          </Link>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-lg ${item.span} ${
                i === 0 || i === 5 ? 'h-72' : 'h-56'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Tag */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-heading font-700 tracking-wider uppercase text-white bg-accent px-3 py-1.5 rounded-sm">
                  {item.tag}
                </span>
              </div>
              {/* Zoom indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
