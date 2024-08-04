import Image from 'next/image';
import Link from 'next/link';

import Hero from '../components/Hero';
import Channels from '../components/Channels';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <div>
      <Hero />
      <section id='channels' className='channel-section pt-10 pb-10'>
      <Channels />
      </section>
      <section id='reviews' className='reviews-section pt-10 pb-10'>
      <Reviews />
      </section>
    </div>
  );
}
