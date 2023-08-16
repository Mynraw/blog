import type { AppType } from 'next/app';
import Greeting from '~/components/greeting';
import PersonalCard from '~/components/personal-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arya Trying to Code',
  authors: [{ name: 'Arya Açıkgöz', url: 'https://github.com/Mynraw' }],
  icons: '/favicon.ico',
};

const HomePage: AppType = () => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl">
      <section className="mt-8 grid grid-cols-1 items-center p-3 md:mt-16 md:p-6 lg:grid-cols-2 lg:items-start lg:justify-evenly">
        <Greeting />
        <PersonalCard />
      </section>
    </div>
  );
};

export default HomePage;
