import type { FC } from 'react';

import NavigationItems from './navigation-items';

const Navbar: FC = () => {
  return (
    <div className="sticky top-0 z-10 w-full overflow-hidden py-2 font-semibold backdrop-blur-lg supports-[backdrop-blur]:bg-white/95 xs:hidden">
      <NavigationItems />
    </div>
  );
};

export default Navbar;
