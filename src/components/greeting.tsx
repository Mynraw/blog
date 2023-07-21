import type { FC } from 'react';

const Greeting: FC = () => {
  return (
    <section className="w-full text-lg">
      <div className="flex items-center gap-x-3">
        <span className="bg-gradient-to-r from-purple-700 to-yellow-600 bg-clip-text text-7xl font-extrabold text-transparent dark:bg-gradient-to-l dark:from-lime-400 dark:to-white">
          Hello There
        </span>
        <i className="twa-4x twa-waving-hand" />
      </div>
      <p className="opacity-80">I&apos;m Arya Açıkgöz.</p>
      <p className="opacity-80">Started coding in 2022.</p>
      <p className="opacity-80">In love with web development.</p>
      <p className="opacity-80">Interested in new FrontEnd technologies.</p>
      <p className="opacity-80">Type-safe all the way.</p>
      <p className="opacity-80">Cat person.</p>
    </section>
  );
};

export default Greeting;
