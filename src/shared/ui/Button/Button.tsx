import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    INVERTED_CLEAR = 'invertedClear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    INVERTED_BACKGROUND = 'invertedBackground',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    square = false,
    size = ButtonSize.M,
    theme = ButtonTheme.OUTLINE,
    ...rest
}) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.squre]: square,
        [cls[size]]: true,
    };

    return (
        <button
            className={classNames(cls.button, mods, [className || ''])}
            {...rest}
        >
            {children}
        </button>
    );
};
