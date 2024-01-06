'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from './theme-toggler';
import Image from 'next/image';

const NavigationItems: FC = () => {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex max-w-5xl items-center justify-between px-3 md:px-6 3xl:max-w-[80%]">
      <div>
        <Link href="/">
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
      <nav>
        <ul role="list" className="flex items-center gap-x-1">
          <li>
            <Link
              className={`rounded-lg px-2 py-1 transition-colors ease-linear hover:bg-lakerAway hover:text-secondary dark:hover:bg-celtic dark:hover:text-primary ${
                pathname === '/blog' && 'bg-lakerAway dark:bg-celtic'
              }`}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`cursor-pointer rounded-lg px-2 py-1 transition-colors ease-linear hover:bg-lakerAway hover:text-secondary dark:hover:bg-celtic dark:hover:text-primary ${
                pathname === '/resume' && 'bg-lakerAway dark:bg-celtic'
              }`}
              href="/resume"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              className={`cursor-pointer rounded-lg px-2 py-1 transition-colors ease-linear hover:bg-lakerAway hover:text-secondary dark:hover:bg-celtic dark:hover:text-primary ${
                pathname === '/snippets' && 'bg-lakerAway dark:bg-celtic'
              }`}
              href="/snippets"
            >
              Snippets
            </Link>
          </li>
          <li>
            <Link
              className={`cursor-pointer rounded-lg px-2 py-1 transition-colors ease-linear hover:bg-lakerAway hover:text-secondary dark:hover:bg-celtic dark:hover:text-primary ${
                pathname === '/about' && 'bg-lakerAway dark:bg-celtic'
              }`}
              href="/about"
            >
              About
            </Link>
          </li>
          <ThemeToggler mobileResolution={false} />
        </ul>
      </nav>
    </div>
  );
};

export default NavigationItems;
