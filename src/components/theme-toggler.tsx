'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { BsMoon, BsFillSunFill } from 'react-icons/bs';

const ThemeToggler: FC = () => {
  const [mounted, setMounted] = useState(false);
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
    <>
      <input
        type="checkbox"
        id="checkbox"
        className="group absolute left-0 top-0 cursor-pointer p-3 opacity-0"
        checked={theme === 'dark' && mounted ? false : true}
        onChange={handleTheme}
      />
      <label htmlFor="checkbox" className="cursor-pointer">
        {theme === 'light' && mounted && (
          <BsMoon className="cursor-pointer text-xl text-[#0D0D0D]" />
        )}
        {theme === 'dark' && mounted && (
          <BsFillSunFill className="cursor-pointer text-xl text-yellow-400" />
        )}
      </label>
    </>
  );
};

export default ThemeToggler;
