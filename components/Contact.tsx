'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const SERVICES = [
  'Engine Repair & Diagnostics',
  'Brakes & Suspension',
  'Oil Change & Maintenance',
  'Bodywork & Collision',
  'Paint & Finishing',
  'Transmission Service',
  'Electrical Repair',
  'Other / Not Sure',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\+?[\d\s\-().]{7,}$/.test(form.phone))
      newErrors.phone = 'Enter a valid phone number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email address.';
    if (!form.message.trim()) newErrors.message = 'Please describe your issue or request.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState('submitting');
    // Mock submit
    await new Promise((res) => setTimeout(res, 1500));
    setState('success');
  };

  const isDisabled = state === 'submitting' || state === 'success';

  return (
    <section id="contact" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="section-label mb-3">Get In Touch</p>
            <h2
              className="font-display text-white text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-wide mb-6"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              SCHEDULE SERVICE
              <br />
              <span className="text-accent">OR CALL US NOW</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 font-body">
              Fill out the form and we&apos;ll get back to you within the hour. Or skip the wait
              and call us directly — we&apos;re always available.
            </p>

            {/* Quick contact cards */}
            <div className="space-y-3">
              <a
                href="tel:+15714287684"
                className="flex items-center gap-4 p-4 card-dark rounded-lg group"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-md flex items-center justify-center text-accent transition-colors group-hover:bg-accent group-hover:text-white shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-heading font-600 tracking-wider uppercase">
                    Call Anytime — 24/7
                  </p>
                  <p className="font-heading font-700 text-white text-lg group-hover:text-accent transition-colors">
                    (571) 428-7684
                  </p>
                </div>
                <ArrowIcon className="ml-auto text-white/20 group-hover:text-accent transition-colors" />
              </a>

              <a
                href="mailto:service@automotive247va.com"
                className="flex items-center gap-4 p-4 card-dark rounded-lg group"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-md flex items-center justify-center text-accent transition-colors group-hover:bg-accent group-hover:text-white shrink-0">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-heading font-600 tracking-wider uppercase">
                    Email Us
                  </p>
                  <p className="font-heading font-700 text-white text-sm group-hover:text-accent transition-colors break-all">
                    service@automotive247va.com
                  </p>
                </div>
                <ArrowIcon className="ml-auto text-white/20 group-hover:text-accent transition-colors shrink-0" />
              </a>

              <div className="flex items-center gap-4 p-4 card-dark rounded-lg">
                <div className="w-11 h-11 bg-green-500/10 rounded-md flex items-center justify-center text-green-400 shrink-0">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-heading font-600 tracking-wider uppercase">
                    Open Now
                  </p>
                  <p className="font-heading font-700 text-white text-sm">
                    24 Hours / 7 Days / 365 Days
                  </p>
                </div>
                <span className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse-slow shrink-0" />
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="card-dark p-8 rounded-lg">
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                  <CheckIcon />
                </div>
                <h3
                  className="font-display text-white text-3xl"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  MESSAGE SENT!
                </h3>
                <p className="text-white/50 text-sm font-body max-w-xs">
                  We&apos;ve received your request and will follow up within the hour. Or call us
                  now at{' '}
                  <a href="tel:+15714287684" className="text-accent hover:underline">
                    (571) 428-7684
                  </a>{' '}
                  for immediate assistance.
                </p>
                <button
                  onClick={() => {
                    setState('idle');
                    setForm({ name: '', phone: '', email: '', service: '', message: '' });
                  }}
                  className="btn-outline text-sm mt-2"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Service request form">
                <h3
                  className="font-display text-white text-2xl mb-6"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  REQUEST SERVICE
                </h3>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white/50 text-xs font-heading font-600 tracking-wider uppercase mb-1.5">
                      Full Name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      disabled={isDisabled}
                      placeholder="John Smith"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full bg-white/5 border rounded-md px-4 py-3 text-white placeholder-white/20 font-body text-sm transition-colors focus:outline-none focus:border-accent ${
                        errors.name ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                      } disabled:opacity-50`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-xs mt-1 font-body" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone + Email grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-white/50 text-xs font-heading font-600 tracking-wider uppercase mb-1.5">
                        Phone <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={isDisabled}
                        placeholder="(571) 000-0000"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full bg-white/5 border rounded-md px-4 py-3 text-white placeholder-white/20 font-body text-sm transition-colors focus:outline-none focus:border-accent ${
                          errors.phone ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                        } disabled:opacity-50`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-400 text-xs mt-1 font-body" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white/50 text-xs font-heading font-600 tracking-wider uppercase mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={isDisabled}
                        placeholder="john@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full bg-white/5 border rounded-md px-4 py-3 text-white placeholder-white/20 font-body text-sm transition-colors focus:outline-none focus:border-accent ${
                          errors.email ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                        } disabled:opacity-50`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-xs mt-1 font-body" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-white/50 text-xs font-heading font-600 tracking-wider uppercase mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      disabled={isDisabled}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-md px-4 py-3 text-white font-body text-sm transition-colors focus:outline-none focus:border-accent disabled:opacity-50 appearance-none"
                    >
                      <option value="" className="bg-secondary text-white">
                        Select a service...
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-secondary text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white/50 text-xs font-heading font-600 tracking-wider uppercase mb-1.5">
                      Describe Your Issue <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      disabled={isDisabled}
                      placeholder="Describe your vehicle issue, year/make/model, or what service you need..."
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full bg-white/5 border rounded-md px-4 py-3 text-white placeholder-white/20 font-body text-sm transition-colors focus:outline-none focus:border-accent resize-none ${
                        errors.message
                          ? 'border-red-500'
                          : 'border-white/10 hover:border-white/20'
                      } disabled:opacity-50`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-400 text-xs mt-1 font-body" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isDisabled}
                    className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{ fontFamily: 'var(--font-barlow)' }}
                    aria-label={state === 'submitting' ? 'Sending your request...' : 'Send service request'}
                  >
                    {state === 'submitting' ? (
                      <>
                        <Spinner />
                        Sending Your Request...
                      </>
                    ) : (
                      'Send Service Request'
                    )}
                  </button>

                  <p className="text-white/20 text-xs text-center font-body">
                    We respond within the hour. For urgent needs, call{' '}
                    <a href="tel:+15714287684" className="text-white/40 hover:text-accent transition-colors">
                      (571) 428-7684
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  );
}
