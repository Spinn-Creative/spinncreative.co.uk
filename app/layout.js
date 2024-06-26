import Header from './components/Header';
import Footer from './components/Footer';

import './assets/styles/all.scss';

import Script from 'next/script';

export const metadata = {
  title: 'Spinn Creative',
  description: 'Spinn Creative is a Bristol-based agency that develops creative technology for businesses and consumers.',
  applicationName: 'Spinn Creative Website',
  keywords: 'art direction, sound design, music production, video game development',
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
    description: 'Spinn Creative is a Bristol-based agency that develops creative technology for businesses and consumers.',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
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

        <div className="px-2">
          <Header role='header' />
            <main className="sm:container" role="main">{children}</main>
          <Footer role='footer' />
        </div>
      </body>
    </html>
  );
}
