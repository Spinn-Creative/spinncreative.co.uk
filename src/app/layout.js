import Script from 'next/script';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../../public/styles/all.scss';

<Script id='text-flip'
  src='/text-flip.js'>
</Script>



export const metadata = {
  title: 'Spinn Creative',
  description: 'Spinn Creative is a business-to-business creative agency, bringing cutting edge creative solutions to the commercial sector.',
  applicationName: 'Spinn Creative Website',
  keywords: 'engineers, artists, technicians, educators, academics, industry professionals, creative agency, commercial sector, scalable solutions, animation, virtual reality, affordable solutions, concept art, illustration, graphic design, 2D assets, 2D character design, environment design, model sheets, production art, storyboards, game textures, compositing, image editing, 3D assets, modelling, materials, rigging, lighting, retopology, baking, pre vis, retargeting, weight painting, procedural 3D, animation, VFX, hair simulation, cloth simulation, fur simulation, liquids simulation, camera tracking, motion capture, stop frame animation, realtime animation, data visualisation, e-commerce websites, applications, software, databases, game development',
  authors: 'Spinn Creative',
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  metadataBase: new URL('https://spinncreative.co.uk'),
  alternates: {
    canonical: 'https://www.spinncreative.co.uk'
  },
  openGraph: {
    type: 'website',
    title: 'Spinn Creative',
    author: 'Spinn Creative',
    description: 'Spinn Creative is a business-to-business creative agency, bringing cutting edge creative solutions to the commercial sector.',
  }
};

export default function RootLayout({ children }) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Spinn Creative',
    'address': 'Bristol',
    'email': 'hello@spinncreative.co.uk',
    'description': 'Spinn Creative is a business-to-business creative agency, bringing cutting edge creative solutions to the commercial sector.',
    'knowsAbout': [
      '2D Design and Development',
      '3D Design and Development',
      'Animation and VFX',
      'Web and Data',
      'Game and XR',
      'Audio'
    ],
    'url': 'https://www.spinncreative.co.uk'
  }

  return (
    <html lang="en-GB" prefix="og: https://ogp.me/ns#" itemScope itemType="https://schema.org/LocalBusiness">
      <body className='scroll-smooth' dir='ltr'>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D5YJ2RL673" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D5YJ2RL673');
        `}
      </Script>

      <Script id="ms-clarity">
        {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "mzb27qfp9g");
        `}
</Script>

        <div className="px-2">
          <Header role='header' />
            <main className="sm:container" role="main">{children}</main>
          <Footer role='footer' />
        </div>
      </body>
    </html>
  );
}
