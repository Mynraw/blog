'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from './theme-toggler';
import { LuHome, LuCode2, LuFileBadge, LuBookMarked } from 'react-icons/lu';

const MobileNavigationItems: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-evenly pb-3.5 pt-2">
      <Link className="p-2" href="/">
        <LuHome
          className={`text-xl transition-all ${
            pathname === '/' && 'text-lakerAway dark:text-celtic'
          }`}
        />
      </Link>
      <Link className="p-2" href="/blog">
        <LuBookMarked
          className={`text-xl transition-all ${
            pathname === '/blog' && 'text-lakerAway dark:text-celtic'
          }`}
        />
      </Link>

      <Link className="p-2" href="/resume">
        <LuFileBadge
          className={`text-xl transition-all ${
            pathname === '/resume' && 'text-lakerAway dark:text-celtic'
          }`}
        />
      </Link>

      <Link className="p-2" href="/snippets">
        <LuCode2
          className={`text-xl transition-all ${
            pathname === '/snippets' && 'text-lakerAway dark:text-celtic'
          }`}
        />
      </Link>

      <ThemeToggler mobileResolution />
    </nav>
  );
};

export default MobileNavigationItems;
