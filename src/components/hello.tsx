import type { FC } from 'react';

const Hello: FC = () => {
  return (
    <div className="mb-8 flex items-center gap-x-3">
      <h1 className="bg-gradient-to-r from-purple-700 to-yellow-600 bg-clip-text text-4xl font-extrabold text-transparent dark:bg-gradient-to-l dark:from-lime-400 dark:to-white md:text-7xl">
        Hello There
      </h1>
      <i className="twa-waving-hand h-8 w-8 md:h-16 md:w-16" />
    </div>
  );
};

export default Hello;
