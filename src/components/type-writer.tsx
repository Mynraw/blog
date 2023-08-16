'use client';

import type { FC } from 'react';
import type { TypeEffectProps } from '~/types/typeEffect';
import TypewriterComponent from 'typewriter-effect';
import { greeting } from '~/data/typewriterData';

const typeEffectOptions: TypeEffectProps = {
  autoStart: true,
  loop: true,
  delay: 50,
  strings: greeting,
  deleteSpeed: 10,
  skipAddStyles: true,
};

const TypeWriter: FC = () => {
  return (
    <div className="relative z-0 text-black dark:text-white dark:opacity-80">
      <TypewriterComponent options={typeEffectOptions} />
    </div>
  );
};

export default TypeWriter;
