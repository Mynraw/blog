import type { FC } from 'react';

const Greeting: FC = () => {
  return (
    <>
      <div className="flex items-center gap-x-3">
        <span className="text-5xl">Merhaba</span>{' '}
        <i className="twa-4x twa-waving-hand" />
      </div>
      <p className="opacity-80">Ben Arya Açıkgöz.</p>
      <p className="opacity-80">Kodlamaya 2022 yılında başladım.</p>
      <p className="opacity-80">Web geliştirmeyi seviyorum.</p>
      <p className="opacity-80">
        FrontEnd teknolojileriyle yakından ilgileniyorum.
      </p>
      <p className="opacity-80">Kedi insanıyım.</p>
    </>
  );
};

export default Greeting;
