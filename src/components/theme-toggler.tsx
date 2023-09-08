'use client';

import { useState, useEffect, type FC } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill } from 'react-icons/bs';
import { LuSun } from 'react-icons/lu';

const ThemeToggler: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

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
        <BsMoonStarsFill className="cursor-pointer text-lg text-[#0D0D0D]" />
      )}
      {theme === 'dark' && mounted && (
        <LuSun className="cursor-pointer text-lg text-[#E59A00]" />
      )}
    </button>
  );
};

export default ThemeToggler;
