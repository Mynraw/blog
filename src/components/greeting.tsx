import type { FC } from 'react';
import TypeWriter from './type-writer';
import Hello from './hello';

const Greeting: FC = () => {
  return (
    <section className="w-full text-lg">
      <Hello />
      <TypeWriter />
    </section>
  );
};

export default Greeting;
