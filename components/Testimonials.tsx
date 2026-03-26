const REVIEWS = [
  {
    name: 'Marcus T.',
    location: 'Manassas, VA',
    rating: 5,
    date: '2 weeks ago',
    text: 'Blew a tire at 2am on Route 28 and these guys were the only shop open. Not only did they fix it fast, they also noticed my brakes were dangerously low and showed me the worn pads. Saved my life basically. Honest, fast, open when you need them.',
    service: 'Emergency Tire & Brake Service',
  },
  {
    name: 'Priya K.',
    location: 'Woodbridge, VA',
    rating: 5,
    date: '1 month ago',
    text: 'I brought my Honda in after another shop gave me a $3,200 estimate for "transmission issues." Automotive 24/7 diagnosed it in an hour — loose solenoid wire. $85 fix. I\'ve been coming here ever since and sending everyone I know.',
    service: 'Transmission Diagnostics',
  },
  {
    name: 'Derek W.',
    location: 'Bristow, VA',
    rating: 5,
    date: '3 weeks ago',
    text: 'Full paint job on my F-150 after a fender bender. The color match was perfect — you literally can\'t tell it was ever damaged. These guys take pride in their work. Worth every penny and done faster than promised.',
    service: 'Auto Body & Paint',
  },
  {
    name: 'Sandra M.',
    location: 'Dale City, VA',
    rating: 5,
    date: '1 month ago',
    text: 'As a single mom, finding a mechanic I can trust is crucial. Automotive 24/7 always explains everything clearly, never pushes unnecessary repairs, and their prices are fair. My whole family uses them now.',
    service: 'Oil Change & Maintenance',
  },
  {
    name: 'James R.',
    location: 'Gainesville, VA',
    rating: 5,
    date: '2 months ago',
    text: 'Had a complex electrical issue that had three other shops stumped. Automotive 24/7 figured it out in the same day and had me back on the road by evening. True professionals — they really know their stuff.',
    service: 'Electrical Diagnostics',
  },
  {
    name: 'Aaliyah C.',
    location: 'Manassas Park, VA',
    rating: 5,
    date: '3 months ago',
    text: 'Engine light came on right before a road trip. Dropped it off Sunday morning at 7am — didn\'t expect anyone to be there, but the lights were on and a tech was ready. Fixed and back home by noon. Incredible service.',
    service: 'Engine Repair',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3 justify-center flex">What Customers Say</p>
          <h2
            className="font-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            REAL REVIEWS FROM
            <br />
            <span className="text-accent">REAL CUSTOMERS</span>
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="stars text-2xl" aria-label="4.9 out of 5 stars">★★★★★</div>
            <span className="text-white font-heading font-700 text-xl">4.9</span>
            <span className="text-white/40 text-sm font-body">/ 284 Google Reviews</span>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-4 font-body">
            Join thousands of satisfied drivers across the DMV area
          </p>
          <a
            href="tel:+15714287684"
            className="btn-primary text-sm"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Book Your Service Today
          </a>
        </div>
      </div>
    </section>
  );
}

type ReviewCardProps = {
  review: {
    name: string;
    location: string;
    rating: number;
    date: string;
    text: string;
    service: string;
  };
};

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="card-dark p-6 rounded-lg flex flex-col gap-4">
      {/* Stars */}
      <div className="flex items-center justify-between">
        <div className="stars text-sm" aria-label={`${review.rating} out of 5 stars`}>
          {'★'.repeat(review.rating)}
        </div>
        <span className="text-white/20 text-xs font-body">{review.date}</span>
      </div>

      {/* Review text */}
      <blockquote className="text-white/60 text-sm leading-relaxed font-body flex-1">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Service tag */}
      <span className="text-[11px] font-heading font-600 tracking-wider uppercase text-accent/60 bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-sm self-start">
        {review.service}
      </span>

      {/* Reviewer */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-heading font-700 text-accent text-sm">
          {review.name[0]}
        </div>
        <div>
          <p className="font-heading font-700 text-white text-sm">{review.name}</p>
          <p className="text-white/30 text-xs font-body">{review.location}</p>
        </div>
        {/* Google icon */}
        <div className="ml-auto">
          <GoogleIcon />
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-label="Google Review"
      role="img"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
