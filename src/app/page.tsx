import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
