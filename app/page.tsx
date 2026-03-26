import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Automotive 24/7 | 24-Hour Auto Repair in Manassas, VA',
  description:
    'Automotive 24/7 — Manassas, VA\'s trusted 24-hour auto repair shop. Engine diagnostics, brakes, oil changes, bodywork, and paint. Open 24/7, no appointment needed. Call (571) 428-7684.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <Location />
      <Contact />
    </>
  );
}
