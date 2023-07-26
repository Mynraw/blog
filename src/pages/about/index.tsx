import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const AboutPage: NextPage = () => {
  return (
    <section className="min-h-screen">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Arya Açıkgöz" key={'author'}></meta>
        <title key={'title'}>About - Arya Açıkgöz - Arya Trying to Code</title>
      </Head>
      <Image
        className="mx-auto mt-16"
        src={'/wip.png'}
        alt="lfg"
        width={420}
        height={420}
      />
    </section>
  );
};

export default AboutPage;
