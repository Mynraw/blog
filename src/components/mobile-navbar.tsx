import type { FC } from 'react';
import MobileNavigationItems from './mobile-navigation-items';

const MobileNavbar: FC = () => {
  return (
    <div className="sticky bottom-0 w-full overflow-hidden border-t border-primary border-opacity-20 backdrop-blur-lg supports-[backdrop-blur]:bg-white/95 dark:border-secondary dark:border-opacity-20 sm:hidden">
      <div className="mx-auto">
        <MobileNavigationItems />
      </div>
    </div>
  );
};

export default MobileNavbar;
