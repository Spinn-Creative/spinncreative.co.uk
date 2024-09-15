import GraphicsClient from '@/components/GraphicsClient';
import type { Metadata } from 'next';
import { title } from '../layout';

export const metadata: Metadata = {
  title: `${title} - Graphics`,
  description:
      'Whether it is concept art, illustration or graphic design, Spinn Creative has a range of 2D solutions to suit your creative projects.',
  alternates: {
      canonical: 'https://www.spinncreative.co.uk/graphics',
  },
};

export default function GraphicsPage(): JSX.Element {
  return (
    <div>
      <GraphicsClient /> {/* Render client-side logic here */}
    </div>
  );
}
