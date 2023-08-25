import { FC, ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { LOCALSTORAGE_THEME_KEY } from '@/shared/const/localstarage';

const defaultTheme =
    (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.LIGTH;

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
