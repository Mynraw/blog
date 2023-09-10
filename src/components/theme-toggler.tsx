'use client';

import { useState, useEffect, type FC } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill } from 'react-icons/bs';
import { LuSun } from 'react-icons/lu';
import type { ThemeTogglerProps } from '~/types/themeToggler';

const ThemeToggler: FC<ThemeTogglerProps> = (props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const { mobileResolution } = props;

  useEffect(() => setMounted(true), []);

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    }
    if (theme === 'light') {
      setTheme('dark');
    }
  };

  return (
    <button
      type="button"
      id="checkbox"
      className="cursor-pointer p-1"
      onClick={handleTheme}
    >
      {theme === 'light' && mounted && (
        <BsMoonStarsFill
          className={`cursor-pointer text-[#0D0D0D] ${
            mobileResolution ? 'text-xl' : 'text-lg'
          }`}
        />
      )}
      {theme === 'dark' && mounted && (
        <LuSun
          className={`cursor-pointer text-[#E59A00] ${
            mobileResolution ? 'text-xl' : 'text-lg'
          }`}
        />
      )}
    </button>
  );
};

export default ThemeToggler;
