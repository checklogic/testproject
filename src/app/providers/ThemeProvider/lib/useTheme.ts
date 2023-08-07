import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { LOCALSTORAGE_THEME_KEY } from 'shared/const/localstarage';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme: Theme = theme === Theme.DARK ? Theme.LIGTH : Theme.DARK;

        setTheme?.(newTheme);
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    };
    document.body.className = theme || Theme.LIGTH;
    return { theme: theme || Theme.LIGTH, toggleTheme };
}
