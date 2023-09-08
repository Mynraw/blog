import type { FC } from 'react';

const Hello: FC = () => {
  return (
    <div className="mb-8 flex items-center gap-x-3">
      <h1 className="bg-gradient-to-l from-primary to-lakerAway bg-clip-text text-4xl font-extrabold text-transparent dark:bg-gradient-to-r dark:from-celtic dark:to-secondary md:text-7xl">
        Hello There
      </h1>
      <i className="twa-waving-hand h-8 w-8 md:h-16 md:w-16" />
    </div>
  );
};

export default Hello;
