import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

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
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={theme === 'dark' && mounted ? false : true}
        onChange={handleTheme}
      />
      <label htmlFor="theme-toggle"></label>
    </div>
  );
};

export default ThemeToggler;
