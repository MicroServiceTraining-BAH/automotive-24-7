const MARQUEE_ITEMS = [
  '★ 4.9 Google Rating',
  '✓ Open 24 Hours',
  '✓ No Appointment Needed',
  '★ 284 Five-Star Reviews',
  '✓ Honest Pricing Guaranteed',
  '✓ Fast Turnaround',
  '✓ Licensed & Insured',
  '★ Serving Manassas Since 2009',
  '✓ Free Diagnostic Estimates',
  '★ Family Owned & Operated',
];

export default function TrustStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      className="relative bg-accent py-4 overflow-hidden"
      aria-label="Trust signals"
    >
      <div className="marquee-container">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 mx-8 text-white font-heading font-700 tracking-wider uppercase text-sm whitespace-nowrap"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              {item}
              <span className="text-white/40 text-xs">|</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
