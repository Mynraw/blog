import type { RootLayoutProps } from '~/types/rootLayout';
import type { Metadata } from 'next/types';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '~/components/theme-provider';
import Navbar from '~/components/navbar';
import MobileNavbar from '~/components/mobile-navbar';
import Footer from '~/components/footer';
import { Inter } from 'next/font/google';
import '~/styles/globals.css';
import '~/styles/twemoji.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arya Trying to Code',
  authors: [{ name: 'Arya Açıkgöz', url: 'https://github.com/Mynraw' }],
  icons: '/favicon.ico',
  description: "Arya Trying to Code - Arya's Blog",
  applicationName: "Arya Trying to Code - Arya's Blog",
  generator:
    'arya, acikgoz, açıkgöz, aryaacikgoz, nextjs, react, typescript, blog',
  referrer: 'origin',
  creator: 'Arya Açıkgöz',
  publisher: 'Arya Açıkgöz',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.aryaacikgoz.com',
    title: 'Arya Trying to Code',
    description: "Arya Trying to Code - Arya's blog",
    images: '/card.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://x.com/typeofvirtual',
    creator: '@typeofvirtual',
    images: '/card.png',
  },
  appleWebApp: {
    capable: true,
    title: "Arya Trying to Code - Arya's Blog",
    statusBarStyle: 'black-translucent',
  },
  metadataBase: new URL('https://aryaacikgoz.com'),
};

const RootLayout = ({ children }: { children: keyof RootLayoutProps }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" attribute="class" enableColorScheme>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileNavbar />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
