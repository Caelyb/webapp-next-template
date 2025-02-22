"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  return (
    <nav className="p-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
      <ul className="flex gap-4">
        <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
        <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
      </ul>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition duration-300"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
