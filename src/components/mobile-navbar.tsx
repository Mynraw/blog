import type { FC } from 'react';
import Link from 'next/link';
import ThemeToggler from './theme-toggler';
import { LuHome, LuBookMarked, LuCode2, LuFileBadge } from 'react-icons/lu';

const MobileNavbar: FC = () => {
  return (
    <div className="sticky bottom-0 w-full overflow-hidden border-t border-primary border-opacity-20 backdrop-blur-lg supports-[backdrop-blur]:bg-white/95 dark:border-secondary dark:border-opacity-20 sm:hidden">
      <div className="mx-auto">
        <nav className="flex items-center justify-evenly py-2">
          <Link className="p-2" href="/">
            <LuHome className="text-xl" />
          </Link>
          <div className="h-7 border-r border-primary opacity-30 dark:border-secondary" />
          <Link className="p-2" href="/blog">
            <LuBookMarked className="text-xl" />
          </Link>
          <div className="h-7 border-r border-primary opacity-30 dark:border-secondary" />
          <Link className="p-2" href="/about">
            <LuCode2 className="text-xl" />
          </Link>
          <div className="h-7 border-r border-primary opacity-30 dark:border-secondary" />
          <Link className="p-2" href="/resume">
            <LuFileBadge className="text-xl" />
          </Link>
          <div className="h-7 border-r border-primary opacity-30 dark:border-secondary" />
          <ThemeToggler mobileResolution />
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
