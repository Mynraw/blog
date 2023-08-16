import type { Metadata } from 'next';
import type { RootLayoutProps } from '~/types/root';
import { ClerkProvider } from '@clerk/nextjs';
import '~/styles/globals.css';
import '~/styles/twemoji.css';
import { Inter } from 'next/font/google';
import Navbar from '~/components/navbar';
import { ThemeProvider } from '~/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metaData: Metadata = {
  title: 'Experimental metadata',
};

const RootLayout = ({ children }: { children: keyof RootLayoutProps }) => {
  return (
    <html lang="en">
      <head />
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
