'use client';
import { useState, useEffect } from 'react';

export default function DarkToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // 1) Read stored or system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');

    // 2) Apply it
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');

    console.log('DarkToggle mounted, initial theme:', initial);

    // 3) Listen for cross-tab changes
    const onStorage = (e) => {
      if (e.key === 'theme' && e.newValue) {
        setTheme(e.newValue);
        document.documentElement.classList.toggle('dark', e.newValue === 'dark');
        console.log('Theme changed via storage to:', e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
    console.log('Toggled theme to:', next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-2 top-2 rounded-4xl p-4
                 bg-white text-black
                 dark:bg-amber-300 dark:text-blue-700"
    >
      {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
}
