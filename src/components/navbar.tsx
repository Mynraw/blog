import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationItems from './navigation-items';

const Navbar: FC = () => {
  return (
    <div className="sticky top-0 z-10 w-full overflow-hidden py-2 font-semibold backdrop-blur-lg supports-[backdrop-blur]:bg-white/95 xs:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-3 md:px-6 3xl:max-w-[80%]">
        <div>
          <Link href="/" passHref>
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
        <NavigationItems />
      </div>
    </div>
  );
};

export default Navbar;
