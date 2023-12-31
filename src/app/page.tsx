import type { NextPage } from 'next';
import Greeting from '~/components/greeting';
import Introduction from '~/components/introduction';
import PersonalCard from '~/components/personal-card';
import ShortRedirects from '~/components/short-redirects';

const HomePage: NextPage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl 3xl:max-w-[80%]">
      <section className="mt-8 grid grid-cols-1 items-center px-3 md:mt-16 md:px-6 lg:grid-cols-2 lg:items-start lg:justify-between xs:mt-3 xs:px-3 xs:pt-3">
        <div className="flex flex-col gap-y-8">
          <Greeting />
          <Introduction />
          <ShortRedirects />
        </div>
        <PersonalCard />
      </section>
    </div>
  );
};

export default HomePage;
