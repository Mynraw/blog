import type { FC } from 'react';
import type { HeaderProps } from '~/types/header';

const Header: FC<HeaderProps> = (props) => {
  const { title, label, lastUpdated } = props;

  return (
    <div className="border-b border-primary border-opacity-50 pb-12 dark:border-secondary dark:border-opacity-50">
      <h1 className="mb-12 text-3xl font-extrabold md:text-6xl xs:text-4xl">
        {title}
      </h1>
      <div className="flex items-center justify-between xs:flex-col xs:items-start xs:gap-y-4">
        <p className="m-0 dark:text-opacity-40">{label}</p>
        {lastUpdated && (
          <strong className="text-sm">
            Last Updated:{' '}
            <span className="font-light italic">{lastUpdated}</span>
          </strong>
        )}
      </div>
    </div>
  );
};

export default Header;
