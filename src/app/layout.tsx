import type { RootLayoutProps } from '~/types/rootLayout';
import type { Metadata } from 'next/types';
import { ClerkProvider } from '@clerk/nextjs';
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
};

const RootLayout = ({ children }: { children: keyof RootLayoutProps }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider
            defaultTheme="dark"
            attribute="class"
            enableColorScheme
          >
            <Navbar />
            <main>{children}</main>
            <Footer />
            <MobileNavbar />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
