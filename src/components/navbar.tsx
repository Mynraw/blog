import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggler from './theme-toggler';

const Navbar: FC = () => {
  return (
    <header className="w-full py-5">
      <div className="container mx-auto flex max-w-5xl items-center justify-between">
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
          <ul className="flex items-center gap-x-2">
            <li>
              <Link href={'/post'}>Post</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/resume'}>Resume</Link>
            </li>
            <li>
              <ThemeToggler />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
