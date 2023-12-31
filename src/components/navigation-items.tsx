'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from './theme-toggler';

const NavigationItems: FC = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default NavigationItems;
