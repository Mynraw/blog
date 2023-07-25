import type { NextPage } from 'next';
import Head from 'next/head';
import Greeting from '~/components/greeting';
import PersonalCard from '~/components/personal-card';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arya Trying to Code</title>
        <meta name="description" content="Blog by Mynraw" />
        <meta name="author" content="Arya Açıkgöz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto min-h-screen max-w-5xl">
        <div className="mt-8 grid grid-cols-1 items-center p-3 md:mt-16 md:p-6 lg:grid-cols-2 lg:items-start">
          <Greeting />
          <PersonalCard />
        </div>
      </main>
    </>
  );
};

export default Home;
