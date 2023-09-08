import type { NextPage } from 'next';
import Image from 'next/image';

const ResumePage: NextPage = () => {
  return (
    <section>
      <Image
        className="mx-auto mt-16"
        src={'/wip.png'}
        alt="lfg"
        width={420}
        height={420}
        priority
      />
    </section>
  );
};

export default ResumePage;
