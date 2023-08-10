import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    INVERTED_CLEAR = 'invertedClear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
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
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(function Button({
    className,
    children,
    square = false,
    size = ButtonSize.M,
    theme = ButtonTheme.OUTLINE,
    disabled = false,
    ...rest
}: ButtonProps) {
    const mods: Mods = {
        [cls[theme]]: true,
        [cls.squre]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(cls.button, mods, [className])}
            {...rest}
        >
            {children}
        </button>
    );
});
