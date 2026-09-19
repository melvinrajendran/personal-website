import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Meddon, Poppins, Raleway } from 'next/font/google';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const raleway = Raleway({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-poppins',
});
const meddon = Meddon({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-meddon',
});

export const metadata: Metadata = {
  title: {
    default: 'Melvin Rajendran | A Software Engineer',
    template: 'Melvin Rajendran | A Software Engineer | %s',
  },
  description: "Hey, I'm Melvin. A software engineer. Learn more about me.",
  keywords: [
    'Melvin Rajendran',
    'code',
    'coding',
    'program',
    'programming',
    'web development',
    'web dev',
    'software',
    'development',
    'software development',
    'computer',
    'science',
    'computer science',
    'CS',
    'New Jersey',
    'NJ',
    'Maryland',
    'MD',
    'high school',
    'South Brunswick',
    'SB',
    'South Brunswick High School',
    'SBHS',
    'university',
    'college',
    'University of Maryland',
    'UMD',
    'College Park',
    'Java',
    'java',
    'Python',
    'py',
    'C#',
    'cs',
    'JavaScript',
    'JS',
    'js',
    'HTML',
    'html',
    'CSS',
    'css',
    'blog',
    'blogger',
    'work',
    'Code Ninjas',
    'CN',
    'PayPal',
    'Venmo',
  ],
  authors: [{ name: 'Melvin Rajendran' }],
  icons: {
    icon: '/icons/black/favicon.ico',
    apple: '/icons/black/logo192.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#fdfcfa',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${poppins.variable} ${meddon.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Navigation />
        {children}
        <Footer />
        <Script
          src="https://kit.fontawesome.com/8b9758e658.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JV6P6H449Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-JV6P6H449Z');
          `}
        </Script>
      </body>
    </html>
  );
};

export default RootLayout;
