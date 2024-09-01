import Link from 'next/link';

export default function Hero() {
  return (
    <section className='homepage-hero flex flex-col items-center justify-center text-center py-12 md:py-20'>
      <div className='container flex flex-col items-center'>
        <h1 className='text-3xl md:text-4xl font-bold mb-4 text-black'>
          Welcome to Spinn Creative
        </h1>
        <p className='text-base md:text-lg max-w-xs md:max-w-lg mb-4 md:mb-6'>
          At Spinn Creative, we bring your visions to life with cutting-edge creativity and a passion for perfection. Specialising in graphic design, branding and identity, 3D design, and animation, we transform ideas into captivating visual experiences that resonate with your audience.
        </p>
        <p className='text-base md:text-lg max-w-xs md:max-w-lg mb-4 md:mb-6'>
          Whether you're launching a new brand, revitalising an existing one, or creating stunning animations, we're here to help you stand out in a crowded marketplace.
        </p>
        <p className='text-base md:text-lg max-w-xs md:max-w-lg mb-4 md:mb-6'>
          Discover our work and see how we can elevate your brand to the next level.
        </p>
        <p className='text-base md:text-lg max-w-xs md:max-w-lg mb-4 md:mb-6'>
          Let’s Create Something Amazing Together.
        </p>
        <Link href='/about-us'>
          <span className='btn-outline'>
            Find out more about us
          </span>
        </Link>
      </div>
    </section>
  );
}
