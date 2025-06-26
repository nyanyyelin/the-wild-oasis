import { IoSunnyOutline } from 'react-icons/io5';
import { FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const ToggleDarkMode = () => {
  const [isDark, setIsDark] = useState('');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex gap-5">
      <button className="hover:text-red-500" onClick={() => setIsDark('')}>
        <IoSunnyOutline />
      </button>
      <button
        className="hover:text-yellow-500"
        onClick={() => setIsDark('dark')}
      >
        <FiMoon />
      </button>
    </div>
  );
};

export default ToggleDarkMode;
