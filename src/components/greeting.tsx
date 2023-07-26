import type { FC } from 'react';
import TypewriterComponent from 'typewriter-effect';
import { greeting } from '~/data/typewriterData';
import type { TypeEffectProps } from '~/types/typeEffect';

const typeEffectOptions: TypeEffectProps = {
  autoStart: true,
  loop: true,
  delay: 50,
  strings: greeting,
  deleteSpeed: 10,
  skipAddStyles: true,
};

const Greeting: FC = () => {
  return (
    <section className="w-full text-lg">
      <div className="mb-8 flex items-center gap-x-3">
        <h1 className="bg-gradient-to-r from-purple-700 to-yellow-600 bg-clip-text text-4xl font-extrabold text-transparent dark:bg-gradient-to-l dark:from-lime-400 dark:to-white md:text-7xl">
          Hello There
        </h1>
        <i className="twa-waving-hand h-8 w-8 md:h-16 md:w-16" />
      </div>
      <div className="opacity-80">
        <TypewriterComponent options={typeEffectOptions} />
      </div>
    </section>
  );
};

export default Greeting;
