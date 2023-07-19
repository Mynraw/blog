import { ThemeProvider } from 'next-themes';
import { ClerkProvider } from '@clerk/nextjs';
import type { AppType } from 'next/app';
import { api } from '~/utils/api';
import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
