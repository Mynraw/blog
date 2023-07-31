import type { AppType } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import Layout from '~/components/layout';
import { api } from '~/utils/api';
import '~/styles/globals.css';
import '~/styles/twemoji.css';

const MyBlog: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyBlog);