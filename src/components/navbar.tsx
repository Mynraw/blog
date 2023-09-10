import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggler from './theme-toggler';

const Navbar: FC = () => {
  return (
    <div className="sticky top-0 z-10 w-full overflow-hidden py-2 font-semibold backdrop-blur-lg supports-[backdrop-blur]:bg-white/95 xs:hidden">
      <div className="3xl:max-w-[80%] mx-auto flex max-w-5xl items-center justify-between px-3 md:px-6">
        <div>
          <Link href={'/'}>
            <Image
              src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yU2hGVVdzMnJBM2J0ZTZGeE8yN2VsY1R0UFUuZ2lmIn0"
              alt="Mynraw"
              width={50}
              height={50}
              priority
              className="rounded-full"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-x-1">
          <Link
            className="cursor-pointer rounded-lg px-2 py-1 transition-colors ease-linear hover:bg-lakerAway hover:text-secondary dark:hover:bg-celtic dark:hover:text-primary"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="cursor-pointer rounded-lg px-2 py-1 transition-colors ease-linear hover:bg-lakerAway hover:text-secondary dark:hover:bg-celtic dark:hover:text-primary"
            href="/resume"
          >
            Resume
          </Link>
          <Link
            className="cursor-pointer rounded-lg px-2 py-1 transition-colors ease-linear hover:bg-lakerAway hover:text-secondary dark:hover:bg-celtic dark:hover:text-primary"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="cursor-pointer rounded-lg px-2 py-1 transition-colors ease-linear hover:bg-lakerAway hover:text-secondary dark:hover:bg-celtic dark:hover:text-primary"
            href="/about"
          >
            About
          </Link>
          <ThemeToggler mobileResolution={false} />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
