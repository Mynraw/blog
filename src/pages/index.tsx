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
      <main className="mx-auto mt-16 flex min-h-screen max-w-5xl items-start">
        <Greeting />
        <PersonalCard />
      </main>
    </>
  );
};

export default Home;
