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
    <div>
      <input
        type="checkbox"
        id="checkbox"
        className="group absolute cursor-pointer p-3 opacity-0 checked:translate-x-6"
        checked={theme === 'dark' && mounted ? false : true}
        onChange={handleTheme}
      />
      <label htmlFor="checkbox" className="h-full w-full cursor-pointer">
        {theme === 'light' && mounted && (
          <BsMoon className="text-xl text-[#0D0D0D]" />
        )}
        {theme === 'dark' && mounted && (
          <BsFillSunFill className="text-xl text-yellow-400" />
        )}
      </label>
    </div>
  );
};

export default ThemeToggler;
