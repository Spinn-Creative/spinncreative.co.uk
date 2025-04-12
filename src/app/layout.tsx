import type { Metadata } from 'next';
import Script from 'next/script';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../../public/styles/all.scss';

export const title = 'Spinn Creative';
export const description =
  'Spinn Creative is a business-to-business creative agency in the UK, bringing cutting edge creative solutions to the commercial sector.';

export const metadata: Metadata = {
  title: `${title}`,
  description: `${description}`,
  applicationName: 'Spinn Creative',
  authors: [
    {
      name: 'Spinn Creative',
      url: 'https://www.spinncreative.co.uk',
    },
  ],
  referrer: 'origin-when-cross-origin',
  keywords: 'graphics, 3d modelling, animation',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://spinncreative.co.uk'),
  openGraph: {
    title: 'Spinn Creative',
    description: `${description}`,
    siteName: 'Spinn Creative',
    url: 'https://www.spinncreative.co.uk',
    images: [
      {
        url: 'https://www.spinncreative.co.uk/images/meta-image.jpg',
        alt: 'Spinn Creative Meta Image',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spinn Creative',
    description: `${description}`,
    images: ['https://www.spinncreative.co.uk/images/meta-image.jpg'],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Spinn Creative',
    address: 'United Kingdom',
    email: 'hello@spinncreative.co.uk',
    description: `${description}`,
    knowsAbout: ['graphics', '3d modelling', 'animation'],
    url: 'https://www.spinncreative.co.uk',
  };

  return (
    <html
      className="scroll-smooth"
      lang="en-GB"
      prefix="og: https://ogp.me/ns#"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
    <body dir="ltr">
    {/* Analytics */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-D5YJ2RL673"
    />
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

    {/* JSON-LD Structured Data */}
    <Script id="json-ld" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>

    <Header />
    <main>{children}</main>
    <Footer />

    {/* Frontend JS functionality */}
    <Script src="/scripts/js/sticky.js" strategy="afterInteractive" />
    <Script src="/scripts/js/animations.js" strategy="afterInteractive" />
    <Script src="/scripts/js/filter.js" strategy="afterInteractive" />

    </body>
    </html>
  );
}
