import type { NextPage } from 'next';
import Image from 'next/image';

const BlogPage: NextPage = () => {
  return (
    <section className="min-h-screen">
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

export default BlogPage;
