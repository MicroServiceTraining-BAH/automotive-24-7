import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Location from '@/components/Location';

export const metadata: Metadata = {
  title: 'Contact Us — Automotive 24/7 | Manassas VA Auto Repair',
  description:
    'Contact Automotive 24/7 in Manassas, VA. Call (571) 428-7684 anytime — open 24/7. Request service online, get directions, and find our location in the DMV area.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/50 to-primary" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-40 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">
          <p className="section-label mb-3 justify-center flex">Get In Touch</p>
          <h1
            className="font-display text-white text-[clamp(3rem,8vw,6rem)] leading-none tracking-wide mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            WE&apos;RE ALWAYS
            <br />
            <span className="text-accent">HERE FOR YOU</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg font-body leading-relaxed mb-8">
            Need service right now? Call us. Want to schedule? Fill out the form below.
            Either way, we&apos;ll get you taken care of.
          </p>
          {/* Quick contact pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+15714287684"
              className="inline-flex items-center gap-2 bg-accent text-white font-heading font-700 tracking-wider uppercase text-sm px-6 py-3 rounded-full transition-all hover:bg-accent-dark"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              <PhoneIcon />
              (571) 428-7684
            </a>
            <a
              href="mailto:service@automotive247va.com"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-heading font-600 tracking-wider uppercase text-sm px-6 py-3 rounded-full transition-all hover:border-white/50"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              <EmailIcon />
              Email Us
            </a>
            <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 font-heading font-600 tracking-wider uppercase text-sm px-6 py-3 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-slow" />
              Open Now 24/7
            </span>
          </div>
        </div>
      </section>

      <Contact />
      <Location />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
