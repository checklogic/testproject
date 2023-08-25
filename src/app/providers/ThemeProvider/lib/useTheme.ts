/* eslint-disable indent */
import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { LOCALSTORAGE_THEME_KEY } from '@/shared/const/localstarage';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.LIGTH:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.THIRD;
                break;
            case Theme.THIRD:
                newTheme = Theme.LIGTH;
                break;
            default:
                newTheme = Theme.LIGTH;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    };
    document.body.className = theme || Theme.LIGTH;
    return { theme: theme || Theme.LIGTH, toggleTheme };
}
