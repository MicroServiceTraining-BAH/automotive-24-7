export default function Location() {
  return (
    <section id="location" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3 justify-center flex">Find Us</p>
          <h2
            className="font-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            CONVENIENTLY LOCATED IN
            <br />
            <span className="text-accent">MANASSAS, VIRGINIA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Map */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden h-80 lg:h-auto relative border border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49914.05834766!2d-77.50779!3d38.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6481958c94e23%3A0xb7c7a0e9ddee0cb!2sManassas%2C%20VA!5e0!3m2!1sen!2sus!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Automotive 24/7 location in Manassas, VA"
              className="min-h-[320px]"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Hours card */}
            <div className="card-dark p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
                <span className="font-heading font-700 text-green-400 text-sm tracking-wider uppercase">
                  Open Now — 24/7
                </span>
              </div>
              <h3
                className="font-display text-white text-2xl leading-none mb-4"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                HOURS OF OPERATION
              </h3>
              <div className="space-y-2">
                {[
                  { days: 'Monday – Friday', hours: '24 Hours' },
                  { days: 'Saturday', hours: '24 Hours' },
                  { days: 'Sunday', hours: '24 Hours' },
                  { days: 'Holidays', hours: '24 Hours' },
                ].map((row) => (
                  <div key={row.days} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-white/50 text-sm font-body">{row.days}</span>
                    <span className="font-heading font-700 text-accent text-sm tracking-wide">
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="card-dark p-6 rounded-lg space-y-4">
              <h3
                className="font-display text-white text-2xl leading-none"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                CONTACT & LOCATION
              </h3>
              {[
                {
                  icon: <MapIcon />,
                  label: 'Address',
                  value: 'Manassas, VA 20110',
                  href: 'https://maps.google.com/?q=Manassas+VA',
                },
                {
                  icon: <PhoneIcon />,
                  label: 'Phone',
                  value: '(571) 428-7684',
                  href: 'tel:+15714287684',
                },
                {
                  icon: <EmailIcon />,
                  label: 'Email',
                  value: 'service@automotive247va.com',
                  href: 'mailto:service@automotive247va.com',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 group"
                  target={item.label === 'Address' ? '_blank' : undefined}
                  rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-9 h-9 bg-accent/10 rounded-md flex items-center justify-center text-accent shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-[11px] font-heading font-600 tracking-wider uppercase">
                      {item.label}
                    </p>
                    <p className="text-white text-sm font-body group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Directions CTA */}
            <a
              href="https://maps.google.com/?q=Manassas+VA+Auto+Repair"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-sm"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
