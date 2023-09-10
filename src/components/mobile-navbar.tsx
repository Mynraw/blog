import type { FC } from 'react';
import Link from 'next/link';
import ThemeToggler from './theme-toggler';
import { LuHome, LuBookMarked, LuCode2, LuFileBadge } from 'react-icons/lu';

const MobileNavbar: FC = () => {
  return (
    <div className="sticky bottom-0 w-full overflow-hidden border-t border-primary border-opacity-20 py-2 backdrop-blur-lg supports-[backdrop-blur]:bg-white/95 dark:border-secondary dark:border-opacity-20 sm:hidden">
      <div className="mx-auto">
        <nav>
          <ul className="flex items-center justify-evenly">
            <li className="px-3">
              <Link className="p-1" href={'/'}>
                <LuHome className="text-2xl" />
              </Link>
            </li>
            <div className="h-7 border-r border-primary opacity-30 dark:border-secondary" />
            <li className="px-3">
              <Link className="p-1" href={'/blog'}>
                <LuBookMarked className="text-2xl" />
              </Link>
            </li>
            <div className="h-7 border-r border-primary opacity-30 dark:border-secondary" />
            <li className="px-3">
              <Link className="p-1" href={'/about'}>
                <LuCode2 className="text-2xl" />
              </Link>
            </li>
            <div className="h-7 border-r border-primary opacity-30 dark:border-secondary" />
            <li className="px-3">
              <Link className="p-1" href={'/resume'}>
                <LuFileBadge className="text-2xl" />
              </Link>
            </li>
            <div className="h-7 border-r border-primary opacity-30 dark:border-secondary" />
            <li className="px-3">
              <ThemeToggler mobileResolution />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
