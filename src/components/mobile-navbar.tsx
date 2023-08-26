import type { FC } from 'react';
import Link from 'next/link';
import ThemeToggler from './theme-toggler';
import { LuHome, LuBookMarked, LuCode2, LuFileBadge } from 'react-icons/lu';

const MobileNavbar: FC = () => {
  return (
    <div className="sticky bottom-0 w-full overflow-hidden py-3 backdrop-blur-lg supports-[backdrop-blur]:bg-white/95 sm:hidden">
      <div className="mx-auto">
        <nav>
          <ul className="flex items-center justify-evenly">
            <li className="px-3">
              <Link href={'/'}>
                <LuHome className="text-xl" />
              </Link>
            </li>
            <div className="h-8 border-r border-black opacity-50 dark:border-white" />
            <li className="px-3">
              <Link href={'/blog'}>
                <LuBookMarked className="text-xl" />
              </Link>
            </li>
            <div className="h-8 border-r border-black opacity-50 dark:border-white" />
            <li className="px-3">
              <Link href={'/about'}>
                <LuCode2 className="text-xl" />
              </Link>
            </li>
            <div className="h-8 border-r border-black opacity-50 dark:border-white" />
            <li className="px-3">
              <Link href={'/resume'}>
                <LuFileBadge className="text-xl" />
              </Link>
            </li>
            <div className="h-8 border-r border-black opacity-50 dark:border-white" />
            <li className="px-3">
              <ThemeToggler />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
