import Hero from '@/components/Hero';
import OurServices from '@/components/OurServices';
import Jumbotron from '@/components/Jumbotron';
import type { Metadata } from 'next';
import { title, description } from './layout';

export const metadata: Metadata = {
  title: `${title} - Pushing the boundaries of visual storytelling.`,
  description: `${description}`,
  alternates: {
      canonical: 'https://www.spinncreative.co.uk',
  },
};

export default function Home(): JSX.Element {
    return (
        <>
            <Hero />
            <OurServices />
            <Jumbotron />
        </>
    );
}
