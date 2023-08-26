'use client';

import { useState, useEffect, type FC } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill } from 'react-icons/bs';
import { LuSun } from 'react-icons/lu';

const ThemeToggler: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    }
    if (theme === 'light') {
      setTheme('dark');
    }
  };

  useEffect(() => {
    setMounted(true);

    return () => {};
  }, []);

  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        className="group absolute left-0 top-0 cursor-pointer p-3 opacity-0"
        checked={theme === 'dark' && mounted ? false : true}
        onChange={handleTheme}
      />
      <label htmlFor="checkbox" className="cursor-pointer">
        {theme === 'light' && mounted ? (
          <BsMoonStarsFill className="cursor-pointer text-lg text-[#0D0D0D]" />
        ) : (
          ''
        )}
        {theme === 'dark' && mounted ? (
          <LuSun className="cursor-pointer text-lg text-[#E59A00]" />
        ) : (
          ''
        )}
      </label>
    </>
  );
};

export default ThemeToggler;
