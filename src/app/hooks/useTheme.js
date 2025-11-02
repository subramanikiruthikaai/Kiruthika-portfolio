'use client';
import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else {
            setDarkMode(prefersDark);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('dark-theme', 'light-theme');
        document.documentElement.classList.add(darkMode ? 'dark-theme' : 'light-theme');
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return { darkMode, toggleTheme };
};
