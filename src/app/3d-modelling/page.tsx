import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { title } from '../layout';

export const metadata: Metadata = {
  title: `${title} - 3D Modelling`,
  description:
      'From sculpting to rigging, Spinn Creative has a range of 3D solutions to suit your creative projects.',
  alternates: {
      canonical: 'https://www.spinncreative.co.uk/3d-modelling',
  },
};

export default function ThreeDModelling(): JSX.Element {
    return (
        <div>
            {/* Hero Section */}
            <section className="three-d-hero flex items-center justify-center text-center">
                <div className="three-d-hero-overlay">
                    <h1 className="font-bold text-white">3D Modelling</h1>
                </div>
            </section>

            {/* 3D Design Services Section */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    3D Design Services
                </h2>
                <p className="text-base md:text-lg mb-6">
                    Step into the future of design with Spinn Creative. Our 3D
                    design services open up a world of possibilities, from
                    realistic product visualisations to immersive environments
                    and architectural renderings. Whether you’re looking to
                    showcase a product, create a virtual space, or develop
                    complex models, our 3D design experts have the skills and
                    technology to bring your ideas to life with precision and
                    creativity.
                </p>
            </section>

            {/* Our 3D Design Services Section */}
            <section className="container mx-auto px-4">
                <div className="md:flex items-center">
                    <div className="image-side w-full md:w-1/2">
                        <Image
                            src="/images/p1-3d.jpg"
                            alt="Product Visualisation"
                            layout="responsive"
                            width={1920}
                            height={1080}
                            className="rounded-lg md:rounded-r-lg"
                        />
                    </div>
                    <div className="text-side w-full md:w-1/2 flex flex-col justify-center p-4 md:p-10">
                        <div className="text-content">
                            <h3 className="text-3xl md:text-5xl font-bold mb-4">
                                Our 3D Design Services Include:
                                <span className="decorative-line"></span>
                            </h3>
                            <p className="text-base md:text-xl mb-4">
                                <strong>Product Visualisation:</strong>{' '}
                                High-quality 3D renderings that bring your
                                products to life.
                            </p>
                            <p className="text-base md:text-xl">
                                <strong>Architectural Visualisation:</strong>{' '}
                                Detailed models and renderings that visualise
                                spaces and structures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3D Modelling and Virtual Environments Section */}
            <section className="container mx-auto px-4">
                <div className="md:flex md:flex-row-reverse items-center">
                    <div className="image-side w-full md:w-1/2">
                        <Image
                            src="/images/p2-3d.jpg"
                            alt="3D Modelling"
                            layout="responsive"
                            width={1920}
                            height={1080}
                            className="rounded-lg md:rounded-l-lg"
                        />
                    </div>
                    <div className="text-side w-full md:w-1/2 flex flex-col justify-center p-4 md:p-10">
                        <div className="text-content">
                            <h3 className="text-3xl md:text-5xl font-bold mb-4">
                                3D Modelling
                                <span className="decorative-line"></span>
                            </h3>
                            <p className="text-base md:text-xl mb-4">
                                <strong>3D Modelling:</strong> Custom models for
                                any industry, from gaming to manufacturing.
                            </p>
                            <p className="text-base md:text-xl">
                                <strong>Virtual Environments:</strong> Immersive
                                3D spaces for VR experiences, simulations, and
                                more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why 3D Section */}
            <section className="container mx-auto px-4">
                <div className="md:flex items-center">
                    <div className="image-side w-full md:w-1/2">
                        <Image
                            src="/images/p3-3d.png"
                            alt="Why 3D?"
                            layout="responsive"
                            width={1920}
                            height={1080}
                            className="rounded-lg md:rounded-r-lg"
                        />
                    </div>
                    <div className="text-side w-full md:w-1/2 flex flex-col justify-center p-4 md:p-10">
                        <div className="text-content">
                            <h3 className="text-3xl md:text-5xl font-bold mb-4">
                                Why 3D?
                                <span className="decorative-line"></span>
                            </h3>
                            <p className="text-base md:text-xl">
                                3D design offers unmatched flexibility and
                                realism, allowing you to visualise and refine
                                your ideas before they go to production. Whether
                                you’re in product design, architecture, or
                                entertainment, 3D design gives you the power to
                                explore and perfect your concepts in a virtual
                                space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-10 md:py-20">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Let’s Create in 3D
                </h2>
                <p className="text-lg mb-6">
                    Ready to explore the possibilities of 3D design? Let’s
                    collaborate and turn your vision into a stunning reality.
                </p>
                <Link href="/contact-us">
                    <span className="btn-outline">
                        Get in touch with us now
                    </span>
                </Link>
            </section>
        </div>
    );
}
