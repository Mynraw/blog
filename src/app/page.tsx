import type { FC } from 'react';
import ThemeToggler from '~/components/theme-toggler';

const Home: FC = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="rounded-xl bg-purple-800 px-3 py-2">asd</div>
        <ThemeToggler />
      </main>
    </>
  );
};

export default Home;
