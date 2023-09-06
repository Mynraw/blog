import type { FC } from 'react';
import Link from 'next/link';
import {
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTrpc
} from 'react-icons/si';

const Navbar: FC = () => {
  const date: Date = new Date();

  return (
    <footer className="mx-auto px-3 pb-8 pt-16 md:flex md:items-center md:justify-between lg:max-w-5xl">
      <div className="flex items-center justify-center gap-x-2">
        <span className="dark:opacity-80">Built with</span>
        <div className="flex items-center gap-x-2 text-xl">
          <Link href={'https://www.typescriptlang.org/'} target="_blank">
            <SiTypescript />
          </Link>
          <Link href={'https://nextjs.org/'} target="_blank">
            <SiNextdotjs />
          </Link>
          <Link href={'https://www.prisma.io/'} target="_blank">
            <SiPrisma />
          </Link>
          <Link href={'https://trpc.io'} target="_blank">
            <SiTrpc />
          </Link>
          <Link href={'https://tailwindcss.com/'} target="_blank">
            <SiTailwindcss />
          </Link>
        </div>
      </div>
      <div className="mt-2 flex flex-col items-center gap-x-1 text-sm font-normal dark:opacity-80 md:mt-0 md:flex-row">
        <span>Copyright &copy; {date.getFullYear()}</span>
        <span>•</span>
        <span>Arya&apos;s blog. His attempt to be precise.</span>
      </div>
    </footer>
  );
};

export default Navbar;
