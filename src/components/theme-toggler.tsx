'use client';

import { useTheme } from 'next-themes';
import type { FC } from 'react';

const ThemeToggler: FC = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    }
    if (theme === 'light') {
      setTheme('dark');
    }
  };

  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={theme === 'dark' ? true : false}
        onChange={handleTheme}
      />
      <label htmlFor="theme-toggle"></label>
    </div>
  );
};

export default ThemeToggler;
