import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arya Trying to Code</title>
        <meta name="description" content="Blog by Mynraw" />
        <meta name="author" content="Arya Açıkgöz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <span> hi </span>
        <i className="twa-5x twa-waving-hand" />
      </main>
    </>
  );
};

export default Home;
