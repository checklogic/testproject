import { createContext } from 'react';

export enum Theme {
    LIGTH = 'app_light_theme',
    DARK = 'app_dark_theme',
    THIRD = 'app_third_theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
