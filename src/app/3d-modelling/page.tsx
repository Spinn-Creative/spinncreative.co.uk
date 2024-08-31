import Link from 'next/link';
import Image from 'next/image';

export default function ThreeDModelling() {
  return (
    <div>
      {/* Hero Section */}
      <section className='three-d-hero flex items-center justify-center text-center'>
        <div className='three-d-hero-overlay'>
          <h1 className='text-6xl font-bold text-white'>3D Modelling</h1>
        </div>
      </section>

      {/* 3D Design Services Section */}
      <section className='three-d-section-container'>
        <h2 className='text-4xl font-bold mb-4'>3D Design Services</h2>
        <p className='text-lg mb-6'>
          Step into the future of design with Spinn Creative. Our 3D design services open up a world of possibilities, from realistic product visualisations to immersive environments and architectural renderings. Whether you’re looking to showcase a product, create a virtual space, or develop complex models, our 3D design experts have the skills and technology to bring your ideas to life with precision and creativity.
        </p>
      </section>

      {/* Our 3D Design Services Section */}
      <section className='full-width-section'>
        <div className='image-text-pair'>
          <div className='image-side left'>
            <Image 
              src='/images/p1-3d.jpg' 
              alt='Product Visualisation' 
              layout='responsive'
              width={1920} 
              height={1080} 
              className='rounded-r-lg'
            />
          </div>
          <div className='text-side right flex flex-col justify-center items-center p-10'>
            <div className='text-content'>
              <h3 className='text-5xl font-bold mb-4 relative'>
                Our 3D Design Services Include:
                <span className='decorative-line'></span>
              </h3>
              <p className='text-xl mb-4'>
                <strong>Product Visualisation:</strong> High-quality 3D renderings that bring your products to life.
              </p>
              <p className='text-xl'>
                <strong>Architectural Visualisation:</strong> Detailed models and renderings that visualise spaces and structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Modelling and Virtual Environments Section */}
      <section className='full-width-section'>
        <div className='image-text-pair'>
          <div className='text-side left flex flex-col justify-center items-center p-10'>
            <div className='text-content'>
              <h3 className='text-5xl font-bold mb-4 relative'>
                3D Modelling
                <span className='decorative-line'></span>
              </h3>
              <p className='text-xl mb-4'>
                <strong>3D Modelling:</strong> Custom models for any industry, from gaming to manufacturing.
              </p>
              <p className='text-xl'>
                <strong>Virtual Environments:</strong> Immersive 3D spaces for VR experiences, simulations, and more.
              </p>
            </div>
          </div>
          <div className='image-side right'>
            <Image 
              src='/images/p2-3d.jpg' 
              alt='3D Modelling' 
              layout='responsive'
              width={1920} 
              height={1080} 
              className='rounded-l-lg'
            />
          </div>
        </div>
      </section>

      {/* Why 3D Section */}
      <section className='full-width-section'>
        <div className='image-text-pair'>
          <div className='image-side left'>
            <Image 
              src='/images/p3-3d.png' 
              alt='Why 3D?' 
              layout='responsive'
              width={1920} 
              height={1080} 
              className='rounded-r-lg'
            />
          </div>
          <div className='text-side right flex flex-col justify-center items-center p-10'>
            <div className='text-content'>
              <h3 className='text-5xl font-bold mb-4 relative'>
                Why 3D?
                <span className='decorative-line'></span>
              </h3>
              <p className='text-xl'>
                3D design offers unmatched flexibility and realism, allowing you to visualise and refine your ideas before they go to production. Whether you’re in product design, architecture, or entertainment, 3D design gives you the power to explore and perfect your concepts in a virtual space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='text-center py-20'>
        <h2 className='text-4xl font-bold mb-4'>Let’s Create in 3D</h2>
        <p className='text-lg mb-6'>Ready to explore the possibilities of 3D design? Let’s collaborate and turn your vision into a stunning reality.</p>
        <Link href='/contact-us'>
          <span className='btn-outline'>Get in touch with us now</span>
        </Link>
      </section>
    </div>
  );
}
