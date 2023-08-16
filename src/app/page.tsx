import type { NextPage } from 'next';
import Greeting from '~/components/greeting';
import PersonalCard from '~/components/personal-card';

const HomePage: NextPage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl">
      <section className="mt-8 grid grid-cols-1 items-center p-3 md:mt-16 md:p-6 lg:grid-cols-2 lg:items-start lg:justify-between">
        <Greeting />
        <PersonalCard />
      </section>
    </div>
  );
};

export default HomePage;
