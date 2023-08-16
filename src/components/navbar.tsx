import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggler from './theme-toggler';

const Navbar: FC = () => {
  return (
    <div className="sticky top-0 w-full py-3 font-semibold backdrop-blur supports-[backdrop-blur]:bg-white/95">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 lg:max-w-5xl">
        <div>
          <Link href={'/'}>
            <Image
              src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yU2hGVVdzMnJBM2J0ZTZGeE8yN2VsY1R0UFUuZ2lmIn0"
              alt="Mynraw"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-x-6">
            <li className="cursor-pointer rounded-md py-2 transition-colors ease-linear hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10">
              <Link className="px-3 py-2" href={'/blog'}>
                Blog
              </Link>
            </li>
            <li className="dark:hover: cursor-pointer rounded-md py-2 transition-colors ease-linear hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10">
              <Link className="px-3 py-2" href={'/about'}>
                About
              </Link>
            </li>
            <li className="dark:hover: cursor-pointer rounded-md py-2 transition-colors ease-linear hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10">
              <Link className="px-3 py-2" href={'/resume'}>
                Resume
              </Link>
            </li>
            <li className="relative cursor-pointer">
              <ThemeToggler />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
