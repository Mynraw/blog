import type { RootLayoutProps } from '~/types/root';
import { ClerkProvider } from '@clerk/nextjs';
import '~/styles/globals.css';
import '~/styles/twemoji.css';
import { Inter } from 'next/font/google';
import Navbar from '~/components/navbar';
import { ThemeProvider } from '~/components/theme-provider';
import type { Metadata } from 'next/types';

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
          <ThemeProvider attribute="class" enableColorScheme>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
