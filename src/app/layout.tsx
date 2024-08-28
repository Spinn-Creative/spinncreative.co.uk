import type { Metadata } from 'next';

import Script from 'next/script';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../../public/styles/all.scss';

export const metadata: Metadata = {
  title: 'Spinn Creative',
  description: 'Spinn Creative is a business-to-business creative agency in the UK, bringing cutting edge creative solutions to the commercial sector.',
  applicationName: 'Spinn Creative',
  authors: [
    { 
      name: 'Spinn Creative', url: 'https://www.spinncreative.co.uk',
    }
  ],
  referrer: 'origin-when-cross-origin',
  keywords: 'graphics design, 3d modelling, animation',
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
    title: 'Spinn Creative',
    description: 'Spinn Creative is a business-to-business creative agency in the UK, bringing cutting edge creative solutions to the commercial sector.',
    siteName: 'Spinn Creative',
    url: 'https://www.spinncreative.co.uk',
    images: [
      {
        url: '',
        alt: '',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spinn Creative',
    description: 'Spinn Creative is a business-to-business creative agency in the UK, bringing cutting edge creative solutions to the commercial sector.',
    images: [
      '', //absolute url
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Spinn Creative',
    'address': 'United Kingdom',
    'email': 'hello@spinncreative.co.uk',
    'description': 'Spinn Creative is a business-to-business creative agency in the UK, bringing cutting edge creative solutions to the commercial sector.',
    'knowsAbout': [
      'graphics design',
      '3d modelling',
      'animation',
    ],
    'url': 'https://www.spinncreative.co.uk',
  }

  return (
    <html className='scroll-smooth' lang='en-GB' prefix='og: https://ogp.me/ns#' itemScope itemType='https://schema.org/LocalBusiness'>
      <body dir='ltr'>

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

        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
