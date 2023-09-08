import type { NextPage } from 'next';
import Greeting from '~/components/greeting';
import PersonalCard from '~/components/personal-card';

const HomePage: NextPage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl">
      <section className="mt-8 grid grid-cols-1 items-center px-3 md:mt-16 xs:px-6 xs:pt-3 md:px-6 lg:grid-cols-2 lg:items-start lg:justify-between">
        <Greeting />
        <PersonalCard />
      </section>
    </div>
  );
};

export default HomePage;
