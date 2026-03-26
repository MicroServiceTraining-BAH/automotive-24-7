import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-5">
        <p
          className="font-display text-accent text-[clamp(6rem,20vw,14rem)] leading-none"
          style={{ fontFamily: 'var(--font-bebas)' }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          className="font-display text-white text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-wide -mt-4 mb-4"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          PAGE NOT FOUND
        </h1>
        <p className="text-white/40 font-body mb-8 max-w-sm mx-auto">
          Looks like this page hit a dead end. Let&apos;s get you back on the road.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="btn-primary text-sm"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Back to Home
          </Link>
          <a
            href="tel:+15714287684"
            className="btn-outline text-sm"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
