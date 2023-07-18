import Head from 'next/head';
import ThemeToggler from '~/components/theme-toggler';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Arya Trying to Code</title>
        <meta name="description" content="Blog by Mynraw" />
        <meta name="author" content="Arya Açıkgöz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="rounded-xl bg-purple-800 px-3 py-2">
          asd
        </div>
        <ThemeToggler />
      </main>
    </>
  );
}
