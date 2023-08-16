import TypeWriter from './type-writer';
import Hello from './hello';

const Greeting = () => {
  return (
    <section className="w-full text-lg">
      <Hello />
      <div className="opacity-80">
        <TypeWriter />
      </div>
    </section>
  );
};

export default Greeting;
