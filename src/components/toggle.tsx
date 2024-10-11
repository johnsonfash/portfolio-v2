import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tdigital_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tdigital_theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('tdigital_theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <label className="inline-flex lg:ml-3 mt-6 mb-3 lg:mb-0 lg:mt-0 items-center cursor-pointer">
      <input checked={isDark} onChange={toggleTheme} type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4E29C4]"></div>
    </label>
  )
}

export default DarkModeToggle