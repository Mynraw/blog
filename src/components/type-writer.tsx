'use client';

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

const TypeWriter: FC = () => {
  return (
    <div className="opacity-80">
      <TypewriterComponent options={typeEffectOptions} />
    </div>
  );
};

export default TypeWriter;
