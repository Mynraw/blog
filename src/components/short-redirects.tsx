import type { FC } from 'react';
import Link from 'next/link';

const ShortRedirects: FC = () => {
  return (
    <section className="flex flex-col gap-y-1 text-[18px]">
      <Link
        href="/snippets"
        className="flex items-center gap-x-2 py-1 hover:underline"
      >
        <i className="twa twa-x twa-atom-symbol" />
        <span>Little helpful snippets</span>
      </Link>
      <Link
        href="/resume"
        className="flex items-center gap-x-2 py-1 hover:underline"
      >
        <i className="twa twa-x twa-poop" />
        <span>My memeful career</span>
      </Link>
      <Link
        href="/blog"
        className="flex items-center gap-x-2 py-1 hover:underline"
      >
        <i className="twa twa-x twa-eyes" />
        <span>My writings</span>
      </Link>
      <Link
        href="/about"
        className="flex items-center gap-x-2 py-1 hover:underline"
      >
        <i className="twa twa-x twa-boom" />
        <span>Wanna know more about me?</span>
      </Link>
    </section>
  );
};

export default ShortRedirects;
